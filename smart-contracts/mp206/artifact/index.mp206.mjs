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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc6 = stdlib.T_Data({
    NET: ctc4,
    SC: ctc5
    });
  return {
    e_sale: {
      BuyEvent: [ctc0, ctc1],
      DeleteListingEvent: [ctc0],
      ListEvent: [ctc0, ctc2, ctc0, ctc1, ctc6, ctc3, ctc3]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_UInt256;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    fee: ctc2,
    listCount: ctc3,
    locked: ctc4,
    manager: ctc0
    });
  const ctc6 = stdlib.T_Struct([['manager', ctc0], ['locked', ctc4], ['fee', ctc2], ['listCount', ctc3]]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc8 = stdlib.T_Contract;
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Tuple([ctc8, ctc3]);
  const ctc11 = stdlib.T_Data({
    NET: ctc9,
    SC: ctc10
    });
  const ctc12 = stdlib.T_Struct([['collectionId', ctc8], ['tokenId', ctc3], ['listAddr', ctc0], ['listPrice', ctc11], ['endTime', ctc2], ['royalty', ctc2], ['royaltyPoints', ctc2], ['creatorPoints1', ctc2], ['creatorPoints2', ctc2], ['creatorPoints3', ctc2], ['creatorAddress1', ctc0], ['creatorAddress2', ctc0], ['creatorAddress3', ctc0]]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Data({
    None: ctc13,
    Some: ctc12
    });
  const map0_ctc = ctc14;
  
  
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async () => {
        
        
        return v2802;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async () => {
        
        const v2829 = v2822.manager;
        
        return v2829;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async () => {
        
        const v2830 = v2822.manager;
        const v2831 = v2822.locked;
        const v2832 = v2822.fee;
        const v2833 = v2822.listCount;
        const v2834 = {
          fee: v2832,
          listCount: v2833,
          locked: v2831,
          manager: v2830
          };
        
        return v2834;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async (_v2843 ) => {
          const v2843 = stdlib.protect(ctc7, _v2843, null);
        
        const v2844 = stdlib.bytesFromHex("0xae4d14ad");
        const v2846 = stdlib.digest([ctc7], [v2844]);
        const v2847 = stdlib.digest([ctc7], [v2843]);
        const v2848 = stdlib.digestEq(v2846, v2847);
        
        return v2848;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async () => {
        
        
        return v2815;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const v_sale_listingByIndex = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2802, v2810, v2815, v2822, v2826] = svs;
      return (await ((async (_v2836 ) => {
          const v2836 = stdlib.protect(ctc3, _v2836, null);
        
        const v2837 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc3, v2836, ctc12), null);
        const v2838 = await ctc.getContractInfo();
        const v2839 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v2840 = ['NET', v2839];
        const v2841 = {
          collectionId: v2838,
          creatorAddress1: v2815,
          creatorAddress2: v2815,
          creatorAddress3: v2815,
          creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          listAddr: v2815,
          listPrice: v2840,
          royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v2842 = stdlib.fromSome(v2837, v2841);
        
        return v2842;}))(...args));
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
        rng: ctc6
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc7],
        rng: ctc4
        },
      v_sale: {
        listingByIndex: {
          decode: v_sale_listingByIndex,
          dom: [ctc3],
          rng: ctc12
          }
        },
      zeroAddress: {
        decode: _zeroAddress,
        dom: [],
        rng: ctc0
        }
      },
    views: {
      3: [ctc0, ctc1, ctc0, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  return {
    mapDataTy: ctc10
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Object({
    beacon: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc4, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc12,
    a_admin_lock0_148: ctc13,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc13,
    touch0_148: ctc13
    });
  const ctc19 = stdlib.T_Tuple([ctc4, ctc0]);
  const ctc20 = stdlib.T_Bool;
  const ctc21 = stdlib.T_Tuple([ctc4, ctc20]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v2797 = stdlib.protect(ctc10, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2797],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:1980:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:1980:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2803], secs: v2805, time: v2804, didSend: v31, from: v2802 } = txn1;
      
      ;
      const v2807 = v2803.beacon;
      const v2810 = [];
      const v2811 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v2807,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v2812 = await txn1.getOutput('internal', 'v2811', ctc11, v2811);
      const v2814 = v2812[stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '0')];
      const v2815 = v2812[stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '1')];
      const v2821 = {
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'),
        listCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
        locked: false,
        manager: v2802
        };
      const v2822 = v2821;
      const v2823 = v2804;
      const v2826 = v2814;
      
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
    tys: [ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v2803], secs: v2805, time: v2804, didSend: v31, from: v2802 } = txn1;
  ;
  const v2807 = v2803.beacon;
  const v2810 = [];
  const v2811 = undefined /* Remote */;
  const v2812 = await txn1.getOutput('internal', 'v2811', ctc11, v2811);
  const v2814 = v2812[stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '0')];
  const v2815 = v2812[stdlib.checkedBigNumberify('./index.rsh:1988:40:application', stdlib.UInt_max, '1')];
  const v2820 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2814);
  stdlib.assert(v2820, {
    at: './index.rsh:1988:40:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Deployer'
    });
  const v2821 = {
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '500'),
    listCount: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'),
    locked: false,
    manager: v2802
    };
  let v2822 = v2821;
  let v2823 = v2804;
  let v2826 = v2814;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn3;
    switch (v3306[0]) {
      case 'a_admin_grant0_148': {
        const v3309 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v3436 = v3309[stdlib.checkedBigNumberify('./index.rsh:2453:12:spread', stdlib.UInt_max, '0')];
        const v3437 = v2822.manager;
        const v3438 = stdlib.addressEq(v3437, v3305);
        stdlib.assert(v3438, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2454:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2456:15:application call to [unknown function] (defined at: ./index.rsh:2456:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v3441 = null;
        await txn3.getOutput('a_admin_grant', 'v3441', ctc0, v3441);
        const v3448 = v2822.fee;
        const v3449 = v2822.listCount;
        const v3450 = v2822.locked;
        const v3452 = {
          fee: v3448,
          listCount: v3449,
          locked: v3450,
          manager: v3436
          };
        const cv2822 = v3452;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_admin_lock0_148': {
        const v4026 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v4173 = v2822.manager;
        const v4174 = stdlib.addressEq(v4173, v3305);
        stdlib.assert(v4174, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2441:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2443:15:application call to [unknown function] (defined at: ./index.rsh:2443:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v4176 = null;
        await txn3.getOutput('a_admin_lock', 'v4176', ctc0, v4176);
        const v4182 = v2822.fee;
        const v4183 = v2822.listCount;
        const v4186 = {
          fee: v4182,
          listCount: v4183,
          locked: true,
          manager: v4173
          };
        const cv2822 = v4186;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_admin_updateFee0_148': {
        const v4743 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v4907 = v4743[stdlib.checkedBigNumberify('./index.rsh:2471:12:spread', stdlib.UInt_max, '0')];
        const v4908 = v2822.manager;
        const v4909 = stdlib.addressEq(v4908, v3305);
        stdlib.assert(v4909, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2472:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2474:15:application call to [unknown function] (defined at: ./index.rsh:2474:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v4912 = null;
        await txn3.getOutput('a_admin_updateFee', 'v4912', ctc0, v4912);
        const v4920 = v2822.listCount;
        const v4921 = v2822.locked;
        const v4923 = {
          fee: v4907,
          listCount: v4920,
          locked: v4921,
          manager: v4908
          };
        const cv2822 = v4923;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_sale_buyNet0_148': {
        const v5460 = v3306[1];
        undefined /* setApiDetails */;
        const v5468 = v5460[stdlib.checkedBigNumberify('./index.rsh:2156:12:spread', stdlib.UInt_max, '0')];
        const v5469 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v5468, ctc8), null);
        const v5470 = {
          None: 0,
          Some: 1
          }[v5469[0]];
        const v5471 = stdlib.eq(v5470, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5471, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2158:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'listing not found',
          who: 'Deployer'
          });
        const v5474 = await ctc.getContractInfo();
        const v5475 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v5476 = ['NET', v5475];
        const v5477 = {
          collectionId: v5474,
          creatorAddress1: v2815,
          creatorAddress2: v2815,
          creatorAddress3: v2815,
          creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          listAddr: v2815,
          listPrice: v5476,
          royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v5478 = stdlib.fromSome(v5469, v5477);
        const v5482 = v5478.listPrice;
        let v5492;
        switch (v5482[0]) {
          case 'NET': {
            const v5493 = v5482[1];
            const v5494 = v5493[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
            v5492 = v5494;
            
            break;
            }
          case 'SC': {
            const v5495 = v5482[1];
            v5492 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          }
        const v5496 = stdlib.gt(v5492, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5496, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'must be net listing',
          who: 'Deployer'
          });
        const v5585 = stdlib.add(v2826, v5492);
        ;
        const v5655 = v5478.collectionId;
        const v5656 = v5478.tokenId;
        const v5657 = v5478.listAddr;
        const v5659 = v5478.endTime;
        const v5660 = v5478.royalty;
        const v5661 = v5478.royaltyPoints;
        const v5662 = v5478.creatorPoints1;
        const v5663 = v5478.creatorPoints2;
        const v5664 = v5478.creatorPoints3;
        const v5665 = v5478.creatorAddress1;
        const v5666 = v5478.creatorAddress2;
        const v5667 = v5478.creatorAddress3;
        let v5668;
        switch (v5482[0]) {
          case 'NET': {
            const v5669 = v5482[1];
            const v5670 = v5669[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
            v5668 = v5670;
            
            break;
            }
          case 'SC': {
            const v5671 = v5482[1];
            v5668 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          }
        const v5672 = stdlib.gt(v5668, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5672, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
          msg: 'must be net listing',
          who: 'Deployer'
          });
        const v5676 = stdlib.gt(v5659, v3307);
        stdlib.assert(v5676, {
          at: './index.rsh:2207:20:application',
          fs: ['at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
          msg: 'listing expired',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc2, v5468, ctc8, undefined /* Nothing */);
        const v5677 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2211:40:decimal', stdlib.UInt_max, '10000'), v5660);
        const v5678 = stdlib.safeMul(v5668, v5677);
        const v5679 = stdlib.safeDiv(v5678, stdlib.checkedBigNumberify('./index.rsh:2211:56:decimal', stdlib.UInt_max, '10000'));
        const v5680 = stdlib.safeMul(v5668, v5661);
        const v5681 = stdlib.safeDiv(v5680, stdlib.checkedBigNumberify('./index.rsh:2212:47:decimal', stdlib.UInt_max, '10000'));
        const v5682 = stdlib.safeAdd(v5662, v5663);
        const v5683 = stdlib.safeAdd(v5682, v5664);
        const v5684 = stdlib.safeAdd(v5683, stdlib.checkedBigNumberify('./index.rsh:2213:54:decimal', stdlib.UInt_max, '1'));
        const v5685 = stdlib.safeMul(v5681, v5662);
        const v5686 = stdlib.safeDiv(v5685, v5684);
        const v5687 = stdlib.safeMul(v5681, v5663);
        const v5688 = stdlib.safeDiv(v5687, v5684);
        const v5689 = stdlib.safeMul(v5681, v5664);
        const v5690 = stdlib.safeDiv(v5689, v5684);
        const v5691 = stdlib.safeAdd(v5686, v5688);
        const v5692 = stdlib.safeAdd(v5691, v5690);
        const v5693 = stdlib.safeAdd(v5679, v5692);
        const v5694 = stdlib.safeSub(v5668, v5693);
        const v5698 = stdlib.sub(v5585, v5679);
        ;
        const v5702 = stdlib.sub(v5698, v5686);
        ;
        const v5706 = stdlib.sub(v5702, v5688);
        ;
        const v5710 = stdlib.sub(v5706, v5690);
        ;
        const v5711 = v2822.manager;
        const v5715 = stdlib.sub(v5710, v5694);
        ;
        null;
        const v5716 = await ctc.getContractAddress();
        const v5717 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5656];
        const v5718 = [v5657, v5716];
        const v5719 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5718];
        const v5720 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
        const v5721 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v5657];
        const v5725 = undefined /* Remote */;
        const v5726 = await txn3.getOutput('internal', 'v5725', ctc19, v5725);
        const v5728 = v5726[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
        const v5733 = stdlib.add(v5715, v5728);
        const v5734 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5728);
        stdlib.assert(v5734, {
          at: './index.rsh:2084:15:application',
          fs: ['at ./index.rsh:2228:36:application call to [unknown function] (defined at: ./index.rsh:2070:53:function exp)', 'at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v5735 = null;
        await txn3.getOutput('a_sale_buyNet', 'v5735', ctc0, v5735);
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v5733;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_sale_buySC0_148': {
        const v6177 = v3306[1];
        undefined /* setApiDetails */;
        const v6216 = v6177[stdlib.checkedBigNumberify('./index.rsh:2305:12:spread', stdlib.UInt_max, '0')];
        const v6217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v6216, ctc8), null);
        const v6218 = {
          None: 0,
          Some: 1
          }[v6217[0]];
        const v6219 = stdlib.eq(v6218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6219, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'listing not found',
          who: 'Deployer'
          });
        const v6222 = await ctc.getContractInfo();
        const v6223 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v6224 = ['NET', v6223];
        const v6225 = {
          collectionId: v6222,
          creatorAddress1: v2815,
          creatorAddress2: v2815,
          creatorAddress3: v2815,
          creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          listAddr: v2815,
          listPrice: v6224,
          royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v6226 = stdlib.fromSome(v6217, v6225);
        const v6230 = v6226.listPrice;
        let v6240;
        switch (v6230[0]) {
          case 'NET': {
            const v6241 = v6230[1];
            const v6243 = [v6222, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
            v6240 = v6243;
            
            break;
            }
          case 'SC': {
            const v6245 = v6230[1];
            const v6246 = v6245[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
            const v6247 = v6245[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
            const v6248 = [v6246, v6247];
            v6240 = v6248;
            
            break;
            }
          }
        const v6251 = v6240[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
        const v6252 = stdlib.gt256(v6251, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v6252, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'must be sc listing',
          who: 'Deployer'
          });
        ;
        const v6472 = v6226.collectionId;
        const v6473 = v6226.tokenId;
        const v6474 = v6226.listAddr;
        const v6476 = v6226.endTime;
        const v6477 = v6226.royalty;
        const v6478 = v6226.royaltyPoints;
        const v6479 = v6226.creatorPoints1;
        const v6480 = v6226.creatorPoints2;
        const v6481 = v6226.creatorPoints3;
        const v6482 = v6226.creatorAddress1;
        const v6483 = v6226.creatorAddress2;
        const v6484 = v6226.creatorAddress3;
        let v6485;
        switch (v6230[0]) {
          case 'NET': {
            const v6486 = v6230[1];
            const v6488 = [v6222, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
            v6485 = v6488;
            
            break;
            }
          case 'SC': {
            const v6490 = v6230[1];
            const v6491 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
            const v6492 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
            const v6493 = [v6491, v6492];
            v6485 = v6493;
            
            break;
            }
          }
        const v6495 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '0')];
        const v6496 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
        const v6497 = stdlib.gt256(v6496, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v6497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'must be sc listing',
          who: 'Deployer'
          });
        const v6501 = stdlib.gt(v6476, v3307);
        stdlib.assert(v6501, {
          at: './index.rsh:2351:20:application',
          fs: ['at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'listing expired',
          who: 'Deployer'
          });
        const v6502 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2353:45:decimal', stdlib.UInt_max, '10000'), v6477);
        const v6503 = stdlib.cast("UInt", "UInt256", v6502, false, true);
        const v6504 = stdlib.safeMul256(v6496, v6503);
        const v6505 = stdlib.safeDiv256(v6504, stdlib.checkedBigNumberify('./index.rsh:2353:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v6506 = stdlib.cast("UInt", "UInt256", v6478, false, true);
        const v6507 = stdlib.safeMul256(v6496, v6506);
        const v6508 = stdlib.safeDiv256(v6507, stdlib.checkedBigNumberify('./index.rsh:2354:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
        const v6509 = stdlib.safeAdd(v6479, v6480);
        const v6510 = stdlib.safeAdd(v6509, v6481);
        const v6511 = stdlib.safeAdd(v6510, stdlib.checkedBigNumberify('./index.rsh:2355:62:decimal', stdlib.UInt_max, '1'));
        const v6512 = stdlib.cast("UInt", "UInt256", v6511, false, true);
        const v6513 = stdlib.cast("UInt", "UInt256", v6479, false, true);
        const v6514 = stdlib.safeMul256(v6508, v6513);
        const v6515 = stdlib.safeDiv256(v6514, v6512);
        const v6516 = stdlib.cast("UInt", "UInt256", v6480, false, true);
        const v6517 = stdlib.safeMul256(v6508, v6516);
        const v6518 = stdlib.safeDiv256(v6517, v6512);
        const v6519 = stdlib.cast("UInt", "UInt256", v6481, false, true);
        const v6520 = stdlib.safeMul256(v6508, v6519);
        const v6521 = stdlib.safeDiv256(v6520, v6512);
        const v6522 = stdlib.safeAdd256(v6515, v6518);
        const v6523 = stdlib.safeAdd256(v6522, v6521);
        const v6524 = stdlib.safeAdd256(v6505, v6523);
        const v6525 = stdlib.safeSub256(v6496, v6524);
        const v6526 = await ctc.getContractAddress();
        const v6528 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3305];
        const v6529 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6526];
        const v6530 = [v3305, v6526];
        const v6531 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6530];
        const v6535 = stdlib.bytesFromHex("0x4a968f8f");
        const v6536 = undefined /* Remote */;
        const v6537 = await txn3.getOutput('internal', 'v6536', ctc21, v6536);
        const v6539 = v6537[stdlib.checkedBigNumberify('./index.rsh:2065:15:application', stdlib.UInt_max, '0')];
        const v6544 = stdlib.add(v2826, v6539);
        const v6545 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6539);
        stdlib.assert(v6545, {
          at: './index.rsh:2065:15:application',
          fs: ['at ./index.rsh:2362:37:application call to [unknown function] (defined at: ./index.rsh:2048:56:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6548 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6474];
        const v6552 = stdlib.bytesFromHex("0xda7025b9");
        const v6553 = undefined /* Remote */;
        const v6554 = await txn3.getOutput('internal', 'v6553', ctc21, v6553);
        const v6556 = v6554[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v6561 = stdlib.add(v6544, v6556);
        const v6562 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6556);
        stdlib.assert(v6562, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2363:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6565 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6482];
        const v6570 = undefined /* Remote */;
        const v6571 = await txn3.getOutput('internal', 'v6570', ctc21, v6570);
        const v6573 = v6571[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v6578 = stdlib.add(v6561, v6573);
        const v6579 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6573);
        stdlib.assert(v6579, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2364:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6582 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6483];
        const v6587 = undefined /* Remote */;
        const v6588 = await txn3.getOutput('internal', 'v6587', ctc21, v6587);
        const v6590 = v6588[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v6595 = stdlib.add(v6578, v6590);
        const v6596 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6590);
        stdlib.assert(v6596, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2365:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6599 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6484];
        const v6604 = undefined /* Remote */;
        const v6605 = await txn3.getOutput('internal', 'v6604', ctc21, v6604);
        const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v6612 = stdlib.add(v6595, v6607);
        const v6613 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6607);
        stdlib.assert(v6613, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2366:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6614 = v2822.manager;
        const v6617 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6614];
        const v6622 = undefined /* Remote */;
        const v6623 = await txn3.getOutput('internal', 'v6622', ctc21, v6622);
        const v6625 = v6623[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v6630 = stdlib.add(v6612, v6625);
        const v6631 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6625);
        stdlib.assert(v6631, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2367:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        null;
        await stdlib.mapSet(map0, ctc2, v6216, ctc8, undefined /* Nothing */);
        const v6633 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6473];
        const v6634 = [v6474, v6526];
        const v6635 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6634];
        const v6636 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
        const v6637 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v6474];
        const v6641 = undefined /* Remote */;
        const v6642 = await txn3.getOutput('internal', 'v6641', ctc19, v6641);
        const v6644 = v6642[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
        const v6649 = stdlib.add(v6630, v6644);
        const v6650 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6644);
        stdlib.assert(v6650, {
          at: './index.rsh:2084:15:application',
          fs: ['at ./index.rsh:2373:36:application call to [unknown function] (defined at: ./index.rsh:2070:53:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const v6651 = null;
        await txn3.getOutput('a_sale_buySC', 'v6651', ctc0, v6651);
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v6649;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_sale_deleteListing0_148': {
        const v6894 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v7377 = v6894[stdlib.checkedBigNumberify('./index.rsh:2387:12:spread', stdlib.UInt_max, '0')];
        const v7378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v7377, ctc8), null);
        const v7379 = {
          None: 0,
          Some: 1
          }[v7378[0]];
        const v7380 = stdlib.eq(v7379, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7380, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2388:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2428:15:application call to [unknown function] (defined at: ./index.rsh:2428:15:function exp)'],
          msg: 'listing not found',
          who: 'Deployer'
          });
        const v7383 = await ctc.getContractInfo();
        const v7384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v7385 = ['NET', v7384];
        const v7386 = {
          collectionId: v7383,
          creatorAddress1: v2815,
          creatorAddress2: v2815,
          creatorAddress3: v2815,
          creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          listAddr: v2815,
          listPrice: v7385,
          royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
          };
        const v7387 = stdlib.fromSome(v7378, v7386);
        const v7390 = v7387.listAddr;
        const v7401 = v2822.manager;
        const v7402 = stdlib.addressEq(v7401, v3305);
        const v7403 = stdlib.addressEq(v3305, v7390);
        const v7404 = v7402 ? true : v7403;
        stdlib.assert(v7404, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2423:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2428:15:application call to [unknown function] (defined at: ./index.rsh:2428:15:function exp)'],
          msg: 'must be manager or self listed',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc2, v7377, ctc8, undefined /* Nothing */);
        null;
        const v7407 = null;
        await txn3.getOutput('a_sale_deleteListing', 'v7407', ctc0, v7407);
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_sale_listNet0_148': {
        const v7611 = v3306[1];
        undefined /* setApiDetails */;
        const v7692 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '2')];
        const v7694 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '4')];
        const v7695 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '5')];
        const v7696 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '6')];
        const v7697 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '7')];
        const v7701 = v2822.locked;
        const v7702 = v7701 ? false : true;
        stdlib.assert(v7702, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2109:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v7704 = stdlib.gt(v7692, stdlib.checkedBigNumberify('./index.rsh:2110:23:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v7704, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2110:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'price must be positive',
          who: 'Deployer'
          });
        const v7706 = v2822.fee;
        const v7707 = stdlib.safeAdd(v7694, v7706);
        const v7708 = stdlib.le(v7707, stdlib.checkedBigNumberify('./index.rsh:2111:32:decimal', stdlib.UInt_max, '10000'));
        stdlib.assert(v7708, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2111:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'royalty too high',
          who: 'Deployer'
          });
        const v7710 = stdlib.safeAdd(v7695, v7696);
        const v7711 = stdlib.safeAdd(v7710, v7697);
        const v7712 = stdlib.eq(v7711, stdlib.checkedBigNumberify('./index.rsh:2113:36:decimal', stdlib.UInt_max, '10000'));
        stdlib.assert(v7712, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2112:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'creator points must add to 10000',
          who: 'Deployer'
          });
        ;
        const v8133 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '0')];
        const v8134 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '1')];
        const v8136 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '3')];
        const v8141 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '8')];
        const v8142 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '9')];
        const v8143 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '10')];
        const v8168 = v2822.listCount;
        const v8169 = stdlib.safeAdd256(v8168, stdlib.checkedBigNumberify('./index.rsh:2119:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v8172 = [v7692];
        const v8173 = ['NET', v8172];
        null;
        const v8178 = {
          collectionId: v8133,
          creatorAddress1: v8141,
          creatorAddress2: v8142,
          creatorAddress3: v8143,
          creatorPoints1: v7695,
          creatorPoints2: v7696,
          creatorPoints3: v7697,
          endTime: v8136,
          listAddr: v3305,
          listPrice: v8173,
          royalty: v7707,
          royaltyPoints: v7694,
          tokenId: v8134
          };
        await stdlib.mapSet(map0, ctc2, v8169, ctc8, v8178);
        await txn3.getOutput('a_sale_listNet', 'v8169', ctc2, v8169);
        const v8198 = v2822.manager;
        const v8199 = {
          fee: v7706,
          listCount: v8169,
          locked: v7701,
          manager: v8198
          };
        const cv2822 = v8199;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'a_sale_listSC0_148': {
        const v8328 = v3306[1];
        undefined /* setApiDetails */;
        const v8435 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '3')];
        const v8444 = v2822.locked;
        const v8445 = v8444 ? false : true;
        stdlib.assert(v8445, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2261:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'locked',
          who: 'Deployer'
          });
        const v8447 = stdlib.gt256(v8435, stdlib.checkedBigNumberify('./index.rsh:2262:31:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        stdlib.assert(v8447, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2262:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
          msg: 'price must be positive',
          who: 'Deployer'
          });
        ;
        const v8920 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '0')];
        const v8921 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '1')];
        const v8922 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '2')];
        const v8924 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '4')];
        const v8925 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '5')];
        const v8926 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '6')];
        const v8927 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '7')];
        const v8928 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '8')];
        const v8929 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '9')];
        const v8930 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '10')];
        const v8931 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '11')];
        const v8949 = v2822.listCount;
        const v8950 = stdlib.safeAdd256(v8949, stdlib.checkedBigNumberify('./index.rsh:2266:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
        const v8951 = v2822.fee;
        const v8952 = stdlib.safeAdd(v8925, v8951);
        const v8953 = [v8922, v8435];
        const v8954 = ['SC', v8953];
        null;
        const v8959 = {
          collectionId: v8920,
          creatorAddress1: v8929,
          creatorAddress2: v8930,
          creatorAddress3: v8931,
          creatorPoints1: v8926,
          creatorPoints2: v8927,
          creatorPoints3: v8928,
          endTime: v8924,
          listAddr: v3305,
          listPrice: v8954,
          royalty: v8952,
          royaltyPoints: v8925,
          tokenId: v8921
          };
        await stdlib.mapSet(map0, ctc2, v8950, ctc8, v8959);
        await txn3.getOutput('a_sale_listSC', 'v8950', ctc2, v8950);
        const v8980 = v2822.manager;
        const v8981 = {
          fee: v8951,
          listCount: v8950,
          locked: v8444,
          manager: v8980
          };
        const cv2822 = v8981;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_148': {
        const v9045 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v9702 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '0')];
        const v9703 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '1')];
        const v9704 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '2')];
        const v9705 = v2822.manager;
        const v9706 = stdlib.addressEq(v3305, v9705);
        stdlib.assert(v9706, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:2511:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2513:15:application call to [unknown function] (defined at: ./index.rsh:2513:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v9711 = null;
        await txn3.getOutput('arc200_transfer', 'v9711', ctc0, v9711);
        const v9720 = await ctc.getContractAddress();
        const v9721 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9720];
        const v9722 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9703];
        const v9726 = stdlib.bytesFromHex("0xda7025b9");
        const v9727 = undefined /* Remote */;
        const v9728 = await txn3.getOutput('internal', 'v9727', ctc21, v9727);
        const v9730 = v9728[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
        const v9735 = stdlib.add(v2826, v9730);
        const v9736 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9730);
        stdlib.assert(v9736, {
          at: './index.rsh:2046:15:application',
          fs: ['at ./index.rsh:2515:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2513:15:application call to [unknown function] (defined at: ./index.rsh:2513:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v9735;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_148': {
        const v9762 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v10456 = null;
        await txn3.getOutput('nop', 'v10456', ctc0, v10456);
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v2826;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_148': {
        const v10479 = v3306[1];
        undefined /* setApiDetails */;
        ;
        const v11182 = (stdlib.le(await ctc.getBalance(), v2826) ? stdlib.checkedBigNumberify('./index.rsh:2487:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2826));
        const v11183 = stdlib.safeAdd(v11182, v2826);
        const v11184 = v2822.manager;
        const v11188 = stdlib.sub(v11183, v11182);
        ;
        const v11189 = null;
        await txn3.getOutput('touch', 'v11189', ctc0, v11189);
        const cv2822 = v2822;
        const cv2823 = v3307;
        const cv2826 = v11188;
        
        v2822 = cv2822;
        v2823 = cv2823;
        v2826 = cv2826;
        
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc13,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3116 = ctc.selfAddress();
  const v3118 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2453:34:application call to [unknown function] (defined at: ./index.rsh:2453:34:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_grant0_148" (defined at: ./index.rsh:2453:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_admin_grant'
    });
  const v3121 = v2822.manager;
  const v3122 = stdlib.addressEq(v3121, v3116);
  stdlib.assert(v3122, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2454:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2453:34:application call to [unknown function] (defined at: ./index.rsh:2453:34:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_grant0_148" (defined at: ./index.rsh:2453:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_grant'
    });
  const v3129 = ['a_admin_grant0_148', v3118];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3129],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2453:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_grant"
            });
          ;
          const v3436 = v3309[stdlib.checkedBigNumberify('./index.rsh:2453:12:spread', stdlib.UInt_max, '0')];
          const v3441 = null;
          const v3442 = await txn1.getOutput('a_admin_grant', 'v3441', ctc0, v3441);
          
          const v3448 = v2822.fee;
          const v3449 = v2822.listCount;
          const v3450 = v2822.locked;
          const v3452 = {
            fee: v3448,
            listCount: v3449,
            locked: v3450,
            manager: v3436
            };
          const v13457 = v3452;
          const v13459 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v3436 = v3309[stdlib.checkedBigNumberify('./index.rsh:2453:12:spread', stdlib.UInt_max, '0')];
      const v3437 = v2822.manager;
      const v3438 = stdlib.addressEq(v3437, v3305);
      stdlib.assert(v3438, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2454:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2456:15:application call to [unknown function] (defined at: ./index.rsh:2456:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_grant'
        });
      const v3441 = null;
      const v3442 = await txn1.getOutput('a_admin_grant', 'v3441', ctc0, v3441);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v3309, v3442), {
          at: './index.rsh:2453:13:application',
          fs: ['at ./index.rsh:2453:13:application call to [unknown function] (defined at: ./index.rsh:2453:13:function exp)', 'at ./index.rsh:2457:14:application call to "k" (defined at: ./index.rsh:2456:15:function exp)', 'at ./index.rsh:2456:15:application call to [unknown function] (defined at: ./index.rsh:2456:15:function exp)'],
          msg: 'out',
          who: 'a_admin_grant'
          });
        }
      else {
        }
      
      const v3448 = v2822.fee;
      const v3449 = v2822.listCount;
      const v3450 = v2822.locked;
      const v3452 = {
        fee: v3448,
        listCount: v3449,
        locked: v3450,
        manager: v3436
        };
      const v13457 = v3452;
      const v13459 = v2826;
      return;
      
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc13,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3105 = ctc.selfAddress();
  const v3107 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2440:29:application call to [unknown function] (defined at: ./index.rsh:2440:29:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_lock0_148" (defined at: ./index.rsh:2440:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_admin_lock'
    });
  const v3108 = v2822.manager;
  const v3109 = stdlib.addressEq(v3108, v3105);
  stdlib.assert(v3109, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2441:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2440:29:application call to [unknown function] (defined at: ./index.rsh:2440:29:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_lock0_148" (defined at: ./index.rsh:2440:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_lock'
    });
  const v3114 = ['a_admin_lock0_148', v3107];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3114],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2440:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_lock"
            });
          ;
          const v4173 = v2822.manager;
          const v4176 = null;
          const v4177 = await txn1.getOutput('a_admin_lock', 'v4176', ctc0, v4176);
          
          const v4182 = v2822.fee;
          const v4183 = v2822.listCount;
          const v4186 = {
            fee: v4182,
            listCount: v4183,
            locked: true,
            manager: v4173
            };
          const v13493 = v4186;
          const v13495 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v4173 = v2822.manager;
      const v4174 = stdlib.addressEq(v4173, v3305);
      stdlib.assert(v4174, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2441:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2443:15:application call to [unknown function] (defined at: ./index.rsh:2443:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_lock'
        });
      const v4176 = null;
      const v4177 = await txn1.getOutput('a_admin_lock', 'v4176', ctc0, v4176);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v4026, v4177), {
          at: './index.rsh:2440:13:application',
          fs: ['at ./index.rsh:2440:13:application call to [unknown function] (defined at: ./index.rsh:2440:13:function exp)', 'at ./index.rsh:2444:14:application call to "k" (defined at: ./index.rsh:2443:15:function exp)', 'at ./index.rsh:2443:15:application call to [unknown function] (defined at: ./index.rsh:2443:15:function exp)'],
          msg: 'out',
          who: 'a_admin_lock'
          });
        }
      else {
        }
      
      const v4182 = v2822.fee;
      const v4183 = v2822.listCount;
      const v4186 = {
        fee: v4182,
        listCount: v4183,
        locked: true,
        manager: v4173
        };
      const v13493 = v4186;
      const v13495 = v2826;
      return;
      
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc13,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3131 = ctc.selfAddress();
  const v3133 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2471:37:application call to [unknown function] (defined at: ./index.rsh:2471:37:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_updateFee0_148" (defined at: ./index.rsh:2471:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_admin_updateFee'
    });
  const v3136 = v2822.manager;
  const v3137 = stdlib.addressEq(v3136, v3131);
  stdlib.assert(v3137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2472:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2471:37:application call to [unknown function] (defined at: ./index.rsh:2471:37:function exp)', 'at ./index.rsh:1999:31:application call to "runa_admin_updateFee0_148" (defined at: ./index.rsh:2471:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_updateFee'
    });
  const v3144 = ['a_admin_updateFee0_148', v3133];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3144],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2471:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_updateFee"
            });
          ;
          const v4907 = v4743[stdlib.checkedBigNumberify('./index.rsh:2471:12:spread', stdlib.UInt_max, '0')];
          const v4908 = v2822.manager;
          const v4912 = null;
          const v4913 = await txn1.getOutput('a_admin_updateFee', 'v4912', ctc0, v4912);
          
          const v4920 = v2822.listCount;
          const v4921 = v2822.locked;
          const v4923 = {
            fee: v4907,
            listCount: v4920,
            locked: v4921,
            manager: v4908
            };
          const v13529 = v4923;
          const v13531 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v4907 = v4743[stdlib.checkedBigNumberify('./index.rsh:2471:12:spread', stdlib.UInt_max, '0')];
      const v4908 = v2822.manager;
      const v4909 = stdlib.addressEq(v4908, v3305);
      stdlib.assert(v4909, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2472:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2474:15:application call to [unknown function] (defined at: ./index.rsh:2474:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_updateFee'
        });
      const v4912 = null;
      const v4913 = await txn1.getOutput('a_admin_updateFee', 'v4912', ctc0, v4912);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v4743, v4913), {
          at: './index.rsh:2471:13:application',
          fs: ['at ./index.rsh:2471:13:application call to [unknown function] (defined at: ./index.rsh:2471:13:function exp)', 'at ./index.rsh:2475:14:application call to "k" (defined at: ./index.rsh:2474:15:function exp)', 'at ./index.rsh:2474:15:application call to [unknown function] (defined at: ./index.rsh:2474:15:function exp)'],
          msg: 'out',
          who: 'a_admin_updateFee'
          });
        }
      else {
        }
      
      const v4920 = v2822.listCount;
      const v4921 = v2822.locked;
      const v4923 = {
        fee: v4907,
        listCount: v4920,
        locked: v4921,
        manager: v4908
        };
      const v13529 = v4923;
      const v13531 = v2826;
      return;
      
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_sale_buyNet3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_sale_buyNet3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_sale_buyNet3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc13,
    a_sale_buySC0_148: ctc13,
    a_sale_deleteListing0_148: ctc13,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  const ctc19 = stdlib.T_Tuple([ctc4, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc4, ctc2]);
  const ctc21 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc22 = stdlib.T_Tuple([ctc1, ctc4, ctc21]);
  const ctc23 = stdlib.T_Tuple([ctc1, ctc4, ctc3]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v2916 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buyNet0_148" (defined at: ./index.rsh:2156:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_sale_buyNet'
    });
  const v2917 = v2916[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2919 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v2917, ctc8), null);
  const v2920 = {
    None: 0,
    Some: 1
    }[v2919[0]];
  const v2921 = stdlib.eq(v2920, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2921, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2158:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buyNet0_148" (defined at: ./index.rsh:2156:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'listing not found',
    who: 'a_sale_buyNet'
    });
  const v2924 = await ctc.getContractInfo();
  const v2925 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2926 = ['NET', v2925];
  const v2927 = {
    collectionId: v2924,
    creatorAddress1: v2815,
    creatorAddress2: v2815,
    creatorAddress3: v2815,
    creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    listAddr: v2815,
    listPrice: v2926,
    royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v2928 = stdlib.fromSome(v2919, v2927);
  const v2932 = v2928.listPrice;
  let v2942;
  switch (v2932[0]) {
    case 'NET': {
      const v2943 = v2932[1];
      const v2944 = v2943[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
      v2942 = v2944;
      
      break;
      }
    case 'SC': {
      const v2945 = v2932[1];
      v2942 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    }
  const v2946 = stdlib.gt(v2942, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2946, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buyNet0_148" (defined at: ./index.rsh:2156:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be net listing',
    who: 'a_sale_buyNet'
    });
  const v2953 = ['a_sale_buyNet0_148', v2916];
  
  let v3213;
  switch (v2932[0]) {
    case 'NET': {
      const v3214 = v2932[1];
      const v3215 = v3214[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
      v3213 = v3215;
      
      break;
      }
    case 'SC': {
      const v3216 = v2932[1];
      v3213 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    }
  const v3217 = stdlib.gt(v3213, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3217, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be net listing',
    who: 'a_sale_buyNet'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v2953],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3213, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_sale_buyNet"
            });
          const v5468 = v5460[stdlib.checkedBigNumberify('./index.rsh:2156:12:spread', stdlib.UInt_max, '0')];
          const v5469 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v5468, ctc8), null);
          const v5474 = await ctc.getContractInfo();
          const v5475 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v5476 = ['NET', v5475];
          const v5477 = {
            collectionId: v5474,
            creatorAddress1: v2815,
            creatorAddress2: v2815,
            creatorAddress3: v2815,
            creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            listAddr: v2815,
            listPrice: v5476,
            royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v5478 = stdlib.fromSome(v5469, v5477);
          const v5482 = v5478.listPrice;
          let v5492;
          switch (v5482[0]) {
            case 'NET': {
              const v5493 = v5482[1];
              const v5494 = v5493[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
              v5492 = v5494;
              
              break;
              }
            case 'SC': {
              const v5495 = v5482[1];
              v5492 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            }
          const v5585 = stdlib.add(v2826, v5492);
          sim_r.txns.push({
            amt: v5492,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5655 = v5478.collectionId;
          const v5656 = v5478.tokenId;
          const v5657 = v5478.listAddr;
          const v5660 = v5478.royalty;
          const v5661 = v5478.royaltyPoints;
          const v5662 = v5478.creatorPoints1;
          const v5663 = v5478.creatorPoints2;
          const v5664 = v5478.creatorPoints3;
          const v5665 = v5478.creatorAddress1;
          const v5666 = v5478.creatorAddress2;
          const v5667 = v5478.creatorAddress3;
          let v5668;
          switch (v5482[0]) {
            case 'NET': {
              const v5669 = v5482[1];
              const v5670 = v5669[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
              v5668 = v5670;
              
              break;
              }
            case 'SC': {
              const v5671 = v5482[1];
              v5668 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 0, ctc2, v5468, ctc8, undefined /* Nothing */);
          const v5677 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2211:40:decimal', stdlib.UInt_max, '10000'), v5660);
          const v5678 = stdlib.safeMul(v5668, v5677);
          const v5679 = stdlib.safeDiv(v5678, stdlib.checkedBigNumberify('./index.rsh:2211:56:decimal', stdlib.UInt_max, '10000'));
          const v5680 = stdlib.safeMul(v5668, v5661);
          const v5681 = stdlib.safeDiv(v5680, stdlib.checkedBigNumberify('./index.rsh:2212:47:decimal', stdlib.UInt_max, '10000'));
          const v5682 = stdlib.safeAdd(v5662, v5663);
          const v5683 = stdlib.safeAdd(v5682, v5664);
          const v5684 = stdlib.safeAdd(v5683, stdlib.checkedBigNumberify('./index.rsh:2213:54:decimal', stdlib.UInt_max, '1'));
          const v5685 = stdlib.safeMul(v5681, v5662);
          const v5686 = stdlib.safeDiv(v5685, v5684);
          const v5687 = stdlib.safeMul(v5681, v5663);
          const v5688 = stdlib.safeDiv(v5687, v5684);
          const v5689 = stdlib.safeMul(v5681, v5664);
          const v5690 = stdlib.safeDiv(v5689, v5684);
          const v5691 = stdlib.safeAdd(v5686, v5688);
          const v5692 = stdlib.safeAdd(v5691, v5690);
          const v5693 = stdlib.safeAdd(v5679, v5692);
          const v5694 = stdlib.safeSub(v5668, v5693);
          const v5698 = stdlib.sub(v5585, v5679);
          sim_r.txns.push({
            kind: 'from',
            to: v5657,
            tok: undefined /* Nothing */
            });
          const v5702 = stdlib.sub(v5698, v5686);
          sim_r.txns.push({
            kind: 'from',
            to: v5665,
            tok: undefined /* Nothing */
            });
          const v5706 = stdlib.sub(v5702, v5688);
          sim_r.txns.push({
            kind: 'from',
            to: v5666,
            tok: undefined /* Nothing */
            });
          const v5710 = stdlib.sub(v5706, v5690);
          sim_r.txns.push({
            kind: 'from',
            to: v5667,
            tok: undefined /* Nothing */
            });
          const v5711 = v2822.manager;
          const v5715 = stdlib.sub(v5710, v5694);
          sim_r.txns.push({
            kind: 'from',
            to: v5711,
            tok: undefined /* Nothing */
            });
          null;
          const v5716 = await ctc.getContractAddress();
          const v5717 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5656];
          const v5718 = [v5657, v5716];
          const v5719 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5718];
          const v5720 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
          const v5721 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v5657];
          const v5725 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v5655,
              remote: ({
                accs: [v5657, v3305],
                apps: [v5655],
                bills: stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc20, v5717], [ctc22, v5719], [ctc23, v5720], [ctc23, v5721]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2076:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          const v5726 = await txn1.getOutput('internal', 'v5725', ctc19, v5725);
          const v5728 = v5726[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
          const v5733 = stdlib.add(v5715, v5728);
          const v5735 = null;
          const v5736 = await txn1.getOutput('a_sale_buyNet', 'v5735', ctc0, v5735);
          
          const v13565 = v2822;
          const v13567 = v5733;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      undefined /* setApiDetails */;
      const v5468 = v5460[stdlib.checkedBigNumberify('./index.rsh:2156:12:spread', stdlib.UInt_max, '0')];
      const v5469 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v5468, ctc8), null);
      const v5470 = {
        None: 0,
        Some: 1
        }[v5469[0]];
      const v5471 = stdlib.eq(v5470, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5471, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2158:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'listing not found',
        who: 'a_sale_buyNet'
        });
      const v5474 = await ctc.getContractInfo();
      const v5475 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v5476 = ['NET', v5475];
      const v5477 = {
        collectionId: v5474,
        creatorAddress1: v2815,
        creatorAddress2: v2815,
        creatorAddress3: v2815,
        creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        listAddr: v2815,
        listPrice: v5476,
        royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v5478 = stdlib.fromSome(v5469, v5477);
      const v5482 = v5478.listPrice;
      let v5492;
      switch (v5482[0]) {
        case 'NET': {
          const v5493 = v5482[1];
          const v5494 = v5493[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
          v5492 = v5494;
          
          break;
          }
        case 'SC': {
          const v5495 = v5482[1];
          v5492 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        }
      const v5496 = stdlib.gt(v5492, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5496, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2156:33:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2156:33:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'must be net listing',
        who: 'a_sale_buyNet'
        });
      const v5585 = stdlib.add(v2826, v5492);
      ;
      const v5655 = v5478.collectionId;
      const v5656 = v5478.tokenId;
      const v5657 = v5478.listAddr;
      const v5659 = v5478.endTime;
      const v5660 = v5478.royalty;
      const v5661 = v5478.royaltyPoints;
      const v5662 = v5478.creatorPoints1;
      const v5663 = v5478.creatorPoints2;
      const v5664 = v5478.creatorPoints3;
      const v5665 = v5478.creatorAddress1;
      const v5666 = v5478.creatorAddress2;
      const v5667 = v5478.creatorAddress3;
      let v5668;
      switch (v5482[0]) {
        case 'NET': {
          const v5669 = v5482[1];
          const v5670 = v5669[stdlib.checkedBigNumberify('./index.rsh:2196:17:array', stdlib.UInt_max, '0')];
          v5668 = v5670;
          
          break;
          }
        case 'SC': {
          const v5671 = v5482[1];
          v5668 = stdlib.checkedBigNumberify('./index.rsh:2197:22:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        }
      const v5672 = stdlib.gt(v5668, stdlib.checkedBigNumberify('./index.rsh:2201:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5672, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
        msg: 'must be net listing',
        who: 'a_sale_buyNet'
        });
      const v5676 = stdlib.gt(v5659, v3307);
      stdlib.assert(v5676, {
        at: './index.rsh:2207:20:application',
        fs: ['at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
        msg: 'listing expired',
        who: 'a_sale_buyNet'
        });
      await stdlib.mapSet(map0, ctc2, v5468, ctc8, undefined /* Nothing */);
      const v5677 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2211:40:decimal', stdlib.UInt_max, '10000'), v5660);
      const v5678 = stdlib.safeMul(v5668, v5677);
      const v5679 = stdlib.safeDiv(v5678, stdlib.checkedBigNumberify('./index.rsh:2211:56:decimal', stdlib.UInt_max, '10000'));
      const v5680 = stdlib.safeMul(v5668, v5661);
      const v5681 = stdlib.safeDiv(v5680, stdlib.checkedBigNumberify('./index.rsh:2212:47:decimal', stdlib.UInt_max, '10000'));
      const v5682 = stdlib.safeAdd(v5662, v5663);
      const v5683 = stdlib.safeAdd(v5682, v5664);
      const v5684 = stdlib.safeAdd(v5683, stdlib.checkedBigNumberify('./index.rsh:2213:54:decimal', stdlib.UInt_max, '1'));
      const v5685 = stdlib.safeMul(v5681, v5662);
      const v5686 = stdlib.safeDiv(v5685, v5684);
      const v5687 = stdlib.safeMul(v5681, v5663);
      const v5688 = stdlib.safeDiv(v5687, v5684);
      const v5689 = stdlib.safeMul(v5681, v5664);
      const v5690 = stdlib.safeDiv(v5689, v5684);
      const v5691 = stdlib.safeAdd(v5686, v5688);
      const v5692 = stdlib.safeAdd(v5691, v5690);
      const v5693 = stdlib.safeAdd(v5679, v5692);
      const v5694 = stdlib.safeSub(v5668, v5693);
      const v5698 = stdlib.sub(v5585, v5679);
      ;
      const v5702 = stdlib.sub(v5698, v5686);
      ;
      const v5706 = stdlib.sub(v5702, v5688);
      ;
      const v5710 = stdlib.sub(v5706, v5690);
      ;
      const v5711 = v2822.manager;
      const v5715 = stdlib.sub(v5710, v5694);
      ;
      null;
      const v5716 = await ctc.getContractAddress();
      const v5717 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5656];
      const v5718 = [v5657, v5716];
      const v5719 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v5718];
      const v5720 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
      const v5721 = [v5655, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v5657];
      const v5725 = undefined /* Remote */;
      const v5726 = await txn1.getOutput('internal', 'v5725', ctc19, v5725);
      const v5728 = v5726[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
      const v5733 = stdlib.add(v5715, v5728);
      const v5734 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5728);
      stdlib.assert(v5734, {
        at: './index.rsh:2084:15:application',
        fs: ['at ./index.rsh:2228:36:application call to [unknown function] (defined at: ./index.rsh:2070:53:function exp)', 'at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buyNet'
        });
      const v5735 = null;
      const v5736 = await txn1.getOutput('a_sale_buyNet', 'v5735', ctc0, v5735);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v5460, v5736), {
          at: './index.rsh:2156:13:application',
          fs: ['at ./index.rsh:2156:13:application call to [unknown function] (defined at: ./index.rsh:2156:13:function exp)', 'at ./index.rsh:2230:14:application call to "k" (defined at: ./index.rsh:2205:15:function exp)', 'at ./index.rsh:2205:15:application call to [unknown function] (defined at: ./index.rsh:2205:15:function exp)'],
          msg: 'out',
          who: 'a_sale_buyNet'
          });
        }
      else {
        }
      
      const v13565 = v2822;
      const v13567 = v5733;
      return;
      
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_sale_buySC3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_sale_buySC3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_sale_buySC3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc13,
    a_sale_buySC0_148: ctc13,
    a_sale_deleteListing0_148: ctc13,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  const ctc19 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc20 = stdlib.T_Tuple([ctc4, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc1, ctc4, ctc3]);
  const ctc22 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc23 = stdlib.T_Tuple([ctc1, ctc4, ctc22]);
  const ctc24 = stdlib.T_Tuple([ctc1, ctc4, ctc2]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3018 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buySC0_148" (defined at: ./index.rsh:2305:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_sale_buySC'
    });
  const v3019 = v3018[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3021 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3019, ctc8), null);
  const v3022 = {
    None: 0,
    Some: 1
    }[v3021[0]];
  const v3023 = stdlib.eq(v3022, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3023, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buySC0_148" (defined at: ./index.rsh:2305:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'listing not found',
    who: 'a_sale_buySC'
    });
  const v3026 = await ctc.getContractInfo();
  const v3027 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3028 = ['NET', v3027];
  const v3029 = {
    collectionId: v3026,
    creatorAddress1: v2815,
    creatorAddress2: v2815,
    creatorAddress3: v2815,
    creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    listAddr: v2815,
    listPrice: v3028,
    royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v3030 = stdlib.fromSome(v3021, v3029);
  const v3034 = v3030.listPrice;
  let v3044;
  switch (v3034[0]) {
    case 'NET': {
      const v3045 = v3034[1];
      const v3047 = [v3026, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      v3044 = v3047;
      
      break;
      }
    case 'SC': {
      const v3049 = v3034[1];
      const v3050 = v3049[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
      const v3051 = v3049[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
      const v3052 = [v3050, v3051];
      v3044 = v3052;
      
      break;
      }
    }
  const v3055 = v3044[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
  const v3056 = stdlib.gt256(v3055, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3056, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_buySC0_148" (defined at: ./index.rsh:2305:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be sc listing',
    who: 'a_sale_buySC'
    });
  const v3063 = ['a_sale_buySC0_148', v3018];
  
  let v3244;
  switch (v3034[0]) {
    case 'NET': {
      const v3245 = v3034[1];
      const v3247 = [v3026, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
      v3244 = v3247;
      
      break;
      }
    case 'SC': {
      const v3249 = v3034[1];
      const v3250 = v3249[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
      const v3251 = v3249[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
      const v3252 = [v3250, v3251];
      v3244 = v3252;
      
      break;
      }
    }
  const v3255 = v3244[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
  const v3256 = stdlib.gt256(v3255, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v3256, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be sc listing',
    who: 'a_sale_buySC'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3063],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2348:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_sale_buySC"
            });
          const v6216 = v6177[stdlib.checkedBigNumberify('./index.rsh:2305:12:spread', stdlib.UInt_max, '0')];
          const v6217 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v6216, ctc8), null);
          const v6222 = await ctc.getContractInfo();
          const v6223 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v6224 = ['NET', v6223];
          const v6225 = {
            collectionId: v6222,
            creatorAddress1: v2815,
            creatorAddress2: v2815,
            creatorAddress3: v2815,
            creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            listAddr: v2815,
            listPrice: v6224,
            royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
            };
          const v6226 = stdlib.fromSome(v6217, v6225);
          const v6230 = v6226.listPrice;
          ;
          const v6472 = v6226.collectionId;
          const v6473 = v6226.tokenId;
          const v6474 = v6226.listAddr;
          const v6477 = v6226.royalty;
          const v6478 = v6226.royaltyPoints;
          const v6479 = v6226.creatorPoints1;
          const v6480 = v6226.creatorPoints2;
          const v6481 = v6226.creatorPoints3;
          const v6482 = v6226.creatorAddress1;
          const v6483 = v6226.creatorAddress2;
          const v6484 = v6226.creatorAddress3;
          let v6485;
          switch (v6230[0]) {
            case 'NET': {
              const v6486 = v6230[1];
              const v6488 = [v6222, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
              v6485 = v6488;
              
              break;
              }
            case 'SC': {
              const v6490 = v6230[1];
              const v6491 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
              const v6492 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
              const v6493 = [v6491, v6492];
              v6485 = v6493;
              
              break;
              }
            }
          const v6495 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '0')];
          const v6496 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
          const v6502 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2353:45:decimal', stdlib.UInt_max, '10000'), v6477);
          const v6503 = stdlib.cast("UInt", "UInt256", v6502, false, true);
          const v6504 = stdlib.safeMul256(v6496, v6503);
          const v6505 = stdlib.safeDiv256(v6504, stdlib.checkedBigNumberify('./index.rsh:2353:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v6506 = stdlib.cast("UInt", "UInt256", v6478, false, true);
          const v6507 = stdlib.safeMul256(v6496, v6506);
          const v6508 = stdlib.safeDiv256(v6507, stdlib.checkedBigNumberify('./index.rsh:2354:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
          const v6509 = stdlib.safeAdd(v6479, v6480);
          const v6510 = stdlib.safeAdd(v6509, v6481);
          const v6511 = stdlib.safeAdd(v6510, stdlib.checkedBigNumberify('./index.rsh:2355:62:decimal', stdlib.UInt_max, '1'));
          const v6512 = stdlib.cast("UInt", "UInt256", v6511, false, true);
          const v6513 = stdlib.cast("UInt", "UInt256", v6479, false, true);
          const v6514 = stdlib.safeMul256(v6508, v6513);
          const v6515 = stdlib.safeDiv256(v6514, v6512);
          const v6516 = stdlib.cast("UInt", "UInt256", v6480, false, true);
          const v6517 = stdlib.safeMul256(v6508, v6516);
          const v6518 = stdlib.safeDiv256(v6517, v6512);
          const v6519 = stdlib.cast("UInt", "UInt256", v6481, false, true);
          const v6520 = stdlib.safeMul256(v6508, v6519);
          const v6521 = stdlib.safeDiv256(v6520, v6512);
          const v6522 = stdlib.safeAdd256(v6515, v6518);
          const v6523 = stdlib.safeAdd256(v6522, v6521);
          const v6524 = stdlib.safeAdd256(v6505, v6523);
          const v6525 = stdlib.safeSub256(v6496, v6524);
          const v6526 = await ctc.getContractAddress();
          const v6528 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3305];
          const v6529 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6526];
          const v6530 = [v3305, v6526];
          const v6531 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6530];
          const v6535 = stdlib.bytesFromHex("0x4a968f8f");
          const v6536 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v3305, v6526],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2065:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6528], [ctc21, v6529], [ctc23, v6531]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2058:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2065:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6537 = await txn1.getOutput('internal', 'v6536', ctc19, v6536);
          const v6539 = v6537[stdlib.checkedBigNumberify('./index.rsh:2065:15:application', stdlib.UInt_max, '0')];
          const v6544 = stdlib.add(v2826, v6539);
          const v6548 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6474];
          const v6552 = stdlib.bytesFromHex("0xda7025b9");
          const v6553 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v6474],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6529], [ctc21, v6548]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6554 = await txn1.getOutput('internal', 'v6553', ctc19, v6553);
          const v6556 = v6554[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v6561 = stdlib.add(v6544, v6556);
          const v6565 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6482];
          const v6570 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v6482],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6529], [ctc21, v6565]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6571 = await txn1.getOutput('internal', 'v6570', ctc19, v6570);
          const v6573 = v6571[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v6578 = stdlib.add(v6561, v6573);
          const v6582 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6483];
          const v6587 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v6483],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6529], [ctc21, v6582]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6588 = await txn1.getOutput('internal', 'v6587', ctc19, v6587);
          const v6590 = v6588[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v6595 = stdlib.add(v6578, v6590);
          const v6599 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6484];
          const v6604 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v6484],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6529], [ctc21, v6599]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6605 = await txn1.getOutput('internal', 'v6604', ctc19, v6604);
          const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v6612 = stdlib.add(v6595, v6607);
          const v6614 = v2822.manager;
          const v6617 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6614];
          const v6622 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6495,
              remote: ({
                accs: [v6614],
                apps: [v6495],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc21, v6529], [ctc21, v6617]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v6623 = await txn1.getOutput('internal', 'v6622', ctc19, v6622);
          const v6625 = v6623[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v6630 = stdlib.add(v6612, v6625);
          null;
          await stdlib.simMapSet(sim_r, 0, ctc2, v6216, ctc8, undefined /* Nothing */);
          const v6633 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6473];
          const v6634 = [v6474, v6526];
          const v6635 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6634];
          const v6636 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
          const v6637 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v6474];
          const v6641 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v6472,
              remote: ({
                accs: [v6474, v3305],
                apps: [v6472],
                bills: stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc24, v6633], [ctc23, v6635], [ctc21, v6636], [ctc21, v6637]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2076:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc0.defaultValue /* simReturnVal */];})();
          const v6642 = await txn1.getOutput('internal', 'v6641', ctc20, v6641);
          const v6644 = v6642[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
          const v6649 = stdlib.add(v6630, v6644);
          const v6651 = null;
          const v6652 = await txn1.getOutput('a_sale_buySC', 'v6651', ctc0, v6651);
          
          const v13601 = v2822;
          const v13603 = v6649;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      undefined /* setApiDetails */;
      const v6216 = v6177[stdlib.checkedBigNumberify('./index.rsh:2305:12:spread', stdlib.UInt_max, '0')];
      const v6217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v6216, ctc8), null);
      const v6218 = {
        None: 0,
        Some: 1
        }[v6217[0]];
      const v6219 = stdlib.eq(v6218, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6219, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2306:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'listing not found',
        who: 'a_sale_buySC'
        });
      const v6222 = await ctc.getContractInfo();
      const v6223 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v6224 = ['NET', v6223];
      const v6225 = {
        collectionId: v6222,
        creatorAddress1: v2815,
        creatorAddress2: v2815,
        creatorAddress3: v2815,
        creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        listAddr: v2815,
        listPrice: v6224,
        royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v6226 = stdlib.fromSome(v6217, v6225);
      const v6230 = v6226.listPrice;
      let v6240;
      switch (v6230[0]) {
        case 'NET': {
          const v6241 = v6230[1];
          const v6243 = [v6222, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          v6240 = v6243;
          
          break;
          }
        case 'SC': {
          const v6245 = v6230[1];
          const v6246 = v6245[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
          const v6247 = v6245[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
          const v6248 = [v6246, v6247];
          v6240 = v6248;
          
          break;
          }
        }
      const v6251 = v6240[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
      const v6252 = stdlib.gt256(v6251, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v6252, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2305:32:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2305:32:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'must be sc listing',
        who: 'a_sale_buySC'
        });
      ;
      const v6472 = v6226.collectionId;
      const v6473 = v6226.tokenId;
      const v6474 = v6226.listAddr;
      const v6476 = v6226.endTime;
      const v6477 = v6226.royalty;
      const v6478 = v6226.royaltyPoints;
      const v6479 = v6226.creatorPoints1;
      const v6480 = v6226.creatorPoints2;
      const v6481 = v6226.creatorPoints3;
      const v6482 = v6226.creatorAddress1;
      const v6483 = v6226.creatorAddress2;
      const v6484 = v6226.creatorAddress3;
      let v6485;
      switch (v6230[0]) {
        case 'NET': {
          const v6486 = v6230[1];
          const v6488 = [v6222, stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')];
          v6485 = v6488;
          
          break;
          }
        case 'SC': {
          const v6490 = v6230[1];
          const v6491 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '0')];
          const v6492 = v6490[stdlib.checkedBigNumberify('./index.rsh:2343:16:array', stdlib.UInt_max, '1')];
          const v6493 = [v6491, v6492];
          v6485 = v6493;
          
          break;
          }
        }
      const v6495 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '0')];
      const v6496 = v6485[stdlib.checkedBigNumberify('./index.rsh:2341:15:array', stdlib.UInt_max, '1')];
      const v6497 = stdlib.gt256(v6496, stdlib.checkedBigNumberify('./index.rsh:2346:29:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v6497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2346:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'must be sc listing',
        who: 'a_sale_buySC'
        });
      const v6501 = stdlib.gt(v6476, v3307);
      stdlib.assert(v6501, {
        at: './index.rsh:2351:20:application',
        fs: ['at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'listing expired',
        who: 'a_sale_buySC'
        });
      const v6502 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:2353:45:decimal', stdlib.UInt_max, '10000'), v6477);
      const v6503 = stdlib.cast("UInt", "UInt256", v6502, false, true);
      const v6504 = stdlib.safeMul256(v6496, v6503);
      const v6505 = stdlib.safeDiv256(v6504, stdlib.checkedBigNumberify('./index.rsh:2353:69:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v6506 = stdlib.cast("UInt", "UInt256", v6478, false, true);
      const v6507 = stdlib.safeMul256(v6496, v6506);
      const v6508 = stdlib.safeDiv256(v6507, stdlib.checkedBigNumberify('./index.rsh:2354:62:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '10000'));
      const v6509 = stdlib.safeAdd(v6479, v6480);
      const v6510 = stdlib.safeAdd(v6509, v6481);
      const v6511 = stdlib.safeAdd(v6510, stdlib.checkedBigNumberify('./index.rsh:2355:62:decimal', stdlib.UInt_max, '1'));
      const v6512 = stdlib.cast("UInt", "UInt256", v6511, false, true);
      const v6513 = stdlib.cast("UInt", "UInt256", v6479, false, true);
      const v6514 = stdlib.safeMul256(v6508, v6513);
      const v6515 = stdlib.safeDiv256(v6514, v6512);
      const v6516 = stdlib.cast("UInt", "UInt256", v6480, false, true);
      const v6517 = stdlib.safeMul256(v6508, v6516);
      const v6518 = stdlib.safeDiv256(v6517, v6512);
      const v6519 = stdlib.cast("UInt", "UInt256", v6481, false, true);
      const v6520 = stdlib.safeMul256(v6508, v6519);
      const v6521 = stdlib.safeDiv256(v6520, v6512);
      const v6522 = stdlib.safeAdd256(v6515, v6518);
      const v6523 = stdlib.safeAdd256(v6522, v6521);
      const v6524 = stdlib.safeAdd256(v6505, v6523);
      const v6525 = stdlib.safeSub256(v6496, v6524);
      const v6526 = await ctc.getContractAddress();
      const v6528 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3305];
      const v6529 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6526];
      const v6530 = [v3305, v6526];
      const v6531 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6530];
      const v6535 = stdlib.bytesFromHex("0x4a968f8f");
      const v6536 = undefined /* Remote */;
      const v6537 = await txn1.getOutput('internal', 'v6536', ctc19, v6536);
      const v6539 = v6537[stdlib.checkedBigNumberify('./index.rsh:2065:15:application', stdlib.UInt_max, '0')];
      const v6544 = stdlib.add(v2826, v6539);
      const v6545 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6539);
      stdlib.assert(v6545, {
        at: './index.rsh:2065:15:application',
        fs: ['at ./index.rsh:2362:37:application call to [unknown function] (defined at: ./index.rsh:2048:56:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6548 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6474];
      const v6552 = stdlib.bytesFromHex("0xda7025b9");
      const v6553 = undefined /* Remote */;
      const v6554 = await txn1.getOutput('internal', 'v6553', ctc19, v6553);
      const v6556 = v6554[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v6561 = stdlib.add(v6544, v6556);
      const v6562 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6556);
      stdlib.assert(v6562, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2363:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6565 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6482];
      const v6570 = undefined /* Remote */;
      const v6571 = await txn1.getOutput('internal', 'v6570', ctc19, v6570);
      const v6573 = v6571[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v6578 = stdlib.add(v6561, v6573);
      const v6579 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6573);
      stdlib.assert(v6579, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2364:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6582 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6483];
      const v6587 = undefined /* Remote */;
      const v6588 = await txn1.getOutput('internal', 'v6587', ctc19, v6587);
      const v6590 = v6588[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v6595 = stdlib.add(v6578, v6590);
      const v6596 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6590);
      stdlib.assert(v6596, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2365:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6599 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6484];
      const v6604 = undefined /* Remote */;
      const v6605 = await txn1.getOutput('internal', 'v6604', ctc19, v6604);
      const v6607 = v6605[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v6612 = stdlib.add(v6595, v6607);
      const v6613 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6607);
      stdlib.assert(v6613, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2366:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6614 = v2822.manager;
      const v6617 = [v6495, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6614];
      const v6622 = undefined /* Remote */;
      const v6623 = await txn1.getOutput('internal', 'v6622', ctc19, v6622);
      const v6625 = v6623[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v6630 = stdlib.add(v6612, v6625);
      const v6631 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6625);
      stdlib.assert(v6631, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2367:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      null;
      await stdlib.mapSet(map0, ctc2, v6216, ctc8, undefined /* Nothing */);
      const v6633 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6473];
      const v6634 = [v6474, v6526];
      const v6635 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), v6634];
      const v6636 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v3305];
      const v6637 = [v6472, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), v6474];
      const v6641 = undefined /* Remote */;
      const v6642 = await txn1.getOutput('internal', 'v6641', ctc20, v6641);
      const v6644 = v6642[stdlib.checkedBigNumberify('./index.rsh:2084:15:application', stdlib.UInt_max, '0')];
      const v6649 = stdlib.add(v6630, v6644);
      const v6650 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6644);
      stdlib.assert(v6650, {
        at: './index.rsh:2084:15:application',
        fs: ['at ./index.rsh:2373:36:application call to [unknown function] (defined at: ./index.rsh:2070:53:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
        msg: 'remote bill check',
        who: 'a_sale_buySC'
        });
      const v6651 = null;
      const v6652 = await txn1.getOutput('a_sale_buySC', 'v6651', ctc0, v6651);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v6177, v6652), {
          at: './index.rsh:2305:13:application',
          fs: ['at ./index.rsh:2305:13:application call to [unknown function] (defined at: ./index.rsh:2305:13:function exp)', 'at ./index.rsh:2375:14:application call to "k" (defined at: ./index.rsh:2349:15:function exp)', 'at ./index.rsh:2349:15:application call to [unknown function] (defined at: ./index.rsh:2349:15:function exp)'],
          msg: 'out',
          who: 'a_sale_buySC'
          });
        }
      else {
        }
      
      const v13601 = v2822;
      const v13603 = v6649;
      return;
      
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_sale_deleteListing3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_sale_deleteListing3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_sale_deleteListing3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc13,
    a_sale_buySC0_148: ctc13,
    a_sale_deleteListing0_148: ctc13,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3065 = ctc.selfAddress();
  const v3067 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2387:40:application call to [unknown function] (defined at: ./index.rsh:2387:40:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_deleteListing0_148" (defined at: ./index.rsh:2387:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_sale_deleteListing'
    });
  const v3068 = v3067[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3070 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v3068, ctc8), null);
  const v3071 = {
    None: 0,
    Some: 1
    }[v3070[0]];
  const v3072 = stdlib.eq(v3071, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3072, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2388:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2387:40:application call to [unknown function] (defined at: ./index.rsh:2387:40:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_deleteListing0_148" (defined at: ./index.rsh:2387:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'listing not found',
    who: 'a_sale_deleteListing'
    });
  const v3075 = await ctc.getContractInfo();
  const v3076 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3077 = ['NET', v3076];
  const v3078 = {
    collectionId: v3075,
    creatorAddress1: v2815,
    creatorAddress2: v2815,
    creatorAddress3: v2815,
    creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    listAddr: v2815,
    listPrice: v3077,
    royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
    };
  const v3079 = stdlib.fromSome(v3070, v3078);
  const v3082 = v3079.listAddr;
  const v3093 = v2822.manager;
  const v3094 = stdlib.addressEq(v3093, v3065);
  const v3095 = stdlib.addressEq(v3065, v3082);
  const v3096 = v3094 ? true : v3095;
  stdlib.assert(v3096, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2423:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2387:40:application call to [unknown function] (defined at: ./index.rsh:2387:40:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_deleteListing0_148" (defined at: ./index.rsh:2387:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be manager or self listed',
    who: 'a_sale_deleteListing'
    });
  const v3103 = ['a_sale_deleteListing0_148', v3067];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3103],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2387:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_sale_deleteListing"
            });
          ;
          const v7377 = v6894[stdlib.checkedBigNumberify('./index.rsh:2387:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc2, v7377, ctc8), null);
          await stdlib.simMapSet(sim_r, 0, ctc2, v7377, ctc8, undefined /* Nothing */);
          null;
          const v7407 = null;
          const v7408 = await txn1.getOutput('a_sale_deleteListing', 'v7407', ctc0, v7407);
          
          const v13637 = v2822;
          const v13639 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v7377 = v6894[stdlib.checkedBigNumberify('./index.rsh:2387:12:spread', stdlib.UInt_max, '0')];
      const v7378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc2, v7377, ctc8), null);
      const v7379 = {
        None: 0,
        Some: 1
        }[v7378[0]];
      const v7380 = stdlib.eq(v7379, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7380, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2388:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2428:15:application call to [unknown function] (defined at: ./index.rsh:2428:15:function exp)'],
        msg: 'listing not found',
        who: 'a_sale_deleteListing'
        });
      const v7383 = await ctc.getContractInfo();
      const v7384 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v7385 = ['NET', v7384];
      const v7386 = {
        collectionId: v7383,
        creatorAddress1: v2815,
        creatorAddress2: v2815,
        creatorAddress3: v2815,
        creatorPoints1: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints2: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        creatorPoints3: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        endTime: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        listAddr: v2815,
        listPrice: v7385,
        royalty: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        royaltyPoints: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenId: stdlib.checkedBigNumberify('<builtin>', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0')
        };
      const v7387 = stdlib.fromSome(v7378, v7386);
      const v7390 = v7387.listAddr;
      const v7401 = v2822.manager;
      const v7402 = stdlib.addressEq(v7401, v3305);
      const v7403 = stdlib.addressEq(v3305, v7390);
      const v7404 = v7402 ? true : v7403;
      stdlib.assert(v7404, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2423:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2428:15:application call to [unknown function] (defined at: ./index.rsh:2428:15:function exp)'],
        msg: 'must be manager or self listed',
        who: 'a_sale_deleteListing'
        });
      await stdlib.mapSet(map0, ctc2, v7377, ctc8, undefined /* Nothing */);
      null;
      const v7407 = null;
      const v7408 = await txn1.getOutput('a_sale_deleteListing', 'v7407', ctc0, v7407);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v6894, v7408), {
          at: './index.rsh:2387:13:application',
          fs: ['at ./index.rsh:2387:13:application call to [unknown function] (defined at: ./index.rsh:2387:13:function exp)', 'at ./index.rsh:2431:14:application call to "k" (defined at: ./index.rsh:2428:15:function exp)', 'at ./index.rsh:2428:15:application call to [unknown function] (defined at: ./index.rsh:2428:15:function exp)'],
          msg: 'out',
          who: 'a_sale_deleteListing'
          });
        }
      else {
        }
      
      const v13637 = v2822;
      const v13639 = v2826;
      return;
      
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_sale_listNet3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_sale_listNet3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_sale_listNet3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc15,
    a_sale_buySC0_148: ctc15,
    a_sale_deleteListing0_148: ctc15,
    a_sale_listNet0_148: ctc13,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v2851 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listNet0_148" (defined at: ./index.rsh:2106:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_sale_listNet'
    });
  const v2854 = v2851[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2856 = v2851[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '4')];
  const v2857 = v2851[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '5')];
  const v2858 = v2851[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '6')];
  const v2859 = v2851[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '7')];
  const v2874 = v2822.locked;
  const v2875 = v2874 ? false : true;
  stdlib.assert(v2875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2109:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listNet0_148" (defined at: ./index.rsh:2106:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'locked',
    who: 'a_sale_listNet'
    });
  const v2877 = stdlib.gt(v2854, stdlib.checkedBigNumberify('./index.rsh:2110:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2877, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2110:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listNet0_148" (defined at: ./index.rsh:2106:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'price must be positive',
    who: 'a_sale_listNet'
    });
  const v2879 = v2822.fee;
  const v2880 = stdlib.safeAdd(v2856, v2879);
  const v2881 = stdlib.le(v2880, stdlib.checkedBigNumberify('./index.rsh:2111:32:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2881, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2111:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listNet0_148" (defined at: ./index.rsh:2106:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'royalty too high',
    who: 'a_sale_listNet'
    });
  const v2883 = stdlib.safeAdd(v2857, v2858);
  const v2884 = stdlib.safeAdd(v2883, v2859);
  const v2885 = stdlib.eq(v2884, stdlib.checkedBigNumberify('./index.rsh:2113:36:decimal', stdlib.UInt_max, '10000'));
  stdlib.assert(v2885, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2112:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listNet0_148" (defined at: ./index.rsh:2106:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'creator points must add to 10000',
    who: 'a_sale_listNet'
    });
  const v2912 = ['a_sale_listNet0_148', v2851];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v2912],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2117:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_sale_listNet"
            });
          const v7692 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '2')];
          const v7694 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '4')];
          const v7695 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '5')];
          const v7696 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '6')];
          const v7697 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '7')];
          const v7701 = v2822.locked;
          const v7706 = v2822.fee;
          const v7707 = stdlib.safeAdd(v7694, v7706);
          ;
          const v8133 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '0')];
          const v8134 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '1')];
          const v8136 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '3')];
          const v8141 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '8')];
          const v8142 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '9')];
          const v8143 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '10')];
          const v8168 = v2822.listCount;
          const v8169 = stdlib.safeAdd256(v8168, stdlib.checkedBigNumberify('./index.rsh:2119:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8172 = [v7692];
          const v8173 = ['NET', v8172];
          null;
          const v8178 = {
            collectionId: v8133,
            creatorAddress1: v8141,
            creatorAddress2: v8142,
            creatorAddress3: v8143,
            creatorPoints1: v7695,
            creatorPoints2: v7696,
            creatorPoints3: v7697,
            endTime: v8136,
            listAddr: v3305,
            listPrice: v8173,
            royalty: v7707,
            royaltyPoints: v7694,
            tokenId: v8134
            };
          await stdlib.simMapSet(sim_r, 0, ctc2, v8169, ctc8, v8178);
          const v8179 = await txn1.getOutput('a_sale_listNet', 'v8169', ctc2, v8169);
          
          const v8198 = v2822.manager;
          const v8199 = {
            fee: v7706,
            listCount: v8169,
            locked: v7701,
            manager: v8198
            };
          const v13673 = v8199;
          const v13675 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      undefined /* setApiDetails */;
      const v7692 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '2')];
      const v7694 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '4')];
      const v7695 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '5')];
      const v7696 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '6')];
      const v7697 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '7')];
      const v7701 = v2822.locked;
      const v7702 = v7701 ? false : true;
      stdlib.assert(v7702, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2109:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'locked',
        who: 'a_sale_listNet'
        });
      const v7704 = stdlib.gt(v7692, stdlib.checkedBigNumberify('./index.rsh:2110:23:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v7704, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2110:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'price must be positive',
        who: 'a_sale_listNet'
        });
      const v7706 = v2822.fee;
      const v7707 = stdlib.safeAdd(v7694, v7706);
      const v7708 = stdlib.le(v7707, stdlib.checkedBigNumberify('./index.rsh:2111:32:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v7708, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2111:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'royalty too high',
        who: 'a_sale_listNet'
        });
      const v7710 = stdlib.safeAdd(v7695, v7696);
      const v7711 = stdlib.safeAdd(v7710, v7697);
      const v7712 = stdlib.eq(v7711, stdlib.checkedBigNumberify('./index.rsh:2113:36:decimal', stdlib.UInt_max, '10000'));
      stdlib.assert(v7712, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2112:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2108:73:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2108:73:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'creator points must add to 10000',
        who: 'a_sale_listNet'
        });
      ;
      const v8133 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '0')];
      const v8134 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '1')];
      const v8136 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '3')];
      const v8141 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '8')];
      const v8142 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '9')];
      const v8143 = v7611[stdlib.checkedBigNumberify('./index.rsh:2106:12:spread', stdlib.UInt_max, '10')];
      const v8168 = v2822.listCount;
      const v8169 = stdlib.safeAdd256(v8168, stdlib.checkedBigNumberify('./index.rsh:2119:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v8172 = [v7692];
      const v8173 = ['NET', v8172];
      null;
      const v8178 = {
        collectionId: v8133,
        creatorAddress1: v8141,
        creatorAddress2: v8142,
        creatorAddress3: v8143,
        creatorPoints1: v7695,
        creatorPoints2: v7696,
        creatorPoints3: v7697,
        endTime: v8136,
        listAddr: v3305,
        listPrice: v8173,
        royalty: v7707,
        royaltyPoints: v7694,
        tokenId: v8134
        };
      await stdlib.mapSet(map0, ctc2, v8169, ctc8, v8178);
      const v8179 = await txn1.getOutput('a_sale_listNet', 'v8169', ctc2, v8169);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v7611, v8179), {
          at: './index.rsh:2107:9:application',
          fs: ['at ./index.rsh:2107:9:application call to [unknown function] (defined at: ./index.rsh:2107:9:function exp)', 'at ./index.rsh:2144:16:application call to "k" (defined at: ./index.rsh:2118:17:function exp)', 'at ./index.rsh:2118:17:application call to [unknown function] (defined at: ./index.rsh:2118:17:function exp)'],
          msg: 'out',
          who: 'a_sale_listNet'
          });
        }
      else {
        }
      
      const v8198 = v2822.manager;
      const v8199 = {
        fee: v7706,
        listCount: v8169,
        locked: v7701,
        manager: v8198
        };
      const v13673 = v8199;
      const v13675 = v2826;
      return;
      
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      return;
      break;
      }
    }
  
  
  };
export async function _a_sale_listSC3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_sale_listSC3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_sale_listSC3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt256;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc15,
    a_sale_buySC0_148: ctc15,
    a_sale_deleteListing0_148: ctc15,
    a_sale_listNet0_148: ctc16,
    a_sale_listSC0_148: ctc13,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v2957 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listSC0_148" (defined at: ./index.rsh:2245:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'a_sale_listSC'
    });
  const v2961 = v2957[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v2982 = v2822.locked;
  const v2983 = v2982 ? false : true;
  stdlib.assert(v2983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2261:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listSC0_148" (defined at: ./index.rsh:2245:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'locked',
    who: 'a_sale_listSC'
    });
  const v2985 = stdlib.gt256(v2961, stdlib.checkedBigNumberify('./index.rsh:2262:31:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2985, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2262:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to "runa_sale_listSC0_148" (defined at: ./index.rsh:2245:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'price must be positive',
    who: 'a_sale_listSC'
    });
  const v3014 = ['a_sale_listSC0_148', v2957];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3014],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2264:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_sale_listSC"
            });
          const v8435 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '3')];
          const v8444 = v2822.locked;
          ;
          const v8920 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '0')];
          const v8921 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '1')];
          const v8922 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '2')];
          const v8924 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '4')];
          const v8925 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '5')];
          const v8926 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '6')];
          const v8927 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '7')];
          const v8928 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '8')];
          const v8929 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '9')];
          const v8930 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '10')];
          const v8931 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '11')];
          const v8949 = v2822.listCount;
          const v8950 = stdlib.safeAdd256(v8949, stdlib.checkedBigNumberify('./index.rsh:2266:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
          const v8951 = v2822.fee;
          const v8952 = stdlib.safeAdd(v8925, v8951);
          const v8953 = [v8922, v8435];
          const v8954 = ['SC', v8953];
          null;
          const v8959 = {
            collectionId: v8920,
            creatorAddress1: v8929,
            creatorAddress2: v8930,
            creatorAddress3: v8931,
            creatorPoints1: v8926,
            creatorPoints2: v8927,
            creatorPoints3: v8928,
            endTime: v8924,
            listAddr: v3305,
            listPrice: v8954,
            royalty: v8952,
            royaltyPoints: v8925,
            tokenId: v8921
            };
          await stdlib.simMapSet(sim_r, 0, ctc2, v8950, ctc8, v8959);
          const v8960 = await txn1.getOutput('a_sale_listSC', 'v8950', ctc2, v8950);
          
          const v8980 = v2822.manager;
          const v8981 = {
            fee: v8951,
            listCount: v8950,
            locked: v8444,
            manager: v8980
            };
          const v13709 = v8981;
          const v13711 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      undefined /* setApiDetails */;
      const v8435 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '3')];
      const v8444 = v2822.locked;
      const v8445 = v8444 ? false : true;
      stdlib.assert(v8445, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2261:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'locked',
        who: 'a_sale_listSC'
        });
      const v8447 = stdlib.gt256(v8435, stdlib.checkedBigNumberify('./index.rsh:2262:31:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      stdlib.assert(v8447, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2262:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2260:11:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:2260:11:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
        msg: 'price must be positive',
        who: 'a_sale_listSC'
        });
      ;
      const v8920 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '0')];
      const v8921 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '1')];
      const v8922 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '2')];
      const v8924 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '4')];
      const v8925 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '5')];
      const v8926 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '6')];
      const v8927 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '7')];
      const v8928 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '8')];
      const v8929 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '9')];
      const v8930 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '10')];
      const v8931 = v8328[stdlib.checkedBigNumberify('./index.rsh:2245:12:spread', stdlib.UInt_max, '11')];
      const v8949 = v2822.listCount;
      const v8950 = stdlib.safeAdd256(v8949, stdlib.checkedBigNumberify('./index.rsh:2266:51:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '1'));
      const v8951 = v2822.fee;
      const v8952 = stdlib.safeAdd(v8925, v8951);
      const v8953 = [v8922, v8435];
      const v8954 = ['SC', v8953];
      null;
      const v8959 = {
        collectionId: v8920,
        creatorAddress1: v8929,
        creatorAddress2: v8930,
        creatorAddress3: v8931,
        creatorPoints1: v8926,
        creatorPoints2: v8927,
        creatorPoints3: v8928,
        endTime: v8924,
        listAddr: v3305,
        listPrice: v8954,
        royalty: v8952,
        royaltyPoints: v8925,
        tokenId: v8921
        };
      await stdlib.mapSet(map0, ctc2, v8950, ctc8, v8959);
      const v8960 = await txn1.getOutput('a_sale_listSC', 'v8950', ctc2, v8950);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v8328, v8960), {
          at: './index.rsh:2246:9:application',
          fs: ['at ./index.rsh:2246:9:application call to [unknown function] (defined at: ./index.rsh:2246:9:function exp)', 'at ./index.rsh:2291:16:application call to "k" (defined at: ./index.rsh:2265:17:function exp)', 'at ./index.rsh:2265:17:application call to [unknown function] (defined at: ./index.rsh:2265:17:function exp)'],
          msg: 'out',
          who: 'a_sale_listSC'
          });
        }
      else {
        }
      
      const v8980 = v2822.manager;
      const v8981 = {
        fee: v8951,
        listCount: v8950,
        locked: v8444,
        manager: v8980
        };
      const v13709 = v8981;
      const v13711 = v2826;
      return;
      
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc14 = stdlib.T_Tuple([ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc2]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc14,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc15,
    a_sale_buySC0_148: ctc15,
    a_sale_deleteListing0_148: ctc15,
    a_sale_listNet0_148: ctc16,
    a_sale_listSC0_148: ctc17,
    arc200_transfer0_148: ctc13,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  const ctc19 = stdlib.T_Tuple([ctc4, ctc11]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc4, ctc3]);
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3162 = ctc.selfAddress();
  const v3164 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2510:57:application call to [unknown function] (defined at: ./index.rsh:2510:57:function exp)', 'at ./index.rsh:1999:31:application call to "runarc200_transfer0_148" (defined at: ./index.rsh:2510:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v3171 = v2822.manager;
  const v3172 = stdlib.addressEq(v3162, v3171);
  stdlib.assert(v3172, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:2511:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2510:57:application call to [unknown function] (defined at: ./index.rsh:2510:57:function exp)', 'at ./index.rsh:1999:31:application call to "runarc200_transfer0_148" (defined at: ./index.rsh:2510:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'must be manager',
    who: 'arc200_transfer'
    });
  const v3183 = ['arc200_transfer0_148', v3164];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3183],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2510:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v9702 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '0')];
          const v9703 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '1')];
          const v9704 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '2')];
          const v9711 = null;
          const v9712 = await txn1.getOutput('arc200_transfer', 'v9711', ctc0, v9711);
          
          const v9720 = await ctc.getContractAddress();
          const v9721 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9720];
          const v9722 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9703];
          const v9726 = stdlib.bytesFromHex("0xda7025b9");
          const v9727 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v9702,
              remote: ({
                accs: [v9703],
                apps: [v9702],
                bills: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc20, v9721], [ctc20, v9722]],
                fees: stdlib.checkedBigNumberify('./index.rsh:2040:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
          const v9728 = await txn1.getOutput('internal', 'v9727', ctc19, v9727);
          const v9730 = v9728[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
          const v9735 = stdlib.add(v2826, v9730);
          const v13745 = v2822;
          const v13747 = v9735;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v9702 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '0')];
      const v9703 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '1')];
      const v9704 = v9045[stdlib.checkedBigNumberify('./index.rsh:2510:12:spread', stdlib.UInt_max, '2')];
      const v9705 = v2822.manager;
      const v9706 = stdlib.addressEq(v3305, v9705);
      stdlib.assert(v9706, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:2511:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:2513:15:application call to [unknown function] (defined at: ./index.rsh:2513:15:function exp)'],
        msg: 'must be manager',
        who: 'arc200_transfer'
        });
      const v9711 = null;
      const v9712 = await txn1.getOutput('arc200_transfer', 'v9711', ctc0, v9711);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v9045, v9712), {
          at: './index.rsh:2510:13:application',
          fs: ['at ./index.rsh:2510:13:application call to [unknown function] (defined at: ./index.rsh:2510:13:function exp)', 'at ./index.rsh:2514:14:application call to "k" (defined at: ./index.rsh:2513:15:function exp)', 'at ./index.rsh:2513:15:application call to [unknown function] (defined at: ./index.rsh:2513:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v9720 = await ctc.getContractAddress();
      const v9721 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9720];
      const v9722 = [v9702, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9703];
      const v9726 = stdlib.bytesFromHex("0xda7025b9");
      const v9727 = undefined /* Remote */;
      const v9728 = await txn1.getOutput('internal', 'v9727', ctc19, v9727);
      const v9730 = v9728[stdlib.checkedBigNumberify('./index.rsh:2046:15:application', stdlib.UInt_max, '0')];
      const v9735 = stdlib.add(v2826, v9730);
      const v9736 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9730);
      stdlib.assert(v9736, {
        at: './index.rsh:2046:15:application',
        fs: ['at ./index.rsh:2515:33:application call to [unknown function] (defined at: ./index.rsh:2033:45:function exp)', 'at ./index.rsh:2513:15:application call to [unknown function] (defined at: ./index.rsh:2513:15:function exp)'],
        msg: 'remote bill check',
        who: 'arc200_transfer'
        });
      const v13745 = v2822;
      const v13747 = v9735;
      return;
      
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc13,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3156 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2498:23:application call to [unknown function] (defined at: ./index.rsh:2498:23:function exp)', 'at ./index.rsh:1999:31:application call to "runnop0_148" (defined at: ./index.rsh:2498:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v3160 = ['nop0_148', v3156];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3160],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2498:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v10456 = null;
          const v10457 = await txn1.getOutput('nop', 'v10456', ctc0, v10456);
          
          const v13781 = v2822;
          const v13783 = v2826;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v10456 = null;
      const v10457 = await txn1.getOutput('nop', 'v10456', ctc0, v10456);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v9762, v10457), {
          at: './index.rsh:2498:13:application',
          fs: ['at ./index.rsh:2498:13:application call to [unknown function] (defined at: ./index.rsh:2498:13:function exp)', 'at ./index.rsh:2501:14:application call to "k" (defined at: ./index.rsh:2500:15:function exp)', 'at ./index.rsh:2500:15:application call to [unknown function] (defined at: ./index.rsh:2500:15:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v13781 = v2822;
      const v13783 = v2826;
      return;
      
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc7 = stdlib.T_Data({
    NET: ctc5,
    SC: ctc6
    });
  const ctc8 = stdlib.T_Struct([['collectionId', ctc1], ['tokenId', ctc2], ['listAddr', ctc3], ['listPrice', ctc7], ['endTime', ctc4], ['royalty', ctc4], ['royaltyPoints', ctc4], ['creatorPoints1', ctc4], ['creatorPoints2', ctc4], ['creatorPoints3', ctc4], ['creatorAddress1', ctc3], ['creatorAddress2', ctc3], ['creatorAddress3', ctc3]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    fee: ctc4,
    listCount: ctc2,
    locked: ctc11,
    manager: ctc3
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc1, ctc2, ctc1, ctc2, ctc4, ctc4, ctc4, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc1, ctc3, ctc2]);
  const ctc18 = stdlib.T_Data({
    a_admin_grant0_148: ctc13,
    a_admin_lock0_148: ctc10,
    a_admin_updateFee0_148: ctc5,
    a_sale_buyNet0_148: ctc14,
    a_sale_buySC0_148: ctc14,
    a_sale_deleteListing0_148: ctc14,
    a_sale_listNet0_148: ctc15,
    a_sale_listSC0_148: ctc16,
    arc200_transfer0_148: ctc17,
    nop0_148: ctc10,
    touch0_148: ctc10
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2802, v2810, v2815, v2822, v2826] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc10, ctc3, ctc12, ctc4]);
  const v3148 = stdlib.protect(ctc10, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:2484:25:application call to [unknown function] (defined at: ./index.rsh:2484:25:function exp)', 'at ./index.rsh:1999:31:application call to "runtouch0_148" (defined at: ./index.rsh:2484:12:function exp)', 'at ./index.rsh:1999:31:application call to [unknown function] (defined at: ./index.rsh:1999:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v3152 = ['touch0_148', v3148];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2802, v2810, v2815, v2822, v2826, v3152],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./index.rsh:2484:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
      
      switch (v3306[0]) {
        case 'a_admin_grant0_148': {
          const v3309 = v3306[1];
          
          break;
          }
        case 'a_admin_lock0_148': {
          const v4026 = v3306[1];
          
          break;
          }
        case 'a_admin_updateFee0_148': {
          const v4743 = v3306[1];
          
          break;
          }
        case 'a_sale_buyNet0_148': {
          const v5460 = v3306[1];
          
          break;
          }
        case 'a_sale_buySC0_148': {
          const v6177 = v3306[1];
          
          break;
          }
        case 'a_sale_deleteListing0_148': {
          const v6894 = v3306[1];
          
          break;
          }
        case 'a_sale_listNet0_148': {
          const v7611 = v3306[1];
          
          break;
          }
        case 'a_sale_listSC0_148': {
          const v8328 = v3306[1];
          
          break;
          }
        case 'arc200_transfer0_148': {
          const v9045 = v3306[1];
          
          break;
          }
        case 'nop0_148': {
          const v9762 = v3306[1];
          
          break;
          }
        case 'touch0_148': {
          const v10479 = v3306[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v11182 = (stdlib.le(await ctc.getBalance(), v2826) ? stdlib.checkedBigNumberify('./index.rsh:2487:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2826));
          const v11183 = stdlib.safeAdd(v11182, v2826);
          const v11184 = v2822.manager;
          const v11188 = stdlib.sub(v11183, v11182);
          sim_r.txns.push({
            kind: 'from',
            to: v11184,
            tok: undefined /* Nothing */
            });
          const v11189 = null;
          const v11190 = await txn1.getOutput('touch', 'v11189', ctc0, v11189);
          
          const v13817 = v2822;
          const v13819 = v11188;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc10, ctc3, ctc12, ctc4, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3306], secs: v3308, time: v3307, didSend: v1886, from: v3305 } = txn1;
  switch (v3306[0]) {
    case 'a_admin_grant0_148': {
      const v3309 = v3306[1];
      return;
      break;
      }
    case 'a_admin_lock0_148': {
      const v4026 = v3306[1];
      return;
      break;
      }
    case 'a_admin_updateFee0_148': {
      const v4743 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buyNet0_148': {
      const v5460 = v3306[1];
      return;
      break;
      }
    case 'a_sale_buySC0_148': {
      const v6177 = v3306[1];
      return;
      break;
      }
    case 'a_sale_deleteListing0_148': {
      const v6894 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listNet0_148': {
      const v7611 = v3306[1];
      return;
      break;
      }
    case 'a_sale_listSC0_148': {
      const v8328 = v3306[1];
      return;
      break;
      }
    case 'arc200_transfer0_148': {
      const v9045 = v3306[1];
      return;
      break;
      }
    case 'nop0_148': {
      const v9762 = v3306[1];
      return;
      break;
      }
    case 'touch0_148': {
      const v10479 = v3306[1];
      undefined /* setApiDetails */;
      ;
      const v11182 = (stdlib.le(await ctc.getBalance(), v2826) ? stdlib.checkedBigNumberify('./index.rsh:2487:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2826));
      const v11183 = stdlib.safeAdd(v11182, v2826);
      const v11184 = v2822.manager;
      const v11188 = stdlib.sub(v11183, v11182);
      ;
      const v11189 = null;
      const v11190 = await txn1.getOutput('touch', 'v11189', ctc0, v11189);
      if (v1886) {
        stdlib.protect(ctc0, await interact.out(v10479, v11190), {
          at: './index.rsh:2484:13:application',
          fs: ['at ./index.rsh:2484:13:application call to [unknown function] (defined at: ./index.rsh:2484:13:function exp)', 'at ./index.rsh:2489:14:application call to "k" (defined at: ./index.rsh:2486:15:function exp)', 'at ./index.rsh:2486:15:application call to [unknown function] (defined at: ./index.rsh:2486:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v13817 = v2822;
      const v13819 = v11188;
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
export async function a_sale_buyNet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_sale_buyNet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_sale_buyNet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_sale_buyNet3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_sale_buySC(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_sale_buySC expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_sale_buySC expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_sale_buySC3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_sale_deleteListing(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_sale_deleteListing expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_sale_deleteListing expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_sale_deleteListing3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_sale_listNet(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_sale_listNet expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_sale_listNet expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_sale_listNet3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function a_sale_listSC(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_sale_listSC expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_sale_listSC expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_sale_listSC3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,(uint64)))void`, `_reachp_2((uint64,(byte,byte[216])))void`, `a_admin_grant(address)void`, `a_admin_lock()void`, `a_admin_updateFee(uint64)void`, `a_sale_buyNet(uint256)void`, `a_sale_buySC(uint256)void`, `a_sale_deleteListing(uint256)void`, `a_sale_listNet(uint64,uint256,uint64,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256`, `a_sale_listSC(uint64,uint256,uint64,uint256,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256`, `arc200_transfer(uint64,address,uint256)void`, `nop()void`, `touch()void`],
    pure: [`constructor()address`, `manager()address`, `state()(address,byte,uint64,uint256)`, `supportsInterface(byte[4])byte`, `v_sale_listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]),uint64,uint64,uint64,uint64,uint64,uint64,address,address,address)`, `zeroAddress()address`],
    sigs: [`_reachp_0((uint64,(uint64)))void`, `_reachp_2((uint64,(byte,byte[216])))void`, `a_admin_grant(address)void`, `a_admin_lock()void`, `a_admin_updateFee(uint64)void`, `a_sale_buyNet(uint256)void`, `a_sale_buySC(uint256)void`, `a_sale_deleteListing(uint256)void`, `a_sale_listNet(uint64,uint256,uint64,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256`, `a_sale_listSC(uint64,uint256,uint64,uint256,uint64,uint64,uint64,uint64,uint64,address,address,address)uint256`, `arc200_transfer(uint64,address,uint256)void`, `constructor()address`, `manager()address`, `nop()void`, `state()(address,byte,uint64,uint256)`, `supportsInterface(byte[4])byte`, `touch()void`, `v_sale_listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]),uint64,uint64,uint64,uint64,uint64,uint64,address,address,address)`, `zeroAddress()address`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSASAAgGAQOQThjknQeBAim4AZEBiQFQmQFxeQUmCwABAAVhcHBJRAEBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKEWMpwE2nAluQEIBDgMDYYE8vGUoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnEDEYQQwyKGRJIls1AUkjWzUCgRBbNQUpZCtkUIITBAx5HnsEDf7RaQQkDCYnBDNujV8ETiKjugRYdZ+iBGdDQDEEjxmvYgSWt3LJBKQK4HQEpONJzgTJ9Sk7BNWBAS0E1iiEZgTYUd4nBOM9gFIE7T927gTtx+c7BPK48xg2GgCOEwrlEkUSlxKfEkgSQhI/CvEK+QuzCt0LAQtKCwkLxhJQCtIKpgroADQQVykgMQASRCg1C4AIAAAAAAAADXE0C1CwNAs1BDQQVwAINBBXCCBQNBBXKAFQNA1XASBQMgY1DzUQNBM0ElA0EVA0EFA0DhZQIQQyBjUCNQEpSwFXAH9nK0xXfxJnKDQBFjQCFlA0BRZQZzEZIhJEiBKDNANAAAqABBUffHU0BFCwJUM0EFcpIEk1DDEAEkQoNQuACAAAAAAAABBQNAtQsDQLNQQ0EFcACDQQVwggUCtQNAxQMgY1DzUQQv98NBBXKSBJNQwxABJEKDULgAgAAAAAAAATMDQLULA0CzUENA1XAQg0EFcIIFA0EFcoAVA0DFAyBjUPNRBC/z40DVcBIDULKCEIryk0C1CIEcZJNQwiVSUSRDEYFjIDUDQRUCEJr1Ajr1Ajr1Ajr1Ajr1Ajr1Ajr1A0EVA0EVA0EVA0DIgRiEk1HFdIKUk1DCJVjQIK3QrmQv6niBG8iBG5NA1XASA1CyghCK8pNAtQiBFlSTUMIlUlEkQxGEk1HRYyA1A0EVAhCa9QI69QI69QI69QI69QI69QI69QNBFQNBFQNBFQNAyIESRJNRVXSClJNR4iVY0CDDQMP0L+QzQNVwEgNQsoIQivKTQLUIgRB0k1DCJVJRJENBBXKSAxABIxADEYFjIDUDQRUCEJr1Ajr1Ajr1Ajr1Ajr1Ajr1Ajr1A0EVA0EVA0EVA0DIgQv1coIBIRRCEHKTQLUIgQxIAEwKl8SzQLULAoNQuACAAAAAAAABzvNAtQsDQLNQQyBjUPQv35NAuBKFs1HjQLgThbNR00C4FAWzUcNAuBSFs1GzQLIQ1bNRo0EFcoARdJNRkURDQeIg1ENBAiWzUYNB00GAhJNRchBQ5ENBw0Gwg0GgghBRJENAsiWzUWNAtXCCA1FTQLgTBbNRQ0EFcIICcEoIgP7zUNKTQeFlAyA1A1DCcFNA1QNBYWUDQVUDEAUDQMUDQUFlA0FxZQsCEHKTQNUDQWFjQVUDEAUDQMUDQUFlA0FxZQNB0WUDQcFlA0GxZQNBoWUDQLV1ggUDQLV3ggUDQLV5ggUIgP8YAIAAAAAAAAH+k0DVCwNA01BDQYFjQNUDQZFlEHCFA0EFcpIFAyBjUPNRBC/PU0C1cwIDUbNBBXKAEXSTUaFEQ0GzIDpUQ0CyJbNRk0C1cIIDUYNAshDVs1FzQLgVhbNRY0EFcIICcEoIgPHTUVNBAiWzUUNBY0FAg1DSs0C1coCDQbUFA1DCcFNBVQNBkWUDQYUDEAUDQMUDQXFlA0DRZQsCEHKTQVUDQZFjQYUDEAUDQMUDQXFlA0DRZQNBYWUDQLV2AIUDQLV2gIUDQLV3AIUDQLV3ggUDQLV5ggUDQLV7ggUIgPCoAIAAAAAAAAIvY0FVCwNBU1BDQUFjQVUDQaFlEHCFA0EFcpIFAyBjUPNRBC/A40CyJbNRQ0C1cIIDUNMQA0EFcpIBJEKDUMgAgAAAAAAAAl7zQMULA0DDUEKjQUFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNBSyGCcGsho0DUmyHLIaNAtXKCCyGjQUsjKzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAACX/NAxQsDQMSTULIls1DCI0DBJEMgY0DjQMCDUONQ9C+2woNQuACAAAAAAAACjYNAtQsDQLNQQyBjUPQvtQMgpgMgp4CTQOCUk1DDQQVykgiA3IKDULgAgAAAAAAAArtTQLULA0CzUEMgY0DDQOCDQMCTUONQ9C+xUjryk0C1AhCq9QUDULIQQ0ARJEiA1vNAsiWzUMNAtXCNk1DYAEmgSb+zQMFlA0DVCwNAyIDZE0DSJVjQsMugy9DMAMwwZQBlMGVgZgBmoGdAZ3QvqEgOEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/s8jr4ABAjQLFlCB0AGvUFA1C0L+uyOvgAEDNAtQIQqvUFA1C0L+qSOvgAEENAtQIQqvUFA1C0L+lyOvgAEFNAtQIQqvUFA1C0L+hSOvgAEGNBUWNBRQNBMWUDQSFlA0ERZQNBAWUDQPFlA0DhZQNA1QNAxQNAtQUDIDUFA1C0L+TyOvgAEHNBYWNBVQNBQWUDQTUDQSFlA0ERZQNBAWUDQPFlA0DhZQNA1QNAxQNAtQUFA1C0L+GSOvJwc0DRY0DFA0C1BQgZABr1BQNQtC/gA0ASEEEkSIC280EzUEMRkiEkRC+TE0ASEEEkSIC1o0EFcpIDUEQv/lgOEBAAAAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/O80ASEEEkSICl40EFcpIDQQVygBUDQQVwAIUDQQVwggUDUEQv7XNAEhBBJEiAo5gCD+i4a2UuzJzUIJumXwW5TTf5sey8MuHUButuNLWgkavTQLARKBB5AWUQcINQRC/pyA4QEAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L7pjQBIQQSRIgJFTEYFjIDUDQRUCEJr1Ajr1Ajr1Ajr1Ajr1Ajr1Ajr1A0EVA0EVA0EVAoIQivKTQLUIgJDIgJADUEQv1vNAEhBBJEiAjRNBE1BEL9XzEANRM0CyJbNQ00C1cICDUMgASXHIK0NA0WUDQMULA0DYgI6Cg1Eio0DFADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNAwXshiABDNujV+yGrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAACvs0C1CwNAtJNQwiWzULNAxXCCA1ESI0CxJEgCkAAAAAAAAB9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQTUDIGNAs1DjUPNRBC9ZaICEGBwJoMiAiRsSKyASSyEIAGCDEAMgkSsh4nB7Ifs7Q9NQU2GgE1C0L/EIgIFTYaATULQvpXNhoBNQtC+kJC+pQ2GgEXNQtC+3Q2GgE1C0L7gDYaATULQvuKNhoBNQtC+5Q2GgEXNhoCNhoDFzYaBBc2GgUXNhoGFzYaBxc2GggXNhoJNhoKNhoLNQs1DDUNNQ41DzUQNRE1EjUTNRQ1FUL7ZTYaARc2GgI2GgMXNhoENhoFFzYaBhc2GgcXNhoIFzYaCRc2Ggo2Ggs2Ggw1CzUMNQ01DjUPNRA1ETUSNRM1FDUVNRZC+1UiMTQSRCEEMTUSRCIxNhJEIjE3EkQiNQWIBz8hC68iIkL0nDYaARc2GgI2GgM1CzUMNQ1C+1VC+2tC9Y1C9e40DVcBuDULQvZqNA1XAdg1C0L3ZDQNVwFINQtC+EFC+OBC+Pk0GyINRDQbiAcoNBwiWzUaNBxXCCA1GTQcVyggNRg0HCEMWzUUNBwhC1s1DTQcIQ5bNR40DCJVjQIBWwFkQvPNNAwlWzUbQv+3IjUbQv+xNBciDUQ0HCEPWzIGDUQhByk0C1CIBog0FyEFNBwhEFsJCyEFCjUWNBc0HIGBAVsLIQUKNR00FDQNCDQeCCUINQw0HTQUCzQMCjUVNB00DQs0DAo1FDQdNB4LNAwKNQ00FzQWNBU0FAg0DQgICTUMNBY0GIgGETQVNBxXoSCIBgc0FDQcV8EgiAX9NA00HFfhIIgF8zQMNBBXKSCIBeknCDQLUDEAULAqNBoWUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEkshA0GrIYJwmyGjQYSbIcshoxAEmyHLIaNBmyGjQasjKzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAABZdNAtQsDQLSTUXIls1CyI0CxJEKDUXgAgAAAAAAAAWZzQXULA0FzUEMgY0DjQbCDQWCTQVCTQUCTQNCTQMCTQLCDUONQ9C8rE0DCVbNRdC/q4iNRdC/qg0DVcIIDIDpUQ0FSJbNRw0FVcIIDUbNBVXKCA1GjQVIQxbNRk0FSELWzUYNBUhDls1FzQVV6EgNRQ0FVfBIDUNNBVX4SA1DDQeIlWNAgQWBCFC8hI0HRYyA1A1DUL/oTQeVwEoSTUMVwAINAxXCCBQNQ1C/4s0FiJbNSQ0FlcIIEk1IzIDpUQ0FSEPWzIGDUQ0IyEGryEFNBUhEFsJFlCjiARlJwqiiARfNSI0IyEGrzQVV4EIUKOIBE4nCqKIBEg1FiEGrzQZNBgINBcIJQgWUDUVNBYhBq80GRZQo4gEKDQVoogEIjUhNBYhBq80GBZQo4gEEzQVoogEDTUgNBYhBq80FxZQo4gD/jQVoogD+DUfMgo1GTQkFiOvUDQZUDUeKjQkFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNCSyGIAESpaPj7IaMQBJshyyGjQZSbIcsho0I7IaNCSyMrMyCmA0CQk0ChcJFrcAPlcEAFA1FoAIAAAAAAAAGYg0FlCwNBZJNRUiWzUYIjQYEkQnBjUdKjQkFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNCSyGDQdsho0GkmyHLIaNCKyGjQksjKzMgpgNAkJNAoXCRa3AD5XBABQNRaACAAAAAAAABmZNBZQsDQWSTUVIls1FyI0FxJEKjQkFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNCSyGDQdsho0FEmyHLIaNCGyGjQksjKzMgpgNAkJNAoXCRa3AD5XBABQNRWACAAAAAAAABmqNBVQsDQVSTUUIls1FiI0FhJEKjQkFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNCSyGDQdsho0DUmyHLIaNCCyGjQksjKzMgpgNAkJNAoXCRa3AD5XBABQNRSACAAAAAAAABm7NBRQsDQUSTUNIls1FSI0FRJEKjQkFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJLIQNCSyGDQdsho0DEmyHLIaNB+yGjQksjKzMgpgNAkJNAoXCRa3AD5XBABQNQ2ACAAAAAAAABnMNA1QsDQNSTUMIls1FCI0FBJENBBXKSA1DSo0JBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQkshg0HbIaNA1JshyyGjQjNCI0ITQgoIgBmjQfoIgBlKCIAZChiAGMsho0JLIyszIKYDQJCTQKFwkWtwA+VwQAUDUMgAgAAAAAAAAZ3jQMULA0DEk1DSJbNQwiNAwSRCcINAtQMQBQsCEHKTQLUIgBgio0HBZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASSyEDQcshgnCbIaNBpJshyyGjEASbIcsho0G7IaNByyMrMyCmA0CQk0ChcJFrcAPlcEAFA1C4AIAAAAAAAAGfE0C1CwNAtJNQ0iWzULIjQLEkQoNQ2ACAAAAAAAABn7NA1QsDQNNQQyBjQONBgINBcINBYINBUINBQINAwINAsINQ41D0LuOzQdFjIDUDUWQvwDNB5XAShJNR1XAAg0HVcIIFA1FkL77UhMv0iJIrIBJbIQsgeyCLOJQu3LQu5NQu6EQu6/QvUHQvUXQvX9NhoBNQtC9hpC9lJIiUwJSTUGMgmIAGqJCUlB/+5JNQaIALqJMRkhERJEsSKyASSyEDQFshghEbIZs4GgjQaIAHuIAGwiMgoyCYgAs0Lt3jYaATULQvbvQvcwSRWBIEwJr0xQiUlXACA1E0lIKDUSSVcgIDURSVdASTUQIQxbNQ6JsUL/WklXAQBMIlVNib5JFlEHCEUETVCJvCJOAk2IABuJJTUDiUkiEkw0AhIRRIk0BjQHSg9B/1RC/1w0Bwg1B4lMSb1A/xJLA4gALEL/CrEisgEkshA0BbIYs4kxFjQAJQhJNQAJRwI4BzIKEkQ4ECUSRDgIDkSJNAYINQaJsbIJQv7a`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `2`,
    1000: `525`,
    1001: `525`,
    1002: `526`,
    1003: `526`,
    1004: `527`,
    1005: `528`,
    1006: `528`,
    1007: `529`,
    1008: `530`,
    1009: `531`,
    101: `2`,
    1010: `531`,
    1011: `532`,
    1012: `533`,
    1013: `533`,
    1014: `534`,
    1015: `535`,
    1016: `535`,
    1017: `536`,
    1018: `537`,
    1019: `537`,
    102: `2`,
    1020: `538`,
    1021: `539`,
    1022: `540`,
    1023: `540`,
    1024: `541`,
    1025: `542`,
    1026: `543`,
    1027: `546`,
    1028: `546`,
    1029: `547`,
    103: `2`,
    1030: `548`,
    1031: `548`,
    1032: `549`,
    1033: `550`,
    1034: `550`,
    1035: `551`,
    1036: `552`,
    1037: `552`,
    1038: `553`,
    1039: `554`,
    104: `2`,
    1040: `554`,
    1041: `555`,
    1042: `556`,
    1043: `556`,
    1044: `557`,
    1045: `558`,
    1046: `558`,
    1047: `559`,
    1048: `560`,
    1049: `561`,
    105: `2`,
    1050: `561`,
    1051: `562`,
    1052: `563`,
    1053: `564`,
    1054: `564`,
    1055: `565`,
    1056: `566`,
    1057: `567`,
    1058: `567`,
    1059: `568`,
    106: `2`,
    1060: `569`,
    1061: `570`,
    1062: `570`,
    1063: `571`,
    1064: `572`,
    1065: `573`,
    1066: `573`,
    1067: `574`,
    1068: `575`,
    1069: `576`,
    107: `2`,
    1070: `576`,
    1071: `577`,
    1072: `577`,
    1073: `577`,
    1074: `578`,
    1075: `579`,
    1076: `579`,
    1077: `580`,
    1078: `580`,
    1079: `580`,
    108: `2`,
    1080: `581`,
    1081: `582`,
    1082: `582`,
    1083: `583`,
    1084: `583`,
    1085: `583`,
    1086: `584`,
    1087: `585`,
    1088: `585`,
    1089: `585`,
    109: `2`,
    1090: `586`,
    1091: `586`,
    1092: `586`,
    1093: `586`,
    1094: `586`,
    1095: `586`,
    1096: `586`,
    1097: `586`,
    1098: `586`,
    1099: `586`,
    11: `2`,
    110: `2`,
    1100: `587`,
    1101: `587`,
    1102: `588`,
    1103: `589`,
    1104: `590`,
    1105: `590`,
    1106: `591`,
    1107: `591`,
    1108: `592`,
    1109: `592`,
    111: `2`,
    1110: `593`,
    1111: `594`,
    1112: `594`,
    1113: `595`,
    1114: `596`,
    1115: `596`,
    1116: `597`,
    1117: `598`,
    1118: `598`,
    1119: `598`,
    112: `2`,
    1120: `599`,
    1121: `600`,
    1122: `600`,
    1123: `601`,
    1124: `601`,
    1125: `601`,
    1126: `602`,
    1127: `603`,
    1128: `603`,
    1129: `604`,
    113: `2`,
    1130: `604`,
    1131: `605`,
    1132: `605`,
    1133: `606`,
    1134: `606`,
    1135: `606`,
    1136: `609`,
    1137: `609`,
    1138: `610`,
    1139: `610`,
    114: `2`,
    1140: `610`,
    1141: `611`,
    1142: `611`,
    1143: `612`,
    1144: `612`,
    1145: `613`,
    1146: `613`,
    1147: `613`,
    1148: `614`,
    1149: `615`,
    115: `2`,
    1150: `616`,
    1151: `616`,
    1152: `617`,
    1153: `618`,
    1154: `625`,
    1155: `625`,
    1156: `626`,
    1157: `626`,
    1158: `627`,
    1159: `628`,
    116: `2`,
    1160: `635`,
    1161: `635`,
    1162: `636`,
    1163: `637`,
    1164: `638`,
    1165: `638`,
    1166: `639`,
    1167: `639`,
    1168: `640`,
    1169: `640`,
    117: `2`,
    1170: `640`,
    1171: `641`,
    1172: `641`,
    1173: `642`,
    1174: `642`,
    1175: `643`,
    1176: `643`,
    1177: `644`,
    1178: `645`,
    1179: `645`,
    118: `2`,
    1180: `646`,
    1181: `646`,
    1182: `647`,
    1183: `647`,
    1184: `648`,
    1185: `649`,
    1186: `649`,
    1187: `650`,
    1188: `650`,
    1189: `651`,
    119: `2`,
    1190: `651`,
    1191: `651`,
    1192: `652`,
    1193: `652`,
    1194: `653`,
    1195: `654`,
    1196: `654`,
    1197: `654`,
    1198: `655`,
    1199: `655`,
    12: `2`,
    120: `2`,
    1200: `656`,
    1201: `656`,
    1202: `657`,
    1203: `658`,
    1204: `659`,
    1205: `659`,
    1206: `660`,
    1207: `660`,
    1208: `661`,
    1209: `661`,
    121: `2`,
    1210: `662`,
    1211: `663`,
    1212: `663`,
    1213: `664`,
    1214: `665`,
    1215: `665`,
    1216: `666`,
    1217: `666`,
    1218: `666`,
    1219: `667`,
    122: `2`,
    1220: `667`,
    1221: `668`,
    1222: `669`,
    1223: `670`,
    1224: `670`,
    1225: `671`,
    1226: `671`,
    1227: `672`,
    1228: `672`,
    1229: `673`,
    123: `2`,
    1230: `674`,
    1231: `674`,
    1232: `675`,
    1233: `676`,
    1234: `677`,
    1235: `677`,
    1236: `678`,
    1237: `679`,
    1238: `679`,
    1239: `680`,
    124: `2`,
    1240: `681`,
    1241: `681`,
    1242: `682`,
    1243: `683`,
    1244: `683`,
    1245: `684`,
    1246: `685`,
    1247: `686`,
    1248: `686`,
    1249: `687`,
    125: `2`,
    1250: `688`,
    1251: `689`,
    1252: `692`,
    1253: `692`,
    1254: `693`,
    1255: `694`,
    1256: `694`,
    1257: `695`,
    1258: `696`,
    1259: `696`,
    126: `2`,
    1260: `697`,
    1261: `698`,
    1262: `698`,
    1263: `699`,
    1264: `700`,
    1265: `700`,
    1266: `701`,
    1267: `702`,
    1268: `702`,
    1269: `703`,
    127: `2`,
    1270: `704`,
    1271: `704`,
    1272: `705`,
    1273: `706`,
    1274: `707`,
    1275: `707`,
    1276: `708`,
    1277: `709`,
    1278: `710`,
    1279: `710`,
    128: `2`,
    1280: `711`,
    1281: `712`,
    1282: `713`,
    1283: `713`,
    1284: `714`,
    1285: `714`,
    1286: `714`,
    1287: `715`,
    1288: `716`,
    1289: `716`,
    129: `2`,
    1290: `717`,
    1291: `717`,
    1292: `717`,
    1293: `718`,
    1294: `719`,
    1295: `719`,
    1296: `720`,
    1297: `720`,
    1298: `720`,
    1299: `721`,
    13: `2`,
    130: `4`,
    1300: `722`,
    1301: `722`,
    1302: `723`,
    1303: `723`,
    1304: `723`,
    1305: `724`,
    1306: `725`,
    1307: `725`,
    1308: `726`,
    1309: `726`,
    131: `4`,
    1310: `726`,
    1311: `727`,
    1312: `728`,
    1313: `728`,
    1314: `729`,
    1315: `729`,
    1316: `729`,
    1317: `730`,
    1318: `731`,
    1319: `731`,
    132: `5`,
    1320: `731`,
    1321: `732`,
    1322: `732`,
    1323: `732`,
    1324: `732`,
    1325: `732`,
    1326: `732`,
    1327: `732`,
    1328: `732`,
    1329: `732`,
    133: `5`,
    1330: `732`,
    1331: `733`,
    1332: `733`,
    1333: `734`,
    1334: `735`,
    1335: `736`,
    1336: `736`,
    1337: `737`,
    1338: `737`,
    1339: `738`,
    134: `5`,
    1340: `738`,
    1341: `739`,
    1342: `740`,
    1343: `740`,
    1344: `741`,
    1345: `742`,
    1346: `742`,
    1347: `743`,
    1348: `744`,
    1349: `744`,
    135: `6`,
    1350: `744`,
    1351: `745`,
    1352: `746`,
    1353: `746`,
    1354: `747`,
    1355: `747`,
    1356: `747`,
    1357: `748`,
    1358: `749`,
    1359: `749`,
    136: `7`,
    1360: `750`,
    1361: `750`,
    1362: `751`,
    1363: `751`,
    1364: `752`,
    1365: `752`,
    1366: `752`,
    1367: `755`,
    1368: `755`,
    1369: `756`,
    137: `8`,
    1370: `757`,
    1371: `758`,
    1372: `758`,
    1373: `759`,
    1374: `759`,
    1375: `760`,
    1376: `760`,
    1377: `760`,
    1378: `761`,
    1379: `761`,
    138: `9`,
    1380: `762`,
    1381: `762`,
    1382: `763`,
    1383: `763`,
    1384: `764`,
    1385: `764`,
    1386: `764`,
    1387: `765`,
    1388: `766`,
    1389: `771`,
    139: `10`,
    1390: `772`,
    1391: `772`,
    1392: `773`,
    1393: `773`,
    1394: `773`,
    1395: `773`,
    1396: `773`,
    1397: `773`,
    1398: `773`,
    1399: `773`,
    14: `2`,
    140: `11`,
    1400: `773`,
    1401: `773`,
    1402: `774`,
    1403: `774`,
    1404: `775`,
    1405: `776`,
    1406: `777`,
    1407: `777`,
    1408: `778`,
    1409: `778`,
    141: `11`,
    1410: `779`,
    1411: `780`,
    1412: `780`,
    1413: `781`,
    1414: `782`,
    1415: `783`,
    1416: `784`,
    1417: `784`,
    1418: `785`,
    1419: `785`,
    142: `12`,
    1420: `786`,
    1421: `787`,
    1422: `787`,
    1423: `788`,
    1424: `789`,
    1425: `789`,
    1426: `790`,
    1427: `791`,
    1428: `791`,
    1429: `792`,
    143: `13`,
    1430: `793`,
    1431: `794`,
    1432: `794`,
    1433: `795`,
    1434: `796`,
    1435: `797`,
    1436: `797`,
    1437: `798`,
    1438: `799`,
    1439: `799`,
    144: `14`,
    1440: `800`,
    1441: `800`,
    1442: `802`,
    1443: `802`,
    1444: `803`,
    1445: `803`,
    1446: `804`,
    1447: `804`,
    1448: `805`,
    1449: `805`,
    145: `15`,
    1450: `807`,
    1451: `808`,
    1452: `808`,
    1453: `809`,
    1454: `809`,
    1455: `810`,
    1456: `810`,
    1457: `811`,
    1458: `811`,
    1459: `811`,
    146: `15`,
    1460: `812`,
    1461: `812`,
    1462: `815`,
    1463: `815`,
    1464: `816`,
    1465: `816`,
    1466: `817`,
    1467: `822`,
    1468: `822`,
    1469: `823`,
    147: `16`,
    1470: `824`,
    1471: `824`,
    1472: `825`,
    1473: `826`,
    1474: `826`,
    1475: `827`,
    1476: `828`,
    1477: `829`,
    1478: `830`,
    1479: `830`,
    148: `16`,
    1480: `830`,
    1481: `831`,
    1482: `831`,
    1483: `831`,
    1484: `832`,
    1485: `833`,
    1486: `833`,
    1487: `834`,
    1488: `834`,
    1489: `834`,
    149: `17`,
    1490: `834`,
    1491: `834`,
    1492: `834`,
    1493: `834`,
    1494: `834`,
    1495: `834`,
    1496: `834`,
    1497: `835`,
    1498: `835`,
    1499: `836`,
    15: `2`,
    150: `18`,
    1500: `837`,
    1501: `838`,
    1502: `838`,
    1503: `839`,
    1504: `840`,
    1505: `840`,
    1506: `841`,
    1507: `842`,
    1508: `843`,
    1509: `843`,
    151: `18`,
    1510: `844`,
    1511: `845`,
    1512: `845`,
    1513: `846`,
    1514: `847`,
    1515: `852`,
    1516: `852`,
    1517: `853`,
    1518: `853`,
    1519: `854`,
    152: `19`,
    1520: `854`,
    1521: `855`,
    1522: `856`,
    1523: `856`,
    1524: `857`,
    1525: `857`,
    1526: `858`,
    1527: `858`,
    1528: `858`,
    1529: `861`,
    153: `20`,
    1530: `862`,
    1531: `862`,
    1532: `863`,
    1533: `863`,
    1534: `863`,
    1535: `863`,
    1536: `863`,
    1537: `863`,
    1538: `863`,
    1539: `863`,
    154: `21`,
    1540: `863`,
    1541: `863`,
    1542: `864`,
    1543: `864`,
    1544: `865`,
    1545: `866`,
    1546: `867`,
    1547: `867`,
    1548: `868`,
    1549: `868`,
    155: `22`,
    1550: `869`,
    1551: `869`,
    1552: `870`,
    1553: `870`,
    1554: `871`,
    1555: `871`,
    1556: `871`,
    1557: `874`,
    1558: `874`,
    1559: `875`,
    156: `23`,
    1560: `876`,
    1561: `876`,
    1562: `877`,
    1563: `878`,
    1564: `879`,
    1565: `879`,
    1566: `880`,
    1567: `882`,
    1568: `883`,
    1569: `883`,
    157: `25`,
    1570: `885`,
    1571: `885`,
    1572: `886`,
    1573: `886`,
    1574: `886`,
    1575: `887`,
    1576: `887`,
    1577: `887`,
    1578: `888`,
    1579: `889`,
    158: `25`,
    1580: `889`,
    1581: `890`,
    1582: `890`,
    1583: `890`,
    1584: `890`,
    1585: `890`,
    1586: `890`,
    1587: `890`,
    1588: `890`,
    1589: `890`,
    159: `25`,
    1590: `890`,
    1591: `891`,
    1592: `891`,
    1593: `892`,
    1594: `893`,
    1595: `894`,
    1596: `894`,
    1597: `895`,
    1598: `895`,
    1599: `896`,
    16: `2`,
    160: `25`,
    1600: `896`,
    1601: `897`,
    1602: `897`,
    1603: `898`,
    1604: `898`,
    1605: `899`,
    1606: `900`,
    1607: `900`,
    1608: `901`,
    1609: `902`,
    161: `25`,
    1610: `902`,
    1611: `903`,
    1612: `903`,
    1613: `904`,
    1614: `904`,
    1615: `904`,
    1616: `907`,
    1617: `908`,
    1618: `909`,
    1619: `910`,
    162: `25`,
    1620: `910`,
    1621: `911`,
    1622: `912`,
    1623: `912`,
    1624: `913`,
    1625: `914`,
    1626: `915`,
    1627: `916`,
    1628: `916`,
    1629: `919`,
    163: `25`,
    1630: `919`,
    1631: `920`,
    1632: `920`,
    1633: `921`,
    1634: `922`,
    1635: `923`,
    1636: `923`,
    1637: `923`,
    1638: `924`,
    1639: `924`,
    164: `25`,
    1640: `925`,
    1641: `926`,
    1642: `927`,
    1643: `927`,
    1644: `928`,
    1645: `928`,
    1646: `929`,
    1647: `929`,
    1648: `929`,
    1649: `930`,
    165: `25`,
    1650: `930`,
    1651: `931`,
    1652: `931`,
    1653: `931`,
    1654: `931`,
    1655: `931`,
    1656: `931`,
    1657: `932`,
    1658: `932`,
    1659: `933`,
    166: `25`,
    1660: `934`,
    1661: `935`,
    1662: `935`,
    1663: `936`,
    1664: `937`,
    1665: `939`,
    1666: `939`,
    1667: `940`,
    1668: `940`,
    1669: `940`,
    167: `25`,
    1670: `941`,
    1671: `941`,
    1672: `942`,
    1673: `943`,
    1674: `944`,
    1675: `944`,
    1676: `944`,
    1677: `944`,
    1678: `944`,
    1679: `944`,
    168: `25`,
    1680: `944`,
    1681: `944`,
    1682: `944`,
    1683: `944`,
    1684: `944`,
    1685: `944`,
    1686: `944`,
    1687: `944`,
    1688: `944`,
    1689: `944`,
    169: `25`,
    1690: `944`,
    1691: `944`,
    1692: `944`,
    1693: `944`,
    1694: `944`,
    1695: `944`,
    1696: `944`,
    1697: `944`,
    1698: `945`,
    1699: `945`,
    17: `2`,
    170: `25`,
    1700: `945`,
    1701: `948`,
    1702: `948`,
    1703: `948`,
    1704: `948`,
    1705: `948`,
    1706: `948`,
    1707: `948`,
    1708: `948`,
    1709: `948`,
    171: `25`,
    1710: `948`,
    1711: `948`,
    1712: `948`,
    1713: `948`,
    1714: `948`,
    1715: `948`,
    1716: `948`,
    1717: `948`,
    1718: `948`,
    1719: `948`,
    172: `25`,
    1720: `948`,
    1721: `948`,
    1722: `948`,
    1723: `948`,
    1724: `948`,
    1725: `948`,
    1726: `948`,
    1727: `948`,
    1728: `948`,
    1729: `948`,
    173: `25`,
    1730: `948`,
    1731: `948`,
    1732: `948`,
    1733: `948`,
    1734: `948`,
    1735: `948`,
    1736: `948`,
    1737: `948`,
    1738: `948`,
    1739: `948`,
    174: `25`,
    1740: `948`,
    1741: `948`,
    1742: `948`,
    1743: `948`,
    1744: `948`,
    1745: `948`,
    1746: `948`,
    1747: `948`,
    1748: `948`,
    1749: `948`,
    175: `25`,
    1750: `948`,
    1751: `948`,
    1752: `948`,
    1753: `948`,
    1754: `948`,
    1755: `948`,
    1756: `948`,
    1757: `948`,
    1758: `948`,
    1759: `948`,
    176: `25`,
    1760: `948`,
    1761: `948`,
    1762: `948`,
    1763: `948`,
    1764: `948`,
    1765: `948`,
    1766: `948`,
    1767: `948`,
    1768: `948`,
    1769: `948`,
    177: `25`,
    1770: `948`,
    1771: `948`,
    1772: `948`,
    1773: `948`,
    1774: `948`,
    1775: `948`,
    1776: `948`,
    1777: `948`,
    1778: `948`,
    1779: `948`,
    178: `25`,
    1780: `948`,
    1781: `948`,
    1782: `948`,
    1783: `948`,
    1784: `948`,
    1785: `948`,
    1786: `948`,
    1787: `948`,
    1788: `948`,
    1789: `948`,
    179: `25`,
    1790: `948`,
    1791: `948`,
    1792: `948`,
    1793: `948`,
    1794: `948`,
    1795: `948`,
    1796: `948`,
    1797: `948`,
    1798: `948`,
    1799: `948`,
    18: `2`,
    180: `25`,
    1800: `948`,
    1801: `948`,
    1802: `948`,
    1803: `948`,
    1804: `948`,
    1805: `948`,
    1806: `948`,
    1807: `948`,
    1808: `948`,
    1809: `948`,
    181: `25`,
    1810: `948`,
    1811: `948`,
    1812: `948`,
    1813: `948`,
    1814: `948`,
    1815: `948`,
    1816: `948`,
    1817: `948`,
    1818: `948`,
    1819: `948`,
    182: `25`,
    1820: `948`,
    1821: `948`,
    1822: `948`,
    1823: `948`,
    1824: `948`,
    1825: `948`,
    1826: `948`,
    1827: `948`,
    1828: `948`,
    1829: `948`,
    183: `25`,
    1830: `948`,
    1831: `948`,
    1832: `948`,
    1833: `948`,
    1834: `948`,
    1835: `948`,
    1836: `948`,
    1837: `948`,
    1838: `948`,
    1839: `948`,
    184: `25`,
    1840: `948`,
    1841: `948`,
    1842: `948`,
    1843: `948`,
    1844: `948`,
    1845: `948`,
    1846: `948`,
    1847: `948`,
    1848: `948`,
    1849: `948`,
    185: `25`,
    1850: `948`,
    1851: `948`,
    1852: `948`,
    1853: `948`,
    1854: `948`,
    1855: `948`,
    1856: `948`,
    1857: `948`,
    1858: `948`,
    1859: `948`,
    186: `25`,
    1860: `948`,
    1861: `948`,
    1862: `948`,
    1863: `948`,
    1864: `948`,
    1865: `948`,
    1866: `948`,
    1867: `948`,
    1868: `948`,
    1869: `948`,
    187: `25`,
    1870: `948`,
    1871: `948`,
    1872: `948`,
    1873: `948`,
    1874: `948`,
    1875: `948`,
    1876: `948`,
    1877: `948`,
    1878: `948`,
    1879: `948`,
    188: `25`,
    1880: `948`,
    1881: `948`,
    1882: `948`,
    1883: `948`,
    1884: `948`,
    1885: `948`,
    1886: `948`,
    1887: `948`,
    1888: `948`,
    1889: `948`,
    189: `25`,
    1890: `948`,
    1891: `948`,
    1892: `948`,
    1893: `948`,
    1894: `948`,
    1895: `948`,
    1896: `948`,
    1897: `948`,
    1898: `948`,
    1899: `948`,
    19: `2`,
    190: `25`,
    1900: `948`,
    1901: `948`,
    1902: `948`,
    1903: `948`,
    1904: `948`,
    1905: `948`,
    1906: `948`,
    1907: `948`,
    1908: `948`,
    1909: `948`,
    191: `25`,
    1910: `948`,
    1911: `948`,
    1912: `948`,
    1913: `948`,
    1914: `948`,
    1915: `948`,
    1916: `948`,
    1917: `948`,
    1918: `948`,
    1919: `948`,
    192: `25`,
    1920: `948`,
    1921: `948`,
    1922: `948`,
    1923: `948`,
    1924: `948`,
    1925: `948`,
    1926: `948`,
    1927: `948`,
    1928: `948`,
    1929: `949`,
    193: `25`,
    1930: `949`,
    1931: `950`,
    1932: `950`,
    1933: `950`,
    1934: `953`,
    1935: `954`,
    1936: `955`,
    1937: `955`,
    1938: `955`,
    1939: `956`,
    194: `25`,
    1940: `956`,
    1941: `957`,
    1942: `958`,
    1943: `959`,
    1944: `959`,
    1945: `959`,
    1946: `960`,
    1947: `961`,
    1948: `962`,
    1949: `963`,
    195: `25`,
    1950: `963`,
    1951: `964`,
    1952: `964`,
    1953: `964`,
    1954: `967`,
    1955: `968`,
    1956: `969`,
    1957: `969`,
    1958: `969`,
    1959: `970`,
    196: `25`,
    1960: `970`,
    1961: `971`,
    1962: `972`,
    1963: `972`,
    1964: `973`,
    1965: `974`,
    1966: `975`,
    1967: `976`,
    1968: `976`,
    1969: `977`,
    197: `25`,
    1970: `977`,
    1971: `977`,
    1972: `980`,
    1973: `981`,
    1974: `982`,
    1975: `982`,
    1976: `982`,
    1977: `983`,
    1978: `983`,
    1979: `984`,
    198: `25`,
    1980: `985`,
    1981: `985`,
    1982: `986`,
    1983: `987`,
    1984: `988`,
    1985: `989`,
    1986: `989`,
    1987: `990`,
    1988: `990`,
    1989: `990`,
    199: `25`,
    1990: `993`,
    1991: `994`,
    1992: `995`,
    1993: `995`,
    1994: `995`,
    1995: `996`,
    1996: `996`,
    1997: `997`,
    1998: `998`,
    1999: `998`,
    2: `2`,
    20: `2`,
    200: `25`,
    2000: `999`,
    2001: `1000`,
    2002: `1001`,
    2003: `1002`,
    2004: `1002`,
    2005: `1003`,
    2006: `1003`,
    2007: `1003`,
    2008: `1006`,
    2009: `1007`,
    201: `25`,
    2010: `1008`,
    2011: `1008`,
    2012: `1008`,
    2013: `1009`,
    2014: `1009`,
    2015: `1010`,
    2016: `1011`,
    2017: `1011`,
    2018: `1012`,
    2019: `1013`,
    202: `25`,
    2020: `1013`,
    2021: `1014`,
    2022: `1015`,
    2023: `1016`,
    2024: `1016`,
    2025: `1017`,
    2026: `1018`,
    2027: `1019`,
    2028: `1019`,
    2029: `1020`,
    203: `25`,
    2030: `1021`,
    2031: `1022`,
    2032: `1022`,
    2033: `1023`,
    2034: `1024`,
    2035: `1025`,
    2036: `1025`,
    2037: `1026`,
    2038: `1027`,
    2039: `1028`,
    204: `25`,
    2040: `1028`,
    2041: `1029`,
    2042: `1030`,
    2043: `1031`,
    2044: `1031`,
    2045: `1032`,
    2046: `1033`,
    2047: `1033`,
    2048: `1034`,
    2049: `1035`,
    205: `25`,
    2050: `1035`,
    2051: `1036`,
    2052: `1037`,
    2053: `1038`,
    2054: `1038`,
    2055: `1039`,
    2056: `1040`,
    2057: `1041`,
    2058: `1041`,
    2059: `1042`,
    206: `25`,
    2060: `1042`,
    2061: `1042`,
    2062: `1045`,
    2063: `1046`,
    2064: `1047`,
    2065: `1047`,
    2066: `1047`,
    2067: `1048`,
    2068: `1048`,
    2069: `1049`,
    207: `25`,
    2070: `1050`,
    2071: `1050`,
    2072: `1051`,
    2073: `1052`,
    2074: `1052`,
    2075: `1053`,
    2076: `1054`,
    2077: `1055`,
    2078: `1055`,
    2079: `1056`,
    208: `25`,
    2080: `1057`,
    2081: `1057`,
    2082: `1058`,
    2083: `1059`,
    2084: `1060`,
    2085: `1060`,
    2086: `1061`,
    2087: `1062`,
    2088: `1063`,
    2089: `1063`,
    209: `25`,
    2090: `1064`,
    2091: `1065`,
    2092: `1066`,
    2093: `1066`,
    2094: `1067`,
    2095: `1068`,
    2096: `1069`,
    2097: `1069`,
    2098: `1070`,
    2099: `1071`,
    21: `2`,
    210: `25`,
    2100: `1072`,
    2101: `1072`,
    2102: `1073`,
    2103: `1074`,
    2104: `1074`,
    2105: `1075`,
    2106: `1076`,
    2107: `1076`,
    2108: `1077`,
    2109: `1078`,
    211: `25`,
    2110: `1079`,
    2111: `1080`,
    2112: `1080`,
    2113: `1081`,
    2114: `1081`,
    2115: `1081`,
    2116: `1084`,
    2117: `1085`,
    2118: `1086`,
    2119: `1086`,
    212: `25`,
    2120: `1087`,
    2121: `1087`,
    2122: `1088`,
    2123: `1089`,
    2124: `1089`,
    2125: `1090`,
    2126: `1091`,
    2127: `1091`,
    2128: `1092`,
    2129: `1093`,
    213: `25`,
    2130: `1094`,
    2131: `1094`,
    2132: `1094`,
    2133: `1095`,
    2134: `1096`,
    2135: `1097`,
    2136: `1098`,
    2137: `1098`,
    2138: `1099`,
    2139: `1099`,
    214: `25`,
    2140: `1099`,
    2141: `1102`,
    2142: `1102`,
    2143: `1103`,
    2144: `1103`,
    2145: `1104`,
    2146: `1105`,
    2147: `1108`,
    2148: `1108`,
    2149: `1108`,
    215: `25`,
    2150: `1109`,
    2151: `1109`,
    2152: `1110`,
    2153: `1110`,
    2154: `1112`,
    2155: `1112`,
    2156: `1113`,
    2157: `1114`,
    2158: `1115`,
    2159: `1117`,
    216: `25`,
    2160: `1117`,
    2161: `1117`,
    2162: `1120`,
    2163: `1120`,
    2164: `1121`,
    2165: `1121`,
    2166: `1122`,
    2167: `1123`,
    2168: `1126`,
    2169: `1126`,
    217: `25`,
    2170: `1126`,
    2171: `1127`,
    2172: `1127`,
    2173: `1128`,
    2174: `1128`,
    2175: `1128`,
    2176: `1129`,
    2177: `1129`,
    2178: `1130`,
    2179: `1130`,
    218: `25`,
    2180: `1130`,
    2181: `1133`,
    2182: `1133`,
    2183: `1133`,
    2184: `1133`,
    2185: `1133`,
    2186: `1133`,
    2187: `1133`,
    2188: `1133`,
    2189: `1133`,
    219: `25`,
    2190: `1133`,
    2191: `1133`,
    2192: `1133`,
    2193: `1133`,
    2194: `1133`,
    2195: `1133`,
    2196: `1133`,
    2197: `1133`,
    2198: `1133`,
    2199: `1133`,
    22: `2`,
    220: `25`,
    2200: `1133`,
    2201: `1133`,
    2202: `1133`,
    2203: `1133`,
    2204: `1133`,
    2205: `1133`,
    2206: `1133`,
    2207: `1133`,
    2208: `1133`,
    2209: `1133`,
    221: `25`,
    2210: `1133`,
    2211: `1133`,
    2212: `1133`,
    2213: `1133`,
    2214: `1133`,
    2215: `1133`,
    2216: `1133`,
    2217: `1133`,
    2218: `1133`,
    2219: `1133`,
    222: `25`,
    2220: `1133`,
    2221: `1133`,
    2222: `1133`,
    2223: `1133`,
    2224: `1133`,
    2225: `1133`,
    2226: `1133`,
    2227: `1133`,
    2228: `1133`,
    2229: `1133`,
    223: `25`,
    2230: `1133`,
    2231: `1133`,
    2232: `1133`,
    2233: `1133`,
    2234: `1133`,
    2235: `1133`,
    2236: `1133`,
    2237: `1133`,
    2238: `1133`,
    2239: `1133`,
    224: `25`,
    2240: `1133`,
    2241: `1133`,
    2242: `1133`,
    2243: `1133`,
    2244: `1133`,
    2245: `1133`,
    2246: `1133`,
    2247: `1133`,
    2248: `1133`,
    2249: `1133`,
    225: `25`,
    2250: `1133`,
    2251: `1133`,
    2252: `1133`,
    2253: `1133`,
    2254: `1133`,
    2255: `1133`,
    2256: `1133`,
    2257: `1133`,
    2258: `1133`,
    2259: `1133`,
    226: `25`,
    2260: `1133`,
    2261: `1133`,
    2262: `1133`,
    2263: `1133`,
    2264: `1133`,
    2265: `1133`,
    2266: `1133`,
    2267: `1133`,
    2268: `1133`,
    2269: `1133`,
    227: `25`,
    2270: `1133`,
    2271: `1133`,
    2272: `1133`,
    2273: `1133`,
    2274: `1133`,
    2275: `1133`,
    2276: `1133`,
    2277: `1133`,
    2278: `1133`,
    2279: `1133`,
    228: `25`,
    2280: `1133`,
    2281: `1133`,
    2282: `1133`,
    2283: `1133`,
    2284: `1133`,
    2285: `1133`,
    2286: `1133`,
    2287: `1133`,
    2288: `1133`,
    2289: `1133`,
    229: `25`,
    2290: `1133`,
    2291: `1133`,
    2292: `1133`,
    2293: `1133`,
    2294: `1133`,
    2295: `1133`,
    2296: `1133`,
    2297: `1133`,
    2298: `1133`,
    2299: `1133`,
    23: `2`,
    230: `25`,
    2300: `1133`,
    2301: `1133`,
    2302: `1133`,
    2303: `1133`,
    2304: `1133`,
    2305: `1133`,
    2306: `1133`,
    2307: `1133`,
    2308: `1133`,
    2309: `1133`,
    231: `25`,
    2310: `1133`,
    2311: `1133`,
    2312: `1133`,
    2313: `1133`,
    2314: `1133`,
    2315: `1133`,
    2316: `1133`,
    2317: `1133`,
    2318: `1133`,
    2319: `1133`,
    232: `25`,
    2320: `1133`,
    2321: `1133`,
    2322: `1133`,
    2323: `1133`,
    2324: `1133`,
    2325: `1133`,
    2326: `1133`,
    2327: `1133`,
    2328: `1133`,
    2329: `1133`,
    233: `25`,
    2330: `1133`,
    2331: `1133`,
    2332: `1133`,
    2333: `1133`,
    2334: `1133`,
    2335: `1133`,
    2336: `1133`,
    2337: `1133`,
    2338: `1133`,
    2339: `1133`,
    234: `25`,
    2340: `1133`,
    2341: `1133`,
    2342: `1133`,
    2343: `1133`,
    2344: `1133`,
    2345: `1133`,
    2346: `1133`,
    2347: `1133`,
    2348: `1133`,
    2349: `1133`,
    235: `25`,
    2350: `1133`,
    2351: `1133`,
    2352: `1133`,
    2353: `1133`,
    2354: `1133`,
    2355: `1133`,
    2356: `1133`,
    2357: `1133`,
    2358: `1133`,
    2359: `1133`,
    236: `25`,
    2360: `1133`,
    2361: `1133`,
    2362: `1133`,
    2363: `1133`,
    2364: `1133`,
    2365: `1133`,
    2366: `1133`,
    2367: `1133`,
    2368: `1133`,
    2369: `1133`,
    237: `25`,
    2370: `1133`,
    2371: `1133`,
    2372: `1133`,
    2373: `1133`,
    2374: `1133`,
    2375: `1133`,
    2376: `1133`,
    2377: `1133`,
    2378: `1133`,
    2379: `1133`,
    238: `25`,
    2380: `1133`,
    2381: `1133`,
    2382: `1133`,
    2383: `1133`,
    2384: `1133`,
    2385: `1133`,
    2386: `1133`,
    2387: `1133`,
    2388: `1133`,
    2389: `1133`,
    239: `25`,
    2390: `1133`,
    2391: `1133`,
    2392: `1133`,
    2393: `1133`,
    2394: `1133`,
    2395: `1133`,
    2396: `1133`,
    2397: `1133`,
    2398: `1133`,
    2399: `1133`,
    24: `2`,
    240: `25`,
    2400: `1133`,
    2401: `1133`,
    2402: `1133`,
    2403: `1133`,
    2404: `1133`,
    2405: `1133`,
    2406: `1133`,
    2407: `1133`,
    2408: `1133`,
    2409: `1134`,
    241: `25`,
    2410: `1134`,
    2411: `1135`,
    2412: `1135`,
    2413: `1135`,
    2414: `1138`,
    2415: `1138`,
    2416: `1139`,
    2417: `1139`,
    2418: `1140`,
    2419: `1141`,
    242: `25`,
    2420: `1144`,
    2421: `1144`,
    2422: `1144`,
    2423: `1145`,
    2424: `1145`,
    2425: `1146`,
    2426: `1146`,
    2427: `1146`,
    2428: `1147`,
    2429: `1147`,
    243: `25`,
    2430: `1148`,
    2431: `1148`,
    2432: `1148`,
    2433: `1149`,
    2434: `1150`,
    2435: `1150`,
    2436: `1151`,
    2437: `1151`,
    2438: `1151`,
    2439: `1152`,
    244: `25`,
    2440: `1153`,
    2441: `1153`,
    2442: `1154`,
    2443: `1154`,
    2444: `1154`,
    2445: `1155`,
    2446: `1156`,
    2447: `1156`,
    2448: `1157`,
    2449: `1157`,
    245: `25`,
    2450: `1157`,
    2451: `1160`,
    2452: `1160`,
    2453: `1161`,
    2454: `1161`,
    2455: `1162`,
    2456: `1163`,
    2457: `1166`,
    2458: `1166`,
    2459: `1166`,
    246: `25`,
    2460: `1167`,
    2461: `1167`,
    2462: `1167`,
    2463: `1167`,
    2464: `1167`,
    2465: `1167`,
    2466: `1167`,
    2467: `1167`,
    2468: `1167`,
    2469: `1167`,
    247: `25`,
    2470: `1167`,
    2471: `1167`,
    2472: `1167`,
    2473: `1167`,
    2474: `1167`,
    2475: `1167`,
    2476: `1167`,
    2477: `1167`,
    2478: `1167`,
    2479: `1167`,
    248: `25`,
    2480: `1167`,
    2481: `1167`,
    2482: `1167`,
    2483: `1167`,
    2484: `1167`,
    2485: `1167`,
    2486: `1167`,
    2487: `1167`,
    2488: `1167`,
    2489: `1167`,
    249: `25`,
    2490: `1167`,
    2491: `1167`,
    2492: `1167`,
    2493: `1167`,
    2494: `1168`,
    2495: `1168`,
    2496: `1169`,
    2497: `1170`,
    2498: `1171`,
    2499: `1172`,
    25: `2`,
    250: `25`,
    2500: `1172`,
    2501: `1172`,
    2502: `1173`,
    2503: `1173`,
    2504: `1174`,
    2505: `1174`,
    2506: `1174`,
    2507: `1177`,
    2508: `1177`,
    2509: `1177`,
    251: `25`,
    2510: `1177`,
    2511: `1177`,
    2512: `1177`,
    2513: `1177`,
    2514: `1177`,
    2515: `1177`,
    2516: `1177`,
    2517: `1177`,
    2518: `1177`,
    2519: `1177`,
    252: `25`,
    2520: `1177`,
    2521: `1177`,
    2522: `1177`,
    2523: `1177`,
    2524: `1177`,
    2525: `1177`,
    2526: `1177`,
    2527: `1177`,
    2528: `1177`,
    2529: `1177`,
    253: `25`,
    2530: `1177`,
    2531: `1177`,
    2532: `1177`,
    2533: `1177`,
    2534: `1177`,
    2535: `1177`,
    2536: `1177`,
    2537: `1177`,
    2538: `1177`,
    2539: `1177`,
    254: `26`,
    2540: `1177`,
    2541: `1177`,
    2542: `1177`,
    2543: `1177`,
    2544: `1177`,
    2545: `1177`,
    2546: `1177`,
    2547: `1177`,
    2548: `1177`,
    2549: `1177`,
    255: `26`,
    2550: `1177`,
    2551: `1177`,
    2552: `1177`,
    2553: `1177`,
    2554: `1177`,
    2555: `1177`,
    2556: `1177`,
    2557: `1177`,
    2558: `1177`,
    2559: `1177`,
    256: `26`,
    2560: `1177`,
    2561: `1177`,
    2562: `1177`,
    2563: `1177`,
    2564: `1177`,
    2565: `1177`,
    2566: `1177`,
    2567: `1177`,
    2568: `1177`,
    2569: `1177`,
    257: `27`,
    2570: `1177`,
    2571: `1177`,
    2572: `1177`,
    2573: `1177`,
    2574: `1177`,
    2575: `1177`,
    2576: `1177`,
    2577: `1177`,
    2578: `1177`,
    2579: `1177`,
    258: `27`,
    2580: `1177`,
    2581: `1177`,
    2582: `1177`,
    2583: `1177`,
    2584: `1177`,
    2585: `1177`,
    2586: `1177`,
    2587: `1177`,
    2588: `1177`,
    2589: `1177`,
    259: `27`,
    2590: `1177`,
    2591: `1177`,
    2592: `1177`,
    2593: `1177`,
    2594: `1177`,
    2595: `1177`,
    2596: `1177`,
    2597: `1177`,
    2598: `1177`,
    2599: `1177`,
    26: `2`,
    260: `27`,
    2600: `1177`,
    2601: `1177`,
    2602: `1177`,
    2603: `1177`,
    2604: `1177`,
    2605: `1177`,
    2606: `1177`,
    2607: `1177`,
    2608: `1177`,
    2609: `1177`,
    261: `27`,
    2610: `1177`,
    2611: `1177`,
    2612: `1177`,
    2613: `1177`,
    2614: `1177`,
    2615: `1177`,
    2616: `1177`,
    2617: `1177`,
    2618: `1177`,
    2619: `1177`,
    262: `27`,
    2620: `1177`,
    2621: `1177`,
    2622: `1177`,
    2623: `1177`,
    2624: `1177`,
    2625: `1177`,
    2626: `1177`,
    2627: `1177`,
    2628: `1177`,
    2629: `1177`,
    263: `27`,
    2630: `1177`,
    2631: `1177`,
    2632: `1177`,
    2633: `1177`,
    2634: `1177`,
    2635: `1177`,
    2636: `1177`,
    2637: `1177`,
    2638: `1177`,
    2639: `1177`,
    264: `27`,
    2640: `1177`,
    2641: `1177`,
    2642: `1177`,
    2643: `1177`,
    2644: `1177`,
    2645: `1177`,
    2646: `1177`,
    2647: `1177`,
    2648: `1177`,
    2649: `1177`,
    265: `27`,
    2650: `1177`,
    2651: `1177`,
    2652: `1177`,
    2653: `1177`,
    2654: `1177`,
    2655: `1177`,
    2656: `1177`,
    2657: `1177`,
    2658: `1177`,
    2659: `1177`,
    266: `27`,
    2660: `1177`,
    2661: `1177`,
    2662: `1177`,
    2663: `1177`,
    2664: `1177`,
    2665: `1177`,
    2666: `1177`,
    2667: `1177`,
    2668: `1177`,
    2669: `1177`,
    267: `27`,
    2670: `1177`,
    2671: `1177`,
    2672: `1177`,
    2673: `1177`,
    2674: `1177`,
    2675: `1177`,
    2676: `1177`,
    2677: `1177`,
    2678: `1177`,
    2679: `1177`,
    268: `27`,
    2680: `1177`,
    2681: `1177`,
    2682: `1177`,
    2683: `1177`,
    2684: `1177`,
    2685: `1177`,
    2686: `1177`,
    2687: `1177`,
    2688: `1177`,
    2689: `1177`,
    269: `27`,
    2690: `1177`,
    2691: `1177`,
    2692: `1177`,
    2693: `1177`,
    2694: `1177`,
    2695: `1177`,
    2696: `1177`,
    2697: `1177`,
    2698: `1177`,
    2699: `1177`,
    27: `2`,
    270: `27`,
    2700: `1177`,
    2701: `1177`,
    2702: `1177`,
    2703: `1177`,
    2704: `1177`,
    2705: `1177`,
    2706: `1177`,
    2707: `1177`,
    2708: `1177`,
    2709: `1177`,
    271: `27`,
    2710: `1177`,
    2711: `1177`,
    2712: `1177`,
    2713: `1177`,
    2714: `1177`,
    2715: `1177`,
    2716: `1177`,
    2717: `1177`,
    2718: `1177`,
    2719: `1177`,
    272: `27`,
    2720: `1177`,
    2721: `1177`,
    2722: `1177`,
    2723: `1177`,
    2724: `1177`,
    2725: `1177`,
    2726: `1177`,
    2727: `1177`,
    2728: `1177`,
    2729: `1177`,
    273: `27`,
    2730: `1177`,
    2731: `1177`,
    2732: `1177`,
    2733: `1177`,
    2734: `1177`,
    2735: `1178`,
    2736: `1178`,
    2737: `1179`,
    2738: `1179`,
    2739: `1179`,
    274: `27`,
    2740: `1182`,
    2741: `1182`,
    2742: `1183`,
    2743: `1183`,
    2744: `1184`,
    2745: `1185`,
    2746: `1188`,
    2747: `1188`,
    2748: `1188`,
    2749: `1189`,
    275: `27`,
    2750: `1189`,
    2751: `1190`,
    2752: `1191`,
    2753: `1191`,
    2754: `1192`,
    2755: `1193`,
    2756: `1193`,
    2757: `1194`,
    2758: `1195`,
    2759: `1195`,
    276: `27`,
    2760: `1196`,
    2761: `1197`,
    2762: `1198`,
    2763: `1199`,
    2764: `1200`,
    2765: `1201`,
    2766: `1202`,
    2767: `1203`,
    2768: `1204`,
    2769: `1205`,
    277: `27`,
    2770: `1206`,
    2771: `1207`,
    2772: `1208`,
    2773: `1209`,
    2774: `1210`,
    2775: `1211`,
    2776: `1212`,
    2777: `1213`,
    2778: `1214`,
    2779: `1215`,
    278: `27`,
    2780: `1216`,
    2781: `1216`,
    2782: `1217`,
    2783: `1218`,
    2784: `1218`,
    2785: `1219`,
    2786: `1220`,
    2787: `1220`,
    2788: `1221`,
    2789: `1223`,
    279: `27`,
    2790: `1224`,
    2791: `1224`,
    2792: `1225`,
    2793: `1226`,
    2794: `1227`,
    2795: `1227`,
    2796: `1228`,
    2797: `1229`,
    2798: `1229`,
    2799: `1229`,
    28: `2`,
    280: `27`,
    2800: `1230`,
    2801: `1230`,
    2802: `1230`,
    2803: `1231`,
    2804: `1231`,
    2805: `1232`,
    2806: `1232`,
    2807: `1232`,
    2808: `1235`,
    2809: `1235`,
    281: `27`,
    2810: `1236`,
    2811: `1236`,
    2812: `1237`,
    2813: `1238`,
    2814: `1241`,
    2815: `1241`,
    2816: `1241`,
    2817: `1242`,
    2818: `1242`,
    2819: `1243`,
    282: `27`,
    2820: `1243`,
    2821: `1244`,
    2822: `1244`,
    2823: `1244`,
    2824: `1247`,
    2825: `1247`,
    2826: `1248`,
    2827: `1248`,
    2828: `1249`,
    2829: `1249`,
    283: `27`,
    2830: `1250`,
    2831: `1251`,
    2832: `1252`,
    2833: `1252`,
    2834: `1253`,
    2835: `1253`,
    2836: `1254`,
    2837: `1254`,
    2838: `1254`,
    2839: `1255`,
    284: `27`,
    2840: `1255`,
    2841: `1256`,
    2842: `1256`,
    2843: `1256`,
    2844: `1256`,
    2845: `1256`,
    2846: `1256`,
    2847: `1257`,
    2848: `1257`,
    2849: `1258`,
    285: `27`,
    2850: `1259`,
    2851: `1260`,
    2852: `1260`,
    2853: `1261`,
    2854: `1262`,
    2855: `1264`,
    2856: `1264`,
    2857: `1265`,
    2858: `1265`,
    2859: `1265`,
    286: `27`,
    2860: `1266`,
    2861: `1267`,
    2862: `1267`,
    2863: `1268`,
    2864: `1269`,
    2865: `1269`,
    2866: `1270`,
    2867: `1271`,
    2868: `1272`,
    2869: `1272`,
    287: `27`,
    2870: `1273`,
    2871: `1273`,
    2872: `1274`,
    2873: `1275`,
    2874: `1275`,
    2875: `1276`,
    2876: `1277`,
    2877: `1277`,
    2878: `1278`,
    2879: `1279`,
    288: `27`,
    2880: `1279`,
    2881: `1280`,
    2882: `1281`,
    2883: `1282`,
    2884: `1282`,
    2885: `1283`,
    2886: `1284`,
    2887: `1285`,
    2888: `1285`,
    2889: `1286`,
    289: `27`,
    2890: `1287`,
    2891: `1287`,
    2892: `1288`,
    2893: `1288`,
    2894: `1289`,
    2895: `1291`,
    2896: `1291`,
    2897: `1292`,
    2898: `1292`,
    2899: `1292`,
    29: `2`,
    290: `27`,
    2900: `1292`,
    2901: `1292`,
    2902: `1292`,
    2903: `1293`,
    2904: `1293`,
    2905: `1294`,
    2906: `1297`,
    2907: `1297`,
    2908: `1298`,
    2909: `1299`,
    291: `27`,
    2910: `1299`,
    2911: `1300`,
    2912: `1301`,
    2913: `1301`,
    2914: `1302`,
    2915: `1303`,
    2916: `1304`,
    2917: `1305`,
    2918: `1305`,
    2919: `1305`,
    292: `27`,
    2920: `1306`,
    2921: `1306`,
    2922: `1306`,
    2923: `1307`,
    2924: `1308`,
    2925: `1308`,
    2926: `1309`,
    2927: `1309`,
    2928: `1309`,
    2929: `1309`,
    293: `27`,
    2930: `1309`,
    2931: `1309`,
    2932: `1309`,
    2933: `1309`,
    2934: `1309`,
    2935: `1309`,
    2936: `1310`,
    2937: `1310`,
    2938: `1311`,
    2939: `1312`,
    294: `27`,
    2940: `1313`,
    2941: `1313`,
    2942: `1314`,
    2943: `1315`,
    2944: `1315`,
    2945: `1316`,
    2946: `1317`,
    2947: `1318`,
    2948: `1318`,
    2949: `1319`,
    295: `27`,
    2950: `1319`,
    2951: `1320`,
    2952: `1320`,
    2953: `1320`,
    2954: `1321`,
    2955: `1321`,
    2956: `1322`,
    2957: `1323`,
    2958: `1323`,
    2959: `1324`,
    296: `27`,
    2960: `1325`,
    2961: `1328`,
    2962: `1328`,
    2963: `1328`,
    2964: `1328`,
    2965: `1328`,
    2966: `1328`,
    2967: `1328`,
    2968: `1328`,
    2969: `1328`,
    297: `29`,
    2970: `1328`,
    2971: `1328`,
    2972: `1328`,
    2973: `1328`,
    2974: `1328`,
    2975: `1328`,
    2976: `1328`,
    2977: `1328`,
    2978: `1328`,
    2979: `1328`,
    298: `32`,
    2980: `1328`,
    2981: `1328`,
    2982: `1328`,
    2983: `1328`,
    2984: `1328`,
    2985: `1328`,
    2986: `1328`,
    2987: `1328`,
    2988: `1328`,
    2989: `1328`,
    299: `32`,
    2990: `1328`,
    2991: `1328`,
    2992: `1328`,
    2993: `1328`,
    2994: `1328`,
    2995: `1328`,
    2996: `1328`,
    2997: `1328`,
    2998: `1328`,
    2999: `1328`,
    3: `2`,
    30: `2`,
    300: `33`,
    3000: `1328`,
    3001: `1328`,
    3002: `1328`,
    3003: `1328`,
    3004: `1329`,
    3005: `1329`,
    3006: `1330`,
    3007: `1331`,
    3008: `1331`,
    3009: `1332`,
    301: `33`,
    3010: `1332`,
    3011: `1333`,
    3012: `1333`,
    3013: `1334`,
    3014: `1334`,
    3015: `1335`,
    3016: `1335`,
    3017: `1336`,
    3018: `1336`,
    3019: `1336`,
    302: `33`,
    3020: `1338`,
    3021: `1338`,
    3022: `1338`,
    3023: `1339`,
    3024: `1339`,
    3025: `1339`,
    3026: `1339`,
    3027: `1340`,
    3028: `1340`,
    3029: `1340`,
    303: `34`,
    3030: `1342`,
    3031: `1343`,
    3032: `1344`,
    3033: `1344`,
    3034: `1345`,
    3035: `1346`,
    3036: `1346`,
    3037: `1348`,
    3038: `1348`,
    3039: `1348`,
    304: `34`,
    3040: `1348`,
    3041: `1348`,
    3042: `1348`,
    3043: `1348`,
    3044: `1348`,
    3045: `1349`,
    3046: `1349`,
    3047: `1350`,
    3048: `1350`,
    3049: `1351`,
    305: `35`,
    3050: `1351`,
    3051: `1352`,
    3052: `1354`,
    3053: `1354`,
    3054: `1355`,
    3055: `1355`,
    3056: `1357`,
    3057: `1357`,
    3058: `1357`,
    3059: `1358`,
    306: `36`,
    3060: `1358`,
    3061: `1359`,
    3062: `1359`,
    3063: `1359`,
    3064: `1361`,
    3065: `1361`,
    3066: `1361`,
    3067: `1363`,
    3068: `1363`,
    3069: `1363`,
    307: `41`,
    3070: `1364`,
    3071: `1364`,
    3072: `1365`,
    3073: `1365`,
    3074: `1365`,
    3075: `1368`,
    3076: `1368`,
    3077: `1368`,
    3078: `1369`,
    3079: `1369`,
    308: `42`,
    3080: `1370`,
    3081: `1370`,
    3082: `1370`,
    3083: `1373`,
    3084: `1373`,
    3085: `1373`,
    3086: `1376`,
    3087: `1376`,
    3088: `1376`,
    3089: `1377`,
    309: `42`,
    3090: `1378`,
    3091: `1378`,
    3092: `1379`,
    3093: `1379`,
    3094: `1379`,
    3095: `1382`,
    3096: `1382`,
    3097: `1382`,
    3098: `1383`,
    3099: `1383`,
    31: `2`,
    310: `43`,
    3100: `1384`,
    3101: `1384`,
    3102: `1384`,
    3103: `1387`,
    3104: `1387`,
    3105: `1387`,
    3106: `1388`,
    3107: `1388`,
    3108: `1389`,
    3109: `1389`,
    311: `43`,
    3110: `1389`,
    3111: `1392`,
    3112: `1392`,
    3113: `1392`,
    3114: `1393`,
    3115: `1393`,
    3116: `1394`,
    3117: `1394`,
    3118: `1394`,
    3119: `1397`,
    312: `43`,
    3120: `1397`,
    3121: `1397`,
    3122: `1398`,
    3123: `1399`,
    3124: `1399`,
    3125: `1399`,
    3126: `1400`,
    3127: `1400`,
    3128: `1400`,
    3129: `1401`,
    313: `43`,
    3130: `1402`,
    3131: `1402`,
    3132: `1402`,
    3133: `1403`,
    3134: `1404`,
    3135: `1404`,
    3136: `1404`,
    3137: `1405`,
    3138: `1406`,
    3139: `1406`,
    314: `43`,
    3140: `1406`,
    3141: `1407`,
    3142: `1408`,
    3143: `1408`,
    3144: `1408`,
    3145: `1409`,
    3146: `1410`,
    3147: `1410`,
    3148: `1410`,
    3149: `1411`,
    315: `43`,
    3150: `1412`,
    3151: `1412`,
    3152: `1412`,
    3153: `1413`,
    3154: `1413`,
    3155: `1413`,
    3156: `1414`,
    3157: `1414`,
    3158: `1414`,
    3159: `1415`,
    316: `43`,
    3160: `1415`,
    3161: `1416`,
    3162: `1416`,
    3163: `1417`,
    3164: `1417`,
    3165: `1418`,
    3166: `1418`,
    3167: `1419`,
    3168: `1419`,
    3169: `1420`,
    317: `43`,
    3170: `1420`,
    3171: `1421`,
    3172: `1421`,
    3173: `1422`,
    3174: `1422`,
    3175: `1423`,
    3176: `1423`,
    3177: `1424`,
    3178: `1424`,
    3179: `1425`,
    318: `43`,
    3180: `1425`,
    3181: `1426`,
    3182: `1426`,
    3183: `1426`,
    3184: `1429`,
    3185: `1429`,
    3186: `1429`,
    3187: `1430`,
    3188: `1431`,
    3189: `1431`,
    319: `43`,
    3190: `1431`,
    3191: `1432`,
    3192: `1432`,
    3193: `1432`,
    3194: `1433`,
    3195: `1434`,
    3196: `1434`,
    3197: `1434`,
    3198: `1435`,
    3199: `1435`,
    32: `2`,
    320: `44`,
    3200: `1435`,
    3201: `1436`,
    3202: `1437`,
    3203: `1437`,
    3204: `1437`,
    3205: `1438`,
    3206: `1439`,
    3207: `1439`,
    3208: `1439`,
    3209: `1440`,
    321: `44`,
    3210: `1441`,
    3211: `1441`,
    3212: `1441`,
    3213: `1442`,
    3214: `1443`,
    3215: `1443`,
    3216: `1443`,
    3217: `1444`,
    3218: `1445`,
    3219: `1445`,
    322: `45`,
    3220: `1445`,
    3221: `1446`,
    3222: `1446`,
    3223: `1446`,
    3224: `1447`,
    3225: `1447`,
    3226: `1447`,
    3227: `1448`,
    3228: `1448`,
    3229: `1449`,
    323: `46`,
    3230: `1449`,
    3231: `1450`,
    3232: `1450`,
    3233: `1451`,
    3234: `1451`,
    3235: `1452`,
    3236: `1452`,
    3237: `1453`,
    3238: `1453`,
    3239: `1454`,
    324: `47`,
    3240: `1454`,
    3241: `1455`,
    3242: `1455`,
    3243: `1456`,
    3244: `1456`,
    3245: `1457`,
    3246: `1457`,
    3247: `1458`,
    3248: `1458`,
    3249: `1459`,
    325: `47`,
    3250: `1459`,
    3251: `1460`,
    3252: `1460`,
    3253: `1460`,
    3254: `1462`,
    3255: `1463`,
    3256: `1463`,
    3257: `1464`,
    3258: `1465`,
    3259: `1466`,
    326: `48`,
    3260: `1466`,
    3261: `1467`,
    3262: `1467`,
    3263: `1468`,
    3264: `1469`,
    3265: `1470`,
    3266: `1471`,
    3267: `1471`,
    3268: `1472`,
    3269: `1473`,
    327: `48`,
    3270: `1474`,
    3271: `1475`,
    3272: `1475`,
    3273: `1476`,
    3274: `1477`,
    3275: `1478`,
    3276: `1479`,
    3277: `1479`,
    3278: `1480`,
    3279: `1480`,
    328: `49`,
    3280: `1480`,
    3281: `1481`,
    3282: `1481`,
    3283: `1482`,
    3284: `1483`,
    3285: `1484`,
    3286: `1485`,
    3287: `1485`,
    3288: `1485`,
    3289: `1488`,
    329: `49`,
    3290: `1488`,
    3291: `1488`,
    3292: `1489`,
    3293: `1490`,
    3294: `1490`,
    3295: `1490`,
    3296: `1491`,
    3297: `1491`,
    3298: `1491`,
    3299: `1492`,
    33: `2`,
    330: `50`,
    3300: `1492`,
    3301: `1493`,
    3302: `1493`,
    3303: `1494`,
    3304: `1494`,
    3305: `1495`,
    3306: `1495`,
    3307: `1495`,
    3308: `1498`,
    3309: `1498`,
    331: `50`,
    3310: `1498`,
    3311: `1500`,
    3312: `1500`,
    3313: `1500`,
    3314: `1502`,
    3315: `1502`,
    3316: `1502`,
    3317: `1504`,
    3318: `1504`,
    3319: `1505`,
    332: `50`,
    3320: `1505`,
    3321: `1505`,
    3322: `1506`,
    3323: `1506`,
    3324: `1507`,
    3325: `1507`,
    3326: `1507`,
    3327: `1509`,
    3328: `1509`,
    3329: `1510`,
    333: `51`,
    3330: `1510`,
    3331: `1510`,
    3332: `1511`,
    3333: `1511`,
    3334: `1512`,
    3335: `1512`,
    3336: `1512`,
    3337: `1514`,
    3338: `1514`,
    3339: `1515`,
    334: `51`,
    3340: `1515`,
    3341: `1515`,
    3342: `1516`,
    3343: `1516`,
    3344: `1517`,
    3345: `1517`,
    3346: `1517`,
    3347: `1519`,
    3348: `1519`,
    3349: `1519`,
    335: `52`,
    3350: `1521`,
    3351: `1521`,
    3352: `1521`,
    3353: `1523`,
    3354: `1523`,
    3355: `1524`,
    3356: `1525`,
    3357: `1526`,
    3358: `1533`,
    3359: `1533`,
    336: `52`,
    3360: `1534`,
    3361: `1534`,
    3362: `1534`,
    3363: `1537`,
    3364: `1537`,
    3365: `1538`,
    3366: `1539`,
    3367: `1540`,
    3368: `1540`,
    3369: `1541`,
    337: `52`,
    3370: `1541`,
    3371: `1542`,
    3372: `1542`,
    3373: `1542`,
    3374: `1543`,
    3375: `1543`,
    3376: `1544`,
    3377: `1544`,
    3378: `1545`,
    3379: `1545`,
    338: `53`,
    3380: `1545`,
    3381: `1546`,
    3382: `1546`,
    3383: `1547`,
    3384: `1547`,
    3385: `1548`,
    3386: `1548`,
    3387: `1549`,
    3388: `1550`,
    3389: `1550`,
    339: `54`,
    3390: `1551`,
    3391: `1551`,
    3392: `1552`,
    3393: `1552`,
    3394: `1553`,
    3395: `1554`,
    3396: `1554`,
    3397: `1555`,
    3398: `1555`,
    3399: `1556`,
    34: `2`,
    340: `54`,
    3400: `1556`,
    3401: `1557`,
    3402: `1558`,
    3403: `1558`,
    3404: `1559`,
    3405: `1559`,
    3406: `1560`,
    3407: `1561`,
    3408: `1562`,
    3409: `1562`,
    341: `55`,
    3410: `1562`,
    3411: `1562`,
    3412: `1562`,
    3413: `1562`,
    3414: `1563`,
    3415: `1563`,
    3416: `1563`,
    3417: `1565`,
    3418: `1565`,
    3419: `1566`,
    342: `55`,
    3420: `1567`,
    3421: `1568`,
    3422: `1568`,
    3423: `1569`,
    3424: `1569`,
    3425: `1569`,
    3426: `1571`,
    3427: `1572`,
    3428: `1572`,
    3429: `1573`,
    343: `55`,
    3430: `1573`,
    3431: `1573`,
    3432: `1575`,
    3433: `1575`,
    3434: `1576`,
    3435: `1577`,
    3436: `1578`,
    3437: `1583`,
    3438: `1583`,
    3439: `1584`,
    344: `56`,
    3440: `1584`,
    3441: `1585`,
    3442: `1586`,
    3443: `1586`,
    3444: `1587`,
    3445: `1588`,
    3446: `1592`,
    3447: `1592`,
    3448: `1593`,
    3449: `1594`,
    345: `57`,
    3450: `1594`,
    3451: `1595`,
    3452: `1596`,
    3453: `1596`,
    3454: `1596`,
    3455: `1597`,
    3456: `1597`,
    3457: `1598`,
    3458: `1598`,
    3459: `1599`,
    346: `57`,
    3460: `1599`,
    3461: `1600`,
    3462: `1600`,
    3463: `1601`,
    3464: `1602`,
    3465: `1603`,
    3466: `1604`,
    3467: `1604`,
    3468: `1605`,
    3469: `1606`,
    347: `58`,
    3470: `1606`,
    3471: `1607`,
    3472: `1607`,
    3473: `1608`,
    3474: `1608`,
    3475: `1609`,
    3476: `1609`,
    3477: `1609`,
    3478: `1610`,
    3479: `1611`,
    348: `58`,
    3480: `1612`,
    3481: `1612`,
    3482: `1613`,
    3483: `1614`,
    3484: `1614`,
    3485: `1615`,
    3486: `1615`,
    3487: `1616`,
    3488: `1616`,
    3489: `1617`,
    349: `58`,
    3490: `1618`,
    3491: `1618`,
    3492: `1619`,
    3493: `1620`,
    3494: `1621`,
    3495: `1622`,
    3496: `1622`,
    3497: `1623`,
    3498: `1623`,
    3499: `1624`,
    35: `2`,
    350: `59`,
    3500: `1624`,
    3501: `1625`,
    3502: `1626`,
    3503: `1626`,
    3504: `1627`,
    3505: `1628`,
    3506: `1628`,
    3507: `1629`,
    3508: `1629`,
    3509: `1630`,
    351: `60`,
    3510: `1630`,
    3511: `1631`,
    3512: `1632`,
    3513: `1632`,
    3514: `1633`,
    3515: `1634`,
    3516: `1634`,
    3517: `1635`,
    3518: `1635`,
    3519: `1636`,
    352: `60`,
    3520: `1636`,
    3521: `1637`,
    3522: `1638`,
    3523: `1638`,
    3524: `1639`,
    3525: `1640`,
    3526: `1640`,
    3527: `1641`,
    3528: `1641`,
    3529: `1642`,
    353: `61`,
    3530: `1642`,
    3531: `1643`,
    3532: `1643`,
    3533: `1644`,
    3534: `1644`,
    3535: `1645`,
    3536: `1646`,
    3537: `1646`,
    3538: `1647`,
    3539: `1648`,
    354: `61`,
    3540: `1649`,
    3541: `1650`,
    3542: `1650`,
    3543: `1651`,
    3544: `1651`,
    3545: `1653`,
    3546: `1653`,
    3547: `1654`,
    3548: `1654`,
    3549: `1654`,
    355: `62`,
    3550: `1655`,
    3551: `1655`,
    3552: `1657`,
    3553: `1657`,
    3554: `1658`,
    3555: `1658`,
    3556: `1658`,
    3557: `1659`,
    3558: `1659`,
    3559: `1659`,
    356: `62`,
    3560: `1660`,
    3561: `1660`,
    3562: `1662`,
    3563: `1662`,
    3564: `1663`,
    3565: `1663`,
    3566: `1663`,
    3567: `1664`,
    3568: `1664`,
    3569: `1664`,
    357: `66`,
    3570: `1665`,
    3571: `1665`,
    3572: `1667`,
    3573: `1667`,
    3574: `1668`,
    3575: `1668`,
    3576: `1668`,
    3577: `1669`,
    3578: `1669`,
    3579: `1669`,
    358: `66`,
    3580: `1670`,
    3581: `1670`,
    3582: `1672`,
    3583: `1672`,
    3584: `1673`,
    3585: `1673`,
    3586: `1673`,
    3587: `1674`,
    3588: `1674`,
    3589: `1674`,
    359: `67`,
    3590: `1675`,
    3591: `1675`,
    3592: `1676`,
    3593: `1676`,
    3594: `1677`,
    3595: `1678`,
    3596: `1678`,
    3597: `1679`,
    3598: `1680`,
    3599: `1682`,
    36: `2`,
    360: `67`,
    3600: `1683`,
    3601: `1683`,
    3602: `1684`,
    3603: `1685`,
    3604: `1686`,
    3605: `1687`,
    3606: `1687`,
    3607: `1688`,
    3608: `1688`,
    3609: `1689`,
    361: `68`,
    3610: `1690`,
    3611: `1690`,
    3612: `1691`,
    3613: `1692`,
    3614: `1692`,
    3615: `1693`,
    3616: `1694`,
    3617: `1694`,
    3618: `1695`,
    3619: `1696`,
    362: `69`,
    3620: `1697`,
    3621: `1697`,
    3622: `1698`,
    3623: `1699`,
    3624: `1700`,
    3625: `1700`,
    3626: `1701`,
    3627: `1702`,
    3628: `1702`,
    3629: `1703`,
    363: `69`,
    3630: `1703`,
    3631: `1705`,
    3632: `1705`,
    3633: `1706`,
    3634: `1706`,
    3635: `1707`,
    3636: `1707`,
    3637: `1708`,
    3638: `1708`,
    3639: `1709`,
    364: `70`,
    3640: `1710`,
    3641: `1710`,
    3642: `1711`,
    3643: `1711`,
    3644: `1712`,
    3645: `1712`,
    3646: `1713`,
    3647: `1714`,
    3648: `1714`,
    3649: `1715`,
    365: `71`,
    3650: `1715`,
    3651: `1716`,
    3652: `1716`,
    3653: `1717`,
    3654: `1717`,
    3655: `1722`,
    3656: `1722`,
    3657: `1723`,
    3658: `1723`,
    3659: `1724`,
    366: `71`,
    3660: `1729`,
    3661: `1729`,
    3662: `1730`,
    3663: `1731`,
    3664: `1731`,
    3665: `1732`,
    3666: `1733`,
    3667: `1733`,
    3668: `1734`,
    3669: `1735`,
    367: `72`,
    3670: `1736`,
    3671: `1737`,
    3672: `1737`,
    3673: `1737`,
    3674: `1738`,
    3675: `1738`,
    3676: `1738`,
    3677: `1739`,
    3678: `1740`,
    3679: `1740`,
    368: `73`,
    3680: `1741`,
    3681: `1741`,
    3682: `1741`,
    3683: `1741`,
    3684: `1741`,
    3685: `1741`,
    3686: `1741`,
    3687: `1741`,
    3688: `1741`,
    3689: `1741`,
    369: `73`,
    3690: `1742`,
    3691: `1742`,
    3692: `1743`,
    3693: `1744`,
    3694: `1745`,
    3695: `1745`,
    3696: `1746`,
    3697: `1747`,
    3698: `1747`,
    3699: `1748`,
    37: `2`,
    370: `74`,
    3700: `1749`,
    3701: `1750`,
    3702: `1750`,
    3703: `1751`,
    3704: `1752`,
    3705: `1752`,
    3706: `1753`,
    3707: `1754`,
    3708: `1759`,
    3709: `1760`,
    371: `75`,
    3710: `1760`,
    3711: `1761`,
    3712: `1761`,
    3713: `1761`,
    3714: `1761`,
    3715: `1761`,
    3716: `1761`,
    3717: `1761`,
    3718: `1761`,
    3719: `1761`,
    372: `76`,
    3720: `1761`,
    3721: `1762`,
    3722: `1762`,
    3723: `1763`,
    3724: `1764`,
    3725: `1765`,
    3726: `1765`,
    3727: `1766`,
    3728: `1766`,
    3729: `1767`,
    373: `76`,
    3730: `1767`,
    3731: `1768`,
    3732: `1768`,
    3733: `1769`,
    3734: `1769`,
    3735: `1770`,
    3736: `1771`,
    3737: `1771`,
    3738: `1772`,
    3739: `1773`,
    374: `77`,
    3740: `1773`,
    3741: `1774`,
    3742: `1775`,
    3743: `1775`,
    3744: `1776`,
    3745: `1777`,
    3746: `1777`,
    3747: `1778`,
    3748: `1779`,
    3749: `1779`,
    375: `77`,
    3750: `1780`,
    3751: `1781`,
    3752: `1781`,
    3753: `1782`,
    3754: `1783`,
    3755: `1783`,
    3756: `1784`,
    3757: `1784`,
    3758: `1785`,
    3759: `1785`,
    376: `79`,
    3760: `1785`,
    3761: `1787`,
    3762: `1787`,
    3763: `1788`,
    3764: `1789`,
    3765: `1790`,
    3766: `1790`,
    3767: `1791`,
    3768: `1791`,
    3769: `1791`,
    377: `79`,
    3770: `1793`,
    3771: `1794`,
    3772: `1794`,
    3773: `1795`,
    3774: `1795`,
    3775: `1795`,
    3776: `1797`,
    3777: `1797`,
    3778: `1798`,
    3779: `1798`,
    378: `80`,
    3780: `1798`,
    3781: `1799`,
    3782: `1799`,
    3783: `1800`,
    3784: `1801`,
    3785: `1808`,
    3786: `1808`,
    3787: `1809`,
    3788: `1810`,
    3789: `1811`,
    379: `80`,
    3790: `1811`,
    3791: `1812`,
    3792: `1812`,
    3793: `1813`,
    3794: `1813`,
    3795: `1813`,
    3796: `1814`,
    3797: `1814`,
    3798: `1815`,
    3799: `1815`,
    38: `2`,
    380: `81`,
    3800: `1816`,
    3801: `1816`,
    3802: `1816`,
    3803: `1817`,
    3804: `1817`,
    3805: `1818`,
    3806: `1818`,
    3807: `1819`,
    3808: `1819`,
    3809: `1820`,
    381: `82`,
    3810: `1821`,
    3811: `1821`,
    3812: `1822`,
    3813: `1822`,
    3814: `1823`,
    3815: `1823`,
    3816: `1824`,
    3817: `1825`,
    3818: `1825`,
    3819: `1826`,
    382: `82`,
    3820: `1826`,
    3821: `1827`,
    3822: `1827`,
    3823: `1828`,
    3824: `1829`,
    3825: `1829`,
    3826: `1830`,
    3827: `1830`,
    3828: `1831`,
    3829: `1831`,
    383: `83`,
    3830: `1831`,
    3831: `1832`,
    3832: `1832`,
    3833: `1833`,
    3834: `1833`,
    3835: `1834`,
    3836: `1834`,
    3837: `1834`,
    3838: `1835`,
    3839: `1835`,
    384: `83`,
    3840: `1836`,
    3841: `1836`,
    3842: `1837`,
    3843: `1837`,
    3844: `1837`,
    3845: `1838`,
    3846: `1838`,
    3847: `1839`,
    3848: `1839`,
    3849: `1840`,
    385: `83`,
    3850: `1841`,
    3851: `1842`,
    3852: `1842`,
    3853: `1842`,
    3854: `1842`,
    3855: `1842`,
    3856: `1842`,
    3857: `1843`,
    3858: `1843`,
    3859: `1843`,
    386: `84`,
    3860: `1845`,
    3861: `1845`,
    3862: `1846`,
    3863: `1847`,
    3864: `1847`,
    3865: `1848`,
    3866: `1849`,
    3867: `1849`,
    3868: `1850`,
    3869: `1850`,
    387: `85`,
    3870: `1850`,
    3871: `1852`,
    3872: `1852`,
    3873: `1853`,
    3874: `1853`,
    3875: `1853`,
    3876: `1854`,
    3877: `1855`,
    3878: `1855`,
    3879: `1856`,
    388: `86`,
    3880: `1856`,
    3881: `1856`,
    3882: `1857`,
    3883: `1857`,
    3884: `1858`,
    3885: `1858`,
    3886: `1858`,
    3887: `1859`,
    3888: `1860`,
    3889: `1860`,
    389: `87`,
    3890: `1861`,
    3891: `1861`,
    3892: `1861`,
    3893: `1863`,
    3894: `1863`,
    3895: `1864`,
    3896: `1865`,
    3897: `1866`,
    3898: `1866`,
    3899: `1867`,
    39: `2`,
    390: `87`,
    3900: `1867`,
    3901: `1868`,
    3902: `1868`,
    3903: `1868`,
    3904: `1869`,
    3905: `1870`,
    3906: `1870`,
    3907: `1871`,
    3908: `1871`,
    3909: `1872`,
    391: `87`,
    3910: `1873`,
    3911: `1878`,
    3912: `1878`,
    3913: `1879`,
    3914: `1879`,
    3915: `1880`,
    3916: `1881`,
    3917: `1881`,
    3918: `1882`,
    3919: `1883`,
    392: `88`,
    3920: `1887`,
    3921: `1887`,
    3922: `1888`,
    3923: `1888`,
    3924: `1889`,
    3925: `1890`,
    3926: `1890`,
    3927: `1891`,
    3928: `1891`,
    3929: `1892`,
    393: `89`,
    3930: `1892`,
    3931: `1893`,
    3932: `1894`,
    3933: `1895`,
    3934: `1896`,
    3935: `1897`,
    3936: `1898`,
    3937: `1898`,
    3938: `1898`,
    3939: `1899`,
    394: `90`,
    3940: `1899`,
    3941: `1900`,
    3942: `1901`,
    3943: `1901`,
    3944: `1901`,
    3945: `1902`,
    3946: `1902`,
    3947: `1903`,
    3948: `1903`,
    3949: `1904`,
    395: `90`,
    3950: `1904`,
    3951: `1905`,
    3952: `1906`,
    3953: `1906`,
    3954: `1907`,
    3955: `1907`,
    3956: `1907`,
    3957: `1908`,
    3958: `1909`,
    3959: `1910`,
    396: `91`,
    3960: `1910`,
    3961: `1910`,
    3962: `1911`,
    3963: `1911`,
    3964: `1912`,
    3965: `1913`,
    3966: `1913`,
    3967: `1913`,
    3968: `1914`,
    3969: `1914`,
    397: `92`,
    3970: `1915`,
    3971: `1915`,
    3972: `1916`,
    3973: `1917`,
    3974: `1917`,
    3975: `1918`,
    3976: `1918`,
    3977: `1919`,
    3978: `1920`,
    3979: `1920`,
    398: `92`,
    3980: `1921`,
    3981: `1922`,
    3982: `1923`,
    3983: `1924`,
    3984: `1925`,
    3985: `1926`,
    3986: `1926`,
    3987: `1927`,
    3988: `1927`,
    3989: `1928`,
    399: `93`,
    3990: `1928`,
    3991: `1929`,
    3992: `1930`,
    3993: `1930`,
    3994: `1931`,
    3995: `1932`,
    3996: `1933`,
    3997: `1934`,
    3998: `1934`,
    3999: `1934`,
    4: `2`,
    40: `2`,
    400: `94`,
    4000: `1935`,
    4001: `1935`,
    4002: `1936`,
    4003: `1937`,
    4004: `1937`,
    4005: `1937`,
    4006: `1938`,
    4007: `1938`,
    4008: `1939`,
    4009: `1939`,
    401: `95`,
    4010: `1940`,
    4011: `1940`,
    4012: `1941`,
    4013: `1942`,
    4014: `1942`,
    4015: `1943`,
    4016: `1944`,
    4017: `1945`,
    4018: `1946`,
    4019: `1946`,
    402: `95`,
    4020: `1946`,
    4021: `1947`,
    4022: `1947`,
    4023: `1948`,
    4024: `1949`,
    4025: `1949`,
    4026: `1949`,
    4027: `1950`,
    4028: `1950`,
    4029: `1951`,
    403: `96`,
    4030: `1951`,
    4031: `1952`,
    4032: `1952`,
    4033: `1953`,
    4034: `1954`,
    4035: `1954`,
    4036: `1955`,
    4037: `1956`,
    4038: `1957`,
    4039: `1958`,
    404: `97`,
    4040: `1958`,
    4041: `1958`,
    4042: `1959`,
    4043: `1959`,
    4044: `1960`,
    4045: `1961`,
    4046: `1961`,
    4047: `1961`,
    4048: `1962`,
    4049: `1962`,
    405: `98`,
    4050: `1963`,
    4051: `1963`,
    4052: `1964`,
    4053: `1964`,
    4054: `1965`,
    4055: `1965`,
    4056: `1966`,
    4057: `1967`,
    4058: `1968`,
    4059: `1969`,
    406: `99`,
    4060: `1970`,
    4061: `1970`,
    4062: `1971`,
    4063: `1972`,
    4064: `1972`,
    4065: `1973`,
    4066: `1974`,
    4067: `1974`,
    4068: `1975`,
    4069: `1976`,
    407: `99`,
    4070: `1977`,
    4071: `1978`,
    4072: `1978`,
    4073: `1979`,
    4074: `1979`,
    4075: `1980`,
    4076: `1981`,
    4077: `1981`,
    4078: `1982`,
    4079: `1983`,
    408: `100`,
    4080: `1983`,
    4081: `1984`,
    4082: `1985`,
    4083: `1985`,
    4084: `1986`,
    4085: `1987`,
    4086: `1988`,
    4087: `1988`,
    4088: `1989`,
    4089: `1990`,
    409: `101`,
    4090: `1991`,
    4091: `1991`,
    4092: `1992`,
    4093: `1993`,
    4094: `1993`,
    4095: `1994`,
    4096: `1994`,
    4097: `1996`,
    4098: `1996`,
    4099: `1997`,
    41: `2`,
    410: `102`,
    4100: `1997`,
    4101: `1997`,
    4102: `1997`,
    4103: `1997`,
    4104: `1997`,
    4105: `1998`,
    4106: `1998`,
    4107: `1999`,
    4108: `1999`,
    4109: `2000`,
    411: `104`,
    4110: `2001`,
    4111: `2001`,
    4112: `2002`,
    4113: `2002`,
    4114: `2003`,
    4115: `2003`,
    4116: `2005`,
    4117: `2006`,
    4118: `2006`,
    4119: `2007`,
    412: `104`,
    4120: `2007`,
    4121: `2008`,
    4122: `2008`,
    4123: `2009`,
    4124: `2009`,
    4125: `2013`,
    4126: `2013`,
    4127: `2014`,
    4128: `2014`,
    4129: `2015`,
    413: `104`,
    4130: `2020`,
    4131: `2020`,
    4132: `2021`,
    4133: `2022`,
    4134: `2022`,
    4135: `2023`,
    4136: `2024`,
    4137: `2024`,
    4138: `2025`,
    4139: `2026`,
    414: `106`,
    4140: `2027`,
    4141: `2028`,
    4142: `2028`,
    4143: `2028`,
    4144: `2029`,
    4145: `2029`,
    4146: `2029`,
    4147: `2030`,
    4148: `2031`,
    4149: `2031`,
    415: `106`,
    4150: `2032`,
    4151: `2032`,
    4152: `2032`,
    4153: `2032`,
    4154: `2032`,
    4155: `2032`,
    4156: `2032`,
    4157: `2032`,
    4158: `2032`,
    4159: `2032`,
    416: `107`,
    4160: `2033`,
    4161: `2033`,
    4162: `2034`,
    4163: `2035`,
    4164: `2036`,
    4165: `2036`,
    4166: `2037`,
    4167: `2038`,
    4168: `2038`,
    4169: `2039`,
    417: `107`,
    4170: `2040`,
    4171: `2041`,
    4172: `2041`,
    4173: `2042`,
    4174: `2043`,
    4175: `2043`,
    4176: `2044`,
    4177: `2045`,
    4178: `2050`,
    4179: `2050`,
    418: `107`,
    4180: `2051`,
    4181: `2051`,
    4182: `2052`,
    4183: `2053`,
    4184: `2053`,
    4185: `2054`,
    4186: `2055`,
    4187: `2056`,
    4188: `2057`,
    4189: `2057`,
    419: `109`,
    4190: `2058`,
    4191: `2058`,
    4192: `2059`,
    4193: `2060`,
    4194: `2060`,
    4195: `2061`,
    4196: `2062`,
    4197: `2062`,
    4198: `2063`,
    4199: `2064`,
    42: `2`,
    420: `109`,
    4200: `2064`,
    4201: `2065`,
    4202: `2066`,
    4203: `2067`,
    4204: `2067`,
    4205: `2068`,
    4206: `2069`,
    4207: `2070`,
    4208: `2070`,
    4209: `2071`,
    421: `109`,
    4210: `2072`,
    4211: `2072`,
    4212: `2073`,
    4213: `2073`,
    4214: `2074`,
    4215: `2074`,
    4216: `2075`,
    4217: `2075`,
    4218: `2076`,
    4219: `2076`,
    422: `109`,
    4220: `2077`,
    4221: `2077`,
    4222: `2079`,
    4223: `2080`,
    4224: `2080`,
    4225: `2081`,
    4226: `2081`,
    4227: `2082`,
    4228: `2082`,
    4229: `2083`,
    423: `109`,
    4230: `2083`,
    4231: `2085`,
    4232: `2085`,
    4233: `2086`,
    4234: `2086`,
    4235: `2087`,
    4236: `2092`,
    4237: `2092`,
    4238: `2093`,
    4239: `2094`,
    424: `109`,
    4240: `2094`,
    4241: `2095`,
    4242: `2096`,
    4243: `2096`,
    4244: `2097`,
    4245: `2098`,
    4246: `2099`,
    4247: `2100`,
    4248: `2100`,
    4249: `2100`,
    425: `110`,
    4250: `2101`,
    4251: `2101`,
    4252: `2101`,
    4253: `2102`,
    4254: `2103`,
    4255: `2103`,
    4256: `2104`,
    4257: `2104`,
    4258: `2104`,
    4259: `2104`,
    426: `110`,
    4260: `2104`,
    4261: `2104`,
    4262: `2104`,
    4263: `2104`,
    4264: `2104`,
    4265: `2104`,
    4266: `2105`,
    4267: `2105`,
    4268: `2106`,
    4269: `2107`,
    427: `111`,
    4270: `2108`,
    4271: `2108`,
    4272: `2109`,
    4273: `2110`,
    4274: `2110`,
    4275: `2111`,
    4276: `2112`,
    4277: `2113`,
    4278: `2113`,
    4279: `2114`,
    428: `112`,
    4280: `2115`,
    4281: `2115`,
    4282: `2116`,
    4283: `2117`,
    4284: `2122`,
    4285: `2123`,
    4286: `2123`,
    4287: `2124`,
    4288: `2125`,
    4289: `2126`,
    429: `114`,
    4290: `2127`,
    4291: `2127`,
    4292: `2128`,
    4293: `2128`,
    4294: `2129`,
    4295: `2130`,
    4296: `2130`,
    4297: `2131`,
    4298: `2132`,
    4299: `2132`,
    43: `2`,
    430: `115`,
    4300: `2133`,
    4301: `2134`,
    4302: `2134`,
    4303: `2135`,
    4304: `2136`,
    4305: `2137`,
    4306: `2137`,
    4307: `2138`,
    4308: `2139`,
    4309: `2140`,
    431: `118`,
    4310: `2140`,
    4311: `2141`,
    4312: `2142`,
    4313: `2142`,
    4314: `2143`,
    4315: `2143`,
    4316: `2144`,
    4317: `2144`,
    4318: `2145`,
    4319: `2145`,
    432: `118`,
    4320: `2146`,
    4321: `2146`,
    4322: `2147`,
    4323: `2147`,
    4324: `2149`,
    4325: `2150`,
    4326: `2150`,
    4327: `2151`,
    4328: `2151`,
    4329: `2152`,
    433: `119`,
    4330: `2152`,
    4331: `2153`,
    4332: `2153`,
    4333: `2155`,
    4334: `2155`,
    4335: `2156`,
    4336: `2156`,
    4337: `2157`,
    4338: `2162`,
    4339: `2162`,
    434: `119`,
    4340: `2163`,
    4341: `2164`,
    4342: `2164`,
    4343: `2165`,
    4344: `2166`,
    4345: `2166`,
    4346: `2167`,
    4347: `2168`,
    4348: `2169`,
    4349: `2170`,
    435: `119`,
    4350: `2170`,
    4351: `2170`,
    4352: `2171`,
    4353: `2171`,
    4354: `2171`,
    4355: `2172`,
    4356: `2173`,
    4357: `2173`,
    4358: `2174`,
    4359: `2174`,
    436: `120`,
    4360: `2174`,
    4361: `2174`,
    4362: `2174`,
    4363: `2174`,
    4364: `2174`,
    4365: `2174`,
    4366: `2174`,
    4367: `2174`,
    4368: `2175`,
    4369: `2175`,
    437: `121`,
    4370: `2176`,
    4371: `2177`,
    4372: `2178`,
    4373: `2178`,
    4374: `2179`,
    4375: `2180`,
    4376: `2180`,
    4377: `2181`,
    4378: `2182`,
    4379: `2183`,
    438: `121`,
    4380: `2183`,
    4381: `2184`,
    4382: `2185`,
    4383: `2185`,
    4384: `2186`,
    4385: `2187`,
    4386: `2192`,
    4387: `2193`,
    4388: `2193`,
    4389: `2194`,
    439: `122`,
    4390: `2195`,
    4391: `2196`,
    4392: `2197`,
    4393: `2197`,
    4394: `2198`,
    4395: `2198`,
    4396: `2199`,
    4397: `2200`,
    4398: `2200`,
    4399: `2201`,
    44: `2`,
    440: `122`,
    4400: `2202`,
    4401: `2202`,
    4402: `2203`,
    4403: `2204`,
    4404: `2204`,
    4405: `2205`,
    4406: `2206`,
    4407: `2207`,
    4408: `2207`,
    4409: `2208`,
    441: `123`,
    4410: `2209`,
    4411: `2210`,
    4412: `2210`,
    4413: `2211`,
    4414: `2212`,
    4415: `2212`,
    4416: `2213`,
    4417: `2213`,
    4418: `2214`,
    4419: `2214`,
    442: `124`,
    4420: `2215`,
    4421: `2215`,
    4422: `2216`,
    4423: `2216`,
    4424: `2217`,
    4425: `2217`,
    4426: `2219`,
    4427: `2220`,
    4428: `2220`,
    4429: `2221`,
    443: `129`,
    4430: `2221`,
    4431: `2222`,
    4432: `2222`,
    4433: `2223`,
    4434: `2223`,
    4435: `2225`,
    4436: `2225`,
    4437: `2226`,
    4438: `2226`,
    4439: `2227`,
    444: `130`,
    4440: `2232`,
    4441: `2232`,
    4442: `2233`,
    4443: `2234`,
    4444: `2234`,
    4445: `2235`,
    4446: `2236`,
    4447: `2236`,
    4448: `2237`,
    4449: `2238`,
    445: `130`,
    4450: `2239`,
    4451: `2240`,
    4452: `2240`,
    4453: `2240`,
    4454: `2241`,
    4455: `2241`,
    4456: `2241`,
    4457: `2242`,
    4458: `2243`,
    4459: `2243`,
    446: `131`,
    4460: `2244`,
    4461: `2244`,
    4462: `2244`,
    4463: `2244`,
    4464: `2244`,
    4465: `2244`,
    4466: `2244`,
    4467: `2244`,
    4468: `2244`,
    4469: `2244`,
    447: `131`,
    4470: `2245`,
    4471: `2245`,
    4472: `2246`,
    4473: `2247`,
    4474: `2248`,
    4475: `2248`,
    4476: `2249`,
    4477: `2250`,
    4478: `2250`,
    4479: `2251`,
    448: `131`,
    4480: `2252`,
    4481: `2253`,
    4482: `2253`,
    4483: `2254`,
    4484: `2255`,
    4485: `2255`,
    4486: `2256`,
    4487: `2257`,
    4488: `2262`,
    4489: `2263`,
    449: `131`,
    4490: `2263`,
    4491: `2264`,
    4492: `2265`,
    4493: `2266`,
    4494: `2267`,
    4495: `2267`,
    4496: `2268`,
    4497: `2268`,
    4498: `2269`,
    4499: `2270`,
    45: `2`,
    450: `131`,
    4500: `2270`,
    4501: `2271`,
    4502: `2272`,
    4503: `2272`,
    4504: `2273`,
    4505: `2274`,
    4506: `2274`,
    4507: `2275`,
    4508: `2276`,
    4509: `2277`,
    451: `131`,
    4510: `2277`,
    4511: `2278`,
    4512: `2279`,
    4513: `2280`,
    4514: `2280`,
    4515: `2281`,
    4516: `2282`,
    4517: `2282`,
    4518: `2283`,
    4519: `2283`,
    452: `131`,
    4520: `2284`,
    4521: `2284`,
    4522: `2285`,
    4523: `2285`,
    4524: `2286`,
    4525: `2286`,
    4526: `2287`,
    4527: `2287`,
    4528: `2289`,
    4529: `2290`,
    453: `131`,
    4530: `2290`,
    4531: `2291`,
    4532: `2291`,
    4533: `2292`,
    4534: `2292`,
    4535: `2293`,
    4536: `2293`,
    4537: `2295`,
    4538: `2295`,
    4539: `2296`,
    454: `131`,
    4540: `2296`,
    4541: `2297`,
    4542: `2302`,
    4543: `2302`,
    4544: `2303`,
    4545: `2304`,
    4546: `2304`,
    4547: `2305`,
    4548: `2306`,
    4549: `2306`,
    455: `131`,
    4550: `2307`,
    4551: `2308`,
    4552: `2309`,
    4553: `2310`,
    4554: `2310`,
    4555: `2310`,
    4556: `2311`,
    4557: `2311`,
    4558: `2311`,
    4559: `2312`,
    456: `132`,
    4560: `2313`,
    4561: `2313`,
    4562: `2314`,
    4563: `2314`,
    4564: `2314`,
    4565: `2314`,
    4566: `2314`,
    4567: `2314`,
    4568: `2314`,
    4569: `2314`,
    457: `132`,
    4570: `2314`,
    4571: `2314`,
    4572: `2315`,
    4573: `2315`,
    4574: `2316`,
    4575: `2317`,
    4576: `2318`,
    4577: `2318`,
    4578: `2319`,
    4579: `2320`,
    458: `133`,
    4580: `2320`,
    4581: `2321`,
    4582: `2322`,
    4583: `2323`,
    4584: `2323`,
    4585: `2324`,
    4586: `2325`,
    4587: `2325`,
    4588: `2326`,
    4589: `2327`,
    459: `134`,
    4590: `2332`,
    4591: `2332`,
    4592: `2333`,
    4593: `2333`,
    4594: `2333`,
    4595: `2334`,
    4596: `2334`,
    4597: `2335`,
    4598: `2336`,
    4599: `2336`,
    46: `2`,
    460: `135`,
    4600: `2337`,
    4601: `2338`,
    4602: `2339`,
    4603: `2340`,
    4604: `2340`,
    4605: `2341`,
    4606: `2341`,
    4607: `2342`,
    4608: `2343`,
    4609: `2343`,
    461: `135`,
    4610: `2344`,
    4611: `2345`,
    4612: `2345`,
    4613: `2346`,
    4614: `2347`,
    4615: `2347`,
    4616: `2348`,
    4617: `2349`,
    4618: `2350`,
    4619: `2350`,
    462: `136`,
    4620: `2351`,
    4621: `2352`,
    4622: `2353`,
    4623: `2353`,
    4624: `2354`,
    4625: `2355`,
    4626: `2355`,
    4627: `2356`,
    4628: `2356`,
    4629: `2357`,
    463: `136`,
    4630: `2357`,
    4631: `2358`,
    4632: `2358`,
    4633: `2359`,
    4634: `2359`,
    4635: `2360`,
    4636: `2360`,
    4637: `2362`,
    4638: `2363`,
    4639: `2363`,
    464: `137`,
    4640: `2364`,
    4641: `2364`,
    4642: `2365`,
    4643: `2365`,
    4644: `2366`,
    4645: `2366`,
    4646: `2367`,
    4647: `2367`,
    4648: `2368`,
    4649: `2368`,
    465: `137`,
    4650: `2369`,
    4651: `2370`,
    4652: `2370`,
    4653: `2370`,
    4654: `2371`,
    4655: `2371`,
    4656: `2372`,
    4657: `2373`,
    4658: `2373`,
    4659: `2373`,
    466: `138`,
    4660: `2374`,
    4661: `2375`,
    4662: `2375`,
    4663: `2375`,
    4664: `2376`,
    4665: `2377`,
    4666: `2377`,
    4667: `2377`,
    4668: `2378`,
    4669: `2378`,
    467: `138`,
    4670: `2380`,
    4671: `2380`,
    4672: `2381`,
    4673: `2381`,
    4674: `2382`,
    4675: `2387`,
    4676: `2387`,
    4677: `2388`,
    4678: `2389`,
    4679: `2389`,
    468: `138`,
    4680: `2390`,
    4681: `2391`,
    4682: `2391`,
    4683: `2392`,
    4684: `2393`,
    4685: `2394`,
    4686: `2395`,
    4687: `2395`,
    4688: `2395`,
    4689: `2396`,
    469: `139`,
    4690: `2396`,
    4691: `2396`,
    4692: `2397`,
    4693: `2398`,
    4694: `2398`,
    4695: `2399`,
    4696: `2399`,
    4697: `2399`,
    4698: `2399`,
    4699: `2399`,
    47: `2`,
    470: `139`,
    4700: `2399`,
    4701: `2399`,
    4702: `2399`,
    4703: `2399`,
    4704: `2399`,
    4705: `2400`,
    4706: `2400`,
    4707: `2401`,
    4708: `2402`,
    4709: `2403`,
    471: `140`,
    4710: `2403`,
    4711: `2404`,
    4712: `2405`,
    4713: `2405`,
    4714: `2406`,
    4715: `2407`,
    4716: `2408`,
    4717: `2408`,
    4718: `2409`,
    4719: `2410`,
    472: `140`,
    4720: `2410`,
    4721: `2411`,
    4722: `2412`,
    4723: `2417`,
    4724: `2417`,
    4725: `2418`,
    4726: `2418`,
    4727: `2419`,
    4728: `2420`,
    4729: `2420`,
    473: `140`,
    4730: `2421`,
    4731: `2422`,
    4732: `2424`,
    4733: `2424`,
    4734: `2425`,
    4735: `2426`,
    4736: `2426`,
    4737: `2427`,
    4738: `2428`,
    4739: `2428`,
    474: `141`,
    4740: `2428`,
    4741: `2429`,
    4742: `2430`,
    4743: `2430`,
    4744: `2431`,
    4745: `2432`,
    4746: `2433`,
    4747: `2434`,
    4748: `2434`,
    4749: `2435`,
    475: `142`,
    4750: `2435`,
    4751: `2436`,
    4752: `2437`,
    4753: `2437`,
    4754: `2438`,
    4755: `2439`,
    4756: `2439`,
    4757: `2440`,
    4758: `2441`,
    4759: `2441`,
    476: `143`,
    4760: `2442`,
    4761: `2443`,
    4762: `2444`,
    4763: `2444`,
    4764: `2445`,
    4765: `2446`,
    4766: `2447`,
    4767: `2447`,
    4768: `2448`,
    4769: `2449`,
    477: `144`,
    4770: `2449`,
    4771: `2450`,
    4772: `2450`,
    4773: `2452`,
    4774: `2452`,
    4775: `2453`,
    4776: `2453`,
    4777: `2454`,
    4778: `2454`,
    4779: `2455`,
    478: `144`,
    4780: `2455`,
    4781: `2456`,
    4782: `2457`,
    4783: `2457`,
    4784: `2458`,
    4785: `2458`,
    4786: `2459`,
    4787: `2459`,
    4788: `2460`,
    4789: `2461`,
    479: `145`,
    4790: `2461`,
    4791: `2462`,
    4792: `2462`,
    4793: `2463`,
    4794: `2463`,
    4795: `2464`,
    4796: `2464`,
    4797: `2469`,
    4798: `2469`,
    4799: `2470`,
    48: `2`,
    480: `146`,
    4800: `2470`,
    4801: `2471`,
    4802: `2476`,
    4803: `2476`,
    4804: `2477`,
    4805: `2478`,
    4806: `2478`,
    4807: `2479`,
    4808: `2480`,
    4809: `2480`,
    481: `146`,
    4810: `2481`,
    4811: `2482`,
    4812: `2483`,
    4813: `2484`,
    4814: `2484`,
    4815: `2484`,
    4816: `2485`,
    4817: `2485`,
    4818: `2485`,
    4819: `2486`,
    482: `147`,
    4820: `2487`,
    4821: `2487`,
    4822: `2488`,
    4823: `2488`,
    4824: `2488`,
    4825: `2488`,
    4826: `2488`,
    4827: `2488`,
    4828: `2488`,
    4829: `2488`,
    483: `147`,
    4830: `2488`,
    4831: `2488`,
    4832: `2489`,
    4833: `2489`,
    4834: `2490`,
    4835: `2491`,
    4836: `2492`,
    4837: `2492`,
    4838: `2493`,
    4839: `2494`,
    484: `148`,
    4840: `2494`,
    4841: `2495`,
    4842: `2496`,
    4843: `2497`,
    4844: `2497`,
    4845: `2498`,
    4846: `2499`,
    4847: `2499`,
    4848: `2500`,
    4849: `2501`,
    485: `148`,
    4850: `2506`,
    4851: `2507`,
    4852: `2507`,
    4853: `2508`,
    4854: `2508`,
    4855: `2508`,
    4856: `2508`,
    4857: `2508`,
    4858: `2508`,
    4859: `2508`,
    486: `149`,
    4860: `2508`,
    4861: `2508`,
    4862: `2508`,
    4863: `2509`,
    4864: `2509`,
    4865: `2510`,
    4866: `2511`,
    4867: `2512`,
    4868: `2512`,
    4869: `2513`,
    487: `149`,
    4870: `2513`,
    4871: `2514`,
    4872: `2514`,
    4873: `2515`,
    4874: `2515`,
    4875: `2516`,
    4876: `2516`,
    4877: `2517`,
    4878: `2518`,
    4879: `2518`,
    488: `149`,
    4880: `2519`,
    4881: `2520`,
    4882: `2520`,
    4883: `2521`,
    4884: `2522`,
    4885: `2522`,
    4886: `2523`,
    4887: `2524`,
    4888: `2524`,
    4889: `2525`,
    489: `152`,
    4890: `2526`,
    4891: `2526`,
    4892: `2527`,
    4893: `2528`,
    4894: `2528`,
    4895: `2529`,
    4896: `2530`,
    4897: `2530`,
    4898: `2531`,
    4899: `2531`,
    49: `2`,
    490: `152`,
    4900: `2532`,
    4901: `2532`,
    4902: `2532`,
    4903: `2534`,
    4904: `2534`,
    4905: `2535`,
    4906: `2536`,
    4907: `2536`,
    4908: `2537`,
    4909: `2538`,
    491: `153`,
    4910: `2538`,
    4911: `2539`,
    4912: `2539`,
    4913: `2539`,
    4914: `2541`,
    4915: `2541`,
    4916: `2542`,
    4917: `2542`,
    4918: `2542`,
    4919: `2543`,
    492: `153`,
    4920: `2544`,
    4921: `2544`,
    4922: `2545`,
    4923: `2545`,
    4924: `2545`,
    4925: `2546`,
    4926: `2546`,
    4927: `2547`,
    4928: `2547`,
    4929: `2547`,
    493: `153`,
    4930: `2548`,
    4931: `2549`,
    4932: `2549`,
    4933: `2550`,
    4934: `2550`,
    4935: `2550`,
    4936: `2552`,
    4937: `2553`,
    4938: `2554`,
    4939: `2555`,
    494: `154`,
    4940: `2556`,
    4941: `2558`,
    4942: `2559`,
    4943: `2559`,
    4944: `2560`,
    4945: `2561`,
    4946: `2561`,
    4947: `2562`,
    4948: `2562`,
    4949: `2563`,
    495: `155`,
    4950: `2563`,
    4951: `2564`,
    4952: `2565`,
    4953: `2567`,
    4954: `2567`,
    4955: `2567`,
    4956: `2569`,
    4957: `2569`,
    4958: `2569`,
    4959: `2571`,
    496: `155`,
    4960: `2571`,
    4961: `2571`,
    4962: `2573`,
    4963: `2573`,
    4964: `2573`,
    4965: `2576`,
    4966: `2576`,
    4967: `2576`,
    4968: `2579`,
    4969: `2579`,
    497: `156`,
    4970: `2579`,
    4971: `2582`,
    4972: `2582`,
    4973: `2582`,
    4974: `2585`,
    4975: `2585`,
    4976: `2585`,
    4977: `2586`,
    4978: `2586`,
    4979: `2587`,
    498: `156`,
    4980: `2587`,
    4981: `2587`,
    4982: `2590`,
    4983: `2590`,
    4984: `2590`,
    4985: `2592`,
    4986: `2593`,
    4987: `2595`,
    4988: `2596`,
    4989: `2597`,
    499: `157`,
    4990: `2598`,
    4991: `2598`,
    4992: `2599`,
    4993: `2599`,
    4994: `2600`,
    4995: `2600`,
    4996: `2600`,
    4997: `2601`,
    4998: `2603`,
    4999: `2604`,
    5: `2`,
    50: `2`,
    500: `158`,
    5000: `2605`,
    5001: `2605`,
    5002: `2605`,
    5003: `2606`,
    5004: `2607`,
    5005: `2607`,
    5006: `2608`,
    5007: `2608`,
    5008: `2608`,
    5009: `2609`,
    501: `163`,
    5010: `2611`,
    5011: `2611`,
    5012: `2612`,
    5013: `2612`,
    5014: `2613`,
    5015: `2614`,
    5016: `2617`,
    5017: `2618`,
    5018: `2619`,
    5019: `2619`,
    502: `164`,
    5020: `2620`,
    5021: `2621`,
    5022: `2621`,
    5023: `2622`,
    5024: `2622`,
    5025: `2623`,
    5026: `2623`,
    5027: `2624`,
    5028: `2624`,
    5029: `2625`,
    503: `164`,
    5030: `2625`,
    5031: `2626`,
    5032: `2628`,
    5033: `2628`,
    5034: `2628`,
    5035: `2628`,
    5036: `2629`,
    5037: `2629`,
    5038: `2629`,
    5039: `2630`,
    504: `165`,
    5040: `2630`,
    5041: `2630`,
    5042: `2632`,
    5043: `2633`,
    5044: `2633`,
    5045: `2634`,
    5046: `2634`,
    5047: `2635`,
    5048: `2635`,
    5049: `2635`,
    505: `165`,
    5050: `2636`,
    5051: `2636`,
    5052: `2636`,
    5053: `2639`,
    5054: `2639`,
    5055: `2639`,
    5056: `2640`,
    5057: `2640`,
    5058: `2641`,
    5059: `2641`,
    506: `165`,
    5060: `2641`,
    5061: `2644`,
    5062: `2644`,
    5063: `2644`,
    5064: `2646`,
    5065: `2647`,
    5066: `2648`,
    5067: `2648`,
    5068: `2649`,
    5069: `2650`,
    507: `165`,
    5070: `2651`,
    5071: `2652`,
    5072: `2653`,
    5073: `2654`,
    5074: `2656`,
    5075: `2657`,
    5076: `2657`,
    5077: `2657`,
    5078: `2658`,
    5079: `2658`,
    508: `165`,
    5080: `2659`,
    5081: `2660`,
    5082: `2661`,
    5083: `2662`,
    5084: `2662`,
    5085: `2663`,
    5086: `2664`,
    5087: `2664`,
    5088: `2664`,
    5089: `2665`,
    509: `165`,
    5090: `2665`,
    5091: `2666`,
    5092: `2667`,
    5093: `2667`,
    5094: `2667`,
    5095: `2668`,
    5096: `2668`,
    5097: `2669`,
    5098: `2669`,
    5099: `2670`,
    51: `2`,
    510: `165`,
    5100: `2671`,
    5101: `2671`,
    5102: `2672`,
    5103: `2674`,
    5104: `2675`,
    5105: `2675`,
    5106: `2675`,
    5107: `2677`,
    5108: `2678`,
    5109: `2678`,
    511: `165`,
    5110: `2678`,
    5111: `2679`,
    5112: `2680`,
    5113: `2681`,
    5114: `2682`,
    5115: `2683`,
    5116: `2685`,
    5117: `2686`,
    5118: `2687`,
    5119: `2688`,
    512: `165`,
    5120: `2688`,
    5121: `2688`,
    5122: `2689`,
    5123: `2689`,
    5124: `2690`,
    5125: `2691`,
    5126: `2692`,
    5127: `2694`,
    5128: `2695`,
    5129: `2696`,
    513: `165`,
    5130: `2696`,
    5131: `2697`,
    5132: `2698`,
    5133: `2698`,
    5134: `2698`,
    5135: `2699`,
    5136: `2701`,
    5137: `2702`,
    5138: `2702`,
    5139: `2703`,
    514: `166`,
    5140: `2705`,
    5141: `2706`,
    5142: `2707`,
    5143: `2708`,
    5144: `2709`,
    5145: `2709`,
    5146: `2710`,
    5147: `2711`,
    5148: `2712`,
    5149: `2713`,
    515: `166`,
    5150: `2715`,
    5151: `2715`,
    5152: `2716`,
    5153: `2716`,
    5154: `2717`,
    5155: `2718`,
    5156: `2719`,
    5157: `2719`,
    5158: `2719`,
    5159: `2720`,
    516: `167`,
    5160: `2720`,
    5161: `2720`,
    5162: `2722`,
    5163: `2722`,
    5164: `2723`,
    5165: `2724`,
    5166: `2724`,
    5167: `2725`,
    5168: `2727`,
    5169: `2728`,
    517: `168`,
    5170: `2729`,
    5171: `2730`,
    5172: `2730`,
    5173: `2730`,
    5174: `2731`,
    5175: `2731`,
    5176: `2732`,
    5177: `2732`,
    5178: `2732`,
    5179: `2733`,
    518: `169`,
    5180: `2733`,
    5181: `2733`,
    5182: `2735`,
    5183: `2736`,
    5184: `2737`,
    5185: `2737`,
    5186: `2738`,
    5187: `2739`,
    5188: `2739`,
    5189: `2740`,
    519: `169`,
    5190: `2740`,
    5191: `2741`,
    5192: `2741`,
    5193: `2742`,
    5194: `2743`,
    5195: `2746`,
    5196: `2746`,
    5197: `2747`,
    5198: `2747`,
    5199: `2748`,
    52: `2`,
    520: `170`,
    5200: `2749`,
    5201: `2750`,
    5202: `2751`,
    5203: `2751`,
    5204: `2752`,
    5205: `2753`,
    5206: `2753`,
    5207: `2754`,
    5208: `2754`,
    5209: `2755`,
    521: `170`,
    5210: `2755`,
    5211: `2756`,
    5212: `2757`,
    5213: `2758`,
    5214: `2758`,
    5215: `2759`,
    5216: `2760`,
    5217: `2761`,
    5218: `2762`,
    5219: `2762`,
    522: `171`,
    5220: `2763`,
    5221: `2764`,
    5222: `2765`,
    5223: `2767`,
    5224: `2767`,
    5225: `2768`,
    5226: `2769`,
    5227: `2769`,
    5228: `2770`,
    5229: `2772`,
    523: `171`,
    5230: `2773`,
    5231: `2773`,
    5232: `2774`,
    524: `172`,
    525: `172`,
    526: `172`,
    527: `173`,
    528: `173`,
    529: `174`,
    53: `2`,
    530: `174`,
    531: `174`,
    532: `175`,
    533: `176`,
    534: `176`,
    535: `177`,
    536: `177`,
    537: `177`,
    538: `178`,
    539: `179`,
    54: `2`,
    540: `179`,
    541: `180`,
    542: `181`,
    543: `181`,
    544: `182`,
    545: `182`,
    546: `183`,
    547: `183`,
    548: `184`,
    549: `184`,
    55: `2`,
    550: `184`,
    551: `187`,
    552: `187`,
    553: `188`,
    554: `188`,
    555: `188`,
    556: `189`,
    557: `189`,
    558: `191`,
    559: `192`,
    56: `2`,
    560: `192`,
    561: `193`,
    562: `194`,
    563: `195`,
    564: `195`,
    565: `196`,
    566: `197`,
    567: `197`,
    568: `197`,
    569: `198`,
    57: `2`,
    570: `199`,
    571: `199`,
    572: `200`,
    573: `201`,
    574: `202`,
    575: `203`,
    576: `204`,
    577: `211`,
    578: `211`,
    579: `212`,
    58: `2`,
    580: `213`,
    581: `213`,
    582: `214`,
    583: `215`,
    584: `215`,
    585: `216`,
    586: `217`,
    587: `217`,
    588: `218`,
    589: `219`,
    59: `2`,
    590: `220`,
    591: `221`,
    592: `222`,
    593: `223`,
    594: `224`,
    595: `225`,
    596: `226`,
    597: `227`,
    598: `228`,
    599: `229`,
    6: `2`,
    60: `2`,
    600: `230`,
    601: `231`,
    602: `232`,
    603: `233`,
    604: `234`,
    605: `235`,
    606: `236`,
    607: `237`,
    608: `238`,
    609: `238`,
    61: `2`,
    610: `239`,
    611: `240`,
    612: `240`,
    613: `241`,
    614: `242`,
    615: `242`,
    616: `243`,
    617: `244`,
    618: `244`,
    619: `245`,
    62: `2`,
    620: `245`,
    621: `245`,
    622: `246`,
    623: `247`,
    624: `247`,
    625: `248`,
    626: `248`,
    627: `248`,
    628: `249`,
    629: `250`,
    63: `2`,
    630: `250`,
    631: `251`,
    632: `252`,
    633: `253`,
    634: `253`,
    635: `253`,
    636: `253`,
    637: `253`,
    638: `253`,
    639: `254`,
    64: `2`,
    640: `254`,
    641: `254`,
    642: `257`,
    643: `257`,
    644: `257`,
    645: `258`,
    646: `258`,
    647: `258`,
    648: `261`,
    649: `261`,
    65: `2`,
    650: `262`,
    651: `262`,
    652: `262`,
    653: `263`,
    654: `263`,
    655: `265`,
    656: `266`,
    657: `266`,
    658: `267`,
    659: `268`,
    66: `2`,
    660: `269`,
    661: `269`,
    662: `270`,
    663: `271`,
    664: `271`,
    665: `271`,
    666: `272`,
    667: `273`,
    668: `273`,
    669: `274`,
    67: `2`,
    670: `275`,
    671: `276`,
    672: `277`,
    673: `278`,
    674: `285`,
    675: `285`,
    676: `286`,
    677: `287`,
    678: `287`,
    679: `288`,
    68: `2`,
    680: `289`,
    681: `289`,
    682: `290`,
    683: `291`,
    684: `291`,
    685: `292`,
    686: `293`,
    687: `293`,
    688: `294`,
    689: `295`,
    69: `2`,
    690: `296`,
    691: `297`,
    692: `298`,
    693: `299`,
    694: `300`,
    695: `301`,
    696: `302`,
    697: `303`,
    698: `304`,
    699: `305`,
    7: `2`,
    70: `2`,
    700: `306`,
    701: `307`,
    702: `308`,
    703: `309`,
    704: `310`,
    705: `311`,
    706: `312`,
    707: `313`,
    708: `314`,
    709: `314`,
    71: `2`,
    710: `315`,
    711: `316`,
    712: `316`,
    713: `317`,
    714: `318`,
    715: `318`,
    716: `319`,
    717: `320`,
    718: `320`,
    719: `321`,
    72: `2`,
    720: `321`,
    721: `321`,
    722: `322`,
    723: `323`,
    724: `323`,
    725: `324`,
    726: `324`,
    727: `324`,
    728: `325`,
    729: `326`,
    73: `2`,
    730: `326`,
    731: `327`,
    732: `328`,
    733: `329`,
    734: `329`,
    735: `329`,
    736: `329`,
    737: `329`,
    738: `329`,
    739: `330`,
    74: `2`,
    740: `330`,
    741: `330`,
    742: `333`,
    743: `333`,
    744: `334`,
    745: `334`,
    746: `334`,
    747: `335`,
    748: `335`,
    749: `337`,
    75: `2`,
    750: `338`,
    751: `338`,
    752: `339`,
    753: `340`,
    754: `341`,
    755: `341`,
    756: `342`,
    757: `343`,
    758: `343`,
    759: `343`,
    76: `2`,
    760: `344`,
    761: `345`,
    762: `345`,
    763: `346`,
    764: `347`,
    765: `348`,
    766: `349`,
    767: `350`,
    768: `355`,
    769: `355`,
    77: `2`,
    770: `356`,
    771: `356`,
    772: `356`,
    773: `357`,
    774: `357`,
    775: `358`,
    776: `359`,
    777: `359`,
    778: `360`,
    779: `360`,
    78: `2`,
    780: `361`,
    781: `362`,
    782: `362`,
    783: `363`,
    784: `364`,
    785: `364`,
    786: `365`,
    787: `366`,
    788: `366`,
    789: `367`,
    79: `2`,
    790: `368`,
    791: `369`,
    792: `370`,
    793: `371`,
    794: `372`,
    795: `373`,
    796: `374`,
    797: `375`,
    798: `376`,
    799: `377`,
    8: `2`,
    80: `2`,
    800: `378`,
    801: `379`,
    802: `380`,
    803: `381`,
    804: `382`,
    805: `383`,
    806: `384`,
    807: `385`,
    808: `386`,
    809: `387`,
    81: `2`,
    810: `387`,
    811: `388`,
    812: `389`,
    813: `389`,
    814: `390`,
    815: `391`,
    816: `391`,
    817: `392`,
    818: `393`,
    819: `393`,
    82: `2`,
    820: `394`,
    821: `394`,
    822: `394`,
    823: `395`,
    824: `395`,
    825: `395`,
    826: `396`,
    827: `397`,
    828: `398`,
    829: `403`,
    83: `2`,
    830: `403`,
    831: `404`,
    832: `405`,
    833: `405`,
    834: `406`,
    835: `407`,
    836: `407`,
    837: `407`,
    838: `408`,
    839: `408`,
    84: `2`,
    840: `408`,
    841: `408`,
    842: `408`,
    843: `408`,
    844: `409`,
    845: `409`,
    846: `410`,
    847: `411`,
    848: `413`,
    849: `414`,
    85: `2`,
    850: `414`,
    851: `415`,
    852: `415`,
    853: `415`,
    854: `415`,
    855: `415`,
    856: `415`,
    857: `415`,
    858: `415`,
    859: `415`,
    86: `2`,
    860: `415`,
    861: `416`,
    862: `416`,
    863: `417`,
    864: `418`,
    865: `419`,
    866: `419`,
    867: `420`,
    868: `420`,
    869: `421`,
    87: `2`,
    870: `421`,
    871: `422`,
    872: `422`,
    873: `423`,
    874: `423`,
    875: `423`,
    876: `426`,
    877: `426`,
    878: `427`,
    879: `427`,
    88: `2`,
    880: `428`,
    881: `429`,
    882: `429`,
    883: `430`,
    884: `430`,
    885: `431`,
    886: `431`,
    887: `432`,
    888: `433`,
    889: `433`,
    89: `2`,
    890: `434`,
    891: `434`,
    892: `435`,
    893: `435`,
    894: `436`,
    895: `437`,
    896: `437`,
    897: `438`,
    898: `438`,
    899: `439`,
    9: `2`,
    90: `2`,
    900: `439`,
    901: `440`,
    902: `441`,
    903: `441`,
    904: `442`,
    905: `442`,
    906: `443`,
    907: `443`,
    908: `444`,
    909: `445`,
    91: `2`,
    910: `445`,
    911: `446`,
    912: `446`,
    913: `447`,
    914: `447`,
    915: `447`,
    916: `448`,
    917: `449`,
    918: `450`,
    919: `450`,
    92: `2`,
    920: `451`,
    921: `452`,
    922: `459`,
    923: `459`,
    924: `460`,
    925: `461`,
    926: `462`,
    927: `469`,
    928: `469`,
    929: `470`,
    93: `2`,
    930: `471`,
    931: `472`,
    932: `472`,
    933: `473`,
    934: `473`,
    935: `474`,
    936: `474`,
    937: `475`,
    938: `476`,
    939: `477`,
    94: `2`,
    940: `477`,
    941: `478`,
    942: `478`,
    943: `479`,
    944: `480`,
    945: `487`,
    946: `487`,
    947: `488`,
    948: `488`,
    949: `489`,
    95: `2`,
    950: `490`,
    951: `490`,
    952: `491`,
    953: `492`,
    954: `492`,
    955: `493`,
    956: `494`,
    957: `501`,
    958: `501`,
    959: `502`,
    96: `2`,
    960: `503`,
    961: `504`,
    962: `504`,
    963: `505`,
    964: `505`,
    965: `506`,
    966: `506`,
    967: `506`,
    968: `507`,
    969: `507`,
    97: `2`,
    970: `508`,
    971: `508`,
    972: `509`,
    973: `509`,
    974: `510`,
    975: `511`,
    976: `511`,
    977: `512`,
    978: `512`,
    979: `513`,
    98: `2`,
    980: `513`,
    981: `513`,
    982: `514`,
    983: `514`,
    984: `515`,
    985: `516`,
    986: `516`,
    987: `516`,
    988: `517`,
    989: `517`,
    99: `2`,
    990: `518`,
    991: `519`,
    992: `519`,
    993: `520`,
    994: `521`,
    995: `522`,
    996: `522`,
    997: `523`,
    998: `524`,
    999: `524`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: {
    _api_a_sale_buySC2: 2
    },
  extraPages: 2,
  stateKeys: 2,
  stateSize: 145,
  unsupported: [],
  version: 13,
  warnings: [`API a_sale_buyNet may use up to 11 transaction references, but the limit is 8. API a_sale_buyNet starts at /app/index.rsh:1999:31:application.`, `API a_sale_buyNet may use up to 5 accounts, but the limit is 4. API a_sale_buyNet starts at /app/index.rsh:1999:31:application.`, `API a_sale_buySC may use up to 13 boxes, but the limit is 8. API a_sale_buySC starts at /app/index.rsh:1999:31:application.`, `API a_sale_buySC may use up to 21 transaction references, but the limit is 8. API a_sale_buySC starts at /app/index.rsh:1999:31:application.`, `API a_sale_buySC may use up to 6 accounts, but the limit is 4. API a_sale_buySC starts at /app/index.rsh:1999:31:application.`, `Step 0 calls a remote object at /app/index.rsh:1988:40:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:2046:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:2065:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/index.rsh:2084:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 13 boxes, but the limit is 8. Step 2 starts at /app/index.rsh:1999:31:dot.`, `Step 2 may use up to 21 transaction references, but the limit is 8. Step 2 starts at /app/index.rsh:1999:31:dot.`, `Step 2 may use up to 6 accounts, but the limit is 4. Step 2 starts at /app/index.rsh:1999:31:dot.`, `This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:2520:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:1999:31:after expr stmt semicolon',
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
  "a_sale_buyNet": a_sale_buyNet,
  "a_sale_buySC": a_sale_buySC,
  "a_sale_deleteListing": a_sale_deleteListing,
  "a_sale_listNet": a_sale_listNet,
  "a_sale_listSC": a_sale_listSC,
  "arc200_transfer": arc200_transfer,
  "nop": nop,
  "touch": touch
  };
export const _APIs = {
  a_admin: {
    grant: a_admin_grant,
    lock: a_admin_lock,
    updateFee: a_admin_updateFee
    },
  a_sale: {
    buyNet: a_sale_buyNet,
    buySC: a_sale_buySC,
    deleteListing: a_sale_deleteListing,
    listNet: a_sale_listNet,
    listSC: a_sale_listSC
    },
  arc200_transfer: arc200_transfer,
  nop: nop,
  touch: touch
  };
