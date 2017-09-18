import React from 'react'

/**
 * COMPONENT
 */
export default function AuthForm (props) {
  const {method, handleSubmit, children} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={method}>
        <div>
          <label htmlFor='email'><small>Email</small></label>
          <input name='email' type='text' />
        </div>
        <div>
          <label htmlFor='password'><small>Password</small></label>
          <input name='password' type='password' />
        </div>
        <div>
          {children}
        </div>
      </form>
      <a id='google' href='/auth/google'>
       { method === 'login' ? 'Log In' : 'Sign In'} with Google
      </a>
    </div>
  )
}
