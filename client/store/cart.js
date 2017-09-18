/**
 * localStorage has id of box, products
 * {
  1: [12, 14, 8, 2, 19, 12],  // note that product ids may be repeated if customer purchased more than one of that item for that box
  3: [18, 6, 3, 24, 11],
  4: [22, 20, 7, 13, 9, 17, 18, 4]
}
 */

 /**
  * thunk with mapping
  */

import axios from 'axios';
//TEMPLATE
const GET_CURRENT_CART = 'GET_CURRENT_CART';

export function thunkGetCurrentCart (cart) {
  let storeCart = {};
  const arrayOfBoxIds = Object.keys(cart);
  arrayOfBoxIds.forEach(boxId => {
    storeCart[boxId] = [];
    cart[boxId].forEach(productId => {
      return axios.get(`/api/products/${productId}`)
      .then(res => res.data)
      .then(product => storeCart[boxId].push(product))
    })
  })

  return (dispatch, getState) => {
    dispatch({
      type: GET_CURRENT_CART,
      cart: storeCart,
    })
  }
}

export default function(state = {}, action){
  switch (action.type){
    case GET_CURRENT_CART:
      return action.cart;

    default:
      return state;
  }
}
