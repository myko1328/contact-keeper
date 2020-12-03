import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer'
import setAuthToken from './utils/setAuthToken'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState()

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState
  currentState = store.getState()
  // if the token changes set the value in localStorage and axios headers
  if (previousState.users.token !== currentState.users.token) {
    const token = currentState.users.token
    setAuthToken(token)
  }
})

export default store
