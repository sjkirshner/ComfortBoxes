
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createBoxInShoppingCart,removeBoxFromShoppingCart, getCopyOfShoppingCart, addProductToBox } from '../shoppingCart'
import { fetchProduct } from '../store/product';
import { connect } from 'react-redux';

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(typeof this.props.match.params.id)
  }

  componentDidMount () {
    // fetch categories from DB
    this.props.fetchProduct(13)   //
    console.log('Match.params', this.props.match.params.id)
  }

  // addProductToCart (event) {
  //   const shoppingCart = getCopyOfShoppingCart()
  //   const currentBox = localStorage.getItem('currentBoxId')
  //   console.log(this.props)
  //   // if (shoppingCart[currentBox] && category.title === 'Box'){
  //   //   console.error('Only one box per box!')
  //   // } else if ((shoppingCart[currentBox] && shoppingCart[currentBox].length <= 10) || category.title === 'Box') {
  //   //   addProductToBox(event.target.name)
    // } else if (shoppingCart[currentBox] && shoppingCart[currentBox].length > 10) {
    //     console.error('Only 10 items may be selected per box (excluding box itself). Create another box in order to select more items!')
    // } else {
    //   console.error('Must select a box before other items!');
    // }
    // console.log('shopping cart: ', getCopyOfShoppingCart())
  // }

  render () {
    console.log("Render")
    return (
      <div className='productList'>
        <div key={this.props.product.id} className='product'>
          <img src={this.props.product.img}/>
          <h1>{this.props.product.title}</h1>
          <p>Description: {this.props.product.description}</p>
          <p>Price: {this.props.product.price}</p>
          <button name={this.props.product.id} onClick={this.addProductToCart}>Add</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    product: state.product,
  }
}

function mapDispatchToProps(dispatch){
  //const id = ?????.params.id
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
