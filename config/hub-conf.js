/*jslint node: true */
"use strict";

//exports.clientName = 'byteball';
//exports.minClientVersion = '2.1.0';

// https://console.developers.google.com
//exports.pushApiProjectNumber = 0;
//exports.pushApiKey = '';

exports.port = 80;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
//exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [ '7WCFYM6GXDABMKSVY534FISSGKDZBXZX',
  '7WMQK6ITRXH2Y4EO4TT3Y3IIL56URLCL',
  'TKNE2A6BWAXNGFZWEHGKWCAQWLC6PZOJ',
  'YFYIRO5HZ6LABJYVUU6U4S2DUSBSRTHR' ];




/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

//exports.initial_peers = [
//];

/*
exports.trustedRegistries = {
	'AM6GTUKENBYA54FYDAKX2VLENFZIMXWG': 'market'
};
*/

console.log('finished hub conf');
