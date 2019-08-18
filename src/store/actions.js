import Axios from "axios"

export const SELECT_VIDEO = 'SELECT_VIDEO'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_RESULTS = 'SET_RESULTS'
export const FETCH_RESULTS = 'FETCH_RESULTS'


/**
 * sets currently loaded results
 * @createsAction SET_RESULTS
 * @param {Object[]} results 
 */
export function setResults(results) {
  return {
    type: SET_RESULTS,
    id: results
  }
}

/**
 * searchs the Youtube API for videos w/ the given
 * search criteria.
 * @createsAction FETCH_RESULTS
 * @dispatches SET_RESULTS
 * @param {string} searchTerms 
 */
export function fetchResults(searchTerms) {
  return async (dispatch) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${searchTerms}&maxResults=20&type=video&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`

    const response = await Axios.get(url)
    dispatch(setResults(response.data.items))
  }
}