import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { removeBoxFromShoppingCart, getCopyOfShoppingCart, removeOneInstanceOfProductFromBox } from '../shoppingCart'
import { thunkGetCurrentCart } from '../store/cart'
import { connect } from 'react-redux'

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.arrayOfBoxIds = Object.keys(this.props.cart).map(id => Number(id))
  }

  componentDidMount () {
    this.props.thunkGetCurrentCart(getCopyOfShoppingCart());
  }

  //note that as of yet, neither deleteBox or deleteProduct are re-rendering the page properly :( have to refresh. Fix this.
  deleteBox (boxId) {
    removeBoxFromShoppingCart(boxId);
    this.props.thunkGetCurrentCart(getCopyOfShoppingCart());
  }

  deleteProduct (productId, boxId, category) {
    if (category !== 'box'){
      removeOneInstanceOfProductFromBox(productId, boxId);this.props.thunkGetCurrentCart(getCopyOfShoppingCart());
    } else {
      alert('Cannot delete box product from box.')
    }
  }

  render() {
    const cart = this.props.cart;
    return (
      <div>
        <h1>Shopping Cart</h1>
        {
          Object.keys(cart).map((boxId, index) => {
            return (
              <div key={boxId}>
              <h2>Box #{index + 1}</h2>
              <button onClick={() => this.deleteBox(boxId)}>Delete Box from Cart</button>
              {
                cart[boxId].map((product, ind) => {
                  return (
                    <div key={ind}>
                      <h4>{product.title}</h4>
                      <h4>${product.price}</h4>
                      <img src={product.img} />
                      <button
                        onClick={() => this.deleteProduct(product.id, boxId, product.categories[0])}>x</button>
                    </div>
                  )
                })
              }
              <hr />
              <br />
            </div>
          )})
        }
        <Link to={'/checkout'}>Checkout</Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

// this.props.getProducts()
export default connect(
  mapStateToProps,
  {thunkGetCurrentCart}
)(Cart)
