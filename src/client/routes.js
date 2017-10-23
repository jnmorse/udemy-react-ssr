import Home from './pages/Home-Page'
import UsersList from './pages/Users-List-Page'

const routes = new Map()

routes.set('/', { ...Home, exact: true })
routes.set('/users', { ...UsersList })

export default routes
