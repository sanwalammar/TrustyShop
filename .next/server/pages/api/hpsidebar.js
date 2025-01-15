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
exports.id = "pages/api/hpsidebar";
exports.ids = ["pages/api/hpsidebar"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nlet conn;\nif (!conn) {\n    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: process.env.PGSQL_USER,\n        password: process.env.PGSQL_PASSWORD,\n        host: process.env.PGSQL_HOST,\n        port: process.env.PGSQL_PORT,\n        database: process.env.PGSQL_DATABASE\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUTtBQUNrQjtBQUUxQixJQUFJQyxJQUFJO0FBRVIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDVEEsSUFBSSxHQUFHLElBQUlELG9DQUFJLENBQUM7UUFDZEUsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1QkMsUUFBUSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztRQUNwQ0MsSUFBSSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssVUFBVTtRQUM1QkMsSUFBSSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sVUFBVTtRQUM1QkMsUUFBUSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsY0FBYztLQUNyQyxDQUFDLENBQUM7Q0FDSjtBQUVELGlFQUFlWixJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGIuanNcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxubGV0IGNvbm47XHJcblxyXG5pZiAoIWNvbm4pIHtcclxuICBjb25uID0gbmV3IFBvb2woe1xyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUEdTUUxfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QR1NRTF9QQVNTV09SRCxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBHU1FMX0hPU1QsXHJcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QR1NRTF9QT1JULFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBHU1FMX0RBVEFCQVNFLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uIDsiXSwibmFtZXMiOlsiUG9vbCIsImNvbm4iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlBHU1FMX1VTRVIiLCJwYXNzd29yZCIsIlBHU1FMX1BBU1NXT1JEIiwiaG9zdCIsIlBHU1FMX0hPU1QiLCJwb3J0IiwiUEdTUUxfUE9SVCIsImRhdGFiYXNlIiwiUEdTUUxfREFUQUJBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/hpsidebar.js":
/*!********************************!*\
  !*** ./pages/api/hpsidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method , body  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const query = \"SELECT * FROM categories\";\n                const response = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(query);\n                return res.json(response.rows);\n            } catch (error) {\n                return res.status(400).json({\n                    message: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                message: \"Method are not supported\"\n            });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaHBzaWRlYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRS9CLDZCQUFlLDBDQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLElBQUksR0FBRSxHQUFHSCxHQUFHO0lBQzVCLE9BQVFFLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDUixJQUFJO2dCQUNGLE1BQU1FLEtBQUssR0FBRywwQkFBMEI7Z0JBQ3hDLE1BQU1DLFFBQVEsR0FBRyxNQUFNTixxREFBVSxDQUFDSyxLQUFLLENBQUM7Z0JBQ3hDLE9BQU9ILEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkLE9BQU9QLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7b0JBQUVJLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPO2lCQUFFLENBQUMsQ0FBQzthQUN6RDtRQUNEO1lBQ0UsT0FBT1QsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQztnQkFBRUksT0FBTyxFQUFFLDBCQUEwQjthQUFFLENBQUMsQ0FBQztLQUN4RTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ1c3R5c2hvcC8uL3BhZ2VzL2FwaS9ocHNpZGViYXIuanM/OTMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubiBmcm9tICcuLi8uLi9saWIvZGInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxO1xyXG4gIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gY2F0ZWdvcmllc1wiO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubi5xdWVyeShxdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3BvbnNlLnJvd3MpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBhcmUgbm90IHN1cHBvcnRlZFwiIH0pO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiY29ubiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJxdWVyeSIsInJlc3BvbnNlIiwianNvbiIsInJvd3MiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hpsidebar.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hpsidebar.js"));
module.exports = __webpack_exports__;

})();