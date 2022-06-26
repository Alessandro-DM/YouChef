import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import { chefReducer } from './singleChef'
import { chefsReducer } from './allChefs'
import { hireCartReducer } from './hireCart'


const reducer = combineReducers({
  auth,
  allChefs: chefsReducer,
  singleChef: chefReducer,
  // allUsers: usersReducer,
  // singleUser: userReducer,
  hireCart: hireCartReducer,
  // checkout: checkoutReducer,
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
