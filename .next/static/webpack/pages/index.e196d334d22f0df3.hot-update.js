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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar Home = function(allBooks) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100%\",\n            backgroundImage: \"url(/bg.png)\",\n            backgroundPosition: \"center\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"repeat\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Llibres\"\n                    }, void 0, false, {\n                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col h-full py-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \" mx-auto font-bold text-4xl bg-white text-amber-800 py-4 px-12 rounded-2xl\",\n                        children: \"Llistat de llibres\"\n                    }, void 0, false, {\n                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"w-8/12 mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end bg-white \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Vols afegir m\\xe9s llibres?\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 bg-white p-6 rounded-lg \",\n                                children: allBooks.data.map(function(book) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col bg-gray-100 shadow-xl gap-y-2 rounded-lg transition ease-in-out hover:scale-105\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-full h-64 bg-gray-400 rounded-t-lg\",\n                                                children: \"Image\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                id: \"bookInfo\",\n                                                className: \"grid gap-y-2 px-4 py-2 text-xl \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex place-content-between text-amber-800\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                                className: \"text-amber-800\",\n                                                                children: book.title\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 23\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                                href: \"edit/\".concat(book.id),\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                                                                    icon: \"akar-icons:info\",\n                                                                    className: \"h-8 w-8 transition ease-in-out hover:scale-110 hover:cursor-pointer\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                                    lineNumber: 46,\n                                                                    columnNumber: 25\n                                                                }, _this1)\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                                lineNumber: 45,\n                                                                columnNumber: 23\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"text-xl\",\n                                                        children: [\n                                                            \"Autor: \",\n                                                            book.author\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 21\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Descripci\\xf3: \",\n                                                            book.description\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 21\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Preu: \",\n                                                            book.price,\n                                                            \" \\u20AC\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 21\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, book.id, true, {\n                                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jaume/Escriptori/Feina/Prova tecnica/tech/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDNEI7QUFFVTtBQUNWO0FBRTVCLElBQU1HLElBQUksR0FBYSxTQUFFQyxRQUFRLEVBQU07O0lBQ3JDLHFCQUdFLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRTtZQUNWQyxNQUFNLEVBQUMsTUFBTTtZQUNiQyxlQUFlLEVBQUUsY0FBYztZQUMvQkMsa0JBQWtCLEVBQUUsUUFBUTtZQUM1QkMsY0FBYyxFQUFFLE9BQU87WUFDdkJDLGdCQUFnQixFQUFFLFFBQVE7U0FDM0I7OzBCQUdDLDhEQUFDWCxrREFBSTs7a0NBQ0gsOERBQUNZLE9BQUs7a0NBQUUsU0FBTzs7Ozs7NkJBQVE7a0NBQ3ZCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NkJBQUc7Ozs7OztxQkFDN0Q7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7O2tDQUMxQyw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLDRFQUE4RTtrQ0FBQyxvQkFFN0Y7Ozs7OzZCQUFLO2tDQUNMLDhEQUFDRSxTQUFPO3dCQUFDRixTQUFTLEVBQUMsZ0JBQWdCOzswQ0FHakMsOERBQUNaLEtBQUc7Z0NBQUNZLFNBQVMsRUFBQyw0QkFBNEI7MENBQ3pDLDRFQUFDRyxHQUFDOzhDQUFDLDZCQUVIOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0E7MENBQ04sOERBQUNmLEtBQUc7Z0NBQUNZLFNBQVMsRUFBQyxzRUFBc0U7MENBRWpGYixRQUFRLENBQUNpQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lEQUNyQiw4REFBQ2xCLEtBQUc7d0NBQUNZLFNBQVMsRUFBQywrRkFBZ0c7OzBEQUM3Ryw4REFBQ1osS0FBRztnREFBQ1ksU0FBUyxFQUFDLHNDQUFzQzswREFBQyxPQUFLOzs7OztzREFBTTswREFDakUsOERBQUNaLEtBQUc7Z0RBQUNtQixFQUFFLEVBQUMsVUFBVTtnREFBQ1AsU0FBUyxFQUFDLGlDQUFpQzs7a0VBQzVELDhEQUFDWixLQUFHO3dEQUFDWSxTQUFTLEVBQUMsMkNBQTJDOzswRUFDeEQsOERBQUNRLElBQUU7Z0VBQUNSLFNBQVMsRUFBQyxnQkFBZ0I7MEVBQUVNLElBQUksQ0FBQ1gsS0FBSzs7Ozs7c0VBQU07MEVBQ2hELDhEQUFDVixrREFBSTtnRUFBQ3dCLElBQUksRUFBRSxPQUFNLENBQVUsT0FBUkgsSUFBSSxDQUFDQyxFQUFFLENBQUU7MEVBQzNCLDRFQUFDdkIsZ0RBQUk7b0VBQUMwQixJQUFJLEVBQUMsaUJBQWlCO29FQUFDVixTQUFTLEVBQUMscUVBQXNFOzs7OzswRUFBRzs7Ozs7c0VBQzNHOzs7Ozs7OERBQ0g7a0VBQ04sOERBQUNXLElBQUU7d0RBQUNYLFNBQVMsRUFBQyxTQUFTOzs0REFBQyxTQUFPOzREQUFDTSxJQUFJLENBQUNNLE1BQU07Ozs7Ozs4REFBTTtrRUFDakQsOERBQUNULEdBQUM7OzREQUFDLGlCQUFZOzREQUFFRyxJQUFJLENBQUNPLFdBQVc7Ozs7Ozs4REFBSztrRUFDckMsOERBQUFWLEdBQUM7OzREQUFDLFFBQU07NERBQUNHLElBQUksQ0FBQ1EsS0FBSzs0REFBQyxTQUFFOzs7Ozs7OERBQUk7Ozs7OztzREFDdkI7O3VDQVo2R1IsSUFBSSxDQUFDQyxFQUFFOzs7OzhDQWF0SDtpQ0FFVCxDQUFDOzs7OztxQ0FFRTs7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0w7Ozs7OzthQUNILENBQ1A7Q0FDRjtBQXZES3JCLEtBQUFBLElBQUk7O0FBeURWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICggYWxsQm9va3MgKSA9PiB7XG4gIHJldHVybiAoXG5cblxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2JnLnBuZylcIixcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICdyZXBlYXQnLFxuICAgIH19XG4gICAgXG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZSA+TGxpYnJlczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgcHktMjBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBteC1hdXRvIGZvbnQtYm9sZCAgdGV4dC00eGwgYmctd2hpdGUgdGV4dC1hbWJlci04MDAgcHktNCBweC0xMiAgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgICAgTGxpc3RhdCBkZSBsbGlicmVzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy04LzEyIG14LWF1dG8nPlxuXG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWVuZCBiZy13aGl0ZSAnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFZvbHMgYWZlZ2lyIG3DqXMgbGxpYnJlcz9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNiBtdC0xMCBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyAnPlxuXG4gICAgICAgICAgICB7IGFsbEJvb2tzLmRhdGEubWFwKChib29rKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgYmctZ3JheS0xMDAgIHNoYWRvdy14bCBnYXAteS0yIHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xMDUnIGtleT17Ym9vay5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtNjQgYmctZ3JheS00MDAgcm91bmRlZC10LWxnJz5JbWFnZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJvb2tJbmZvXCIgY2xhc3NOYW1lPSdncmlkIGdhcC15LTIgcHgtNCBweS0yIHRleHQteGwgJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcGxhY2UtY29udGVudC1iZXR3ZWVuIHRleHQtYW1iZXItODAwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWFtYmVyLTgwMCc+e2Jvb2sudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgZWRpdC8ke2Jvb2suaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiYWthci1pY29uczppbmZvXCIgY2xhc3NOYW1lPSdoLTggdy04ICB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTExMCBob3ZlcjpjdXJzb3ItcG9pbnRlcicgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXhsJz5BdXRvcjoge2Jvb2suYXV0aG9yfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRlc2NyaXBjacOzOiB7Ym9vay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXU6IHtib29rLnByaWNlfSDigqw8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPiAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9saXN0X2FsbCcsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICB9KVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSB9XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJY29uIiwiTGluayIsIkhvbWUiLCJhbGxCb29rcyIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzZWN0aW9uIiwicCIsImRhdGEiLCJtYXAiLCJib29rIiwiaWQiLCJoMiIsImhyZWYiLCJpY29uIiwiaDMiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});