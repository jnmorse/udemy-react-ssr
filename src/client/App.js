import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const App = () => [
  <Route key="header" {...routes.get('header')} />,
  <Switch key="pages">
    <Route {...routes.get('home')} />
    <Route {...routes.get('users list')} />
    <Route {...routes.get('not found')} />
  </Switch>
]

export default App
