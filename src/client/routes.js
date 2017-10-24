import Home from './pages/Home-Page'
import UsersList from './pages/Users-List-Page'
import Header from './partials/header'
import NotFound from './pages/Not-Found'

const routes = new Map()

routes.set('home', { ...Home, path: '/', exact: true })
routes.set('users list', { ...UsersList, path: '/users' })
routes.set('header', { ...Header })
routes.set('not found', { ...NotFound })

export default routes
