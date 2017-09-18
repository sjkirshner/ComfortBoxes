import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import categories from './categories'
import users from './users'
import product from './product'
import currentUser from './user';

const reducer = combineReducers({
  categories,
  users,
  product,
  currentUser });

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
