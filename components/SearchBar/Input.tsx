import React, { SFC, useMemo } from 'react'
import styled from 'styled-components'
import IconSet from '../General/IconSet'

const Wrapper = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  border: 1px solid rgba(185, 198, 224, 1);
  background-color: #fff;
  width: 200px;
  height: 40px;
  margin-rigth: 5px;
  box-sizing: border-box;
  padding: 5px 30px 5px 5px;
`
const PositionedIcon = styled.div`
  position: absolute;
  right: -10px;
  top: 10px;
`

interface IProps {
  placeholder?: string
  chandleChange?: Function
  value: string
}

const Input: SFC<IProps> = ({
  placeholder = '',
  chandleChange = () => {},
  value,
}) => {
  const localChandleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
    chandleChange(evt.currentTarget.value)
  }
  return (
    <Wrapper>
      <StyledInput
        type='text'
        placeholder={placeholder}
        onChange={localChandleChange}
        value={value}
      />
      <PositionedIcon>
        <IconSet
          name={'Search'}
          textColor={'transparent'}
          iconColor={'#0f143675'}
          text={''}
          width={0}
        />
      </PositionedIcon>
    </Wrapper>
  )
}

export default Input
