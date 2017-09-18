import React from 'react';
import { Link } from 'react-router-dom';
import { removeBoxFromShoppingCart, getCopyOfShoppingCart, removeOneInstanceOfProductFromBox } from '../shoppingCart'

export default function Cart () {
  const officialCart = getCopyOfShoppingCart();
  const arrayOfBoxIds = Object.keys(officialCart).map(id => Number(id))


  //note that as of yet, neither deleteBox or deleteProduct are re-rendering the page properly :( have to refresh. Fix this.
const deleteBox = function (boxId) {
  removeBoxFromShoppingCart(boxId)
}

const deleteProduct = function (productId, boxId) {
  removeOneInstanceOfProductFromBox(productId, boxId)
}

  return (
    <div>
      <h1>Shopping Cart</h1>
      {
        arrayOfBoxIds.map((id, index) => (
          <div key={id}>
            <h2>Box #{index + 1}</h2>
            <button onClick={() => deleteBox(id)}>Delete Box from Cart</button> {/* box# here is NOT boxId */}
            {
              officialCart[id].map((productId, ind) => {
                return (
                  <div key={ind}>
                    <h4>Product {productId}</h4>
                    <button onClick={() => deleteProduct(productId, id)}>x</button>
                  </div>
                )
              })
            }
            <hr />
            <br />
          </div>
        ))
      }
      <Link to={'/checkout'}>Checkout</Link>
    </div>
  );
}
