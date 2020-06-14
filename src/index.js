import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import store  from './js/store'
import App from './js/components/app'

const browserHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
     <Router history={browserHistory}>
       <App/>
    </Router>
  </Provider>,
  document.getElementById("app")
)