"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[939],{

/***/ 68939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ OverviewAddon_OverviewAddon)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/OverviewAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const OverviewAddon_module = ({"panel":"A","modulePayloadBar":"B","tempTitle":"C"});
// EXTERNAL MODULE: ./src/utils/deviceRecognition.js
var deviceRecognition = __webpack_require__(29978);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Divider/Divider.js + 1 modules
var Divider = __webpack_require__(98048);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(24001);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.js + 1 modules
var Group = __webpack_require__(84543);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(99826);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/TextInput/TextInput.js
var TextInput = __webpack_require__(72280);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js + 1 modules
var ActionIcon = __webpack_require__(93898);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@tabler/icons-react/dist/esm/defaultAttributes.js
/**
 * @tabler/icons-react v2.47.0 - MIT
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/@tabler/icons-react/dist/esm/createReactComponent.js
/**
 * @tabler/icons-react v2.47.0 - MIT
 */





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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var createReactComponent = (iconName, iconNamePascal, iconNode) => {
  const Component = (0,compat_module.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, stroke = 2, children } = _b, rest = __objRest(_b, ["color", "size", "stroke", "children"]);
      return (0,compat_module.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: `tabler-icon tabler-icon-${iconName}`
        }), rest),
        [...iconNode.map(([tag, attrs]) => (0,compat_module.createElement)(tag, attrs)), ...children || []]
      );
    }
  );
  Component.propTypes = {
    color: (prop_types_default()).string,
    size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
    stroke: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
  };
  Component.displayName = `${iconNamePascal}`;
  return Component;
};


//# sourceMappingURL=createReactComponent.js.map

;// CONCATENATED MODULE: ./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.js
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconArrowRight = createReactComponent("arrow-right", "IconArrowRight", [
  ["path", { d: "M5 12l14 0", key: "svg-0" }],
  ["path", { d: "M13 18l6 -6", key: "svg-1" }],
  ["path", { d: "M13 6l6 6", key: "svg-2" }]
]);


//# sourceMappingURL=IconArrowRight.js.map

// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ModuleUrlSummary/index.js





var MODULE_URL_SELECTOR = function MODULE_URL_SELECTOR(state) {
  return state.model.url;
};
var ModuleUrlSummary = function ModuleUrlSummary() {
  var moduleUrl = (0,Store/* useStore */.P)(MODULE_URL_SELECTOR);
  var _useState = (0,compat_module.useState)(moduleUrl),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0,compat_module.useEffect)(function () {
    setValue(moduleUrl);
  }, [moduleUrl]);
  var handleOnInputUpdate = function handleOnInputUpdate(e) {
    var _e$target;
    setValue(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
  };
  var handleOnAction = function handleOnAction() {
    window.location = value ? "?url=".concat(encodeURI(value)) : window.location.href.split("?")[0];
  };
  return moduleUrl ? /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Module",
    description: "Current module loaded (url)",
    value: value,
    onChange: handleOnInputUpdate,
    size: "xs",
    rightSection: /*#__PURE__*/compat_module["default"].createElement(ActionIcon/* ActionIcon */.M, {
      size: "sm",
      variant: "filled",
      onClick: handleOnAction
    }, /*#__PURE__*/compat_module["default"].createElement(IconArrowRight, {
      size: "1rem",
      stroke: 1.5
    }))
  }) : /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null);
};
/* harmony default export */ const components_ModuleUrlSummary = (ModuleUrlSummary);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(23097);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js
var pack_sx = __webpack_require__(55470);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Flex/flex-props.js
const FLEX_SYSTEM_PROPS = {
  gap: { type: "spacing", property: "gap" },
  rowGap: { type: "spacing", property: "rowGap" },
  columnGap: { type: "spacing", property: "columnGap" },
  align: { type: "identity", property: "alignItems" },
  justify: { type: "identity", property: "justifyContent" },
  wrap: { type: "identity", property: "flexWrap" },
  direction: { type: "identity", property: "flexDirection" }
};


//# sourceMappingURL=flex-props.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/get-system-styles/get-system-styles.js + 7 modules
var get_system_styles = __webpack_require__(16048);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Flex/Flex.js







var Flex_defProp = Object.defineProperty;
var Flex_defProps = Object.defineProperties;
var Flex_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Flex_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Flex_hasOwnProp = Object.prototype.hasOwnProperty;
var Flex_propIsEnum = Object.prototype.propertyIsEnumerable;
var Flex_defNormalProp = (obj, key, value) => key in obj ? Flex_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Flex_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Flex_hasOwnProp.call(b, prop))
      Flex_defNormalProp(a, prop, b[prop]);
  if (Flex_getOwnPropSymbols)
    for (var prop of Flex_getOwnPropSymbols(b)) {
      if (Flex_propIsEnum.call(b, prop))
        Flex_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Flex_spreadProps = (a, b) => Flex_defProps(a, Flex_getOwnPropDescs(b));
var Flex_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Flex_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Flex_getOwnPropSymbols)
    for (var prop of Flex_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Flex_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const Flex = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Flex", defaultProps, props), { gap, rowGap, columnGap, align, justify, wrap, direction, sx } = _a, others = Flex_objRest(_a, ["gap", "rowGap", "columnGap", "align", "justify", "wrap", "direction", "sx"]);
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, Flex_spreadProps(Flex_spreadValues({}, others), {
    sx: [
      { display: "flex" },
      (theme) => (0,get_system_styles/* getSystemStyles */._)({ gap, rowGap, columnGap, align, justify, wrap, direction }, theme, FLEX_SYSTEM_PROPS),
      ...(0,pack_sx/* packSx */.n)(sx)
    ],
    ref
  }));
});
Flex.displayName = "@mantine/core/Flex";


//# sourceMappingURL=Flex.js.map

;// CONCATENATED MODULE: ./node_modules/@tabler/icons-react/dist/esm/icons/IconEye.js
/**
 * @tabler/icons-react v2.47.0 - MIT
 */



var IconEye = createReactComponent("eye", "IconEye", [
  ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",
      key: "svg-1"
    }
  ]
]);


//# sourceMappingURL=IconEye.js.map

// EXTERNAL MODULE: ./src/utils/getQueryParams.js
var getQueryParams = __webpack_require__(46729);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/SetupJsonSummary/index.js







var SETUP_JSON_URL_SELECTOR = function SETUP_JSON_URL_SELECTOR(state) {
  return state.model.setupJsonUrl;
};
var EDITOR_URL = "https://everymundo.github.io/registry/editor";
var SetupJsonSummary = function SetupJsonSummary(props) {
  var setupJsonUrl = (0,Store/* useStore */.P)(SETUP_JSON_URL_SELECTOR);
  var _useState = (0,compat_module.useState)(setupJsonUrl),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0,compat_module.useEffect)(function () {
    setValue(setupJsonUrl);
  }, [setupJsonUrl]);
  var handleOnInputUpdate = function handleOnInputUpdate(e) {
    var _e$target;
    setValue(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
  };
  var handleOnAction = function handleOnAction() {
    var moduleUrl = (0,getQueryParams/* default */.A)().url || null;
    var params = {
      url: moduleUrl,
      setup: value
    };
    var keys = Object.keys(params);
    if (!(keys !== null && keys !== void 0 && keys.length)) {
      window.location = window.location.href.split("?")[0];
    } else {
      window.location = "?".concat(keys.map(function (key) {
        return params[key] ? "".concat(key, "=").concat(encodeURI(params[key])) : null;
      }).filter(function (i) {
        return i;
      }).join("&"));
    }
  };
  return setupJsonUrl ? /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, (0,esm_extends/* default */.A)({
    label: "Setup.json",
    description: "Current setup.json used. Usually the one that includes the module. Change this value to use a different setup.json.",
    value: value,
    onChange: handleOnInputUpdate,
    size: "xs",
    rightSectionWidth: 56,
    rightSection: /*#__PURE__*/compat_module["default"].createElement(Flex, {
      justify: "flex-end",
      gap: "4px"
    }, /*#__PURE__*/compat_module["default"].createElement(ActionIcon/* ActionIcon */.M, {
      size: "sm",
      variant: "default",
      component: "a",
      href: "".concat(EDITOR_URL, "?setup=").concat(encodeURI(setupJsonUrl)),
      target: "_blank"
    }, /*#__PURE__*/compat_module["default"].createElement(IconEye, {
      size: "1rem",
      stroke: 1.5
    })), /*#__PURE__*/compat_module["default"].createElement(ActionIcon/* ActionIcon */.M, {
      size: "sm",
      variant: "filled",
      onClick: handleOnAction
    }, /*#__PURE__*/compat_module["default"].createElement(IconArrowRight, {
      size: "1rem",
      stroke: 1.5
    })))
  }, props)) : /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null);
};
/* harmony default export */ const components_SetupJsonSummary = (SetupJsonSummary);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ContextSummary/ContextSummary.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ContextSummary_module = ({"tempTitle":"D","container":"E"});
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ContextSummary/ContextSummary.jsx



var PAYLOAD_SELECTOR = function PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};

var ContextSummary = function ContextSummary() {
  var _context$airline, _context$geo, _context$geo2, _context$geo3, _context$geo4, _context$audience, _context$geo5, _context$geo6, _context$geo7, _context$geo8, _context$geo9, _context$geo10, _context$geo11;
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var _ref = payload || {},
    _ref$context = _ref.context,
    context = _ref$context === void 0 ? {} : _ref$context;
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      textAlign: "left",
      fontSize: 14
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Text/* Text */.E, {
    fw: 500,
    fz: "sm",
    mb: "xs"
  }, "Context:"), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: ContextSummary_module.container
  }, /*#__PURE__*/compat_module["default"].createElement("table", null, /*#__PURE__*/compat_module["default"].createElement("tbody", null, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Vertical"), /*#__PURE__*/compat_module["default"].createElement("td", null, (context === null || context === void 0 ? void 0 : context.type) || "airlines")), /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Tenant"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$airline = context.airline) === null || _context$airline === void 0 ? void 0 : _context$airline.code)), /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Site Edition"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo = context.geo) === null || _context$geo === void 0 || (_context$geo = _context$geo.language) === null || _context$geo === void 0 ? void 0 : _context$geo.site_edition)), /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Language"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo2 = context.geo) === null || _context$geo2 === void 0 || (_context$geo2 = _context$geo2.language) === null || _context$geo2 === void 0 ? void 0 : _context$geo2.lang)), context !== null && context !== void 0 && (_context$geo3 = context.geo) !== null && _context$geo3 !== void 0 && (_context$geo3 = _context$geo3.language) !== null && _context$geo3 !== void 0 && _context$geo3.siteEditionMarket ? /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Market"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo4 = context.geo) === null || _context$geo4 === void 0 || (_context$geo4 = _context$geo4.language) === null || _context$geo4 === void 0 ? void 0 : _context$geo4.siteEditionMarket)) : null, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Device"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$audience = context.audience) === null || _context$audience === void 0 ? void 0 : _context$audience.device_category)), /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Text direction"), /*#__PURE__*/compat_module["default"].createElement("td", null, (context === null || context === void 0 || (_context$geo5 = context.geo) === null || _context$geo5 === void 0 || (_context$geo5 = _context$geo5.language) === null || _context$geo5 === void 0 ? void 0 : _context$geo5.textDirection) || "ltr")), context !== null && context !== void 0 && (_context$geo6 = context.geo) !== null && _context$geo6 !== void 0 && (_context$geo6 = _context$geo6.location) !== null && _context$geo6 !== void 0 && _context$geo6.user_input_origin_airport_code ? /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Prepopulation Origin:"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo7 = context.geo) === null || _context$geo7 === void 0 || (_context$geo7 = _context$geo7.location) === null || _context$geo7 === void 0 ? void 0 : _context$geo7.user_input_origin_airport_code)) : null, context !== null && context !== void 0 && (_context$geo8 = context.geo) !== null && _context$geo8 !== void 0 && (_context$geo8 = _context$geo8.location) !== null && _context$geo8 !== void 0 && _context$geo8.user_input_destination_airport_code ? /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Prepopulation Destination:"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo9 = context.geo) === null || _context$geo9 === void 0 || (_context$geo9 = _context$geo9.location) === null || _context$geo9 === void 0 ? void 0 : _context$geo9.user_input_destination_airport_code)) : null, context !== null && context !== void 0 && (_context$geo10 = context.geo) !== null && _context$geo10 !== void 0 && (_context$geo10 = _context$geo10.location) !== null && _context$geo10 !== void 0 && _context$geo10.user_input_property_code ? /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", {
    style: {
      paddingRight: 10
    }
  }, "Prepopulation Property"), /*#__PURE__*/compat_module["default"].createElement("td", null, context === null || context === void 0 || (_context$geo11 = context.geo) === null || _context$geo11 === void 0 || (_context$geo11 = _context$geo11.location) === null || _context$geo11 === void 0 ? void 0 : _context$geo11.user_input_property_code)) : null))));
};
/* harmony default export */ const ContextSummary_ContextSummary = (ContextSummary);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ContextSummary/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__(62246);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/Select.js + 2 modules
var Select = __webpack_require__(92228);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ViewportSelector/ViewportSelector.jsx


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var VIEWPORT_SELECTOR = function VIEWPORT_SELECTOR(state) {
  return state.options.viewport.key;
};
var UPDATE_VIEWPORT_AND_DEVICE_SELECTOR = function UPDATE_VIEWPORT_AND_DEVICE_SELECTOR(state) {
  return state.updateViewportAndDevice;
};
var ViewportSelector = function ViewportSelector() {
  var selectedViewport = (0,Store/* useStore */.P)(VIEWPORT_SELECTOR);
  var updateViewportAndDevice = (0,Store/* useStore */.P)(UPDATE_VIEWPORT_AND_DEVICE_SELECTOR);
  var handleOnChangeViewport = function handleOnChangeViewport(selected) {
    if ((0,esm_typeof/* default */.A)(constants/* VIEWPORT_MAPPING */.qX[selected]) !== undefined) {
      var viewport = constants/* VIEWPORT_MAPPING */.qX[selected];
      updateViewportAndDevice(_objectSpread({
        key: selected
      }, viewport), viewport.device);
    }
  };
  return /*#__PURE__*/compat_module["default"].createElement(Select/* Select */.l6, {
    size: "xs",
    value: selectedViewport,
    onChange: handleOnChangeViewport,
    className: "form-control",
    searchable: true,
    style: {
      textOverflow: "ellipsis"
    },
    data: Object.keys(constants/* VIEWPORT_MAPPING */.qX).map(function (key) {
      return _objectSpread({
        value: key,
        label: constants/* VIEWPORT_MAPPING */.qX[key].name
      }, constants/* VIEWPORT_MAPPING */.qX[key].disabled ? {
        disabled: true
      } : {});
    })
  });
};
/* harmony default export */ const ViewportSelector_ViewportSelector = (ViewportSelector);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/ViewportSelector/index.js


;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/TemplateSelector/TemplateSelector.jsx





var TEMPLATE_SELECTOR = function TEMPLATE_SELECTOR(state) {
  return state.options.template;
};
var UPDATE_TEMPLATE_SELECTOR = function UPDATE_TEMPLATE_SELECTOR(state) {
  return state.updateTemplate;
};
var TemplateSelector = function TemplateSelector() {
  var selectedTemplate = (0,Store/* useStore */.P)(TEMPLATE_SELECTOR);
  var updateTemplate = (0,Store/* useStore */.P)(UPDATE_TEMPLATE_SELECTOR);
  var handleOnChange = function handleOnChange(selected) {
    if ((0,esm_typeof/* default */.A)(constants/* TEMPLATE_MAPPING */.QE[selected]) !== undefined) {
      updateTemplate(selected);
    }
  };
  return /*#__PURE__*/compat_module["default"].createElement(Select/* Select */.l6, {
    size: "xs",
    value: selectedTemplate,
    onChange: handleOnChange,
    searchable: true,
    style: {
      textOverflow: "ellipsis"
    },
    data: Object.keys(constants/* TEMPLATE_MAPPING */.QE).map(function (key) {
      return {
        value: key,
        label: constants/* TEMPLATE_MAPPING */.QE[key].name
      };
    })
  });
};
/* harmony default export */ const TemplateSelector_TemplateSelector = (TemplateSelector);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/components/TemplateSelector/index.js


// EXTERNAL MODULE: ./src/components/ModulePayloadViewer/index.js + 5 modules
var ModulePayloadViewer = __webpack_require__(47674);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/OverviewAddon.jsx










var OverviewAddon = function OverviewAddon() {
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: OverviewAddon_module.panel
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      padding: 15,
      overflow: "auto"
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    mb: "md",
    shadow: "xs"
  }, /*#__PURE__*/compat_module["default"].createElement(components_ModuleUrlSummary, null), /*#__PURE__*/compat_module["default"].createElement(components_SetupJsonSummary, {
    mt: "xs"
  })), /*#__PURE__*/compat_module["default"].createElement(Divider/* Divider */.c, {
    my: "md"
  }), /*#__PURE__*/compat_module["default"].createElement(Stack/* Stack */.B, {
    spacing: "md",
    mt: "md",
    mb: "md"
  }, !deviceRecognition/* isMobile */.F && /*#__PURE__*/compat_module["default"].createElement(Group/* Group */.Y, {
    grow: true
  }, /*#__PURE__*/compat_module["default"].createElement(Text/* Text */.E, {
    fw: 500,
    fz: "sm"
  }, "Viewport:"), /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    style: {
      marginLeft: "auto",
      maxWidth: 148
    }
  }, /*#__PURE__*/compat_module["default"].createElement(ViewportSelector_ViewportSelector, null))), /*#__PURE__*/compat_module["default"].createElement(Group/* Group */.Y, {
    grow: true
  }, /*#__PURE__*/compat_module["default"].createElement(Text/* Text */.E, {
    fw: 500,
    fz: "sm"
  }, "Template:"), /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    style: {
      marginLeft: "auto",
      maxWidth: 148
    }
  }, /*#__PURE__*/compat_module["default"].createElement(TemplateSelector_TemplateSelector, null)))), /*#__PURE__*/compat_module["default"].createElement(Divider/* Divider */.c, {
    my: "md"
  }), /*#__PURE__*/compat_module["default"].createElement(ContextSummary_ContextSummary, null)), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: OverviewAddon_module.modulePayloadBar
  }, /*#__PURE__*/compat_module["default"].createElement(ModulePayloadViewer/* ModulePayloadViewer */.r, null)));
};
/* harmony default export */ const OverviewAddon_OverviewAddon = (OverviewAddon);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/index.js



/***/ }),

/***/ 47674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* reexport */ ModulePayloadViewer)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(99100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(18801);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Textarea/Textarea.js + 5 modules
var Textarea = __webpack_require__(98421);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(67859);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.js
var use_disclosure = __webpack_require__(40279);
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
;// CONCATENATED MODULE: ./src/utils/isJsonValid.js
/* harmony default export */ const isJsonValid = (function (str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return "";
  }
});
// EXTERNAL MODULE: ./node_modules/use-clipboard-copy/dist/index.js
var dist = __webpack_require__(92600);
;// CONCATENATED MODULE: ./src/components/CopyToClipboard/CopyToClipboard.jsx



// FIXME: Update isCopied

var CopyToClipboard = function CopyToClipboard(_ref) {
  var children = _ref.children,
    _ref$copiedTimeout = _ref.copiedTimeout,
    copiedTimeout = _ref$copiedTimeout === void 0 ? 1000 : _ref$copiedTimeout;
  var clipboard = (0,dist.useClipboard)({
    copiedTimeout: copiedTimeout
  });
  var handleCopy = (0,compat_module.useCallback)(function (text) {
    if (text !== null) {
      clipboard.copy(text);
    }
  }, [clipboard.copy]);
  return children({
    handleCopy: handleCopy,
    clipboard: clipboard
  });
};
/* harmony default export */ const CopyToClipboard_CopyToClipboard = (CopyToClipboard);
;// CONCATENATED MODULE: ./src/components/CopyToClipboard/index.js


// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/dist/index.mjs + 11 modules
var react_dist = __webpack_require__(58807);
;// CONCATENATED MODULE: ./src/components/ModulePayloadJsonEditor/ModulePayloadJsonEditor.jsx


var monacoEditorOptions = {
  lineNumbers: "off",
  minimap: {
    enabled: false
  },
  // readOnly: true,
  automaticLayout: true,
  lineDecorationsWidth: 0,
  scrollBeyondLastLine: false,
  contextmenu: false
};
var LoadingScreen = function LoadingScreen(props) {
  return /*#__PURE__*/compat_module["default"].createElement("div", null, "Loading payload...");
};
var ModulePayloadJsonEditor = function ModulePayloadJsonEditor(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var monacoRef = (0,compat_module.useRef)(null);
  var handleEditorWillMount = function handleEditorWillMount(monaco) {
    // monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    //   // enableSchemaRequest: true,
    //   validate: true,
    //   schemas: [
    //     {
    //       uri: "https://registry/setup-schema.json",
    //       fileMatch: ["setup-schema.json"],
    //       schema,
    //     },
    //     {
    //       uri: "https://registry/simple-json-schema.json",
    //       fileMatch: ["simple-json-schema.json"],
    //       schema: {},
    //     },
    //   ],
    // });
  };
  var handleEditorDidMount = function handleEditorDidMount(editor, monaco) {
    monacoRef.current = editor;
  };
  var handleEditorChange = function handleEditorChange(str) {
    onChange(str);
  };
  return /*#__PURE__*/compat_module["default"].createElement(react_dist/* default */.Ay, {
    language: "json",
    value: value,
    path: "internal://server/module-payload.json",
    theme: "vs-light",
    options: monacoEditorOptions,
    beforeMount: handleEditorWillMount,
    onMount: handleEditorDidMount,
    onChange: handleEditorChange,
    loading: /*#__PURE__*/compat_module["default"].createElement(LoadingScreen, null),
    saveViewState: false
  });
};
/* harmony default export */ const ModulePayloadJsonEditor_ModulePayloadJsonEditor = (ModulePayloadJsonEditor);
;// CONCATENATED MODULE: ./src/components/ModulePayloadViewer/ModulePayloadViewer.jsx


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var PAYLOAD_SELECTOR = function PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};
var SET_MODULE_PAYLOAD_SELECTOR = function SET_MODULE_PAYLOAD_SELECTOR(state) {
  return state.setModulePayload;
};



var ModulePayloadViewer = function ModulePayloadViewer(_ref) {
  var _ref$defaultOpened = _ref.defaultOpened,
    defaultOpened = _ref$defaultOpened === void 0 ? true : _ref$defaultOpened;
  var _useDisclosure = (0,use_disclosure/* useDisclosure */.j)(defaultOpened),
    _useDisclosure2 = (0,slicedToArray/* default */.A)(_useDisclosure, 2),
    opened = _useDisclosure2[0],
    openedHandlers = _useDisclosure2[1];
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var setModulePayload = (0,Store/* useStore */.P)(SET_MODULE_PAYLOAD_SELECTOR);
  var _useState = (0,compat_module.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isEditMode = _useState2[0],
    setEditMode = _useState2[1];
  var _useState3 = (0,compat_module.useState)(JSON.stringify(payload, null, 2)),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    textPayload = _useState4[0],
    setTextPayload = _useState4[1];
  (0,compat_module.useEffect)(function () {
    if (isEditMode) {
      setTextPayload(JSON.stringify(payload, null, 2));
    }
  }, [payload, isEditMode]);
  var handleTextPayloadOnChange = function handleTextPayloadOnChange(str) {
    setTextPayload(str);
  };
  var handleToggleEditMode = function handleToggleEditMode() {
    setEditMode(!isEditMode);
  };
  var handleUpdatePayload = function handleUpdatePayload() {
    var obj = isJsonValid(textPayload); // FIXME: Validate
    if (obj !== "") {
      setModulePayload(obj);
      setEditMode(false);
    }
  };
  return /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    sx: function sx(theme) {
      return {
        borderTop: "1px solid ".concat(theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]),
        flex: "0 1 0%",
        boxSizing: "border-box"
      };
    }
  }, /*#__PURE__*/compat_module["default"].createElement(UnstyledButton/* UnstyledButton */.N, {
    sx: function sx(theme) {
      return (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({
        fontWeight: 600,
        color: theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.dark[8],
        width: "100%",
        fontSize: 14
      }, "width", "100%"), "padding", "10px 15px"), "display", "flex"), "&:hover", {
        backgroundColor: "rgba(255,255,255,0.1)"
      }), "backgroundColor", theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff");
    },
    onClick: function onClick() {
      return openedHandlers.toggle();
    }
  }, "Module Payload", /*#__PURE__*/compat_module["default"].createElement("svg", {
    style: _objectSpread({
      marginLeft: "auto",
      transition: "transform .2s ease-in-out"
    }, opened ? {} : {
      transform: "rotate(-180deg)"
    }),
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16"
  }, /*#__PURE__*/compat_module["default"].createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }))), /*#__PURE__*/compat_module["default"].createElement(Collapse/* Collapse */.S, {
    "in": opened,
    sx: {
      padding: 1
    }
  }, !isEditMode ? /*#__PURE__*/compat_module["default"].createElement(Textarea/* Textarea */.T, {
    autoCorrect: "off",
    readOnly: true,
    spellCheck: "false",
    styles: function styles(theme) {
      return {
        input: {
          maxHeight: 600,
          minHeight: 320,
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "#e7f2fe",
          border: "1px solid ".concat(theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]),
          fontSize: 13,
          fontFamily: "monospace",
          padding: 9.5,
          borderRadius: 4,
          margin: 0,
          width: "100%",
          whiteSpace: "pre",
          display: "block",
          color: "#333",
          paddingLeft: 15,
          boxShadow: "none"
        }
      };
    },
    value: JSON.stringify(payload, null, 2)
  }) : /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      height: 320,
      border: "1px solid #ddd",
      background: "#fff",
      boxShadow: "0 3px 4px rgb(0 0 0 / 8%)"
    }
  }, /*#__PURE__*/compat_module["default"].createElement(ModulePayloadJsonEditor_ModulePayloadJsonEditor, {
    value: textPayload,
    onChange: handleTextPayloadOnChange
  })), /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      fontSize: 11,
      color: "#888",
      margin: "10px 15px"
    }
  }, "Data received by the Module at initialization.", /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      marginTop: -2,
      "float": "right",
      textAlign: "left"
    }
  }, !isEditMode ? /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement(CopyToClipboard_CopyToClipboard, null, function (_ref3) {
    var handleCopy = _ref3.handleCopy,
      clipboard = _ref3.clipboard;
    return /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
      variant: "subtle",
      size: "xs",
      color: "gray",
      compact: true,
      onClick: function onClick() {
        return handleCopy(JSON.stringify(payload, null, 2));
      },
      style: {
        marginLeft: 10
      }
    }, !clipboard.copied ? "Copy" : "Copied");
  }), /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    variant: "subtle",
    size: "xs",
    color: "gray",
    compact: true,
    style: {
      marginLeft: 5
    },
    onClick: function onClick() {
      return handleToggleEditMode();
    }
  }, "Edit")) : /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    variant: "subtle",
    size: "xs",
    color: "gray",
    compact: true,
    style: {
      marginLeft: 5
    },
    onClick: function onClick() {
      return handleToggleEditMode();
    }
  }, "Cancel"), /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    variant: "filled",
    size: "xs",
    color: "gray",
    compact: true,
    style: {
      marginLeft: 5
    },
    onClick: function onClick() {
      return handleUpdatePayload();
    }
  }, "Update"))))));
};

/* harmony default export */ const ModulePayloadViewer_ModulePayloadViewer = ((/* unused pure expression or super */ null && (ModulePayloadViewer)));
;// CONCATENATED MODULE: ./src/components/ModulePayloadViewer/index.js



/***/ })

}]);