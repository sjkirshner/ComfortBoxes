import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import categories from './categories'
import users from './users'
import currentUser from './user';
import boxes from './boxes';
import products from './products';

const reducer = combineReducers({
  categories,
  users,
  currentUser,
  boxes,
  products });

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
