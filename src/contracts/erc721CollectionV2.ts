import { ChainId } from '@mitz/schems'
import { abis } from '../abis'

export const erc721CollectionV2 = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.ERC721CollectionV2,
    address: '',
    name: 'Decentraland Collection',
    chainId: ChainId.MATIC_MAINNET
  }
}
