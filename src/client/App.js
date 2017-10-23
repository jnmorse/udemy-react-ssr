import React from 'react'
import { Route } from 'react-router-dom'

import routes from './routes'

const App = () => [
  <Route key="home page" path="/" {...routes.get('/')} />,
  <Route key="user list" path="/users" {...routes.get('/users')} />
]

export default App
