"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[823],{

/***/ 859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ Alert)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
const Alert = (0,react.forwardRef)((props, ref) => {
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
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, Alert_spreadValues({
    id: rootId,
    role: "alert",
    "aria-labelledby": titleId,
    "aria-describedby": bodyId,
    className: cx(classes.root, classes[variant], className),
    ref
  }, others), /* @__PURE__ */ react.createElement("div", {
    className: classes.wrapper
  }, icon && /* @__PURE__ */ react.createElement("div", {
    className: classes.icon
  }, icon), /* @__PURE__ */ react.createElement("div", {
    className: classes.body
  }, title && /* @__PURE__ */ react.createElement("div", {
    className: classes.title,
    "data-with-close-button": withCloseButton || void 0
  }, /* @__PURE__ */ react.createElement("span", {
    id: titleId,
    className: classes.label
  }, title)), /* @__PURE__ */ react.createElement("div", {
    id: bodyId,
    className: classes.message
  }, children)), withCloseButton && /* @__PURE__ */ react.createElement(CloseButton/* CloseButton */.J, {
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

/***/ 65823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ TestAddon_TestAddon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(45458);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(54756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/use-clipboard-copy/dist/index.js
var dist = __webpack_require__(92600);
// EXTERNAL MODULE: ./node_modules/json-difference/dist/index.js
var json_difference_dist = __webpack_require__(73970);
;// CONCATENATED MODULE: ./src/utils/jsonDifference.js
// const transform = require("lodash.transform");
// const isEqual = require("lodash.isequal");
// const isArray = require("lodash.isarray");
// const isObject = require("lodash.isobject");

// /**
//  * Find difference between two objects
//  * @param  {object} origObj - Source object to compare newObj against
//  * @param  {object} newObj  - New object with potential changes
//  * @return {object} differences
//  */
// function jsonDifference(origObj, newObj) {
//   function changes(newObj, origObj) {
//     let arrayIndexCounter = 0;
//     return transform(newObj, function (result, value, key) {
//       if (!isEqual(value, origObj[key])) {
//         let resultKey = isArray(origObj) ? arrayIndexCounter++ : key;
//         result[resultKey] =
//           isObject(value) && isObject(origObj[key])
//             ? changes(value, origObj[key])
//             : value;
//       }
//     });
//   }
//   return changes(newObj, origObj);
// }

// export default jsonDifference;


function jsonDifference(origObj, newObj) {
  return (0,json_difference_dist.getDiff)(origObj, newObj, true);
}
/* harmony default export */ const utils_jsonDifference = (jsonDifference);
// EXTERNAL MODULE: ./src/data/styles/themes/index.js + 5 modules
var themes = __webpack_require__(41459);
// EXTERNAL MODULE: ./src/utils/getDefaultPayloadBySetupJson.js
var getDefaultPayloadBySetupJson = __webpack_require__(26088);
;// CONCATENATED MODULE: ./src/utils/getDefaultModulePayload.js




var styles = {
  // FIXME: Add design system, ex: "eds"
  selectedTheme: themes/* defaultTheme */.zQ,
  tokens: themes/* defaultThemeData */.nG.tokens,
  resources: themes/* defaultThemeData */.nG.resources || {}
};
var getDefaultModulePayload = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee(setupJson) {
    var payload;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,getDefaultPayloadBySetupJson/* default */.A)(setupJson, {
            styles: styles
          });
        case 2:
          payload = _context.sent;
          return _context.abrupt("return", payload);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDefaultModulePayload(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const utils_getDefaultModulePayload = (getDefaultModulePayload);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.js + 1 modules
var Alert = __webpack_require__(859);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.js + 10 modules
var Tabs = __webpack_require__(80579);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.js + 1 modules
var Group = __webpack_require__(84543);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 25 modules
var MantineProvider = __webpack_require__(23097);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/utils/assign-ref/assign-ref.js
var assign_ref = __webpack_require__(28525);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js
var use_merged_ref = __webpack_require__(12305);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/FileButton/FileButton.js




var __defProp = Object.defineProperty;
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
const defaultProps = {
  multiple: false
};
const FileButton = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("FileButton", defaultProps, props), {
    onChange,
    children,
    multiple,
    accept,
    name,
    form,
    resetRef,
    disabled,
    capture,
    inputProps
  } = _a, others = __objRest(_a, [
    "onChange",
    "children",
    "multiple",
    "accept",
    "name",
    "form",
    "resetRef",
    "disabled",
    "capture",
    "inputProps"
  ]);
  const inputRef = (0,react.useRef)();
  const onClick = () => {
    !disabled && inputRef.current.click();
  };
  const handleChange = (event) => {
    if (multiple) {
      onChange(Array.from(event.currentTarget.files));
    } else {
      onChange(event.currentTarget.files[0] || null);
    }
  };
  const reset = () => {
    inputRef.current.value = "";
  };
  (0,assign_ref/* assignRef */.b)(resetRef, reset);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, children(__spreadValues({ onClick }, others)), /* @__PURE__ */ react.createElement("input", __spreadValues({
    style: { display: "none" },
    type: "file",
    accept,
    multiple,
    onChange: handleChange,
    ref: (0,use_merged_ref/* useMergedRef */.p)(ref, inputRef),
    name,
    form,
    capture
  }, inputProps)));
});
FileButton.displayName = "@mantine/core/FileButton";


//# sourceMappingURL=FileButton.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(67859);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/JsonInput/JsonInput.js + 2 modules
var JsonInput = __webpack_require__(96924);
// EXTERNAL MODULE: ./src/store/Store.js + 11 modules
var Store = __webpack_require__(62361);
// EXTERNAL MODULE: ./src/components/ModulePayloadViewer/index.js + 5 modules
var ModulePayloadViewer = __webpack_require__(47674);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(99826);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/ScrollArea/ScrollArea.js + 12 modules
var ScrollArea = __webpack_require__(90986);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js
var get_size = __webpack_require__(9103);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Table/Table.styles.js


var Table_styles_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Table_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Table_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Table_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Table_styles_defNormalProp = (obj, key, value) => key in obj ? Table_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Table_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Table_styles_hasOwnProp.call(b, prop))
      Table_styles_defNormalProp(a, prop, b[prop]);
  if (Table_styles_getOwnPropSymbols)
    for (var prop of Table_styles_getOwnPropSymbols(b)) {
      if (Table_styles_propIsEnum.call(b, prop))
        Table_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,create_styles/* createStyles */.r)((theme, {
  captionSide,
  horizontalSpacing,
  verticalSpacing,
  fontSize,
  withBorder,
  withColumnBorders
}) => {
  const border = `${(0,rem/* rem */.D)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`;
  return {
    root: __spreadProps(Table_styles_spreadValues({}, theme.fn.fontStyles()), {
      width: "100%",
      borderCollapse: "collapse",
      captionSide,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
      border: withBorder ? border : void 0,
      "& > caption": {
        marginTop: captionSide === "top" ? 0 : theme.spacing.xs,
        marginBottom: captionSide === "bottom" ? 0 : theme.spacing.xs,
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]
      },
      "& > thead > tr > th, & > tfoot > tr > th, & > tbody > tr > th": {
        textAlign: "left",
        fontWeight: "bold",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: (0,get_size/* getSize */.Y)({ size: fontSize, sizes: theme.fontSizes }),
        padding: `${(0,get_size/* getSize */.Y)({ size: verticalSpacing, sizes: theme.spacing })} ${(0,get_size/* getSize */.Y)({
          size: horizontalSpacing,
          sizes: theme.spacing
        })}`
      },
      "& > thead > tr > th": {
        borderBottom: border
      },
      "& > tfoot > tr > th, & > tbody > tr > th": {
        borderTop: border
      },
      "& > tbody > tr > td": {
        padding: `${(0,get_size/* getSize */.Y)({
          size: verticalSpacing,
          sizes: theme.spacing
        })} ${(0,get_size/* getSize */.Y)({ size: horizontalSpacing, sizes: theme.spacing })}`,
        borderTop: border,
        fontSize: (0,get_size/* getSize */.Y)({ size: fontSize, sizes: theme.fontSizes })
      },
      "& > tbody > tr:first-of-type > td, & > tbody > tr:first-of-type > th": {
        borderTop: "none"
      },
      "& > thead > tr > th, & > tbody > tr > td": {
        borderRight: withColumnBorders ? border : "none",
        "&:last-of-type": {
          borderRight: "none",
          borderLeft: withColumnBorders ? border : "none"
        }
      },
      "& > tbody > tr > th": {
        borderRight: withColumnBorders ? border : "none"
      },
      "&[data-striped] > tbody > tr:nth-of-type(odd)": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
      },
      "&[data-hover] > tbody > tr": theme.fn.hover({
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
      })
    })
  };
});

/* harmony default export */ const Table_styles = (useStyles);
//# sourceMappingURL=Table.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Table/Table.js





var Table_defProp = Object.defineProperty;
var Table_defProps = Object.defineProperties;
var Table_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Table_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Table_hasOwnProp = Object.prototype.hasOwnProperty;
var Table_propIsEnum = Object.prototype.propertyIsEnumerable;
var Table_defNormalProp = (obj, key, value) => key in obj ? Table_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Table_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Table_hasOwnProp.call(b, prop))
      Table_defNormalProp(a, prop, b[prop]);
  if (Table_getOwnPropSymbols)
    for (var prop of Table_getOwnPropSymbols(b)) {
      if (Table_propIsEnum.call(b, prop))
        Table_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Table_spreadProps = (a, b) => Table_defProps(a, Table_getOwnPropDescs(b));
var Table_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Table_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Table_getOwnPropSymbols)
    for (var prop of Table_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Table_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Table_defaultProps = {
  striped: false,
  highlightOnHover: false,
  captionSide: "top",
  horizontalSpacing: "xs",
  fontSize: "sm",
  verticalSpacing: 7,
  withBorder: false,
  withColumnBorders: false
};
const Table = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Table", Table_defaultProps, props), {
    className,
    children,
    striped,
    highlightOnHover,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    fontSize,
    unstyled,
    withBorder,
    withColumnBorders,
    variant
  } = _a, others = Table_objRest(_a, [
    "className",
    "children",
    "striped",
    "highlightOnHover",
    "captionSide",
    "horizontalSpacing",
    "verticalSpacing",
    "fontSize",
    "unstyled",
    "withBorder",
    "withColumnBorders",
    "variant"
  ]);
  const { classes, cx } = Table_styles({ captionSide, verticalSpacing, horizontalSpacing, fontSize, withBorder, withColumnBorders }, { unstyled, name: "Table", variant });
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, Table_spreadProps(Table_spreadValues({}, others), {
    component: "table",
    ref,
    className: cx(classes.root, className),
    "data-striped": striped || void 0,
    "data-hover": highlightOnHover || void 0
  }), children);
});
Table.displayName = "@mantine/core/Table";


//# sourceMappingURL=Table.js.map

;// CONCATENATED MODULE: ./src/addons/TestAddon/components/ScenariosList.jsx





var ScenariosList_useStyles = (0,create_styles/* createStyles */.r)(function (theme) {
  return {
    header: {
      position: "sticky",
      top: 0,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      transition: "box-shadow 150ms ease",
      zIndex: 1,
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: "".concat((0,rem/* rem */.D)(1), " solid ").concat(theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2])
      }
    },
    scrolled: {
      boxShadow: theme.shadows.sm
    },
    rowSelected: {
      backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2) : theme.colors[theme.primaryColor][0]
    }
  };
});
function ScenariosList(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$onRowSelected = _ref.onRowSelected,
    onRowSelected = _ref$onRowSelected === void 0 ? function () {
      return nul;
    } : _ref$onRowSelected;
  var _useStyles = ScenariosList_useStyles(),
    classes = _useStyles.classes,
    cx = _useStyles.cx;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    scrolled = _useState2[0],
    setScrolled = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    selection = _useState4[0],
    setSelection = _useState4[1];
  var toggleRow = function toggleRow(id) {
    return setSelection(function (current) {
      return current.includes(id) ? current.filter(function (item) {
        return item !== id;
      }) : [].concat((0,toConsumableArray/* default */.A)(current), [id]);
    });
  };
  var toggleAll = function toggleAll() {
    return setSelection(function (current) {
      return current.length === data.length ? [] : data.map(function (item) {
        return item.id;
      });
    });
  };
  var rows = data.map(function (item, index) {
    var selected = selection.includes(item.id);
    return /*#__PURE__*/react.createElement("tr", {
      key: "".concat(index).concat(item.name),
      className: cx((0,defineProperty/* default */.A)({}, classes.rowSelected, selected)),
      onClick: function onClick() {
        return onRowSelected(index);
      }
    }, /*#__PURE__*/react.createElement("td", null), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement(Group/* Group */.Y, {
      spacing: "sm"
    }, /*#__PURE__*/react.createElement(Text/* Text */.E, {
      weight: 500
    }, item.name))), /*#__PURE__*/react.createElement("td", null, item.details));
  });
  return /*#__PURE__*/react.createElement(ScrollArea/* ScrollArea */.F, {
    h: 180,
    onScrollPositionChange: function onScrollPositionChange(_ref2) {
      var y = _ref2.y;
      return setScrolled(y !== 0);
    }
  }, /*#__PURE__*/react.createElement(Table, {
    maw: "100%",
    miw: 300,
    verticalSpacing: "xs",
    fontSize: "xs",
    highlightOnHover: true
  }, /*#__PURE__*/react.createElement("thead", {
    className: cx(classes.header, (0,defineProperty/* default */.A)({}, classes.scrolled, scrolled))
  }, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    style: {
      width: (0,rem/* rem */.D)(40)
    }
  }), /*#__PURE__*/react.createElement("th", null, "Name"), /*#__PURE__*/react.createElement("th", null))), /*#__PURE__*/react.createElement("tbody", null, rows)));
}
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Popover/Popover.js + 19 modules
var Popover = __webpack_require__(75733);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/TextInput/TextInput.js
var TextInput = __webpack_require__(72280);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Textarea/Textarea.js + 5 modules
var Textarea = __webpack_require__(98421);
;// CONCATENATED MODULE: ./src/addons/TestAddon/components/NewScenario.jsx



function NewScenario(_ref) {
  var children = _ref.children,
    _ref$onAction = _ref.onAction,
    onAction = _ref$onAction === void 0 ? function () {
      return null;
    } : _ref$onAction;
  var _useState = (0,react.useState)(""),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    details = _useState4[0],
    setDetails = _useState4[1];
  var handleOnAction = function handleOnAction() {
    onAction({
      name: name,
      details: details
    });
  };
  return /*#__PURE__*/react.createElement(Popover/* Popover */.A, {
    width: 300,
    trapFocus: true,
    position: "bottom-start",
    withArrow: true,
    shadow: "md"
  }, /*#__PURE__*/react.createElement(Popover/* Popover */.A.Target, null, children), /*#__PURE__*/react.createElement(Popover/* Popover */.A.Dropdown, {
    sx: function sx(theme) {
      return {
        background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      };
    }
  }, /*#__PURE__*/react.createElement(TextInput/* TextInput */.k, {
    label: "Name",
    size: "xs",
    required: true,
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), /*#__PURE__*/react.createElement(Textarea/* Textarea */.T, {
    label: "Details",
    size: "xs",
    mt: "xs",
    value: details,
    onChange: function onChange(e) {
      return setDetails(e.target.value);
    }
  }), /*#__PURE__*/react.createElement(Box/* Box */.a, {
    sx: {
      textAlign: "right"
    }
  }, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    size: "xs",
    variant: "filled",
    mt: "md",
    onClick: function onClick() {
      return handleOnAction();
    }
  }, "Add"))));
}
;// CONCATENATED MODULE: ./src/addons/TestAddon/TestAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TestAddon_module = ({"panel":"a","modulePayloadBar":"b"});
;// CONCATENATED MODULE: ./src/addons/TestAddon/TestAddon.jsx





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











var SETUP_JSON_SELECTOR = function SETUP_JSON_SELECTOR(state) {
  return state.model.setupJson;
};
var PAYLOAD_SELECTOR = function PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};
var OPTION_TEST_DATA_SELECTOR = function OPTION_TEST_DATA_SELECTOR(state) {
  return state.options.test.data;
};
var UPDATE_OPTIONS_TEST_DATA_SELECTOR = function UPDATE_OPTIONS_TEST_DATA_SELECTOR(state) {
  return state.updateOptionsTestData;
};
var SET_MODULE_PAYLOAD_SELECTOR = function SET_MODULE_PAYLOAD_SELECTOR(state) {
  return state.setModulePayload;
};
function downloadFile(filename) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "application/json:charset=UTF-8";
  var file = new File([content], filename, {
    type: type
  });
  var url = window.URL.createObjectURL(file);
  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = file.name;
  a.click();
  window.URL.revokeObjectURL(url);
}
var TestAddon = function TestAddon() {
  var setupJson = (0,Store/* useStore */.P)(SETUP_JSON_SELECTOR);
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var data = (0,Store/* useStore */.P)(OPTION_TEST_DATA_SELECTOR);
  var setData = (0,Store/* useStore */.P)(UPDATE_OPTIONS_TEST_DATA_SELECTOR);
  var setModulePayload = (0,Store/* useStore */.P)(SET_MODULE_PAYLOAD_SELECTOR);
  var _useState = (0,react.useState)("{}"),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    diff = _useState2[0],
    setDiff = _useState2[1];
  var clipboard = (0,dist.useClipboard)({
    copiedTimeout: 1000 // timeout duration in milliseconds
  });
  (0,react.useEffect)(function () {
    function process() {
      return _process.apply(this, arguments);
    }
    function _process() {
      _process = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var defaultAdnetifyPayload, difference;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils_getDefaultModulePayload(setupJson);
            case 2:
              defaultAdnetifyPayload = _context.sent;
              difference = utils_jsonDifference(defaultAdnetifyPayload, payload);
              setDiff(JSON.stringify(difference, null, 2));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _process.apply(this, arguments);
    }
    process();
  }, [payload, setupJson]);
  var handleCopyToClipboard = (0,react.useCallback)( /*#__PURE__*/(0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          clipboard.copy(diff);
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [clipboard.copy, diff]);
  var handleOnSetFile = function handleOnSetFile(file) {
    console.log(file);
    if (!file) {
      return;
    }

    // Check if the file is an json.
    if (!file.type || !file.type == "application/json") {
      console.log("File is not an JSON.", file.type, file);
      return;
    }
    var reader = new FileReader();
    reader.addEventListener("load", function (event) {
      console.log(event);
      var result = event.target.result;
      if (result && result.startsWith("data:application/json;base64,")) {
        // FIXME: Validate
        var jsonObj = JSON.parse(atob(result.substring("data:application/json;base64,".length)));
        setData({
          data: jsonObj
        });
      }
    });
    reader.readAsDataURL(file);
  };
  var handleOnDownloadFile = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var defaultAdnetifyPayload, _data;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return utils_getDefaultModulePayload(setupJson);
          case 2:
            defaultAdnetifyPayload = _context3.sent;
            _data = _objectSpread(_objectSpread({}, data), {}, {
              payload: defaultAdnetifyPayload
            });
            downloadFile("registry-test-addon-data.json", JSON.stringify(_data));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleOnDownloadFile() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleOnResetAll = function handleOnResetAll() {
    if (window.confirm("Do you really want to reset all?")) {
      setData([]);
    }
  };
  var handleOnAddScenario = function handleOnAddScenario(_ref3) {
    var _data$scenarios;
    var name = _ref3.name,
      details = _ref3.details;
    setData({
      data: _objectSpread(_objectSpread({}, data), {}, {
        scenarios: [].concat((0,toConsumableArray/* default */.A)(data !== null && data !== void 0 && (_data$scenarios = data.scenarios) !== null && _data$scenarios !== void 0 && _data$scenarios.length ? data.scenarios : []), [{
          name: name,
          details: details,
          data: Object.assign({}, payload)
        }])
      })
    });
  };
  var handleOnRowSelected = function handleOnRowSelected(index) {
    var _data$scenarios$index;
    console.log(data === null || data === void 0 ? void 0 : data.scenarios[index]);
    if (data !== null && data !== void 0 && (_data$scenarios$index = data.scenarios[index]) !== null && _data$scenarios$index !== void 0 && _data$scenarios$index.data) {
      setModulePayload(data.scenarios[index].data);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: TestAddon_module.panel
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      padding: 15,
      background: "var(--playground-colors-bg-standard)",
      overflow: "auto",
      flex: 1
    }
  }, /*#__PURE__*/react.createElement(Alert/* Alert */.F, {
    color: "grape",
    mb: "md",
    style: {
      border: "1px solid #00000033"
    }
  }, "Lorem ipsum lorem ..."), /*#__PURE__*/react.createElement(Tabs/* Tabs */.t, {
    defaultValue: "cases"
  }, /*#__PURE__*/react.createElement(Tabs/* Tabs */.t.List, null, /*#__PURE__*/react.createElement(Tabs/* Tabs */.t.Tab, {
    value: "cases"
  }, "Scenarios"), /*#__PURE__*/react.createElement(Tabs/* Tabs */.t.Tab, {
    value: "performance"
  }, "Performance")), /*#__PURE__*/react.createElement(Tabs/* Tabs */.t.Panel, {
    value: "cases",
    pt: "xs"
  }, /*#__PURE__*/react.createElement(Box/* Box */.a, {
    mb: "xs",
    sx: {
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/react.createElement(ScenariosList, {
    data: data === null || data === void 0 ? void 0 : data.scenarios,
    onRowSelected: function onRowSelected(index) {
      return handleOnRowSelected(index);
    }
  })), /*#__PURE__*/react.createElement(Group/* Group */.Y, {
    mb: "lg",
    spacing: 5
  }, /*#__PURE__*/react.createElement(FileButton, {
    onChange: handleOnSetFile,
    accept: "application/json",
    capture: true
  }, function (props) {
    return /*#__PURE__*/react.createElement(Button/* Button */.$, (0,esm_extends/* default */.A)({}, props, {
      variant: "default",
      size: "xs",
      compact: true
    }), "Upload");
  }), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true,
    onClick: function onClick() {
      return handleOnDownloadFile();
    }
  }, "Download"), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true,
    sx: {
      marginLeft: "auto"
    },
    onClick: function onClick() {
      return handleOnResetAll();
    }
  }, "Reset All")), /*#__PURE__*/react.createElement(JsonInput/* JsonInput */.f, {
    label: "Diff with default payload",
    value: diff,
    readOnly: true,
    autosize: true,
    minRows: 4,
    maxRows: 10,
    mb: "xs"
  }), /*#__PURE__*/react.createElement(Group/* Group */.Y, {
    mb: "xs",
    spacing: 5,
    position: "right"
  }, /*#__PURE__*/react.createElement(NewScenario, {
    onAction: function onAction(_props) {
      return handleOnAddScenario(_props);
    }
  }, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    size: "xs",
    variant: "default",
    compact: true,
    sx: {
      marginRight: "auto"
    }
    // leftIcon={<IconDatabase size={14} />}
  }, "Add scenario")), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true,
    onClick: handleCopyToClipboard
  }, !clipboard.copied ? "Copy" : "Copied"), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true
  }, "Reset"))), /*#__PURE__*/react.createElement(Tabs/* Tabs */.t.Panel, {
    value: "performance",
    pt: "xs"
  }, "Coming soon"))), /*#__PURE__*/react.createElement("div", {
    className: TestAddon_module.modulePayloadBar
  }, /*#__PURE__*/react.createElement(ModulePayloadViewer/* ModulePayloadViewer */.r, {
    defaultOpened: false
  })));
};
/* harmony default export */ const TestAddon_TestAddon = (TestAddon);
;// CONCATENATED MODULE: ./src/addons/TestAddon/index.js



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
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
// EXTERNAL MODULE: ./src/store/Store.js + 11 modules
var Store = __webpack_require__(62361);
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
  var handleCopy = (0,react.useCallback)(function (text) {
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
  return /*#__PURE__*/react.createElement("div", null, "Loading payload...");
};
var ModulePayloadJsonEditor = function ModulePayloadJsonEditor(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  var monacoRef = (0,react.useRef)(null);
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
  return /*#__PURE__*/react.createElement(react_dist/* default */.Ay, {
    language: "json",
    value: value,
    path: "internal://server/module-payload.json",
    theme: "vs-light",
    options: monacoEditorOptions,
    beforeMount: handleEditorWillMount,
    onMount: handleEditorDidMount,
    onChange: handleEditorChange,
    loading: /*#__PURE__*/react.createElement(LoadingScreen, null),
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
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    isEditMode = _useState2[0],
    setEditMode = _useState2[1];
  var _useState3 = (0,react.useState)(JSON.stringify(payload, null, 2)),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    textPayload = _useState4[0],
    setTextPayload = _useState4[1];
  (0,react.useEffect)(function () {
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
  return /*#__PURE__*/react.createElement(Box/* Box */.a, {
    sx: function sx(theme) {
      return {
        borderTop: "1px solid ".concat(theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]),
        flex: "0 1 0%",
        boxSizing: "border-box"
      };
    }
  }, /*#__PURE__*/react.createElement(UnstyledButton/* UnstyledButton */.N, {
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
  }, "Module Payload", /*#__PURE__*/react.createElement("svg", {
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
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }))), /*#__PURE__*/react.createElement(Collapse/* Collapse */.S, {
    "in": opened,
    sx: {
      padding: 1
    }
  }, !isEditMode ? /*#__PURE__*/react.createElement(Textarea/* Textarea */.T, {
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
  }) : /*#__PURE__*/react.createElement("div", {
    style: {
      height: 320,
      border: "1px solid #ddd",
      background: "#fff",
      boxShadow: "0 3px 4px rgb(0 0 0 / 8%)"
    }
  }, /*#__PURE__*/react.createElement(ModulePayloadJsonEditor_ModulePayloadJsonEditor, {
    value: textPayload,
    onChange: handleTextPayloadOnChange
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      fontSize: 11,
      color: "#888",
      margin: "10px 15px"
    }
  }, "Data received by the Module at initialization.", /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: -2,
      "float": "right",
      textAlign: "left"
    }
  }, !isEditMode ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(CopyToClipboard_CopyToClipboard, null, function (_ref3) {
    var handleCopy = _ref3.handleCopy,
      clipboard = _ref3.clipboard;
    return /*#__PURE__*/react.createElement(Button/* Button */.$, {
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
  }), /*#__PURE__*/react.createElement(Button/* Button */.$, {
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
  }, "Edit")) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* Button */.$, {
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
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* Button */.$, {
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



/***/ }),

/***/ 73970:
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=(e,f)=>{const o=[];for(const i in e)if(f.hasOwnProperty(i)){if(typeof e[i]=="object"&&typeof f[i]=="object"&&JSON.stringify(e[i])===JSON.stringify(f[i])||e[i]===f[i])continue;if(e[i]==="@{}"||e[i]==="@[]"){const n=f[i]==="@{}"?{}:f[i]==="@[]"?[]:f[i];e[i]==="@{}"?JSON.stringify(f[i])!=="{}"&&o.push([i,{},n]):JSON.stringify(f[i])!=="[]"&&o.push([i,[],n])}else o.push([i,e[i],f[i]])}return o},p=(e,f)=>{const o=[];let i=0;for(const n in e)if(!(n in f)){const r=e[n]==="@{}"?{}:e[n]==="@[]"?[]:e[n];o[i]=[n,r],i++}return o},O=(e,f,o,i)=>{const n=i?e?"[":".":"/",r=i?e?"]":"":e?"[]":"";return f==="__start__"?`${i&&e?"[":""}${o}${r}`:`${f}${n}${o}${r}`},s=(e,f=!1,o,i="__start__")=>{o===void 0&&(o=Array.isArray(e)?{__root__:"@[]"}:{__root__:"@{}"});for(const n of Object.keys(e)){const r=O(Array.isArray(e),i,n,f);typeof e[n]=="object"&&e[n]!==null?(Object.keys(e[n]).length===0?o[r]=e[n]:o[r]=Array.isArray(e[n])?"@[]":"@{}",s(e[n],f,o,r)):o[r]=e[n]}return o},c=e=>(e.edited=e.edited.filter(f=>!(typeof f[1]=="object"&&f[2]==="@{}")).map(f=>f[2]==="@{}"?[f[0],f[1],{}]:f[2]==="@[]"?[f[0],f[1],[]]:f),e),b={isLodashLike:!1},j=(e,f,o)=>{const{isLodashLike:i}=o??b,n={added:[],removed:[],edited:[]},r=typeof e=="string"?JSON.parse(e):e,_=typeof f=="string"?JSON.parse(f):f,y=s(r,i),g=s(_,i);return n.removed=p(y,g),n.added=p(g,y),n.edited=t(y,g),c(n)};exports.getDiff=j;exports.getEditedPaths=t;exports.getPathsDiff=p;exports.getStructPaths=s;


/***/ })

}]);