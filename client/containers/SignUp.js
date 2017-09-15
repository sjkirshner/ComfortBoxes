import React, {Component} from 'react';
import { connect } from 'react-redux';
// placeholder for thunk creator

//SIGN UP CONTAINER
/**
 *
 * adds a user from the form to the User model
 *
 : <CategoryList />
 * displays product list corresponding to selected category: <ProductList />
 * redirect to login
 */
export default class SignUp extends Component {
  componentDidMount () {
    // this.props.(name of thunk creator)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log("Pressed submit. Good for you!")
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

// function mapStateToProps(state){
//   return {
//     categories: state.categories,
//   }
// }

// export default connect(
//   null, null
// //  {placeholder for post thunk creator}
// )(SignUp);
