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
exports.id = "pages/api/profile/[id]";
exports.ids = ["pages/api/profile/[id]"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nlet conn;\nif (!conn) {\n    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: process.env.PGSQL_USER,\n        password: process.env.PGSQL_PASSWORD,\n        host: process.env.PGSQL_HOST,\n        port: process.env.PGSQL_PORT,\n        database: process.env.PGSQL_DATABASE\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUTtBQUNrQjtBQUUxQixJQUFJQyxJQUFJO0FBRVIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDVEEsSUFBSSxHQUFHLElBQUlELG9DQUFJLENBQUM7UUFDZEUsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1QkMsUUFBUSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztRQUNwQ0MsSUFBSSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssVUFBVTtRQUM1QkMsSUFBSSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sVUFBVTtRQUM1QkMsUUFBUSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsY0FBYztLQUNyQyxDQUFDLENBQUM7Q0FDSjtBQUVELGlFQUFlWixJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGIuanNcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxubGV0IGNvbm47XHJcblxyXG5pZiAoIWNvbm4pIHtcclxuICBjb25uID0gbmV3IFBvb2woe1xyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUEdTUUxfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QR1NRTF9QQVNTV09SRCxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBHU1FMX0hPU1QsXHJcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QR1NRTF9QT1JULFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBHU1FMX0RBVEFCQVNFLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uIDsiXSwibmFtZXMiOlsiUG9vbCIsImNvbm4iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlBHU1FMX1VTRVIiLCJwYXNzd29yZCIsIlBHU1FMX1BBU1NXT1JEIiwiaG9zdCIsIlBHU1FMX0hPU1QiLCJwb3J0IiwiUEdTUUxfUE9SVCIsImRhdGFiYXNlIiwiUEdTUUxfREFUQUJBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/profile/[id].js":
/*!***********************************!*\
  !*** ./pages/api/profile/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method , body , query  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const dbQuery = \"SELECT * FROM users WHERE user_id=($1)\";\n                const values = [\n                    query.id\n                ];\n                const response = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(dbQuery, values);\n                return res.json(response.rows);\n            } catch (error) {\n                return res.status(400).json({\n                    message: error.message\n                });\n            }\n        case \"POST\":\n            try {\n                const { name , age , gender , address , mobile  } = JSON.parse(body);\n                const dbQuery1 = \"UPDATE users SET name=$1, age=$2, gender=$3, default_address=$4, mobile_num=$5 WHERE user_id=$6\";\n                const values1 = [\n                    name,\n                    age,\n                    gender,\n                    address,\n                    mobile,\n                    query.id\n                ];\n                const response1 = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(dbQuery1, values1);\n                return res.json(response1.rows[0]);\n            } catch (error1) {\n                return res.status(400).json({\n                    message: error1.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                message: \"Method are not supported\"\n            });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDVDtBQUl6Qiw2QkFBZSwwQ0FBZ0JFLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHSixHQUFHO0lBQ25DLE9BQVFFLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDUixJQUFJO2dCQUNGLE1BQU1HLE9BQU8sR0FBRyx3Q0FBd0M7Z0JBQ3hELE1BQU1DLE1BQU0sR0FBRztvQkFBQ0YsS0FBSyxDQUFDRyxFQUFFO2lCQUFDO2dCQUN6QixNQUFNQyxRQUFRLEdBQUcsTUFBTVYscURBQVUsQ0FBQ08sT0FBTyxFQUFFQyxNQUFNLENBQUM7Z0JBQ2xELE9BQU9MLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkLE9BQU9WLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7b0JBQUVJLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPO2lCQUFFLENBQUMsQ0FBQzthQUN6RDtRQUdILEtBQUssTUFBTTtZQUNULElBQUk7Z0JBQ0YsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEdBQUcsR0FBRUMsTUFBTSxHQUFFQyxPQUFPLEdBQUVDLE1BQU0sR0FBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ2pCLElBQUksQ0FBQztnQkFFL0QsTUFBTUUsUUFBTyxHQUNYLGlHQUFpRztnQkFDbkcsTUFBTUMsT0FBTSxHQUFHO29CQUFDUSxJQUFJO29CQUFFQyxHQUFHO29CQUFFQyxNQUFNO29CQUFFQyxPQUFPO29CQUFFQyxNQUFNO29CQUFFZCxLQUFLLENBQUNHLEVBQUU7aUJBQUM7Z0JBQzdELE1BQU1DLFNBQVEsR0FBRyxNQUFNVixxREFBVSxDQUFDTyxRQUFPLEVBQUVDLE9BQU0sQ0FBQztnQkFFbEQsT0FBT0wsR0FBRyxDQUFDUSxJQUFJLENBQUNELFNBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkMsQ0FBQyxPQUFPQyxNQUFLLEVBQUU7Z0JBQ2QsT0FBT1YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQztvQkFBRUksT0FBTyxFQUFFRixNQUFLLENBQUNFLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0g7WUFDRSxPQUFPWixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFSSxPQUFPLEVBQUUsMEJBQTBCO2FBQUUsQ0FBQyxDQUFDO0tBQ3hFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vcGFnZXMvYXBpL3Byb2ZpbGUvW2lkXS5qcz81ZDBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uIGZyb20gJy4uLy4uLy4uL2xpYi9kYidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgYm9keSwgcXVlcnkgfSA9IHJlcTtcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRiUXVlcnkgPSBcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcl9pZD0oJDEpXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW3F1ZXJ5LmlkXTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm4ucXVlcnkoZGJRdWVyeSwgdmFsdWVzKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24ocmVzcG9uc2Uucm93cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIGFnZSwgZ2VuZGVyLCBhZGRyZXNzLCBtb2JpbGUgfSA9IEpTT04ucGFyc2UoYm9keSk7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBkYlF1ZXJ5ID1cclxuICAgICAgICAgIFwiVVBEQVRFIHVzZXJzIFNFVCBuYW1lPSQxLCBhZ2U9JDIsIGdlbmRlcj0kMywgZGVmYXVsdF9hZGRyZXNzPSQ0LCBtb2JpbGVfbnVtPSQ1IFdIRVJFIHVzZXJfaWQ9JDZcIjtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbbmFtZSwgYWdlLCBnZW5kZXIsIGFkZHJlc3MsIG1vYmlsZSwgcXVlcnkuaWRdO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubi5xdWVyeShkYlF1ZXJ5LCB2YWx1ZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24ocmVzcG9uc2Uucm93c1swXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2QgYXJlIG5vdCBzdXBwb3J0ZWRcIiB9KTtcclxuICB9XHJcbn1cclxuIFxyXG4gXHJcbiJdLCJuYW1lcyI6WyJjb25uIiwiUmVhY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwicXVlcnkiLCJkYlF1ZXJ5IiwidmFsdWVzIiwiaWQiLCJyZXNwb25zZSIsImpzb24iLCJyb3dzIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmFtZSIsImFnZSIsImdlbmRlciIsImFkZHJlc3MiLCJtb2JpbGUiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile/[id].js"));
module.exports = __webpack_exports__;

})();