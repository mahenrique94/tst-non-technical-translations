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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = {\n    i18n: {\n        defaultLocale: 'pt',\n        locales: [\n            'en',\n            'es',\n            'pt'\n        ]\n    },\n    backend: {\n        loadPath: 'http://localhost:1337/api/translations/',\n        parse (response, language, namespace) {\n            const { data  } = JSON.parse(response);\n            const messages = data.reduce((acc, registry)=>{\n                acc[registry.attributes.language] = {\n                    [namespace]: registry.attributes.data\n                };\n                return acc;\n            }, {\n            });\n            return messages[language][namespace];\n        }\n    },\n    debug: true,\n    defaultNS: 'translations',\n    fallbackLng: 'pt',\n    interpolation: {\n        escapeValue: false\n    },\n    ns: [\n        'translations'\n    ],\n    serializeConfig: false,\n    use: [\n        __webpack_require__(/*! i18next-http-backend */ \"i18next-http-backend\"), \n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQkMsSUFBSSxFQUFFLENBQUM7UUFDTEMsYUFBYSxFQUFFLENBQUk7UUFDbkJDLE9BQU8sRUFBRSxDQUFDO1lBQUEsQ0FBSTtZQUFFLENBQUk7WUFBRSxDQUFJO1FBQUEsQ0FBQztJQUM3QixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUF5QztRQUNuREMsS0FBSyxFQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLENBQUM7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDTCxLQUFLLENBQUNDLFFBQVE7WUFDcEMsS0FBSyxDQUFDSyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csTUFBTSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsR0FBSyxDQUFDO2dCQUMvQ0QsR0FBRyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ1IsUUFBUSxJQUFJLENBQUM7cUJBQ2xDQyxTQUFTLEdBQUdNLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDTixJQUFJO2dCQUN2QyxDQUFDO2dCQUNELE1BQU0sQ0FBQ0ksR0FBRztZQUNaLENBQUMsRUFBRSxDQUFDO1lBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDSixRQUFRLEVBQUVDLFNBQVM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFDRFEsS0FBSyxFQUFFLElBQUk7SUFDWEMsU0FBUyxFQUFFLENBQWM7SUFDekJDLFdBQVcsRUFBRSxDQUFJO0lBQ2pCQyxhQUFhLEVBQUUsQ0FBQztRQUNkQyxXQUFXLEVBQUUsS0FBSztJQUNwQixDQUFDO0lBQ0RDLEVBQUUsRUFBRSxDQUFDO1FBQUEsQ0FBYztJQUFBLENBQUM7SUFDcEJDLGVBQWUsRUFBRSxLQUFLO0lBQ3RCQyxHQUFHLEVBQUUsQ0FBQztRQUNKQyxtQkFBTyxDQUFDLGtEQUFzQjtJQUNoQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1zc3IvLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzPzFjYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGkxOG46IHtcbiAgICBkZWZhdWx0TG9jYWxlOiAncHQnLFxuICAgIGxvY2FsZXM6IFsnZW4nLCAnZXMnLCAncHQnXSxcbiAgfSxcbiAgYmFja2VuZDoge1xuICAgIGxvYWRQYXRoOiAnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS90cmFuc2xhdGlvbnMvJyxcbiAgICBwYXJzZShyZXNwb25zZSwgbGFuZ3VhZ2UsIG5hbWVzcGFjZSkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBkYXRhLnJlZHVjZSgoYWNjLCByZWdpc3RyeSkgPT4ge1xuICAgICAgICBhY2NbcmVnaXN0cnkuYXR0cmlidXRlcy5sYW5ndWFnZV0gPSB7XG4gICAgICAgICAgW25hbWVzcGFjZV06IHJlZ2lzdHJ5LmF0dHJpYnV0ZXMuZGF0YSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9LCB7fSlcbiAgICAgIHJldHVybiBtZXNzYWdlc1tsYW5ndWFnZV1bbmFtZXNwYWNlXVxuICAgIH0sXG4gIH0sXG4gIGRlYnVnOiB0cnVlLFxuICBkZWZhdWx0TlM6ICd0cmFuc2xhdGlvbnMnLFxuICBmYWxsYmFja0xuZzogJ3B0JyxcbiAgaW50ZXJwb2xhdGlvbjoge1xuICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcbiAgfSxcbiAgbnM6IFsndHJhbnNsYXRpb25zJ10sXG4gIHNlcmlhbGl6ZUNvbmZpZzogZmFsc2UsXG4gIHVzZTogW1xuICAgIHJlcXVpcmUoJ2kxOG5leHQtaHR0cC1iYWNrZW5kJyksXG4gIF0sXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImJhY2tlbmQiLCJsb2FkUGF0aCIsInBhcnNlIiwicmVzcG9uc2UiLCJsYW5ndWFnZSIsIm5hbWVzcGFjZSIsImRhdGEiLCJKU09OIiwibWVzc2FnZXMiLCJyZWR1Y2UiLCJhY2MiLCJyZWdpc3RyeSIsImF0dHJpYnV0ZXMiLCJkZWJ1ZyIsImRlZmF1bHROUyIsImZhbGxiYWNrTG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwibnMiLCJzZXJpYWxpemVDb25maWciLCJ1c2UiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next-i18next.config.js */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/home/matheushc/workspace/POC/tst-non-technical-translations/front-end-ssr/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp, (_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2___default())));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1E7U0FFaERFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0hELFNBQVM7V0FBS0MsU0FBUzs7Ozs7Ozs7QUFFNUIsQ0FBQztBQUVELGlFQUFlSixnRUFBa0IsQ0FBQ0UsS0FBSyxFQUFFRCxnRUFBaUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1zc3IvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuaW1wb3J0IG5leHRJMThOZXh0Q29uZmlnIGZyb20gJy4uL25leHQtaTE4bmV4dC5jb25maWcuanMnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHAsIG5leHRJMThOZXh0Q29uZmlnKVxuIl0sIm5hbWVzIjpbImFwcFdpdGhUcmFuc2xhdGlvbiIsIm5leHRJMThOZXh0Q29uZmlnIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "i18next-http-backend":
/*!***************************************!*\
  !*** external "i18next-http-backend" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("i18next-http-backend");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();