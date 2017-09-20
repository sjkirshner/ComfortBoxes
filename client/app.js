import history from './history';
import React from 'react'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import { Checkout } from './components'
import { BuildBox, SignUp, Cart, Home, Navbar, Admin, ProductDetail } from './containers'

/**
 * COMPONENT
 */
export default function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' render={Checkout} />
          <Route path='/buildbox' component={BuildBox} />
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/login' component={SignUp} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}





// {
//   isLoggedIn &&
//     <Switch>
//       {/* Routes placed here are only available after logging in */}
//       <Route path='/home' component={UserHome} />
//     </Switch>
// }
