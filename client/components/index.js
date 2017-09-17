export {default as BuildBox} from './BuildBox';
export {default as Home} from './Home';
export {default as Login} from './Login';
export {default as Navbar} from './Navbar';
export {default as SignUp } from './SignUp';

//create local storage empty shopping cart
if (!localStorage.getItem('numberOfBoxes')) {
  localStorage.setItem('numberOfBoxes', '0');
}
//note: may not accurately reflect the true number of boxes, only the number of boxIds, incrementing from 1 onward, that have already been used. If need true number of boxes, run length of Object.keys on the object returned by shoppingCart.getCopyOfShoppingCart()
