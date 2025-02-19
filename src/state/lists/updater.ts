import { useEffect } from 'react'
import { useActiveWeb3React } from '../../hooks'
import { setTokenList } from './actions'
import { useDispatch } from 'react-redux'
import { Fetcher, TokenList } from 'dxswap-sdk'
// import p8 from '../../assets/svg/logo.svg'

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
          tokenList.tokens.unshift({
            chainId: 100,
            address: '0x772fCe4B8E88BD19e86dC92428d242704aC480a0',
            name: 'P8',
            symbol: 'P8',
            decimals: 18,
            logoURI: "https://i.postimg.cc/wBmS6RMX/p8.jpg"
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
