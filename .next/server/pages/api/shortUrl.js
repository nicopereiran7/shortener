"use strict";
(() => {
var exports = {};
exports.id = "pages/api/shortUrl";
exports.ids = ["pages/api/shortUrl"];
exports.modules = {

/***/ "./pages/api/shortUrl.js":
/*!*******************************!*\
  !*** ./pages/api/shortUrl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const {
    url
  } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 5);

  try {
    const data = await prisma.link.create({
      data: {
        url,
        shortUrl
      }
    });
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      error
    });
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/shortUrl.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Nob3J0VXJsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRUEsaUVBQWUsT0FBT0UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFVRixHQUFHLENBQUNHLElBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBakI7O0FBRUEsTUFBSTtBQUNGLFVBQU1DLElBQUksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUNwQ0YsTUFBQUEsSUFBSSxFQUFFO0FBQUVQLFFBQUFBLEdBQUY7QUFBT0UsUUFBQUE7QUFBUDtBQUQ4QixLQUFuQixDQUFuQjtBQUlBLFdBQU9ILEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFyQixDQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9LLEdBQVAsRUFBWTtBQUNaLFdBQU9iLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVFLE1BQUFBO0FBQUYsS0FBckIsQ0FBUDtBQUNEO0FBQ0YsQ0FiRDs7Ozs7Ozs7OztBQ0pBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci8uL3BhZ2VzL2FwaS9zaG9ydFVybC5qcyIsIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHsgdXJsIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBzaG9ydFVybCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA1KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGluay5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7IHVybCwgc2hvcnRVcmwgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVycm9yIH0pO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsInVybCIsImJvZHkiLCJzaG9ydFVybCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImRhdGEiLCJsaW5rIiwiY3JlYXRlIiwic3RhdHVzIiwic2VuZCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==