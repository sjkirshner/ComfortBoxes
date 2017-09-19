// import './boilerplate/index.scss'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import store from './boilerplate/store'
// import Routes from './boilerplate/routes'

// // establishes socket connection
// import './boilerplate/socket'

import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './app'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
