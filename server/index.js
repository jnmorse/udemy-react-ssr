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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

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

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _UsersList = __webpack_require__(12);

var _UsersList2 = _interopRequireDefault(_UsersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: '/',
  component: _Home2.default,
  exact: true
}, {
  path: '/users',
  component: _UsersList2.default,
  loadData: _UsersList.loadData
}];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// disable eslint for now, probably adding more actions later
/* eslint-disable import/prefer-default-export */
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _reactRenderer = __webpack_require__(8);

var _reactRenderer2 = _interopRequireDefault(_reactRenderer);

var _reduxStore = __webpack_require__(25);

var _reduxStore2 = _interopRequireDefault(_reduxStore);

var _reducers = __webpack_require__(28);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.use((0, _reduxStore2.default)(_reducers2.default));

app.get('*', (0, _reactRenderer2.default)(), function (req, res) {
  res.send(req.html);
});

module.exports = app;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(10);

var _reactRouterConfig = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _manifest = __webpack_require__(24);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppScripts = function AppScripts() {
  return [_react2.default.createElement('script', { key: 'axios', src: _manifest2.default['axios.js'] }), _react2.default.createElement('script', { key: 'react', src: _manifest2.default['react.js'] }), _react2.default.createElement('script', { key: 'react-dom', src: _manifest2.default['react-dom.js'] }), _react2.default.createElement('script', { key: 'react-router-dom', src: _manifest2.default['react-router-dom.js'] }), _react2.default.createElement('script', { key: 'redux', src: _manifest2.default['redux.js'] }), _react2.default.createElement('script', { key: 'react-redux', src: _manifest2.default['react-redux.js'] }), _react2.default.createElement('script', { key: 'redux-thunk', src: _manifest2.default['redux-thunk.js'] }), _react2.default.createElement('script', { key: 'bundle', src: _manifest2.default['bundle.js'] })];
};

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
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    ));
    /* eslint-enable function-paren-newline */

    var scripts = (0, _server.renderToStaticMarkup)(_react2.default.createElement(AppScripts, null));

    var html = '<!DOCTYPE html><html lang="en-US"><head><title>React and Redux SSR</title></head><body><div id="root">' + content + '</div>' + scripts + '</body></html>';

    if (context.url) {
      return res.status(302).send({ Location: context.url });
    }

    req.html = html;

    return next();
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'I\'m the home component'
    )
  );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadData = undefined;

var _getPrototypeOf = __webpack_require__(13);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(16);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(17);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(19);

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
        this.renderUsers()
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

exports.loadData = loadData;
exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = undefined;

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(21);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(22);

var _axios2 = _interopRequireDefault(_axios);

var _api = __webpack_require__(23);

var _api2 = _interopRequireDefault(_api);

var _types = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// disable eslint for now, probably adding more actions later
/* eslint-disable import/prefer-default-export */
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get(_api2.default + '/users');

            case 2:
              res = _context.sent;


              dispatch({
                type: _types.FETCH_USERS,
                payload: res.data
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'https://react-ssr-api.herokuapp.com';

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {"axios.js":"https://unpkg.com/axios@0.16.2/dist/axios.min.js","bundle.js":"js/bundle.b8680895.js","bundle.js.map":"js/bundle.b8680895.js.map","react-dom.js":"https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js","react-redux.js":"https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js","react-router-dom.js":"https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.min.js","react.js":"https://unpkg.com/react@16.0.0/umd/react.production.min.js","redux-thunk.js":"https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.min.js","redux.js":"https://unpkg.com/redux@3.7.2/dist/redux.min.js"}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(26);

var _promise2 = _interopRequireDefault(_promise);

exports.default = reduxStoreMiddleware;

var _redux = __webpack_require__(5);

var _reactRouterConfig = __webpack_require__(1);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    var store = (0, _redux.createStore)(reducers, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
      var route = _ref.route;

      if (!route.loadData) {
        return null;
      }

      return route.loadData(store);
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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _usersReducer = __webpack_require__(29);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersReducer;

var _types = __webpack_require__(4);

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

/***/ })
/******/ ]);