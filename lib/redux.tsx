import { Provider } from 'react-redux'
import configureStore from '../store'
import App from 'next/app'

export const withRedux = (PageComponent, { ssr = true } = {}) => {
  const WithRedux = (props) => {
    const store = getOrInitializeStore()
    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    )
  }

  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc =
      PageComponent === App || PageComponent.prototype instanceof App
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents')
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    WithRedux.displayName = `withRedux(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithRedux.getInitialProps = async (context) => {
      const reduxStore = getOrInitializeStore()

      context.reduxStore = reduxStore

      const pageProps =
        typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {}

      return {
        ...pageProps,
        initialReduxState: reduxStore.getState(),
      }
    }
  }

  return WithRedux
}

let reduxStore
const getOrInitializeStore = () => {
  if (typeof window === 'undefined') {
    return configureStore()
  }

  if (!reduxStore) {
    reduxStore = configureStore()
  }

  return reduxStore
}
