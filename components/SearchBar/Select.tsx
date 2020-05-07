import React, { SFC } from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  cursor: pointer;
  border: 1px solid rgba(185, 198, 224, 1);
  background-color: #fff;
  width: 275px;
  height: 40px;
  margin: 0 5px;
`
const Option = styled.option`
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
`
interface IProps {
  keys?: string[]
  chandleChange?: Function
  value: string
}

const Select: SFC<IProps> = ({
  keys = [],
  chandleChange = () => {},
  value,
}) => {
  const localChandleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
    chandleChange(evt.currentTarget.value)
  }
  return (
    <StyledSelect onChange={localChandleChange} value={value}>
      <Option value='' disabled={true}>
        Select something
      </Option>
      {keys.map((key: string) => (
        <Option key={key} value={key}>
          {key}
        </Option>
      ))}
    </StyledSelect>
  )
}

export default Select
