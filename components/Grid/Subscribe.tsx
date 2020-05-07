import React, { SFC } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toggleSubscription } from '../../store/repo/actions'

import IconSet from '../General/IconSet'

const Wrapper = styled.div`
  width: 28px;
  height: 35px;
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  background-color: #0062ff;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  cursor: pointer;
`

interface IProps {
  subscribed: boolean
  id: number
}

const Subscribe: SFC<IProps> = ({ id, subscribed }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper onClick={() => dispatch(toggleSubscription(id, subscribed))}>
      <IconSet name={subscribed ? 'Done' : 'Add'} iconColor='#fff' />
    </Wrapper>
  )
}

export default Subscribe
