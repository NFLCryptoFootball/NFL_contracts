const { readFileSync } = require('fs');
const path = require('path');
const { join } = require('path');
const LoomTruffleProvider = require('loom-truffle-provider');

module.exports = {
  contracts_build_directory: join(__dirname, './build'),
  networks: {
    loom_dapp_chain: {
      provider() {
        const privateKey = readFileSync(path.join(__dirname, 'private_key'), 'utf-8');
        const chainId = 'default';
        const writeUrl = 'http://127.0.0.1:46658/rpc';
        const readUrl = 'http://127.0.0.1:46658/query';

        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
        loomTruffleProvider.createExtraAccountsFromMnemonic('gravity top burden flip student usage spell purchase hundred improve check genre', 10);

        return loomTruffleProvider;
      },
      network_id: '*',
    },
  },
};
