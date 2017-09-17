import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../store/categories';
import {
  ProductList,
  CategoryList,
} from '../components';

//BUILD BOX CONTAINER
/**
 * BUILD BOX CONTAINER
 *
 * displays category list: <CategoryList />
 * displays product list corresponding to selected category: <ProductList />
 *
 * mapSTP: Fetches categories array from store
 * mapDTP: brings in thunk that populates category list in DB
 *
 */

//Need to add logic to default to 'Box' category when clicking 'BuildBox'

export class BuildBox extends Component {
  componentDidMount () {
    // fetch categories from DB
    this.props.fetchCategories();
  }

  render () {
    console.log(this.props.categories);
    return (
      <div id='buildboxPage'>
        <CategoryList categories={this.props.categories} />
        <ProductList categories={this.props.categories} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    categories: state.categories,
  }
}

export default connect(
  mapStateToProps,
  {fetchCategories}
)(BuildBox);
