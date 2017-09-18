import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCopyOfTempShoppingCart, addProductToBox } from '../shoppingCart'

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

  const addAProductToBox = function (event) {
    const shoppingCart = getCopyOfTempShoppingCart()
    const currentBox = localStorage.getItem('currentBoxId')
    console.log(shoppingCart, currentBox)
    if (shoppingCart[currentBox] && category.title === 'Box'){
      console.error('Only one box per box!')
    } else if ((shoppingCart[currentBox] && shoppingCart[currentBox].length <= 10) || category.title === 'Box') {
      addProductToBox(event.target.name)
    } else if (shoppingCart[currentBox] && shoppingCart[currentBox].length > 10) {
        console.error('Only 10 items may be selected per box (excluding box itself). Create another box in order to select more items!')
    } else {
      console.error('Must select a box before other items!');
    }
    console.log('temp shopping cart: ', getCopyOfTempShoppingCart())
  }

  const viewProductDetail = function (event) {
    event.preventDefault()
    <Route
      path={`/buildbox/${product.id}`}
      render={() => <ProductDetail product={product} />}
    />
  }




  return (
    <div className='productList'>
      {
        category.products.map(product => {
          return (
            <div key={product.id} className='product'>
<<<<<<< HEAD
<<<<<<< HEAD
              <img onClick={this.viewProductDetail} src={product.img}/>
=======
              <img src={product.img} />
>>>>>>> master
=======
              <img src={product.img} />
>>>>>>> master
              <div>{product.title}</div>
              <button name={product.id} onClick={addAProductToBox}>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
