import {
  FILTER_REPOS,
  GET_USER,
  GET_REPOS,
  TOGGLE_SUBSCRIPTION,
  IRepoState,
  IRepoActionTypes,
  IRepo,
} from './types'

const initialState: IRepoState = {
  user: null,
  repos: [],
  selected: '',
  searched: '',
}

export function repo(
  state = initialState,
  action: IRepoActionTypes
): IRepoState {
  switch (action.type) {
    case TOGGLE_SUBSCRIPTION:
      return {
        ...state,
        repos: state.repos.map((repo: IRepo) => {
          if (repo.id === action.payload) {
            return {
              ...repo,
              subscribed: !repo.subscribed,
            }
          }

          return repo
        }),
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      }

    case FILTER_REPOS:
      let searched = state.searched
      let selected = state.selected
      if (action.payload.action === 'search') searched = action.payload.value
      if (action.payload.action === 'select') selected = action.payload.value
      if (action.payload.action === 'clear') {
        searched = ''
        selected = ''
      }
      return {
        ...state,
        searched,
        selected,
        repos: state.repos.map((repo: IRepo, i: number) => {
          let is_hidden = false
          if (action.payload.action === 'clear') {
            return { ...repo, is_hidden }
          }

          if (
            (selected.length > 0 && repo.language !== selected) ||
            repo.name.indexOf(searched) === -1
          ) {
            is_hidden = true
          }

          return {
            ...repo,
            is_hidden,
            searched,
            selected,
          }
        }),
      }
    default:
      return state
  }
}
