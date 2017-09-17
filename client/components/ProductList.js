import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBoxInShoppingCart, getCopyOfShoppingCart, addProductToBox } from '../shoppingCart'

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

  const addProductToCart = function (event) {
    event.preventDefault()
    console.log(event.target.name)
    if (category.title === 'Box') {
      //const shoppingCart = getCopyOfShoppingCart()
      // Need to add functionality to prevent user from selecting more than one box per box using currentBox attribute of shopping cart. This may or may not happen here.
      createBoxInShoppingCart(event.target.name)
    } else {
      addProductToBox(event.target.name)
    }
    console.log(getCopyOfShoppingCart())
  }

  return (
    <div className='productList'>
      {
        category.products.map(product => {
          return (
            <div key={product.id} className='product'>
              <img src={product.img}/>
              <div>{product.title}</div>
              <button name={product.id} onClick={addProductToCart}>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
