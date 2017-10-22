import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'

const NotFound = () => (
  <div>
    <p>Not Found</p>
  </div>
)

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)
