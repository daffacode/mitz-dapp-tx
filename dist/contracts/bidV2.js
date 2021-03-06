import { ChainId } from '@mitz/schems';
import { abis } from '../abis';
export const bidV2 = {
    [ChainId.MATIC_MUMBAI]: {
        version: '2',
        abi: abis.Bid,
        address: '0x78Dd92c8941dBC7BE54E2a9390D58aD28AD97afD',
        name: 'Decentraland Bid',
        chainId: ChainId.MATIC_MUMBAI
    },
    [ChainId.HARMONY_TESTNET]: {
        version: '2',
        abi: abis.Bid,
        address: '0x07bf50a50d398e5e3e50194774c43229162b524b',
        name: 'Decentraland Bid',
        chainId: ChainId.HARMONY_TESTNET
    },
    [ChainId.MATIC_MAINNET]: {
        version: '2',
        abi: abis.Bid,
        address: '0xb96697FA4A3361Ba35B774a42c58dACcaAd1B8E1',
        name: 'Decentraland Bid',
        chainId: ChainId.MATIC_MAINNET
    }
};
//# sourceMappingURL=bidV2.js.map