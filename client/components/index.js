export {default as TestPage } from './TestPage';
export {default as CategoryList } from './CategoryList';
export {default as ProductList } from './ProductList';
export {default as Checkout } from './Checkout';
export {default as AuthForm } from './AuthForm';

//create local storage empty shopping cart
if (!localStorage.getItem('numberOfBoxes')) {
  localStorage.setItem('numberOfBoxes', '0');
}
//note: may not accurately reflect the true number of boxes, only the number of boxIds, incrementing from 1 onward, that have already been used. If need true number of boxes, run length of Object.keys on the object returned by shoppingCart.getCopyOfShoppingCart()
