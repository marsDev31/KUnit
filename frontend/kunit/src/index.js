import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/css/index.css'
import registerServiceWorker from './registerServiceWorker'
import RouteCustom from './Route'

ReactDOM.render(
  <Router>
    <RouteCustom />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
