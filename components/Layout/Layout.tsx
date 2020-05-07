import React, { SFC, Fragment } from 'react'
import Fixed from '../Fixed/Fixed'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1155px;
  margin: 0 auto;
  * {
    font-family: 'Quicksand', sans-serif;
  }
`

const Layout: SFC = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Fixed />
    </Wrapper>
  )
}

export default Layout
