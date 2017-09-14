import history from './history';
import React, {Component} from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Navbar, Login, SignUp, Home, BuildBox } from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/buildbox' component={BuildBox} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}


// {
//   isLoggedIn &&
//     <Switch>
//       {/* Routes placed here are only available after logging in */}
//       <Route path='/home' component={UserHome} />
//     </Switch>
// }
