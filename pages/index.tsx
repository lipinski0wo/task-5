import Head from 'next/head'
import { withRedux } from '../lib/redux'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { getUser, getUserRepos } from '../store/repo/actions'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Info from '../components/General/Info'
import Grid from '../components/Grid/Grid'
import SearchBar from '../components/SearchBar/SearchBar'
import { useEffect } from 'react'
import { IRepo } from '../store/repo/types'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser('Appnroll'))
    dispatch(getUserRepos('Appnroll'))
  }, [dispatch])
  const user = useSelector((state: AppState) => state.repo.user)
  const repos = useSelector((state: AppState) => state.repo.repos)

  if (!user || repos.length === 0) {
    return <Info>Nothing to display </Info>
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header
        src={user.avatar_url}
        name={user.name}
        bio={user.bio}
        location={user.location}
        blog={user.blog}
        email={user.email}
      />
      <SearchBar languages={repos.map((repo: IRepo) => repo.language)} />
      <Grid repos={repos} />
    </Layout>
  )
}

export default withRedux(Home)
