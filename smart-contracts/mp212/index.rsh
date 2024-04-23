"reach 0.1";

// INTERFACE SELECTORS

const INTERFACE_SELECTOR_MP212 = "0x00000000";

// - Supported interface

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

const Swap = Struct([
  ["collectionId", Contract], // arc72 application id
  ["tokenId", UInt256], // arc72 token ids
  ["collectionId2", Contract], // arc72 application id (2)
  ["tokenId2", UInt256], // arc72 token ids (2)
  ["endTime", UInt], // end time
]);

const BaseState = Struct([["manager", Address]]);

const MP212State = Struct([
  ...Struct.fields(BaseState),
  ["locked", Bool],
  ["fee", UInt256],
  ["fTok", Contract],
  ["swapCount", UInt256],
]);

// MP212 - Swaps

const MP212 = (State) =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });
    const supportedInterfaces = [Bytes.fromHex(INTERFACE_SELECTOR_MP212)];
    const Params = Object({
      beacon: Contract,
      fTok: Contract,
      fee: UInt256,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const SwapA = API("a_swap", {
      list: Fun(
        [
          Contract, // CollectionId
          UInt256, // TokenId
          Contract, // CollectionId
          UInt256, // TokenId
          UInt, // EndTime
        ],
        UInt256
      ), // (CollectionId, TokenId, CollectionId, TokenId, EndTime)ListId
      execute: Fun([UInt256], Null), // (ListId)UInt256
      deleteListing: Fun([UInt256], Null), // (ListId)Null
    });
    const ARC200A = API({
      arc200_transfer: Fun([Contract, Address, UInt256], Null), // (Contract, to, value)Null
    });
    const AdminA = API("a_admin", {
      lock: Fun([], Null), // ()Null
      grant: Fun([Address], Null), // (Address)Null
      updateFee: Fun([UInt256], Null), // (UInt)Null
      updateFeeToken: Fun([Contract], Null), // (Contract)Null
    });
    const A = API({
      touch: Fun([], Null), // ()Null
      nop: Fun([], Null), // ()Null
    });
    const SwapV = View("v_swap", {
      listingByIndex: Fun([UInt256], Swap),
    });
    const V = View({
      state: Fun([], State),
      manager: Fun([], Address),
      constructor: Fun([], Address),
      zeroAddress: Fun([], Address),
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    const SwapN = Events("e_swap", {
      ListEvent: [UInt256, Contract, UInt256, Contract, UInt256, UInt], // ListId, CollectionId, TokenId, CollectionId, TokenId, EndTime
      SwapEvent: [UInt256, Address, Address], // ListId BuyAddr
      DeleteListingEvent: [UInt256], // ListId
    });
    init();
    const checkInput = (p) => {};
    D.only(() => {
      const p = declassify(interact.params);
    });
    D.publish(p).check(() => {
      checkInput(p);
    });

    const rbc = remote(p.beacon, {
      zeroAddress: Fun([], Address),
    });

    const zeroAddress = rbc.zeroAddress();

    const listingData = new Map(UInt256, Swap); // (ListId)Listing

    const initialState = {
      locked: false,
      swapCount: UInt256(0),
      manager: D,
      fee: p.fee,
      fTok: p.fTok,
    };

    const [s] = parallelReduce([initialState])
      .define(() => {
        V.constructor.set(() => D);
        V.manager.set(() => s.manager);
        V.zeroAddress.set(() => zeroAddress);
        V.state.set(() => State.fromObject(s));
        const getListing = (i) => {
          const listing = listingData[i];
          return fromSome(
            listing,
            Swap.fromObject({
              collectionId: getContract(),
              tokenId: UInt256(0),
              collectionId2: getContract(),
              tokenId2: UInt256(0),
              endTime: UInt(0),
            })
          );
        };
        SwapV.listingByIndex.set(getListing);
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
      })
      .invariant(balance() == 0, "balance accurate")
      .while(true)
      .define(() => {
        const arc200 = {
          transfer: (ctc, pmt, to_, value_) => {
            const from_ = getAddress();
            const r = remote(ctc, {
              arc200_transfer: Fun([Bytes(4), Address, UInt256], Bool),
            });
            return r.arc200_transfer.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
              ],
            })(Bytes.fromHex("0xda7025b9"), to_, value_); // sha256(arc200_transfer(address,uint256)bool)
          },
          transferFrom: (ctc, pmt, from_, to_, value_) => {
            const spender_ = getAddress();
            const r = remote(ctc, {
              arc200_transferFrom: Fun(
                [Bytes(4), Address, Address, UInt256],
                Bool
              ),
            });
            return r.arc200_transferFrom.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
                [ctc, 1, [from_, spender_]],
              ],
            })(Bytes.fromHex("0x4a968f8f"), from_, to_, value_); // sha256(arc200_transferFrom(address,address,uint256)bool)
          },
        };
        const arc72 = {
          // arc72_ownerOf: Fun([UInt256], Address), // reads nftData
          ownerOf: (ctc, tId) => {
            const r = remote(ctc, {
              arc72_ownerOf: Fun([UInt256], Address),
            });
            return r.arc72_ownerOf(tId);
          },
          // arc72_transferFrom: Fun([Address, Address, UInt256], Null), // modifies nftData, holderData
          transferFrom: (ctc, pmt, from_, to_, tId) => {
            const spender_ = getAddress();
            const r = remote(ctc, {
              arc72_transferFrom: Fun([Address, Address, UInt256], Null),
            });
            return r.arc72_transferFrom.pay(pmt).ALGO({
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, tId], // nftData
                [ctc, 1, [from_, spender_]], // operatorData
                [ctc, 2, to_], // holderData
                [ctc, 2, from_], // holderData
              ],
            })(from_, to_, tId);
          },
        };
      })
      // -----------------------------------------
      // :'######::'##:::::'##::::'###::::'########::
      // '##... ##: ##:'##: ##:::'## ##::: ##.... ##:
      //  ##:::..:: ##: ##: ##::'##:. ##:: ##:::: ##:
      // . ######:: ##: ##: ##:'##:::. ##: ########::
      // :..... ##: ##: ##: ##: #########: ##.....:::
      // '##::: ##: ##: ##: ##: ##.... ##: ##::::::::
      // . ######::. ###. ###:: ##:::: ##: ##::::::::
      // :......::::...::...:::..:::::..::..:::::::::
      // -----------------------------------------
      // api: list
      // - list a token for swap with another token
      // params:
      //   - cCtc: collection id
      //   - cId: token id
      //   - cCtc2: collection id
      //   - cId2: token id
      //   - endT: end time
      // -----------------------------------------
      .api_(SwapA.list, (cCtc, cId, cCtc2, cId2, endT) => {
        check(!s.locked, "locked");
        return [
          0,
          (k) => {
            const newId = s.swapCount + UInt256(1);
            SwapN.ListEvent(newId, cCtc, cId, cCtc2, cId2, endT);
            listingData[newId] = Swap.fromObject({
              collectionId: cCtc,
              tokenId: cId,
              collectionId2: cCtc2,
              tokenId2: cId2,
              endTime: endT,
            });
            k(newId);
            return [{ ...s, swapCount: newId }];
          },
        ];
      })
      // -----------------------------------------
      // api: buyNet
      // - buy a token listed in network token
      // params:
      //   - lId: listing id
      // -----------------------------------------
      .api_(SwapA.execute, (lId) => {
        check(isSome(listingData[lId]), "listing not found");

        const [cId, tId, cId2, tId2, endT] = getListing(lId);

        return [
          0,
          (k) => {
            enforce(endT > thisConsensusTime(), "listing expired");

            delete listingData[lId];

            void arc200.transferFrom(s.fTok, 0, this, s.manager, s.fee); // transfer fee to manager

            const addr = arc72.ownerOf(cId, tId);
            const addr2 = arc72.ownerOf(cId2, tId2);

            void arc72.transferFrom(cId, 0, addr, addr2, tId);
            void arc72.transferFrom(cId2, 0, addr2, addr, tId2);

            SwapN.SwapEvent(lId, addr, addr2);

            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: deleteListing (manager or self listed only)
      // - deletes a listing
      // - must be manager or self listed
      // params:
      //   - lId: listing id
      // -----------------------------------------
      .api_(SwapA.deleteListing, (lId) => {
        check(isSome(listingData[lId]), "listing not found");
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            delete listingData[lId];
            SwapN.DeleteListingEvent(lId);
            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: touch
      // - transfers untracked funds to manager
      // -----------------------------------------
      .api_(A.touch, () => {
        return [
          (k) => {
            const ut = getUntrackedFunds();
            transfer(ut).to(s.manager);
            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: nop
      // - no operation
      // -----------------------------------------
      .api_(A.nop, () => {
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: lock
      // - locks the contract (manager only)
      // -----------------------------------------
      .api_(AdminA.lock, () => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [{ ...s, locked: true }];
          },
        ];
      })
      // -----------------------------------------
      // api: grant
      // - grants manager (manager only)
      // -----------------------------------------
      .api_(AdminA.grant, (addr) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [
              {
                ...s,
                manager: addr,
              },
            ];
          },
        ];
      })
      // -----------------------------------------
      // api: updateFeeToken (manager only)
      // - updates fee token
      // -----------------------------------------
      .api_(AdminA.updateFeeToken, (fTok) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [{ ...s, fTok }];
          },
        ];
      })
      // -----------------------------------------
      // api: updateFee (manager only)
      // - updates fee
      // -----------------------------------------
      .api_(AdminA.updateFee, (fee) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [{ ...s, fee }];
          },
        ];
      })
      // -----------------------------------------
      // api: arc200_transfer (manager only)
      // - transfer arc200
      // -----------------------------------------
      .api_(ARC200A.arc200_transfer, (ctc, to_, value_) => {
        check(this === s.manager, "must be manager");
        return [
          (k) => {
            k(null);
            void arc200.transfer(ctc, 0, to_, value_);
            return [s];
          },
        ];
      });
    commit();
    exit();
  });

export const mp212 = MP212(MP212State);
