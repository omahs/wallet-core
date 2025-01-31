import near from '../../mainnet/non-evm/near';
import { transformMainnetToTestnetChain } from '../../utils';

export default transformMainnetToTestnetChain(
  near,
  {
    name: 'Near Testnet',
    networkId: 'testnet',
    coinType: '397',
    isTestnet: true,
    rpcUrls: ['https://near-testnet.infura.io/v3/37efa691ffec4c41a60aa4a69865d8f6', 'https://rpc.testnet.near.org'],
    scraperUrls: ['https://near-testnet-api.liq-chainhub.net'],
  },
  [
    {
      tx: 'https://explorer.testnet.near.org/transactions/{hash}',
      address: 'https://explorer.testnet.near.org/accounts/{address}',
    },
  ],
  'https://wallet.testnet.near.org/'
);
