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

eval("\nmodule.exports = {\n    i18n: {\n        defaultLocale: 'pt',\n        locales: [\n            'en',\n            'es',\n            'pt'\n        ]\n    },\n    backend: {\n        loadPath: 'http://localhost:1337/api/translations/',\n        parse (response, language, namespace) {\n            const { data  } = JSON.parse(response);\n            const messages = data.reduce((acc, registry)=>{\n                acc[registry.attributes.language] = {\n                    [namespace]: registry.attributes.data\n                };\n                return acc;\n            }, {\n            });\n            return messages[language][namespace];\n        }\n    },\n    debug: true,\n    defaultNS: 'translations',\n    fallbackLng: 'pt',\n    interpolation: {\n        escapeValue: false\n    },\n    ns: [\n        'translations'\n    ],\n    // serializeConfig: false,\n    use: [\n        __webpack_require__(/*! i18next-http-backend */ \"i18next-http-backend\"), \n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNoQkMsSUFBSSxFQUFFLENBQUM7UUFDTEMsYUFBYSxFQUFFLENBQUk7UUFDbkJDLE9BQU8sRUFBRSxDQUFDO1lBQUEsQ0FBSTtZQUFFLENBQUk7WUFBRSxDQUFJO1FBQUEsQ0FBQztJQUM3QixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUF5QztRQUNuREMsS0FBSyxFQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLENBQUM7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDTCxLQUFLLENBQUNDLFFBQVE7WUFDcEMsS0FBSyxDQUFDSyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csTUFBTSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsR0FBSyxDQUFDO2dCQUMvQ0QsR0FBRyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ1IsUUFBUSxJQUFJLENBQUM7cUJBQ2xDQyxTQUFTLEdBQUdNLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDTixJQUFJO2dCQUN2QyxDQUFDO2dCQUNELE1BQU0sQ0FBQ0ksR0FBRztZQUNaLENBQUMsRUFBRSxDQUFDO1lBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDSixRQUFRLEVBQUVDLFNBQVM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFDRFEsS0FBSyxFQUFFLElBQUk7SUFDWEMsU0FBUyxFQUFFLENBQWM7SUFDekJDLFdBQVcsRUFBRSxDQUFJO0lBQ2pCQyxhQUFhLEVBQUUsQ0FBQztRQUNkQyxXQUFXLEVBQUUsS0FBSztJQUNwQixDQUFDO0lBQ0RDLEVBQUUsRUFBRSxDQUFDO1FBQUEsQ0FBYztJQUFBLENBQUM7SUFDcEIsRUFBMEI7SUFDMUJDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLG1CQUFPLENBQUMsa0RBQXNCO0lBQ2hDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLXNzci8uL25leHQtaTE4bmV4dC5jb25maWcuanM/MWNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgaTE4bjoge1xuICAgIGRlZmF1bHRMb2NhbGU6ICdwdCcsXG4gICAgbG9jYWxlczogWydlbicsICdlcycsICdwdCddLFxuICB9LFxuICBiYWNrZW5kOiB7XG4gICAgbG9hZFBhdGg6ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3RyYW5zbGF0aW9ucy8nLFxuICAgIHBhcnNlKHJlc3BvbnNlLCBsYW5ndWFnZSwgbmFtZXNwYWNlKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGRhdGEucmVkdWNlKChhY2MsIHJlZ2lzdHJ5KSA9PiB7XG4gICAgICAgIGFjY1tyZWdpc3RyeS5hdHRyaWJ1dGVzLmxhbmd1YWdlXSA9IHtcbiAgICAgICAgICBbbmFtZXNwYWNlXTogcmVnaXN0cnkuYXR0cmlidXRlcy5kYXRhLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2NcbiAgICAgIH0sIHt9KVxuICAgICAgcmV0dXJuIG1lc3NhZ2VzW2xhbmd1YWdlXVtuYW1lc3BhY2VdXG4gICAgfSxcbiAgfSxcbiAgZGVidWc6IHRydWUsXG4gIGRlZmF1bHROUzogJ3RyYW5zbGF0aW9ucycsXG4gIGZhbGxiYWNrTG5nOiAncHQnLFxuICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICB9LFxuICBuczogWyd0cmFuc2xhdGlvbnMnXSxcbiAgLy8gc2VyaWFsaXplQ29uZmlnOiBmYWxzZSxcbiAgdXNlOiBbXG4gICAgcmVxdWlyZSgnaTE4bmV4dC1odHRwLWJhY2tlbmQnKSxcbiAgXSxcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaTE4biIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwiYmFja2VuZCIsImxvYWRQYXRoIiwicGFyc2UiLCJyZXNwb25zZSIsImxhbmd1YWdlIiwibmFtZXNwYWNlIiwiZGF0YSIsIkpTT04iLCJtZXNzYWdlcyIsInJlZHVjZSIsImFjYyIsInJlZ2lzdHJ5IiwiYXR0cmlidXRlcyIsImRlYnVnIiwiZGVmYXVsdE5TIiwiZmFsbGJhY2tMbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJucyIsInVzZSIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../next-i18next.config.js */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/home/matheus/workspace/POC/non-technical-translations/front-end-ssr/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp, (_next_i18next_config_js__WEBPACK_IMPORTED_MODULE_2___default())));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1E7U0FFaERFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0hELFNBQVM7V0FBS0MsU0FBUzs7Ozs7Ozs7QUFFNUIsQ0FBQztBQUVELGlFQUFlSixnRUFBa0IsQ0FBQ0UsS0FBSyxFQUFFRCxnRUFBaUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1zc3IvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0J1xuaW1wb3J0IG5leHRJMThOZXh0Q29uZmlnIGZyb20gJy4uL25leHQtaTE4bmV4dC5jb25maWcuanMnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHAsIG5leHRJMThOZXh0Q29uZmlnKVxuIl0sIm5hbWVzIjpbImFwcFdpdGhUcmFuc2xhdGlvbiIsIm5leHRJMThOZXh0Q29uZmlnIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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