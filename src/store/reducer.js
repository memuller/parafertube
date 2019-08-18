import {
  SET_RESULTS,
  SET_TERMS
} from './actions'
import initialState from './initialState'

export default function reducer(state = initialState, action){
  switch(action.type) {
    case SET_RESULTS:
      return {
        ...state,
        numSearches: state.numSearches + 1,
        results: action.results
      }
    case SET_TERMS:
      return {
        ...state,
        searchTerms: action.terms
      }
    default:
      return state
  }
}