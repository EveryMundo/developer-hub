"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[27],{

/***/ 15027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ SettingsAddon_SettingsAddon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@everymundo/registry-json-schema-form/es/index.js + 277 modules
var es = __webpack_require__(31708);
// EXTERNAL MODULE: ./src/store/Store.js + 7 modules
var Store = __webpack_require__(91342);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.js + 1 modules
var Alert = __webpack_require__(859);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Divider/Divider.js + 1 modules
var Divider = __webpack_require__(98048);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(67859);
;// CONCATENATED MODULE: ./src/addons/SettingsAddon/SettingsAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SettingsAddon_module = ({"panel":"f","actionToolbar":"g"});
;// CONCATENATED MODULE: ./src/addons/SettingsAddon/SettingsAddon.jsx




var _excluded = ["withRealTimeUpdates"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var SET_MODULE_PAYLOAD_SELECTOR = function SET_MODULE_PAYLOAD_SELECTOR(state) {
  return state.setModulePayload;
};
var SETUP_JSON_SELECTOR = function SETUP_JSON_SELECTOR(state) {
  return state.model.setupJson;
};
var PAYLOAD_SELECTOR = function PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};
var SettingsAddon = function SettingsAddon(_ref) {
  var _setupJson$settings;
  var _ref$withRealTimeUpda = _ref.withRealTimeUpdates,
    withRealTimeUpdates = _ref$withRealTimeUpda === void 0 ? false : _ref$withRealTimeUpda,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var setModulePayload = (0,Store/* useStore */.P)(SET_MODULE_PAYLOAD_SELECTOR);
  var setupJson = (0,Store/* useStore */.P)(SETUP_JSON_SELECTOR);
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var schema = _objectSpread(_objectSpread({}, (setupJson === null || setupJson === void 0 || (_setupJson$settings = setupJson.settings) === null || _setupJson$settings === void 0 ? void 0 : _setupJson$settings.schema) || {}), {}, {
    type: "object"
  });
  var _useState = (0,compat_module.useState)((payload === null || payload === void 0 ? void 0 : payload.settings) || {}),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    settings = _useState2[0],
    setSettings = _useState2[1];
  var handleOnSubmit = function handleOnSubmit(e) {
    var obj = Object.assign({}, payload);
    obj.settings = Object.assign({}, e.formData);
    setModulePayload(obj);
  };
  var handleFormUpdate = function handleFormUpdate(_ref2) {
    var formData = _ref2.formData;
    setSettings(formData);
    console.log("handleFormUpdate");
    console.log(formData);
    if (withRealTimeUpdates) {
      handleOnSubmit({
        formData: formData
      });
    }
  };
  (0,compat_module.useEffect)(function () {
    setSettings((payload === null || payload === void 0 ? void 0 : payload.settings) || {});
  }, [payload]);
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: SettingsAddon_module.panel,
    style: withRealTimeUpdates ? {
      paddingBottom: 0
    } : {}
  }, /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    p: "md"
  }, /*#__PURE__*/compat_module["default"].createElement(Alert/* Alert */.F, {
    color: "grape",
    style: {
      border: "1px solid #00000033"
    }
  }, "Form generated for the Module with the ", /*#__PURE__*/compat_module["default"].createElement("em", null, "Settings"), " configuration specified in the ", /*#__PURE__*/compat_module["default"].createElement("code", null, "setup.json"), ". The end customer will see the same UI.")), /*#__PURE__*/compat_module["default"].createElement(Divider/* Divider */.c, {
    ml: "md",
    label: "Label on the left"
  }), /*#__PURE__*/compat_module["default"].createElement(es/* default */.A, (0,esm_extends/* default */.A)({
    schema: schema,
    formData: settings,
    onSubmit: handleOnSubmit,
    onChange: handleFormUpdate
  }, props), withRealTimeUpdates ? /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null) : /*#__PURE__*/compat_module["default"].createElement("div", {
    className: SettingsAddon_module.actionToolbar
  }, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    type: "submit",
    style: {
      marginRight: 12,
      padding: "5px 12px",
      borderRadius: 4
    }
  }, "Update"))));
};
/* harmony default export */ const SettingsAddon_SettingsAddon = (SettingsAddon);
;// CONCATENATED MODULE: ./src/addons/SettingsAddon/index.js



/***/ })

}]);