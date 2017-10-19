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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

var _manifest = __webpack_require__(5);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var AppScripts = function AppScripts() {
  return [_react2.default.createElement('script', { key: 'react', src: _manifest2.default['react.js'] }), _react2.default.createElement('script', { key: 'react-dom', src: _manifest2.default['react-dom.js'] }), _react2.default.createElement('script', { key: 'bundle', src: _manifest2.default['bundle.js'] })];
};

app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
  var content = '\n    <!DOCTYPE html>\n    <html>\n\n    <head>\n    </head>\n\n    <body>\n      <div id="root">' + (0, _server.renderToString)(_react2.default.createElement(_Home2.default, null)) + '</div>\n      ' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(AppScripts, null)) + '\n    </body>\n\n    </html>\n  ';
  res.send(content);
});

module.exports = app;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
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
    ),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return console.log('Hi There');
        } },
      'Click Me'
    )
  );
};

exports.default = Home;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"bundle.js":"js/bundle.a433bc09.js","bundle.js.map":"js/bundle.a433bc09.js.map","react-dom.js":"https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js","react.js":"https://unpkg.com/react@16.0.0/umd/react.production.min.js"}

/***/ })
/******/ ]);