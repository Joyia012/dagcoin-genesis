/*jslint node: true */
"use strict";

//exports.port = 6655;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;
exports.database = {};
//exports.storage = 'mysql';
exports.WS_PROTOCOL = 'ws://';
exports.hub = '127.0.0.1:1180';
exports.KEYS_FILENAME = 'keys.json';

exports.storage = 'sqlite';
exports.deviceName = 'Headless';
exports.permanent_pairing_secret = 'randomstring';
exports.control_addresses = ['DEVICE ALLOWED TO CHAT'];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';
exports.KEYS_FILENAME = 'keys.json';

// this is for runnining RPC service only, see play/rpc_service.js
exports.rpcInterface = '127.0.0.1';
exports.rpcPort = '6552';

// witness configuration

exports.admin_email='witness';
exports.from_email='witness';

exports.initial_witnesses =
[ '5DRHMQSPOPSL4LCYEM2ABLL25P3HMQVK',
  'CKSBSESNQ53FR2Z3FVRICBAHTJMD3Q2S',
  'GHXREC5GW2GCYVJE3CDX744WWCC7GJ7G',
  'GXTQW5NCM54UPPJENCWND2SD3UYRU3R6',
  'KQ6A5XMKMDEZTH6A6ATNEU3AUPUUG7M2',
  'VDQE63XZGBQ7DGAY5YKH7J5SH5MHXRYG',
  'YQ6IMLNCIAGNMMKB63LQ3U2WH5SEZ62K' ]
;

console.log('finished headless conf');
