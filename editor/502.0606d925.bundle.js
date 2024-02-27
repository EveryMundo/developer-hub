"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[502],{

/***/ 52502:
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
/* harmony default export */ const OverviewAddon_module = ({"panel":"h","modulePayloadBar":"i","tempTitle":"j"});
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

// EXTERNAL MODULE: ./src/store/Store.js + 7 modules
var Store = __webpack_require__(91342);
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
// EXTERNAL MODULE: ./src/addons/OverviewAddon/components/ContextSummary/index.js + 2 modules
var ContextSummary = __webpack_require__(1659);
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
var ModulePayloadViewer = __webpack_require__(9604);
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
  }), /*#__PURE__*/compat_module["default"].createElement(ContextSummary/* default */.A, null)), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: OverviewAddon_module.modulePayloadBar
  }, /*#__PURE__*/compat_module["default"].createElement(ModulePayloadViewer/* ModulePayloadViewer */.r, null)));
};
/* harmony default export */ const OverviewAddon_OverviewAddon = (OverviewAddon);
;// CONCATENATED MODULE: ./src/addons/OverviewAddon/index.js



/***/ })

}]);