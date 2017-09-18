import axios from 'axios';
//TEMPLATE
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts (idArray) {
  return (dispatch, getState) => {
    let arr = [];
    idArray.forEach(id => {
      return axios.get(`/api/products/${id}`)
        .then(res => res.data)
        .then(product => {
          arr.push(product)
        })
      }
    )
    dispatch({
      type: FETCH_PRODUCTS,
      products: arr
    });
  }
}

export default function(state = [], action){
  switch (action.type){
    case FETCH_PRODUCTS:
      return action.products;

    default:
      return state;
  }
}
