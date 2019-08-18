import Axios from "axios"

export const SELECT_VIDEO = 'SELECT_VIDEO'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_RESULTS = 'SET_RESULTS'
export const SET_TERMS = 'SET_TERMS'
export const FETCH_RESULTS = 'FETCH_RESULTS'


/**
 * sets currently selected video
 * @createsAction SELECT_VIDEO
 * @param {string} videoId 
 */
export function selectVideo(videoId) {
  return {
    type: SELECT_VIDEO,
    videoId: videoId
  }
}

/**
 * sets currently loaded results
 * @createsAction SET_RESULTS
 * @param {Object[]} results 
 */
export function setResults(results) {
  return {
    type: SET_RESULTS,
    results: results
  }
}

/**
 * sets current search terms
 * @createsAction SET_TERMS
 * @param {string} terms 
 */
export function setTerms(terms) {
  return {
    type: SET_TERMS,
    terms: terms
  }
}
/**
 * sets current readiness level as LOADING
 * @createsAction SET_LOADING
 */
export function setLoading() {
  return {
    type: SET_LOADING
  }
}
/**
 * sets current readiness level as ERROR
 * @createsAction SET_ERROR
 */
export function setError() {
  return {
    type: SET_ERROR
  }
}

/**
 * searchs the Youtube API for videos w/ the given
 * search criteria.
 * @createsAction FETCH_RESULTS
 * @dispatches SET_RESULTS, SET_LOADING, SET_ERROR
 */
export function fetchResults() {
  return async (dispatch, getState) => {
    dispatch(setLoading())
    const { searchTerms } = getState()
    const numResults = 5 
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerms}&maxResults=${numResults}&type=video&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`
    try {
      const response = await Axios.get(url)
      dispatch(setResults(response.data.items))
    } catch(e) {
      dispatch(setError())
    }
    
  }
}