"reach 0.1";

// INTERFACE SELECTORS

// - Supported interface

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

const Price = Data({
  NET: Tuple(UInt),
  SC: Tuple(Contract, UInt256),
});

const Offer = Struct([
  ["collectionId", Contract], // arc72 application id
  ["tokenId", UInt256], // arc72 token id
  ["offerAddr", Address], // token owner
  ["offerAmount", Price], // token price
  ["sellerAddr", Address], // buyer address
]);

const BaseState = Struct([["manager", Address]]);

// State
// - zeroAddress: Address
// + zero address
// - locked: Bool
// + contract locked
// - listCount: UInt256
// + number of listings
// - constructor: Address
// + contract deployer
// - manager: Address
// + manager address
// - registered: Bool
// + if account is registered online
// - keyInfo: MKeyInfo
// + partkey info

const MP213State = Struct([
  ...Struct.fields(BaseState),
  ["locked", Bool],
  ["fee", UInt256],
  ["offerCount", UInt256],
]);

// MP213 - Offers

const MP213 = (State) =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });
    const supportedInterfaces = [
      Bytes.fromHex("0xae4d14ad"), // MP-Sale (mp206)
    ];
    const Params = Object({
      zeroAddress: Address,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const OfferA = API("a_offer", {
      listSC: Fun([Contract, UInt256, Contract, UInt256], UInt256), // (CollectionId, TokenId, PaymentTokenId, ListPrice)ListId
      acceptSC: Fun([UInt256], Null), // (ListId)Null
      deleteListing: Fun([UInt256], Null), // (ListId)Null
    });
    const ARC200A = API({
      arc200_transfer: Fun([Contract, Address, UInt256], Null), // (Contract, to, value)Null
    });
    const AdminA = API("a_admin", {
      lock: Fun([], Null), // ()Null
      grant: Fun([Address], Null), // (Address)Null
      updateFee: Fun([UInt256], Null), // (UInt)Null
    });
    const A = API({
      touch: Fun([], Null), // ()Null
      nop: Fun([], Null), // ()Null
    });
    const OfferV = View("v_offer", {
      listingByIndex: Fun([UInt256], Offer),
    });
    const V = View({
      state: Fun([], State),
      manager: Fun([], Address),
      constructor: Fun([], Address),
      zeroAddress: Fun([], Address),
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    const OfferN = Events("e_offer", {
      ListEvent: [UInt256, Contract, UInt256, Address, Price], // ListId, CollectionId, TokenId, ListAddr, ListPrice
      AcceptEvent: [UInt256], // ListId
      ClaimEvent: [UInt256], // ListId
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
    const { zeroAddress } = p;
    const offerData = new Map(UInt256, Offer); // (ListId)Offer
    const initialState = {
      locked: false,
      offerCount: UInt256(0),
      manager: D,
      fee: UInt256(500), // 5%
    };
    const [s] = parallelReduce([initialState])
      .define(() => {
        V.constructor.set(() => D);
        V.manager.set(() => s.manager);
        V.zeroAddress.set(() => zeroAddress);
        V.state.set(() => State.fromObject(s));
        OfferV.listingByIndex.set((i) => {
          const listing = offerData[i];
          return fromSome(
            listing,
            Offer.fromObject({
              collectionId: getContract(),
              tokenId: UInt256(0),
              offerAddr: zeroAddress,
              offerAmount: Price.NET([0]),
              sellerAddr: zeroAddress,
            })
          );
        });
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
      })
      .invariant(balance() == 0, "balance accurate")
      .while(true)
      .define(() => {
        const arc200 = {
          balanceOf: (ctc, addr) => {
            const r = remote(ctc, {
              arc200_balanceOf: Fun([Address], UInt256),
            });
            return r.arc200_balanceOf(addr);
          },
          approve: (ctc, pmt, spender, value) => {
            const r = remote(ctc, {
              arc200_approve: Fun([Address, UInt256], Bool),
            });
            return r.arc200_approve.pay(pmt)(spender, value);
          },
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
      // :'#######::'########:'########:'########:'########::
      // '##.... ##: ##.....:: ##.....:: ##.....:: ##.... ##:
      //  ##:::: ##: ##::::::: ##::::::: ##::::::: ##:::: ##:
      //  ##:::: ##: ######::: ######::: ######::: ########::
      //  ##:::: ##: ##...:::: ##...:::: ##...:::: ##.. ##:::
      //  ##:::: ##: ##::::::: ##::::::: ##::::::: ##::. ##::
      // . #######:: ##::::::: ##::::::: ########: ##:::. ##:
      // :.......:::..::::::::..::::::::........::..:::::..::
      // -----------------------------------------
      // api: offerSC
      // - list a token for offer in smart contract
      // params:
      //   - cCtc: collection id
      //   - cId: token id
      //   - prc: price (in token)
      .api_(OfferA.listSC, (cId, tId, tok, prc) => {
        check(!s.locked, "locked");
        check(prc > UInt256(0), "price must be positive");
        return [
          0,
          (k) => {
            const newId = s.offerCount + UInt256(1);
            OfferN.ListEvent(newId, cId, tId, this, Price.SC([tok, prc]));
            offerData[newId] = Offer.fromObject({
              collectionId: cId,
              tokenId: tId,
              offerAddr: this,
              offerAmount: Price.SC([tok, prc]),
              sellerAddr: this,
            });
            k(newId);
            return [{ ...s, offerCount: newId }];
          },
        ];
      })
      // api: acceptSC
      // - accept an offer in smart contract
      // - should be called with claimSC
      // params:
      //   - oId: offer id
      .api_(OfferA.acceptSC, (oId) => {
        check(isSome(offerData[oId]), "offer not found");
        const [cId, tId, oAddr, oAmt, sAddr] = fromSome(
          offerData[oId],
          Offer.fromObject({
            collectionId: getContract(),
            tokenId: UInt256(0),
            offerAddr: zeroAddress,
            offerAmount: Price.SC([getContract(), UInt256(0)]),
            sellerAddr: zeroAddress,
          })
        );
        check(sAddr !== this, "must not be self listed");
        const [tok, amt] = oAmt.match({
          NET: (_) => [getContract(), UInt256(0)],
          SC: ([tok, amt]) => [tok, amt],
        });
        check(amt > UInt256(0), "must be sc listing");
        return [
          0,
          (k) => {
            const fee = (amt * s.fee) / UInt256(10000);
            delete offerData[oId];
            void arc200.transferFrom(tok, 0, oAddr, s.manager, fee);
            void arc200.transferFrom(tok, 0, oAddr, this, amt);
            void arc72.transferFrom(cId, 0, this, oAddr, tId);
            OfferN.AcceptEvent(oId);
            k(null);
            return [s];
          },
        ];
      })
      // api: deleteOfferSC (manager or self listed only)
      // - deletes an offer
      .api_(OfferA.deleteListing, (oId) => {
        check(isSome(offerData[oId]), "offer not found");
        const [cId, tId, oAddr, oAmt, sAddr] = fromSome(
          offerData[oId],
          Offer.fromObject({
            collectionId: getContract(),
            tokenId: UInt256(0),
            offerAddr: zeroAddress,
            offerAmount: Price.SC([getContract(), UInt256(0)]),
            sellerAddr: zeroAddress,
          })
        );
        check(
          s.manager === this || (oAddr === sAddr && this === oAddr),
          "must be manager or self listed"
        );
        return [
          (k) => {
            delete offerData[oId];
            OfferN.DeleteListingEvent(oId);
            k(null);
            return [s];
          },
        ];
      })
      // api: lock
      // - locks the contract (manager only)
      .api_(AdminA.lock, () => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [{ ...s, locked: true }];
          },
        ];
      })
      // api: grant
      // - grants manager (manager only)
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
      // api: updateFee (manager only)
      // - updates fee
      .api_(AdminA.updateFee, (fee) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [{ ...s, fee }];
          },
        ];
      })
      // api: touch
      // - transfers untracked funds to manager
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
      // api: nop
      // - no operation
      .api_(A.nop, () => {
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // api: arc200_transfer (manager only)
      // - transfer arc200
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

export const mp213 = MP213(MP213State);
