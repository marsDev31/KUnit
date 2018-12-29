import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
export default () => (
  <Switch>
    <Route
      path="/"
      render={({ location, history }) => {
        return <App location={location} history={history} />
      }}
    />
  </Switch>
)
