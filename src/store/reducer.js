import {
  SET_RESULTS,
  SET_TERMS,
  SELECT_VIDEO,
  SET_ERROR,
  SET_LOADING
} from './actions'
import initialState from './initialState'

export default function reducer(state = initialState, action){
  switch(action.type) {
    case SET_RESULTS:
      return {
        ...state,
        numSearches: state.numSearches + 1,
        results: action.results,
        readiness: 1
      }
    case SET_ERROR:
      return {
        ...state,
        results: [],
        readiness: -1
      }
    case SET_LOADING:
      return {
        ...state,
        readiness: 0
      }
    case SET_TERMS:
      return {
        ...state,
        searchTerms: action.terms
      }

    case SELECT_VIDEO:
      return {
        ...state,
        selectedVideoId: action.videoId
      }

    default:
      return state
  }
}