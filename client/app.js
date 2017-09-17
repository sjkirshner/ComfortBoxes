import history from './history';
import React, {Component} from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Navbar, TestPage } from './components'
import { BuildBox, SignUp, Home } from './containers'

/**
 * COMPONENT
 */
export default class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route
              path='/checkout'
              render={()=><TestPage pageName={'Checkout Page'}/>} />
            <Route path='/buildbox' component={BuildBox} />
            <Route path='/signup' component={SignUp} />
            <Route path='/' component={Home}/>
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
