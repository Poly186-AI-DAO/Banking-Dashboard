import { useEffect } from 'react'
import { useActiveWeb3React } from '../../hooks'
import { setTokenList } from './actions'
import { useDispatch } from 'react-redux'
import { Fetcher, TokenList } from 'dxswap-sdk'

export default function Updater() {
  const { chainId, library } = useActiveWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    if (chainId)
      Fetcher.fetchDxDaoTokenList(chainId)
        .then((tokenList: TokenList) => {
          // Fetcher.fetchTokenData(chainId, '0x772fbC4a49998003c6291dB0eA44FE498EeF2bb3', library).then(tokenData => {
          //   console.log(tokenData)
          // })
          tokenList.tokens.push({
            chainId: 100,
            address: '0x772fbC4a49998003c6291dB0eA44FE498EeF2bb3',
            name: 'P8',
            symbol: 'P8',
            decimals: 18,
            logoURI: 'https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png'
          })
          console.log(tokenList.tokens)
          if (tokenList) dispatch(setTokenList(tokenList))
        })
        .catch(error => {
          console.error('Error fetching the default token list. error:', error)
          return
        })
  }, [chainId, dispatch, library])

  return null
}
