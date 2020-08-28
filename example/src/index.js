import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { makeReducer } from 'redux-helper-np'
import { Provider } from 'react-redux'

const allReducer = combineReducers({
  counter: makeReducer('counter', { count: 0 }),
  users: makeReducer('users'),
  custom: makeReducer('custom', { text: 'Initial unchanged text' })
})

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
