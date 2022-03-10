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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst App = ({ locale  })=>{\n    const { 0: language , 1: updateLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(locale);\n    const { i18n  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleChangeLanguage = (event)=>{\n        updateLanguage(event.target.value);\n        i18n.changeLanguage(event.target.value);\n        router.push('/', '/', {\n            locale: event.target.value\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"Tst Translations\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"select\", {\n                onChange: handleChangeLanguage,\n                value: language,\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"pt\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.portuguese')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"en\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.english')\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                        value: \"es\",\n                        __source: {\n                            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: i18n.t('labels.spanish')\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: i18n.t('titles.welcome')\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ({ locale  })=>({\n        props: {\n            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale, [\n                'translations'\n            ]),\n            locale\n        }\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUNhO0FBQytCO0FBQ3JDO0FBRXZDLEtBQUssQ0FBQ0ssR0FBRyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzNCLEtBQUssTUFBRUMsUUFBUSxNQUFFQyxjQUFjLE1BQUlQLCtDQUFRLENBQUNLLE1BQU07SUFDbEQsS0FBSyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxFQUFDLENBQUMsR0FBR1AsNERBQWM7SUFDL0IsS0FBSyxDQUFDUSxNQUFNLEdBQUdOLHNEQUFTO0lBRXhCLEtBQUssQ0FBQ08sb0JBQW9CLElBQUdDLEtBQUssR0FBSSxDQUFDO1FBQ3JDSixjQUFjLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1FBQ2pDTCxJQUFJLENBQUNNLGNBQWMsQ0FBQ0gsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7UUFDdENKLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQUcsSUFBRSxDQUFHLElBQUUsQ0FBQztZQUFDVixNQUFNLEVBQUVNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO1FBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTTs7aUZBRURkLGtEQUFJOzs7Ozs7OytGQUNGaUIsQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFnQjs7O2tGQUV4QkMsQ0FBTTtnQkFBQ0MsUUFBUSxFQUFFUixvQkFBb0I7Z0JBQUVHLEtBQUssRUFBRVAsUUFBUTs7Ozs7Ozs7eUZBQ3BEYSxDQUFNO3dCQUFDTixLQUFLLEVBQUMsQ0FBSTs7Ozs7OztrQ0FBRUwsSUFBSSxDQUFDWSxDQUFDLENBQUMsQ0FBbUI7O3lGQUM3Q0QsQ0FBTTt3QkFBQ04sS0FBSyxFQUFDLENBQUk7Ozs7Ozs7a0NBQUVMLElBQUksQ0FBQ1ksQ0FBQyxDQUFDLENBQWdCOzt5RkFDMUNELENBQU07d0JBQUNOLEtBQUssRUFBQyxDQUFJOzs7Ozs7O2tDQUFFTCxJQUFJLENBQUNZLENBQUMsQ0FBQyxDQUFnQjs7OztpRkFFNUNDLENBQUU7Ozs7Ozs7MEJBQUViLElBQUksQ0FBQ1ksQ0FBQyxDQUFDLENBQWdCOzs7O0FBR2xDLENBQUM7QUFFTSxLQUFLLENBQUNFLGNBQWMsVUFBVSxDQUFDLENBQUNqQixNQUFNLEVBQUMsQ0FBQyxJQUFNLENBQUM7UUFDcERrQixLQUFLLEVBQUUsQ0FBQztlQUNILEtBQUssQ0FBQ3JCLDJGQUFzQixDQUFDRyxNQUFNLEVBQUUsQ0FBQztnQkFBQSxDQUFjO1lBQUEsQ0FBQztZQUN4REEsTUFBTTtRQUNSLENBQUM7SUFDSCxDQUFDOztBQUVELGlFQUFlRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLXNzci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuaW1wb3J0IHsgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyB9IGZyb20gJ25leHQtaTE4bmV4dC9zZXJ2ZXJTaWRlVHJhbnNsYXRpb25zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEFwcCA9ICh7IGxvY2FsZSB9KSA9PiB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgdXBkYXRlTGFuZ3VhZ2VdID0gdXNlU3RhdGUobG9jYWxlKVxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VMYW5ndWFnZSA9IGV2ZW50ID0+IHtcbiAgICB1cGRhdGVMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgcm91dGVyLnB1c2goJy8nLCAnLycsIHsgbG9jYWxlOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VHN0IFRyYW5zbGF0aW9uczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMYW5ndWFnZX0gdmFsdWU9e2xhbmd1YWdlfT5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB0XCI+e2kxOG4udCgnbGFiZWxzLnBvcnR1Z3Vlc2UnKX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCI+e2kxOG4udCgnbGFiZWxzLmVuZ2xpc2gnKX08L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVzXCI+e2kxOG4udCgnbGFiZWxzLnNwYW5pc2gnKX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGgxPntpMThuLnQoJ3RpdGxlcy53ZWxjb21lJyl9PC9oMT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBsb2NhbGUgfSkgPT4gKHtcbiAgcHJvcHM6IHtcbiAgICAuLi5hd2FpdCBzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zKGxvY2FsZSwgWyd0cmFuc2xhdGlvbnMnXSksXG4gICAgbG9jYWxlLFxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInNlcnZlclNpZGVUcmFuc2xhdGlvbnMiLCJ1c2VSb3V0ZXIiLCJBcHAiLCJsb2NhbGUiLCJsYW5ndWFnZSIsInVwZGF0ZUxhbmd1YWdlIiwiaTE4biIsInJvdXRlciIsImhhbmRsZUNoYW5nZUxhbmd1YWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUxhbmd1YWdlIiwicHVzaCIsInRpdGxlIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJ0IiwiaDEiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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