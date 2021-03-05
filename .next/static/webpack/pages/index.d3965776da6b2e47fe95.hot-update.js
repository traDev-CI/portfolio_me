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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L0NhcmRzLmpzIl0sIm5hbWVzIjpbImNhcmRzIiwiaWQiLCJ0aXRsZSIsImltZyIsImltZ09uZSIsInNvY2lhbCIsImltZ1RocmVlIiwiaW1nVHdvIiwiQ2FyZHMiLCJtYXAiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsV0FGWDtBQUdJQyxLQUFHLEVBQUVDLHVEQUhUO0FBSUlDLFFBQU0sRUFBRTtBQUpaLENBRFUsRUFPVjtBQUNJSixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxLQUFHLEVBQUVHLHVEQUhUO0FBSUlELFFBQU0sRUFBRTtBQUpaLENBUFUsRUFhVjtBQUNJSixJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsT0FGWDtBQUdJQyxLQUFHLEVBQUVJLHVEQUhUO0FBSUlGLFFBQU0sRUFBRTtBQUpaLENBYlUsQ0FBZDs7QUFzQkEsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDWjtBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS1IsS0FBSyxDQUFDUyxHQUFOLENBQVUsVUFBQUMsT0FBTztBQUFBLDRCQUNwQjtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNFLHFFQUFDLDZDQUFEO0FBQU8saUJBQUssRUFBRUEsT0FBTyxDQUFDUixLQUF0QjtBQUE2QixlQUFHLEVBQUVRLE9BQU8sQ0FBQ1AsR0FBMUM7QUFBK0Msa0JBQU0sRUFBRU8sT0FBTyxDQUFDTDtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBK0JLLE9BQU8sQ0FBQ1QsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztLQUFNTyxLO0FBWVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzOTY1Nzc2ZGE2YjJlNDdmZTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBpbWdPbmUgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZzEuanBnJ1xyXG5pbXBvcnQgaW1nVHdvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcyLnBuZydcclxuaW1wb3J0IGltZ1RocmVlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWczLmpwZydcclxuXHJcbmNvbnN0IGNhcmRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiBcIlBvcnRmb2xpb1wiLFxyXG4gICAgICAgIGltZzogaW1nT25lLFxyXG4gICAgICAgIHNvY2lhbDogJ0BhbGZyZWRvLXJpdmFzLWppbWVuZXonXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiBcIlBob3RvZ3JhcGh5XCIsXHJcbiAgICAgICAgaW1nOiBpbWdUaHJlZSxcclxuICAgICAgICBzb2NpYWw6ICdAamlyem9fbmV6J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0aXRsZTogXCJCb29rc1wiLFxyXG4gICAgICAgIGltZzogaW1nVHdvLFxyXG4gICAgICAgIHNvY2lhbDogJ2ppcnpwX3JldmlldydcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IENhcmRzID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge2NhcmRzLm1hcChlbGVtZW50ID0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e2VsZW1lbnQuaWR9PlxyXG4gICAgICAgICAgPENhcmQgIHRpdGxlPXtlbGVtZW50LnRpdGxlfSBpbWc9e2VsZW1lbnQuaW1nfSBzb2NpYWw9e2VsZW1lbnQuc29jaWFsfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=