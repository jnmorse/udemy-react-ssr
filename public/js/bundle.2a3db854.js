!function(e){function t(n){if(u[n])return u[n].exports;var r=u[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var u={};t.m=e,t.c=u,t.d=function(e,u,n){t.o(e,u)||Object.defineProperty(e,u,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var u=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(u,"a",u),u},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactRouterDOM},function(e,t){e.exports=Redux},function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=u(0),o=n(r),l=u(4),c=u(1),a=u(2),f=u(5),d=n(f),i=u(6),s=u(7),p=n(s),_=u(10),m=n(_),v=(0,a.createStore)(p.default,{},(0,a.applyMiddleware)(d.default));(0,l.hydrate)(o.default.createElement(i.Provider,{store:v},o.default.createElement(c.BrowserRouter,null,o.default.createElement(m.default,null))),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=ReduxThunk},function(e,t){e.exports=ReactRedux},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(2),r=u(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=(0,n.combineReducers)({users:o.default})},function(e,t,u){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.FETCH_USERS:return t.payload;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=u(9)},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.FETCH_USERS="fetch_users"},function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(0),o=n(r),l=u(1),c=u(11),a=n(c),f=function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Not Found"))};t.default=function(){return o.default.createElement(l.Switch,null,o.default.createElement(l.Route,{exact:!0,path:"/",component:a.default}),o.default.createElement(l.Route,{component:f}))}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(){return r.default.createElement("div",null,r.default.createElement("div",null,"I'm the home component"))};t.default=o}]);
//# sourceMappingURL=bundle.2a3db854.js.map