import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import categories from './categories'
import orders from './orders'
import users from './users'
import product from './product'
import currentUser from './user';
import cart from './cart';

const reducer = combineReducers({
  categories,
  users,
  orders,
  product,
  currentUser,
  cart
});

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
