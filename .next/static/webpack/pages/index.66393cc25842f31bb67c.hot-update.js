webpackHotUpdate_N_E("pages/index",{

/***/ "./assets/img1.jpg":
false,

/***/ "./assets/img1.png":
/*!*************************!*\
  !*** ./assets/img1.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img1-a4dcdad5d7be5013281565b9f5de606e.png";

/***/ }),

/***/ "./components/Menu/Cards.js":
/*!**********************************!*\
  !*** ./components/Menu/Cards.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Menu/Card.js");
/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img1.png */ "./assets/img1.png");
/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img2.jpg */ "./assets/img2.jpg");
/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img3.jpg */ "./assets/img3.jpg");
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\Menu\\Cards.js",
    _this = undefined;





var cards = [{
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

var Cards = function Cards() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container d-flex justify-content-center align-items-center h-100",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: cards.map(function (element) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
            title: element.title,
            img: element.img,
            social: element.social
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, _this)
        }, element.id, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, _this);
};

_c = Cards;
/* harmony default export */ __webpack_exports__["default"] = (Cards);

var _c;

$RefreshReg$(_c, "Cards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2ltZzEucG5nIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUvQ2FyZHMuanMiXSwibmFtZXMiOlsiY2FyZHMiLCJpZCIsInRpdGxlIiwiaW1nIiwiaW1nT25lIiwic29jaWFsIiwiaW1nVGhyZWUiLCJpbWdUd28iLCJDYXJkcyIsIm1hcCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxXQUZYO0FBR0lDLEtBQUcsRUFBRUMsdURBSFQ7QUFJSUMsUUFBTSxFQUFFO0FBSlosQ0FEVSxFQU9WO0FBQ0lKLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxhQUZYO0FBR0lDLEtBQUcsRUFBRUcsdURBSFQ7QUFJSUQsUUFBTSxFQUFFO0FBSlosQ0FQVSxFQWFWO0FBQ0lKLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxPQUZYO0FBR0lDLEtBQUcsRUFBRUksdURBSFQ7QUFJSUYsUUFBTSxFQUFFO0FBSlosQ0FiVSxDQUFkOztBQXNCQSxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLHNCQUNaO0FBQUssYUFBUyxFQUFDLGtFQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNLUixLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFBQyxPQUFPO0FBQUEsNEJBQ3BCO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0UscUVBQUMsNkNBQUQ7QUFBTyxpQkFBSyxFQUFFQSxPQUFPLENBQUNSLEtBQXRCO0FBQTZCLGVBQUcsRUFBRVEsT0FBTyxDQUFDUCxHQUExQztBQUErQyxrQkFBTSxFQUFFTyxPQUFPLENBQUNMO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUErQkssT0FBTyxDQUFDVCxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1PLEs7QUFZU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjYzOTNjYzI1ODQyZjMxYmI2N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbWcxLWE0ZGNkYWQ1ZDdiZTUwMTMyODE1NjViOWY1ZGU2MDZlLnBuZ1wiOyIsImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IGltZ09uZSBmcm9tICcuLi8uLi9hc3NldHMvaW1nMS5wbmcnXHJcbmltcG9ydCBpbWdUd28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZzIuanBnJ1xyXG5pbXBvcnQgaW1nVGhyZWUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZzMuanBnJ1xyXG5cclxuY29uc3QgY2FyZHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICAgICAgaW1nOiBpbWdPbmUsXHJcbiAgICAgICAgc29jaWFsOiAnQGFsZnJlZG8tcml2YXMtamltZW5leidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6IFwiUGhvdG9ncmFwaHlcIixcclxuICAgICAgICBpbWc6IGltZ1RocmVlLFxyXG4gICAgICAgIHNvY2lhbDogJ0BqaXJ6b19uZXonXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiBcIkJvb2tzXCIsXHJcbiAgICAgICAgaW1nOiBpbWdUd28sXHJcbiAgICAgICAgc29jaWFsOiAnamlyenBfcmV2aWV3J1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgQ2FyZHMgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7Y2FyZHMubWFwKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17ZWxlbWVudC5pZH0+XHJcbiAgICAgICAgICA8Q2FyZCAgdGl0bGU9e2VsZW1lbnQudGl0bGV9IGltZz17ZWxlbWVudC5pbWd9IHNvY2lhbD17ZWxlbWVudC5zb2NpYWx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==