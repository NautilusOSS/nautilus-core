import algosdk, {
  signTransaction,
  waitForConfirmation,
  mnemonicToSecretKey,
  decodeUnsignedTransaction,
} from "algosdk";
import { CONTRACT, abi } from "ulujs";
import dotenv from "dotenv";
dotenv.config();

const { MN } = process.env;

const { addr: address, sk } = mnemonicToSecretKey(MN || "");

const ALGO_SERVER = "https://testnet-api.voi.nodly.io";
const ALGO_INDEXER_SERVER = "https://testnet-idx.voi.nodly.io";

const algodClient = new algosdk.Algodv2(
  process.env.ALGOD_TOKEN || "",
  process.env.ALGOD_SERVER || ALGO_SERVER,
  process.env.ALGOD_PORT || ""
);

const indexerClient = new algosdk.Indexer(
  process.env.INDEXER_TOKEN || "",
  process.env.INDEXER_SERVER || ALGO_INDEXER_SERVER,
  process.env.INDEXER_PORT || ""
);

const signSendAndConfirm = async (txns, sk) => {
  const stxns = txns
    .map((t) => new Uint8Array(Buffer.from(t, "base64")))
    .map(decodeUnsignedTransaction)
    .map((t) => signTransaction(t, sk));
  console.log(stxns.map(({ txID }) => txID));
  await algodClient.sendRawTransaction(stxns.map(({ blob }) => blob)).do();
  await Promise.all(
    stxns.map(({ txID }) => waitForConfirmation(algodClient, txID, 4))
  );
};

const oneAddress = "G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ";
const twoAddress = "P6XL4JH5OBM23PB75GP7GLW4WOODSKX2OEQB5CB63G2QTHS7IIYJP2HIZU";

const ctcInfo = 29117863;

const ci = new CONTRACT(
  ctcInfo,
  algodClient,
  indexerClient,
  abi.nautilus.mp206
);

console.log(ci);

// Query events

// query parameters
// - minRound
// - maxRound
// - address
// - round
// - txid
// - sender
const events = await ci.getEvents({
  minRound: 6558573,
});
console.log(
  "Events: ",
  events.map((el) => el.name)
);
// - e_sale_BuyEvent
// - e_sale_DeleteListingEvent
// - e_sale_ListEvent
const voiTestDoggies = 26948082;
const listEvents = (
  events.find((e) => e.name === "e_sale_ListEvent")?.events || []
).filter((e) => {
  const collectionId = Number(e[4]);
  const tokenId = Number(e[5]);
  const listAddr = String(e[6]);
  return collectionId === voiTestDoggies && tokenId === 9;
});
console.log("List Events: ", listEvents);
// List Events:  [
//   [
//     'CXJKB5PFGYF5CIF6L2H3JESVIJQ3XOSVAAMZ5JBFJ6WLXWTBKKNA',
//     6662179,
//     1714921311,
//     4765n,
//     26948082n,
//     9n,
//     'P6XL4JH5OBM23PB75GP7GLW4WOODSKX2OEQB5CB63G2QTHS7IIYJP2HIZU',
//     [ '00', 40000000000n ],
//     9007199254740991n,
//     1250n
//   ]
// ]

// Call read-only functions

// get listing by index

const listingR = await ci.v_sale_listingByIndex(4765);
if (!listingR.success) process.exit(1);
const listing = listingR.returnValue;
console.log("Listing: ", listing);
// Listing:  [
//   26948082n,
//   9n,
//   'P6XL4JH5OBM23PB75GP7GLW4WOODSKX2OEQB5CB63G2QTHS7IIYJP2HIZU',
//   [
//     0,
//     [
//       0, 0, 0, 9, 80, 47, 144, 0, 0, 0,
//       0, 0, 0, 0,  0,  0,   0, 0, 0, 0,
//       0, 0, 0, 0,  0,  0,   0, 0, 0, 0,
//       0, 0, 0, 0,  0,  0,   0, 0, 0, 0
//     ]
//   ],
//   9007199254740991n,
//   1250n,
//   1000n,
//   10000n,
//   0n,
//   0n,
//   'LVDOKMWOSEIXVCOONSVMO7X6XWGZH37SJGHW466DIKSWMT3UVXO7NDPCPQ',
//   'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ',
//   'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ'
// ]

// Get the manager

const managerR = await ci.manager();
if (!managerR) process.exit(1);
const manager = managerR.returnValue;
console.log("Manager: ", manager);
// Manager:  G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ

// Get zero address

const zeroAddressR = await ci.zeroAddress();
if (!zeroAddressR.success) process.exit(1);
const zero = zeroAddressR.returnValue;
console.log("Zero: ", zero);
// Zero:  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ

// Touch the contract (Do not touch)

// ci.setFee(2000);
// const touchR = await ci.touch();
// if(!touchR) process.exit(1);
// console.log("Touched: ", touchR);

// Get the state

const stateR = await ci.state();
if (!stateR.success) process.exit(1);
const state = stateR.returnValue;
console.log("State: ", state);
// State:  [
//   'G3MSA75OZEJTCCENOJDLDJK7UD7E2K5DNC7FVHCNOV7E3I4DTXTOWDUIFQ',
//   0,
//   250n,
//   4782n
// ]

// Do nothing

// const nopR = await ci.nop();
// if (!nopR.success) process.exit(1);
// console.log("Nop: ", nopR);

// Call functions

// Delete listing

ci.setFee(2000);
const a_sale_deleteListingR = await ci.a_sale_deleteListing(4784n);
if (!a_sale_deleteListingR.success) process.exit(1);
await signSendAndConfirm(a_sale_deleteListingR.txns, sk);

// Update fee

// ci.setFee(1000);
// const a_admin_updateFeeR = await ci.a_admin_updateFee(250n);
// console.log(a_admin_updateFeeR);
// if (!a_admin_updateFeeR.success) process.exit(1);
// await signSendAndConfirm(a_admin_updateFeeR.txns, sk);

// List a token

// do {
//   const listingCost = 118500;
//   ci.setPaymentAmount(listingCost);
//   ci.setFee(2000);
//   const collectionId = 26181585;
//   const tokenId = 6;
//   const listPrice = 1e6 * 1e6;
//   const endTime = Number.MAX_SAFE_INTEGER;
//   const royaltyPoints = 0;
//   const creatorPoints1 = 10000n;
//   const creatorPoints2 = 0n;
//   const creatorPoints3 = 0n;
//   const creatorAddress1 = oneAddress;
//   const creatorAddress2 = oneAddress;
//   const creatorAddress3 = oneAddress;
//   const a_sale_listNetR = await ci.a_sale_listNet(
//     collectionId,
//     tokenId,
//     listPrice,
//     endTime,
//     royaltyPoints,
//     creatorPoints1,
//     creatorPoints2,
//     creatorPoints3,
//     creatorAddress1,
//     creatorAddress2,
//     creatorAddress3
//   );
//   if (!a_sale_listNetR.success) process.exit(1);
//   const listId = a_sale_listNetR.returnValue;
//   console.log("ListId: ", listId);
//   await signSendAndConfirm(a_sale_listNetR.txns, sk);
// } while (0);

// List a token in arc200 token

// do {
//   const listingCost = 118500;
//   ci.setPaymentAmount(listingCost);
//   ci.setFee(2000);
//   const collectionId = 26181585;
//   const tokenId = 6;
//   const paymentTokenId = 46659861; // CLOUT !!
//   const paymentAmount = 1e6; // 1Mi !!
//   const endTime = Number.MAX_SAFE_INTEGER;
//   const royaltyPoints = 0;
//   const creatorPoints1 = 10000n;
//   const creatorPoints2 = 0n;
//   const creatorPoints3 = 0n;
//   const creatorAddress1 = oneAddress;
//   const creatorAddress2 = oneAddress;
//   const creatorAddress3 = oneAddress;
//   const a_sale_listNetR = await ci.a_sale_listSC( // !!
//     collectionId,
//     tokenId,
//     paymentTokenId, // !!
//     paymentAmount, // !!
//     endTime,
//     royaltyPoints,
//     creatorPoints1,
//     creatorPoints2,
//     creatorPoints3,
//     creatorAddress1,
//     creatorAddress2,
//     creatorAddress3
//   );
//   if (!a_sale_listNetR.success) process.exit(1);
//   const listId = a_sale_listNetR.returnValue;
//   console.log("ListId: ", listId);
//   await signSendAndConfirm(a_sale_listNetR.txns, sk);
// } while (0);
