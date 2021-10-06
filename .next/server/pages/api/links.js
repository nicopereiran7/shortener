"use strict";
(() => {
var exports = {};
exports.id = "pages/api/links";
exports.ids = ["pages/api/links"];
exports.modules = {

/***/ "./pages/api/links.js":
/*!****************************!*\
  !*** ./pages/api/links.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    const data = await prisma.link.findMany();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/links.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2xpbmtzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRUEsaUVBQWUsT0FBT0UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLE1BQUk7QUFDRixVQUFNQyxJQUFJLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxJQUFQLENBQVlDLFFBQVosRUFBbkI7QUFDQSxXQUFPSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosSUFBckIsQ0FBUDtBQUNELEdBSEQsQ0FHRSxPQUFPSyxHQUFQLEVBQVk7QUFDWixXQUFPTixHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRSxNQUFBQTtBQUFGLEtBQXJCLENBQVA7QUFDRDtBQUNGLENBUEQ7Ozs7Ozs7Ozs7QUNKQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VybC1zaG9ydGVuZXIvLi9wYWdlcy9hcGkvbGlua3MuanMiLCJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5saW5rLmZpbmRNYW55KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBlcnJvciB9KTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJkYXRhIiwibGluayIsImZpbmRNYW55Iiwic3RhdHVzIiwic2VuZCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==