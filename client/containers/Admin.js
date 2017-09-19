import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUsers } from '../store/users';

//SIGN UP CONTAINER
/*
 *
 * adds a user from the form to the User model
 * redirect to login
 *
*/
export class Admin extends Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount () {
    this.props.getUsers();
  }

  handleDelete (evt) {
    console.log(evt.target.value)
    axios.delete(`/api/users/${evt.target.value}`);
    this.props.getUsers();
  }

  render () {
    return (
      <div>
        <h1>Admin Page</h1>
        <h2>{this.props.currentUser.email}</h2>
        <ul>
          {
            this.props.users.map(user => (
              <li key={user.id}>
                {user.email}
                <button
                  value={user.id}
                  onClick={this.handleDelete}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapState = ({ currentUser, users }) => ({ currentUser, users });
const mapDispatch = { getUsers };

export default connect(mapState, mapDispatch)(Admin);
