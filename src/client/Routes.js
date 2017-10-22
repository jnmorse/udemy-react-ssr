import Home from './pages/Home-Page'
import UsersList from './pages/Users-List-Page'

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    path: '/users',
    ...UsersList
  }
]
