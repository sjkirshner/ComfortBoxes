import history from './history';
import React, {Component} from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Navbar, TestPage } from './components'
import { BuildBox, SignUp } from './containers'

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
            <Route
              path='/login'
              render={()=><TestPage pageName={'Login Page'}/>} />
            <Route path='/buildbox' component={BuildBox} />
            <Route exact path='/signup' component={SignUp} />
            <Route
              path='/'
              render={()=><TestPage pageName={'Home Page'}/>} />
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
