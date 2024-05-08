"reach 0.1";

// INTERFACE SELECTORS

// INTERFACE_SELECTOR_MP206

// a_sale_listNet(uint64,uint256,uint64,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256 d6288466
// a_sale_buyNet(uint256)void 8f19af62
// a_sale_listSC(uint64,uint256,uint64,uint256,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256 d581012d
// a_sale_buySC(uint256)void 96b772c9
// a_sale_deleteListing(uint256)void c9f5293b
// v_sale_listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]),uint64,uint64,uint64,uint64,uint64,uint64,address,address,address) 240c2627
// e_sale_ListEvent(uint256,uint64,uint256,address,(byte,byte[40]),uint64,uint64) a116329c
// e_sale_BuyEvent(uint256,address) 380c0d86
// e_sale_DeleteListingEvent(uint256) c0a97c4b

const INTERFACE_SELECTOR_MP206 = "0xae4d14ad";

// - Supported interface

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

// Price
// - NET: Tuple(UInt)
// + network token price
// - SC: Tuple(Contract, UInt256)
// + smart contract price

const Price = Data({
  NET: Tuple(UInt),
  SC: Tuple(Contract, UInt256),
});

// NFT
// - collectionId: Contract
// + collection id (app id)
// - tokenId: UInt256
// + token id

const NFT = Struct([
  ["collectionId", Contract], 
  ["tokenId", UInt256], 
]);

// Royalties
// - royalty: UInt
// + royalty
// - royaltyPoints: UInt
// + royalty points
// - creatorPoints1: UInt
// + creator points 1
// - creatorPoints2: UInt
// + creator points 2
// - creatorPoints3: UInt
// + creator points 3
// - creatorAddress1: Address
// + creator address 1
// - creatorAddress2: Address
// + creator address 2
// - creatorAddress3: Address
// + creator address 3

const Royalties = Struct([
  ["royalty", UInt], 
  ["royaltyPoints", UInt], 
  ["creatorPoints1", UInt], 
  ["creatorPoints2", UInt], 
  ["creatorPoints3", UInt], 
  ["creatorAddress1", Address], 
  ["creatorAddress2", Address], 
  ["creatorAddress3", Address], 
]);

// Sale
// - listAddr: Address
// + token owner
// - listPrice: Price
// + token price
// - endTime: UInt
// + end time

const Sale = Struct([
  ["listAddr", Address],  
  ["listPrice", Price],   
  ["endTime", UInt],      
]);

// Listing - NFT, Sale, Royalties (see above)

const Listing = Struct([
  ...Struct.fields(NFT),
  ...Struct.fields(Sale),
  ...Struct.fields(Royalties),
]);

const BaseState = Struct([["manager", Address]]);

const MPState = Struct([
  ...Struct.fields(BaseState),
  ["locked", Bool],
  ["fee", UInt],
]);

const MP206State = Struct([...Struct.fields(MPState), ["listCount", UInt256]]);

// MP206 - Sales

const MP206 = (State) =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });
    const supportedInterfaces = [Bytes.fromHex(INTERFACE_SELECTOR_MP206)];
    const Params = Object({
      beacon: Contract,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const SaleA = API("a_sale", {
      listNet: Fun(
        [
          Contract, // CollectionId
          UInt256, // TokenId
          UInt, /// ListPrice
          UInt, // EndTime
          UInt, // RoyaltyPoints
          UInt, // CreatorPoints1
          UInt, // CreatorPoints2
          UInt, // CreatorPoints3
          Address, // CreatorAddr1
          Address, // CreatorAddr2
          Address, // CreatorAddr3
        ],
        UInt256
      ), // (CollectionId, TokenId, ListPrice, EndTime, RoyaltyPoints, CreatePoints1, CreatorPoint2, CreatorPoint3, CreatorAddr1, CreatorAddr2, CreatorAddr3)ListId
      buyNet: Fun([UInt256], Null), // (ListId)Null
      listSC: Fun(
        [
          Contract, // CollectionId
          UInt256, // TokenId
          Contract, // PaymentTokenId
          UInt256, // ListPrice
          UInt, // EndTime
          UInt, // RoyaltyPoints
          UInt, // CreatorPoints1
          UInt, // CreatorPoints2
          UInt, // CreatorPoints3
          Address, // CreatorAddr1
          Address, // CreatorAddr2
          Address, // CreatorAddr3
        ],
        UInt256
      ), // (CollectionId, TokenId, ListPrice, EndTime, RoyaltyPoints, CreatorPoints1, CreatorPoint2, CreatorPoints3, CreatorAddr1, CreatorAddr2, CreatorAddr3)ListId
      buySC: Fun([UInt256], Null), // (ListId)UInt256
      deleteListing: Fun([UInt256], Null), // (ListId)Null
    });
    const ARC200A = API({
      arc200_transfer: Fun([Contract, Address, UInt256], Null), // (Contract, to, value)Null
    });
    const AdminA = API("a_admin", {
      lock: Fun([], Null), // ()Null
      grant: Fun([Address], Null), // (Address)Null
      updateFee: Fun([UInt], Null), // (UInt)Null
    });
    const A = API({
      touch: Fun([], Null), // ()Null
      nop: Fun([], Null), // ()Null
    });
    const SaleV = View("v_sale", {
      listingByIndex: Fun([UInt256], Listing),
    });
    const V = View({
      state: Fun([], State),
      manager: Fun([], Address),
      constructor: Fun([], Address),
      zeroAddress: Fun([], Address),
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    const SaleN = Events("e_sale", {
      ListEvent: [UInt256, Contract, UInt256, Address, Price, UInt, UInt], // ListId, CollectionId, TokenId, ListAddr, ListPrice, EndTime, Royalties
      BuyEvent: [UInt256, Address], // ListId BuyAddr
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

    const listingData = new Map(UInt256, Listing); // (ListId)Listing

    const initialState = {
      locked: false,
      listCount: UInt256(0),
      manager: D,
      fee: 500, // 5%
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
            Listing.fromObject({
              collectionId: getContract(),
              tokenId: UInt256(0),
              listAddr: zeroAddress,
              listPrice: Price.NET([0]),
              endTime: UInt(0),
              royalty: UInt(0),
              royaltyPoints: UInt(0),
              creatorPoints1: UInt(0),
              creatorPoints2: UInt(0),
              creatorPoints3: UInt(0),
              creatorAddress1: zeroAddress,
              creatorAddress2: zeroAddress,
              creatorAddress3: zeroAddress,
            })
          );
        };
        SaleV.listingByIndex.set(getListing);
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
      // :'######:::::'###::::'##:::::::'########:
      // '##... ##:::'## ##::: ##::::::: ##.....::
      //  ##:::..:::'##:. ##:: ##::::::: ##:::::::
      // . ######::'##:::. ##: ##::::::: ######:::
      // :..... ##: #########: ##::::::: ##...::::
      // '##::: ##: ##.... ##: ##::::::: ##:::::::
      // . ######:: ##:::: ##: ########: ########:
      // :......:::..:::::..::........::........::
      // -----------------------------------------
      // api: list
      // - list a token for sale in network token
      // params:
      //   - cCtc: collection id
      //   - cId: token id
      //   - prc: price (in network token)
      //   - endT: end time
      // -----------------------------------------
      .api_(
        SaleA.listNet,
        (cCtc, cId, prc, endT, roy, crp1, crp2, crp3, cad1, cad2, cad3) => {
          check(!s.locked, "locked");
          check(prc > 0, "price must be positive");
          check(roy + s.fee <= 10000, "royalty too high");
          check(
            crp1 + crp2 + crp3 === 10000,
            "creator points must add to 10000"
          );
          return [
            0,
            (k) => {
              const newId = s.listCount + UInt256(1);
              SaleN.ListEvent(
                newId,
                cCtc,
                cId,
                this,
                Price.NET([prc]),
                endT,
                roy + s.fee
              );
              listingData[newId] = Listing.fromObject({
                collectionId: cCtc,
                tokenId: cId,
                listAddr: this,
                listPrice: Price.NET([prc]),
                endTime: endT,
                royalty: roy + s.fee,
                royaltyPoints: roy,
                creatorPoints1: crp1,
                creatorPoints2: crp2,
                creatorPoints3: crp3,
                creatorAddress1: cad1,
                creatorAddress2: cad2,
                creatorAddress3: cad3,
              });
              k(newId);
              return [{ ...s, listCount: newId }];
            },
          ];
        }
      )
      // -----------------------------------------
      // api: buyNet
      // - buy a token listed in network token
      // params:
      //   - lId: listing id
      // -----------------------------------------
      .api_(SaleA.buyNet, (lId) => {
        // check if listing exists
        check(isSome(listingData[lId]), "listing not found");

        const [
          cId,
          tId,
          lAddr,
          lPrice,
          endT,
          roy,
          ryp,
          crp1,
          crp2,
          crp3,
          cad1,
          cad2,
          cad3,
        ] = getListing(lId);

        // check if price is net
        const price = lPrice.match({
          NET: ([prc]) => prc,
          SC: (_) => 0,
        });

        // check if price is in network token
        check(price > 0, "must be net listing");

        return [
          price,
          (k) => {
            // check if listing expired
            enforce(endT > thisConsensusTime(), "listing expired");

            delete listingData[lId]; // remove list

            const proceeds = (price * (10000 - roy)) / 10000;
            const royalties = (price * ryp) / 10000;
            const totalPoints = crp1 + crp2 + crp3 + 1;
            const royalty1 = (royalties * crp1) / totalPoints;
            const royalty2 = (royalties * crp2) / totalPoints;
            const royalty3 = (royalties * crp3) / totalPoints;
            const royaltyTotal = royalty1 + royalty2 + royalty3;
            const take = price - (proceeds + royaltyTotal);

            transfer(proceeds).to(lAddr); // transfer price to lister
            transfer(royalty1).to(cad1); // transfer creator1
            transfer(royalty2).to(cad2); // transfer creator2
            transfer(royalty3).to(cad3); // transfer creator3
            transfer(take).to(s.manager);

            SaleN.BuyEvent(lId, this);

            void arc72.transferFrom(cId, 0, lAddr, this, tId); // transfer nft to buyer

            k(null);
            return [s];
          },
        ];
      })
      // -----------------------------------------
      // api: listSC
      // - list a token for sale in smart contract
      // params:
      //   - cCtc: collection id
      //   - cId: token id
      //   - tok: token contract
      //   - prc: price (in token)
      //   - endT: end time
      // -----------------------------------------
      .api_(
        SaleA.listSC,
        (
          cCtc,
          cId,
          tok,
          prc,
          endT,
          roy,
          crp1,
          crp2,
          crp3,
          cad1,
          cad2,
          cad3
        ) => {
          check(!s.locked, "locked");
          check(prc > UInt256(0), "price must be positive");
          return [
            0,
            (k) => {
              const newId = s.listCount + UInt256(1);
              SaleN.ListEvent(
                newId,
                cCtc,
                cId,
                this,
                Price.SC([tok, prc]),
                endT,
                roy + s.fee
              );
              listingData[newId] = Listing.fromObject({
                collectionId: cCtc,
                tokenId: cId,
                listAddr: this,
                listPrice: Price.SC([tok, prc]),
                endTime: endT,
                royalty: roy + s.fee,
                royaltyPoints: roy,
                creatorPoints1: crp1,
                creatorPoints2: crp2,
                creatorPoints3: crp3,
                creatorAddress1: cad1,
                creatorAddress2: cad2,
                creatorAddress3: cad3,
              });
              k(newId);
              return [{ ...s, listCount: newId }];
            },
          ];
        }
      )
      // -----------------------------------------
      // api: buySC
      // - buy a token listed in smart contract
      // - transfers the token to buyer
      // - should be called with claimSC
      // params:
      //   - lId: listing id
      // -----------------------------------------
      .api_(SaleA.buySC, (lId) => {
        check(isSome(listingData[lId]), "listing not found");
        const [
          cId,
          tId,
          lAddr,
          lPrice,
          endT,
          roy,
          ryp,
          crp1,
          crp2,
          crp3,
          cad1,
          cad2,
          cad3,
        ] = getListing(lId);
        // check if price is sc
        const [tok, prc] = lPrice.match({
          NET: (_) => [getContract(), UInt256(0)],
          SC: ([tok, prc]) => [tok, prc],
        });
        // check if price is in token
        check(prc > UInt256(0), "must be sc listing");
        return [
          0,
          (k) => {
            // check if listing expired
            enforce(endT > thisConsensusTime(), "listing expired");

            const proceeds = (prc * UInt256(10000 - roy)) / UInt256(10000);
            const royalties = (prc * UInt256(ryp)) / UInt256(10000);
            const totalPoints = UInt256(crp1 + crp2 + crp3 + 1);
            const royalty1 = (royalties * UInt256(crp1)) / totalPoints;
            const royalty2 = (royalties * UInt256(crp2)) / totalPoints;
            const royalty3 = (royalties * UInt256(crp3)) / totalPoints;
            const royaltyTotals = royalty1 + royalty2 + royalty3;
            const take = prc - (proceeds + royaltyTotals);

            void arc200.transferFrom(tok, 0, this, getAddress(), prc); // transfer sc tok to lister from buyer
            void arc200.transfer(tok, 0, lAddr, proceeds); // transfer sc tok to lister from buyer
            void arc200.transfer(tok, 0, cad1, royalty1); // transfer sc tok to creator1 from buyer
            void arc200.transfer(tok, 0, cad2, royalty2); // transfer sc tok to creator2 from buyer
            void arc200.transfer(tok, 0, cad3, royalty3); // transfer sc tok to creator3 from buyer
            void arc200.transfer(tok, 0, s.manager, take); // transfer sc tok to manager from buyer

            SaleN.BuyEvent(lId, this);

            delete listingData[lId];

            void arc72.transferFrom(cId, 0, lAddr, this, tId); // transfer nft to buyer from lister

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
      .api_(SaleA.deleteListing, (lId) => {
        check(isSome(listingData[lId]), "listing not found");
        const [
          cId,
          tId,
          lAddr,
          lPrice,
          endT,
          roy,
          ryp,
          crp1,
          crp2,
          crp3,
          cad1,
          cad2,
          cad3,
        ] = getListing(lId);
        check(
          s.manager === this || this === lAddr,
          "must be manager or self listed"
        );
        return [
          (k) => {
            delete listingData[lId];
            SaleN.DeleteListingEvent(lId);
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

export const mp206 = MP206(MP206State);
