import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUsers } from '../store/users';
import { OrderList, UserList } from '../components';
import { fetchOrders } from '../store/orders';

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
    this.handlePromote = this.handlePromote.bind(this);
  }

  componentDidMount () {
    this.props.getUsers();
    this.props.fetchOrders();
  }

  handlePromote (evt) {
    axios.put(`/api/users/${evt.target.value}`)
    .then(res => res.data)
    .then(() => this.props.getUsers());
  }

  handleDelete (evt) {
    axios.delete(`/api/users/${evt.target.value}`)
    .then(() => this.props.getUsers());
  }

  render () {
    return (
      <div id='adminPage'>
        <h2>Hello, Admin. {this.props.currentUser.email}!</h2>
        <OrderList orders={this.props.orders} />
        <UserList
          users={this.props.users}
          handleDelete={this.handleDelete}
          handlePromote={this.handlePromote} />
      </div>
    )
  }
}

const mapState = ({ currentUser, users, orders }) => ({ currentUser, users, orders });
const mapDispatch = { getUsers, fetchOrders };

export default connect(mapState, mapDispatch)(Admin);
