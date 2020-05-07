export interface IMsg {
  type: 'success' | 'error'
  name: string
  id: string
}

export interface IGeneralState {
  loading: number
  msg: IMsg[]
}

export const ADD_MSG = 'ADD_MSG'
export const REMOVE_MSG = 'REMOVE_MSG'
export const ADD_LOADING = 'ADD_LOADING'
export const REMOVE_LOADING = 'REMOVE_LOADING'

interface IAddLoadingAction {
  type: typeof ADD_LOADING
}

interface IRemoveLoadingAction {
  type: typeof REMOVE_LOADING
}

interface IRemoveMsgAction {
  type: typeof REMOVE_MSG
  payload: string
}

interface IAddMsgAction {
  type: typeof ADD_MSG
  payload: {
    type: 'success' | 'error'
    name: string
  }
}

export type IGeneralActionTypes =
  | IAddLoadingAction
  | IRemoveLoadingAction
  | IRemoveMsgAction
  | IAddMsgAction
