export interface IUser {
  avatar_url: string
  bio: string
  name: string
  id: string
  email: string
  location: string
  blog: string
}

export interface IRepo {
  id: number
  url: string
  name: string
  description: string
  language: string
  forks: string
  fork: string
  forks_url: string
  open_issues_count: string
  issues_url: string
  stargazers_count: string
  stargazers_url: string
  git_url: string
  full_name: string
  is_hidden?: boolean
  subscribed: boolean
}

export interface IRepoState {
  user: IUser | null
  repos: IRepo[]
  searched: string
  selected: string
}

export interface IGetUserAPI extends IUser {
  [key: string]: string
}

export interface IGetReposAPI extends IRepo {
  [key: string]: string | number | boolean
}

export const GET_USER = 'GET_USER'
export const GET_REPOS = 'GET_REPOS'
export const FILTER_REPOS = 'FILTER_REPOS'
export const TOGGLE_SUBSCRIPTION = 'TOGGLE_SUBSCRIPTION'

interface IGetUserAction {
  type: typeof GET_REPOS
  payload: IRepo[]
}

interface IGetReposAction {
  type: typeof GET_USER
  payload: IUser
}

interface IToggleSubscriptionAction {
  type: typeof TOGGLE_SUBSCRIPTION
  payload: number
}

interface IFilterReposAction {
  type: typeof FILTER_REPOS
  payload: {
    action: 'search' | 'select' | 'clear'
    value?: string
  }
}

export type IRepoActionTypes =
  | IGetUserAction
  | IGetReposAction
  | IFilterReposAction
  | IToggleSubscriptionAction
