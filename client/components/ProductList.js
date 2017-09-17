import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from './Products'

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


