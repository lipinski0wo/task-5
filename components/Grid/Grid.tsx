import React, { SFC } from 'react'
import styled from 'styled-components'
import { IRepo } from '../../store/repo/types'
import colorLanguageSets from '../../lib/colorLanguageSets.json'
import IconSet from '../General/IconSet'
import Subscribe from './Subscribe'

const Header = styled.h2`
  text-align: left;
  color: rgba(36, 60, 86, 1);
  max-width: 300px;
`
const Description = styled.p`
  text-align: left;
  color: rgba(125, 140, 161, 1);
`

const Wrapper = styled.div`
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const Box = styled.div`
  width: 375px;
  height: 349px;
  border: 1px solid #e3e5e8;
  margin-bottom: 15px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Footer = styled.div`
  height: 40px;
  background: rgba(39, 124, 220, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  box-sizing: border-box;
`

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 24px;
  overflow: hidden;
  position: relative;
`

const ColorBar = styled.div`
  height: 6px;
  background-color: ${({ color }: { color: String }) => color};
`

interface IProps {
  repos: IRepo[]
}

const Grid: SFC<IProps> = ({ repos }) => {
  return (
    <Wrapper>
      {repos
        .filter((repo: IRepo) => !repo.is_hidden)
        .map((repo: IRepo) => (
          <Box key={repo.id}>
            <ColorBar
              color={
                colorLanguageSets[repo.language] || colorLanguageSets.default
              }
            />
            <Content>
              <Header>{repo.name}</Header>
              <IconSet
                name={'Input'}
                iconColor={'#0062FF'}
                textColor={'#0062FF'}
                text={repo.full_name}
                floatLeft
                link={repo.git_url}
                width={300}
              />
              <Description>{repo.description}</Description>
              <Subscribe id={repo.id} subscribed={repo.subscribed} />
            </Content>
            <Footer>
              <IconSet
                name={'Lens'}
                textColor={'rgba(36,60,86,1)'}
                iconColor={
                  colorLanguageSets[repo.language] || colorLanguageSets.default
                }
                text={repo.language}
                floatLeft
              />
              <IconSet
                name={'Star'}
                textColor={'rgba(36,60,86,1)'}
                iconColor={'rgba(36,60,86,1)'}
                text={repo.stargazers_count}
                link={repo.stargazers_url}
              />
              <IconSet
                name={'Person'}
                textColor={'rgba(36,60,86,1)'}
                iconColor={'rgba(36,60,86,1)'}
                text={repo.open_issues_count}
                link={repo.issues_url}
              />
              <IconSet
                name={'CallMerge'}
                textColor={'rgba(36,60,86,1)'}
                iconColor={'rgba(36,60,86,1)'}
                text={repo.forks}
                link={repo.forks_url}
              />
            </Footer>
          </Box>
        ))}
    </Wrapper>
  )
}

export default Grid
