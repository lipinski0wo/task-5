import React, { FC, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import Loading from './Loading'
import Message from './Message'
import { IMsg } from '../../store/general/types'

const Fixed: FC = () => {
  const general = useSelector((state: AppState) => state.general)

  return (
    <Fragment>
      {general.loading !== 0 && <Loading />}
      {general.msg.length !== 0 &&
        general.msg.map((msg: IMsg, index: number) => (
          <Message key={msg.id} msg={msg} index={index} />
        ))}
    </Fragment>
  )
}

export default Fixed
