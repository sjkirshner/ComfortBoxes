
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router'
import { createBoxInShoppingCart,removeBoxFromShoppingCart, getCopyOfShoppingCart, getCopyOfTempShoppingCart, addProductToBox } from '../shoppingCart'
import { fetchProduct } from '../store/product';
import { connect } from 'react-redux';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.addProductToCart = this.addProductToCart.bind(this)
  }

  componentDidMount () {
    // fetch categories from DB
    this.props.fetchProduct(this.props.match.params.id)
  }

  addProductToCart (event) {
    const shoppingCart = getCopyOfTempShoppingCart()
    const currentBox = localStorage.getItem('currentBoxId')
    const categoryTitle = this.props.product.categories[0].title
    console.log(categoryTitle)
    console.log(localStorage.getItem('currentBoxId'))
    if (shoppingCart[currentBox] && categoryTitle === 'Box'){
      alert('Only one box per box!')
    } else if ((shoppingCart[currentBox] && shoppingCart[currentBox].length <= 10) || categoryTitle === 'Box') {
      addProductToBox(event.target.name)
    } else if (shoppingCart[currentBox] && shoppingCart[currentBox].length > 10) {
        alert('Only 10 items may be selected per box (excluding box itself). Create another box in order to select more items!')
    } else {
      alert('Must select a box before other items!');
    }
    console.log('shopping cart: ', getCopyOfTempShoppingCart())
  }

  render () {
    console.log("Render")
    return (
      <div className='productList'>
        <div key={this.props.product.id} className='product'>
          <img src={this.props.product.img}/>
          <h1>{this.props.product.title}</h1>
          <h3>Description</h3>
          <p>{this.props.product.description}</p>
          <p>Price: ${this.props.product.price}</p>
          <button name={this.props.product.id} onClick={this.addProductToCart}>Add</button>
        </div>
      </div>
    );
  }
}

//*** Work in progress Back Button ****
// <button name={this.props.product.id} onClick={browserHistory.goBack}>Back To Category Page</button>

function mapStateToProps(state){
  return {
    product: state.product,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchProduct(id){
      dispatch(fetchProduct(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
