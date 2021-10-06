"use strict";
(() => {
var exports = {};
exports.id = "pages/[shortId]";
exports.ids = ["pages/[shortId]"];
exports.modules = {

/***/ "./pages/[shortId].js":
/*!****************************!*\
  !*** ./pages/[shortId].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortIdPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Nicolas\\Programacion\\Next.js\\url-shortener\\pages\\[shortId].js";


function ShortIdPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "ShortId Redirect"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
async function getServerSideProps({
  params
}) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  const {
    shortId
  } = params;
  const data = await prisma.link.findUnique({
    where: {
      shortUrl: shortId
    }
  });

  if (!data) {
    return {
      redirect: {
        destination: "/"
      }
    };
  }

  return {
    redirect: {
      destination: data.url
    }
  };
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[shortId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvW3Nob3J0SWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsV0FBVCxHQUF1QjtBQUNwQyxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7QUFFTSxlQUFlQyxrQkFBZixDQUFrQztBQUFFQyxFQUFBQTtBQUFGLENBQWxDLEVBQThDO0FBQ25ELFFBQU1DLE1BQU0sR0FBRyxJQUFJSix3REFBSixFQUFmO0FBRUEsUUFBTTtBQUFFSyxJQUFBQTtBQUFGLE1BQWNGLE1BQXBCO0FBRUEsUUFBTUcsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQyxVQUFaLENBQXVCO0FBQ3hDQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFTDtBQUFaO0FBRGlDLEdBQXZCLENBQW5COztBQUlBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1QsV0FBTztBQUNMSyxNQUFBQSxRQUFRLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMRCxJQUFBQSxRQUFRLEVBQUU7QUFBRUMsTUFBQUEsV0FBVyxFQUFFTixJQUFJLENBQUNPO0FBQXBCO0FBREwsR0FBUDtBQUdEOzs7Ozs7Ozs7O0FDeEJEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmwtc2hvcnRlbmVyLy4vcGFnZXMvW3Nob3J0SWRdLmpzIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL3VybC1zaG9ydGVuZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3J0SWRQYWdlKCkge1xyXG4gIHJldHVybiA8ZGl2PlNob3J0SWQgUmVkaXJlY3Q8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbiAgY29uc3QgeyBzaG9ydElkIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGluay5maW5kVW5pcXVlKHtcclxuICAgIHdoZXJlOiB7IHNob3J0VXJsOiBzaG9ydElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHsgZGVzdGluYXRpb246IFwiL1wiIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiBkYXRhLnVybCB9LFxyXG4gIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJTaG9ydElkUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInByaXNtYSIsInNob3J0SWQiLCJkYXRhIiwibGluayIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNob3J0VXJsIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=