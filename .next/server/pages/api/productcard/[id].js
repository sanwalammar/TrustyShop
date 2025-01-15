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
exports.id = "pages/api/productcard/[id]";
exports.ids = ["pages/api/productcard/[id]"];
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

/***/ "(api)/./pages/api/productcard/[id].js":
/*!***************************************!*\
  !*** ./pages/api/productcard/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method , query  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const dbquery = query.id === \"all\" ? \"SELECT * FROM products\" : \"SELECT * FROM products WHERE cat_id=($1)\";\n                const value = query.id === \"all\" ? [] : [\n                    query.id\n                ];\n                const response = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(dbquery, value);\n                return res.json(response.rows);\n            } catch (error) {\n                return res.status(400).json({\n                    message: error.message\n                });\n            }\n        case \"DELETE\":\n            try {\n                const dbquery1 = \"DELETE FROM products WHERE product_id=($1)\";\n                const value1 = [\n                    query.id\n                ];\n                await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(dbquery1, value1);\n                return res.json({\n                    success: true\n                });\n            } catch (error1) {\n                return res.status(400).json({\n                    message: error1.message\n                });\n            }\n        default:\n            return res.status(400).json({\n                message: \"Method are not supported\"\n            });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdGNhcmQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUVsQyw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxLQUFLLEdBQUUsR0FBR0gsR0FBRztJQUM3QixPQUFRRSxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1IsSUFBSTtnQkFDRixNQUFNRSxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsRUFBRSxLQUFLLEtBQUssR0FBRSx3QkFBd0IsR0FBRywwQ0FBMEM7Z0JBQ3pHLE1BQU1DLEtBQUssR0FBR0gsS0FBSyxDQUFDRSxFQUFFLEtBQUssS0FBSyxHQUFFLEVBQUUsR0FBRztvQkFBQ0YsS0FBSyxDQUFDRSxFQUFFO2lCQUFDO2dCQUNqRCxNQUFNRSxRQUFRLEdBQUcsTUFBTVIscURBQVUsQ0FBQ0ssT0FBTyxFQUFFRSxLQUFLLENBQUM7Z0JBQ2pELE9BQU9MLEdBQUcsQ0FBQ08sSUFBSSxDQUFDRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsT0FBT0MsS0FBSyxFQUFFO2dCQUNkLE9BQU9ULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQUM7b0JBQUVJLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQUFPO2lCQUFFLENBQUMsQ0FBQzthQUN6RDtRQUNELEtBQUssUUFBUTtZQUNYLElBQUk7Z0JBQ0YsTUFBTVIsUUFBTyxHQUFHLDRDQUE0QztnQkFDNUQsTUFBTUUsTUFBSyxHQUFHO29CQUFDSCxLQUFLLENBQUNFLEVBQUU7aUJBQUM7Z0JBQ3hCLE1BQU1OLHFEQUFVLENBQUNLLFFBQU8sRUFBRUUsTUFBSyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU9MLEdBQUcsQ0FBQ08sSUFBSSxDQUFDO29CQUFDSyxPQUFPLEVBQUUsSUFBSTtpQkFBQyxDQUFDLENBQUM7YUFDbEMsQ0FBQyxPQUFPSCxNQUFLLEVBQUU7Z0JBQ2QsT0FBT1QsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FBQztvQkFBRUksT0FBTyxFQUFFRixNQUFLLENBQUNFLE9BQU87aUJBQUUsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0g7WUFDRSxPQUFPWCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO2dCQUFFSSxPQUFPLEVBQUUsMEJBQTBCO2FBQUUsQ0FBQyxDQUFDO0tBQ3hFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vcGFnZXMvYXBpL3Byb2R1Y3RjYXJkL1tpZF0uanM/OGFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubiBmcm9tICcuLi8uLi8uLi9saWIvZGInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCwgcXVlcnkgfSA9IHJlcTtcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRicXVlcnkgPSBxdWVyeS5pZCA9PT0gJ2FsbCc/IFwiU0VMRUNUICogRlJPTSBwcm9kdWN0c1wiIDogXCJTRUxFQ1QgKiBGUk9NIHByb2R1Y3RzIFdIRVJFIGNhdF9pZD0oJDEpXCI7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeS5pZCA9PT0gJ2FsbCc/IFtdIDogW3F1ZXJ5LmlkXTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm4ucXVlcnkoZGJxdWVyeSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbihyZXNwb25zZS5yb3dzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZGJxdWVyeSA9IFwiREVMRVRFIEZST00gcHJvZHVjdHMgV0hFUkUgcHJvZHVjdF9pZD0oJDEpXCI7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFtxdWVyeS5pZF07XHJcbiAgICAgICAgICBhd2FpdCBjb25uLnF1ZXJ5KGRicXVlcnksIHZhbHVlKTtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbih7c3VjY2VzczogdHJ1ZX0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBhcmUgbm90IHN1cHBvcnRlZFwiIH0pO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiY29ubiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiZGJxdWVyeSIsImlkIiwidmFsdWUiLCJyZXNwb25zZSIsImpzb24iLCJyb3dzIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/productcard/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/productcard/[id].js"));
module.exports = __webpack_exports__;

})();