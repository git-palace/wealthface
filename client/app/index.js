import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App';

import Home from './components/Pages/Home';
import ConfirmEmail from './components/Pages/ConfirmEmail';
import Help from './components/Pages/Help'

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
