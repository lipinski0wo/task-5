import React, { SFC } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { IMsg } from '../../store/general/types'
import { removeMsg } from '../../store/general/actions'
import { Close } from '@styled-icons/material'

const Msg = styled.div`
  position: fixed;
  top: 5px;
  left: 50%;
  min-width: 300px;
  height: 50px;
  border: 2px solid #000;
  transform: translateX(-50%);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 2;
`

const CloseStyled = styled(Close)`
  width: 30px;
  height: 30px;
  color: #00f;
  cursor: pointer;
`

interface IMessageProps {
  msg: IMsg
  index: number
}

const Message: SFC<IMessageProps> = ({ msg, index }) => {
  const dispatch = useDispatch()

  return (
    <Msg style={{ top: `${5 + index * 55}px` }}>
      <div>
        {msg.type}: {msg.name}
      </div>
      <CloseStyled onClick={() => dispatch(removeMsg(msg.id))} />
    </Msg>
  )
}

export default Message
