import {
  IGeneralState,
  ADD_LOADING,
  ADD_MSG,
  REMOVE_LOADING,
  REMOVE_MSG,
  IGeneralActionTypes,
} from './types'
import { uuid } from 'uuidv4'

const initialState: IGeneralState = {
  loading: 0,
  msg: [],
}

export function general(
  state = initialState,
  action: IGeneralActionTypes
): IGeneralState {
  switch (action.type) {
    case ADD_LOADING:
      return {
        ...state,
        loading: state.loading + 1,
      }
    case REMOVE_LOADING:
      return {
        ...state,
        loading: state.loading - 1,
      }
    case ADD_MSG:
      return {
        ...state,
        msg: [...state.msg, { ...action.payload, id: uuid() }],
      }
    case REMOVE_MSG:
      return {
        ...state,
        msg: state.msg.filter((msg) => msg.id !== action.payload),
      }
    default:
      return state
  }
}
