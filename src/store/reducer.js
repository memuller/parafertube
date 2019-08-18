import {
  SET_RESULTS
} from './actions'
import initialState from './initialState'

export function reducer(state = initialState, action){
  switch(action.type) {
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      }

    default:
      return state
  }
}