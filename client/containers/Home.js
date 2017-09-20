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
      <div id='homePage'>
        <div id='welcome'>
          <h1><b>Welcome</b></h1>
          <h3><b>{this.props.currentUser.email || ''}</b></h3>
          <h4>Find your comfort with a <b>comfort box</b></h4>
          <h5 id='description' >Our comfort boxes are designed to ground you during times of stress<br/>by engaging all of your senses with the items <b>you</b> find most comforting</h5>
      </div>
      </div>
    )
  }
}

const mapState = ({currentUser}) => ({currentUser});

export default connect(mapState, null)(Home);
