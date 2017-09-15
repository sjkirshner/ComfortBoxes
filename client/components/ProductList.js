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
        ['Box', 'Sights', 'Tastes', 'Smells', 'Touch', 'Sound'].map((category, i) =>
          <Route
            key={i}
            path={`/buildbox/${category}`}
            render={() => <Products category={category} />}
          />
        )
      }
    </Switch>
  );
}

function Products ({category}) {
  return (
    <div className='productList'>
      {
        [1,2,3,4,5,6,7,8].map(i => {
          return (
            <div key={i} className='product'>
              <img
              src='https://blog.mrprintables.com/wp-content/uploads/2013/10/1_Instant_Comfort_pocket_box_craft_little_gatherer.jpg'
              alt='product_image'/>
              <div>{category} Product</div>
              <button>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
