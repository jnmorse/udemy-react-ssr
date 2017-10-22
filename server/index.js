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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _reactRenderer = __webpack_require__(5);

var _reactRenderer2 = _interopRequireDefault(_reactRenderer);

var _reduxStore = __webpack_require__(11);

var _reduxStore2 = _interopRequireDefault(_reduxStore);

var _reducers = __webpack_require__(13);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _manifest = __webpack_require__(10);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppScripts = function AppScripts() {
  return [_react2.default.createElement('script', { key: 'react', src: _manifest2.default['react.js'] }), _react2.default.createElement('script', { key: 'react-dom', src: _manifest2.default['react-dom.js'] }), _react2.default.createElement('script', { key: 'react-router-dom', src: _manifest2.default['react-router-dom.js'] }), _react2.default.createElement('script', { key: 'redux', src: _manifest2.default['redux.js'] }), _react2.default.createElement('script', { key: 'react-redux', src: _manifest2.default['react-redux.js'] }), _react2.default.createElement('script', { key: 'redux-thunk', src: _manifest2.default['redux-thunk.js'] }), _react2.default.createElement('script', { key: 'bundle', src: _manifest2.default['bundle.js'] })];
};

function reactRenderer() {
  return function renderer(req, res, next) {
    var context = {};

    var content = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: req.store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: context },
        _react2.default.createElement(_Routes2.default, null)
      )
    ));

    var scripts = (0, _server.renderToStaticMarkup)(_react2.default.createElement(AppScripts, null));

    var html = '<!DOCTYPE html><html lang="en-US"><head></head><body><div id="root">' + content + '</div>' + scripts + '</body></html>';

    if (context.url) {
      return res.status(302).send({ Location: context.url });
    }

    req.html = html;

    return next();
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Not Found'
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { component: NotFound })
  );
};

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {"bundle.js":"js/bundle.2a3db854.js","bundle.js.map":"js/bundle.2a3db854.js.map","react-dom.js":"https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js","react-redux.js":"https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js","react-router-dom.js":"https://unpkg.com/react-router-dom@4.2.2/umd/react-router-dom.min.js","react.js":"https://unpkg.com/react@16.0.0/umd/react.production.min.js","redux-thunk.js":"https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.min.js","redux.js":"https://unpkg.com/redux@3.7.2/dist/redux.min.js"}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduxStoreMiddleware;

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(12);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduxStoreMiddleware(reducers) {
  return function reduxStore(req, res, next) {
    var store = (0, _redux.createStore)(reducers, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    req.store = store;

    next();
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _usersReducer = __webpack_require__(14);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _usersReducer2.default
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersReducer;

var _types = __webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';

/***/ })
/******/ ]);