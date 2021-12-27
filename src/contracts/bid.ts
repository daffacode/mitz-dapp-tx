import { ChainId } from '@mitz/schems'
import { abis } from '../abis'

export const bid = {
  [ChainId.ETHEREUM_ROPSTEN]: {
    version: '1',
    abi: abis.Bid,
    address: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    name: 'Decentraland Bid',
    chainId: ChainId.ETHEREUM_ROPSTEN
  },
  [ChainId.HARMONY_TESTNET]: {
    version: '1',
    abi: abis.Bid,
    address: '0xd5b051864483da4556b7d58ddc2adc6090c5e3e4',
    name: 'Decentraland Bid',
    chainId: ChainId.HARMONY_TESTNET
  },
  [ChainId.ETHEREUM_MAINNET]: {
    version: '1',
    abi: abis.Bid,
    address: '0xe479dfd9664c693b2e2992300930b00bfde08233',
    name: 'Decentraland Bid',
    chainId: ChainId.ETHEREUM_MAINNET
  }
}
