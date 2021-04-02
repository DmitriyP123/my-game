import { createStore } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools())

store.subscribe (() => {
  const state = store.getState()
  window.localStorage.setItem('currentState', JSON.stringify(state))
})

export default store
