(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/directives/wp/directive.js":
/*!****************************************!*\
  !*** ./src/directives/wp/directive.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectionObserver */ \"./src/directives/wp/intersectionObserver.js\");\n\n\nvar defineDirective = function defineDirective(Vue) {\n  // this translates into v-waypoint=\"{ active, callback }\"\n  Vue.directive(\"waypoint\", {\n    inserted: function inserted(el, binding, vnode) {\n      var _binding$value = binding.value,\n          active = _binding$value.active,\n          callback = _binding$value.callback,\n          options = _binding$value.options; // if user asked for activation, activate\n\n      if (active) {\n        var waypoint = Object(_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__[\"addObserver\"])(el, callback, options);\n        vnode._waypoint = waypoint;\n      }\n    },\n    updated: function updated(el, binding, vnode, oldVnode) {\n      var _binding$value2 = binding.value,\n          active = _binding$value2.active,\n          callback = _binding$value2.callback,\n          options = _binding$value2.options; // we remove the old observer anyways\n\n      if (typeof oldVnode._waypoint !== \"undefined\") {\n        Object(_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__[\"removeObserver\"])(oldVnode._waypoint, el);\n      } // if user asked for acivation, activate\n\n\n      if (active) {\n        var waypoint = Object(_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__[\"addObserver\"])(el, callback, options);\n        vnode._waypoint = waypoint;\n      }\n    },\n    unbind: function unbind(el, binding, vnode) {\n      // free up some memory\n      if (typeof vnode._waypoint !== \"undefined\") {\n        Object(_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__[\"removeObserver\"])(vnode._waypoint, el);\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defineDirective);\n\n//# sourceURL=webpack:///./src/directives/wp/directive.js?");

/***/ }),

/***/ "./src/directives/wp/index.js":
/*!************************************!*\
  !*** ./src/directives/wp/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ \"./src/directives/wp/directive.js\");\n/* harmony import */ var _waypointInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waypointInterface */ \"./src/directives/wp/waypointInterface.js\");\n/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intersectionObserver */ \"./src/directives/wp/intersectionObserver.js\");\n\n\n\nvar VueWaypoint = {\n  install: function install(Vue) {\n    // directive's declaration\n    Object(_directive__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Vue); // public api\n\n    Vue.prototype.$addObserver = _intersectionObserver__WEBPACK_IMPORTED_MODULE_2__[\"addObserver\"];\n    Vue.prototype.$removeObserver = _intersectionObserver__WEBPACK_IMPORTED_MODULE_2__[\"removeObserver\"];\n    Vue.prototype.$waypointMap = {\n      GOING_IN: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"GOING_IN\"],\n      GOING_OUT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"GOING_OUT\"],\n      DIRECTION_TOP: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_TOP\"],\n      DIRECTION_RIGHT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_RIGHT\"],\n      DIRECTION_BOTTOM: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_BOTTOM\"],\n      DIRECTION_LEFT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_LEFT\"]\n    };\n  },\n  addObserver: _intersectionObserver__WEBPACK_IMPORTED_MODULE_2__[\"addObserver\"],\n  removeObserver: _intersectionObserver__WEBPACK_IMPORTED_MODULE_2__[\"removeObserver\"],\n  map: {\n    GOING_IN: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"GOING_IN\"],\n    GOING_OUT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"GOING_OUT\"],\n    DIRECTION_TOP: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_TOP\"],\n    DIRECTION_RIGHT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_RIGHT\"],\n    DIRECTION_BOTTOM: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_BOTTOM\"],\n    DIRECTION_LEFT: _waypointInterface__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION_LEFT\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (VueWaypoint); // in-browser load\n\nif (typeof window !== \"undefined\" && window.Vue) {\n  window.Vue.use(VueWaypoint);\n}\n\n//# sourceURL=webpack:///./src/directives/wp/index.js?");

/***/ }),

/***/ "./src/directives/wp/intersectionObserver.js":
/*!***************************************************!*\
  !*** ./src/directives/wp/intersectionObserver.js ***!
  \***************************************************/
/*! exports provided: addObserver, removeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addObserver\", function() { return addObserver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeObserver\", function() { return removeObserver; });\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intersection-observer */ \"./node_modules/intersection-observer/intersection-observer.js\");\n/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _waypointInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waypointInterface */ \"./src/directives/wp/waypointInterface.js\");\n\n\n// polyfill\n\n\nvar defaultObserverOptions = {};\n\nvar observerCallback = function observerCallback(entries, callback) {\n  return entries.forEach(function (entry) {\n    return entryCallback(entry, callback);\n  });\n};\n\nvar entryCallback = function entryCallback(entry, callback) {\n  return callback(Object(_waypointInterface__WEBPACK_IMPORTED_MODULE_3__[\"mapEntry\"])(entry));\n};\n\nvar createObserver = function createObserver(callback, options) {\n  return new window.IntersectionObserver(callback, options);\n};\n\nvar addObserver = function addObserver(el, callback) {\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultObserverOptions;\n  var observer = createObserver( // eslint-disable-next-line no-unused-vars\n  function (entries, observer) {\n    return observerCallback(entries, callback);\n  }, options);\n  observer.observe(el);\n  return observer;\n};\n\nvar removeObserver = function removeObserver(observer, el) {\n  return observer.unobserve(el);\n};\n\n\n\n//# sourceURL=webpack:///./src/directives/wp/intersectionObserver.js?");

/***/ }),

/***/ "./src/directives/wp/waypointInterface.js":
/*!************************************************!*\
  !*** ./src/directives/wp/waypointInterface.js ***!
  \************************************************/
/*! exports provided: going, GOING_IN, GOING_OUT, direction, DIRECTION_TOP, DIRECTION_RIGHT, DIRECTION_BOTTOM, DIRECTION_LEFT, mapEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"going\", function() { return going; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GOING_IN\", function() { return GOING_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GOING_OUT\", function() { return GOING_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"direction\", function() { return direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION_TOP\", function() { return DIRECTION_TOP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION_RIGHT\", function() { return DIRECTION_RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION_BOTTOM\", function() { return DIRECTION_BOTTOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION_LEFT\", function() { return DIRECTION_LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapEntry\", function() { return mapEntry; });\nvar GOING_IN = \"in\";\nvar GOING_OUT = \"out\";\n\nvar going = function going(visibilityRatio) {\n  return visibilityRatio > 0 ? GOING_IN : GOING_OUT;\n};\n\nvar DIRECTION_TOP = \"top\";\nvar DIRECTION_RIGHT = \"right\";\nvar DIRECTION_BOTTOM = \"bottom\";\nvar DIRECTION_LEFT = \"left\";\n\nvar direction = function direction(boundingClientRect, oldBoundingClientRect) {\n  if (boundingClientRect.top < oldBoundingClientRect.top) return DIRECTION_TOP;\n  if (boundingClientRect.left > oldBoundingClientRect.left) return DIRECTION_RIGHT;\n  if (boundingClientRect.top > oldBoundingClientRect.top) return DIRECTION_BOTTOM;\n  if (boundingClientRect.left < oldBoundingClientRect.left) return DIRECTION_LEFT;\n};\n\nvar extractWaypointData = function extractWaypointData(node) {\n  return node._waypointData;\n};\n\nvar extractOldBoundingClientRect = function extractOldBoundingClientRect(node, defaultBoundingClientRect) {\n  var nodeData = extractWaypointData(node);\n  return typeof nodeData !== \"undefined\" ? nodeData : defaultBoundingClientRect;\n};\n\nvar mapEntry = function mapEntry(entry) {\n  var boundingClientRect = entry.boundingClientRect,\n      intersectionRatio = entry.intersectionRatio,\n      target = entry.target;\n  var oldBoundingClientRect = extractOldBoundingClientRect(target, boundingClientRect); // save current rect\n\n  target._waypointData = boundingClientRect;\n  return {\n    el: target,\n    going: going(intersectionRatio),\n    direction: direction(boundingClientRect, oldBoundingClientRect),\n    _entry: entry\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/directives/wp/waypointInterface.js?");

/***/ })

}]);