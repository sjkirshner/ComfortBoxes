import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { removeBoxFromShoppingCart, getCopyOfShoppingCart, removeOneInstanceOfProductFromBox } from '../shoppingCart'
import { fetchProducts } from '../store/products'
import { connect } from 'react-redux'

export class Cart extends Component {
  constructor(props) {
    super(props)
    this.officialCart = getCopyOfShoppingCart();
    this.arrayOfBoxIds = Object.keys(this.officialCart).map(id => Number(id))
    this.obj = {}
  }

  componentDidMount () {
    this.arrayOfBoxIds.forEach(boxId => {
      return this.props.getProducts(this.officialCart[boxId])
        .then(() => {
          this.obj[boxId] = this.props.products
        })
    })

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
    console.log('obj: ', this.obj)
    return (
      <div>
        <h1>Shopping Cart</h1>
        {
          this.arrayOfBoxIds.map((boxId, index) => (
            <div key={boxId}>
              <h2>Box #{index + 1}</h2>
              <button onClick={() => this.deleteBox(boxId)}>Delete Box from Cart</button> {/* box# here is NOT boxId */}
              {
                this.obj[boxId].map((product, ind) => {
                  return (
                    <div key={ind}>
                      <h4>Product {product.id}: {product.title}</h4>
                      <button onClick={() => this.deleteProduct(product.id, boxId)}>x</button>
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
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getProducts(idArray) {
      dispatch(fetchProducts(idArray))
    }
  }
}
// this.props.getProducts()
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
