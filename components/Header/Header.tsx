import React, { SFC } from 'react'
import styled from 'styled-components'
import IconSet from '../General/IconSet'

const Wrapper = styled.div`
  padding: 20px 0;
  text-align: center;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: flex-start;
`
const Informations = styled.div`
  width; 100%;  
  height: 102px;
  display: flex;
  flex-direction: row;
`

const Img = styled.img`
  height: 100%;
  width: auto;
  background: #0f1436;
  padding: 9px;
  border-radius: 5px;
`

const H2 = styled.h2`
  margin: 15px 0 0;
  font-size: 20px;
  letter-spacing: 0;
  color: #243c56;
`
const H4 = styled.h4`
  margin: 13px 0;
  font-size: 14px;
  letter-spacing: 0.16;
  color: #818fa3;
  font-weight: 500;
`
interface IProps {
  src: string
  name: string
  bio: string
  location: string
  blog: string
  email: string
}

const Header: SFC<IProps> = ({ src, name, bio, location, blog, email }) => {
  return (
    <Wrapper>
      <Informations>
        <Img src={src} alt='' />
        <InnerWrapper>
          <H2>{name}</H2>
          <H4>{bio}</H4>
          <span>
            <IconSet
              name={'Place'}
              textColor={'#243C56'}
              iconColor={'#0F1436'}
              size={14}
              text={location}
              width={150}
            />
            <IconSet
              name={'Link'}
              textColor={'#243C56'}
              iconColor={'#0F1436'}
              size={14}
              text={email}
              link={email}
              width={150}
            />
          </span>
        </InnerWrapper>
      </Informations>
    </Wrapper>
  )
}

export default Header
