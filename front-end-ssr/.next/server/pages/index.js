"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst App = ()=>{\n    const { 0: language , 1: updateLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('pt');\n    const { i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    const handleChangeLanguage = (event)=>{\n        updateLanguage(event.target.value);\n        i18n.changeLanguage(event.target.value);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"Tst Translations\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                onChange: handleChangeLanguage,\n                value: language,\n                __source: {\n                    fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"pt\",\n                        __source: {\n                            fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.portuguese')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"en\",\n                        __source: {\n                            fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.english')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"es\",\n                        __source: {\n                            fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.spanish')\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: i18n.t('titles.welcome')\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ({ locale  })=>({\n        props: {\n            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale, [\n                'translations'\n            ])\n        }\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0k7QUFDYTtBQUMrQjtBQUU1RSxLQUFLLENBQUNJLEdBQUcsT0FBUyxDQUFDO0lBQ2pCLEtBQUssTUFBRUMsUUFBUSxNQUFFQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsQ0FBSTtJQUNoRCxLQUFLLENBQUMsQ0FBQyxDQUFDTSxJQUFJLEVBQUMsQ0FBQyxHQUFHTCw0REFBYztJQUUvQixLQUFLLENBQUNNLG9CQUFvQixJQUFHQyxLQUFLLEdBQUksQ0FBQztRQUNyQ0gsY0FBYyxDQUFDRyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztRQUNqQ0osSUFBSSxDQUFDSyxjQUFjLENBQUNILEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ3hDLENBQUM7SUFFRCxNQUFNOztpRkFFRFgsa0RBQUk7Ozs7Ozs7K0ZBQ0ZhLENBQUs7Ozs7Ozs7OEJBQUMsQ0FBZ0I7OztrRkFFeEJDLENBQU07Z0JBQUNDLFFBQVEsRUFBRVAsb0JBQW9CO2dCQUFFRyxLQUFLLEVBQUVOLFFBQVE7Ozs7Ozs7O3lGQUNwRFcsQ0FBTTt3QkFBQ0wsS0FBSyxFQUFDLENBQUk7Ozs7Ozs7a0NBQUVKLElBQUksQ0FBQ1UsQ0FBQyxDQUFDLENBQW1COzt5RkFDN0NELENBQU07d0JBQUNMLEtBQUssRUFBQyxDQUFJOzs7Ozs7O2tDQUFFSixJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFnQjs7eUZBQzFDRCxDQUFNO3dCQUFDTCxLQUFLLEVBQUMsQ0FBSTs7Ozs7OztrQ0FBRUosSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBZ0I7Ozs7aUZBRTVDQyxDQUFFOzs7Ozs7OzBCQUFFWCxJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFnQjs7OztBQUdsQyxDQUFDO0FBRU0sS0FBSyxDQUFDRSxjQUFjLFVBQVUsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxJQUFNLENBQUM7UUFDcERDLEtBQUssRUFBRSxDQUFDO2VBQ0gsS0FBSyxDQUFDbEIsMkZBQXNCLENBQUNpQixNQUFNLEVBQUUsQ0FBQztnQkFBQSxDQUFjO1lBQUEsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQzs7QUFFRCxpRUFBZWhCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQtc3NyLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnXG5pbXBvcnQgeyBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIH0gZnJvbSAnbmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnMnXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2xhbmd1YWdlLCB1cGRhdGVMYW5ndWFnZV0gPSB1c2VTdGF0ZSgncHQnKVxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VMYW5ndWFnZSA9IGV2ZW50ID0+IHtcbiAgICB1cGRhdGVMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRzdCBUcmFuc2xhdGlvbnM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTGFuZ3VhZ2V9IHZhbHVlPXtsYW5ndWFnZX0+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdFwiPntpMThuLnQoJ2xhYmVscy5wb3J0dWd1ZXNlJyl9PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPntpMThuLnQoJ2xhYmVscy5lbmdsaXNoJyl9PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJlc1wiPntpMThuLnQoJ2xhYmVscy5zcGFuaXNoJyl9PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxoMT57aTE4bi50KCd0aXRsZXMud2VsY29tZScpfTwvaDE+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgbG9jYWxlIH0pID0+ICh7XG4gIHByb3BzOiB7XG4gICAgLi4uYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIFsndHJhbnNsYXRpb25zJ10pXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwic2VydmVyU2lkZVRyYW5zbGF0aW9ucyIsIkFwcCIsImxhbmd1YWdlIiwidXBkYXRlTGFuZ3VhZ2UiLCJpMThuIiwiaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJ0aXRsZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwidCIsImgxIiwiZ2V0U3RhdGljUHJvcHMiLCJsb2NhbGUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();