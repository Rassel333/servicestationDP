import './css/common.css';
import './css/index.css';
import './css/order.css';
import './css/profile.css';
import './css/signup-in.css';
import './css/reset.css';
import './css/user-mech-orders.css';
import './css/admin.css';
import './css/order-details.css';
import './css/bootstrap-datetimepicker.min.css';
require("bootstrap-webpack!./bootstrap.config.js");
import 'bootstrap-webpack';
import React from 'react';
import 'font-awesome-webpack';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, hashHistory } from 'react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { redirect } from './middlewares/redirect'
import reducer from './reducers/reducer';
import { routes } from './routes';


const store = createStore(reducer, {}, compose(
  applyMiddleware(
    thunk,
    redirect
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory } routes={routes} />
      
  </Provider>
  ,document.getElementById('app'));

