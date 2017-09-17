import React, {Component} from 'react';
import { connect } from 'react-redux';

//SIGN UP CONTAINER
/*
 *
 * adds a user from the form to the User model
 * redirect to login
 *
*/
export class Home extends Component {

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <h2>{this.props.currentUser.email}</h2>
      </div>
    )
  }
}

const mapState = ({currentUser}) => ({currentUser});

export default connect(mapState, null)(Home);
