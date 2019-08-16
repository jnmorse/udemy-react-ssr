import Home from './pages/Home-Page';
import UsersList from './pages/Users-List-Page';
import Header from './partials/header';
import NotFound from './pages/Not-Found';
import Admins from './pages/Admins';
import requireAuth from './hocs/require-auth';

const routes = new Map();

routes.set('home', { component: Home, path: '/', exact: true });
routes.set('users list', { component: UsersList, path: '/users' });
routes.set('admins', { component: requireAuth(Admins), path: '/admins' });
routes.set('header', { component: Header });
routes.set('not found', { component: NotFound });

export default routes;
