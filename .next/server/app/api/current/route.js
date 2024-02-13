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
exports.id = "app/api/current/route";
exports.ids = ["app/api/current/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_6666_Downloads_rms_src_app_api_current_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/current/route.js */ \"(rsc)/./src/app/api/current/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/current/route\",\n        pathname: \"/api/current\",\n        filename: \"route\",\n        bundlePath: \"app/api/current/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\6666\\\\Downloads\\\\rms\\\\src\\\\app\\\\api\\\\current\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_6666_Downloads_rms_src_app_api_current_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/current/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjdXJyZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjdXJyZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY3VycmVudCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUM2NjY2JTVDRG93bmxvYWRzJTVDcm1zJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUM2NjY2JTVDRG93bmxvYWRzJTVDcm1zJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2lCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm1zLz82MTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDY2NjZcXFxcRG93bmxvYWRzXFxcXHJtc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjdXJyZW50XFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jdXJyZW50L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3VycmVudFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY3VycmVudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXDY2NjZcXFxcRG93bmxvYWRzXFxcXHJtc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxjdXJyZW50XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2N1cnJlbnQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/current/route.js":
/*!**************************************!*\
  !*** ./src/app/api/current/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _helper_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helper/db */ \"(rsc)/./src/helper/db.js\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\n\n(0,_helper_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function GET(request) {\n    try {\n        const authToken = request.cookies.get(\"authToken\")?.value;\n        if (!authToken) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Auth token not provided\", 401);\n        }\n        const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(authToken, process.env.JWT_KEY);\n        const userId = data._id;\n        const user = await _model_User__WEBPACK_IMPORTED_MODULE_1__.User.findById(userId).select(\"-password\");\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"User not found\", 404);\n        }\n        console.log(\"User details:\", user);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].json({\n            user\n        });\n    } catch (error) {\n        console.error(\"Error fetching user\", error.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Internal server error\", 500);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jdXJyZW50L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNKO0FBQ0w7QUFDWTtBQUUzQ0EscURBQVNBO0FBRUYsZUFBZUksSUFBSUMsT0FBTztJQUM3QixJQUFJO1FBQ0EsTUFBTUMsWUFBWUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBY0M7UUFDcEQsSUFBSSxDQUFDSCxXQUFXO1lBQ1osT0FBT0gsa0ZBQVlBLENBQUNPLEtBQUssQ0FBQywyQkFBMkI7UUFDekQ7UUFFQSxNQUFNQyxPQUFPVCwwREFBVSxDQUFDSSxXQUFXTyxRQUFRQyxHQUFHLENBQUNDLE9BQU87UUFDdEQsTUFBTUMsU0FBU0wsS0FBS00sR0FBRztRQUV2QixNQUFNQyxPQUFPLE1BQU1qQiw2Q0FBSUEsQ0FBQ2tCLFFBQVEsQ0FBQ0gsUUFBUUksTUFBTSxDQUFDO1FBRWhELElBQUksQ0FBQ0YsTUFBTTtZQUNQLE9BQU9mLGtGQUFZQSxDQUFDTyxLQUFLLENBQUMsa0JBQWtCO1FBQ2hEO1FBRUFXLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJKO1FBRTdCLE9BQU9mLGtGQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1lBQUVMO1FBQUs7SUFDcEMsRUFBRSxPQUFPUixPQUFPO1FBQ1pXLFFBQVFYLEtBQUssQ0FBQyx1QkFBdUJBLE1BQU1jLE9BQU87UUFDbEQsT0FBT3JCLGtGQUFZQSxDQUFDTyxLQUFLLENBQUMseUJBQXlCO0lBQ3ZEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ybXMvLi9zcmMvYXBwL2FwaS9jdXJyZW50L3JvdXRlLmpzPzIxNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvaGVscGVyL2RiXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvbW9kZWwvVXNlclwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuY29ubmVjdERCKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhdXRoVG9rZW5cIik/LnZhbHVlO1xuICAgICAgICBpZiAoIWF1dGhUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5lcnJvcihcIkF1dGggdG9rZW4gbm90IHByb3ZpZGVkXCIsIDQwMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gand0LnZlcmlmeShhdXRoVG9rZW4sIHByb2Nlc3MuZW52LkpXVF9LRVkpO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBkYXRhLl9pZDtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1c2VySWQpLnNlbGVjdChcIi1wYXNzd29yZFwiKTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiLCA0MDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGRldGFpbHM6XCIsIHVzZXIpO1xuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVzZXIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXJcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiwgNTAwKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsImp3dCIsIk5leHRSZXNwb25zZSIsIkdFVCIsInJlcXVlc3QiLCJhdXRoVG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJlcnJvciIsImRhdGEiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInVzZXJJZCIsIl9pZCIsInVzZXIiLCJmaW5kQnlJZCIsInNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/current/route.js\n");

/***/ }),

/***/ "(rsc)/./src/helper/db.js":
/*!**************************!*\
  !*** ./src/helper/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGO_URI } = process.env;\nconst connectDB = async ()=>{\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI);\n        console.log(\"Db connected\");\n    } catch (error) {\n        console.log(\"Failed to connect\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVyL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNLEVBQUNDLFNBQVMsRUFBQyxHQUFHQyxRQUFRQyxHQUFHO0FBRXhCLE1BQU1DLFlBQVk7SUFDckIsSUFBRztRQUNDLE1BQU1DLGFBQWEsTUFBTUwsdURBQWdCLENBQUNDO1FBQzFDTSxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBQyxPQUFNQyxPQUFNO1FBQ1RGLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJDO0lBQ3JDO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jtcy8uL3NyYy9oZWxwZXIvZGIuanM/ODdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHtNT05HT19VUkl9ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYygpID0+e1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRiIGNvbm5lY3RlZFwiKTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjb25uZWN0XCIsIGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJJIiwicHJvY2VzcyIsImVudiIsImNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helper/db.js\n");

/***/ }),

/***/ "(rsc)/./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nconst { Schema, default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new Schema({\n    firstname: {\n        type: String,\n        required: [\n            true,\n            \"First name is required\"\n        ]\n    },\n    lastname: {\n        type: String,\n        required: [\n            true,\n            \"Last name is required\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email id is required\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    }\n});\n//TestResource\nconst User = mongoose.models.Users || mongoose.model(\"Users\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxNQUFNLEVBQUVDLFNBQVNDLFFBQVEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUV4RCxNQUFNQyxhQUFhLElBQUlKLE9BQU87SUFDMUJLLFdBQVc7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBeUI7SUFDOUM7SUFDQUMsVUFBVTtRQUNOSCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUM3QztJQUNBRSxPQUFPO1FBQ0hKLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDRyxRQUFRO0lBQ1o7SUFDQUMsVUFBUztRQUNMTixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtJQUM1QztBQUNKO0FBQ0EsY0FBYztBQUNQLE1BQU1LLE9BQU9YLFNBQVNZLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJYixTQUFTYyxLQUFLLENBQUMsU0FBU1osWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jtcy8uL3NyYy9tb2RlbC9Vc2VyLmpzPzJkM2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTY2hlbWEsIGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBmaXJzdG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiRmlyc3QgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICB9LFxuICAgIGxhc3RuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkxhc3QgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlkIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgfVxufSlcbi8vVGVzdFJlc291cmNlXG5leHBvcnQgY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VycyB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJzXCIsIFVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsImZpcnN0bmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIlVzZXIiLCJtb2RlbHMiLCJVc2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/yallist","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/lru-cache","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcurrent%2Froute&page=%2Fapi%2Fcurrent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcurrent%2Froute.js&appDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C6666%5CDownloads%5Crms&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();