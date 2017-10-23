import React from 'react'
import { Route } from 'react-router-dom'

import routes from './routes'

// const HomeRoute = routes.get('/')

const { loadData, ...UsersRoute } = routes.get('/users')

const App = () => [
  <Route key="home page" path="/" {...routes.get('/')} />,
  <Route key="user list" path="/users" {...UsersRoute} />
]

export default App
