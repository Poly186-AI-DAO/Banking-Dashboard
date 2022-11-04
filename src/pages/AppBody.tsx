import React from 'react'
import styled from 'styled-components'
import { DarkCard } from '../components/Card'

export const BodyWrapper = styled(DarkCard)<{ tradeDetailsOpen?: boolean }>`
  position: relative;
  max-width: 420px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 6px 14px 0px #000000 10%;
  background: #101010;
  ::before {
    background: #101010;
  }
  @media screen and (min-width: 1500px) {
    max-width: 40%;
    height: 40%;
  }
`

interface AppBodyProps {
  tradeDetailsOpen?: boolean
  children: React.ReactNode
}

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, tradeDetailsOpen }: AppBodyProps) {
  // const theme = useContext(ThemeContext)
  return (
    <BodyWrapper backgroundColor={'#101010'} tradeDetailsOpen={tradeDetailsOpen}>
      {children}
    </BodyWrapper>
  )
}
