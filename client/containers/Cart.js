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


    // this.arrayOfBoxIds.forEach(boxId => {
    //   return this.props.getProducts(this.officialCart[boxId])
    //     .then(() => {
    //       this.obj[boxId] = this.props.products
    //     })
    // })

    //for each id in box array, fetch products array, and pass that array into this.props.getProducts(ARRAY HERE)
  }

  //note that as of yet, neither deleteBox or deleteProduct are re-rendering the page properly :( have to refresh. Fix this.
  deleteBox (boxId) {
    removeBoxFromShoppingCart(boxId)
  }

  deleteProduct (productId, boxId) {
   removeOneInstanceOfProductFromBox(productId, boxId)
  }
  render() {
    console.log('current cart: ', this.props.cart)
    console.log('current cart keys: ', Object.keys(this.props.cart))

    const cart = this.props.cart;
    return (
      <div>
        <h1>Shopping Cart</h1>
        {
          Object.keys(cart).map((boxId, index) => {
            console.log('cart2', cart['2']);
            return (
              <div key={boxId}>
              <h2>Box #{index + 1}</h2>
              <button onClick={() => this.deleteBox(boxId)}>Delete Box from Cart</button>
              {
                cart[boxId].map((product, ind) => {
                  return (
                    <div key={ind}>
                      <h1>Sangooooow</h1>
                      <h4>Product {product.id}: {product.title}</h4>
                      <button onClick={() => this.deleteProduct(product.id, boxId)}>x</button>
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
