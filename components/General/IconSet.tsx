import React, { SFC } from 'react'
import styled from 'styled-components'
import * as materialIcons from '@styled-icons/material'

const icons = [
  'Input',
  'Lens',
  'Star',
  'Person',
  'CallMerge',
  'Place',
  'Link',
  'Search',
  'Add',
  'Done',
]
interface IIconsSet {
  name: string
  component: SFC
}
const styledIcons: IIconsSet[] = icons.map((icon: string) => {
  return {
    name: icon,
    component: styled(materialIcons[icon])`
      width: 20px;
      float: left;
    `,
  }
})

interface ISizeLimitedSpan {
  size?: number
  width?: number
  textColor?: string
}

const SizeLimitedSpan = styled.span`
  max-width: ${({ width }: ISizeLimitedSpan) => width}px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  float: left;
  font-size: ${({ size }: ISizeLimitedSpan) => size}px;
  color: ${({ textColor }: ISizeLimitedSpan) => textColor};
`
const Anchor = styled.a`
  display: inline-block;
`

const SpanWrapper = styled.span`
  padding: 0;
  margin-right: 10px;
  display: inline-block;
  ${({ floatLeft }: { floatLeft?: boolean; iconColor?: string }) =>
    floatLeft && 'margin-right: auto;'};
  color: ${({ iconColor }: { floatLeft?: boolean; iconColor?: string }) =>
    iconColor || ''};
`

interface IProps extends ISizeLimitedSpan {
  name: string
  iconColor: string
  text?: string
  floatLeft?: boolean
  link?: string
}

const IconSet: SFC<IProps> = ({
  name,
  textColor = '',
  iconColor,
  text = '',
  floatLeft = false,
  link,
  size = 14,
  width = 100,
}) => {
  let foundStyled = styledIcons.find(
    (iconSet: IIconsSet) => iconSet.name === name
  )
  if (!foundStyled) {
    foundStyled = styledIcons[0]
  }
  const StyledIcon = foundStyled.component

  const Structure = (
    <SpanWrapper floatLeft={floatLeft} iconColor={iconColor}>
      <StyledIcon />
      <SizeLimitedSpan width={width} textColor={textColor} size={size}>
        {text}
      </SizeLimitedSpan>
    </SpanWrapper>
  )

  if (link) {
    return <Anchor href={link}>{Structure}</Anchor>
  }
  return Structure
}

export default IconSet
