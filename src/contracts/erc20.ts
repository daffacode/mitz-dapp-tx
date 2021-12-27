import { ChainId } from '@mitz/schems'
import { ContractData } from '../types'
import { abis } from '../abis'

export const erc20: Record<ChainId, ContractData> = {
  [ChainId.MATIC_MUMBAI]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.MATIC_MUMBAI
  },
  [ChainId.HARMONY_TESTNET]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.HARMONY_TESTNET
  },
  [ChainId.MATIC_MAINNET]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.MATIC_MAINNET
  },
  [ChainId.ETHEREUM_MAINNET]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.ETHEREUM_MAINNET
  },
  [ChainId.ETHEREUM_ROPSTEN]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.ETHEREUM_ROPSTEN
  },
  [ChainId.ETHEREUM_RINKEBY]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.ETHEREUM_RINKEBY
  },
  [ChainId.ETHEREUM_KOVAN]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.ETHEREUM_KOVAN
  },
  [ChainId.ETHEREUM_GOERLI]: {
    version: '2',
    abi: abis.ERC20,
    address: '',
    name: 'ERC20',
    chainId: ChainId.ETHEREUM_GOERLI
  }
}
