import React, {Component} from 'react';
import { connect } from 'react-redux';
import AuthForm from '../components/AuthForm';
import {auth, me} from '../store/user'

//SIGN UP CONTAINER
/*
 *
 * adds a user from the form to the User model
 * redirect to login
 *
*/
export class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      method: '',
    }
  }

  _login () {
    this.setState({ method: 'login' });
  }

  _signin () {
    this.setState({ method: 'signin' });
  }

  render () {
    console.log(this.state.method)
    return (
      <div>
        <AuthForm
          handleSubmit={this.props.handleSubmit}
          method={this.state.method}>
          <button type='button' onClick={this._login.bind(this)}>Log In</button>
          <button type='button' onClick={this._signin.bind(this)}>Sign In</button>
        </AuthForm>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
      .then(() => dispatch(me()));
    }
  }
}

export default connect(null, mapDispatch)(SignUp);
