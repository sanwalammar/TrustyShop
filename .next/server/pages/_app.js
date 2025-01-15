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

/***/ "./pages/Context/cart_context.js":
/*!***************************************!*\
  !*** ./pages/Context/cart_context.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CartProvider = ({ children  })=>{\n    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (item)=>{\n        const isOldItem = false;\n        let updatedItems;\n        if (cartItems.length) {\n            updatedItems = cartItems.map((i)=>{\n                if (i.product_id === item.product_id) {\n                    isOldItem = true;\n                    return {\n                        ...i,\n                        quantity: i.quantity + 1\n                    };\n                }\n                return i;\n            });\n        }\n        if (isOldItem) {\n            setCartItems(updatedItems);\n        } else {\n            setCartItems([\n                ...cartItems,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ]);\n        }\n    };\n    console.log(\"cartItems\", cartItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Spring 2023_CS619_8499_26856_S230272CBB\\\\final deliverable\\\\pages\\\\Context\\\\cart_context.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db250ZXh0L2NhcnRfY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUVoRCxNQUFNRSxXQUFXLGlCQUFHRixvREFBYSxFQUFFO0FBRW5DLE1BQU1HLFlBQVksR0FBRyxDQUFDLEVBQUNDLFFBQVEsR0FBQyxHQUFLO0lBQ2xDLE1BQU0sS0FBQ0MsU0FBUyxNQUFFQyxZQUFZLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTdDLE1BQU1NLFNBQVMsR0FBRyxDQUFDQyxJQUFJLEdBQUs7UUFDeEIsTUFBTUMsU0FBUyxHQUFHLEtBQUs7UUFDdkIsSUFBSUMsWUFBWTtRQUNoQixJQUFHTCxTQUFTLENBQUNNLE1BQU0sRUFBQztZQUNuQkQsWUFBWSxHQUFHTCxTQUFTLENBQUNPLEdBQUcsQ0FBQ0MsQ0FBQUEsQ0FBQyxHQUFJO2dCQUMvQixJQUFHQSxDQUFDLENBQUNDLFVBQVUsS0FBS04sSUFBSSxDQUFDTSxVQUFVLEVBQUM7b0JBQ2hDTCxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixPQUFPO3dCQUFDLEdBQUdJLENBQUM7d0JBQUVFLFFBQVEsRUFBRUYsQ0FBQyxDQUFDRSxRQUFRLEdBQUcsQ0FBQztxQkFBQztpQkFDMUM7Z0JBQ0QsT0FBT0YsQ0FBQyxDQUFDO2FBQ1osQ0FBQztTQUFDO1FBQ0gsSUFBR0osU0FBUyxFQUFDO1lBQ1RILFlBQVksQ0FBQ0ksWUFBWSxDQUFDO1NBQzdCLE1BQ0k7WUFDREosWUFBWSxDQUFDO21CQUFJRCxTQUFTO2dCQUFFO29CQUFDLEdBQUdHLElBQUk7b0JBQUVPLFFBQVEsRUFBRSxDQUFDO2lCQUFDO2FBQUMsQ0FBQztTQUN2RDtLQUNKO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRVosU0FBUyxDQUFDO0lBRW5DLHFCQUNBLDhEQUFDSCxXQUFXLENBQUNnQixRQUFRO1FBQUNDLEtBQUssRUFBRztZQUFDZCxTQUFTO1lBQUVFLFNBQVM7U0FBQztrQkFDL0NILFFBQVE7Ozs7O2lCQUNVLENBQ3pCO0NBQ0Q7QUFJa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vcGFnZXMvQ29udGV4dC9jYXJ0X2NvbnRleHQuanM/NzY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBpc09sZEl0ZW0gPSBmYWxzZTtcclxuICAgICAgICBsZXQgdXBkYXRlZEl0ZW1zO1xyXG4gICAgICAgIGlmKGNhcnRJdGVtcy5sZW5ndGgpe1xyXG4gICAgICAgICB1cGRhdGVkSXRlbXMgPSBjYXJ0SXRlbXMubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICBpZihpLnByb2R1Y3RfaWQgPT09IGl0ZW0ucHJvZHVjdF9pZCl7XHJcbiAgICAgICAgICAgICAgICBpc09sZEl0ZW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pLCBxdWFudGl0eTogaS5xdWFudGl0eSArIDF9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgaWYoaXNPbGRJdGVtKXtcclxuICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRJdGVtcylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7Li4uaXRlbSwgcXVhbnRpdHk6IDF9XSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjYXJ0SXRlbXMnLCBjYXJ0SXRlbXMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT0ge3tjYXJ0SXRlbXMsIGFkZFRvQ2FydH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbik7XHJcbn07XHJcbiAgICBcclxuXHJcblxyXG5leHBvcnQge0NhcnRQcm92aWRlciwgQ2FydENvbnRleHR9OyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiYWRkVG9DYXJ0IiwiaXRlbSIsImlzT2xkSXRlbSIsInVwZGF0ZWRJdGVtcyIsImxlbmd0aCIsIm1hcCIsImkiLCJwcm9kdWN0X2lkIiwicXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Context/cart_context.js\n");

/***/ }),

/***/ "./pages/Context/productcontext.js":
/*!*****************************************!*\
  !*** ./pages/Context/productcontext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProdContext\": () => (/* binding */ ProdContext),\n/* harmony export */   \"ProdProvider\": () => (/* binding */ ProdProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProdContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ProdProvider = ({ children  })=>{\n    // Get Product Data fom API\n    const { 0: allProducts , 1: setAllProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts(\"all\");\n    }, []);\n    const getProducts = (id)=>{\n        try {\n            fetch(\"http://localhost:3000/api/productcard/\" + id).then((result)=>{\n                result.json().then((allProducts)=>{\n                    setAllProducts(allProducts);\n                });\n            });\n        } catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProdContext.Provider, {\n        value: {\n            allProducts,\n            getProducts\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Spring 2023_CS619_8499_26856_S230272CBB\\\\final deliverable\\\\pages\\\\Context\\\\productcontext.js\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db250ZXh0L3Byb2R1Y3Rjb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQTJEO0FBRTNELE1BQU1HLFdBQVcsaUJBQUdILG9EQUFhLEVBQUU7QUFDbkMsTUFBTUksWUFBWSxHQUFHLENBQUMsRUFBQ0MsUUFBUSxHQUFDLEdBQUs7SUFDckMsMkJBQTJCO0lBQzNCLE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRWxERCxnREFBUyxDQUFDLElBQU07UUFDZE8sV0FBVyxDQUFDLEtBQUssQ0FBQztLQUNuQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUEsV0FBVyxHQUFHLENBQUNDLEVBQUUsR0FBSztRQUMxQixJQUFJO1lBQ0ZDLEtBQUssQ0FBQyx3Q0FBd0MsR0FBRUQsRUFBRSxDQUFDLENBQ2xERSxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFLO2dCQUFFQSxNQUFNLENBQUNDLElBQUksRUFBRSxDQUM5QkYsSUFBSSxDQUFDLENBQUNMLFdBQVcsR0FBSztvQkFBRUMsY0FBYyxDQUFDRCxXQUFXLENBQUMsQ0FBQztpQkFDcEQsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ0osQ0FBQyxPQUFPUSxLQUFLLEVBQUUsRUFDZjtLQUNGO0lBR0QscUJBQ0UsOERBQUNYLFdBQVcsQ0FBQ1ksUUFBUTtRQUFDQyxLQUFLLEVBQUc7WUFBQ1YsV0FBVztZQUFFRSxXQUFXO1NBQUM7a0JBQ3JESCxRQUFROzs7OztpQkFDWSxDQUN0QjtDQUNGO0FBRWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ1c3R5c2hvcC8uL3BhZ2VzL0NvbnRleHQvcHJvZHVjdGNvbnRleHQuanM/MjMwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0ICB7Y3JlYXRlQ29udGV4dCwgIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFByb2RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBQcm9kUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4vLyBHZXQgUHJvZHVjdCBEYXRhIGZvbSBBUElcclxuY29uc3QgW2FsbFByb2R1Y3RzLCBzZXRBbGxQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGdldFByb2R1Y3RzKCdhbGwnKVxyXG59LCBbXSk7XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0cyA9IChpZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdGNhcmQvXCIrIGlkKVxyXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4geyByZXN1bHQuanNvbigpXHJcbiAgICAgIC50aGVuKChhbGxQcm9kdWN0cykgPT4geyBzZXRBbGxQcm9kdWN0cyhhbGxQcm9kdWN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICB9XHJcbn1cclxuXHJcblxyXG5yZXR1cm4gKFxyXG4gIDxQcm9kQ29udGV4dC5Qcm92aWRlciB2YWx1ZT0ge3thbGxQcm9kdWN0cywgZ2V0UHJvZHVjdHN9fT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1Byb2RDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtQcm9kUHJvdmlkZXIsIFByb2RDb250ZXh0fSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kQ29udGV4dCIsIlByb2RQcm92aWRlciIsImNoaWxkcmVuIiwiYWxsUHJvZHVjdHMiLCJzZXRBbGxQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZXJyb3IiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Context/productcontext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_productcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context/productcontext */ \"./pages/Context/productcontext.js\");\n/* harmony import */ var _Context_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context/cart_context */ \"./pages/Context/cart_context.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_productcontext__WEBPACK_IMPORTED_MODULE_2__.ProdProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_cart_context__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Spring 2023_CS619_8499_26856_S230272CBB\\\\final deliverable\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Spring 2023_CS619_8499_26856_S230272CBB\\\\final deliverable\\\\pages\\\\_app.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Spring 2023_CS619_8499_26856_S230272CBB\\\\final deliverable\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUE4QjtBQUN3QjtBQUNBO0FBTXRELFNBQVNFLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBS3ZDLHFCQUNFLDhEQUFDSixpRUFBWTtrQkFDWCw0RUFBQ0MsK0RBQVk7c0JBQ1osNEVBQUNFLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNkOzs7OztZQUNGLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBQcm9kUHJvdmlkZXJ9IGZyb20gJy4vQ29udGV4dC9wcm9kdWN0Y29udGV4dCdcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4vQ29udGV4dC9jYXJ0X2NvbnRleHQnO1xuXG5cblxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgXG4gICAgXG4gICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8UHJvZFByb3ZpZGVyPlxuICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NhcnRQcm92aWRlcj4gXG4gICAgPC9Qcm9kUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByb2RQcm92aWRlciIsIkNhcnRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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