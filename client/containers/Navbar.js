import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, me } from '../store/user';

/**
 * Navbar Component:
 *   Renders the navbar
 *
 *   exported to /client/routes.js
 */
export class Navbar extends Component {
  componentDidMount () {
    this.props.me();
  }

  render () {
    console.log('currentUser', this.props.currentUser)
    const {currentUser, handleLogout} = this.props;

    return (
      <div className='navbar'>
        <Link to='/' className='navHome'>Home</Link>
        <div className='nav'>
          <Link to='/buildbox/Box'>Build My Box</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/checkout'>Checkout</Link>
          {
            currentUser.email
              ? <a href='' onClick={handleLogout}>Sign Out</a>
              : <Link to='/login'>Log In</Link>
          }
        </div>
      </div>
    );
  }
}

const mapState = ({currentUser}) => ({currentUser});
const mapDispatch = { handleLogout: logout, me }

export default connect(mapState, mapDispatch)(Navbar);
