// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt256;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  return {
    e_swap: {
      DeleteListingEvent: [ctc0],
      ListEvent: [ctc0, ctc1, ctc0, ctc1, ctc0, ctc2],
      SwapEvent: [ctc0, ctc3, ctc3]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    fTok: ctc2,
    fee: ctc3,
    locked: ctc4,
    manager: ctc0,
    swapCount: ctc3
    });
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Struct([['manager', ctc0], ['locked', ctc4], ['fee', ctc3], ['fTok', ctc2], ['swapCount', ctc3]]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc9 = stdlib.T_Struct([['collectionId', ctc2], ['tokenId', ctc3], ['collectionId2', ctc2], ['tokenId2', ctc3], ['endTime', ctc6]]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc9
    });
  const map0_ctc = ctc11;
  
  
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async () => {
        
        
        return v1460;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async () => {
        
        const v1489 = v1482.manager;
        
        return v1489;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async () => {
        
        const v1490 = v1482.manager;
        const v1491 = v1482.locked;
        const v1492 = v1482.fee;
        const v1493 = v1482.fTok;
        const v1494 = v1482.swapCount;
        const v1495 = {
          fTok: v1493,
          fee: v1492,
          locked: v1491,
          manager: v1490,
          swapCount: v1494
          };
        
        return v1495;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async (_v1503 ) => {
          const v1503 = stdlib.protect(ctc8, _v1503, null);
        
        const v1504 = '    ';
        const v1506 = stdlib.digest([ctc8], [v1504]);
        const v1507 = stdlib.digest([ctc8], [v1503]);
        const v1508 = stdlib.digestEq(v1506, v1507);
        
        return v1508;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async () => {
        
        
        return v1473;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const v_swap_listingByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1460, v1468, v1473, v1482, v1486] = svs;
      return (await ((async (_v1497 ) => {
          const v1497 = stdlib.protect(ctc3, _v1497, null);
        
        const v1498 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc3, v1497, ctc9), null);
        const v1499 = await ctc.getContractInfo();
        const v1501 = {
          collectionId: v1499,
          collectionId2: v1499,
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          tokenId2: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v1502 = stdlib.fromSome(v1498, v1501);
        
        return v1502;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      constructor: {
        decode: _constructor,
        dom: [],
        rng: ctc0
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc7
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc8],
        rng: ctc4
        },
      v_swap: {
        listingByIndex: {
          decode: v_swap_listingByIndex,
          dom: [ctc3],
          rng: ctc9
          }
        },
      zeroAddress: {
        decode: _zeroAddress,
        dom: [],
        rng: ctc0
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc5, ctc6]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Object({
    beacon: ctc1,
    fTok: ctc1,
    fee: ctc2
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc3, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc7]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc7, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc9,
    a_admin_lock0_151: ctc10,
    a_admin_updateFee0_151: ctc11,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc11,
    a_swap_execute0_151: ctc11,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc10,
    touch0_151: ctc10
    });
  const ctc16 = stdlib.T_Bool;
  const ctc17 = stdlib.T_Tuple([ctc3, ctc16]);
  const ctc18 = stdlib.T_Tuple([ctc3, ctc0]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v1453 = stdlib.protect(ctc6, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1453],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:3227:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3227:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1461], secs: v1463, time: v1462, didSend: v33, from: v1460 } = txn1;
      
      ;
      const v1465 = v1461.beacon;
      const v1468 = [];
      const v1469 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v1465,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc7.defaultValue /* simReturnVal */];})();
      const v1470 = await txn1.getOutput('internal', 'v1469', ctc8, v1469);
      const v1472 = v1470[stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '0')];
      const v1473 = v1470[stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '1')];
      const v1479 = v1461.fee;
      const v1480 = v1461.fTok;
      const v1481 = {
        fTok: v1480,
        fee: v1479,
        locked: false,
        manager: v1460,
        swapCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v1482 = v1481;
      const v1483 = v1462;
      const v1486 = v1472;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1461], secs: v1463, time: v1462, didSend: v33, from: v1460 } = txn1;
  ;
  const v1465 = v1461.beacon;
  const v1468 = [];
  const v1469 = undefined /* Remote */;
  const v1470 = await txn1.getOutput('internal', 'v1469', ctc8, v1469);
  const v1472 = v1470[stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '0')];
  const v1473 = v1470[stdlib.checkedBigNumberify('./index.rsh:3235:40:application', stdlib.UInt_max, '1')];
  const v1478 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1472);
  stdlib.assert(v1478, {
    at: './index.rsh:3235:40:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v1479 = v1461.fee;
  const v1480 = v1461.fTok;
  const v1481 = {
    fTok: v1480,
    fee: v1479,
    locked: false,
    manager: v1460,
    swapCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  let v1482 = v1481;
  let v1483 = v1462;
  let v1486 = v1472;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn3;
    switch (v1714[0]) {
      case 'a_admin_grant0_151': {
        const v1717 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v1755 = v1717[stdlib.checkedBigNumberify('./index.rsh:3442:12:spread', stdlib.UInt_max, '0')];
        const v1756 = v1482.manager;
        const v1757 = stdlib.addressEq(v1756, v1713);
        stdlib.assert(v1757, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3443:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3445:15:application call to [unknown function] (defined at: ./index.rsh:3445:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v1760 = null;
        await txn3.getOutput('a_admin_grant', 'v1760', ctc0, v1760);
        const v1767 = v1482.fTok;
        const v1768 = v1482.fee;
        const v1769 = v1482.locked;
        const v1771 = v1482.swapCount;
        const v1772 = {
          fTok: v1767,
          fee: v1768,
          locked: v1769,
          manager: v1755,
          swapCount: v1771
          };
        const cv1482 = v1772;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_admin_lock0_151': {
        const v2062 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2121 = v1482.manager;
        const v2122 = stdlib.addressEq(v2121, v1713);
        stdlib.assert(v2122, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3430:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3432:15:application call to [unknown function] (defined at: ./index.rsh:3432:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v2124 = null;
        await txn3.getOutput('a_admin_lock', 'v2124', ctc0, v2124);
        const v2130 = v1482.fTok;
        const v2131 = v1482.fee;
        const v2134 = v1482.swapCount;
        const v2135 = {
          fTok: v2130,
          fee: v2131,
          locked: true,
          manager: v2121,
          swapCount: v2134
          };
        const cv1482 = v2135;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_admin_updateFee0_151': {
        const v2407 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2484 = v2407[stdlib.checkedBigNumberify('./index.rsh:3473:12:spread', stdlib.UInt_max, '0')];
        const v2485 = v1482.manager;
        const v2486 = stdlib.addressEq(v2485, v1713);
        stdlib.assert(v2486, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3474:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3476:15:application call to [unknown function] (defined at: ./index.rsh:3476:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v2489 = null;
        await txn3.getOutput('a_admin_updateFee', 'v2489', ctc0, v2489);
        const v2496 = v1482.fTok;
        const v2498 = v1482.locked;
        const v2500 = v1482.swapCount;
        const v2501 = {
          fTok: v2496,
          fee: v2484,
          locked: v2498,
          manager: v2485,
          swapCount: v2500
          };
        const cv1482 = v2501;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_admin_updateFeeToken0_151': {
        const v2752 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v2850 = v2752[stdlib.checkedBigNumberify('./index.rsh:3460:12:spread', stdlib.UInt_max, '0')];
        const v2851 = v1482.manager;
        const v2852 = stdlib.addressEq(v2851, v1713);
        stdlib.assert(v2852, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3461:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3463:15:application call to [unknown function] (defined at: ./index.rsh:3463:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v2855 = null;
        await txn3.getOutput('a_admin_updateFeeToken', 'v2855', ctc0, v2855);
        const v2863 = v1482.fee;
        const v2864 = v1482.locked;
        const v2866 = v1482.swapCount;
        const v2867 = {
          fTok: v2850,
          fee: v2863,
          locked: v2864,
          manager: v2851,
          swapCount: v2866
          };
        const cv1482 = v2867;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_swap_deleteListing0_151': {
        const v3097 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v3216 = v3097[stdlib.checkedBigNumberify('./index.rsh:3413:12:spread', stdlib.UInt_max, '0')];
        const v3217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3216, ctc4), null);
        const v3218 = {
          None: 0,
          Some: 1
          }[v3217[0]];
        const v3219 = stdlib.eq(v3218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3219, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3414:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3417:15:application call to [unknown function] (defined at: ./index.rsh:3417:15:function exp)'],
          msg: 'listing not found',
          who: 'Deployer'
          });
        const v3221 = v1482.manager;
        const v3222 = stdlib.addressEq(v3221, v1713);
        stdlib.assert(v3222, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3415:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3417:15:application call to [unknown function] (defined at: ./index.rsh:3417:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc2, v3216, ctc4, undefined /* Nothing */);
        null;
        const v3225 = null;
        await txn3.getOutput('a_swap_deleteListing', 'v3225', ctc0, v3225);
        const cv1482 = v1482;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_swap_execute0_151': {
        const v3442 = v1714[1];
        undefined /* setApiDetails */;
        const v3452 = v3442[stdlib.checkedBigNumberify('./index.rsh:3379:12:spread', stdlib.UInt_max, '0')];
        const v3453 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3452, ctc4), null);
        const v3454 = {
          None: 0,
          Some: 1
          }[v3453[0]];
        const v3455 = stdlib.eq(v3454, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3455, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3380:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3379:34:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
          msg: 'listing not found',
          who: 'Deployer'
          });
        ;
        const v3585 = await ctc.getContractInfo();
        const v3587 = {
          collectionId: v3585,
          collectionId2: v3585,
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
          tokenId2: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v3588 = stdlib.fromSome(v3453, v3587);
        const v3589 = v3588.collectionId;
        const v3590 = v3588.tokenId;
        const v3591 = v3588.collectionId2;
        const v3592 = v3588.tokenId2;
        const v3593 = v3588.endTime;
        const v3596 = stdlib.gt(v3593, v1715);
        stdlib.assert(v3596, {
          at: './index.rsh:3387:20:application',
          fs: ['at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'listing expired',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc2, v3452, ctc4, undefined /* Nothing */);
        const v3597 = v1482.fTok;
        const v3598 = v1482.manager;
        const v3599 = v1482.fee;
        const v3600 = await ctc.getContractAddress();
        const v3601 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1713];
        const v3602 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3598];
        const v3603 = [v1713, v3600];
        const v3604 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3603];
        const v3608 = stdlib.bytesFromHex("0x4a968f8f");
        const v3609 = undefined /* Remote */;
        const v3610 = await txn3.getOutput('internal', 'v3609', ctc17, v3609);
        const v3612 = v3610[stdlib.checkedBigNumberify('./index.rsh:3305:15:application', stdlib.UInt_max, '0')];
        const v3617 = stdlib.add(v1486, v3612);
        const v3618 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3612);
        stdlib.assert(v3618, {
          at: './index.rsh:3305:15:application',
          fs: ['at ./index.rsh:3391:37:application call to [unknown function] (defined at: ./index.rsh:3288:56:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3622 = undefined /* Remote */;
        const v3623 = await txn3.getOutput('internal', 'v3622', ctc8, v3622);
        const v3625 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
        const v3626 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
        const v3630 = stdlib.add(v3617, v3625);
        const v3631 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3625);
        stdlib.assert(v3631, {
          at: './index.rsh:3314:35:application',
          fs: ['at ./index.rsh:3393:39:application call to [unknown function] (defined at: ./index.rsh:3310:31:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3635 = undefined /* Remote */;
        const v3636 = await txn3.getOutput('internal', 'v3635', ctc8, v3635);
        const v3638 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
        const v3639 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
        const v3643 = stdlib.add(v3630, v3638);
        const v3644 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3638);
        stdlib.assert(v3644, {
          at: './index.rsh:3314:35:application',
          fs: ['at ./index.rsh:3394:40:application call to [unknown function] (defined at: ./index.rsh:3310:31:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3646 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3590];
        const v3647 = [v3626, v3600];
        const v3648 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3647];
        const v3649 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
        const v3650 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
        const v3654 = undefined /* Remote */;
        const v3655 = await txn3.getOutput('internal', 'v3654', ctc18, v3654);
        const v3657 = v3655[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
        const v3662 = stdlib.add(v3643, v3657);
        const v3663 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3657);
        stdlib.assert(v3663, {
          at: './index.rsh:3331:15:application',
          fs: ['at ./index.rsh:3396:36:application call to [unknown function] (defined at: ./index.rsh:3317:53:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v3665 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3592];
        const v3666 = [v3639, v3600];
        const v3667 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3666];
        const v3668 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
        const v3669 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
        const v3673 = undefined /* Remote */;
        const v3674 = await txn3.getOutput('internal', 'v3673', ctc18, v3673);
        const v3676 = v3674[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
        const v3681 = stdlib.add(v3662, v3676);
        const v3682 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3676);
        stdlib.assert(v3682, {
          at: './index.rsh:3331:15:application',
          fs: ['at ./index.rsh:3397:36:application call to [unknown function] (defined at: ./index.rsh:3317:53:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        null;
        const v3683 = null;
        await txn3.getOutput('a_swap_execute', 'v3683', ctc0, v3683);
        const cv1482 = v1482;
        const cv1483 = v1715;
        const cv1486 = v3681;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_swap_list0_151': {
        const v3787 = v1714[1];
        undefined /* setApiDetails */;
        const v3818 = v1482.locked;
        const v3819 = v3818 ? false : true;
        stdlib.assert(v3819, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3355:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3354:56:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        ;
        const v4037 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '0')];
        const v4038 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '1')];
        const v4039 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '2')];
        const v4040 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '3')];
        const v4041 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '4')];
        const v4050 = v1482.swapCount;
        const v4051 = stdlib.safeAdd256(v4050, stdlib.checkedBigNumberify('./index.rsh:3359:49:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        null;
        const v4052 = {
          collectionId: v4037,
          collectionId2: v4039,
          endTime: v4041,
          tokenId: v4038,
          tokenId2: v4040
          };
        await stdlib.mapSet(map0, ctc2, v4051, ctc4, v4052);
        await txn3.getOutput('a_swap_list', 'v4051', ctc2, v4051);
        const v4063 = v1482.fTok;
        const v4064 = v1482.fee;
        const v4066 = v1482.manager;
        const v4068 = {
          fTok: v4063,
          fee: v4064,
          locked: v3818,
          manager: v4066,
          swapCount: v4051
          };
        const cv1482 = v4068;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_151': {
        const v4132 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v4417 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '0')];
        const v4418 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '1')];
        const v4419 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '2')];
        const v4420 = v1482.manager;
        const v4421 = stdlib.addressEq(v1713, v4420);
        stdlib.assert(v4421, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:3513:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3515:15:application call to [unknown function] (defined at: ./index.rsh:3515:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v4426 = null;
        await txn3.getOutput('arc200_transfer', 'v4426', ctc0, v4426);
        const v4435 = await ctc.getContractAddress();
        const v4436 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4435];
        const v4437 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4418];
        const v4441 = stdlib.bytesFromHex("0xda7025b9");
        const v4442 = undefined /* Remote */;
        const v4443 = await txn3.getOutput('internal', 'v4442', ctc17, v4442);
        const v4445 = v4443[stdlib.checkedBigNumberify('./index.rsh:3286:15:application', stdlib.UInt_max, '0')];
        const v4450 = stdlib.add(v1486, v4445);
        const v4451 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4445);
        stdlib.assert(v4451, {
          at: './index.rsh:3286:15:application',
          fs: ['at ./index.rsh:3517:33:application call to [unknown function] (defined at: ./index.rsh:3273:45:function exp)', 'at ./index.rsh:3515:15:application call to [unknown function] (defined at: ./index.rsh:3515:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv1482 = v1482;
        const cv1483 = v1715;
        const cv1486 = v4450;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_151': {
        const v4477 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v4799 = null;
        await txn3.getOutput('nop', 'v4799', ctc0, v4799);
        const cv1482 = v1482;
        const cv1483 = v1715;
        const cv1486 = v1486;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_151': {
        const v4822 = v1714[1];
        undefined /* setApiDetails */;
        ;
        const v5153 = (stdlib.le(await ctc.getBalance(), v1486) ? stdlib.checkedBigNumberify('./index.rsh:3489:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1486));
        const v5154 = stdlib.safeAdd(v5153, v1486);
        const v5155 = v1482.manager;
        const v5159 = stdlib.sub(v5154, v5153);
        ;
        const v5160 = null;
        await txn3.getOutput('touch', 'v5160', ctc0, v5160);
        const cv1482 = v1482;
        const cv1483 = v1715;
        const cv1486 = v5159;
        
        v1482 = cv1482;
        v1483 = cv1483;
        v1486 = cv1486;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _a_admin_grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc10,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc11,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc11,
    a_swap_execute0_151: ctc11,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1596 = ctc.selfAddress();
  const v1598 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3442:34:application call to [unknown function] (defined at: ./index.rsh:3442:34:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_grant0_151" (defined at: ./index.rsh:3442:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_admin_grant'
    });
  const v1601 = v1482.manager;
  const v1602 = stdlib.addressEq(v1601, v1596);
  stdlib.assert(v1602, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3443:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3442:34:application call to [unknown function] (defined at: ./index.rsh:3442:34:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_grant0_151" (defined at: ./index.rsh:3442:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_grant'
    });
  const v1609 = ['a_admin_grant0_151', v1598];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1609],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3442:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_grant"
            });
          ;
          const v1755 = v1717[stdlib.checkedBigNumberify('./index.rsh:3442:12:spread', stdlib.UInt_max, '0')];
          const v1760 = null;
          const v1761 = await txn1.getOutput('a_admin_grant', 'v1760', ctc0, v1760);
          
          const v1767 = v1482.fTok;
          const v1768 = v1482.fee;
          const v1769 = v1482.locked;
          const v1771 = v1482.swapCount;
          const v1772 = {
            fTok: v1767,
            fee: v1768,
            locked: v1769,
            manager: v1755,
            swapCount: v1771
            };
          const v7048 = v1772;
          const v7050 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v1755 = v1717[stdlib.checkedBigNumberify('./index.rsh:3442:12:spread', stdlib.UInt_max, '0')];
      const v1756 = v1482.manager;
      const v1757 = stdlib.addressEq(v1756, v1713);
      stdlib.assert(v1757, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3443:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3445:15:application call to [unknown function] (defined at: ./index.rsh:3445:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_grant'
        });
      const v1760 = null;
      const v1761 = await txn1.getOutput('a_admin_grant', 'v1760', ctc0, v1760);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v1717, v1761), {
          at: './index.rsh:3442:13:application',
          fs: ['at ./index.rsh:3442:13:application call to [unknown function] (defined at: ./index.rsh:3442:13:function exp)', 'at ./index.rsh:3446:14:application call to "k" (defined at: ./index.rsh:3445:15:function exp)', 'at ./index.rsh:3445:15:application call to [unknown function] (defined at: ./index.rsh:3445:15:function exp)'],
          msg: 'out',
          who: 'a_admin_grant'
          });
        }
      else {
        }
      
      const v1767 = v1482.fTok;
      const v1768 = v1482.fee;
      const v1769 = v1482.locked;
      const v1771 = v1482.swapCount;
      const v1772 = {
        fTok: v1767,
        fee: v1768,
        locked: v1769,
        manager: v1755,
        swapCount: v1771
        };
      const v7048 = v1772;
      const v7050 = v1486;
      return;
      
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_admin_lock3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_lock3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_lock3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc10,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc11,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc11,
    a_swap_execute0_151: ctc11,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1585 = ctc.selfAddress();
  const v1587 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3429:29:application call to [unknown function] (defined at: ./index.rsh:3429:29:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_lock0_151" (defined at: ./index.rsh:3429:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_admin_lock'
    });
  const v1588 = v1482.manager;
  const v1589 = stdlib.addressEq(v1588, v1585);
  stdlib.assert(v1589, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3430:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3429:29:application call to [unknown function] (defined at: ./index.rsh:3429:29:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_lock0_151" (defined at: ./index.rsh:3429:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_lock'
    });
  const v1594 = ['a_admin_lock0_151', v1587];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1594],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3429:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_lock"
            });
          ;
          const v2121 = v1482.manager;
          const v2124 = null;
          const v2125 = await txn1.getOutput('a_admin_lock', 'v2124', ctc0, v2124);
          
          const v2130 = v1482.fTok;
          const v2131 = v1482.fee;
          const v2134 = v1482.swapCount;
          const v2135 = {
            fTok: v2130,
            fee: v2131,
            locked: true,
            manager: v2121,
            swapCount: v2134
            };
          const v7081 = v2135;
          const v7083 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v2121 = v1482.manager;
      const v2122 = stdlib.addressEq(v2121, v1713);
      stdlib.assert(v2122, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3430:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3432:15:application call to [unknown function] (defined at: ./index.rsh:3432:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_lock'
        });
      const v2124 = null;
      const v2125 = await txn1.getOutput('a_admin_lock', 'v2124', ctc0, v2124);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v2062, v2125), {
          at: './index.rsh:3429:13:application',
          fs: ['at ./index.rsh:3429:13:application call to [unknown function] (defined at: ./index.rsh:3429:13:function exp)', 'at ./index.rsh:3433:14:application call to "k" (defined at: ./index.rsh:3432:15:function exp)', 'at ./index.rsh:3432:15:application call to [unknown function] (defined at: ./index.rsh:3432:15:function exp)'],
          msg: 'out',
          who: 'a_admin_lock'
          });
        }
      else {
        }
      
      const v2130 = v1482.fTok;
      const v2131 = v1482.fee;
      const v2134 = v1482.swapCount;
      const v2135 = {
        fTok: v2130,
        fee: v2131,
        locked: true,
        manager: v2121,
        swapCount: v2134
        };
      const v7081 = v2135;
      const v7083 = v1486;
      return;
      
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_admin_updateFee3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_updateFee3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_updateFee3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc10,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc10,
    a_swap_execute0_151: ctc10,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1626 = ctc.selfAddress();
  const v1628 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3473:37:application call to [unknown function] (defined at: ./index.rsh:3473:37:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_updateFee0_151" (defined at: ./index.rsh:3473:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_admin_updateFee'
    });
  const v1631 = v1482.manager;
  const v1632 = stdlib.addressEq(v1631, v1626);
  stdlib.assert(v1632, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3474:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3473:37:application call to [unknown function] (defined at: ./index.rsh:3473:37:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_updateFee0_151" (defined at: ./index.rsh:3473:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_updateFee'
    });
  const v1639 = ['a_admin_updateFee0_151', v1628];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1639],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3473:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_updateFee"
            });
          ;
          const v2484 = v2407[stdlib.checkedBigNumberify('./index.rsh:3473:12:spread', stdlib.UInt_max, '0')];
          const v2485 = v1482.manager;
          const v2489 = null;
          const v2490 = await txn1.getOutput('a_admin_updateFee', 'v2489', ctc0, v2489);
          
          const v2496 = v1482.fTok;
          const v2498 = v1482.locked;
          const v2500 = v1482.swapCount;
          const v2501 = {
            fTok: v2496,
            fee: v2484,
            locked: v2498,
            manager: v2485,
            swapCount: v2500
            };
          const v7114 = v2501;
          const v7116 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v2484 = v2407[stdlib.checkedBigNumberify('./index.rsh:3473:12:spread', stdlib.UInt_max, '0')];
      const v2485 = v1482.manager;
      const v2486 = stdlib.addressEq(v2485, v1713);
      stdlib.assert(v2486, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3474:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3476:15:application call to [unknown function] (defined at: ./index.rsh:3476:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_updateFee'
        });
      const v2489 = null;
      const v2490 = await txn1.getOutput('a_admin_updateFee', 'v2489', ctc0, v2489);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v2407, v2490), {
          at: './index.rsh:3473:13:application',
          fs: ['at ./index.rsh:3473:13:application call to [unknown function] (defined at: ./index.rsh:3473:13:function exp)', 'at ./index.rsh:3477:14:application call to "k" (defined at: ./index.rsh:3476:15:function exp)', 'at ./index.rsh:3476:15:application call to [unknown function] (defined at: ./index.rsh:3476:15:function exp)'],
          msg: 'out',
          who: 'a_admin_updateFee'
          });
        }
      else {
        }
      
      const v2496 = v1482.fTok;
      const v2498 = v1482.locked;
      const v2500 = v1482.swapCount;
      const v2501 = {
        fTok: v2496,
        fee: v2484,
        locked: v2498,
        manager: v2485,
        swapCount: v2500
        };
      const v7114 = v2501;
      const v7116 = v1486;
      return;
      
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_admin_updateFeeToken3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_updateFeeToken3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_updateFeeToken3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc12,
    a_admin_updateFeeToken0_151: ctc10,
    a_swap_deleteListing0_151: ctc12,
    a_swap_execute0_151: ctc12,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1611 = ctc.selfAddress();
  const v1613 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3460:43:application call to [unknown function] (defined at: ./index.rsh:3460:43:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_updateFeeToken0_151" (defined at: ./index.rsh:3460:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_admin_updateFeeToken'
    });
  const v1616 = v1482.manager;
  const v1617 = stdlib.addressEq(v1616, v1611);
  stdlib.assert(v1617, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3461:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3460:43:application call to [unknown function] (defined at: ./index.rsh:3460:43:function exp)', 'at ./index.rsh:3247:31:application call to "runa_admin_updateFeeToken0_151" (defined at: ./index.rsh:3460:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_updateFeeToken'
    });
  const v1624 = ['a_admin_updateFeeToken0_151', v1613];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1624],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3460:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_updateFeeToken"
            });
          ;
          const v2850 = v2752[stdlib.checkedBigNumberify('./index.rsh:3460:12:spread', stdlib.UInt_max, '0')];
          const v2851 = v1482.manager;
          const v2855 = null;
          const v2856 = await txn1.getOutput('a_admin_updateFeeToken', 'v2855', ctc0, v2855);
          
          const v2863 = v1482.fee;
          const v2864 = v1482.locked;
          const v2866 = v1482.swapCount;
          const v2867 = {
            fTok: v2850,
            fee: v2863,
            locked: v2864,
            manager: v2851,
            swapCount: v2866
            };
          const v7147 = v2867;
          const v7149 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v2850 = v2752[stdlib.checkedBigNumberify('./index.rsh:3460:12:spread', stdlib.UInt_max, '0')];
      const v2851 = v1482.manager;
      const v2852 = stdlib.addressEq(v2851, v1713);
      stdlib.assert(v2852, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3461:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3463:15:application call to [unknown function] (defined at: ./index.rsh:3463:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_updateFeeToken'
        });
      const v2855 = null;
      const v2856 = await txn1.getOutput('a_admin_updateFeeToken', 'v2855', ctc0, v2855);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v2752, v2856), {
          at: './index.rsh:3460:13:application',
          fs: ['at ./index.rsh:3460:13:application call to [unknown function] (defined at: ./index.rsh:3460:13:function exp)', 'at ./index.rsh:3464:14:application call to "k" (defined at: ./index.rsh:3463:15:function exp)', 'at ./index.rsh:3463:15:application call to [unknown function] (defined at: ./index.rsh:3463:15:function exp)'],
          msg: 'out',
          who: 'a_admin_updateFeeToken'
          });
        }
      else {
        }
      
      const v2863 = v1482.fee;
      const v2864 = v1482.locked;
      const v2866 = v1482.swapCount;
      const v2867 = {
        fTok: v2850,
        fee: v2863,
        locked: v2864,
        manager: v2851,
        swapCount: v2866
        };
      const v7147 = v2867;
      const v7149 = v1486;
      return;
      
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_swap_deleteListing3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_swap_deleteListing3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_swap_deleteListing3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc10,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc10,
    a_swap_execute0_151: ctc10,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1566 = ctc.selfAddress();
  const v1568 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3413:40:application call to [unknown function] (defined at: ./index.rsh:3413:40:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_deleteListing0_151" (defined at: ./index.rsh:3413:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_swap_deleteListing'
    });
  const v1569 = v1568[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1571 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v1569, ctc4), null);
  const v1572 = {
    None: 0,
    Some: 1
    }[v1571[0]];
  const v1573 = stdlib.eq(v1572, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1573, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3414:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3413:40:application call to [unknown function] (defined at: ./index.rsh:3413:40:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_deleteListing0_151" (defined at: ./index.rsh:3413:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'listing not found',
    who: 'a_swap_deleteListing'
    });
  const v1575 = v1482.manager;
  const v1576 = stdlib.addressEq(v1575, v1566);
  stdlib.assert(v1576, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3415:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3413:40:application call to [unknown function] (defined at: ./index.rsh:3413:40:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_deleteListing0_151" (defined at: ./index.rsh:3413:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'a_swap_deleteListing'
    });
  const v1583 = ['a_swap_deleteListing0_151', v1568];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1583],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3413:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_swap_deleteListing"
            });
          ;
          const v3216 = v3097[stdlib.checkedBigNumberify('./index.rsh:3413:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v3216, ctc4), null);
          await stdlib.simMapSet(sim_r, 0, ctc2, v3216, ctc4, undefined /* Nothing */);
          null;
          const v3225 = null;
          const v3226 = await txn1.getOutput('a_swap_deleteListing', 'v3225', ctc0, v3225);
          
          const v7180 = v1482;
          const v7182 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v3216 = v3097[stdlib.checkedBigNumberify('./index.rsh:3413:12:spread', stdlib.UInt_max, '0')];
      const v3217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3216, ctc4), null);
      const v3218 = {
        None: 0,
        Some: 1
        }[v3217[0]];
      const v3219 = stdlib.eq(v3218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3219, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3414:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3417:15:application call to [unknown function] (defined at: ./index.rsh:3417:15:function exp)'],
        msg: 'listing not found',
        who: 'a_swap_deleteListing'
        });
      const v3221 = v1482.manager;
      const v3222 = stdlib.addressEq(v3221, v1713);
      stdlib.assert(v3222, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3415:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3417:15:application call to [unknown function] (defined at: ./index.rsh:3417:15:function exp)'],
        msg: 'must be manager',
        who: 'a_swap_deleteListing'
        });
      await stdlib.mapSet(map0, ctc2, v3216, ctc4, undefined /* Nothing */);
      null;
      const v3225 = null;
      const v3226 = await txn1.getOutput('a_swap_deleteListing', 'v3225', ctc0, v3225);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v3097, v3226), {
          at: './index.rsh:3413:13:application',
          fs: ['at ./index.rsh:3413:13:application call to [unknown function] (defined at: ./index.rsh:3413:13:function exp)', 'at ./index.rsh:3420:14:application call to "k" (defined at: ./index.rsh:3417:15:function exp)', 'at ./index.rsh:3417:15:application call to [unknown function] (defined at: ./index.rsh:3417:15:function exp)'],
          msg: 'out',
          who: 'a_swap_deleteListing'
          });
        }
      else {
        }
      
      const v7180 = v1482;
      const v7182 = v1486;
      return;
      
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_swap_execute3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_swap_execute3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_swap_execute3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc10,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc10,
    a_swap_execute0_151: ctc10,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  const ctc16 = stdlib.T_Tuple([ctc3, ctc8]);
  const ctc17 = stdlib.T_Tuple([ctc3, ctc6]);
  const ctc18 = stdlib.T_Tuple([ctc3, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc1, ctc3, ctc6]);
  const ctc20 = stdlib.T_Tuple([ctc6, ctc6]);
  const ctc21 = stdlib.T_Tuple([ctc1, ctc3, ctc20]);
  const ctc22 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1542 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3379:34:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_execute0_151" (defined at: ./index.rsh:3379:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_swap_execute'
    });
  const v1543 = v1542[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1545 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v1543, ctc4), null);
  const v1546 = {
    None: 0,
    Some: 1
    }[v1545[0]];
  const v1547 = stdlib.eq(v1546, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v1547, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3380:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3379:34:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_execute0_151" (defined at: ./index.rsh:3379:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'listing not found',
    who: 'a_swap_execute'
    });
  const v1564 = ['a_swap_execute0_151', v1542];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1564],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3385:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_swap_execute"
            });
          const v3452 = v3442[stdlib.checkedBigNumberify('./index.rsh:3379:12:spread', stdlib.UInt_max, '0')];
          const v3453 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v3452, ctc4), null);
          ;
          const v3585 = await ctc.getContractInfo();
          const v3587 = {
            collectionId: v3585,
            collectionId2: v3585,
            endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
            tokenId2: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v3588 = stdlib.fromSome(v3453, v3587);
          const v3589 = v3588.collectionId;
          const v3590 = v3588.tokenId;
          const v3591 = v3588.collectionId2;
          const v3592 = v3588.tokenId2;
          await stdlib.simMapSet(sim_r, 0, ctc2, v3452, ctc4, undefined /* Nothing */);
          const v3597 = v1482.fTok;
          const v3598 = v1482.manager;
          const v3599 = v1482.fee;
          const v3600 = await ctc.getContractAddress();
          const v3601 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1713];
          const v3602 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3598];
          const v3603 = [v1713, v3600];
          const v3604 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3603];
          const v3608 = stdlib.bytesFromHex("0x4a968f8f");
          const v3609 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3597,
              remote: ({
                accs: [v1713, v3598],
                apps: [v3597],
                bills: stdlib.checkedBigNumberify('./index.rsh:3305:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc19, v3601], [ctc19, v3602], [ctc21, v3604]],
                fees: stdlib.checkedBigNumberify('./index.rsh:3298:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3305:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
          const v3610 = await txn1.getOutput('internal', 'v3609', ctc16, v3609);
          const v3612 = v3610[stdlib.checkedBigNumberify('./index.rsh:3305:15:application', stdlib.UInt_max, '0')];
          const v3617 = stdlib.add(v1486, v3612);
          const v3622 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3589,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v3623 = await txn1.getOutput('internal', 'v3622', ctc17, v3622);
          const v3625 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
          const v3626 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
          const v3630 = stdlib.add(v3617, v3625);
          const v3635 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3591,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
          const v3636 = await txn1.getOutput('internal', 'v3635', ctc17, v3635);
          const v3638 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
          const v3639 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
          const v3643 = stdlib.add(v3630, v3638);
          const v3646 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3590];
          const v3647 = [v3626, v3600];
          const v3648 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3647];
          const v3649 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
          const v3650 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
          const v3654 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3589,
              remote: ({
                accs: [v3626, v3639],
                apps: [v3589],
                bills: stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc22, v3646], [ctc21, v3648], [ctc19, v3649], [ctc19, v3650]],
                fees: stdlib.checkedBigNumberify('./index.rsh:3323:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          const v3655 = await txn1.getOutput('internal', 'v3654', ctc18, v3654);
          const v3657 = v3655[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
          const v3662 = stdlib.add(v3643, v3657);
          const v3665 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3592];
          const v3666 = [v3639, v3600];
          const v3667 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3666];
          const v3668 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
          const v3669 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
          const v3673 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v3591,
              remote: ({
                accs: [v3639, v3626],
                apps: [v3591],
                bills: stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc22, v3665], [ctc21, v3667], [ctc19, v3668], [ctc19, v3669]],
                fees: stdlib.checkedBigNumberify('./index.rsh:3323:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          const v3674 = await txn1.getOutput('internal', 'v3673', ctc18, v3673);
          const v3676 = v3674[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
          const v3681 = stdlib.add(v3662, v3676);
          null;
          const v3683 = null;
          const v3684 = await txn1.getOutput('a_swap_execute', 'v3683', ctc0, v3683);
          
          const v7213 = v1482;
          const v7215 = v3681;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      undefined /* setApiDetails */;
      const v3452 = v3442[stdlib.checkedBigNumberify('./index.rsh:3379:12:spread', stdlib.UInt_max, '0')];
      const v3453 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3452, ctc4), null);
      const v3454 = {
        None: 0,
        Some: 1
        }[v3453[0]];
      const v3455 = stdlib.eq(v3454, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3455, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3380:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3379:34:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3379:34:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
        msg: 'listing not found',
        who: 'a_swap_execute'
        });
      ;
      const v3585 = await ctc.getContractInfo();
      const v3587 = {
        collectionId: v3585,
        collectionId2: v3585,
        endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        tokenId2: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v3588 = stdlib.fromSome(v3453, v3587);
      const v3589 = v3588.collectionId;
      const v3590 = v3588.tokenId;
      const v3591 = v3588.collectionId2;
      const v3592 = v3588.tokenId2;
      const v3593 = v3588.endTime;
      const v3596 = stdlib.gt(v3593, v1715);
      stdlib.assert(v3596, {
        at: './index.rsh:3387:20:application',
        fs: ['at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'listing expired',
        who: 'a_swap_execute'
        });
      await stdlib.mapSet(map0, ctc2, v3452, ctc4, undefined /* Nothing */);
      const v3597 = v1482.fTok;
      const v3598 = v1482.manager;
      const v3599 = v1482.fee;
      const v3600 = await ctc.getContractAddress();
      const v3601 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1713];
      const v3602 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3598];
      const v3603 = [v1713, v3600];
      const v3604 = [v3597, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3603];
      const v3608 = stdlib.bytesFromHex("0x4a968f8f");
      const v3609 = undefined /* Remote */;
      const v3610 = await txn1.getOutput('internal', 'v3609', ctc16, v3609);
      const v3612 = v3610[stdlib.checkedBigNumberify('./index.rsh:3305:15:application', stdlib.UInt_max, '0')];
      const v3617 = stdlib.add(v1486, v3612);
      const v3618 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3612);
      stdlib.assert(v3618, {
        at: './index.rsh:3305:15:application',
        fs: ['at ./index.rsh:3391:37:application call to [unknown function] (defined at: ./index.rsh:3288:56:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_swap_execute'
        });
      const v3622 = undefined /* Remote */;
      const v3623 = await txn1.getOutput('internal', 'v3622', ctc17, v3622);
      const v3625 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
      const v3626 = v3623[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
      const v3630 = stdlib.add(v3617, v3625);
      const v3631 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3625);
      stdlib.assert(v3631, {
        at: './index.rsh:3314:35:application',
        fs: ['at ./index.rsh:3393:39:application call to [unknown function] (defined at: ./index.rsh:3310:31:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_swap_execute'
        });
      const v3635 = undefined /* Remote */;
      const v3636 = await txn1.getOutput('internal', 'v3635', ctc17, v3635);
      const v3638 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '0')];
      const v3639 = v3636[stdlib.checkedBigNumberify('./index.rsh:3314:35:application', stdlib.UInt_max, '1')];
      const v3643 = stdlib.add(v3630, v3638);
      const v3644 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3638);
      stdlib.assert(v3644, {
        at: './index.rsh:3314:35:application',
        fs: ['at ./index.rsh:3394:40:application call to [unknown function] (defined at: ./index.rsh:3310:31:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_swap_execute'
        });
      const v3646 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3590];
      const v3647 = [v3626, v3600];
      const v3648 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3647];
      const v3649 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
      const v3650 = [v3589, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
      const v3654 = undefined /* Remote */;
      const v3655 = await txn1.getOutput('internal', 'v3654', ctc18, v3654);
      const v3657 = v3655[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
      const v3662 = stdlib.add(v3643, v3657);
      const v3663 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3657);
      stdlib.assert(v3663, {
        at: './index.rsh:3331:15:application',
        fs: ['at ./index.rsh:3396:36:application call to [unknown function] (defined at: ./index.rsh:3317:53:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_swap_execute'
        });
      const v3665 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3592];
      const v3666 = [v3639, v3600];
      const v3667 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v3666];
      const v3668 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3626];
      const v3669 = [v3591, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3639];
      const v3673 = undefined /* Remote */;
      const v3674 = await txn1.getOutput('internal', 'v3673', ctc18, v3673);
      const v3676 = v3674[stdlib.checkedBigNumberify('./index.rsh:3331:15:application', stdlib.UInt_max, '0')];
      const v3681 = stdlib.add(v3662, v3676);
      const v3682 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3676);
      stdlib.assert(v3682, {
        at: './index.rsh:3331:15:application',
        fs: ['at ./index.rsh:3397:36:application call to [unknown function] (defined at: ./index.rsh:3317:53:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_swap_execute'
        });
      null;
      const v3683 = null;
      const v3684 = await txn1.getOutput('a_swap_execute', 'v3683', ctc0, v3683);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v3442, v3684), {
          at: './index.rsh:3379:13:application',
          fs: ['at ./index.rsh:3379:13:application call to [unknown function] (defined at: ./index.rsh:3379:13:function exp)', 'at ./index.rsh:3401:14:application call to "k" (defined at: ./index.rsh:3386:15:function exp)', 'at ./index.rsh:3386:15:application call to [unknown function] (defined at: ./index.rsh:3386:15:function exp)'],
          msg: 'out',
          who: 'a_swap_execute'
          });
        }
      else {
        }
      
      const v7213 = v1482;
      const v7215 = v3681;
      return;
      
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_swap_list3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_swap_list3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_swap_list3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc12,
    a_admin_updateFeeToken0_151: ctc13,
    a_swap_deleteListing0_151: ctc12,
    a_swap_execute0_151: ctc12,
    a_swap_list0_151: ctc10,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1511 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3354:56:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_list0_151" (defined at: ./index.rsh:3354:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'a_swap_list'
    });
  const v1522 = v1482.locked;
  const v1523 = v1522 ? false : true;
  stdlib.assert(v1523, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3355:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3354:56:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to "runa_swap_list0_151" (defined at: ./index.rsh:3354:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'locked',
    who: 'a_swap_list'
    });
  const v1538 = ['a_swap_list0_151', v1511];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1538],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3357:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_swap_list"
            });
          const v3818 = v1482.locked;
          ;
          const v4037 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '0')];
          const v4038 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '1')];
          const v4039 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '2')];
          const v4040 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '3')];
          const v4041 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '4')];
          const v4050 = v1482.swapCount;
          const v4051 = stdlib.safeAdd256(v4050, stdlib.checkedBigNumberify('./index.rsh:3359:49:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          null;
          const v4052 = {
            collectionId: v4037,
            collectionId2: v4039,
            endTime: v4041,
            tokenId: v4038,
            tokenId2: v4040
            };
          await stdlib.simMapSet(sim_r, 0, ctc2, v4051, ctc4, v4052);
          const v4053 = await txn1.getOutput('a_swap_list', 'v4051', ctc2, v4051);
          
          const v4063 = v1482.fTok;
          const v4064 = v1482.fee;
          const v4066 = v1482.manager;
          const v4068 = {
            fTok: v4063,
            fee: v4064,
            locked: v3818,
            manager: v4066,
            swapCount: v4051
            };
          const v7246 = v4068;
          const v7248 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      undefined /* setApiDetails */;
      const v3818 = v1482.locked;
      const v3819 = v3818 ? false : true;
      stdlib.assert(v3819, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3355:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3354:56:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3354:56:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
        msg: 'locked',
        who: 'a_swap_list'
        });
      ;
      const v4037 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '0')];
      const v4038 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '1')];
      const v4039 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '2')];
      const v4040 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '3')];
      const v4041 = v3787[stdlib.checkedBigNumberify('./index.rsh:3354:12:spread', stdlib.UInt_max, '4')];
      const v4050 = v1482.swapCount;
      const v4051 = stdlib.safeAdd256(v4050, stdlib.checkedBigNumberify('./index.rsh:3359:49:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      null;
      const v4052 = {
        collectionId: v4037,
        collectionId2: v4039,
        endTime: v4041,
        tokenId: v4038,
        tokenId2: v4040
        };
      await stdlib.mapSet(map0, ctc2, v4051, ctc4, v4052);
      const v4053 = await txn1.getOutput('a_swap_list', 'v4051', ctc2, v4051);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v3787, v4053), {
          at: './index.rsh:3354:13:application',
          fs: ['at ./index.rsh:3354:13:application call to [unknown function] (defined at: ./index.rsh:3354:13:function exp)', 'at ./index.rsh:3368:14:application call to "k" (defined at: ./index.rsh:3358:15:function exp)', 'at ./index.rsh:3358:15:application call to [unknown function] (defined at: ./index.rsh:3358:15:function exp)'],
          msg: 'out',
          who: 'a_swap_list'
          });
        }
      else {
        }
      
      const v4063 = v1482.fTok;
      const v4064 = v1482.fee;
      const v4066 = v1482.manager;
      const v4068 = {
        fTok: v4063,
        fee: v4064,
        locked: v3818,
        manager: v4066,
        swapCount: v4051
        };
      const v7246 = v4068;
      const v7248 = v1486;
      return;
      
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc2]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc11,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc12,
    a_admin_updateFeeToken0_151: ctc13,
    a_swap_deleteListing0_151: ctc12,
    a_swap_execute0_151: ctc12,
    a_swap_list0_151: ctc14,
    arc200_transfer0_151: ctc10,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  const ctc16 = stdlib.T_Tuple([ctc3, ctc8]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc6]);
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1657 = ctc.selfAddress();
  const v1659 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3512:57:application call to [unknown function] (defined at: ./index.rsh:3512:57:function exp)', 'at ./index.rsh:3247:31:application call to "runarc200_transfer0_151" (defined at: ./index.rsh:3512:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1666 = v1482.manager;
  const v1667 = stdlib.addressEq(v1657, v1666);
  stdlib.assert(v1667, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:3513:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3512:57:application call to [unknown function] (defined at: ./index.rsh:3512:57:function exp)', 'at ./index.rsh:3247:31:application call to "runarc200_transfer0_151" (defined at: ./index.rsh:3512:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'must be manager',
    who: 'arc200_transfer'
    });
  const v1678 = ['arc200_transfer0_151', v1659];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1678],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3512:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v4417 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '0')];
          const v4418 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '1')];
          const v4419 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '2')];
          const v4426 = null;
          const v4427 = await txn1.getOutput('arc200_transfer', 'v4426', ctc0, v4426);
          
          const v4435 = await ctc.getContractAddress();
          const v4436 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4435];
          const v4437 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4418];
          const v4441 = stdlib.bytesFromHex("0xda7025b9");
          const v4442 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v4417,
              remote: ({
                accs: [v4418],
                apps: [v4417],
                bills: stdlib.checkedBigNumberify('./index.rsh:3286:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc17, v4436], [ctc17, v4437]],
                fees: stdlib.checkedBigNumberify('./index.rsh:3280:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:3286:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
          const v4443 = await txn1.getOutput('internal', 'v4442', ctc16, v4442);
          const v4445 = v4443[stdlib.checkedBigNumberify('./index.rsh:3286:15:application', stdlib.UInt_max, '0')];
          const v4450 = stdlib.add(v1486, v4445);
          const v7279 = v1482;
          const v7281 = v4450;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v4417 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '0')];
      const v4418 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '1')];
      const v4419 = v4132[stdlib.checkedBigNumberify('./index.rsh:3512:12:spread', stdlib.UInt_max, '2')];
      const v4420 = v1482.manager;
      const v4421 = stdlib.addressEq(v1713, v4420);
      stdlib.assert(v4421, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:3513:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:3515:15:application call to [unknown function] (defined at: ./index.rsh:3515:15:function exp)'],
        msg: 'must be manager',
        who: 'arc200_transfer'
        });
      const v4426 = null;
      const v4427 = await txn1.getOutput('arc200_transfer', 'v4426', ctc0, v4426);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v4132, v4427), {
          at: './index.rsh:3512:13:application',
          fs: ['at ./index.rsh:3512:13:application call to [unknown function] (defined at: ./index.rsh:3512:13:function exp)', 'at ./index.rsh:3516:14:application call to "k" (defined at: ./index.rsh:3515:15:function exp)', 'at ./index.rsh:3515:15:application call to [unknown function] (defined at: ./index.rsh:3515:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v4435 = await ctc.getContractAddress();
      const v4436 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4435];
      const v4437 = [v4417, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4418];
      const v4441 = stdlib.bytesFromHex("0xda7025b9");
      const v4442 = undefined /* Remote */;
      const v4443 = await txn1.getOutput('internal', 'v4442', ctc16, v4442);
      const v4445 = v4443[stdlib.checkedBigNumberify('./index.rsh:3286:15:application', stdlib.UInt_max, '0')];
      const v4450 = stdlib.add(v1486, v4445);
      const v4451 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4445);
      stdlib.assert(v4451, {
        at: './index.rsh:3286:15:application',
        fs: ['at ./index.rsh:3517:33:application call to [unknown function] (defined at: ./index.rsh:3273:45:function exp)', 'at ./index.rsh:3515:15:application call to [unknown function] (defined at: ./index.rsh:3515:15:function exp)'],
        msg: 'remote bill check',
        who: 'arc200_transfer'
        });
      const v7279 = v1482;
      const v7281 = v4450;
      return;
      
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc10,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc11,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc11,
    a_swap_execute0_151: ctc11,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1651 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3500:23:application call to [unknown function] (defined at: ./index.rsh:3500:23:function exp)', 'at ./index.rsh:3247:31:application call to "runnop0_151" (defined at: ./index.rsh:3500:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v1655 = ['nop0_151', v1651];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1655],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3500:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v4799 = null;
          const v4800 = await txn1.getOutput('nop', 'v4799', ctc0, v4799);
          
          const v7312 = v1482;
          const v7314 = v1486;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v4799 = null;
      const v4800 = await txn1.getOutput('nop', 'v4799', ctc0, v4799);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v4477, v4800), {
          at: './index.rsh:3500:13:application',
          fs: ['at ./index.rsh:3500:13:application call to [unknown function] (defined at: ./index.rsh:3500:13:function exp)', 'at ./index.rsh:3503:14:application call to "k" (defined at: ./index.rsh:3502:15:function exp)', 'at ./index.rsh:3502:15:application call to [unknown function] (defined at: ./index.rsh:3502:15:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v7312 = v1482;
      const v7314 = v1486;
      return;
      
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['collectionId2', ctc1], ['tokenId2', ctc2], ['endTime', ctc3]]);
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Object({
    fTok: ctc1,
    fee: ctc2,
    locked: ctc8,
    manager: ctc6,
    swapCount: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc6]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc6, ctc2]);
  const ctc15 = stdlib.T_Data({
    a_admin_grant0_151: ctc10,
    a_admin_lock0_151: ctc7,
    a_admin_updateFee0_151: ctc11,
    a_admin_updateFeeToken0_151: ctc12,
    a_swap_deleteListing0_151: ctc11,
    a_swap_execute0_151: ctc11,
    a_swap_list0_151: ctc13,
    arc200_transfer0_151: ctc14,
    nop0_151: ctc7,
    touch0_151: ctc7
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v1460, v1468, v1473, v1482, v1486] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc6, ctc9, ctc3]);
  const v1643 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:3486:25:application call to [unknown function] (defined at: ./index.rsh:3486:25:function exp)', 'at ./index.rsh:3247:31:application call to "runtouch0_151" (defined at: ./index.rsh:3486:12:function exp)', 'at ./index.rsh:3247:31:application call to [unknown function] (defined at: ./index.rsh:3247:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v1647 = ['touch0_151', v1643];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1460, v1468, v1473, v1482, v1486, v1647],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3486:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
      
      switch (v1714[0]) {
        case 'a_admin_grant0_151': {
          const v1717 = v1714[1];
          
          break;
          }
        case 'a_admin_lock0_151': {
          const v2062 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFee0_151': {
          const v2407 = v1714[1];
          
          break;
          }
        case 'a_admin_updateFeeToken0_151': {
          const v2752 = v1714[1];
          
          break;
          }
        case 'a_swap_deleteListing0_151': {
          const v3097 = v1714[1];
          
          break;
          }
        case 'a_swap_execute0_151': {
          const v3442 = v1714[1];
          
          break;
          }
        case 'a_swap_list0_151': {
          const v3787 = v1714[1];
          
          break;
          }
        case 'arc200_transfer0_151': {
          const v4132 = v1714[1];
          
          break;
          }
        case 'nop0_151': {
          const v4477 = v1714[1];
          
          break;
          }
        case 'touch0_151': {
          const v4822 = v1714[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v5153 = (stdlib.le(await ctc.getBalance(), v1486) ? stdlib.checkedBigNumberify('./index.rsh:3489:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1486));
          const v5154 = stdlib.safeAdd(v5153, v1486);
          const v5155 = v1482.manager;
          const v5159 = stdlib.sub(v5154, v5153);
          sim_r.txns.push({
            kind: 'from',
            to: v5155,
            tok: undefined /* Nothing */
            });
          const v5160 = null;
          const v5161 = await txn1.getOutput('touch', 'v5160', ctc0, v5160);
          
          const v7345 = v1482;
          const v7347 = v5159;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc6, ctc9, ctc3, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v1714], secs: v1716, time: v1715, didSend: v941, from: v1713 } = txn1;
  switch (v1714[0]) {
    case 'a_admin_grant0_151': {
      const v1717 = v1714[1];
      return;
      break;
      }
    case 'a_admin_lock0_151': {
      const v2062 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_151': {
      const v2407 = v1714[1];
      return;
      break;
      }
    case 'a_admin_updateFeeToken0_151': {
      const v2752 = v1714[1];
      return;
      break;
      }
    case 'a_swap_deleteListing0_151': {
      const v3097 = v1714[1];
      return;
      break;
      }
    case 'a_swap_execute0_151': {
      const v3442 = v1714[1];
      return;
      break;
      }
    case 'a_swap_list0_151': {
      const v3787 = v1714[1];
      return;
      break;
      }
    case 'arc200_transfer0_151': {
      const v4132 = v1714[1];
      return;
      break;
      }
    case 'nop0_151': {
      const v4477 = v1714[1];
      return;
      break;
      }
    case 'touch0_151': {
      const v4822 = v1714[1];
      undefined /* setApiDetails */;
      ;
      const v5153 = (stdlib.le(await ctc.getBalance(), v1486) ? stdlib.checkedBigNumberify('./index.rsh:3489:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1486));
      const v5154 = stdlib.safeAdd(v5153, v1486);
      const v5155 = v1482.manager;
      const v5159 = stdlib.sub(v5154, v5153);
      ;
      const v5160 = null;
      const v5161 = await txn1.getOutput('touch', 'v5160', ctc0, v5160);
      if (v941) {
        stdlib.protect(ctc0, await interact.out(v4822, v5161), {
          at: './index.rsh:3486:13:application',
          fs: ['at ./index.rsh:3486:13:application call to [unknown function] (defined at: ./index.rsh:3486:13:function exp)', 'at ./index.rsh:3491:14:application call to "k" (defined at: ./index.rsh:3488:15:function exp)', 'at ./index.rsh:3488:15:application call to [unknown function] (defined at: ./index.rsh:3488:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v7345 = v1482;
      const v7347 = v5159;
      return;
      
      break;
      }
    }
  
  
  };
export async function a_admin_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_admin_lock(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_lock expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_lock expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_lock3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_admin_updateFee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_updateFee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_updateFee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_updateFee3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_admin_updateFeeToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_updateFeeToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_updateFeeToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_updateFeeToken3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_swap_deleteListing(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_swap_deleteListing expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_swap_deleteListing expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_swap_deleteListing3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_swap_execute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_swap_execute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_swap_execute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_swap_execute3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_swap_list(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_swap_list expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_swap_list expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_swap_list3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _nop3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,(uint64,uint64,uint256)))void`, `_reachp_2((uint64,(byte,byte[88])))void`, `a_admin_grant(address)void`, `a_admin_lock()void`, `a_admin_updateFee(uint256)void`, `a_admin_updateFeeToken(uint64)void`, `a_swap_deleteListing(uint256)void`, `a_swap_execute(uint256)void`, `a_swap_list(uint64,uint256,uint64,uint256,uint64)uint256`, `arc200_transfer(uint64,address,uint256)void`, `nop()void`, `touch()void`],
    pure: [`constructor()address`, `manager()address`, `state()(address,byte,uint256,uint64,uint256)`, `supportsInterface(byte[4])byte`, `v_swap_listingByIndex(uint256)(uint64,uint256,uint64,uint256,uint64)`, `zeroAddress()address`],
    sigs: [`_reachp_0((uint64,(uint64,uint64,uint256)))void`, `_reachp_2((uint64,(byte,byte[88])))void`, `a_admin_grant(address)void`, `a_admin_lock()void`, `a_admin_updateFee(uint256)void`, `a_admin_updateFeeToken(uint64)void`, `a_swap_deleteListing(uint256)void`, `a_swap_execute(uint256)void`, `a_swap_list(uint64,uint256,uint64,uint256,uint64)uint256`, `arc200_transfer(uint64,address,uint256)void`, `constructor()address`, `manager()address`, `nop()void`, `state()(address,byte,uint256,uint64,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`, `v_swap_listingByIndex(uint256)(uint64,uint256,uint64,uint256,uint64)`, `zeroAddress()address`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSAMAAgGAwE4WNSNA1AQKAUmBgABAAVhcHBJRAEBBHkJahQE8vGUoDEYQQrUKGRJIls1AUkjWzUCIQlbNQUpZCtkUIISBAx5HnsEEcq+DgQxJrKiBDNujV8ETDHUkwRSHi1hBFh1n6IEZ0NAMQRzyo0GBH2OT9oEljM0ywSkCuB0BKTjSc4EwlCCqgTEaxjsBNQUpykE2FHeJwTjPYBSNhoAjhIJ9goKCfkLGgoaCrkKswqwChIJ4woBClwJ7gq2CxIJtgpvCsEANBBXKSAxABJEKDULgAgAAAAAAAAG4DQLULA0CzUENBBXAAg0EFcIIFA0EFcoAVA0DVcBIFA0EFdJIFAyBjUPNRA0EzQSUDQRUDQQUDQOFlAlMgY1AjUBKUsBVwB/ZytMV38yZyg0ARY0AhZQNAUWUGcxGSISRIgK5DQDQAAKgAQVH3x1NARQsCEEQzQQVykgSTUMMQASRCg1C4AIAAAAAAAACEw0C1CwNAs1BDQQVwAINBBXCCBQK1A0DFA0EFdJIFAyBjUPNRBC/3Y0EFcpIEk1DDEAEkQoNQuACAAAAAAAAAm5NAtQsDQLNQQ0EFcACDQNVwEgUDQQVygBUDQMUDQQV0kgUDIGNQ81EEL/MjQQVykgSTUMMQASRCg1C4AIAAAAAAAACyc0C1CwNAs1BDQNVwEINBBXCCBQNBBXKAFQNAxQNBBXSSBQMgY1DzUQQv7uNA1XASA1CyghBq8pNAtQiAnVIlUhBBJENBBXKSAxABJEIQcpNAtQiAn8gAQZLKnbNAtQsCg1C4AIAAAAAAAADJk0C1CwNAs1BDIGNQ9C/p6xIrIBJLIQNAWyGLM0DVcBIDULKCEGryk0C1CICXlJNRQiVSEEEkQxGEk1DBYyA1A0DBZQMgNQI69QNBSICXJJNQ0iWzUcNA1XCCA1DDQNIQpbNRs0DVcwIDUaNA0hCFsyBg1EIQcpNAtQiAlpNBAiWzUWNBBXKSA1FDIKNQ0qNBYWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0FrIYgARKlo+PshoxAEmyHLIaNBRJshyyGjQQVwggsho0FrIyszIKYDQJCTQKFwkWtwA+VwQAUDUVgAgAAAAAAAAOGTQVULA0FUk1FCJbNRkiNBkSRCo0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQcshgnBLIaNAyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1FYAIAAAAAAAADiY0FVCwNBVJNRQiWzUYNBRXCCA1FyI0GBJEKjQbFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBuyGCcEsho0GrIaszIKYDQJCTQKFwkWtwA+VwQAUDUVgAgAAAAAAAAOMzQVULA0FUk1FCJbNRY0FFcIIDUVIjQWEkQqNBwWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0HLIYJwWyGjQXSbIcsho0FUmyHLIaNAyyGjQcsjKzMgpgNAkJNAoXCRa3AD5XBABQNRSACAAAAAAAAA5GNBRQsDQUSTUMIls1FCI0FBJEKjQbFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBuyGCcFsho0FUmyHLIaNBdJshyyGjQasho0G7IyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAOWTQMULA0DEk1DSJbNQwiNAwSRIAEpEqfOTQLUDQXUDQVULAoNQuACAAAAAAAAA5jNAtQsDQLNQQyBjQONBkINBgINBYINBQINAwINQ41D0L7zzQQVygBF0k1FxRENAsiWzUWNAtXCCA1FTQLIQpbNRQ0C1cwIDUNNAshCFs1DDQQV0kggCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBJFYEgTAmvTFA1C4AE5qlA/jQLUDQWFlA0FVA0FBZQNA1QNAwWULAhByk0C1A0FhY0FVA0FBZQNA1QNAwWUIgGgIAIAAAAAAAAD9M0C1CwNAs1BDQQVwAINBBXCCBQNBcWUQcIUDQQVykgUDQLUDIGNQ81EEL7AzQLIls1FDQLVwggNQ0xADQQVykgEkQoNQyACAAAAAAAABFKNAxQsDQMNQQqNBQWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0FLIYgATacCW5sho0DUmyHLIaNAtXKCCyGjQUsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAABFaNAxQsDQMSTULIls1DCI0DBJEMgY0DjQMCDUONQ9C+l0oNQuACAAAAAAAABK/NAtQsDQLNQQyBjUPQvpBMgpgMgp4CTQOCUk1DDQQVykgiAVaKDULgAgAAAAAAAAUKDQLULA0CzUEMgY0DDQOCDQMCTUONQ9C+gYjryk0C1AhBa9QUDULJTQBEkSIBMw0CyJbNQw0C1cIWTUNgASL+Ir2NAwWUDQNULA0DIgE2jQNIlWNCgQZBBwEHwQiA+cD6gPtA/cEAQQEQvlygGEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/1Mjr4ABAjQLUCEFr1BQNQtC/0Ejr4ABAzQLFlAhCK9QUDULQv8uI6+AAQQ0C1AhBa9QUDULQv8cI6+AAQU0C1AhBa9QUDULQv8KI6+AAQY0DxY0DlA0DRZQNAxQNAsWUFBQNQtC/u0jr4ABBzQNFjQMUDQLUFAhCa9QUDULQv7UNAElEkSIA6A0EzUEMRkiEkRC+PY0ASUSRIgDjDQQVykgNQRC/+aAYQAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+RjQBJRJEiAMSNBBXKSA0EFcoAVA0EFcIIFA0EFcACFA0EFdJIFA1BEL/VDQBJRJEiALogCDfP2GYBKkv20BXGS3EPddI6neK3FK8SYzoBSTAFLgRGTQLARIWUQcINQRC/x2AYQAAAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L9fTQBJRJEiAJJMRhJNQwWMgNQNAwWUDIDUCOvUCghBq8pNAtQiAJJiAJgNQRC/oc0ASUSRIgCGzQRNQRC/ngxADUTNAsiWzUMNAtXCDA1DYAEz0FDSzQMFlA0DVCwNAyIAh4oNRIqNA1XAAhQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQNIluyGIAEM26NX7IaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAAFvTQLULA0C0k1DCJbNQs0DFcIIDURIjQLEkQ0DVcICDQNVxAgUClQNBNQMgNQMgY0CzUONQ81EEL2jIgBjYHAmgyIAbSxIrIBJLIQgAYIMQAyCRKyHoABCLIfs7Q9NQU2GgE1C0L/JogBYDYaATULQvxbNhoBNQtC/EZC/JU2GgE1C0L89TYaARc1C0L8/jYaATULQv0JNhoBNQtC/RM2GgEXNhoCNhoDFzYaBDYaBRc1CzUMNQ01DjUPQv0GIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQWIAPOBsQGvIiJC9fg2GgEXNhoCNhoDNQs1DDUNQvztQv0DQvbfQvcsNA1XAVg1C0L58TQNVwFINQtC+rNC+1ZC+29ITL9IiSKyASEEshCyB7IIs4lC9VpC9eJC9h9C9mBC/NZC/OVC/Uo2GgE1C0L9bEL9oEiJTAlJNQYyCYgAoIkJSUH/7kk1BjEWNAAhBAhJNQAJRwKJMRkhCxJEsSKyASSyEDQFshghC7IZs4GgjQaIAGaIAFciMgoyCYgAdEL1aDYaATULQv2yQv3dSVcAIDUTSUgoNRJJVyAgNRFJV0BpNRCBqQFbNQ6JvkkWUQcIRQRNUIkhBDUDiUkiEkw0AhIRRIlJVwEATCJVTYk0BjQHSg9B/19C/2c0Bwg1B4mxQv8jNAYINQaJvCJOAk2I/+iJsbIJQv8OTEm9QP8DSwOI/+BC/vs=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `545`,
    1001: `545`,
    1002: `546`,
    1003: `551`,
    1004: `551`,
    1005: `552`,
    1006: `553`,
    1007: `553`,
    1008: `554`,
    1009: `555`,
    101: `25`,
    1010: `555`,
    1011: `556`,
    1012: `557`,
    1013: `558`,
    1014: `559`,
    1015: `559`,
    1016: `559`,
    1017: `560`,
    1018: `560`,
    1019: `560`,
    102: `25`,
    1020: `561`,
    1021: `562`,
    1022: `562`,
    1023: `563`,
    1024: `563`,
    1025: `563`,
    1026: `563`,
    1027: `563`,
    1028: `563`,
    1029: `563`,
    103: `25`,
    1030: `563`,
    1031: `563`,
    1032: `563`,
    1033: `564`,
    1034: `564`,
    1035: `565`,
    1036: `566`,
    1037: `567`,
    1038: `567`,
    1039: `568`,
    104: `25`,
    1040: `569`,
    1041: `569`,
    1042: `570`,
    1043: `571`,
    1044: `572`,
    1045: `572`,
    1046: `573`,
    1047: `573`,
    1048: `574`,
    1049: `574`,
    105: `25`,
    1050: `574`,
    1051: `575`,
    1052: `575`,
    1053: `576`,
    1054: `577`,
    1055: `577`,
    1056: `578`,
    1057: `579`,
    1058: `584`,
    1059: `585`,
    106: `25`,
    1060: `585`,
    1061: `586`,
    1062: `587`,
    1063: `588`,
    1064: `589`,
    1065: `589`,
    1066: `590`,
    1067: `590`,
    1068: `591`,
    1069: `592`,
    107: `25`,
    1070: `592`,
    1071: `593`,
    1072: `594`,
    1073: `594`,
    1074: `595`,
    1075: `596`,
    1076: `596`,
    1077: `597`,
    1078: `598`,
    1079: `599`,
    108: `25`,
    1080: `599`,
    1081: `600`,
    1082: `601`,
    1083: `602`,
    1084: `602`,
    1085: `603`,
    1086: `604`,
    1087: `604`,
    1088: `605`,
    1089: `605`,
    109: `25`,
    1090: `606`,
    1091: `606`,
    1092: `607`,
    1093: `607`,
    1094: `608`,
    1095: `608`,
    1096: `609`,
    1097: `609`,
    1098: `611`,
    1099: `612`,
    11: `2`,
    110: `25`,
    1100: `612`,
    1101: `613`,
    1102: `613`,
    1103: `614`,
    1104: `614`,
    1105: `616`,
    1106: `617`,
    1107: `617`,
    1108: `618`,
    1109: `618`,
    111: `25`,
    1110: `619`,
    1111: `619`,
    1112: `620`,
    1113: `620`,
    1114: `625`,
    1115: `625`,
    1116: `626`,
    1117: `626`,
    1118: `627`,
    1119: `632`,
    112: `25`,
    1120: `632`,
    1121: `633`,
    1122: `634`,
    1123: `634`,
    1124: `635`,
    1125: `636`,
    1126: `636`,
    1127: `637`,
    1128: `638`,
    1129: `639`,
    113: `25`,
    1130: `640`,
    1131: `640`,
    1132: `640`,
    1133: `641`,
    1134: `641`,
    1135: `641`,
    1136: `642`,
    1137: `643`,
    1138: `643`,
    1139: `644`,
    114: `25`,
    1140: `644`,
    1141: `644`,
    1142: `644`,
    1143: `644`,
    1144: `644`,
    1145: `644`,
    1146: `644`,
    1147: `644`,
    1148: `644`,
    1149: `645`,
    115: `25`,
    1150: `645`,
    1151: `646`,
    1152: `647`,
    1153: `648`,
    1154: `648`,
    1155: `649`,
    1156: `650`,
    1157: `650`,
    1158: `651`,
    1159: `652`,
    116: `25`,
    1160: `653`,
    1161: `653`,
    1162: `654`,
    1163: `655`,
    1164: `655`,
    1165: `656`,
    1166: `657`,
    1167: `662`,
    1168: `663`,
    1169: `663`,
    117: `25`,
    1170: `664`,
    1171: `665`,
    1172: `666`,
    1173: `667`,
    1174: `667`,
    1175: `668`,
    1176: `668`,
    1177: `669`,
    1178: `670`,
    1179: `670`,
    118: `25`,
    1180: `671`,
    1181: `672`,
    1182: `672`,
    1183: `673`,
    1184: `674`,
    1185: `674`,
    1186: `675`,
    1187: `676`,
    1188: `677`,
    1189: `677`,
    119: `25`,
    1190: `678`,
    1191: `679`,
    1192: `680`,
    1193: `680`,
    1194: `681`,
    1195: `682`,
    1196: `682`,
    1197: `683`,
    1198: `683`,
    1199: `684`,
    12: `2`,
    120: `25`,
    1200: `684`,
    1201: `685`,
    1202: `685`,
    1203: `686`,
    1204: `686`,
    1205: `687`,
    1206: `687`,
    1207: `688`,
    1208: `689`,
    1209: `689`,
    121: `25`,
    1210: `690`,
    1211: `690`,
    1212: `691`,
    1213: `691`,
    1214: `692`,
    1215: `693`,
    1216: `693`,
    1217: `694`,
    1218: `694`,
    1219: `695`,
    122: `25`,
    1220: `695`,
    1221: `696`,
    1222: `696`,
    1223: `701`,
    1224: `701`,
    1225: `702`,
    1226: `702`,
    1227: `703`,
    1228: `708`,
    1229: `708`,
    123: `25`,
    1230: `709`,
    1231: `710`,
    1232: `710`,
    1233: `711`,
    1234: `712`,
    1235: `712`,
    1236: `713`,
    1237: `714`,
    1238: `715`,
    1239: `716`,
    124: `25`,
    1240: `716`,
    1241: `716`,
    1242: `717`,
    1243: `717`,
    1244: `717`,
    1245: `718`,
    1246: `719`,
    1247: `719`,
    1248: `720`,
    1249: `720`,
    125: `25`,
    1250: `720`,
    1251: `720`,
    1252: `720`,
    1253: `720`,
    1254: `720`,
    1255: `720`,
    1256: `720`,
    1257: `720`,
    1258: `721`,
    1259: `721`,
    126: `25`,
    1260: `722`,
    1261: `723`,
    1262: `724`,
    1263: `724`,
    1264: `725`,
    1265: `726`,
    1266: `726`,
    1267: `727`,
    1268: `728`,
    1269: `729`,
    127: `25`,
    1270: `729`,
    1271: `730`,
    1272: `731`,
    1273: `731`,
    1274: `732`,
    1275: `733`,
    1276: `738`,
    1277: `738`,
    1278: `738`,
    1279: `738`,
    128: `25`,
    1280: `738`,
    1281: `738`,
    1282: `739`,
    1283: `739`,
    1284: `740`,
    1285: `741`,
    1286: `741`,
    1287: `742`,
    1288: `743`,
    1289: `743`,
    129: `25`,
    1290: `744`,
    1291: `745`,
    1292: `747`,
    1293: `748`,
    1294: `748`,
    1295: `749`,
    1296: `749`,
    1297: `749`,
    1298: `749`,
    1299: `749`,
    13: `2`,
    130: `25`,
    1300: `749`,
    1301: `749`,
    1302: `749`,
    1303: `749`,
    1304: `749`,
    1305: `750`,
    1306: `750`,
    1307: `751`,
    1308: `752`,
    1309: `753`,
    131: `25`,
    1310: `753`,
    1311: `754`,
    1312: `754`,
    1313: `755`,
    1314: `755`,
    1315: `756`,
    1316: `756`,
    1317: `757`,
    1318: `757`,
    1319: `758`,
    132: `25`,
    1320: `759`,
    1321: `759`,
    1322: `760`,
    1323: `761`,
    1324: `761`,
    1325: `762`,
    1326: `763`,
    1327: `763`,
    1328: `764`,
    1329: `765`,
    133: `25`,
    1330: `765`,
    1331: `766`,
    1332: `767`,
    1333: `767`,
    1334: `768`,
    1335: `768`,
    1336: `769`,
    1337: `769`,
    1338: `769`,
    1339: `772`,
    134: `25`,
    1340: `772`,
    1341: `773`,
    1342: `773`,
    1343: `773`,
    1344: `774`,
    1345: `775`,
    1346: `776`,
    1347: `776`,
    1348: `777`,
    1349: `778`,
    135: `25`,
    1350: `785`,
    1351: `785`,
    1352: `786`,
    1353: `787`,
    1354: `788`,
    1355: `788`,
    1356: `789`,
    1357: `789`,
    1358: `790`,
    1359: `790`,
    136: `25`,
    1360: `790`,
    1361: `791`,
    1362: `791`,
    1363: `792`,
    1364: `792`,
    1365: `793`,
    1366: `793`,
    1367: `794`,
    1368: `795`,
    1369: `795`,
    137: `25`,
    1370: `796`,
    1371: `796`,
    1372: `797`,
    1373: `797`,
    1374: `797`,
    1375: `798`,
    1376: `798`,
    1377: `799`,
    1378: `799`,
    1379: `800`,
    138: `25`,
    1380: `800`,
    1381: `801`,
    1382: `802`,
    1383: `802`,
    1384: `803`,
    1385: `803`,
    1386: `804`,
    1387: `804`,
    1388: `804`,
    1389: `805`,
    139: `25`,
    1390: `805`,
    1391: `805`,
    1392: `805`,
    1393: `805`,
    1394: `805`,
    1395: `805`,
    1396: `805`,
    1397: `805`,
    1398: `805`,
    1399: `805`,
    14: `2`,
    140: `25`,
    1400: `805`,
    1401: `805`,
    1402: `805`,
    1403: `805`,
    1404: `805`,
    1405: `805`,
    1406: `805`,
    1407: `805`,
    1408: `805`,
    1409: `805`,
    141: `25`,
    1410: `805`,
    1411: `805`,
    1412: `805`,
    1413: `805`,
    1414: `805`,
    1415: `805`,
    1416: `805`,
    1417: `805`,
    1418: `805`,
    1419: `805`,
    142: `25`,
    1420: `805`,
    1421: `805`,
    1422: `805`,
    1423: `806`,
    1424: `808`,
    1425: `809`,
    1426: `810`,
    1427: `810`,
    1428: `811`,
    1429: `812`,
    143: `25`,
    1430: `813`,
    1431: `814`,
    1432: `815`,
    1433: `816`,
    1434: `816`,
    1435: `817`,
    1436: `817`,
    1437: `817`,
    1438: `817`,
    1439: `817`,
    144: `25`,
    1440: `817`,
    1441: `818`,
    1442: `818`,
    1443: `819`,
    1444: `820`,
    1445: `820`,
    1446: `821`,
    1447: `822`,
    1448: `823`,
    1449: `823`,
    145: `25`,
    1450: `824`,
    1451: `825`,
    1452: `825`,
    1453: `826`,
    1454: `827`,
    1455: `828`,
    1456: `828`,
    1457: `829`,
    1458: `830`,
    1459: `830`,
    146: `25`,
    1460: `831`,
    1461: `832`,
    1462: `833`,
    1463: `836`,
    1464: `836`,
    1465: `837`,
    1466: `838`,
    1467: `838`,
    1468: `839`,
    1469: `840`,
    147: `25`,
    1470: `840`,
    1471: `841`,
    1472: `842`,
    1473: `842`,
    1474: `843`,
    1475: `844`,
    1476: `844`,
    1477: `845`,
    1478: `846`,
    1479: `847`,
    148: `25`,
    1480: `847`,
    1481: `848`,
    1482: `849`,
    1483: `849`,
    1484: `850`,
    1485: `851`,
    1486: `852`,
    1487: `852`,
    1488: `852`,
    1489: `853`,
    149: `25`,
    1490: `853`,
    1491: `853`,
    1492: `853`,
    1493: `853`,
    1494: `853`,
    1495: `853`,
    1496: `853`,
    1497: `853`,
    1498: `853`,
    1499: `854`,
    15: `2`,
    150: `25`,
    1500: `854`,
    1501: `855`,
    1502: `856`,
    1503: `857`,
    1504: `857`,
    1505: `858`,
    1506: `858`,
    1507: `859`,
    1508: `859`,
    1509: `860`,
    151: `25`,
    1510: `860`,
    1511: `860`,
    1512: `861`,
    1513: `861`,
    1514: `862`,
    1515: `862`,
    1516: `862`,
    1517: `863`,
    1518: `864`,
    1519: `864`,
    152: `25`,
    1520: `865`,
    1521: `866`,
    1522: `866`,
    1523: `866`,
    1524: `867`,
    1525: `868`,
    1526: `868`,
    1527: `869`,
    1528: `869`,
    1529: `869`,
    153: `25`,
    1530: `870`,
    1531: `871`,
    1532: `871`,
    1533: `872`,
    1534: `873`,
    1535: `873`,
    1536: `874`,
    1537: `874`,
    1538: `875`,
    1539: `875`,
    154: `25`,
    1540: `876`,
    1541: `876`,
    1542: `876`,
    1543: `879`,
    1544: `879`,
    1545: `880`,
    1546: `881`,
    1547: `882`,
    1548: `882`,
    1549: `883`,
    155: `25`,
    1550: `883`,
    1551: `884`,
    1552: `884`,
    1553: `884`,
    1554: `885`,
    1555: `885`,
    1556: `886`,
    1557: `886`,
    1558: `887`,
    1559: `887`,
    156: `25`,
    1560: `888`,
    1561: `888`,
    1562: `888`,
    1563: `889`,
    1564: `890`,
    1565: `895`,
    1566: `896`,
    1567: `896`,
    1568: `897`,
    1569: `897`,
    157: `25`,
    1570: `897`,
    1571: `897`,
    1572: `897`,
    1573: `897`,
    1574: `897`,
    1575: `897`,
    1576: `897`,
    1577: `897`,
    1578: `898`,
    1579: `898`,
    158: `25`,
    1580: `899`,
    1581: `900`,
    1582: `901`,
    1583: `901`,
    1584: `902`,
    1585: `902`,
    1586: `903`,
    1587: `904`,
    1588: `904`,
    1589: `905`,
    159: `26`,
    1590: `906`,
    1591: `907`,
    1592: `908`,
    1593: `908`,
    1594: `909`,
    1595: `909`,
    1596: `910`,
    1597: `911`,
    1598: `911`,
    1599: `912`,
    16: `2`,
    160: `26`,
    1600: `913`,
    1601: `913`,
    1602: `914`,
    1603: `915`,
    1604: `915`,
    1605: `916`,
    1606: `917`,
    1607: `918`,
    1608: `918`,
    1609: `919`,
    161: `26`,
    1610: `920`,
    1611: `921`,
    1612: `921`,
    1613: `922`,
    1614: `923`,
    1615: `923`,
    1616: `924`,
    1617: `924`,
    1618: `926`,
    1619: `926`,
    162: `27`,
    1620: `927`,
    1621: `927`,
    1622: `927`,
    1623: `927`,
    1624: `927`,
    1625: `927`,
    1626: `928`,
    1627: `928`,
    1628: `929`,
    1629: `929`,
    163: `27`,
    1630: `931`,
    1631: `932`,
    1632: `932`,
    1633: `933`,
    1634: `933`,
    1635: `934`,
    1636: `934`,
    1637: `935`,
    1638: `935`,
    1639: `935`,
    164: `27`,
    1640: `936`,
    1641: `936`,
    1642: `939`,
    1643: `939`,
    1644: `940`,
    1645: `940`,
    1646: `941`,
    1647: `946`,
    1648: `946`,
    1649: `947`,
    165: `27`,
    1650: `948`,
    1651: `948`,
    1652: `949`,
    1653: `950`,
    1654: `950`,
    1655: `951`,
    1656: `952`,
    1657: `953`,
    1658: `954`,
    1659: `954`,
    166: `27`,
    1660: `954`,
    1661: `955`,
    1662: `955`,
    1663: `955`,
    1664: `956`,
    1665: `957`,
    1666: `957`,
    1667: `958`,
    1668: `958`,
    1669: `958`,
    167: `27`,
    1670: `958`,
    1671: `958`,
    1672: `958`,
    1673: `958`,
    1674: `958`,
    1675: `958`,
    1676: `958`,
    1677: `959`,
    1678: `959`,
    1679: `960`,
    168: `27`,
    1680: `961`,
    1681: `962`,
    1682: `962`,
    1683: `963`,
    1684: `964`,
    1685: `964`,
    1686: `965`,
    1687: `966`,
    1688: `967`,
    1689: `967`,
    169: `27`,
    1690: `968`,
    1691: `969`,
    1692: `969`,
    1693: `970`,
    1694: `971`,
    1695: `976`,
    1696: `976`,
    1697: `977`,
    1698: `977`,
    1699: `978`,
    17: `2`,
    170: `27`,
    1700: `978`,
    1701: `979`,
    1702: `980`,
    1703: `980`,
    1704: `981`,
    1705: `981`,
    1706: `982`,
    1707: `982`,
    1708: `982`,
    1709: `985`,
    171: `27`,
    1710: `986`,
    1711: `986`,
    1712: `987`,
    1713: `987`,
    1714: `987`,
    1715: `987`,
    1716: `987`,
    1717: `987`,
    1718: `987`,
    1719: `987`,
    172: `27`,
    1720: `987`,
    1721: `987`,
    1722: `988`,
    1723: `988`,
    1724: `989`,
    1725: `990`,
    1726: `991`,
    1727: `991`,
    1728: `992`,
    1729: `992`,
    173: `27`,
    1730: `993`,
    1731: `993`,
    1732: `994`,
    1733: `994`,
    1734: `995`,
    1735: `995`,
    1736: `995`,
    1737: `998`,
    1738: `998`,
    1739: `999`,
    174: `27`,
    1740: `1000`,
    1741: `1000`,
    1742: `1001`,
    1743: `1002`,
    1744: `1003`,
    1745: `1003`,
    1746: `1004`,
    1747: `1006`,
    1748: `1007`,
    1749: `1007`,
    175: `27`,
    1750: `1009`,
    1751: `1009`,
    1752: `1010`,
    1753: `1010`,
    1754: `1010`,
    1755: `1011`,
    1756: `1011`,
    1757: `1011`,
    1758: `1012`,
    1759: `1013`,
    176: `27`,
    1760: `1013`,
    1761: `1014`,
    1762: `1014`,
    1763: `1014`,
    1764: `1014`,
    1765: `1014`,
    1766: `1014`,
    1767: `1014`,
    1768: `1014`,
    1769: `1014`,
    177: `27`,
    1770: `1014`,
    1771: `1015`,
    1772: `1015`,
    1773: `1016`,
    1774: `1017`,
    1775: `1018`,
    1776: `1018`,
    1777: `1019`,
    1778: `1019`,
    1779: `1020`,
    178: `27`,
    1780: `1020`,
    1781: `1021`,
    1782: `1021`,
    1783: `1022`,
    1784: `1022`,
    1785: `1023`,
    1786: `1024`,
    1787: `1024`,
    1788: `1025`,
    1789: `1026`,
    179: `27`,
    1790: `1026`,
    1791: `1027`,
    1792: `1027`,
    1793: `1028`,
    1794: `1028`,
    1795: `1028`,
    1796: `1031`,
    1797: `1032`,
    1798: `1033`,
    1799: `1034`,
    18: `2`,
    180: `27`,
    1800: `1034`,
    1801: `1035`,
    1802: `1036`,
    1803: `1036`,
    1804: `1037`,
    1805: `1038`,
    1806: `1039`,
    1807: `1040`,
    1808: `1040`,
    1809: `1043`,
    181: `27`,
    1810: `1044`,
    1811: `1044`,
    1812: `1045`,
    1813: `1046`,
    1814: `1047`,
    1815: `1047`,
    1816: `1047`,
    1817: `1048`,
    1818: `1048`,
    1819: `1049`,
    182: `27`,
    1820: `1050`,
    1821: `1051`,
    1822: `1051`,
    1823: `1052`,
    1824: `1052`,
    1825: `1053`,
    1826: `1053`,
    1827: `1053`,
    1828: `1054`,
    1829: `1054`,
    183: `27`,
    1830: `1055`,
    1831: `1055`,
    1832: `1055`,
    1833: `1055`,
    1834: `1055`,
    1835: `1055`,
    1836: `1056`,
    1837: `1056`,
    1838: `1057`,
    1839: `1058`,
    184: `27`,
    1840: `1059`,
    1841: `1059`,
    1842: `1060`,
    1843: `1061`,
    1844: `1063`,
    1845: `1063`,
    1846: `1064`,
    1847: `1064`,
    1848: `1064`,
    1849: `1065`,
    185: `27`,
    1850: `1065`,
    1851: `1066`,
    1852: `1067`,
    1853: `1068`,
    1854: `1068`,
    1855: `1068`,
    1856: `1068`,
    1857: `1068`,
    1858: `1068`,
    1859: `1068`,
    186: `27`,
    1860: `1068`,
    1861: `1068`,
    1862: `1068`,
    1863: `1068`,
    1864: `1068`,
    1865: `1068`,
    1866: `1068`,
    1867: `1068`,
    1868: `1068`,
    1869: `1068`,
    187: `27`,
    1870: `1068`,
    1871: `1068`,
    1872: `1068`,
    1873: `1068`,
    1874: `1068`,
    1875: `1069`,
    1876: `1069`,
    1877: `1069`,
    1878: `1072`,
    1879: `1072`,
    188: `27`,
    1880: `1072`,
    1881: `1072`,
    1882: `1072`,
    1883: `1072`,
    1884: `1072`,
    1885: `1072`,
    1886: `1072`,
    1887: `1072`,
    1888: `1072`,
    1889: `1072`,
    189: `27`,
    1890: `1072`,
    1891: `1072`,
    1892: `1072`,
    1893: `1072`,
    1894: `1072`,
    1895: `1072`,
    1896: `1072`,
    1897: `1072`,
    1898: `1072`,
    1899: `1072`,
    19: `2`,
    190: `27`,
    1900: `1072`,
    1901: `1072`,
    1902: `1072`,
    1903: `1072`,
    1904: `1072`,
    1905: `1072`,
    1906: `1072`,
    1907: `1072`,
    1908: `1072`,
    1909: `1072`,
    191: `27`,
    1910: `1072`,
    1911: `1072`,
    1912: `1072`,
    1913: `1072`,
    1914: `1072`,
    1915: `1072`,
    1916: `1072`,
    1917: `1072`,
    1918: `1072`,
    1919: `1072`,
    192: `27`,
    1920: `1072`,
    1921: `1072`,
    1922: `1072`,
    1923: `1072`,
    1924: `1072`,
    1925: `1072`,
    1926: `1072`,
    1927: `1072`,
    1928: `1072`,
    1929: `1072`,
    193: `27`,
    1930: `1072`,
    1931: `1072`,
    1932: `1072`,
    1933: `1072`,
    1934: `1072`,
    1935: `1072`,
    1936: `1072`,
    1937: `1072`,
    1938: `1072`,
    1939: `1072`,
    194: `27`,
    1940: `1072`,
    1941: `1072`,
    1942: `1072`,
    1943: `1072`,
    1944: `1072`,
    1945: `1072`,
    1946: `1072`,
    1947: `1072`,
    1948: `1072`,
    1949: `1072`,
    195: `27`,
    1950: `1072`,
    1951: `1072`,
    1952: `1072`,
    1953: `1072`,
    1954: `1072`,
    1955: `1072`,
    1956: `1072`,
    1957: `1072`,
    1958: `1072`,
    1959: `1072`,
    196: `27`,
    1960: `1072`,
    1961: `1072`,
    1962: `1072`,
    1963: `1072`,
    1964: `1072`,
    1965: `1072`,
    1966: `1072`,
    1967: `1072`,
    1968: `1072`,
    1969: `1072`,
    197: `27`,
    1970: `1072`,
    1971: `1072`,
    1972: `1072`,
    1973: `1072`,
    1974: `1072`,
    1975: `1072`,
    1976: `1072`,
    1977: `1073`,
    1978: `1073`,
    1979: `1074`,
    198: `27`,
    1980: `1074`,
    1981: `1074`,
    1982: `1077`,
    1983: `1078`,
    1984: `1079`,
    1985: `1079`,
    1986: `1079`,
    1987: `1080`,
    1988: `1080`,
    1989: `1081`,
    199: `27`,
    1990: `1082`,
    1991: `1082`,
    1992: `1083`,
    1993: `1084`,
    1994: `1085`,
    1995: `1086`,
    1996: `1086`,
    1997: `1087`,
    1998: `1087`,
    1999: `1087`,
    2: `2`,
    20: `2`,
    200: `29`,
    2000: `1090`,
    2001: `1091`,
    2002: `1092`,
    2003: `1092`,
    2004: `1092`,
    2005: `1093`,
    2006: `1093`,
    2007: `1094`,
    2008: `1095`,
    2009: `1096`,
    201: `32`,
    2010: `1096`,
    2011: `1097`,
    2012: `1098`,
    2013: `1099`,
    2014: `1100`,
    2015: `1100`,
    2016: `1101`,
    2017: `1101`,
    2018: `1101`,
    2019: `1104`,
    202: `32`,
    2020: `1105`,
    2021: `1106`,
    2022: `1106`,
    2023: `1106`,
    2024: `1107`,
    2025: `1107`,
    2026: `1108`,
    2027: `1109`,
    2028: `1109`,
    2029: `1110`,
    203: `33`,
    2030: `1111`,
    2031: `1112`,
    2032: `1113`,
    2033: `1113`,
    2034: `1114`,
    2035: `1114`,
    2036: `1114`,
    2037: `1117`,
    2038: `1118`,
    2039: `1119`,
    204: `33`,
    2040: `1119`,
    2041: `1119`,
    2042: `1120`,
    2043: `1120`,
    2044: `1121`,
    2045: `1122`,
    2046: `1122`,
    2047: `1123`,
    2048: `1124`,
    2049: `1125`,
    205: `33`,
    2050: `1126`,
    2051: `1126`,
    2052: `1127`,
    2053: `1127`,
    2054: `1127`,
    2055: `1130`,
    2056: `1131`,
    2057: `1132`,
    2058: `1132`,
    2059: `1132`,
    206: `34`,
    2060: `1133`,
    2061: `1133`,
    2062: `1134`,
    2063: `1135`,
    2064: `1135`,
    2065: `1136`,
    2066: `1137`,
    2067: `1137`,
    2068: `1138`,
    2069: `1139`,
    207: `34`,
    2070: `1140`,
    2071: `1140`,
    2072: `1141`,
    2073: `1142`,
    2074: `1142`,
    2075: `1143`,
    2076: `1144`,
    2077: `1145`,
    2078: `1146`,
    2079: `1147`,
    208: `35`,
    2080: `1147`,
    2081: `1148`,
    2082: `1148`,
    2083: `1148`,
    2084: `1151`,
    2085: `1152`,
    2086: `1153`,
    2087: `1153`,
    2088: `1153`,
    2089: `1154`,
    209: `36`,
    2090: `1154`,
    2091: `1155`,
    2092: `1156`,
    2093: `1156`,
    2094: `1157`,
    2095: `1158`,
    2096: `1158`,
    2097: `1159`,
    2098: `1160`,
    2099: `1161`,
    21: `2`,
    210: `41`,
    2100: `1161`,
    2101: `1162`,
    2102: `1163`,
    2103: `1164`,
    2104: `1165`,
    2105: `1165`,
    2106: `1166`,
    2107: `1166`,
    2108: `1166`,
    2109: `1169`,
    211: `42`,
    2110: `1169`,
    2111: `1170`,
    2112: `1171`,
    2113: `1172`,
    2114: `1175`,
    2115: `1175`,
    2116: `1175`,
    2117: `1176`,
    2118: `1176`,
    2119: `1177`,
    212: `42`,
    2120: `1177`,
    2121: `1179`,
    2122: `1179`,
    2123: `1180`,
    2124: `1181`,
    2125: `1182`,
    2126: `1184`,
    2127: `1184`,
    2128: `1184`,
    2129: `1187`,
    213: `43`,
    2130: `1187`,
    2131: `1188`,
    2132: `1189`,
    2133: `1190`,
    2134: `1193`,
    2135: `1193`,
    2136: `1193`,
    2137: `1194`,
    2138: `1194`,
    2139: `1195`,
    214: `43`,
    2140: `1195`,
    2141: `1195`,
    2142: `1196`,
    2143: `1196`,
    2144: `1197`,
    2145: `1197`,
    2146: `1197`,
    2147: `1200`,
    2148: `1200`,
    2149: `1200`,
    215: `43`,
    2150: `1200`,
    2151: `1200`,
    2152: `1200`,
    2153: `1200`,
    2154: `1200`,
    2155: `1200`,
    2156: `1200`,
    2157: `1200`,
    2158: `1200`,
    2159: `1200`,
    216: `43`,
    2160: `1200`,
    2161: `1200`,
    2162: `1200`,
    2163: `1200`,
    2164: `1200`,
    2165: `1200`,
    2166: `1200`,
    2167: `1200`,
    2168: `1200`,
    2169: `1200`,
    217: `43`,
    2170: `1200`,
    2171: `1200`,
    2172: `1200`,
    2173: `1200`,
    2174: `1200`,
    2175: `1200`,
    2176: `1200`,
    2177: `1200`,
    2178: `1200`,
    2179: `1200`,
    218: `43`,
    2180: `1200`,
    2181: `1200`,
    2182: `1200`,
    2183: `1200`,
    2184: `1200`,
    2185: `1200`,
    2186: `1200`,
    2187: `1200`,
    2188: `1200`,
    2189: `1200`,
    219: `43`,
    2190: `1200`,
    2191: `1200`,
    2192: `1200`,
    2193: `1200`,
    2194: `1200`,
    2195: `1200`,
    2196: `1200`,
    2197: `1200`,
    2198: `1200`,
    2199: `1200`,
    22: `2`,
    220: `43`,
    2200: `1200`,
    2201: `1200`,
    2202: `1200`,
    2203: `1200`,
    2204: `1200`,
    2205: `1200`,
    2206: `1200`,
    2207: `1200`,
    2208: `1200`,
    2209: `1200`,
    221: `43`,
    2210: `1200`,
    2211: `1200`,
    2212: `1200`,
    2213: `1200`,
    2214: `1200`,
    2215: `1200`,
    2216: `1200`,
    2217: `1200`,
    2218: `1200`,
    2219: `1200`,
    222: `43`,
    2220: `1200`,
    2221: `1200`,
    2222: `1200`,
    2223: `1200`,
    2224: `1200`,
    2225: `1200`,
    2226: `1200`,
    2227: `1200`,
    2228: `1200`,
    2229: `1200`,
    223: `44`,
    2230: `1200`,
    2231: `1200`,
    2232: `1200`,
    2233: `1200`,
    2234: `1200`,
    2235: `1200`,
    2236: `1200`,
    2237: `1200`,
    2238: `1200`,
    2239: `1200`,
    224: `44`,
    2240: `1200`,
    2241: `1200`,
    2242: `1200`,
    2243: `1200`,
    2244: `1200`,
    2245: `1200`,
    2246: `1201`,
    2247: `1201`,
    2248: `1202`,
    2249: `1202`,
    225: `45`,
    2250: `1202`,
    2251: `1205`,
    2252: `1205`,
    2253: `1206`,
    2254: `1207`,
    2255: `1208`,
    2256: `1211`,
    2257: `1211`,
    2258: `1211`,
    2259: `1212`,
    226: `46`,
    2260: `1212`,
    2261: `1213`,
    2262: `1213`,
    2263: `1213`,
    2264: `1214`,
    2265: `1214`,
    2266: `1215`,
    2267: `1215`,
    2268: `1215`,
    2269: `1216`,
    227: `47`,
    2270: `1217`,
    2271: `1217`,
    2272: `1218`,
    2273: `1218`,
    2274: `1218`,
    2275: `1219`,
    2276: `1220`,
    2277: `1220`,
    2278: `1221`,
    2279: `1221`,
    228: `47`,
    2280: `1221`,
    2281: `1222`,
    2282: `1223`,
    2283: `1223`,
    2284: `1224`,
    2285: `1224`,
    2286: `1224`,
    2287: `1225`,
    2288: `1226`,
    2289: `1226`,
    229: `48`,
    2290: `1227`,
    2291: `1227`,
    2292: `1227`,
    2293: `1230`,
    2294: `1230`,
    2295: `1231`,
    2296: `1232`,
    2297: `1233`,
    2298: `1236`,
    2299: `1236`,
    23: `2`,
    230: `48`,
    2300: `1236`,
    2301: `1237`,
    2302: `1237`,
    2303: `1237`,
    2304: `1237`,
    2305: `1237`,
    2306: `1237`,
    2307: `1237`,
    2308: `1237`,
    2309: `1237`,
    231: `49`,
    2310: `1237`,
    2311: `1237`,
    2312: `1237`,
    2313: `1237`,
    2314: `1237`,
    2315: `1237`,
    2316: `1237`,
    2317: `1237`,
    2318: `1237`,
    2319: `1237`,
    232: `49`,
    2320: `1237`,
    2321: `1237`,
    2322: `1237`,
    2323: `1237`,
    2324: `1237`,
    2325: `1237`,
    2326: `1237`,
    2327: `1237`,
    2328: `1237`,
    2329: `1237`,
    233: `50`,
    2330: `1237`,
    2331: `1237`,
    2332: `1237`,
    2333: `1237`,
    2334: `1237`,
    2335: `1238`,
    2336: `1238`,
    2337: `1239`,
    2338: `1240`,
    2339: `1241`,
    234: `50`,
    2340: `1242`,
    2341: `1242`,
    2342: `1242`,
    2343: `1243`,
    2344: `1243`,
    2345: `1244`,
    2346: `1244`,
    2347: `1244`,
    2348: `1247`,
    2349: `1247`,
    235: `50`,
    2350: `1247`,
    2351: `1247`,
    2352: `1247`,
    2353: `1247`,
    2354: `1247`,
    2355: `1247`,
    2356: `1247`,
    2357: `1247`,
    2358: `1247`,
    2359: `1247`,
    236: `51`,
    2360: `1247`,
    2361: `1247`,
    2362: `1247`,
    2363: `1247`,
    2364: `1247`,
    2365: `1247`,
    2366: `1247`,
    2367: `1247`,
    2368: `1247`,
    2369: `1247`,
    237: `51`,
    2370: `1247`,
    2371: `1247`,
    2372: `1247`,
    2373: `1247`,
    2374: `1247`,
    2375: `1247`,
    2376: `1247`,
    2377: `1247`,
    2378: `1247`,
    2379: `1247`,
    238: `52`,
    2380: `1247`,
    2381: `1247`,
    2382: `1247`,
    2383: `1247`,
    2384: `1247`,
    2385: `1247`,
    2386: `1247`,
    2387: `1247`,
    2388: `1247`,
    2389: `1247`,
    239: `52`,
    2390: `1247`,
    2391: `1247`,
    2392: `1247`,
    2393: `1247`,
    2394: `1247`,
    2395: `1247`,
    2396: `1247`,
    2397: `1247`,
    2398: `1247`,
    2399: `1247`,
    24: `2`,
    240: `52`,
    2400: `1247`,
    2401: `1247`,
    2402: `1247`,
    2403: `1247`,
    2404: `1247`,
    2405: `1247`,
    2406: `1247`,
    2407: `1247`,
    2408: `1247`,
    2409: `1247`,
    241: `53`,
    2410: `1247`,
    2411: `1247`,
    2412: `1247`,
    2413: `1247`,
    2414: `1247`,
    2415: `1247`,
    2416: `1247`,
    2417: `1247`,
    2418: `1247`,
    2419: `1247`,
    242: `54`,
    2420: `1247`,
    2421: `1247`,
    2422: `1247`,
    2423: `1247`,
    2424: `1247`,
    2425: `1247`,
    2426: `1247`,
    2427: `1247`,
    2428: `1247`,
    2429: `1247`,
    243: `54`,
    2430: `1247`,
    2431: `1247`,
    2432: `1247`,
    2433: `1247`,
    2434: `1247`,
    2435: `1247`,
    2436: `1247`,
    2437: `1247`,
    2438: `1247`,
    2439: `1247`,
    244: `55`,
    2440: `1247`,
    2441: `1247`,
    2442: `1247`,
    2443: `1247`,
    2444: `1247`,
    2445: `1247`,
    2446: `1247`,
    2447: `1248`,
    2448: `1248`,
    2449: `1249`,
    245: `55`,
    2450: `1249`,
    2451: `1249`,
    2452: `1252`,
    2453: `1252`,
    2454: `1253`,
    2455: `1254`,
    2456: `1255`,
    2457: `1258`,
    2458: `1258`,
    2459: `1258`,
    246: `55`,
    2460: `1259`,
    2461: `1259`,
    2462: `1260`,
    2463: `1261`,
    2464: `1261`,
    2465: `1262`,
    2466: `1263`,
    2467: `1263`,
    2468: `1264`,
    2469: `1265`,
    247: `56`,
    2470: `1265`,
    2471: `1266`,
    2472: `1267`,
    2473: `1268`,
    2474: `1268`,
    2475: `1269`,
    2476: `1270`,
    2477: `1271`,
    2478: `1272`,
    2479: `1274`,
    248: `57`,
    2480: `1275`,
    2481: `1275`,
    2482: `1276`,
    2483: `1277`,
    2484: `1278`,
    2485: `1278`,
    2486: `1279`,
    2487: `1280`,
    2488: `1280`,
    2489: `1280`,
    249: `57`,
    2490: `1281`,
    2491: `1281`,
    2492: `1281`,
    2493: `1282`,
    2494: `1282`,
    2495: `1283`,
    2496: `1283`,
    2497: `1283`,
    2498: `1286`,
    2499: `1286`,
    25: `2`,
    250: `58`,
    2500: `1287`,
    2501: `1288`,
    2502: `1289`,
    2503: `1292`,
    2504: `1292`,
    2505: `1292`,
    2506: `1293`,
    2507: `1293`,
    2508: `1294`,
    2509: `1294`,
    251: `58`,
    2510: `1295`,
    2511: `1295`,
    2512: `1295`,
    2513: `1298`,
    2514: `1298`,
    2515: `1299`,
    2516: `1299`,
    2517: `1300`,
    2518: `1300`,
    2519: `1301`,
    252: `58`,
    2520: `1302`,
    2521: `1303`,
    2522: `1303`,
    2523: `1304`,
    2524: `1304`,
    2525: `1305`,
    2526: `1305`,
    2527: `1305`,
    2528: `1306`,
    2529: `1306`,
    253: `59`,
    2530: `1307`,
    2531: `1307`,
    2532: `1307`,
    2533: `1307`,
    2534: `1307`,
    2535: `1307`,
    2536: `1308`,
    2537: `1308`,
    2538: `1309`,
    2539: `1310`,
    254: `60`,
    2540: `1311`,
    2541: `1311`,
    2542: `1312`,
    2543: `1313`,
    2544: `1315`,
    2545: `1315`,
    2546: `1316`,
    2547: `1316`,
    2548: `1316`,
    2549: `1317`,
    255: `60`,
    2550: `1318`,
    2551: `1318`,
    2552: `1319`,
    2553: `1320`,
    2554: `1320`,
    2555: `1321`,
    2556: `1321`,
    2557: `1321`,
    2558: `1322`,
    2559: `1323`,
    256: `61`,
    2560: `1324`,
    2561: `1324`,
    2562: `1325`,
    2563: `1325`,
    2564: `1326`,
    2565: `1327`,
    2566: `1327`,
    2567: `1328`,
    2568: `1329`,
    2569: `1329`,
    257: `61`,
    2570: `1330`,
    2571: `1331`,
    2572: `1331`,
    2573: `1332`,
    2574: `1333`,
    2575: `1334`,
    2576: `1334`,
    2577: `1335`,
    2578: `1336`,
    2579: `1337`,
    258: `61`,
    2580: `1337`,
    2581: `1338`,
    2582: `1339`,
    2583: `1339`,
    2584: `1340`,
    2585: `1340`,
    2586: `1341`,
    2587: `1342`,
    2588: `1344`,
    2589: `1344`,
    259: `62`,
    2590: `1345`,
    2591: `1345`,
    2592: `1345`,
    2593: `1345`,
    2594: `1345`,
    2595: `1345`,
    2596: `1346`,
    2597: `1346`,
    2598: `1347`,
    2599: `1350`,
    26: `2`,
    260: `63`,
    2600: `1350`,
    2601: `1351`,
    2602: `1352`,
    2603: `1352`,
    2604: `1353`,
    2605: `1354`,
    2606: `1354`,
    2607: `1355`,
    2608: `1356`,
    2609: `1357`,
    261: `63`,
    2610: `1358`,
    2611: `1358`,
    2612: `1358`,
    2613: `1359`,
    2614: `1359`,
    2615: `1359`,
    2616: `1360`,
    2617: `1361`,
    2618: `1361`,
    2619: `1362`,
    262: `64`,
    2620: `1362`,
    2621: `1362`,
    2622: `1362`,
    2623: `1362`,
    2624: `1362`,
    2625: `1362`,
    2626: `1362`,
    2627: `1362`,
    2628: `1362`,
    2629: `1363`,
    263: `64`,
    2630: `1363`,
    2631: `1364`,
    2632: `1365`,
    2633: `1366`,
    2634: `1366`,
    2635: `1367`,
    2636: `1368`,
    2637: `1368`,
    2638: `1369`,
    2639: `1370`,
    264: `65`,
    2640: `1371`,
    2641: `1371`,
    2642: `1372`,
    2643: `1372`,
    2644: `1373`,
    2645: `1373`,
    2646: `1373`,
    2647: `1374`,
    2648: `1374`,
    2649: `1375`,
    265: `65`,
    2650: `1376`,
    2651: `1376`,
    2652: `1377`,
    2653: `1378`,
    2654: `1381`,
    2655: `1381`,
    2656: `1382`,
    2657: `1382`,
    2658: `1382`,
    2659: `1383`,
    266: `69`,
    2660: `1383`,
    2661: `1384`,
    2662: `1384`,
    2663: `1384`,
    2664: `1385`,
    2665: `1386`,
    2666: `1387`,
    2667: `1388`,
    2668: `1388`,
    2669: `1389`,
    267: `69`,
    2670: `1390`,
    2671: `1390`,
    2672: `1391`,
    2673: `1392`,
    2674: `1392`,
    2675: `1393`,
    2676: `1393`,
    2677: `1394`,
    2678: `1394`,
    2679: `1395`,
    268: `70`,
    2680: `1395`,
    2681: `1396`,
    2682: `1396`,
    2683: `1397`,
    2684: `1397`,
    2685: `1397`,
    2686: `1399`,
    2687: `1399`,
    2688: `1399`,
    2689: `1400`,
    269: `70`,
    2690: `1400`,
    2691: `1400`,
    2692: `1400`,
    2693: `1401`,
    2694: `1401`,
    2695: `1401`,
    2696: `1403`,
    2697: `1404`,
    2698: `1405`,
    2699: `1405`,
    27: `2`,
    270: `71`,
    2700: `1406`,
    2701: `1407`,
    2702: `1407`,
    2703: `1409`,
    2704: `1409`,
    2705: `1409`,
    2706: `1409`,
    2707: `1409`,
    2708: `1409`,
    2709: `1409`,
    271: `72`,
    2710: `1409`,
    2711: `1410`,
    2712: `1410`,
    2713: `1411`,
    2714: `1411`,
    2715: `1411`,
    2716: `1412`,
    2717: `1412`,
    2718: `1413`,
    2719: `1415`,
    272: `72`,
    2720: `1415`,
    2721: `1416`,
    2722: `1416`,
    2723: `1418`,
    2724: `1418`,
    2725: `1418`,
    2726: `1419`,
    2727: `1419`,
    2728: `1420`,
    2729: `1420`,
    273: `73`,
    2730: `1420`,
    2731: `1422`,
    2732: `1422`,
    2733: `1422`,
    2734: `1424`,
    2735: `1424`,
    2736: `1424`,
    2737: `1425`,
    2738: `1425`,
    2739: `1426`,
    274: `74`,
    2740: `1426`,
    2741: `1426`,
    2742: `1429`,
    2743: `1429`,
    2744: `1429`,
    2745: `1430`,
    2746: `1430`,
    2747: `1431`,
    2748: `1431`,
    2749: `1431`,
    275: `74`,
    2750: `1434`,
    2751: `1434`,
    2752: `1434`,
    2753: `1437`,
    2754: `1437`,
    2755: `1437`,
    2756: `1438`,
    2757: `1438`,
    2758: `1439`,
    2759: `1439`,
    276: `75`,
    2760: `1439`,
    2761: `1442`,
    2762: `1442`,
    2763: `1442`,
    2764: `1443`,
    2765: `1444`,
    2766: `1444`,
    2767: `1445`,
    2768: `1445`,
    2769: `1445`,
    277: `76`,
    2770: `1448`,
    2771: `1448`,
    2772: `1448`,
    2773: `1449`,
    2774: `1449`,
    2775: `1450`,
    2776: `1450`,
    2777: `1450`,
    2778: `1453`,
    2779: `1453`,
    278: `76`,
    2780: `1453`,
    2781: `1454`,
    2782: `1454`,
    2783: `1455`,
    2784: `1455`,
    2785: `1455`,
    2786: `1458`,
    2787: `1458`,
    2788: `1458`,
    2789: `1459`,
    279: `77`,
    2790: `1460`,
    2791: `1460`,
    2792: `1460`,
    2793: `1461`,
    2794: `1461`,
    2795: `1461`,
    2796: `1462`,
    2797: `1463`,
    2798: `1463`,
    2799: `1463`,
    28: `2`,
    280: `78`,
    2800: `1464`,
    2801: `1464`,
    2802: `1464`,
    2803: `1465`,
    2804: `1466`,
    2805: `1466`,
    2806: `1467`,
    2807: `1467`,
    2808: `1468`,
    2809: `1468`,
    281: `79`,
    2810: `1469`,
    2811: `1469`,
    2812: `1470`,
    2813: `1470`,
    2814: `1471`,
    2815: `1471`,
    2816: `1471`,
    2817: `1473`,
    2818: `1474`,
    2819: `1474`,
    282: `80`,
    2820: `1475`,
    2821: `1476`,
    2822: `1477`,
    2823: `1478`,
    2824: `1478`,
    2825: `1479`,
    2826: `1480`,
    2827: `1481`,
    2828: `1482`,
    2829: `1482`,
    283: `80`,
    2830: `1483`,
    2831: `1484`,
    2832: `1485`,
    2833: `1486`,
    2834: `1486`,
    2835: `1487`,
    2836: `1488`,
    2837: `1489`,
    2838: `1490`,
    2839: `1490`,
    284: `82`,
    2840: `1491`,
    2841: `1491`,
    2842: `1491`,
    2843: `1492`,
    2844: `1492`,
    2845: `1492`,
    2846: `1493`,
    2847: `1494`,
    2848: `1495`,
    2849: `1496`,
    285: `82`,
    2850: `1496`,
    2851: `1496`,
    2852: `1499`,
    2853: `1499`,
    2854: `1499`,
    2855: `1500`,
    2856: `1501`,
    2857: `1501`,
    2858: `1501`,
    2859: `1502`,
    286: `83`,
    2860: `1502`,
    2861: `1502`,
    2862: `1503`,
    2863: `1503`,
    2864: `1504`,
    2865: `1504`,
    2866: `1505`,
    2867: `1505`,
    2868: `1506`,
    2869: `1506`,
    287: `83`,
    2870: `1506`,
    2871: `1509`,
    2872: `1509`,
    2873: `1509`,
    2874: `1511`,
    2875: `1511`,
    2876: `1511`,
    2877: `1513`,
    2878: `1513`,
    2879: `1513`,
    288: `84`,
    2880: `1515`,
    2881: `1515`,
    2882: `1516`,
    2883: `1516`,
    2884: `1516`,
    2885: `1517`,
    2886: `1517`,
    2887: `1518`,
    2888: `1518`,
    2889: `1518`,
    289: `85`,
    2890: `1520`,
    2891: `1520`,
    2892: `1521`,
    2893: `1521`,
    2894: `1521`,
    2895: `1522`,
    2896: `1522`,
    2897: `1523`,
    2898: `1523`,
    2899: `1523`,
    29: `2`,
    290: `85`,
    2900: `1525`,
    2901: `1525`,
    2902: `1525`,
    2903: `1527`,
    2904: `1527`,
    2905: `1527`,
    2906: `1529`,
    2907: `1530`,
    2908: `1531`,
    2909: `1532`,
    291: `86`,
    2910: `1533`,
    2911: `1535`,
    2912: `1536`,
    2913: `1536`,
    2914: `1537`,
    2915: `1537`,
    2916: `1538`,
    2917: `1538`,
    2918: `1539`,
    2919: `1539`,
    292: `86`,
    2920: `1540`,
    2921: `1540`,
    2922: `1541`,
    2923: `1542`,
    2924: `1544`,
    2925: `1544`,
    2926: `1544`,
    2927: `1546`,
    2928: `1546`,
    2929: `1546`,
    293: `86`,
    2930: `1548`,
    2931: `1548`,
    2932: `1548`,
    2933: `1550`,
    2934: `1550`,
    2935: `1550`,
    2936: `1553`,
    2937: `1553`,
    2938: `1553`,
    2939: `1556`,
    294: `87`,
    2940: `1556`,
    2941: `1556`,
    2942: `1559`,
    2943: `1559`,
    2944: `1559`,
    2945: `1562`,
    2946: `1562`,
    2947: `1562`,
    2948: `1563`,
    2949: `1563`,
    295: `88`,
    2950: `1564`,
    2951: `1564`,
    2952: `1564`,
    2953: `1567`,
    2954: `1567`,
    2955: `1567`,
    2956: `1569`,
    2957: `1570`,
    2958: `1572`,
    2959: `1573`,
    296: `89`,
    2960: `1574`,
    2961: `1575`,
    2962: `1575`,
    2963: `1576`,
    2964: `1576`,
    2965: `1577`,
    2966: `1577`,
    2967: `1577`,
    2968: `1578`,
    2969: `1580`,
    297: `90`,
    2970: `1581`,
    2971: `1582`,
    2972: `1582`,
    2973: `1582`,
    2974: `1583`,
    2975: `1584`,
    2976: `1584`,
    2977: `1587`,
    2978: `1587`,
    2979: `1588`,
    298: `90`,
    2980: `1588`,
    2981: `1589`,
    2982: `1589`,
    2983: `1590`,
    2984: `1591`,
    2985: `1592`,
    2986: `1592`,
    2987: `1593`,
    2988: `1594`,
    2989: `1594`,
    299: `90`,
    2990: `1595`,
    2991: `1595`,
    2992: `1596`,
    2993: `1596`,
    2994: `1597`,
    2995: `1598`,
    2996: `1599`,
    2997: `1599`,
    2998: `1600`,
    2999: `1600`,
    3: `2`,
    30: `2`,
    300: `91`,
    3000: `1601`,
    3001: `1602`,
    3002: `1603`,
    3003: `1603`,
    3004: `1604`,
    3005: `1605`,
    3006: `1606`,
    3007: `1608`,
    3008: `1608`,
    3009: `1609`,
    301: `92`,
    3010: `1609`,
    3011: `1610`,
    3012: `1611`,
    3013: `1614`,
    3014: `1615`,
    3015: `1616`,
    3016: `1616`,
    3017: `1617`,
    3018: `1618`,
    3019: `1618`,
    302: `93`,
    3020: `1619`,
    3021: `1619`,
    3022: `1620`,
    3023: `1620`,
    3024: `1621`,
    3025: `1621`,
    3026: `1622`,
    3027: `1622`,
    3028: `1623`,
    3029: `1625`,
    303: `93`,
    3030: `1625`,
    3031: `1625`,
    3032: `1625`,
    3033: `1626`,
    3034: `1626`,
    3035: `1626`,
    3036: `1627`,
    3037: `1627`,
    3038: `1627`,
    3039: `1629`,
    304: `94`,
    3040: `1630`,
    3041: `1630`,
    3042: `1631`,
    3043: `1631`,
    3044: `1632`,
    3045: `1632`,
    3046: `1632`,
    3047: `1633`,
    3048: `1633`,
    3049: `1633`,
    305: `95`,
    3050: `1636`,
    3051: `1636`,
    3052: `1636`,
    3053: `1637`,
    3054: `1637`,
    3055: `1638`,
    3056: `1638`,
    3057: `1638`,
    3058: `1641`,
    3059: `1641`,
    306: `95`,
    3060: `1641`,
    3061: `1643`,
    3062: `1644`,
    3063: `1644`,
    3064: `1644`,
    3065: `1645`,
    3066: `1645`,
    3067: `1646`,
    3068: `1647`,
    3069: `1648`,
    307: `96`,
    3070: `1649`,
    3071: `1649`,
    3072: `1650`,
    3073: `1651`,
    3074: `1651`,
    3075: `1651`,
    3076: `1652`,
    3077: `1652`,
    3078: `1653`,
    3079: `1654`,
    308: `97`,
    3080: `1654`,
    3081: `1654`,
    3082: `1655`,
    3083: `1655`,
    3084: `1656`,
    3085: `1656`,
    3086: `1656`,
    3087: `1657`,
    3088: `1658`,
    3089: `1658`,
    309: `98`,
    3090: `1659`,
    3091: `1661`,
    3092: `1662`,
    3093: `1663`,
    3094: `1664`,
    3095: `1664`,
    3096: `1664`,
    3097: `1665`,
    3098: `1665`,
    3099: `1666`,
    31: `2`,
    310: `98`,
    3100: `1667`,
    3101: `1668`,
    3102: `1670`,
    3103: `1670`,
    3104: `1671`,
    3105: `1671`,
    3106: `1672`,
    3107: `1674`,
    3108: `1675`,
    3109: `1676`,
    311: `99`,
    3110: `1677`,
    3111: `1678`,
    3112: `1678`,
    3113: `1679`,
    3114: `1680`,
    3115: `1681`,
    3116: `1682`,
    3117: `1684`,
    3118: `1685`,
    3119: `1685`,
    312: `100`,
    3120: `1685`,
    3121: `1686`,
    3122: `1687`,
    3123: `1688`,
    3124: `1689`,
    3125: `1690`,
    3126: `1692`,
    3127: `1692`,
    3128: `1693`,
    3129: `1693`,
    313: `101`,
    3130: `1694`,
    3131: `1695`,
    3132: `1696`,
    3133: `1696`,
    3134: `1696`,
    3135: `1697`,
    3136: `1697`,
    3137: `1697`,
    3138: `1699`,
    3139: `1699`,
    314: `102`,
    3140: `1700`,
    3141: `1701`,
    3142: `1701`,
    3143: `1702`,
    3144: `1704`,
    3145: `1705`,
    3146: `1705`,
    3147: `1705`,
    3148: `1707`,
    3149: `1707`,
    315: `102`,
    3150: `1708`,
    3151: `1709`,
    3152: `1709`,
    3153: `1710`,
    3154: `1712`,
    3155: `1713`,
    3156: `1714`,
    3157: `1714`,
    3158: `1715`,
    3159: `1716`,
    316: `103`,
    3160: `1716`,
    3161: `1716`,
    3162: `1717`,
    3163: `1719`,
    3164: `1720`,
    3165: `1720`,
    3166: `1721`,
    3167: `1721`,
    3168: `1721`,
    3169: `1723`,
    317: `104`,
    3170: `1724`,
    3171: `1725`,
    3172: `1726`,
    3173: `1726`,
    3174: `1726`,
    3175: `1727`,
    3176: `1727`,
    3177: `1728`,
    3178: `1728`,
    3179: `1728`,
    318: `105`,
    3180: `1729`,
    319: `107`,
    32: `2`,
    320: `107`,
    321: `107`,
    322: `109`,
    323: `109`,
    324: `110`,
    325: `110`,
    326: `110`,
    327: `112`,
    328: `112`,
    329: `112`,
    33: `2`,
    330: `112`,
    331: `112`,
    332: `112`,
    333: `113`,
    334: `113`,
    335: `114`,
    336: `115`,
    337: `117`,
    338: `117`,
    339: `118`,
    34: `2`,
    340: `121`,
    341: `121`,
    342: `122`,
    343: `122`,
    344: `122`,
    345: `123`,
    346: `124`,
    347: `124`,
    348: `125`,
    349: `125`,
    35: `2`,
    350: `126`,
    351: `127`,
    352: `132`,
    353: `133`,
    354: `133`,
    355: `134`,
    356: `134`,
    357: `134`,
    358: `134`,
    359: `134`,
    36: `2`,
    360: `134`,
    361: `134`,
    362: `134`,
    363: `134`,
    364: `134`,
    365: `135`,
    366: `135`,
    367: `136`,
    368: `137`,
    369: `138`,
    37: `2`,
    370: `138`,
    371: `139`,
    372: `139`,
    373: `140`,
    374: `140`,
    375: `141`,
    376: `141`,
    377: `141`,
    378: `142`,
    379: `142`,
    38: `2`,
    380: `143`,
    381: `143`,
    382: `143`,
    383: `144`,
    384: `145`,
    385: `146`,
    386: `147`,
    387: `147`,
    388: `148`,
    389: `149`,
    39: `2`,
    390: `149`,
    391: `150`,
    392: `150`,
    393: `150`,
    394: `151`,
    395: `152`,
    396: `152`,
    397: `153`,
    398: `153`,
    399: `154`,
    4: `2`,
    40: `4`,
    400: `154`,
    401: `155`,
    402: `155`,
    403: `155`,
    404: `158`,
    405: `158`,
    406: `159`,
    407: `159`,
    408: `159`,
    409: `160`,
    41: `4`,
    410: `161`,
    411: `161`,
    412: `162`,
    413: `162`,
    414: `163`,
    415: `164`,
    416: `169`,
    417: `170`,
    418: `170`,
    419: `171`,
    42: `5`,
    420: `171`,
    421: `171`,
    422: `171`,
    423: `171`,
    424: `171`,
    425: `171`,
    426: `171`,
    427: `171`,
    428: `171`,
    429: `172`,
    43: `5`,
    430: `172`,
    431: `173`,
    432: `174`,
    433: `175`,
    434: `175`,
    435: `176`,
    436: `176`,
    437: `177`,
    438: `177`,
    439: `178`,
    44: `5`,
    440: `178`,
    441: `178`,
    442: `179`,
    443: `179`,
    444: `180`,
    445: `180`,
    446: `180`,
    447: `181`,
    448: `182`,
    449: `182`,
    45: `6`,
    450: `183`,
    451: `183`,
    452: `183`,
    453: `184`,
    454: `185`,
    455: `185`,
    456: `186`,
    457: `187`,
    458: `187`,
    459: `188`,
    46: `7`,
    460: `188`,
    461: `188`,
    462: `189`,
    463: `190`,
    464: `190`,
    465: `191`,
    466: `191`,
    467: `192`,
    468: `192`,
    469: `193`,
    47: `8`,
    470: `193`,
    471: `193`,
    472: `196`,
    473: `196`,
    474: `197`,
    475: `197`,
    476: `197`,
    477: `198`,
    478: `199`,
    479: `199`,
    48: `9`,
    480: `200`,
    481: `200`,
    482: `201`,
    483: `202`,
    484: `207`,
    485: `208`,
    486: `208`,
    487: `209`,
    488: `209`,
    489: `209`,
    49: `10`,
    490: `209`,
    491: `209`,
    492: `209`,
    493: `209`,
    494: `209`,
    495: `209`,
    496: `209`,
    497: `210`,
    498: `210`,
    499: `211`,
    5: `2`,
    50: `11`,
    500: `212`,
    501: `213`,
    502: `213`,
    503: `214`,
    504: `214`,
    505: `215`,
    506: `215`,
    507: `216`,
    508: `216`,
    509: `216`,
    51: `11`,
    510: `217`,
    511: `217`,
    512: `218`,
    513: `218`,
    514: `218`,
    515: `219`,
    516: `220`,
    517: `220`,
    518: `221`,
    519: `221`,
    52: `12`,
    520: `221`,
    521: `222`,
    522: `223`,
    523: `223`,
    524: `224`,
    525: `225`,
    526: `225`,
    527: `226`,
    528: `226`,
    529: `226`,
    53: `13`,
    530: `227`,
    531: `228`,
    532: `228`,
    533: `229`,
    534: `229`,
    535: `230`,
    536: `230`,
    537: `231`,
    538: `231`,
    539: `231`,
    54: `14`,
    540: `234`,
    541: `234`,
    542: `235`,
    543: `235`,
    544: `235`,
    545: `236`,
    546: `236`,
    547: `238`,
    548: `239`,
    549: `239`,
    55: `15`,
    550: `240`,
    551: `241`,
    552: `242`,
    553: `242`,
    554: `243`,
    555: `244`,
    556: `244`,
    557: `244`,
    558: `245`,
    559: `246`,
    56: `15`,
    560: `247`,
    561: `247`,
    562: `248`,
    563: `249`,
    564: `254`,
    565: `254`,
    566: `255`,
    567: `255`,
    568: `255`,
    569: `256`,
    57: `16`,
    570: `256`,
    571: `257`,
    572: `258`,
    573: `263`,
    574: `263`,
    575: `264`,
    576: `265`,
    577: `265`,
    578: `266`,
    579: `267`,
    58: `16`,
    580: `267`,
    581: `267`,
    582: `268`,
    583: `268`,
    584: `268`,
    585: `268`,
    586: `268`,
    587: `268`,
    588: `269`,
    589: `269`,
    59: `17`,
    590: `270`,
    591: `271`,
    592: `273`,
    593: `274`,
    594: `274`,
    595: `275`,
    596: `275`,
    597: `275`,
    598: `275`,
    599: `275`,
    6: `2`,
    60: `18`,
    600: `275`,
    601: `275`,
    602: `275`,
    603: `275`,
    604: `275`,
    605: `276`,
    606: `276`,
    607: `277`,
    608: `278`,
    609: `279`,
    61: `18`,
    610: `279`,
    611: `280`,
    612: `280`,
    613: `281`,
    614: `281`,
    615: `282`,
    616: `282`,
    617: `283`,
    618: `283`,
    619: `283`,
    62: `19`,
    620: `287`,
    621: `288`,
    622: `289`,
    623: `289`,
    624: `290`,
    625: `291`,
    626: `291`,
    627: `292`,
    628: `292`,
    629: `293`,
    63: `20`,
    630: `293`,
    631: `294`,
    632: `296`,
    633: `296`,
    634: `297`,
    635: `297`,
    636: `297`,
    637: `298`,
    638: `298`,
    639: `300`,
    64: `21`,
    640: `301`,
    641: `301`,
    642: `302`,
    643: `303`,
    644: `304`,
    645: `304`,
    646: `305`,
    647: `306`,
    648: `306`,
    649: `306`,
    65: `22`,
    650: `307`,
    651: `308`,
    652: `308`,
    653: `309`,
    654: `310`,
    655: `311`,
    656: `311`,
    657: `312`,
    658: `313`,
    659: `320`,
    66: `23`,
    660: `320`,
    661: `321`,
    662: `322`,
    663: `322`,
    664: `323`,
    665: `324`,
    666: `324`,
    667: `325`,
    668: `326`,
    669: `326`,
    67: `25`,
    670: `327`,
    671: `328`,
    672: `329`,
    673: `329`,
    674: `330`,
    675: `331`,
    676: `332`,
    677: `333`,
    678: `334`,
    679: `334`,
    68: `25`,
    680: `335`,
    681: `335`,
    682: `335`,
    683: `336`,
    684: `337`,
    685: `337`,
    686: `338`,
    687: `339`,
    688: `340`,
    689: `340`,
    69: `25`,
    690: `341`,
    691: `341`,
    692: `342`,
    693: `342`,
    694: `342`,
    695: `343`,
    696: `343`,
    697: `344`,
    698: `344`,
    699: `345`,
    7: `2`,
    70: `25`,
    700: `345`,
    701: `346`,
    702: `347`,
    703: `347`,
    704: `348`,
    705: `348`,
    706: `349`,
    707: `349`,
    708: `349`,
    709: `350`,
    71: `25`,
    710: `350`,
    711: `351`,
    712: `351`,
    713: `352`,
    714: `352`,
    715: `353`,
    716: `354`,
    717: `354`,
    718: `355`,
    719: `356`,
    72: `25`,
    720: `360`,
    721: `360`,
    722: `361`,
    723: `362`,
    724: `362`,
    725: `363`,
    726: `364`,
    727: `364`,
    728: `364`,
    729: `365`,
    73: `25`,
    730: `365`,
    731: `366`,
    732: `367`,
    733: `368`,
    734: `368`,
    735: `369`,
    736: `369`,
    737: `370`,
    738: `370`,
    739: `370`,
    74: `25`,
    740: `371`,
    741: `371`,
    742: `372`,
    743: `372`,
    744: `373`,
    745: `373`,
    746: `374`,
    747: `375`,
    748: `375`,
    749: `376`,
    75: `25`,
    750: `377`,
    751: `378`,
    752: `379`,
    753: `379`,
    754: `380`,
    755: `380`,
    756: `381`,
    757: `382`,
    758: `382`,
    759: `383`,
    76: `25`,
    760: `384`,
    761: `384`,
    762: `385`,
    763: `386`,
    764: `386`,
    765: `387`,
    766: `388`,
    767: `389`,
    768: `389`,
    769: `390`,
    77: `25`,
    770: `391`,
    771: `392`,
    772: `392`,
    773: `393`,
    774: `394`,
    775: `394`,
    776: `395`,
    777: `395`,
    778: `397`,
    779: `397`,
    78: `25`,
    780: `398`,
    781: `398`,
    782: `398`,
    783: `398`,
    784: `398`,
    785: `398`,
    786: `399`,
    787: `399`,
    788: `400`,
    789: `400`,
    79: `25`,
    790: `401`,
    791: `402`,
    792: `402`,
    793: `403`,
    794: `403`,
    795: `404`,
    796: `404`,
    797: `406`,
    798: `407`,
    799: `407`,
    8: `2`,
    80: `25`,
    800: `408`,
    801: `408`,
    802: `409`,
    803: `409`,
    804: `410`,
    805: `410`,
    806: `410`,
    807: `411`,
    808: `411`,
    809: `415`,
    81: `25`,
    810: `415`,
    811: `416`,
    812: `416`,
    813: `417`,
    814: `422`,
    815: `422`,
    816: `423`,
    817: `424`,
    818: `424`,
    819: `425`,
    82: `25`,
    820: `426`,
    821: `426`,
    822: `427`,
    823: `428`,
    824: `429`,
    825: `430`,
    826: `430`,
    827: `430`,
    828: `431`,
    829: `431`,
    83: `25`,
    830: `431`,
    831: `432`,
    832: `433`,
    833: `433`,
    834: `434`,
    835: `434`,
    836: `434`,
    837: `434`,
    838: `434`,
    839: `434`,
    84: `25`,
    840: `434`,
    841: `434`,
    842: `434`,
    843: `434`,
    844: `435`,
    845: `435`,
    846: `436`,
    847: `437`,
    848: `438`,
    849: `438`,
    85: `25`,
    850: `439`,
    851: `440`,
    852: `440`,
    853: `441`,
    854: `442`,
    855: `443`,
    856: `443`,
    857: `444`,
    858: `445`,
    859: `445`,
    86: `25`,
    860: `446`,
    861: `447`,
    862: `452`,
    863: `453`,
    864: `453`,
    865: `454`,
    866: `455`,
    867: `456`,
    868: `457`,
    869: `457`,
    87: `25`,
    870: `458`,
    871: `458`,
    872: `459`,
    873: `460`,
    874: `460`,
    875: `461`,
    876: `462`,
    877: `462`,
    878: `463`,
    879: `464`,
    88: `25`,
    880: `464`,
    881: `465`,
    882: `466`,
    883: `467`,
    884: `467`,
    885: `468`,
    886: `469`,
    887: `470`,
    888: `470`,
    889: `471`,
    89: `25`,
    890: `472`,
    891: `472`,
    892: `473`,
    893: `473`,
    894: `475`,
    895: `475`,
    896: `476`,
    897: `476`,
    898: `477`,
    899: `477`,
    9: `2`,
    90: `25`,
    900: `478`,
    901: `478`,
    902: `479`,
    903: `479`,
    904: `480`,
    905: `485`,
    906: `485`,
    907: `486`,
    908: `487`,
    909: `487`,
    91: `25`,
    910: `488`,
    911: `489`,
    912: `489`,
    913: `490`,
    914: `491`,
    915: `492`,
    916: `493`,
    917: `493`,
    918: `493`,
    919: `494`,
    92: `25`,
    920: `494`,
    921: `494`,
    922: `495`,
    923: `496`,
    924: `496`,
    925: `497`,
    926: `497`,
    927: `497`,
    928: `497`,
    929: `497`,
    93: `25`,
    930: `497`,
    931: `497`,
    932: `497`,
    933: `497`,
    934: `497`,
    935: `498`,
    936: `498`,
    937: `499`,
    938: `500`,
    939: `501`,
    94: `25`,
    940: `501`,
    941: `502`,
    942: `503`,
    943: `503`,
    944: `504`,
    945: `505`,
    946: `506`,
    947: `506`,
    948: `507`,
    949: `507`,
    95: `25`,
    950: `508`,
    951: `508`,
    952: `508`,
    953: `509`,
    954: `509`,
    955: `510`,
    956: `511`,
    957: `511`,
    958: `512`,
    959: `513`,
    96: `25`,
    960: `518`,
    961: `519`,
    962: `519`,
    963: `520`,
    964: `521`,
    965: `522`,
    966: `523`,
    967: `523`,
    968: `524`,
    969: `524`,
    97: `25`,
    970: `525`,
    971: `526`,
    972: `526`,
    973: `527`,
    974: `528`,
    975: `528`,
    976: `529`,
    977: `530`,
    978: `530`,
    979: `531`,
    98: `25`,
    980: `532`,
    981: `533`,
    982: `533`,
    983: `534`,
    984: `535`,
    985: `536`,
    986: `536`,
    987: `537`,
    988: `538`,
    989: `538`,
    99: `25`,
    990: `539`,
    991: `539`,
    992: `541`,
    993: `541`,
    994: `542`,
    995: `542`,
    996: `543`,
    997: `543`,
    998: `544`,
    999: `544`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: {
    _api_a_swap_execute2: 1
    },
  extraPages: 1,
  stateKeys: 2,
  stateSize: 177,
  unsupported: [],
  version: 13,
  warnings: [`API a_swap_execute may use up to 12 boxes, but the limit is 8. API a_swap_execute starts at /app/index.rsh:3247:31:application.`, `API a_swap_execute may use up to 18 transaction references, but the limit is 8. API a_swap_execute starts at /app/index.rsh:3247:31:application.`, `Step 0 calls a remote object at /app/index.rsh:3235:40:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:3286:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:3305:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:3314:35:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:3331:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 12 boxes, but the limit is 8. Step 2 starts at /app/index.rsh:3247:31:dot.`, `Step 2 may use up to 18 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:3247:31:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:3522:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:3247:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "a_admin_grant": a_admin_grant,
  "a_admin_lock": a_admin_lock,
  "a_admin_updateFee": a_admin_updateFee,
  "a_admin_updateFeeToken": a_admin_updateFeeToken,
  "a_swap_deleteListing": a_swap_deleteListing,
  "a_swap_execute": a_swap_execute,
  "a_swap_list": a_swap_list,
  "arc200_transfer": arc200_transfer,
  "nop": nop,
  "touch": touch
  };
export const _APIs = {
  a_admin: {
    grant: a_admin_grant,
    lock: a_admin_lock,
    updateFee: a_admin_updateFee,
    updateFeeToken: a_admin_updateFeeToken
    },
  a_swap: {
    deleteListing: a_swap_deleteListing,
    execute: a_swap_execute,
    list: a_swap_list
    },
  arc200_transfer: arc200_transfer,
  nop: nop,
  touch: touch
  };
