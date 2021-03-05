webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img1.jpg */ "./assets/img1.jpg");
/* harmony import */ var _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img2.png */ "./assets/img2.png");
/* harmony import */ var _assets_img2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img3.jpg */ "./assets/img3.jpg");
/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Alfredo\\Documents\\Blog\\components\\Menu\\Cards.js",
    _this = undefined;





var cards = [{
  id: 1,
  title: "Portfolio",
  img: _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  social: '@alfredo-rivas-jimenez'
}, {
  id: 2,
  title: "Photography",
  img: _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  social: '@jirzo_nez'
}, {
  id: 3,
  title: "Books",
  img: _assets_img2_png__WEBPACK_IMPORTED_MODULE_3___default.a,
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
            id: element.id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L0NhcmRzLmpzIl0sIm5hbWVzIjpbImNhcmRzIiwiaWQiLCJ0aXRsZSIsImltZyIsImltZ09uZSIsInNvY2lhbCIsImltZ1RocmVlIiwiaW1nVHdvIiwiQ2FyZHMiLCJtYXAiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsV0FGWDtBQUdJQyxLQUFHLEVBQUVDLHVEQUhUO0FBSUlDLFFBQU0sRUFBRTtBQUpaLENBRFUsRUFPVjtBQUNJSixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxLQUFHLEVBQUVHLHVEQUhUO0FBSUlELFFBQU0sRUFBRTtBQUpaLENBUFUsRUFhVjtBQUNJSixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsT0FGWDtBQUdJQyxLQUFHLEVBQUVJLHVEQUhUO0FBSUlGLFFBQU0sRUFBRTtBQUpaLENBYlUsQ0FBZDs7QUFzQkEsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS1IsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQUMsT0FBTztBQUFBLDRCQUNwQjtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNFLHFFQUFDLDZDQUFEO0FBQU0sY0FBRSxFQUFFQSxPQUFPLENBQUNULEVBQWxCO0FBQXNCLGlCQUFLLEVBQUVTLE9BQU8sQ0FBQ1IsS0FBckM7QUFBNEMsZUFBRyxFQUFFUSxPQUFPLENBQUNQLEdBQXpEO0FBQThELGtCQUFNLEVBQUVPLE9BQU8sQ0FBQ0w7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQStCSyxPQUFPLENBQUNULEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTU8sSztBQVlTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOGVhYmExNWU1M2E4ZDA1OTJhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgaW1nT25lIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcxLmpwZydcclxuaW1wb3J0IGltZ1R3byBmcm9tICcuLi8uLi9hc3NldHMvaW1nMi5wbmcnXHJcbmltcG9ydCBpbWdUaHJlZSBmcm9tICcuLi8uLi9hc3NldHMvaW1nMy5qcGcnXHJcblxyXG5jb25zdCBjYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJQb3J0Zm9saW9cIixcclxuICAgICAgICBpbWc6IGltZ09uZSxcclxuICAgICAgICBzb2NpYWw6ICdAYWxmcmVkby1yaXZhcy1qaW1lbmV6J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJQaG90b2dyYXBoeVwiLFxyXG4gICAgICAgIGltZzogaW1nVGhyZWUsXHJcbiAgICAgICAgc29jaWFsOiAnQGppcnpvX25leidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IFwiQm9va3NcIixcclxuICAgICAgICBpbWc6IGltZ1R3byxcclxuICAgICAgICBzb2NpYWw6ICdqaXJ6cF9yZXZpZXcnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCBDYXJkcyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtjYXJkcy5tYXAoZWxlbWVudCA9PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtlbGVtZW50LmlkfT5cclxuICAgICAgICAgIDxDYXJkIGlkPXtlbGVtZW50LmlkfSB0aXRsZT17ZWxlbWVudC50aXRsZX0gaW1nPXtlbGVtZW50LmltZ30gc29jaWFsPXtlbGVtZW50LnNvY2lhbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9