module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img1.png":
/*!*************************!*\
  !*** ./assets/img1.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img1-ce81bcc9849fb8fc72fd37cdde902164.png";

/***/ }),

/***/ "./assets/img2.jpg":
/*!*************************!*\
  !*** ./assets/img2.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img2-31f37ee528f1cf1d32c9a17d61ffe420.jpg";

/***/ }),

/***/ "./assets/img3.jpg":
/*!*************************!*\
  !*** ./assets/img3.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img3-9be8088ddfe3c414229772f44307ccb1.jpg";

/***/ }),

/***/ "./components/Menu/Card.js":
/*!*********************************!*\
  !*** ./components/Menu/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\Menu\\Card.js";

const Card = ({
  id,
  title,
  img,
  social
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "profile-card-2",
  onClick: () => console.log("HOLA"),
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
    className: "img img-responsive img-fluid",
    src: img,
    alt: "Image one"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 13
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "profile-name",
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 13
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "profile-username",
    children: social
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Menu/Cards.js":
/*!**********************************!*\
  !*** ./components/Menu/Cards.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Menu/Card.js");
/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img1.png */ "./assets/img1.png");
/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img2.jpg */ "./assets/img2.jpg");
/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img3.jpg */ "./assets/img3.jpg");
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\Menu\\Cards.js";




const cards = [{
  id: 1,
  title: "Portfolio",
  img: _assets_img1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  social: '@alfredo-rivas-jimenez'
}, {
  id: 2,
  title: "Photography",
  img: _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  social: '@jirzo_nez'
}, {
  id: 3,
  title: "Books",
  img: _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  social: 'jirzp_review'
}];

const Cards = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "container d-flex justify-content-center align-items-center h-100",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "row",
    children: cards.map(element => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: element.title,
        img: element.img,
        social: element.social
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)
    }, element.id, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 29,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ "./components/Menu/Cards.js");

var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\Menu\\Menu.js";


const Menu = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "menu",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Cards__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/PrincipalLayout/PrincipalLayout.js":
/*!*******************************************************!*\
  !*** ./components/PrincipalLayout/PrincipalLayout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.js");


var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\PrincipalLayout\\PrincipalLayout.js";



const PrincipalLAyout = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "container"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), children]
}, void 0, true);

/* harmony default export */ __webpack_exports__["default"] = (PrincipalLAyout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PrincipalLayout_PrincipalLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PrincipalLayout/PrincipalLayout */ "./components/PrincipalLayout/PrincipalLayout.js");


var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\pages\\index.js";


const index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PrincipalLayout_PrincipalLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZzEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcyLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nMy5qcGciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51L0NhcmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudS9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJpbmNpcGFsTGF5b3V0L1ByaW5jaXBhbExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhcmQiLCJpZCIsInRpdGxlIiwiaW1nIiwic29jaWFsIiwiY29uc29sZSIsImxvZyIsImNhcmRzIiwiaW1nT25lIiwiaW1nVGhyZWUiLCJpbWdUd28iLCJDYXJkcyIsIm1hcCIsImVsZW1lbnQiLCJNZW51IiwiUHJpbmNpcGFsTEF5b3V0IiwiY2hpbGRyZW4iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtBLFFBRkw7QUFBQSxnQkFESjs7QUFPZUQsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOztBQUNBLE1BQU1FLEtBQUssR0FBRyxtQkFDVjtBQUFBLHlCQUNJLHFFQUFDLG1GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixpQkFESjs7QUFRZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNUQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMS1jZTgxYmNjOTg0OWZiOGZjNzJmZDM3Y2RkZTkwMjE2NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMi0zMWYzN2VlNTI4ZjFjZjFkMzJjOWExN2Q2MWZmZTQyMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMy05YmU4MDg4ZGRmZTNjNDE0MjI5NzcyZjQ0MzA3Y2NiMS5qcGdcIjsiLCJcclxuY29uc3QgQ2FyZCA9ICh7aWQsIHRpdGxlLCBpbWcsIHNvY2lhbH0pID0+KFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNhcmQtMlwiIG9uQ2xpY2s9eyAoKSA9PiBjb25zb2xlLmxvZyhcIkhPTEFcIil9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZyBpbWctcmVzcG9uc2l2ZSBpbWctZmx1aWRcIiBzcmM9e2ltZ30gIGFsdD1cIkltYWdlIG9uZVwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1uYW1lXCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj57c29jaWFsfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgaW1nT25lIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcxLnBuZydcclxuaW1wb3J0IGltZ1R3byBmcm9tICcuLi8uLi9hc3NldHMvaW1nMi5qcGcnXHJcbmltcG9ydCBpbWdUaHJlZSBmcm9tICcuLi8uLi9hc3NldHMvaW1nMy5qcGcnXHJcblxyXG5jb25zdCBjYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJQb3J0Zm9saW9cIixcclxuICAgICAgICBpbWc6IGltZ09uZSxcclxuICAgICAgICBzb2NpYWw6ICdAYWxmcmVkby1yaXZhcy1qaW1lbmV6J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJQaG90b2dyYXBoeVwiLFxyXG4gICAgICAgIGltZzogaW1nVGhyZWUsXHJcbiAgICAgICAgc29jaWFsOiAnQGppcnpvX25leidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IFwiQm9va3NcIixcclxuICAgICAgICBpbWc6IGltZ1R3byxcclxuICAgICAgICBzb2NpYWw6ICdqaXJ6cF9yZXZpZXcnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBDYXJkcyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtjYXJkcy5tYXAoZWxlbWVudCA9PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtlbGVtZW50LmlkfT5cclxuICAgICAgICAgIDxDYXJkICB0aXRsZT17ZWxlbWVudC50aXRsZX0gaW1nPXtlbGVtZW50LmltZ30gc29jaWFsPXtlbGVtZW50LnNvY2lhbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xyXG4iLCJpbXBvcnQgQ2FyZHMgZnJvbSBcIi4vQ2FyZHNcIjtcclxuY29uc3QgTWVudSA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgIDxDYXJkcyAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51L01lbnUnO1xyXG5jb25zdCBQcmluY2lwYWxMQXlvdXQgPSAoe2NoaWxkcmVufSkgPT4oXHJcbiAgICA8PlxyXG4gICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW5jaXBhbExBeW91dDtcclxuIiwiaW1wb3J0IFByaW5jaXBhbExBeW91dCBmcm9tICcuLi9jb21wb25lbnRzL1ByaW5jaXBhbExheW91dC9QcmluY2lwYWxMYXlvdXQnO1xyXG5jb25zdCBpbmRleCA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPFByaW5jaXBhbExBeW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9QcmluY2lwYWxMQXlvdXQ+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9