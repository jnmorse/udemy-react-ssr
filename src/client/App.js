import React from 'react'
import { Route } from 'react-router-dom'

import routes from './routes'

const App = () => [
  <Route key="header" {...routes.get('header')} />,
  <Route key="home page" {...routes.get('home')} />,
  <Route key="user list" {...routes.get('users list')} />
]

export default App
