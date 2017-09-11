import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>Hello, FullstackTRIO! You rock!! WOO!!</div>
  </Provider>,
  document.getElementById('main') // make sure this is the same as the id of the div in your index.html
);
