"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[27],{

/***/ 859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Alert)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(23097);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.js + 1 modules
var use_id = __webpack_require__(66798);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function getVariantStyles({ variant, color, theme }) {
  if (variant === "filled") {
    const colors = theme.fn.variant({ variant: "filled", color });
    return {
      backgroundColor: colors.background,
      color: theme.white
    };
  }
  if (variant === "outline") {
    const colors = theme.fn.variant({ variant: "outline", color });
    return {
      color: colors.color,
      borderColor: colors.border,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    };
  }
  if (variant === "light") {
    const colors = theme.fn.variant({ variant: "light", color });
    return {
      backgroundColor: colors.background,
      color: colors.color
    };
  }
  return null;
}
var useStyles = (0,create_styles/* createStyles */.r)((theme, { radius, color }, { variant }) => ({
  root: __spreadValues(__spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    position: "relative",
    overflow: "hidden",
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.sm,
    borderRadius: theme.fn.radius(radius),
    border: `${(0,rem/* rem */.D)(1)} solid transparent`
  }), getVariantStyles({ variant, color, theme })),
  wrapper: {
    display: "flex"
  },
  body: {
    flex: 1
  },
  title: {
    boxSizing: "border-box",
    margin: 0,
    marginBottom: theme.spacing.xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    "&[data-with-close-button]": {
      paddingRight: theme.spacing.md
    }
  },
  label: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: {
    lineHeight: 1,
    width: (0,rem/* rem */.D)(20),
    height: (0,rem/* rem */.D)(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: theme.spacing.md,
    marginTop: 1
  },
  message: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    lineHeight: theme.lineHeight,
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: theme.fontSizes.sm,
    color: variant === "filled" ? theme.white : theme.colorScheme === "dark" ? variant === "light" ? theme.white : theme.colors.dark[0] : theme.black
  }),
  closeButton: {
    width: (0,rem/* rem */.D)(10),
    height: (0,rem/* rem */.D)(10),
    color: variant === "filled" ? theme.white : theme.colorScheme === "dark" ? variant === "light" ? theme.white : theme.colors.dark[0] : theme.black
  }
}));

/* harmony default export */ const Alert_styles = (useStyles);
//# sourceMappingURL=Alert.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/CloseButton/CloseButton.js + 1 modules
var CloseButton = __webpack_require__(76453);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.js







var Alert_defProp = Object.defineProperty;
var Alert_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Alert_hasOwnProp = Object.prototype.hasOwnProperty;
var Alert_propIsEnum = Object.prototype.propertyIsEnumerable;
var Alert_defNormalProp = (obj, key, value) => key in obj ? Alert_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Alert_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Alert_hasOwnProp.call(b, prop))
      Alert_defNormalProp(a, prop, b[prop]);
  if (Alert_getOwnPropSymbols)
    for (var prop of Alert_getOwnPropSymbols(b)) {
      if (Alert_propIsEnum.call(b, prop))
        Alert_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Alert_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Alert_getOwnPropSymbols)
    for (var prop of Alert_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Alert_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  variant: "light"
};
const Alert = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Alert", defaultProps, props), {
    id,
    className,
    title,
    variant,
    children,
    color,
    classNames,
    icon,
    styles,
    onClose,
    radius,
    withCloseButton,
    closeButtonLabel,
    unstyled
  } = _a, others = __objRest(_a, [
    "id",
    "className",
    "title",
    "variant",
    "children",
    "color",
    "classNames",
    "icon",
    "styles",
    "onClose",
    "radius",
    "withCloseButton",
    "closeButtonLabel",
    "unstyled"
  ]);
  const { classes, cx } = Alert_styles({ color, radius }, { classNames, styles, unstyled, variant, name: "Alert" });
  const rootId = (0,use_id/* useId */.B)(id);
  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, Alert_spreadValues({
    id: rootId,
    role: "alert",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    className: cx(classes.root, classes[variant], className),
    ref
  }, others), /* @__PURE__ */ compat_module["default"].createElement("div", {
    className: classes.wrapper
  }, icon && /* @__PURE__ */ compat_module["default"].createElement("div", {
    className: classes.icon
  }, icon), /* @__PURE__ */ compat_module["default"].createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ compat_module["default"].createElement("div", {
    className: classes.title,
    "data-with-close-button": withCloseButton || void 0
  }, /* @__PURE__ */ compat_module["default"].createElement("span", {
    id: titleId,
    className: classes.label
  }, title)), /* @__PURE__ */ compat_module["default"].createElement("div", {
    id: bodyId,
    className: classes.message
  }, children)), withCloseButton && /* @__PURE__ */ compat_module["default"].createElement(CloseButton/* CloseButton */.J, {
    className: classes.closeButton,
    onClick: onClose,
    variant: "transparent",
    size: 16,
    iconSize: 16,
    "aria-label": closeButtonLabel
  })));
});
Alert.displayName = "@mantine/core/Alert";


//# sourceMappingURL=Alert.js.map


/***/ }),

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
// EXTERNAL MODULE: ./node_modules/@everymundo/registry-json-schema-form/es/index.js + 280 modules
var es = __webpack_require__(91352);
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
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
/* harmony default export */ const SettingsAddon_module = ({"panel":"y","actionToolbar":"z"});
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



/***/ }),

/***/ 80045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ })

}]);