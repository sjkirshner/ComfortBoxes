import axios from 'axios'
// import history from '../history' --> is history needed for this?

/**
 * ACTION TYPES
 */
const GET_PRODUCT_WITH_CATS = 'GET_PRODUCT_WITH_CATS'

/**
 * INITIAL STATE
 */
const currentProduct = {}

/**
 * ACTION CREATORS
 */
const getProductWithCats = product => ({type: GET_PRODUCT_WITH_CATS, product})

/**
 * THUNK CREATORS
 */
export const fetchProductWithCats = () =>
  dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getProductWithCats(res.data || currentProduct)))
      .catch(err => console.log(err))

// NEED TO ADD FUNCTIONALITY TO BE ABLE TO QUERY THROUGH PRODUCT_CATEGORY TO GET A CATEGORIES BASED ON A PRODUCT REFERENCE.

/**
 * REDUCER
 */
export default function (state = currentProduct, action) {
  switch (action.type) {
    case GET_PRODUCT_WITH_CATS:
      return action.product
    default:
      return state
  }
}
