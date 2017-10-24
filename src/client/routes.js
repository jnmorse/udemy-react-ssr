import Home from './pages/Home-Page'
import UsersList from './pages/Users-List-Page'
import Header from './partials/header'

const routes = new Map()

routes.set('home', { path: '/', ...Home, exact: true })
routes.set('users list', { path: '/users', ...UsersList })
routes.set('header', { ...Header })

export default routes
