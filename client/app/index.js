import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { store, history } from './services/store'

import Container from './container.js'
import './styles/styles.scss'

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container history={history} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))
