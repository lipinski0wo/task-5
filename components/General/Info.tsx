import React, { SFC } from 'react'
import styled from 'styled-components'

const InfoBox = styled.div`
  padding: 20px 0;
  text-align: center;
`

const Info: SFC = ({ children }) => {
  return <InfoBox>{children}</InfoBox>
}

export default Info
