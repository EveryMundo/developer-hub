"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[966],{

/***/ 77966:
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(54756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
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
const FileButton = (0,compat_module.forwardRef)((props, ref) => {
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
  const inputRef = (0,compat_module.useRef)();
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
  return /* @__PURE__ */ compat_module["default"].createElement(compat_module["default"].Fragment, null, children(__spreadValues({ onClick }, others)), /* @__PURE__ */ compat_module["default"].createElement("input", __spreadValues({
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
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./src/store/Store.js + 7 modules
var Store = __webpack_require__(91342);
// EXTERNAL MODULE: ./src/components/ModulePayloadViewer/index.js + 5 modules
var ModulePayloadViewer = __webpack_require__(9604);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
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
const Table = (0,compat_module.forwardRef)((props, ref) => {
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
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, Table_spreadProps(Table_spreadValues({}, others), {
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
  var _useState = (0,compat_module.useState)(false),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    scrolled = _useState2[0],
    setScrolled = _useState2[1];
  var _useState3 = (0,compat_module.useState)([]),
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
    return /*#__PURE__*/compat_module["default"].createElement("tr", {
      key: "".concat(index).concat(item.name),
      className: cx((0,defineProperty/* default */.A)({}, classes.rowSelected, selected)),
      onClick: function onClick() {
        return onRowSelected(index);
      }
    }, /*#__PURE__*/compat_module["default"].createElement("td", null, /*#__PURE__*/compat_module["default"].createElement(Group/* Group */.Y, {
      spacing: "sm"
    }, /*#__PURE__*/compat_module["default"].createElement(Text/* Text */.E, {
      weight: 500
    }, item.name, ":DEV"))), /*#__PURE__*/compat_module["default"].createElement("td", null, item.tenant), /*#__PURE__*/compat_module["default"].createElement("td", null, item.siteEdition), /*#__PURE__*/compat_module["default"].createElement("td", null, item.slug), /*#__PURE__*/compat_module["default"].createElement("td", null, item.theme), /*#__PURE__*/compat_module["default"].createElement("td", null, item.module), /*#__PURE__*/compat_module["default"].createElement("td", null, item.campaign), /*#__PURE__*/compat_module["default"].createElement("td", null, item.details));
  });
  return /*#__PURE__*/compat_module["default"].createElement(ScrollArea/* ScrollArea */.F, {
    h: 180,
    onScrollPositionChange: function onScrollPositionChange(_ref2) {
      var y = _ref2.y;
      return setScrolled(y !== 0);
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Table, {
    maw: "100%",
    miw: 300,
    verticalSpacing: "xs",
    fontSize: "xs",
    highlightOnHover: true
  }, /*#__PURE__*/compat_module["default"].createElement("thead", {
    className: cx(classes.header, (0,defineProperty/* default */.A)({}, classes.scrolled, scrolled))
  }, /*#__PURE__*/compat_module["default"].createElement("tr", null, /*#__PURE__*/compat_module["default"].createElement("th", null, "Type"), /*#__PURE__*/compat_module["default"].createElement("th", null, "Tenant"), /*#__PURE__*/compat_module["default"].createElement("th", null, "SE"), /*#__PURE__*/compat_module["default"].createElement("th", null, "Slug"), /*#__PURE__*/compat_module["default"].createElement("th", null, "Theme"), /*#__PURE__*/compat_module["default"].createElement("th", null, "Module"), /*#__PURE__*/compat_module["default"].createElement("th", null, "Campaign"), /*#__PURE__*/compat_module["default"].createElement("th", null))), /*#__PURE__*/compat_module["default"].createElement("tbody", null, rows)));
}
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Popover/Popover.js + 19 modules
var Popover = __webpack_require__(75733);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js
var breakpoints_breakpoints = __webpack_require__(76483);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/SimpleGrid/get-sorted-breakpoints/get-sorted-breakpoints.js


function getSortedBreakpoints(theme, breakpoints) {
  if (breakpoints.length === 0) {
    return breakpoints;
  }
  const property = "maxWidth" in breakpoints[0] ? "maxWidth" : "minWidth";
  const sorted = [...breakpoints].sort((a, b) => (0,breakpoints_breakpoints/* getBreakpointValue */.rL)((0,get_size/* getSize */.Y)({ size: b[property], sizes: theme.breakpoints })) - (0,breakpoints_breakpoints/* getBreakpointValue */.rL)((0,get_size/* getSize */.Y)({ size: a[property], sizes: theme.breakpoints })));
  return property === "minWidth" ? sorted.reverse() : sorted;
}


//# sourceMappingURL=get-sorted-breakpoints.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.styles.js



var SimpleGrid_styles_defProp = Object.defineProperty;
var SimpleGrid_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SimpleGrid_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var SimpleGrid_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var SimpleGrid_styles_defNormalProp = (obj, key, value) => key in obj ? SimpleGrid_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SimpleGrid_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SimpleGrid_styles_hasOwnProp.call(b, prop))
      SimpleGrid_styles_defNormalProp(a, prop, b[prop]);
  if (SimpleGrid_styles_getOwnPropSymbols)
    for (var prop of SimpleGrid_styles_getOwnPropSymbols(b)) {
      if (SimpleGrid_styles_propIsEnum.call(b, prop))
        SimpleGrid_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SimpleGrid_styles_useStyles = (0,create_styles/* createStyles */.r)((theme, { spacing, breakpoints, cols, verticalSpacing }) => {
  const hasVerticalSpacing = verticalSpacing != null;
  const gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    var _a, _b;
    const property = "maxWidth" in breakpoint ? "max-width" : "min-width";
    const breakpointSize = (0,get_size/* getSize */.Y)({
      size: property === "max-width" ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints,
      units: "em"
    });
    const breakpointValue = (0,breakpoints_breakpoints/* getBreakpointValue */.rL)(breakpointSize) - (property === "max-width" ? 1 : 0);
    acc[`@media (${property}: ${(0,rem.em)(breakpointValue)})`] = {
      gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
      gap: `${(0,get_size/* getSize */.Y)({
        size: (_a = breakpoint.verticalSpacing) != null ? _a : hasVerticalSpacing ? verticalSpacing : spacing,
        sizes: theme.spacing
      })} ${(0,get_size/* getSize */.Y)({
        size: (_b = breakpoint.spacing) != null ? _b : spacing,
        sizes: theme.spacing
      })}`
    };
    return acc;
  }, {});
  return {
    root: SimpleGrid_styles_spreadValues({
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: `${(0,get_size/* getSize */.Y)({
        size: hasVerticalSpacing ? verticalSpacing : spacing,
        sizes: theme.spacing
      })} ${(0,get_size/* getSize */.Y)({ size: spacing, sizes: theme.spacing })}`
    }, gridBreakpoints)
  };
});

/* harmony default export */ const SimpleGrid_styles = (SimpleGrid_styles_useStyles);
//# sourceMappingURL=SimpleGrid.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/SimpleGrid/SimpleGrid.js





var SimpleGrid_defProp = Object.defineProperty;
var SimpleGrid_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SimpleGrid_hasOwnProp = Object.prototype.hasOwnProperty;
var SimpleGrid_propIsEnum = Object.prototype.propertyIsEnumerable;
var SimpleGrid_defNormalProp = (obj, key, value) => key in obj ? SimpleGrid_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SimpleGrid_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SimpleGrid_hasOwnProp.call(b, prop))
      SimpleGrid_defNormalProp(a, prop, b[prop]);
  if (SimpleGrid_getOwnPropSymbols)
    for (var prop of SimpleGrid_getOwnPropSymbols(b)) {
      if (SimpleGrid_propIsEnum.call(b, prop))
        SimpleGrid_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var SimpleGrid_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (SimpleGrid_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && SimpleGrid_getOwnPropSymbols)
    for (var prop of SimpleGrid_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && SimpleGrid_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SimpleGrid_defaultProps = {
  breakpoints: [],
  cols: 1,
  spacing: "md"
};
const SimpleGrid = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("SimpleGrid", SimpleGrid_defaultProps, props), {
    className,
    breakpoints,
    cols,
    spacing,
    verticalSpacing,
    children,
    unstyled,
    variant
  } = _a, others = SimpleGrid_objRest(_a, [
    "className",
    "breakpoints",
    "cols",
    "spacing",
    "verticalSpacing",
    "children",
    "unstyled",
    "variant"
  ]);
  const { classes, cx } = SimpleGrid_styles({ breakpoints, cols, spacing, verticalSpacing }, { name: "SimpleGrid", unstyled, variant });
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, SimpleGrid_spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), children);
});
SimpleGrid.displayName = "@mantine/core/SimpleGrid";


//# sourceMappingURL=SimpleGrid.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/TextInput/TextInput.js
var TextInput = __webpack_require__(72280);
;// CONCATENATED MODULE: ./src/addons/TestAddon/components/NewScenario.jsx



function NewScenario(_ref) {
  var children = _ref.children,
    _ref$onAction = _ref.onAction,
    onAction = _ref$onAction === void 0 ? function () {
      return null;
    } : _ref$onAction;
  var _useState = (0,compat_module.useState)(""),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    tenant = _useState2[0],
    setTenant = _useState2[1];
  var _useState3 = (0,compat_module.useState)(""),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    siteEdition = _useState4[0],
    setSiteEdition = _useState4[1];
  var _useState5 = (0,compat_module.useState)(""),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    slug = _useState6[0],
    setSlug = _useState6[1];
  var _useState7 = (0,compat_module.useState)(""),
    _useState8 = (0,slicedToArray/* default */.A)(_useState7, 2),
    module = _useState8[0],
    setModule = _useState8[1];
  var _useState9 = (0,compat_module.useState)(""),
    _useState10 = (0,slicedToArray/* default */.A)(_useState9, 2),
    theme = _useState10[0],
    setTheme = _useState10[1];
  var _useState11 = (0,compat_module.useState)(""),
    _useState12 = (0,slicedToArray/* default */.A)(_useState11, 2),
    campaign = _useState12[0],
    setCampaign = _useState12[1];
  var _useState13 = (0,compat_module.useState)(""),
    _useState14 = (0,slicedToArray/* default */.A)(_useState13, 2),
    details = _useState14[0],
    setDetails = _useState14[1];
  var handleOnAction = function handleOnAction() {
    onAction({
      name: name,
      details: details,
      tenant: tenant,
      siteEdition: siteEdition,
      slug: slug,
      theme: theme,
      module: module,
      campaign: campaign
    });
  };
  return /*#__PURE__*/compat_module["default"].createElement(Popover/* Popover */.A, {
    width: 300,
    trapFocus: true,
    position: "bottom-start",
    withArrow: true,
    shadow: "md"
  }, /*#__PURE__*/compat_module["default"].createElement(Popover/* Popover */.A.Target, null, children), /*#__PURE__*/compat_module["default"].createElement(Popover/* Popover */.A.Dropdown, {
    sx: function sx(theme) {
      return {
        background: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
      };
    }
  }, /*#__PURE__*/compat_module["default"].createElement(SimpleGrid, {
    cols: 2
  }, /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Tenant",
    size: "xs",
    required: true,
    value: tenant,
    onChange: function onChange(e) {
      return setTenant(e.target.value);
    }
  }), /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Site Edition",
    size: "xs",
    required: true,
    value: siteEdition,
    onChange: function onChange(e) {
      return setSiteEdition(e.target.value);
    }
  }), /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Slug",
    size: "xs",
    value: slug,
    onChange: function onChange(e) {
      return setSlug(e.target.value);
    }
  })), /*#__PURE__*/compat_module["default"].createElement(SimpleGrid, {
    cols: 2,
    mt: "lg"
  }, /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Env",
    size: "xs",
    required: true,
    defaultValue: "DEV",
    disabled: true
  }), /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Theme",
    size: "xs",
    value: theme,
    onChange: function onChange(e) {
      return setTheme(e.target.value);
    }
  }), /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Module",
    size: "xs",
    value: module,
    onChange: function onChange(e) {
      return setModule(e.target.value);
    },
    disabled: true
  }), /*#__PURE__*/compat_module["default"].createElement(TextInput/* TextInput */.k, {
    label: "Campaign",
    size: "xs",
    value: campaign,
    onChange: function onChange(e) {
      return setCampaign(e.target.value);
    },
    disabled: true
  })), /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    sx: {
      textAlign: "right"
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    size: "xs",
    variant: "filled",
    mt: "md",
    onClick: function onClick() {
      return handleOnAction();
    }
  }, "Add"))));
}
// EXTERNAL MODULE: ./node_modules/lodash.merge/index.js
var lodash_merge = __webpack_require__(70182);
var lodash_merge_default = /*#__PURE__*/__webpack_require__.n(lodash_merge);
;// CONCATENATED MODULE: ./src/addons/TestAddon/TestAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TestAddon_module = ({"panel":"m","modulePayloadBar":"n"});
// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__(62246);
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
var UPDATE_OPTIONS_STYLES_SELECTOR = function UPDATE_OPTIONS_STYLES_SELECTOR(state) {
  return state.updateOptionsStyles;
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
  var updateOptionsStyles = (0,Store/* useStore */.P)(UPDATE_OPTIONS_STYLES_SELECTOR);
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
    var _ref = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var defaultAdnetifyPayload, _data;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return utils_getDefaultModulePayload(setupJson);
          case 2:
            defaultAdnetifyPayload = _context.sent;
            _data = _objectSpread(_objectSpread({}, data), {}, {
              payload: defaultAdnetifyPayload
            });
            downloadFile("registry-test-addon-data.json", JSON.stringify(_data));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleOnDownloadFile() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleOnResetAll = function handleOnResetAll() {
    if (window.confirm("Do you really want to reset all?")) {
      setData([]);
    }
  };
  var handleOnResetPayload = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var defaultAdnetifyPayload;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return utils_getDefaultModulePayload(setupJson);
          case 2:
            defaultAdnetifyPayload = _context2.sent;
            setModulePayload(defaultAdnetifyPayload);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleOnResetPayload() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleOnAddScenario = function handleOnAddScenario(_ref3) {
    var _data$scenarios;
    var name = _ref3.name,
      details = _ref3.details,
      tenant = _ref3.tenant,
      siteEdition = _ref3.siteEdition,
      slug = _ref3.slug,
      theme = _ref3.theme,
      module = _ref3.module,
      campaign = _ref3.campaign;
    setData({
      data: _objectSpread(_objectSpread({}, data), {}, {
        scenarios: [{
          tenant: tenant,
          siteEdition: siteEdition,
          slug: slug,
          module: module,
          campaign: campaign,
          theme: theme,
          name: "TRFX",
          details: details
        }].concat((0,toConsumableArray/* default */.A)(data !== null && data !== void 0 && (_data$scenarios = data.scenarios) !== null && _data$scenarios !== void 0 && _data$scenarios.length ? data.scenarios : []))
      })
    });
  };
  var handleOnRowSelected = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee3(index) {
      var _data$scenarios$index, tenant, siteEdition, slug, theme, _payload$styles, _payload$styles2, response, out, _out$payload, remotePayload, defaultAdnetifyPayload, _payload, tokens, resources;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log(data === null || data === void 0 ? void 0 : data.scenarios[index]);
            if (data !== null && data !== void 0 && data.scenarios[index]) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            _data$scenarios$index = data === null || data === void 0 ? void 0 : data.scenarios[index], tenant = _data$scenarios$index.tenant, siteEdition = _data$scenarios$index.siteEdition, slug = _data$scenarios$index.slug, theme = _data$scenarios$index.theme;
            if (!(tenant && siteEdition)) {
              _context3.next = 28;
              break;
            }
            _context3.prev = 5;
            _context3.next = 8;
            return fetch((constants/* TESTER_SERVICE_URL */.y_ === null || constants/* TESTER_SERVICE_URL */.y_ === void 0 ? void 0 : constants/* TESTER_SERVICE_URL */.y_.replace(":tenant", tenant).replace(":siteEdition", siteEdition).replace(":slug", slug)) + (theme ? "?theme=".concat(theme) : ""), {
              method: "GET",
              headers: {
                Accept: "application/json"
              }
            });
          case 8:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 11;
              break;
            }
            throw responseError;
          case 11:
            _context3.next = 13;
            return response.json();
          case 13:
            out = _context3.sent;
            _out$payload = out.payload, remotePayload = _out$payload === void 0 ? {} : _out$payload;
            _context3.next = 17;
            return utils_getDefaultModulePayload(setupJson);
          case 17:
            defaultAdnetifyPayload = _context3.sent;
            _payload = _objectSpread(_objectSpread({}, remotePayload), {}, {
              settings: lodash_merge_default()({}, (defaultAdnetifyPayload === null || defaultAdnetifyPayload === void 0 ? void 0 : defaultAdnetifyPayload.settings) || {}, (remotePayload === null || remotePayload === void 0 ? void 0 : remotePayload.settings) || {}),
              tokens: _objectSpread({}, (defaultAdnetifyPayload === null || defaultAdnetifyPayload === void 0 ? void 0 : defaultAdnetifyPayload.tokens) || {})
            });
            tokens = _payload === null || _payload === void 0 || (_payload$styles = _payload.styles) === null || _payload$styles === void 0 ? void 0 : _payload$styles.value;
            resources = _payload === null || _payload === void 0 || (_payload$styles2 = _payload.styles) === null || _payload$styles2 === void 0 ? void 0 : _payload$styles2.resources;
            updateOptionsStyles({
              selectedTheme: null,
              tokens: tokens,
              resources: resources
            });
            setModulePayload(_payload);
            _context3.next = 28;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 25]]);
    }));
    return function handleOnRowSelected(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: TestAddon_module.panel
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    style: {
      padding: 15,
      background: "var(--playground-colors-bg-standard)",
      overflow: "auto",
      flex: 1
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Alert/* Alert */.F, {
    color: "grape",
    mb: "md",
    style: {
      border: "1px solid #00000033"
    }
  }, "Lorem ipsum lorem ..."), /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t, {
    defaultValue: "cases"
  }, /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t.List, null, /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t.Tab, {
    value: "cases"
  }, "Live"), /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t.Tab, {
    value: "performance"
  }, "Performance")), /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t.Panel, {
    value: "cases",
    pt: "xs"
  }, /*#__PURE__*/compat_module["default"].createElement(Group/* Group */.Y, {
    mb: "xs",
    spacing: 5,
    position: "right"
  }, /*#__PURE__*/compat_module["default"].createElement(FileButton, {
    onChange: handleOnSetFile,
    accept: "application/json",
    capture: true
  }, function (props) {
    return /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, (0,esm_extends/* default */.A)({}, props, {
      variant: "default",
      size: "xs",
      compact: true
    }), "Upload");
  }), /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true,
    onClick: function onClick() {
      return handleOnDownloadFile();
    }
  }, "Download")), /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    mb: "xs",
    sx: {
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/compat_module["default"].createElement(ScenariosList, {
    data: data === null || data === void 0 ? void 0 : data.scenarios,
    onRowSelected: function onRowSelected(index) {
      return handleOnRowSelected(index);
    }
  })), /*#__PURE__*/compat_module["default"].createElement(Group/* Group */.Y, {
    mb: "xs",
    spacing: 5,
    position: "right"
  }, /*#__PURE__*/compat_module["default"].createElement(NewScenario, {
    onAction: function onAction(_props) {
      return handleOnAddScenario(_props);
    }
  }, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    size: "xs",
    variant: "default",
    compact: true,
    sx: {
      marginRight: "auto"
    }
    // leftIcon={<IconDatabase size={14} />}
  }, "Add scenario")), /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    variant: "default",
    size: "xs",
    compact: true,
    sx: {
      marginLeft: "auto"
    },
    onClick: function onClick() {
      return handleOnResetPayload();
    }
  }, "Reset Payload"))), /*#__PURE__*/compat_module["default"].createElement(Tabs/* Tabs */.t.Panel, {
    value: "performance",
    pt: "xs"
  }, "Coming soon"))), /*#__PURE__*/compat_module["default"].createElement("div", {
    className: TestAddon_module.modulePayloadBar
  }, /*#__PURE__*/compat_module["default"].createElement(ModulePayloadViewer/* ModulePayloadViewer */.r, {
    defaultOpened: false
  })));
};
/* harmony default export */ const TestAddon_TestAddon = (TestAddon);
;// CONCATENATED MODULE: ./src/addons/TestAddon/index.js



/***/ })

}]);