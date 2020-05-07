import React, { SFC, useMemo } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Input from './Input'
import Select from './Select'
import { AppState } from '../../store'
import { filterRepos } from '../../store/repo/actions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0 20px 0;
`

const Button = styled.button`
  cursor: pointer;
  width: 106px;
  height: 40px;
  border: none;
  background-color: rgba(0, 98, 255, 1);
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.16px;
  margin: 0 5px;
`

interface IProps {
  languages: string[]
}

const SearchBar: SFC<IProps> = ({ languages }) => {
  const languagesKeys = useMemo(() => [...new Set(languages)], [languages])
  const searched = useSelector((state: AppState) => state.repo.searched)
  const selected = useSelector((state: AppState) => state.repo.selected)
  const dispatch = useDispatch()

  const chandleUserInput = (action: string, value?: string) => {
    dispatch(filterRepos(action, value))
  }
  return (
    <Wrapper>
      <Input
        placeholder='Search'
        chandleChange={(value: string) => chandleUserInput('search', value)}
        value={searched}
      />
      <Select
        value={selected}
        keys={languagesKeys}
        chandleChange={(value: string) => chandleUserInput('select', value)}
      />
      <Button onClick={(value: string) => chandleUserInput('clear')}>
        Clear filters
      </Button>
    </Wrapper>
  )
}

export default SearchBar

// interface ISizeLimitedSpan {
//   size?: number
//   width?: number
//   textColor: string
// }

// const SizeLimitedSpan = styled.span`
//   max-width: ${({ width }: ISizeLimitedSpan) => width}px;
//   display: inline-block;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   margin-left: 5px;
//   float: left;
//   font-size: ${({ size }: ISizeLimitedSpan) => size}px;
//   color: ${({ textColor }: ISizeLimitedSpan) => textColor};
// `

// const SpanWrapper = styled.span`
//   padding: 0 8px;
//   ${({ floatLeft }: { floatLeft: boolean }) =>
//     floatLeft && 'margin-right: auto;'};
// `

// interface IProps extends ISizeLimitedSpan {
//   name: string
//   iconColor: string
//   text: string
//   floatLeft?: boolean
//   link?: string
// }

// const IconSet: SFC<IProps> = ({
//   name,
//   textColor,
//   iconColor,
//   text,
//   floatLeft = false,
//   link,
//   size = 14,
//   width = 100,
// }) => {
//   const StyledIcon = styled(materialIcons[name])`
//     color: ${iconColor};
//     width: 20px;
//     float: left;
//   `
//   const Structure = (
//     <SpanWrapper floatLeft={floatLeft}>
//       <StyledIcon />
//       <SizeLimitedSpan width={width} textColor={textColor} size={size}>
//         {text}
//       </SizeLimitedSpan>
//     </SpanWrapper>
//   )

//   if (link) {
//     return <a href={link}>{Structure}</a>
//   }
//   return Structure
// }

// export default IconSet
