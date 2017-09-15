import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar Component:
 *   Renders the navbar
 *
 *   exported to /client/routes.js
 */
export default function Navbar () {
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
