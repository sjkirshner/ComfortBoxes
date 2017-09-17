import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUser } from '../store/users'
//SIGN UP CONTAINER
/*
 *
 * adds a user from the form to the User model
 * redirect to login
 *
*/
export class SignUp extends Component {
  componentDidMount () {
    this.props.signup()
  }

  handleSubmit (event) {
    event.preventDefault()
    const signupDetails = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    this.props.signup(signupDetails)
    console.log('Submitted a new user. Good for you!')
  }

  render () {
    return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)} name={name}>
            <div>
              <label htmlFor='email'><small>Email</small></label>
              <input name='email' type='text' />
            </div>
            <div>
              <label htmlFor='password'><small>Password</small></label>
              <input name='password' type='password' />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
    )
  }
}

const mapDispatch = { signup: addUser };

function mapStateToProps(state){
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, mapDispatch)(SignUp);
