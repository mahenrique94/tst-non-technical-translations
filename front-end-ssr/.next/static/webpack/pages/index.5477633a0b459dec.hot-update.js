"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar App = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('pt'), language = ref[0], updateLanguage = ref[1];\n    var i18n = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().i18n;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(props);\n    var handleChangeLanguage = function(event) {\n        updateLanguage(event.target.value);\n        i18n.changeLanguage(event.target.value);\n        console.log(event.target.value);\n        router.push('/', '/', {\n            locale: event.target.value\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Tst Translations\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                onChange: handleChangeLanguage,\n                value: language,\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"pt\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: i18n.t('labels.portuguese')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"en\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: i18n.t('labels.english')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"es\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: i18n.t('labels.spanish')\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: i18n.t('titles.welcome')\n            })\n        ]\n    }));\n};\n_s(App, \"m6mnfhdNhWGBEOGWmi6ByQHRbvc=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = App;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUNhO0FBRU47OztBQUV2QyxHQUFLLENBQUNJLEdBQUcsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUN0QixHQUFLLENBQThCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsQ0FBSSxNQUF6Q0ssUUFBUSxHQUFvQkwsR0FBYyxLQUFoQ00sY0FBYyxHQUFJTixHQUFjO0lBQ2pELEdBQUssQ0FBR08sSUFBSSxHQUFLTiw0REFBYyxHQUF2Qk0sSUFBSTtJQUNaLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUN4Qk8sT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUs7SUFFakIsR0FBSyxDQUFDTyxvQkFBb0IsR0FBR0MsUUFBUSxDQUFSQSxLQUFLLEVBQUksQ0FBQztRQUNyQ04sY0FBYyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztRQUNqQ1AsSUFBSSxDQUFDUSxjQUFjLENBQUNILEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7UUFDOUJOLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLENBQUcsSUFBRSxDQUFHLElBQUUsQ0FBQztZQUFDQyxNQUFNLEVBQUVMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1FBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTTs7aUZBRURmLGtEQUFJOzs7Ozs7OytGQUNGbUIsQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFnQjs7O2tGQUV4QkMsQ0FBTTtnQkFBQ0MsUUFBUSxFQUFFVCxvQkFBb0I7Z0JBQUVHLEtBQUssRUFBRVQsUUFBUTs7Ozs7Ozs7eUZBQ3BEZ0IsQ0FBTTt3QkFBQ1AsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7a0NBQUVQLElBQUksQ0FBQ2UsQ0FBQyxDQUFDLENBQW1COzt5RkFDN0NELENBQU07d0JBQUNQLEtBQUssRUFBQyxDQUFJOzs7Ozs7O2tDQUFFUCxJQUFJLENBQUNlLENBQUMsQ0FBQyxDQUFnQjs7eUZBQzFDRCxDQUFNO3dCQUFDUCxLQUFLLEVBQUMsQ0FBSTs7Ozs7OztrQ0FBRVAsSUFBSSxDQUFDZSxDQUFDLENBQUMsQ0FBZ0I7Ozs7aUZBRTVDQyxDQUFFOzs7Ozs7OzBCQUFFaEIsSUFBSSxDQUFDZSxDQUFDLENBQUMsQ0FBZ0I7Ozs7QUFHbEMsQ0FBQztHQTFCS25CLEdBQUc7O1FBRVVGLHdEQUFjO1FBQ2hCQyxrREFBUzs7O0tBSHBCQyxHQUFHOztBQWtDVCwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCdcbmltcG9ydCB7IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMgfSBmcm9tICduZXh0LWkxOG5leHQvc2VydmVyU2lkZVRyYW5zbGF0aW9ucydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xhbmd1YWdlLCB1cGRhdGVMYW5ndWFnZV0gPSB1c2VTdGF0ZSgncHQnKVxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc29sZS5sb2cocHJvcHMpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UgPSBldmVudCA9PiB7XG4gICAgdXBkYXRlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICByb3V0ZXIucHVzaCgnLycsICcvJywgeyBsb2NhbGU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Uc3QgVHJhbnNsYXRpb25zPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxhbmd1YWdlfSB2YWx1ZT17bGFuZ3VhZ2V9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHRcIj57aTE4bi50KCdsYWJlbHMucG9ydHVndWVzZScpfTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW5cIj57aTE4bi50KCdsYWJlbHMuZW5nbGlzaCcpfTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXNcIj57aTE4bi50KCdsYWJlbHMuc3BhbmlzaCcpfTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8aDE+e2kxOG4udCgndGl0bGVzLndlbGNvbWUnKX08L2gxPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IGxvY2FsZSB9KSA9PiAoe1xuICBwcm9wczoge1xuICAgIC4uLmF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMobG9jYWxlLCBbJ3RyYW5zbGF0aW9ucyddKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVJvdXRlciIsIkFwcCIsInByb3BzIiwibGFuZ3VhZ2UiLCJ1cGRhdGVMYW5ndWFnZSIsImkxOG4iLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJwdXNoIiwibG9jYWxlIiwidGl0bGUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});