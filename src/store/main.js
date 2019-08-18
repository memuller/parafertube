import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import initialState from './initialState'
import reducer from './reducer'

export default createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
)