
import React from 'react';
import { getCopyOfTempShoppingCart, addProductToBox } from '../shoppingCart'
import { fetchProduct } from '../store/product';
import { fetchCategories } from '../store/categories';
import { connect } from 'react-redux';
import { CategoryList } from '../components'

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.addProductToCart = this.addProductToCart.bind(this)
  }

  componentDidMount () {
    // fetch categories from DB
    this.props.fetchProduct(this.props.match.params.id)
    this.props.fetchCategories()
  }

  addProductToCart (event) {
    console.log('product is', this.props.product)
    const shoppingCart = getCopyOfTempShoppingCart()
    const currentBox = localStorage.getItem('currentBoxId')
    const categoryTitle = this.props.product.categories[0].title
    console.log(categoryTitle)
    console.log(localStorage.getItem('currentBoxId'))
    if (shoppingCart[currentBox] && categoryTitle === 'Box'){
      alert('Only one box per box!')
    } else if ((shoppingCart[currentBox] && shoppingCart[currentBox].length <= 10) || categoryTitle === 'Box') {
      addProductToBox(event.target.name)
      alert('Successfully added ' + this.props.product.title + ' to your box in progress. Click on the links above to explore some more treasures for your senses!')
    } else if (shoppingCart[currentBox] && shoppingCart[currentBox].length > 10) {
        alert('Only 10 items may be selected per box (excluding box itself). Create another box in order to select more items!')
    } else {
      alert('Must select a box before other items!');
    console.log('shopping cart: ', getCopyOfTempShoppingCart())
    }
  }

  render () {
    console.log("Render")
    return (
      <div id='detailsPage' className='productList'>
        <CategoryList categories={this.props.categories} />
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

function mapStateToProps(state){
  return {
    product: state.product,
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchProduct(id){
      dispatch(fetchProduct(id))
    },
    fetchCategories(){
      dispatch(fetchCategories())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
