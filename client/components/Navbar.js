import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <Link to='/' className='navHome'>Home</Link>
        <div className='nav'>
          <Link to='/buildbox'>Build My Box</Link>
          <Link to='/signup'>Shopping Cart</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    );
  }
}
