"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[579],{

/***/ 80579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 29 modules
var MantineProvider = __webpack_require__(35103);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-safe-context/create-safe-context.js
var create_safe_context = __webpack_require__(85618);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.errors.js
const TABS_ERRORS = {
  context: "Tabs component was not found in the tree",
  value: "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"
};


//# sourceMappingURL=Tabs.errors.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.context.js



const [TabsContextProvider, useTabsContext] = (0,create_safe_context/* createSafeContext */.F)(TABS_ERRORS.context);


//# sourceMappingURL=Tabs.context.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.styles.js
var Group_styles = __webpack_require__(36950);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsList/TabsList.styles.js



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
function getVariantStyles({ orientation, inverted, placement }, theme, variant) {
  const vertical = orientation === "vertical";
  if (variant === "default") {
    return {
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: `${(0,rem/* rem */.D)(2)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    };
  }
  if (variant === "outline") {
    return {
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: `${(0,rem/* rem */.D)(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`
    };
  }
  if (variant === "pills") {
    return {
      gap: `calc(${theme.spacing.sm} / 2)`
    };
  }
  return {};
}
var useStyles = (0,create_styles/* createStyles */.r)((theme, params, { variant }) => {
  const vertical = params.orientation === "vertical";
  return {
    tabsList: __spreadValues({
      display: "flex",
      flexWrap: "wrap",
      flexDirection: vertical ? "column" : "row",
      justifyContent: Group_styles/* GROUP_POSITIONS */.H[params.position],
      '& [role="tab"]': {
        flex: params.grow ? 1 : void 0
      }
    }, getVariantStyles(params, theme, variant))
  };
});

/* harmony default export */ const TabsList_styles = (useStyles);
//# sourceMappingURL=TabsList.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsList/TabsList.js






var TabsList_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabsList_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabsList_hasOwnProp = Object.prototype.hasOwnProperty;
var TabsList_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabsList_defNormalProp = (obj, key, value) => key in obj ? TabsList_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabsList_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabsList_hasOwnProp.call(b, prop))
      TabsList_defNormalProp(a, prop, b[prop]);
  if (TabsList_getOwnPropSymbols)
    for (var prop of TabsList_getOwnPropSymbols(b)) {
      if (TabsList_propIsEnum.call(b, prop))
        TabsList_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TabsList_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TabsList_getOwnPropSymbols)
    for (var prop of TabsList_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TabsList_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  grow: false,
  position: "left"
};
const TabsList = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("TabsList", defaultProps, props), { children, className, grow, position } = _a, others = __objRest(_a, ["children", "className", "grow", "position"]);
  const { orientation, variant, color, radius, inverted, placement, classNames, styles, unstyled } = useTabsContext();
  const { classes, cx } = TabsList_styles({ orientation, grow, color, position, radius, inverted, placement }, { name: "Tabs", unstyled, classNames, styles, variant });
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, __spreadProps(TabsList_spreadValues({}, others), {
    className: cx(classes.tabsList, className),
    ref,
    role: "tablist",
    "aria-orientation": orientation
  }), children);
});
TabsList.displayName = "@mantine/core/TabsList";


//# sourceMappingURL=TabsList.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/pack-sx/pack-sx.js
var pack_sx = __webpack_require__(55470);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsPanel/TabsPanel.styles.js


var TabsPanel_styles_useStyles = (0,create_styles/* createStyles */.r)((_theme, { orientation }) => ({
  panel: {
    flex: orientation === "vertical" ? 1 : void 0
  }
}));

/* harmony default export */ const TabsPanel_styles = (TabsPanel_styles_useStyles);
//# sourceMappingURL=TabsPanel.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsPanel/TabsPanel.js







var TabsPanel_defProp = Object.defineProperty;
var TabsPanel_defProps = Object.defineProperties;
var TabsPanel_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabsPanel_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabsPanel_hasOwnProp = Object.prototype.hasOwnProperty;
var TabsPanel_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabsPanel_defNormalProp = (obj, key, value) => key in obj ? TabsPanel_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabsPanel_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabsPanel_hasOwnProp.call(b, prop))
      TabsPanel_defNormalProp(a, prop, b[prop]);
  if (TabsPanel_getOwnPropSymbols)
    for (var prop of TabsPanel_getOwnPropSymbols(b)) {
      if (TabsPanel_propIsEnum.call(b, prop))
        TabsPanel_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TabsPanel_spreadProps = (a, b) => TabsPanel_defProps(a, TabsPanel_getOwnPropDescs(b));
var TabsPanel_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (TabsPanel_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && TabsPanel_getOwnPropSymbols)
    for (var prop of TabsPanel_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && TabsPanel_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TabsPanel_defaultProps = {};
const TabsPanel = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("TabsPanel", TabsPanel_defaultProps, props), { value, children, sx, className } = _a, others = TabsPanel_objRest(_a, ["value", "children", "sx", "className"]);
  const ctx = useTabsContext();
  const { classes, cx } = TabsPanel_styles({
    orientation: ctx.orientation,
    color: ctx.color,
    radius: ctx.radius,
    inverted: ctx.inverted,
    placement: ctx.placement
  }, {
    name: "Tabs",
    unstyled: ctx.unstyled,
    classNames: ctx.classNames,
    styles: ctx.styles,
    variant: ctx.variant
  });
  const panelId = ctx.getPanelId(value);
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;
  (0,compat_module.useEffect)(() => {
    ctx.setMountedPanelIds((prev) => [...prev, panelId]);
    return ctx.setMountedPanelIds((prev) => prev.filter((id) => id !== panelId));
  }, [panelId]);
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, TabsPanel_spreadProps(TabsPanel_spreadValues({}, others), {
    ref,
    sx: [{ display: !active ? "none" : void 0 }, ...(0,pack_sx/* packSx */.n)(sx)],
    className: cx(classes.panel, className),
    role: "tabpanel",
    id: panelId,
    "aria-labelledby": ctx.getTabId(value)
  }), content);
});
TabsPanel.displayName = "@mantine/core/TabsPanel";


//# sourceMappingURL=TabsPanel.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-scoped-keydown-handler/create-scoped-keydown-handler.js + 1 modules
var create_scoped_keydown_handler = __webpack_require__(51407);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tab/Tab.styles.js


var Tab_styles_defProp = Object.defineProperty;
var Tab_styles_defProps = Object.defineProperties;
var Tab_styles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tab_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tab_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var Tab_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tab_styles_defNormalProp = (obj, key, value) => key in obj ? Tab_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tab_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tab_styles_hasOwnProp.call(b, prop))
      Tab_styles_defNormalProp(a, prop, b[prop]);
  if (Tab_styles_getOwnPropSymbols)
    for (var prop of Tab_styles_getOwnPropSymbols(b)) {
      if (Tab_styles_propIsEnum.call(b, prop))
        Tab_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tab_styles_spreadProps = (a, b) => Tab_styles_defProps(a, Tab_styles_getOwnPropDescs(b));
function Tab_styles_getVariantStyles(theme, { orientation, color, radius, inverted, placement }, variant) {
  const vertical = orientation === "vertical";
  const filledScheme = theme.fn.variant({ color, variant: "filled" });
  const radiusValue = (0,rem/* rem */.D)(theme.fn.radius(radius));
  const borderRadius = orientation === "vertical" ? placement === "left" ? `${radiusValue} 0 0 ${radiusValue}` : ` 0 ${radiusValue} ${radiusValue} 0` : inverted ? `0 0 ${radiusValue} ${radiusValue}` : `${radiusValue} ${radiusValue} 0 0`;
  if (variant === "default") {
    return Tab_styles_spreadProps(Tab_styles_spreadValues({
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: `${(0,rem/* rem */.D)(2)} solid transparent`,
      [vertical ? placement === "left" ? "marginRight" : "marginLeft" : inverted ? "marginTop" : "marginBottom"]: (0,rem/* rem */.D)(-2),
      borderRadius
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    })), {
      "&[data-active]": Tab_styles_spreadValues({
        borderColor: filledScheme.background,
        color: theme.colorScheme === "dark" ? theme.white : theme.black
      }, theme.fn.hover({ borderColor: filledScheme.background }))
    });
  }
  if (variant === "outline") {
    return {
      borderRadius,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`,
      [vertical ? placement === "left" ? "borderRight" : "borderLeft" : inverted ? "borderTop" : "borderBottom"]: "none",
      "&[data-active]": {
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3],
        "&::before": {
          content: '""',
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          position: "absolute",
          bottom: vertical ? 0 : inverted ? "unset" : (0,rem/* rem */.D)(-1),
          top: vertical ? 0 : inverted ? (0,rem/* rem */.D)(-1) : "unset",
          [vertical ? "width" : "height"]: (0,rem/* rem */.D)(1),
          right: vertical ? placement === "left" ? (0,rem/* rem */.D)(-1) : "unset" : 0,
          left: vertical ? placement === "left" ? "unset" : (0,rem/* rem */.D)(-1) : 0
        }
      }
    };
  }
  if (variant === "pills") {
    return Tab_styles_spreadProps(Tab_styles_spreadValues({
      borderRadius: theme.fn.radius(radius)
    }, theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    })), {
      "&[data-active]": Tab_styles_spreadValues({
        backgroundColor: filledScheme.background,
        color: theme.white
      }, theme.fn.hover({ backgroundColor: filledScheme.background }))
    });
  }
  return {};
}
var Tab_styles_useStyles = (0,create_styles/* createStyles */.r)((theme, params, { variant }) => ({
  tabLabel: {},
  tab: Tab_styles_spreadValues({
    position: "relative",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: params.withIcon ? theme.spacing.xs : void 0,
    paddingRight: params.withRightSection ? theme.spacing.xs : void 0,
    fontSize: theme.fontSizes.sm,
    whiteSpace: "nowrap",
    zIndex: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: params.orientation === "horizontal" ? "center" : void 0,
    lineHeight: 1,
    "&:disabled": Tab_styles_spreadValues({
      opacity: 0.5,
      cursor: "not-allowed"
    }, theme.fn.hover({ backgroundColor: "transparent" })),
    "&:focus": {
      zIndex: 1
    }
  }, Tab_styles_getVariantStyles(theme, params, variant)),
  tabRightSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:not(:only-child)": {
      marginLeft: (0,rem/* rem */.D)(7)
    }
  },
  tabIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:not(:only-child)": {
      marginRight: (0,rem/* rem */.D)(7)
    }
  }
}));

/* harmony default export */ const Tab_styles = (Tab_styles_useStyles);
//# sourceMappingURL=Tab.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(99100);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tab/Tab.js







var Tab_defProp = Object.defineProperty;
var Tab_defProps = Object.defineProperties;
var Tab_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tab_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tab_hasOwnProp = Object.prototype.hasOwnProperty;
var Tab_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tab_defNormalProp = (obj, key, value) => key in obj ? Tab_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tab_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tab_hasOwnProp.call(b, prop))
      Tab_defNormalProp(a, prop, b[prop]);
  if (Tab_getOwnPropSymbols)
    for (var prop of Tab_getOwnPropSymbols(b)) {
      if (Tab_propIsEnum.call(b, prop))
        Tab_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tab_spreadProps = (a, b) => Tab_defProps(a, Tab_getOwnPropDescs(b));
var Tab_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Tab_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Tab_getOwnPropSymbols)
    for (var prop of Tab_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Tab_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tab_defaultProps = {};
const Tab = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("TabsTab", Tab_defaultProps, props), { value, children, onKeyDown, onClick, className, icon, rightSection, color } = _a, others = Tab_objRest(_a, ["value", "children", "onKeyDown", "onClick", "className", "icon", "rightSection", "color"]);
  const ctx = useTabsContext();
  const hasIcon = !!icon;
  const hasRightSection = !!rightSection;
  const { theme, classes, cx } = Tab_styles({
    withIcon: hasIcon || hasRightSection && !children,
    withRightSection: hasRightSection || hasIcon && !children,
    orientation: ctx.orientation,
    color: color || ctx.color,
    radius: ctx.radius,
    inverted: ctx.inverted,
    placement: ctx.placement
  }, {
    name: "Tabs",
    unstyled: ctx.unstyled,
    classNames: ctx.classNames,
    styles: ctx.styles,
    variant: ctx.variant
  });
  const isActive = value === ctx.value;
  const panelId = ctx.getPanelId(value);
  const ariaControls = ctx.mountedPanelIds.includes(value) ? panelId : void 0;
  const activateTab = (event) => {
    ctx.onTabChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  return /* @__PURE__ */ compat_module["default"].createElement(UnstyledButton/* UnstyledButton */.N, Tab_spreadProps(Tab_spreadValues({}, others), {
    unstyled: ctx.unstyled,
    className: cx(classes.tab, className),
    "data-active": isActive || void 0,
    ref,
    type: "button",
    role: "tab",
    id: ctx.getTabId(value),
    "aria-selected": isActive,
    tabIndex: isActive || ctx.value === null ? 0 : -1,
    "aria-controls": ariaControls,
    onClick: activateTab,
    onKeyDown: (0,create_scoped_keydown_handler/* createScopedKeydownHandler */.Y)({
      siblingSelector: '[role="tab"]',
      parentSelector: '[role="tablist"]',
      activateOnFocus: ctx.activateTabWithKeyboard,
      loop: ctx.loop,
      dir: theme.dir,
      orientation: ctx.orientation,
      onKeyDown
    })
  }), icon && /* @__PURE__ */ compat_module["default"].createElement("span", {
    className: classes.tabIcon
  }, icon), children && /* @__PURE__ */ compat_module["default"].createElement("span", {
    className: classes.tabLabel
  }, children), rightSection && /* @__PURE__ */ compat_module["default"].createElement("span", {
    className: classes.tabRightSection
  }, rightSection));
});
Tab.displayName = "@mantine/core/Tab";


//# sourceMappingURL=Tab.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/get-safe-id/get-safe-id.js
var get_safe_id = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.js + 1 modules
var use_id = __webpack_require__(66798);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js
var use_uncontrolled = __webpack_require__(19203);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/TabsProvider.js






function TabsProvider({
  defaultValue,
  value,
  onTabChange,
  orientation,
  children,
  loop,
  id,
  activateTabWithKeyboard,
  allowTabDeactivation,
  variant,
  color,
  radius,
  inverted,
  placement,
  keepMounted = true,
  classNames,
  styles,
  unstyled
}) {
  const uid = (0,use_id/* useId */.B)(id);
  const [mountedPanelIds, setMountedPanelIds] = (0,compat_module.useState)([]);
  const [_value, onChange] = (0,use_uncontrolled/* useUncontrolled */.Z)({
    value,
    defaultValue,
    finalValue: null,
    onChange: onTabChange
  });
  return /* @__PURE__ */ compat_module["default"].createElement(TabsContextProvider, {
    value: {
      placement,
      value: _value,
      orientation,
      id: uid,
      loop,
      activateTabWithKeyboard,
      getTabId: (0,get_safe_id/* getSafeId */.r)(`${uid}-tab`, TABS_ERRORS.value),
      getPanelId: (0,get_safe_id/* getSafeId */.r)(`${uid}-panel`, TABS_ERRORS.value),
      onTabChange: onChange,
      setMountedPanelIds,
      mountedPanelIds,
      allowTabDeactivation,
      variant,
      color,
      radius,
      inverted,
      keepMounted,
      classNames,
      styles,
      unstyled
    }
  }, children);
}
TabsProvider.displayName = "@mantine/core/TabsProvider";


//# sourceMappingURL=TabsProvider.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.styles.js


var Tabs_styles_useStyles = (0,create_styles/* createStyles */.r)((_theme, { orientation, placement }) => ({
  root: {
    display: orientation === "vertical" ? "flex" : void 0,
    flexDirection: placement === "right" ? "row-reverse" : "row"
  }
}));

/* harmony default export */ const Tabs_styles = (Tabs_styles_useStyles);
//# sourceMappingURL=Tabs.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Tabs/Tabs.js









var Tabs_defProp = Object.defineProperty;
var Tabs_defProps = Object.defineProperties;
var Tabs_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Tabs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Tabs_hasOwnProp = Object.prototype.hasOwnProperty;
var Tabs_propIsEnum = Object.prototype.propertyIsEnumerable;
var Tabs_defNormalProp = (obj, key, value) => key in obj ? Tabs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Tabs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Tabs_hasOwnProp.call(b, prop))
      Tabs_defNormalProp(a, prop, b[prop]);
  if (Tabs_getOwnPropSymbols)
    for (var prop of Tabs_getOwnPropSymbols(b)) {
      if (Tabs_propIsEnum.call(b, prop))
        Tabs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Tabs_spreadProps = (a, b) => Tabs_defProps(a, Tabs_getOwnPropDescs(b));
var Tabs_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Tabs_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Tabs_getOwnPropSymbols)
    for (var prop of Tabs_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Tabs_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tabs_defaultProps = {
  orientation: "horizontal",
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  inverted: false,
  variant: "default",
  placement: "left"
};
const Tabs = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Tabs", Tabs_defaultProps, props), {
    defaultValue,
    value,
    orientation,
    loop,
    activateTabWithKeyboard,
    allowTabDeactivation,
    children,
    id,
    onTabChange,
    variant,
    color,
    className,
    unstyled,
    classNames,
    styles,
    radius,
    inverted,
    keepMounted,
    placement
  } = _a, others = Tabs_objRest(_a, [
    "defaultValue",
    "value",
    "orientation",
    "loop",
    "activateTabWithKeyboard",
    "allowTabDeactivation",
    "children",
    "id",
    "onTabChange",
    "variant",
    "color",
    "className",
    "unstyled",
    "classNames",
    "styles",
    "radius",
    "inverted",
    "keepMounted",
    "placement"
  ]);
  const { classes, cx } = Tabs_styles({ orientation, color, radius, inverted, placement }, { unstyled, name: "Tabs", classNames, styles, variant });
  return /* @__PURE__ */ compat_module["default"].createElement(TabsProvider, {
    activateTabWithKeyboard,
    defaultValue,
    orientation,
    onTabChange,
    value,
    id,
    loop,
    allowTabDeactivation,
    color,
    variant,
    radius,
    inverted,
    keepMounted,
    placement,
    classNames,
    styles,
    unstyled
  }, /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, Tabs_spreadProps(Tabs_spreadValues({}, others), {
    className: cx(classes.root, className),
    id,
    ref
  }), children));
});
Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
Tabs.displayName = "@mantine/core/Tabs";


//# sourceMappingURL=Tabs.js.map


/***/ }),

/***/ 51407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ createScopedKeydownHandler)
});

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/find-element-ancestor/find-element-ancestor.js
function findElementAncestor(element, selector) {
  let _element = element;
  while ((_element = _element.parentElement) && !_element.matches(selector))
    ;
  return _element;
}


//# sourceMappingURL=find-element-ancestor.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/utils/esm/create-scoped-keydown-handler/create-scoped-keydown-handler.js


function getPreviousIndex(current, elements, loop) {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function getNextIndex(current, elements, loop) {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i].disabled) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].disabled) {
        return i;
      }
    }
  }
  return current;
}
function onSameLevel(target, sibling, parentSelector) {
  return findElementAncestor(target, parentSelector) === findElementAncestor(sibling, parentSelector);
}
function createScopedKeydownHandler({
  parentSelector,
  siblingSelector,
  onKeyDown,
  loop = true,
  activateOnFocus = false,
  dir = "rtl",
  orientation
}) {
  return (event) => {
    var _a;
    onKeyDown == null ? void 0 : onKeyDown(event);
    const elements = Array.from(((_a = findElementAncestor(event.currentTarget, parentSelector)) == null ? void 0 : _a.querySelectorAll(siblingSelector)) || []).filter((node) => onSameLevel(event.currentTarget, node, parentSelector));
    const current = elements.findIndex((el) => event.currentTarget === el);
    const _nextIndex = getNextIndex(current, elements, loop);
    const _previousIndex = getPreviousIndex(current, elements, loop);
    const nextIndex = dir === "rtl" ? _previousIndex : _nextIndex;
    const previousIndex = dir === "rtl" ? _nextIndex : _previousIndex;
    switch (event.key) {
      case "ArrowRight": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[nextIndex].focus();
          activateOnFocus && elements[nextIndex].click();
        }
        break;
      }
      case "ArrowLeft": {
        if (orientation === "horizontal") {
          event.stopPropagation();
          event.preventDefault();
          elements[previousIndex].focus();
          activateOnFocus && elements[previousIndex].click();
        }
        break;
      }
      case "ArrowUp": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_previousIndex].focus();
          activateOnFocus && elements[_previousIndex].click();
        }
        break;
      }
      case "ArrowDown": {
        if (orientation === "vertical") {
          event.stopPropagation();
          event.preventDefault();
          elements[_nextIndex].focus();
          activateOnFocus && elements[_nextIndex].click();
        }
        break;
      }
      case "Home": {
        event.stopPropagation();
        event.preventDefault();
        !elements[0].disabled && elements[0].focus();
        break;
      }
      case "End": {
        event.stopPropagation();
        event.preventDefault();
        const last = elements.length - 1;
        !elements[last].disabled && elements[last].focus();
        break;
      }
    }
  };
}


//# sourceMappingURL=create-scoped-keydown-handler.js.map


/***/ }),

/***/ 25850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ getSafeId)
/* harmony export */ });
function getSafeId(uid, errorMessage) {
  return (value) => {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(errorMessage);
    }
    return `${uid}-${value}`;
  };
}


//# sourceMappingURL=get-safe-id.js.map


/***/ })

}]);