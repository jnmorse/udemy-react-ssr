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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/manifest.json":
/*!******************************!*\
  !*** ./public/manifest.json ***!
  \******************************/
/*! exports provided: bundle.js, bundle.js.map, react.js, react-router-dom.js, redux.js, react-redux.js, react-dom.js, redux-thunk.js, axios.js, prop-types.js, react-side-effect.js, object-assign.js, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"bundle.js\\\":\\\"js/bundle.js\\\",\\\"bundle.js.map\\\":\\\"js/bundle.js.map\\\",\\\"react.js\\\":\\\"https://unpkg.com/react@16.9.0/umd/react.development.js\\\",\\\"react-router-dom.js\\\":\\\"https://unpkg.com/react-router-dom@5.0.1/umd/react-router-dom.js\\\",\\\"redux.js\\\":\\\"https://unpkg.com/redux@4.0.4/dist/redux.js\\\",\\\"react-redux.js\\\":\\\"https://unpkg.com/react-redux@7.1.1/dist/react-redux.js\\\",\\\"react-dom.js\\\":\\\"https://unpkg.com/react-dom@16.9.0/umd/react-dom.development.js\\\",\\\"redux-thunk.js\\\":\\\"https://unpkg.com/redux-thunk@2.3.0/dist/redux-thunk.js\\\",\\\"axios.js\\\":\\\"https://unpkg.com/axios@0.19.0/dist/axios.js\\\",\\\"prop-types.js\\\":\\\"https://unpkg.com/prop-types@15.7.2/prop-types.js\\\",\\\"react-side-effect.js\\\":\\\"https://unpkg.com/react-side-effect@1.1.5/lib/index.umd.js\\\",\\\"object-assign.js\\\":\\\"https://unpkg.com/@umds/object-assign@4.1.1-beta.24/object-assign.js\\\"}\");\n\n//# sourceURL=webpack:///./public/manifest.json?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./src/client/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst App = () => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({\n  key: \"header\"\n}, _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('header'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n  key: \"pages\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('home')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('users list')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('admins')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('not found')))];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: fetchAdmins, fetchCurrentUser, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAdmins\", function() { return fetchAdmins; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCurrentUser\", function() { return fetchCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/client/actions/types.js\");\n\n\nconst fetchUsers = () => async (dispatch, getState, api) => {\n  const res = await api.get('/users');\n  return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USERS\"],\n    payload: res.data\n  });\n};\n\nconst fetchCurrentUser = () => async (dispatch, getState, api) => {\n  const {\n    auth\n  } = getState();\n\n  if (auth) {\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"],\n      payload: auth\n    });\n  }\n\n  const res = await api.get('/current_user');\n  return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"],\n    payload: res.data\n  });\n};\n\nconst fetchAdmins = () => async (dispatch, getState, api) => {\n  const res = await api.get('/admins');\n  return dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ADMINS\"],\n    payload: res.data\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/actions/types.js":
/*!*************************************!*\
  !*** ./src/client/actions/types.js ***!
  \*************************************/
/*! exports provided: FETCH_ADMINS, FETCH_USERS, FETCH_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ADMINS\", function() { return FETCH_ADMINS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CURRENT_USER\", function() { return FETCH_CURRENT_USER; });\nconst FETCH_USERS = 'fetch_users';\nconst FETCH_CURRENT_USER = 'fetch_current_user';\nconst FETCH_ADMINS = 'fetch_admins';\n\n\n//# sourceURL=webpack:///./src/client/actions/types.js?");

/***/ }),

/***/ "./src/client/hocs/require-auth.js":
/*!*****************************************!*\
  !*** ./src/client/hocs/require-auth.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChildComponent => {\n  const RequireAuth = props => {\n    switch (props.auth) {\n      case false:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n            to: \"/\"\n          });\n        }\n\n      case null:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n        }\n\n      default:\n        {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, props);\n        }\n    }\n  };\n\n  RequireAuth.propTypes = {\n    auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired\n  };\n\n  if (ChildComponent.loadData) {\n    RequireAuth.loadData = ChildComponent.loadData;\n  }\n\n  function mapStateToProps({\n    auth\n  }) {\n    return {\n      auth\n    };\n  }\n\n  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(RequireAuth);\n});\n\n//# sourceURL=webpack:///./src/client/hocs/require-auth.js?");

/***/ }),

/***/ "./src/client/pages/Admins.js":
/*!************************************!*\
  !*** ./src/client/pages/Admins.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n\n\nclass Admins extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    // eslint-disable-next-line react/destructuring-assignment\n    this.props.fetchAdmins();\n  }\n  /* eslint-disable class-methods-use-this */\n\n\n  head() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React SSR: List of Admins\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"List of Admins\"\n    }));\n  }\n  /* eslint-enable class-methods-use-this */\n\n\n  renderAdmins() {\n    const {\n      admins\n    } = this.props;\n    return admins.map(admin => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: admin.id\n    }, admin.name));\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, this.head(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"List of Admins\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.renderAdmins())));\n  }\n\n}\n\n_defineProperty(Admins, \"propTypes\", {\n  admins: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequied\n  })).isRequired,\n  fetchAdmins: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n});\n\nAdmins.loadData = ({\n  dispatch\n}) => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchAdmins\"])());\n\nfunction mapStateToProps({\n  admins,\n  auth\n}) {\n  return {\n    admins,\n    auth\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  fetchAdmins: _actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchAdmins\"]\n})(Admins));\n\n//# sourceURL=webpack:///./src/client/pages/Admins.js?");

/***/ }),

/***/ "./src/client/pages/Home-Page.js":
/*!***************************************!*\
  !*** ./src/client/pages/Home-Page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React SSR\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n  property: \"og:title\",\n  content: \"React SSR\"\n})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n  className: \"center-align\",\n  style: {\n    marginTop: 200\n  }\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Welcome\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Check out these awesome features\")));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/client/pages/Home-Page.js?");

/***/ }),

/***/ "./src/client/pages/Not-Found.js":
/*!***************************************!*\
  !*** ./src/client/pages/Not-Found.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst NotFound = ({\n  staticContext\n}) => {\n  // eslint-disable-next-line no-param-reassign\n  staticContext.notFound = true;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"React SSR: 404 Not Found\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"center-align\",\n    style: {\n      marginTop: 200\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"404 Not Found\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Sorry the page you where looking for was not found\")));\n};\n\nNotFound.propTypes = {\n  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    notFound: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n  })\n};\nNotFound.defaultProps = {\n  staticContext: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/client/pages/Not-Found.js?");

/***/ }),

/***/ "./src/client/pages/Users-List-Page.js":
/*!*********************************************!*\
  !*** ./src/client/pages/Users-List-Page.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n\n\nclass UserList extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    // eslint-disable-next-line react/destructuring-assignment\n    this.props.fetchUsers();\n  }\n  /* eslint-disable class-methods-use-this */\n\n\n  head() {\n    const {\n      users\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, `React SSR: Users List (${users.length})`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Users List\"\n    }));\n  }\n  /* eslint-enable class-methods-use-this */\n\n\n  renderUsers() {\n    const {\n      users\n    } = this.props;\n    return users.map(user => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: user.id\n    }, user.name)]);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, this.head(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Here's a big list of users:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.renderUsers())));\n  }\n\n}\n\n_defineProperty(UserList, \"propTypes\", {\n  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,\n    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n  })).isRequired,\n  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n});\n\nfunction mapStateToProps({\n  users\n}) {\n  return {\n    users\n  };\n}\n\nUserList.loadData = ({\n  dispatch\n}) => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"])());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  fetchUsers: _actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchUsers\"]\n})(UserList));\n\n//# sourceURL=webpack:///./src/client/pages/Users-List-Page.js?");

/***/ }),

/***/ "./src/client/partials/header.js":
/*!***************************************!*\
  !*** ./src/client/partials/header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    // eslint-disable-next-line react/destructuring-assignment\n    this.props.fetchCurrentUser();\n  }\n\n  render() {\n    const {\n      auth\n    } = this.props;\n    const authButton = auth ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"/api/logout\"\n    }, \"Logout\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"/api/auth/google\"\n    }, \"Login\");\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n      className: \"brand-logo left\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/\"\n    }, \"React SSR\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"right\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/users\"\n    }, \"Users\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/admins\"\n    }, \"Admins\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, authButton))));\n  }\n\n}\n\nHeader.propTypes = {\n  fetchCurrentUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired\n};\n\nHeader.loadData = ({\n  dispatch\n}) => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchCurrentUser\"])());\n\nfunction mapStateToProps({\n  auth\n}) {\n  return {\n    auth\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  fetchCurrentUser: _actions__WEBPACK_IMPORTED_MODULE_4__[\"fetchCurrentUser\"]\n})(Header));\n\n//# sourceURL=webpack:///./src/client/partials/header.js?");

/***/ }),

/***/ "./src/client/reducers/admins-reducer.js":
/*!***********************************************!*\
  !*** ./src/client/reducers/admins-reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return adminsReducer; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\n// eslint-disable-next-line import/no-relative-parent-imports\n\nfunction adminsReducer(state = [], action) {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_ADMINS\"]:\n      {\n        return action.payload;\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n}\n\n//# sourceURL=webpack:///./src/client/reducers/admins-reducer.js?");

/***/ }),

/***/ "./src/client/reducers/auth-reducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/auth-reducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\n// eslint-disable-next-line import/no-relative-parent-imports\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state = false, action) {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_CURRENT_USER\"]:\n      {\n        return action.payload || false;\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/auth-reducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-reducer */ \"./src/client/reducers/users-reducer.js\");\n/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-reducer */ \"./src/client/reducers/auth-reducer.js\");\n/* harmony import */ var _admins_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admins-reducer */ \"./src/client/reducers/admins-reducer.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _users_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  admins: _admins_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/users-reducer.js":
/*!**********************************************!*\
  !*** ./src/client/reducers/users-reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return usersReducer; });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/client/actions/types.js\");\n// eslint-disable-next-line import/no-relative-parent-imports\n\nfunction usersReducer(state = [], action) {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USERS\"]:\n      {\n        return action.payload;\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n}\n\n//# sourceURL=webpack:///./src/client/reducers/users-reducer.js?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Home_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home-Page */ \"./src/client/pages/Home-Page.js\");\n/* harmony import */ var _pages_Users_List_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Users-List-Page */ \"./src/client/pages/Users-List-Page.js\");\n/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/header */ \"./src/client/partials/header.js\");\n/* harmony import */ var _pages_Not_Found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Not-Found */ \"./src/client/pages/Not-Found.js\");\n/* harmony import */ var _pages_Admins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Admins */ \"./src/client/pages/Admins.js\");\n/* harmony import */ var _hocs_require_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hocs/require-auth */ \"./src/client/hocs/require-auth.js\");\n\n\n\n\n\n\nconst routes = new Map();\nroutes.set('home', {\n  component: _pages_Home_Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  path: '/',\n  exact: true\n});\nroutes.set('users list', {\n  component: _pages_Users_List_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  path: '/users'\n});\nroutes.set('admins', {\n  component: Object(_hocs_require_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_pages_Admins__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n  path: '/admins'\n});\nroutes.set('header', {\n  component: _partials_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  path: '*'\n});\nroutes.set('not found', {\n  component: _pages_Not_Found__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/react-renderer */ \"./src/middleware/react-renderer.js\");\n/* harmony import */ var _middleware_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware/redux-store */ \"./src/middleware/redux-store.js\");\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/reducers */ \"./src/client/reducers/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()(`${_utils_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}`, {\n  proxyReqOptDecorator(opts) {\n    // eslint-disable-next-line no-param-reassign\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.get('*', Object(_middleware_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), Object(_middleware_react_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (req, res) => {\n  const {\n    html,\n    context\n  } = req;\n\n  if (context.url) {\n    return res.redirect(302, context.url);\n  } else if (context.notFound) {\n    res.status(404);\n  }\n\n  return res.send(html);\n});\napp.get('*', (req, res) => {\n  res.sendStatus(404);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middleware/react-renderer.js":
/*!******************************************!*\
  !*** ./src/middleware/react-renderer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reactRenderer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/manifest.json */ \"./public/manifest.json\");\nvar _public_manifest_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/manifest.json */ \"./public/manifest.json\", 1);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n\n\n\n\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n\n/* eslint-disable max-lines-per-function */\n\nfunction reactRenderer() {\n  return function renderer(req, res, next) {\n    const context = {};\n    const content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: req.store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: req.path,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n    const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic();\n\n    const AppScripts = () => [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['axios.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['object-assign.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['react.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['react-dom.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['react-router-dom.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['redux.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['redux-thunk.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: _public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['react-redux.js']\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n      src: `/${_public_manifest_json__WEBPACK_IMPORTED_MODULE_6__['bundle.js']}`\n    })];\n\n    const html = `\n      <!DOCTYPE html>\n      <html lang=\"en-US\">\n\n      <head>\n        ${helmet.title.toString()}\n        ${helmet.meta.toString()}\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\n      </head>\n\n      <body>\n        <div id=\"root\">${content}</div>\n        <script>\n          window.initState = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(req.store.getState())}\n        </script>\n        ${Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToStaticMarkup\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppScripts, null))}\n      </body>\n      </html>`;\n    req.context = context;\n    req.html = html;\n    return next();\n  };\n}\n/* eslint-enable max-lines-per-function */\n\n//# sourceURL=webpack:///./src/middleware/react-renderer.js?");

/***/ }),

/***/ "./src/middleware/redux-store.js":
/*!***************************************!*\
  !*** ./src/middleware/redux-store.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reduxStoreMiddleware; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _client_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/routes */ \"./src/client/routes.js\");\n\n\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n // eslint-disable-next-line import/no-relative-parent-imports\n\n\nfunction reduxStoreMiddleware(reducers) {\n  return function reduxStore(req, res, next) {\n    const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n      baseURL: _utils_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      headers: {\n        cookie: req.get('cookie') || ''\n      }\n    });\n    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a.withExtraArgument(axiosInstance)));\n    const promises = [];\n    _client_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].forEach((route, name) => {\n      if (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"matchPath\"])(req.path, route)) {\n        console.log(name, route);\n\n        if (route.component.loadData) {\n          promises.push(route.component.loadData(store));\n        }\n      }\n    });\n    const promisesWrapper = promises.map(promise => {\n      if (promise) {\n        return new Promise(resolve => {\n          promise.then(resolve).catch(resolve);\n        });\n      }\n\n      return null;\n    });\n    Promise.all(promisesWrapper).then(() => {\n      req.store = store;\n      next();\n    }).catch(() => next('could not get any routes'));\n  };\n}\n\n//# sourceURL=webpack:///./src/middleware/redux-store.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('http://react-ssr-api.herokuapp.com');\n\n//# sourceURL=webpack:///./src/utils/api.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });