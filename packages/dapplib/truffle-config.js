require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note misery update good private fringe step'; 
let testAccounts = [
"0x5a4706f00824b35bdc0a57cb32c387776661f54bbc182d6b5c06b6e6a12119e6",
"0xb8623ff4cf11a3aa96bbe89a0cd31e5581f7621de7e386341bdd39e91f290d5b",
"0x79034b7701d507dc59005c7dd1efe0d5f7bde316c365fcd4320316246d9eb001",
"0xa23e5e312c3ae8d67517d95d61321ac131b22e0842f4d28acb1e5d0c97bac2eb",
"0x435e74f98bf116a0500c624ee951fa0250b35bd35f0a16245a7892b6cb13ef1a",
"0xd75d33976b48e07f5eb5857ab1430ff2cd533bee45c47262ee6a7972afdc18bb",
"0x3c6dbf9232f7a2f7b2635eb3f0442775f1be2b786495919397f25e073e4f3224",
"0x93424304c3d8b6150500a6c4eebb29213e247c7245151b862e2fbeb21114376e",
"0x5d76e9ae7385905316f43b9e7c1332cb19587c48cb5660fb36c94ea95e61403f",
"0x1ba94747b61003a563c8a5fc0d8118c0c0651336724874bdc659f622544f7e9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

