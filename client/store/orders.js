import axios from 'axios';

const FETCH_ORDERS = 'FETCH_ORDERS';

export function fetchOrders () {
  return (dispatch, getState) => {
    axios.get('/api/orders')
      .then(res => res.data)
      .then(orders => {
        dispatch({
          type: FETCH_ORDERS,
          orders
      });
    })
  }
}

export default function(state = [], action){
  switch (action.type){
    case FETCH_ORDERS:
      return action.orders;

    default:
      return state;
  }
}
