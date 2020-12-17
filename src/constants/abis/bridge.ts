import { Interface } from '@ethersproject/abi'
import { ChainId } from '@wanswap/sdk'
import BRIDGE_MINER_ABI from './bridge-miner.json'
import BRIDGE_TOKEN_ABI from './bridge-token.json'
import HIVE_ABI from './hive.json'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'

const WANV2_PAIR_INTERFACE = new Interface(IUniswapV2PairABI)
const BRIDGE_MINER_INTERFACE = new Interface(BRIDGE_MINER_ABI)
const WANV2BRIDGE_TOKEN_INTERFACE = new Interface(BRIDGE_TOKEN_ABI)
const HIVE_INTERFACE = new Interface(HIVE_ABI);

const BRIDGE_MINER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7E5fE1e587A5c38B4A4A9ba38a35096F8EA35aaC',
  [ChainId.ROPSTEN]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1',
  [ChainId.RINKEBY]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1',
  [ChainId.GÖRLI]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1',
  [ChainId.KOVAN]: '0xAfa6C39FDf16446078aEeEE53E4c4843811570A1'
}
const BRIDGE_TOKEN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8B9F9f4aA70B1B0d586BE8aDFb19c1Ac38e05E9a',
  [ChainId.ROPSTEN]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.RINKEBY]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.GÖRLI]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.KOVAN]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D'
}
const HIVE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1aa65df14bde890a2d9fbb97cf1337c257c2664a',
  [ChainId.ROPSTEN]: '0x1aa65df14bde890a2d9fbb97cf1337c257c2664a',
  [ChainId.RINKEBY]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.GÖRLI]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D',
  [ChainId.KOVAN]: '0x0A3B082C1ceDa3d35E5baD2776c5a5236044A03D'
}

export {
  BRIDGE_MINER_ABI,
  BRIDGE_MINER_ADDRESS,
  BRIDGE_TOKEN_ABI,
  BRIDGE_TOKEN_ADDRESS,
  HIVE_ABI,
  HIVE_ADDRESS,
  HIVE_INTERFACE,
  WANV2_PAIR_INTERFACE,
  BRIDGE_MINER_INTERFACE,
  WANV2BRIDGE_TOKEN_INTERFACE,
}
