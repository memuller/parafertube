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
 * searchs the Youtube API for videos w/ the given
 * search criteria.
 * @createsAction FETCH_RESULTS
 * @dispatches SET_RESULTS 
 */
export function fetchResults() {
  return async (dispatch, getState) => {
    const { searchTerms } = getState()
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerms}&maxResults=20&type=video&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`

    const response = await Axios.get(url)
    dispatch(setResults(response.data.items))
  }
}