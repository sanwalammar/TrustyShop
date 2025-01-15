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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\n\nconst KEY = \"ASDYJLKASFD134HLK4\";\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method , body  } = req;\n    switch(method){\n        case \"POST\":\n            try {\n                const { email , password  } = JSON.parse(body);\n                const query = \"SELECT * FROM users WHERE email=$1\";\n                const values = [\n                    email\n                ];\n                const response = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(query, values);\n                if (password === response.rows[0].password) {\n                    return res.json({\n                        token: jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n                            email,\n                            name: response.rows[0].name,\n                            userId: response.rows[0].user_id,\n                            role: response.rows[0].role\n                        }, KEY)\n                    });\n                }\n            // return res.json(response.rows[0]);\n            } catch (error) {\n                return res.status(400).json({\n                    message: error.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                message: \"Method are not supported\"\n            });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNDO0FBRWhDLE1BQU1FLEdBQUcsR0FBRyxvQkFBb0I7QUFDaEMsNkJBQWUsMENBQWdCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsSUFBSSxHQUFFLEdBQUdILEdBQUc7SUFFNUIsT0FBUUUsTUFBTTtRQUNaLEtBQUssTUFBTTtZQUNULElBQUk7Z0JBQ0YsTUFBTSxFQUFFRSxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osSUFBSSxDQUFDO2dCQUU1QyxNQUFNSyxLQUFLLEdBQUcsb0NBQW9DO2dCQUNsRCxNQUFNQyxNQUFNLEdBQUc7b0JBQUNMLEtBQUs7aUJBQUM7Z0JBRXRCLE1BQU1NLFFBQVEsR0FBRyxNQUFNWixxREFBVSxDQUFDVSxLQUFLLEVBQUVDLE1BQU0sQ0FBQztnQkFDaEQsSUFBSUosUUFBUSxLQUFLSyxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ04sUUFBUSxFQUFFO29CQUMxQyxPQUFPSixHQUFHLENBQUNXLElBQUksQ0FBQzt3QkFDZEMsS0FBSyxFQUFFaEIsd0RBQVEsQ0FDYjs0QkFDRU8sS0FBSzs0QkFDTFcsSUFBSSxFQUFFTCxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksSUFBSTs0QkFDM0JDLE1BQU0sRUFBRU4sUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNNLE9BQU87NEJBQ2hDQyxJQUFJLEVBQUVSLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxJQUFJO3lCQUM1QixFQUNEbkIsR0FBRyxDQUNKO3FCQUNGLENBQUMsQ0FBQztpQkFDSjtZQUNELHFDQUFxQzthQUN0QyxDQUFDLE9BQU9vQixLQUFLLEVBQUU7Z0JBQ2QsT0FBT2xCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1IsSUFBSSxDQUFDO29CQUFFUyxPQUFPLEVBQUVGLEtBQUssQ0FBQ0UsT0FBTztpQkFBRSxDQUFDLENBQUM7YUFDekQ7UUFDSDtZQUNFLE9BQU9wQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNSLElBQUksQ0FBQztnQkFBRVMsT0FBTyxFQUFFLDBCQUEwQjthQUFFLENBQUMsQ0FBQztLQUN4RTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ1c3R5c2hvcC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgY29ubiBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XHJcblxyXG5jb25zdCBLRVkgPSBcIkFTRFlKTEtBU0ZEMTM0SExLNFwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxO1xyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gSlNPTi5wYXJzZShib2R5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWw9JDFcIjtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbZW1haWxdO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm4ucXVlcnkocXVlcnksIHZhbHVlcyk7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkID09PSByZXNwb25zZS5yb3dzWzBdLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgICAgICAgICB0b2tlbjogand0LnNpZ24oXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiByZXNwb25zZS5yb3dzWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHJlc3BvbnNlLnJvd3NbMF0udXNlcl9pZCxcclxuICAgICAgICAgICAgICAgIHJvbGU6IHJlc3BvbnNlLnJvd3NbMF0ucm9sZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgS0VZXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlcy5qc29uKHJlc3BvbnNlLnJvd3NbMF0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIGFyZSBub3Qgc3VwcG9ydGVkXCIgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJjb25uIiwiS0VZIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsImVtYWlsIiwicGFzc3dvcmQiLCJKU09OIiwicGFyc2UiLCJxdWVyeSIsInZhbHVlcyIsInJlc3BvbnNlIiwicm93cyIsImpzb24iLCJ0b2tlbiIsInNpZ24iLCJuYW1lIiwidXNlcklkIiwidXNlcl9pZCIsInJvbGUiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();