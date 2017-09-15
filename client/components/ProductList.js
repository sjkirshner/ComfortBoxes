import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * ProductList component:
 *   When user clicks a category Link from CategoryList,
 *   corresponding Route is rendered here
 *
 * Products component:
 *   Renders all products of a category
 */
export default function ProductList ({categories}) {
  return (
    <Switch>
      {
        categories.map((category, i) =>
          <Route
            key={i}
            path={`/buildbox/${category.title}`}
            render={() => <Products category={category} />}
          />
        )
      }
    </Switch>
  );
}

function Products ({category}) {
  console.log(category)
  return (
    <div className='productList'>
      {
        category.products.map(product => {
          return (
            <div key={product.id} className='product'>
              <img src={product.img}/>
              <div>{product.title}</div>
              <button>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
