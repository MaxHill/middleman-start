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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/* 0 */,
/* 1 */
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./source/javascripts/site.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _constants = __webpack_require__(/*! ./constants */ 2);\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Wrap console log to show arrow functions work\nvar log = function log(text) {\n    console.info(text);\n};\n\n// We have the possibility to have environment specific config\nif (true) {\n    log(_constants2.default.DEV);\n} else if (ENV_PRODUCTION) {\n    log(_constants2.default.PROD);\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvamF2YXNjcmlwdHMvc2l0ZS5qcz84N2MxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnXG5cbi8vIFdyYXAgY29uc29sZSBsb2cgdG8gc2hvdyBhcnJvdyBmdW5jdGlvbnMgd29ya1xubGV0IGxvZyA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc29sZS5pbmZvKHRleHQpO1xufVxuXG4vLyBXZSBoYXZlIHRoZSBwb3NzaWJpbGl0eSB0byBoYXZlIGVudmlyb25tZW50IHNwZWNpZmljIGNvbmZpZ1xuaWYgKEVOVl9ERVZFTE9QTUVOVCkge1xuICAgIGxvZyhjb25zdGFudHMuREVWKTtcbn0gZWxzZSBpZiAoRU5WX1BST0RVQ1RJT04pIHtcbiAgICBsb2coY29uc3RhbnRzLlBST0QpO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc291cmNlL2phdmFzY3JpcHRzL3NpdGUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./source/javascripts/constants.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    DEV: 'Development environment',\n    PROD: 'PRODUCTION environment'\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zb3VyY2UvamF2YXNjcmlwdHMvY29uc3RhbnRzLmpzP2Y3YzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIERFVjogJ0RldmVsb3BtZW50IGVudmlyb25tZW50JyxcbiAgICBQUk9EOiAnUFJPRFVDVElPTiBlbnZpcm9ubWVudCdcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzb3VyY2UvamF2YXNjcmlwdHMvY29uc3RhbnRzLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);