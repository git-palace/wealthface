import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './components/App';

import SignUp from './components/Pages/SignUp';
import ConfirmEmail from './components/Pages/ConfirmEmail';
import Help from './components/Pages/Help'

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/confirm-email" component={ConfirmEmail} />
        <Route exact path="/confirm-email/:token" component={ConfirmEmail} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
