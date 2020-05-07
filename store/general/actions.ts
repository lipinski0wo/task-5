import { REMOVE_LOADING, REMOVE_MSG } from './types'

import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../index'

export const removeMsg = (
  id: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch({
    type: REMOVE_MSG,
    payload: id,
  })
}

export const removeLoading = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  dispatch({
    type: REMOVE_LOADING,
  })
}
