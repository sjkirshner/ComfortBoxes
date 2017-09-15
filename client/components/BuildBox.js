import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchCategories } from '../store/categories';
import ProductList from './ProductList';

//BUILD BOX CONTAINER
//displays all categories and products for a selected category
export class BuildBox extends Component {
  componentDidMount () {
    // fetch categories
    this.props.fetchCategories();
  }

  render () {
    console.log(this.props.categories);
    return (
      <div id='buildboxPage'>
        <div className='categoryList'>
          {
            ['Box', 'Sights', 'Tastes', 'Smells', 'Touch', 'Sound'].map((title, i) => {
              return (
                  <Link
                    key={i}
                    to={`/buildbox/${title}`}>
                    {title}
                  </Link>
              )
            })
          }
        </div>
        <Switch>
          {
            ['Box', 'Sights', 'Tastes', 'Smells', 'Touch', 'Sound'].map((title, i) =>
              <Route
                key={i}
                path={`/buildbox/${title}`}
                render={() => <ProductList category={title} />}
              />
            )
          }
        </Switch>
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
