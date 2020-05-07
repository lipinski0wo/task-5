import axios from 'axios'
import {
  GET_USER,
  GET_REPOS,
  FILTER_REPOS,
  TOGGLE_SUBSCRIPTION,
  IUser,
  IRepo,
  IGetUserAPI,
  IGetReposAPI,
} from './types'
import { ADD_LOADING, REMOVE_LOADING, ADD_MSG } from '../general/types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../index'
import config from '../../config.json'
import {
  getSubscriptions,
  setSubscription,
} from '../../lib/localStorageSubscriptionHandler'

export const toggleSubscription = (
  id: number,
  subscribed: boolean
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    setSubscription(id, !subscribed)
    dispatch({
      type: TOGGLE_SUBSCRIPTION,
      payload: id,
    })
  } catch (e) {}
}

export const filterRepos = (
  action: string,
  value?: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch({
    type: FILTER_REPOS,
    payload: {
      action,
      value: value || '',
    },
  })
}

export const getUser = (
  userName: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })
    const {
      data,
    }: {
      data: IGetUserAPI
    } = await axios.get(`${config.URL}/users/${userName}`)

    const payload: IUser = {
      avatar_url: data.avatar_url,
      bio: data.bio,
      name: data.name,
      id: data.id,
      email: data.email,
      location: data.location,
      blog: data.blog,
    }

    await dispatch({
      type: GET_USER,
      payload,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading user.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}

export const getUserRepos = (
  userName: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch({
      type: ADD_LOADING,
    })
    const { data } = await axios.get(`${config.URL}/users/${userName}/repos`)

    const repoSubscriptions = getSubscriptions()

    const payload: IRepo[] = data.map((repo: IGetReposAPI) => ({
      id: repo.id,
      url: repo.url,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      forks: repo.forks,
      fork: repo.fork,
      forks_url: repo.forks_url,
      open_issues_count: repo.open_issues_count,
      issues_url: repo.issues_url,
      stargazers_count: repo.stargazers_count,
      stargazers_url: repo.stargazers_url,
      git_url: repo.git_url,
      full_name: repo.full_name,
      subscribed: repoSubscriptions.indexOf(repo.id) !== -1,
    }))

    await dispatch({
      type: GET_REPOS,
      payload,
    })
  } catch {
    dispatch({
      type: ADD_MSG,
      payload: {
        type: 'error',
        name: 'problem while loading user.',
      },
    })
  } finally {
    dispatch({
      type: REMOVE_LOADING,
    })
  }
}
