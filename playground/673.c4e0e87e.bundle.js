"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[673],{

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ LogsAddon_LogsAddon)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/console-feed/lib/index.js
var lib = __webpack_require__(36005);
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
;// CONCATENATED MODULE: ./src/addons/LogsAddon/LogsAddon.jsx



var LOGS_SELECTOR = function LOGS_SELECTOR(state) {
  return state.logs;
};
var LogsAddon = function LogsAddon() {
  var logs = (0,Store/* useStore */.P)(LOGS_SELECTOR);
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      backgroundColor: "#111",
      padding: "10px 0",
      minHeight: "100%",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/compat_module["default"].createElement(lib.Console, {
    logs: logs,
    variant: "dark",
    styles: {
      BASE_FONT_FAMILY: "monospace",
      BASE_FONT_SIZE: 12,
      BASE_LINE_HEIGHT: 1.2,
      BASE_BACKGROUND_COLOR: "#111",
      LOG_BACKGROUND: "#111",
      LOG_BORDER: "#222"
    }
  }));
};
/* harmony default export */ const LogsAddon_LogsAddon = (LogsAddon);
;// CONCATENATED MODULE: ./src/addons/LogsAddon/index.js



/***/ })

}]);