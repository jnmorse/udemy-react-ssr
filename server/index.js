module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FETCH_USERS = 'fetch_users';
/* harmony export (immutable) */ __webpack_exports__["c"] = FETCH_USERS;

const FETCH_CURRENT_USER = 'fetch_current_user';
/* harmony export (immutable) */ __webpack_exports__["b"] = FETCH_CURRENT_USER;

const FETCH_ADMINS = 'fetch_admins';
/* harmony export (immutable) */ __webpack_exports__["a"] = FETCH_ADMINS;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(4);


const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  return dispatch({
    type: __WEBPACK_IMPORTED_MODULE_0__types__["c" /* FETCH_USERS */],
    payload: res.data
  });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchUsers;


const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const { auth } = getState();

  if (auth) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* FETCH_CURRENT_USER */],
      payload: auth
    });
  }

  const res = await api.get('/current_user');

  return dispatch({
    type: __WEBPACK_IMPORTED_MODULE_0__types__["b" /* FETCH_CURRENT_USER */],
    payload: res.data
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchCurrentUser;


const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  return dispatch({
    type: __WEBPACK_IMPORTED_MODULE_0__types__["a" /* FETCH_ADMINS */],
    payload: res.data
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAdmins;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Home_Page__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_Users_List_Page__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_header__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Not_Found__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Admins__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hocs_require_auth__ = __webpack_require__(29);







const routes = new Map();

routes.set('home', { component: __WEBPACK_IMPORTED_MODULE_0__pages_Home_Page__["a" /* default */], path: '/', exact: true });
routes.set('users list', { component: __WEBPACK_IMPORTED_MODULE_1__pages_Users_List_Page__["a" /* default */], path: '/users' });
routes.set('admins', { component: Object(__WEBPACK_IMPORTED_MODULE_5__hocs_require_auth__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__pages_Admins__["a" /* default */]), path: '/admins' });
routes.set('header', { component: __WEBPACK_IMPORTED_MODULE_2__partials_header__["a" /* default */] });
routes.set('not found', { component: __WEBPACK_IMPORTED_MODULE_3__pages_Not_Found__["a" /* default */] });

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('http://react-ssr-api.herokuapp.com');

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_http_proxy__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express_http_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express_http_proxy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middleware_react_renderer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_redux_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_reducers__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_api__ = __webpack_require__(8);








const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use('/api', __WEBPACK_IMPORTED_MODULE_1_express_http_proxy___default()(`${__WEBPACK_IMPORTED_MODULE_5__utils_api__["a" /* default */]}`, {
  proxyReqOptDecorator(opts) {
    // eslint-disable-next-line no-param-reassign
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

app.get('*', Object(__WEBPACK_IMPORTED_MODULE_3__middleware_redux_store__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__client_reducers__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_2__middleware_react_renderer__["a" /* default */])(), (req, res) => {
  const { html, context } = req;

  if (context.url) {
    return res.redirect(302, context.url);
  } else if (context.notFound) {
    res.status(404);
  }

  return res.send(html);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reactRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_manifest_json__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__public_manifest_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_App__ = __webpack_require__(16);









function reactRenderer() {
  return function renderer(req, res, next) {
    const context = {};

    /* eslint-disable function-paren-newline */
    const content = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
      { store: req.store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"],
        { location: req.path, context: context },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__client_App__["a" /* default */], null)
      )
    ));
    /* eslint-enable function-paren-newline */

    const helmet = __WEBPACK_IMPORTED_MODULE_5_react_helmet__["Helmet"].renderStatic();

    const AppScripts = () => [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['axios.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['object-assign.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['react.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['react-dom.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['react-router-dom.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['redux.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['redux-thunk.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: __WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['react-redux.js'] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: `/${__WEBPACK_IMPORTED_MODULE_6__public_manifest_json___default.a['bundle.js']}` })];

    const html = `
      <!DOCTYPE html>
      <html lang="en-US">

      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>

      <body>
        <div id="root">${content}</div>
        <script>
          window.initState = ${__WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(req.store.getState())}
        </script>
        ${Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToStaticMarkup"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AppScripts, null))}
      </body>
      </html>`;

    req.context = context;
    req.html = html;

    return next();
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"axios.js":"https://unpkg.com/axios@0.16.2/dist/axios.js","bundle.js":"js/bundle.js","bundle.js.map":"js/bundle.js.map","object-assign.js":"https://unpkg.com/@umds/object-assign@4.1.1-beta.24/object-assign.js","react-dom.js":"https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js","react-redux.js":"https://unpkg.com/react-redux@5.0.6/dist/react-redux.js","react-router-dom.js":"https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.js","react.js":"https://unpkg.com/react@16.0.0/umd/react.development.js","redux-thunk.js":"https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.js","redux.js":"https://unpkg.com/redux@3.7.2/dist/redux.js"}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






const App = () => [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], _extends({ key: 'header' }, __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].get('header'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
  { key: 'pages' },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].get('home')),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].get('users list')),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].get('admins')),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].get('not found'))
)];

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);



const Home = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'title',
      null,
      'React SSR'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'React SSR' })
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    { className: 'center-align', style: { marginTop: 200 } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Welcome'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  )
);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(5);






class UserList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    this.props.fetchUsers();
  }

  /* eslint-disable class-methods-use-this */
  head() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        `React SSR: Users List (${this.props.users.length})`
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'Users List' })
    );
  }
  /* eslint-enable class-methods-use-this */

  renderUsers() {
    return this.props.users.map(user => [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { key: user.id },
      user.name
    )]);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container' },
      this.head(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Here\'s a big list of users:'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      )
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

UserList.propTypes = {
  users: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
    name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  })).isRequired,
  fetchUsers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

UserList.loadData = ({ dispatch }) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["c" /* fetchUsers */])());

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { fetchUsers: __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* fetchUsers */] })(UserList));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(5);






/* eslint-disable jsx-a11y/anchor-is-valid */
class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  render() {
    const { auth } = this.props;

    const authButton = auth ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: '/api/logout' },
      'Logout'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: '/api/auth/google' },
      'Login'
    );

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          { className: 'brand-logo left' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
            { to: '/' },
            'React SSR'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
              { to: '/users' },
              'Users'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
              { to: '/admins' },
              'Admins'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            authButton
          )
        )
      )
    );
  }
}

Header.propTypes = {
  fetchCurrentUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  auth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};

Header.loadData = ({ dispatch }) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["b" /* fetchCurrentUser */])());

function mapStateToProps({ auth }) {
  return { auth };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, { fetchCurrentUser: __WEBPACK_IMPORTED_MODULE_4__actions__["b" /* fetchCurrentUser */] })(Header));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);




const NotFound = ({ staticContext }) => {
  // eslint-disable-next-line no-param-reassign
  staticContext.notFound = true;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        'React SSR: 404 Not Found'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      { className: 'center-align', style: { marginTop: 200 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        '404 Not Found'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Sorry the page you where looking for was not found'
      )
    )
  );
};

NotFound.propTypes = {
  staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    url: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    notFound: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
  })
};

NotFound.defaultProps = {
  staticContext: {}
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(5);






class Admins extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  /* eslint-disable class-methods-use-this */
  head() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        'React SSR: List of Admins'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: 'List of Admins' })
    );
  }
  /* eslint-enable class-methods-use-this */

  renderAdmins() {
    return this.props.admins.map(admin => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { key: admin.id },
      admin.name
    ));
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container' },
      this.head(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'List of Admins'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          this.renderAdmins()
        )
      )
    );
  }
}

Admins.propTypes = {
  admins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequied
  })).isRequired,
  fetchAdmins: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

Admins.loadData = ({ dispatch }) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["a" /* fetchAdmins */])());

function mapStateToProps({ admins, auth }) {
  return { admins, auth };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, { fetchAdmins: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* fetchAdmins */] })(Admins));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reduxStoreMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_api__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_routes__ = __webpack_require__(6);








function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    const axiosInstance = __WEBPACK_IMPORTED_MODULE_3_axios___default.a.create({
      baseURL: __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* default */],
      headers: { cookie: req.get('cookie') || '' }
    });

    const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducers, {}, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a.withExtraArgument(axiosInstance)));

    const promises = [];

    __WEBPACK_IMPORTED_MODULE_5__client_routes__["a" /* default */].forEach(route => {
      if (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["matchPath"])(req.path, route)) {
        if (route.component.loadData) {
          promises.push(route.component.loadData(store));
        }
      }
    });

    const promisesWrapper = promises.map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve);
        });
      }

      return null;
    });

    Promise.all(promisesWrapper).then(() => {
      req.store = store;
      next();
    }).catch(() => next('could not get any routes'));
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_reducer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_reducer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admins_reducer__ = __webpack_require__(28);





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({ users: __WEBPACK_IMPORTED_MODULE_1__users_reducer__["a" /* default */], auth: __WEBPACK_IMPORTED_MODULE_2__auth_reducer__["a" /* default */], admins: __WEBPACK_IMPORTED_MODULE_3__admins_reducer__["a" /* default */] }));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usersReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(4);


function usersReducer(state = [], action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["c" /* FETCH_USERS */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function (state = false, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["b" /* FETCH_CURRENT_USER */]:
      {
        return action.payload || false;
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adminsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(4);


function adminsReducer(state = [], action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_types__["a" /* FETCH_ADMINS */]:
      {
        return action.payload;
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);





/* harmony default export */ __webpack_exports__["a"] = (ChildComponent => {
  const RequireAuth = props => {
    switch (props.auth) {
      case false:
        {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Redirect"], { to: '/' });
        }
      case null:
        {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Loading...'
          );
        }
      default:
        {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChildComponent, props);
        }
    }
  };
  /* class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false: {
          return<Redirect to="/" />
        }
        case null: {
          return<div>Loading...</div>
        }
        default: {
          return<ChildComponent {...this.props} />
        }
      }
    }
  } */

  RequireAuth.propTypes = {
    auth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
  };

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(RequireAuth);
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);