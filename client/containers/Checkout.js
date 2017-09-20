import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { getCopyOfShoppingCart } from '../shoppingCart'
import axios from 'axios';
import { thunkGetCurrentCart } from '../store/cart'
import { connect } from 'react-redux'


export class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount () {
  //   this.props.thunkGetCurrentCart(getCopyOfShoppingCart());
  // }

  handleChange (event) {
    if (event.target.name === 'email') {
      this.setState({
        emailInput: event.target.value
      });
    } else if (event.target.name === 'address') {
      this.setState({
        addressInput: event.target.value
      });
    } else if (event.target.name === 'city') {
      this.setState({
        cityInput: event.target.value
      });
    } else if (event.target.name === 'state') {
      this.setState({
        stateInput: event.target.value
      });
    }

  }

  handleSubmit (event) {
    event.preventDefault()
    const email = this.state.emailInput;
    const address = this.state.addressInput;
    const city = this.state.cityInput;
    const state = this.state.stateInput;
    const storageCart = getCopyOfShoppingCart()
    const boxIds = Object.keys(storageCart);
    // let user = null;
    // if (Object.keys(this.props.user)) { // doesn't know what this is
    //   user = this.props.user;
    // }

    boxIds.forEach(boxId => {
      axios.post('/api/orders/', {
        productIds: storageCart[boxId],
        userId: 1,
        sessionId: 34,                 //get session id
        boxId: Number(boxId),
        shippingDetails: [address, city, state, email]
      })
    })
    this.setState({
      emailInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: ''
    });
    this.setState({
      submitted: true
    });
  }

  render() {
    if (this.state.submitted) {
      return (
        <Redirect to={'/OrderComplete'} />
      )
    }
    return (
      <div>
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Shipping Information</h3>
          <h4>Email Address</h4>
          <input  onChange={this.handleChange} value={this.state.emailInput} placeholder="Email" name="email" />
          <h4>Address</h4>
          <input  onChange={this.handleChange} value={this.state.addressInput} placeholder="Address" name="address" />
          <h4>City</h4>
          <input  onChange={this.handleChange} value={this.state.cityInput} placeholder="City" name="city" />
          <h4>State</h4>
          <input  onChange={this.handleChange} value={this.state.stateInput} placeholder="State" name="state" />
          <button type="submit">Submit Shipping Info</button>
        </form>
      </div>
    );
  }
}




function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {thunkGetCurrentCart})(Checkout)
