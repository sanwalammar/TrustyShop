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
exports.id = "pages/api/checkout/[id]";
exports.ids = ["pages/api/checkout/[id]"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ "@emailjs/nodejs":
/*!**********************************!*\
  !*** external "@emailjs/nodejs" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@emailjs/nodejs");;

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nlet conn;\nif (!conn) {\n    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: process.env.PGSQL_USER,\n        password: process.env.PGSQL_PASSWORD,\n        host: process.env.PGSQL_HOST,\n        port: process.env.PGSQL_PORT,\n        database: process.env.PGSQL_DATABASE\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUTtBQUNrQjtBQUUxQixJQUFJQyxJQUFJO0FBRVIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDVEEsSUFBSSxHQUFHLElBQUlELG9DQUFJLENBQUM7UUFDZEUsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1QkMsUUFBUSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYztRQUNwQ0MsSUFBSSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssVUFBVTtRQUM1QkMsSUFBSSxFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sVUFBVTtRQUM1QkMsUUFBUSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsY0FBYztLQUNyQyxDQUFDLENBQUM7Q0FDSjtBQUVELGlFQUFlWixJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vbGliL2RiLmpzPzNkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGIuanNcclxuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xyXG5cclxubGV0IGNvbm47XHJcblxyXG5pZiAoIWNvbm4pIHtcclxuICBjb25uID0gbmV3IFBvb2woe1xyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUEdTUUxfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QR1NRTF9QQVNTV09SRCxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBHU1FMX0hPU1QsXHJcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QR1NRTF9QT1JULFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBHU1FMX0RBVEFCQVNFLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uIDsiXSwibmFtZXMiOlsiUG9vbCIsImNvbm4iLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIlBHU1FMX1VTRVIiLCJwYXNzd29yZCIsIlBHU1FMX1BBU1NXT1JEIiwiaG9zdCIsIlBHU1FMX0hPU1QiLCJwb3J0IiwiUEdTUUxfUE9SVCIsImRhdGFiYXNlIiwiUEdTUUxfREFUQUJBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/checkout/[id].js":
/*!************************************!*\
  !*** ./pages/api/checkout/[id].js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var _emailjs_nodejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/nodejs */ \"@emailjs/nodejs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emailjs_nodejs__WEBPACK_IMPORTED_MODULE_1__]);\n_emailjs_nodejs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst accountSid = \"ACdce8bda3bfb40f8fc1dfbe852437f1e4\";\nconst authToken = \"ccd868606e545f083b5c5c0629e3d601\";\nconst client = __webpack_require__(/*! twilio */ \"twilio\")(accountSid, authToken);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method , query  } = req;\n    try {\n        const dbquery = \"SELECT * FROM users WHERE user_id=($1)\";\n        const value = [\n            query.id\n        ];\n        const response = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(dbquery, value);\n        const userMobileNum = \"+\" + response.rows[0].mobile_num;\n        const body = `Hi Mr. ${response.rows[0].name}, Your purchase from Trusty Shop was successful and your order \r\n                    has been confirmed. Order will be delivered at your address: ${response.rows[0].default_address}`;\n        _emailjs_nodejs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(\"service_8mytr58\", \"template_aivx79l\", {\n            from_name: \"Trusty Shop\",\n            message: body,\n            to_email: response.rows[0].email\n        }, {\n            publicKey: \"7hRAucp6qWD9Ovk8q\",\n            privateKey: \"gqthXzvjhUuwS4PhFILTI\"\n        });\n        client.messages.create({\n            body: body,\n            from: \"+19092749947\",\n            to: userMobileNum\n        }).then((message)=>console.log(message.sid));\n        return res.json(response.rows[0]);\n    } catch (error) {\n        return res.status(400).json({\n            message: error.message\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXQvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFDSTtBQUV0QyxNQUFNRSxVQUFVLEdBQUcsb0NBQW9DO0FBQ3ZELE1BQU1DLFNBQVMsR0FBRyxrQ0FBa0M7QUFDcEQsTUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQ0gsVUFBVSxFQUFFQyxTQUFTLENBQUM7QUFFdkQsNkJBQWUsMENBQWdCRyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUc7SUFDN0IsSUFBSTtRQUNGLE1BQU1JLE9BQU8sR0FBRyx3Q0FBd0M7UUFDeEQsTUFBTUMsS0FBSyxHQUFHO1lBQUNGLEtBQUssQ0FBQ0csRUFBRTtTQUFDO1FBQ3hCLE1BQU1DLFFBQVEsR0FBRyxNQUFNYixxREFBVSxDQUFDVSxPQUFPLEVBQUVDLEtBQUssQ0FBQztRQUNqRCxNQUFNRyxhQUFhLEdBQUcsR0FBRyxHQUFHRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVTtRQUN2RCxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUVKLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUM7UUFFN0NqQixPQUFPLENBQUNtQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUU7b0VBQ2xEQyxDQUFTLEVBQUUsYUFBYTtZQUN4QkMsT0FBTyxFQUFFTCxJQUFJO1lBQ2JNLFFBQVEsRUFBRVY7U0FDWCxFQUFFO1lBQUVZO1lBQWdDQyxVQUFVLEVBQUU7U0FBeUIsQ0FBQyxDQUFDO1FBRTVFdEI7WUFFSWEsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZZLElBQUksRUFBRTtZQUNOQyxFQUFFLEVBQUVoQixhQUFhO1NBQ3BCLENBQUMsQ0FDRGlCLElBQUksQ0FBQ1QsQ0FBQUEsT0FBTyxHQUFJVTtRQUNqQixPQUFPekIsR0FBRyxDQUFDNEIsSUFBSSxDQUFDdEIsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQyxDQUFDLE9BQU9xQixLQUFLLEVBQUU7UUFDZCxPQUFPN0IsR0FBRyxDQUFDOEI7WUFBbUJmLE9BQU8sRUFBRWMsS0FBSyxDQUFDZCxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQ3pEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnVzdHlzaG9wLy4vcGFnZXMvYXBpL2NoZWNrb3V0L1tpZF0uanM/MmU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubiBmcm9tICcuLi8uLi8uLi9saWIvZGInXHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ0BlbWFpbGpzL25vZGVqcyc7XHJcblxyXG5jb25zdCBhY2NvdW50U2lkID0gJ0FDZGNlOGJkYTNiZmI0MGY4ZmMxZGZiZTg1MjQzN2YxZTQnO1xyXG5jb25zdCBhdXRoVG9rZW4gPSAnY2NkODY4NjA2ZTU0NWYwODNiNWM1YzA2MjllM2Q2MDEnO1xyXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCd0d2lsaW8nKShhY2NvdW50U2lkLCBhdXRoVG9rZW4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QsIHF1ZXJ5IH0gPSByZXE7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRicXVlcnkgPSBcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcl9pZD0oJDEpXCI7XHJcbiAgICBjb25zdCB2YWx1ZSA9IFtxdWVyeS5pZF07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm4ucXVlcnkoZGJxdWVyeSwgdmFsdWUpO1xyXG4gICAgY29uc3QgdXNlck1vYmlsZU51bSA9ICcrJyArIHJlc3BvbnNlLnJvd3NbMF0ubW9iaWxlX251bVxyXG4gICAgY29uc3QgYm9keSA9IGBIaSBNci4gJHtyZXNwb25zZS5yb3dzWzBdLm5hbWV9LCBZb3VyIHB1cmNoYXNlIGZyb20gVHJ1c3R5IFNob3Agd2FzIHN1Y2Nlc3NmdWwgYW5kIHlvdXIgb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzIGJlZW4gY29uZmlybWVkLiBPcmRlciB3aWxsIGJlIGRlbGl2ZXJlZCBhdCB5b3VyIGFkZHJlc3M6ICR7cmVzcG9uc2Uucm93c1swXS5kZWZhdWx0X2FkZHJlc3N9YFxyXG4gICAgZW1haWxqcy5zZW5kKFwic2VydmljZV84bXl0cjU4XCIsIFwidGVtcGxhdGVfYWl2eDc5bFwiLCB7XHJcbiAgICAgIGZyb21fbmFtZTogXCJUcnVzdHkgU2hvcFwiLFxyXG4gICAgICBtZXNzYWdlOiBib2R5LFxyXG4gICAgICB0b19lbWFpbDogcmVzcG9uc2Uucm93c1swXS5lbWFpbFxyXG4gICAgfSwgeyBwdWJsaWNLZXk6ICc3aFJBdWNwNnFXRDlPdms4cScsIHByaXZhdGVLZXk6ICdncXRoWHp2amhVdXdTNFBoRklMVEknIH0pO1xyXG5cclxuICAgIGNsaWVudC5tZXNzYWdlc1xyXG4gICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICBmcm9tOiAnKzE5MDkyNzQ5OTQ3JyxcclxuICAgICAgICB0bzogdXNlck1vYmlsZU51bVxyXG4gICAgfSlcclxuICAgIC50aGVuKG1lc3NhZ2UgPT4gY29uc29sZS5sb2cobWVzc2FnZS5zaWQpKTtcclxuICAgIHJldHVybiByZXMuanNvbihyZXNwb25zZS5yb3dzWzBdKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubiIsImVtYWlsanMiLCJhY2NvdW50U2lkIiwiYXV0aFRva2VuIiwiY2xpZW50IiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiZGJxdWVyeSIsInZhbHVlIiwiaWQiLCJyZXNwb25zZSIsInVzZXJNb2JpbGVOdW0iLCJyb3dzIiwibW9iaWxlX251bSIsImJvZHkiLCJuYW1lIiwiZGVmYXVsdF9hZGRyZXNzIiwic2VuZCIsImZyb21fbmFtZSIsIm1lc3NhZ2UiLCJ0b19lbWFpbCIsImVtYWlsIiwicHVibGljS2V5IiwicHJpdmF0ZUtleSIsIm1lc3NhZ2VzIiwiY3JlYXRlIiwiZnJvbSIsInRvIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzaWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout/[id].js"));
module.exports = __webpack_exports__;

})();