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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(23);

var _assign2 = _interopRequireDefault(_assign);

var _map = __webpack_require__(24);

var _map2 = _interopRequireDefault(_map);

var _HomePage = __webpack_require__(25);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersListPage = __webpack_require__(26);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _header = __webpack_require__(29);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _map2.default();

routes.set('home', (0, _assign2.default)({ path: '/' }, _HomePage2.default, { exact: true }));
routes.set('users list', (0, _assign2.default)({ path: '/users' }, _UsersListPage2.default));
routes.set('header', (0, _assign2.default)({}, _header2.default));

exports.default = routes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCurrentUser = exports.fetchUsers = undefined;

var _regenerator = __webpack_require__(27);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(28);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _types = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState, api) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;
              return _context.abrupt('return', dispatch({
                type: _types.FETCH_USERS,
                payload: res.data
              }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState, api) {
      var _getState, auth, res;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState = getState(), auth = _getState.auth;

              if (!auth) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return', dispatch({
                type: _types.FETCH_CURRENT_USER,
                payload: auth
              }));

            case 3:
              _context2.next = 5;
              return api.get('/current_user');

            case 5:
              res = _context2.sent;
              return _context2.abrupt('return', dispatch({
                type: _types.FETCH_CURRENT_USER,
                payload: res.data
              }));

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'http://react-ssr-api.herokuapp.com';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(16);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRenderer = __webpack_require__(17);

var _reactRenderer2 = _interopRequireDefault(_reactRenderer);

var _reduxStore = __webpack_require__(30);

var _reduxStore2 = _interopRequireDefault(_reduxStore);

var _reducers = __webpack_require__(34);

var _reducers2 = _interopRequireDefault(_reducers);

var _api = __webpack_require__(13);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('' + _api2.default, {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    // eslint-disable-next-line no-param-reassign
    opts.headers['x-forwarded-host'] = 'localhost:3000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', (0, _reduxStore2.default)(_reducers2.default), (0, _reactRenderer2.default)(), function (req, res, next) {
  if (req.html) {
    res.send(req.html);
  } else {
    next(0);
  }
});

app.get('*', function (req, res) {
  res.sendStatus(404);
});

module.exports = app;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(19);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _manifest = __webpack_require__(20);

var _manifest2 = _interopRequireDefault(_manifest);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reactRenderer() {
  return function renderer(req, res, next) {
    var context = {};

    /* eslint-disable function-paren-newline */
    var content = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: req.store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(_App2.default, null)
      )
    ));
    /* eslint-enable function-paren-newline */

    var AppScripts = function AppScripts() {
      return [_react2.default.createElement('script', { src: _manifest2.default['axios.js'] }), _react2.default.createElement('script', { src: _manifest2.default['object-assign.js'] }), _react2.default.createElement('script', { src: _manifest2.default['react.js'] }), _react2.default.createElement('script', { src: _manifest2.default['react-dom.js'] }), _react2.default.createElement('script', { src: _manifest2.default['react-router-dom.js'] }), _react2.default.createElement('script', { src: _manifest2.default['redux.js'] }), _react2.default.createElement('script', { src: _manifest2.default['redux-thunk.js'] }), _react2.default.createElement('script', { src: _manifest2.default['react-redux.js'] }), _react2.default.createElement('script', { src: '/' + _manifest2.default['bundle.js'] })];
    };

    var html = '\n      <!DOCTYPE html>\n      <html lang="en-US">\n\n      <head>\n        <title>React and Redux SSR</title>\n      </head>\n\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.initState = ' + (0, _serializeJavascript2.default)(req.store.getState()) + '\n        </script>\n        ' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(AppScripts, null)) + '\n      </body>\n      </html>';

    if (context.url) {
      return res.status(302).send({ Location: context.url });
    }

    req.html = html;

    return next();
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"axios.js":"https://unpkg.com/axios@0.16.2/dist/axios.js","bundle.js":"js/bundle.js","bundle.js.map":"js/bundle.js.map","object-assign.js":"https://unpkg.com/@umds/object-assign@4.1.1-beta.24/object-assign.js","react-dom.js":"https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js","react-redux.js":"https://unpkg.com/react-redux@5.0.6/dist/react-redux.js","react-router-dom.js":"https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.js","react.js":"https://unpkg.com/react@16.0.0/umd/react.development.js","redux-thunk.js":"https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.js","redux.js":"https://unpkg.com/redux@3.7.2/dist/redux.js"}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(22);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return [_react2.default.createElement(_reactRouterDom.Route, (0, _extends3.default)({ key: 'header' }, _routes2.default.get('header'))), _react2.default.createElement(_reactRouterDom.Route, (0, _extends3.default)({ key: 'home page' }, _routes2.default.get('home'))), _react2.default.createElement(_reactRouterDom.Route, (0, _extends3.default)({ key: 'user list' }, _routes2.default.get('users list')))];
};

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/map");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return [_react2.default.createElement(
    'div',
    { key: '1' },
    'I\'m the home component'
  )];
};

exports.default = {
  component: Home
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function (_Component) {
  (0, _inherits3.default)(UserList, _Component);

  function UserList() {
    (0, _classCallCheck3.default)(this, UserList);
    return (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).apply(this, arguments));
  }

  (0, _createClass3.default)(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: 'renderUsers',
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return [_react2.default.createElement(
          'li',
          { key: user.id },
          user.name
        )];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Here\'s a big list of users:',
        _react2.default.createElement(
          'ul',
          null,
          this.renderUsers()
        )
      );
    }
  }]);
  return UserList;
}(_react.Component);

function mapStateToProps(_ref) {
  var users = _ref.users;

  return { users: users };
}

UserList.propTypes = {
  users: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  fetchUsers: _propTypes2.default.func.isRequired
};

function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList),
  loadData: loadData
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchCurrentUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var auth = this.props.auth;


      var authButton = auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
      );

      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'React SSR'
            )
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/users' },
                'Users'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/admins' },
                'Admins'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              authButton
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component);

Header.propTypes = {
  fetchCurrentUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]).isRequired
};

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return { auth: auth };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchCurrentUser: _actions.fetchCurrentUser })(Header),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(31);

var _promise2 = _interopRequireDefault(_promise);

exports.default = reduxStoreMiddleware;

var _redux = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(1);

var _reduxThunk = __webpack_require__(32);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _api = __webpack_require__(13);

var _api2 = _interopRequireDefault(_api);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    var axiosInstance = _axios2.default.create({
      baseURL: _api2.default,
      headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(reducers, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    var promises = [];

    _routes2.default.forEach(function (route) {
      if ((0, _reactRouterDom.matchPath)(req.path, route)) {
        if (route.loadData) {
          promises.push(route.loadData(store));
        }
      }
    });

    _promise2.default.all(promises).then(function () {
      req.store = store;
      next();
    }).catch(function () {
      return next('could not get any routes');
    });
  };
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _usersReducer = __webpack_require__(35);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(36);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ users: _usersReducer2.default, auth: _authReducer2.default });

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersReducer;

var _types = __webpack_require__(3);

function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_USERS:
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_CURRENT_USER:
      {
        return action.payload || false;
      }

    default:
      {
        return state;
      }
  }
};

var _types = __webpack_require__(3);

/***/ })
/******/ ]);