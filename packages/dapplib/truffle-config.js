require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture struggle cruise meadow unveil hundred light army gentle'; 
let testAccounts = [
"0x5317ac85a74bb908d4c5f4759902a6e704d0e7077499e45e526236dec04c8efe",
"0xba8c17815e180825b51407b43c9bc626155538f87437195e5eb8ebf35f7d7d8a",
"0x3e2ee0264f5337a23d025beaa78294689a2f1bce4b2736c94af0db10ae7562c8",
"0x0d4762516ce9515abbd8d65c3ef5a8c2211507a299fbefbbc7413e8428a0dd8e",
"0x2a8eff3cdc5b6f8465d5fce00bd65d45f286ab7b9c4f3bb506039bab69162304",
"0xd6f160bda8193103fa572f677907617ba37cb6a598430131d4195baf9a4999f8",
"0x3c1f042bb86e7db80c0745b8d0afa4f4594a0fc3709eb781638979c4019e8c57",
"0x07efb65410dd6d2721f8191b10a6714d29085b0cdbb311e5c3c930f2fe584b8c",
"0x0391549b12c7bf3cb4e1e5f595932681f79fb47d22f166e0dd8c10bfdd2f8eb5",
"0x80cea89f9417061e310a7976cd6c39299670b1140e856b69882910ee74be4a2c"
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
            version: '^0.5.11'
        }
    }
};
