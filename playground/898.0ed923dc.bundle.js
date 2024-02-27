"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[898],{

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

/***/ 97898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ StylesAddon_StylesAddon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 2 modules
var defineProperty = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(54756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
// EXTERNAL MODULE: ./node_modules/@everymundo/registry-json-schema-form/es/index.js + 277 modules
var es = __webpack_require__(31708);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Alert/Alert.js + 1 modules
var Alert = __webpack_require__(859);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/Select.js + 2 modules
var Select = __webpack_require__(92228);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(67859);
// EXTERNAL MODULE: ./src/data/styles/themes/index.js + 5 modules
var themes = __webpack_require__(41459);
// EXTERNAL MODULE: ./src/utils/getThemeValue.js + 1 modules
var getThemeValue = __webpack_require__(81859);
;// CONCATENATED MODULE: ./src/addons/StylesAddon/StylesAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const StylesAddon_module = ({"panel":"t","actionToolbar":"u","topBar":"v","form":"w","themeSelector":"x"});
;// CONCATENATED MODULE: ./src/data/styles/eds-schema-full.json
const eds_schema_full_namespaceObject = /*#__PURE__*/JSON.parse('{"w":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"colors":{"type":"object","title":"Colors","properties":{"primary":{"$ref":"#/definitions/color","title":"Primary","description":"Used in: Primary buttons, form controls, active states, prices.","help":"EDS.colors.primary","default":"#4060F7","examples":[]},"secondary":{"$ref":"#/definitions/color","title":"Secondary","description":"Used in: Hover of elements using Primary and as complement color","help":"EDS.colors.secondary","default":"#0021BD","examples":[]},"accent1":{"$ref":"#/definitions/color","title":"Accent 1","description":"Used in: elements requiring accent like link states, prices, highlighted text.","help":"EDS.colors.accent1","default":"#271689","examples":[]},"accent2":{"$ref":"#/definitions/color","title":"Accent 2","description":"Used in: elements requiring accent like link states, prices, highlighted text.","help":"EDS.colors.accent2","default":"#00855C","examples":[]},"baseText":{"$ref":"#/definitions/color","title":"Base Text","description":"Used in: all font styles as default color","help":"EDS.colors.baseText","default":"#4A4A4A","examples":[]},"softText":{"$ref":"#/definitions/color","title":"Soft Text","description":"Used in: placeholder text, disabled text and strong borders.","help":"EDS.colors.softText","default":"#757575","examples":[]},"border":{"$ref":"#/definitions/color","title":"Border Color","description":"Used in: all borders in default state and for disabled backgrounds.","help":"EDS.colors.border","default":"#E1E1E1","examples":[]},"softBackground":{"$ref":"#/definitions/color","title":"Soft Background","description":"Used in: hover background over main background or as alternate background.","help":"EDS.colors.softBackground","default":"#EEEEEE","examples":[]},"mainBackground":{"$ref":"#/definitions/color","title":"Main Background","description":"Used in: body background and forms.","help":"EDS.colors.mainBackground","default":"#FFFFFF","examples":[]},"success":{"$ref":"#/definitions/color","title":"Success","description":"Used in: success alerts and notifications.","help":"EDS.colors.success","default":"#00855C","examples":[]},"info":{"$ref":"#/definitions/color","title":"Info","description":"Used in: information alerts and notifications.","help":"EDS.colors.info","default":"#4060F7","examples":[]},"error":{"$ref":"#/definitions/color","title":"Error","description":"Used in: error alerts, notifications and borders of form inputs with errors.","help":"EDS.colors.error","default":"#E70056","examples":[]},"inverted":{"$ref":"#/definitions/color","title":"Inverted","description":"Used in: font styles when the background is dark","help":"EDS.colors.inverted","default":"#FFFFFF","examples":[]}},"additionalProperties":false,"required":["primary","secondary","accent1","accent2","baseText","softText","border","softBackground","mainBackground","success","info","error","inverted"]},"typographies":{"type":"object","title":"Typographies","properties":{"fS1d":{"$ref":"#/definitions/typography","title":"Font Style 1 (Desktop)","description":"Page title, H1: Used strictly for page titles and H1 elements. This font style is the largest size used in a page content hierarchy.","default":{"fontSize":"46px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto","fontWeight":"400","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"inherit"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS1m":{"$ref":"#/definitions/typography","title":"Font Style 1 (Mobile)","description":"Page title, H1: Used strictly for page titles and H1 elements. This font style is the largest size used in a page content hierarchy.","default":{"fontSize":"34px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto","fontWeight":"400","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS2d":{"$ref":"#/definitions/typography","title":"Font Style 2 (Desktop)","description":"Module title, H2: For titles of a section of the page. Also, to be used for H2 elements.","default":{"fontSize":"32px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto","fontWeight":"300","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS2m":{"$ref":"#/definitions/typography","title":"Font Style 2 (Mobile)","description":"Module title, H2: For titles of a section of the page. Also, to be used for H2 elements.","default":{"fontSize":"28px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto","fontWeight":"300","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS3":{"$ref":"#/definitions/typography","title":"Font Style 3","description":"Card title, H3: Used in titles of sub sections within a section of the page. Also for H3.","default":{"fontSize":"20px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto Condensed","fontWeight":"700","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS4":{"$ref":"#/definitions/typography","title":"Font Style 4","description":"H4, H5, H6: In the rare case where there is yet another level under a sub section of a section of the page, use this. Also used for H4, H5 and H6.","default":{"fontSize":"16px","letterSpacing":"normal","lineHeight":"1.2","fontFamily":"Roboto","fontWeight":"400","color":"{{EDS.colors.baseText}}","textTransform":"uppercase","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS5":{"$ref":"#/definitions/typography","title":"Font Style 5","description":"Base font, body: Base font size. It is the typography size for a majority of the content within the page. Also used for body.","default":{"fontSize":"14px","letterSpacing":"normal","lineHeight":"1.5","fontFamily":"Roboto","fontWeight":"400","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS6":{"$ref":"#/definitions/typography","title":"Font Style 6","description":"Form labels: Reserved for form labels.","default":{"fontSize":"14px","letterSpacing":"normal","lineHeight":"1.5","fontFamily":"Roboto","fontWeight":"400","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.baseText}}","textDecoration":"none","__hover":{"color":"{{EDS.colors.baseText}}","textDecoration":"none"},"__focus":{"color":"{{EDS.colors.baseText}}","textDecoration":"none"},"__visited":{"color":"{{EDS.colors.baseText}}","textDecoration":"none"}},"_highlight":{"color":"{{EDS.colors.baseText}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}},"fS7":{"$ref":"#/definitions/typography","title":"Font Style 7","description":"Footnotes: Smallest font size of the system and should be used sparingly. Best for footnotes, disclaimers and small elements.","default":{"fontSize":"12px","letterSpacing":"normal","lineHeight":"1.5","fontFamily":"Roboto","fontWeight":"300","color":"{{EDS.colors.baseText}}","textTransform":"none","_link":{"color":"{{EDS.colors.primary}}","textDecoration":"underline","__hover":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__focus":{"color":"{{EDS.colors.accent1}}","textDecoration":"underline"},"__visited":{"color":"{{EDS.colors.accent2}}","textDecoration":"underline"}},"_highlight":{"color":"{{EDS.colors.primary}}"},"_soft":{"color":"{{EDS.colors.softText}}"},"_bold":{"fontWeight":"700"}}}},"additionalProperties":false,"required":["fS1d","fS1m","fS2d","fS2m","fS3","fS4","fS5","fS6","fS7"],"format":"plain"},"utilities":{"type":"object","title":"Utilities","properties":{"boxShadow_1":{"$ref":"#/definitions/boxShadow","title":"Box Shadow 1","description":"Used for shadows on elements -  Level 1 referring to small primitives such as buttons, tooltips, etc.","default":"0px 2px 5px rgba(0, 0, 0, 0.3)","examples":[]},"boxShadow_2":{"$ref":"#/definitions/boxShadow","title":"Box Shadow 2","description":"Used for shadows on elements -  Level 2 referring to bigger primitives such as modals, datepicker, etc.","default":"0px 4px 12px rgba(0, 0, 0, 0.3)","examples":[]},"borderRadius":{"$ref":"#/definitions/borderRadius","title":"Border Radius","description":"Used to define the roundness of key elements such as buttons, cards, input fields, etc.","default":"5px","examples":[]},"layout":{"type":"string","title":"Layout Type","description":"Used for the overall component spacing/padding such as standard, compact, or expanded. Spacing Tokens - EDS Guidelines.","enum":["standard","compact","expanded"],"default":"standard"},"overlayDefault":{"$ref":"#/definitions/color","title":"Overlay Default","description":"Used for overlays on top of images - e.g.: Pills Counter - Default background color (Light: #fff / Dark: #000)","default":"#FFFFFF","examples":[]},"overlayInverted":{"$ref":"#/definitions/color","title":"Overlay Inverted","description":"Used for overlays on top of images - e.g.: # of Days (Vacations Cards) - Inverted background color (Light: #000 / Dark: #fff)","default":"#000000","examples":[]},"gradientOverlay":{"type":"string","title":"Gradient Overlay","description":"Used for overlays on top of images - e.g.: full background cards overlay. Color depends on the Theme.","default":"linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.66) 50%))","examples":[]},"gradientSkeleton":{"type":"string","title":"Gradient Skeleton","description":"Used for skeleton screen variations - Color depends on the Theme.","default":"linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 100%)","examples":[]},"backgroundOverlay":{"$ref":"#/definitions/color","title":"Background Overlay","description":"Used for page level overlays - e.g.: Pop-up Background Overlay.","default":"rgba(0, 0, 0, 0.5)","examples":[]}},"additionalProperties":false,"required":["boxShadow_1","boxShadow_2","borderRadius","layout","overlayDefault","overlayInverted","gradientOverlay","gradientSkeleton","backgroundOverlay"],"format":"group"},"components":{"type":"object","title":"Components","properties":{"button":{"type":"object","title":"Buttons","properties":{"primary":{"$ref":"#/definitions/componentButton","title":"Primary","description":"Used in: Macro conversions like performing a flight search.","default":{"boxShadow":"none","border":"1px solid {{EDS.colors.primary}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.primary}}","fontWeight":"{{EDS.typographies.fS4.fontWeight}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}","color":"{{EDS.colors.inverted}}","fontSize":"{{EDS.typographies.fS4.fontSize}}","textTransform":"{{EDS.typographies.fS4.textTransform}}","letterSpacing":"{{EDS.typographies.fS4.letterSpacing}}","__hover":{"boxShadow":"{{EDS.utilities.boxShadow_1}}","border":"1px solid {{EDS.colors.secondary}}","background":"{{EDS.colors.secondary}}","color":"{{EDS.colors.inverted}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"__disabled":{"boxShadow":"none","border":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.border}}","color":"{{EDS.colors.softText}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"_icon":{"borderRadius":"50%"}}},"secondary":{"$ref":"#/definitions/componentButton","title":"Secondary","description":"Used in: Micro conversions like loading more promotions.","default":{"boxShadow":"none","border":"1px solid {{EDS.colors.primary}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.mainBackground}}","fontWeight":"{{EDS.typographies.fS4.fontWeight}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}","color":"{{EDS.colors.primary}}","fontSize":"{{EDS.typographies.fS4.fontSize}}","textTransform":"{{EDS.typographies.fS4.textTransform}}","letterSpacing":"{{EDS.typographies.fS4.letterSpacing}}","__hover":{"boxShadow":"none","border":"1px solid {{EDS.colors.secondary}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.colors.secondary}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"__disabled":{"boxShadow":"none","border":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.colors.softText}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"_icon":{"borderRadius":"50%"}}},"tertiary":{"$ref":"#/definitions/componentButton","title":"Tertiary","description":"Used in: For navigation or in non branded forms.","default":{"boxShadow":"none","border":"1px solid {{EDS.colors.border}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.border}}","fontWeight":"{{EDS.typographies.fS4.fontWeight}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}","color":"{{EDS.colors.baseText}}","fontSize":"{{EDS.typographies.fS4.fontSize}}","textTransform":"{{EDS.typographies.fS4.textTransform}}","letterSpacing":"{{EDS.typographies.fS4.letterSpacing}}","__hover":{"boxShadow":"none","border":"1px solid {{EDS.colors.softText}}","background":"{{EDS.colors.softText}}","color":"{{EDS.colors.inverted}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"__disabled":{"boxShadow":"none","border":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.border}}","color":"{{EDS.colors.softText}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"_icon":{"borderRadius":"50%"}}},"ghost":{"$ref":"#/definitions/componentButton","title":"Ghost Primary","description":"Used in: “Reset”, “Clear” and other form actions within widgets.","default":{"boxShadow":"none","border":"none","borderRadius":"{{EDS.utilities.borderRadius}}","background":"none","fontWeight":"{{EDS.typographies.fS4.fontWeight}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}","color":"{{EDS.colors.primary}}","fontSize":"{{EDS.typographies.fS4.fontSize}}","textTransform":"{{EDS.typographies.fS4.textTransform}}","letterSpacing":"{{EDS.typographies.fS4.letterSpacing}}","__hover":{"boxShadow":"none","border":"none","background":"none","color":"{{EDS.colors.accent1}}","textDecoration":"{{EDS.typographies.fS4._link.textDecoration}}"},"__disabled":{"boxShadow":"none","border":"none","background":"none","color":"{{EDS.colors.softText}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"_icon":{"borderRadius":"50%"}}},"ghost2":{"$ref":"#/definitions/componentButton","title":"Ghost Secondary","description":"Used as secondary option in two button actions ex: “Cancel” option","default":{"boxShadow":"none","border":"none","borderRadius":"{{EDS.utilities.borderRadius}}","background":"none","fontWeight":"{{EDS.typographies.fS4.fontWeight}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}","color":"{{EDS.colors.baseText}}","fontSize":"{{EDS.typographies.fS4.fontSize}}","textTransform":"{{EDS.typographies.fS4.textTransform}}","letterSpacing":"{{EDS.typographies.fS4.letterSpacing}}","__hover":{"boxShadow":"none","border":"none","background":"none","color":"{{EDS.colors.accent1}}","textDecoration":"{{EDS.typographies.fS4._link.textDecoration}}"},"__disabled":{"boxShadow":"none","border":"none","background":"none","color":"{{EDS.colors.softText}}","textDecoration":"{{EDS.typographies.fS4._link.__hover.textDecoration}}"},"_icon":{"borderRadius":"50%"}}}},"required":["primary","secondary","tertiary","ghost","ghost2"],"format":"plain"},"buttongroup":{"$ref":"#/definitions/componentButtonGroup","title":"Button group","description":"Used in: As a switch to toggle between categories within a group.","default":{"borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.softBackground}}","marginLeft":"5px","fontWeight":"{{EDS.typographies.fS7.fontWeight}}","color":"{{EDS.typographies.fS7.color}}","fontSize":"{{EDS.typographies.fS7.fontSize}}","textTransform":"{{EDS.typographies.fS7.textTransform}}","letterSpacing":"{{EDS.typographies.fS7.letterSpacing}}","__selected":{"background":"{{EDS.colors.primary}}","color":"{{EDS.colors.inverted}}"},"__hover":{"background":"{{EDS.colors.secondary}}","color":"{{EDS.colors.inverted}}"}}},"inputfield":{"$ref":"#/definitions/componentInputField","title":"Input fields","default":{"border":"1px solid {{EDS.colors.border}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.mainBackground}}","fontWeight":"{{EDS.typographies.fS5.fontWeight}}","color":"{{EDS.typographies.fS5.color}}","fontSize":"{{EDS.typographies.fS5.fontSize}}","textTransform":"{{EDS.typographies.fS5.textTransform}}","letterSpacing":"{{EDS.typographies.fS5.letterSpacing}}","_icon":{"color":"{{EDS.colors.softText}}"},"_tag":{"color":"{{EDS.colors.baseText}}","background":"{{EDS.colors.softBackground}}"},"_placeholder":{"fontWeight":"{{EDS.typographies.fS5.fontWeight}}","color":"{{EDS.colors.softText}}","fontSize":"{{EDS.typographies.fS5.fontSize}}","textTransform":"{{EDS.typographies.fS5.textTransform}}","letterSpacing":"{{EDS.typographies.fS5.letterSpacing}}"},"__error":{"border":"1px solid {{EDS.colors.error}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.typographies.fS5.color}}","_icon":{"color":"{{EDS.colors.error}}"},"_placeholder":{"color":"{{EDS.colors.softText}}"}},"__disabled":{"border":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.border}}","color":"{{EDS.colors.softText}}","_icon":{"color":"{{EDS.colors.softText}}"},"_placeholder":{"color":"{{EDS.colors.softText}}"}}}},"radiobutton":{"$ref":"#/definitions/componentRadioAndCheckbox","title":"Radio Button","default":{"_icon":{"color":"{{EDS.colors.primary}}"},"__disabled":{"_icon":{"color":"{{EDS.colors.border}}"}}}},"checkbox":{"$ref":"#/definitions/componentRadioAndCheckbox","title":"Checkbox","default":{"_icon":{"color":"{{EDS.colors.primary}}"},"__disabled":{"_icon":{"color":"{{EDS.colors.border}}"}}}},"stepper":{"$ref":"#/definitions/componentStepper","title":"Stepper","default":{"border":"1px solid {{EDS.colors.border}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.mainBackground}}","fontWeight":"{{EDS.typographies.fS5.fontWeight}}","color":"{{EDS.typographies.fS5.color}}","fontSize":"{{EDS.typographies.fS5.fontSize}}","textTransform":"{{EDS.typographies.fS5.textTransform}}","letterSpacing":"{{EDS.typographies.fS5.letterSpacing}}","_icon":{"color":"{{EDS.colors.softText}}"},"__disabled":{"border":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.border}}","color":"{{EDS.colors.softText}}","_icon":{"color":"{{EDS.colors.softText}}"}}}},"filter":{"$ref":"#/definitions/componentFilter","title":"Filter","default":{"border":"1px solid {{EDS.colors.border}}","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.mainBackground}}","fontWeight":"{{EDS.typographies.fS5.fontWeight}}","color":"{{EDS.typographies.fS5.color}}","fontSize":"{{EDS.typographies.fS5.fontSize}}","textTransform":"{{EDS.typographies.fS5.textTransform}}","letterSpacing":"{{EDS.typographies.fS5.letterSpacing}}","_icon":{"color":"{{EDS.colors.softText}}"},"__hover":{"border":"1px solid {{EDS.colors.primary}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.typographies.fS5.color}}","_icon":{"color":"{{EDS.colors.softText}}"}},"__active":{"border":"1px solid {{EDS.colors.primary}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.colors.primary}}","_icon":{"color":"{{EDS.colors.primary}}"}}}},"menu":{"$ref":"#/definitions/componentMenu","title":"Listed items","description":"Used in: select menus, autocomplete menus with listed items","default":{"boxShadow":"{{EDS.utilities.boxShadow_2}}","border":"none","borderRadius":"{{EDS.utilities.borderRadius}}","background":"{{EDS.colors.mainBackground}}","_item":{"__hover":{"color":"{{EDS.typographies.fS5.color}}","background":"{{EDS.colors.softBackground}}"}}}},"datepicker":{"$ref":"#/definitions/componentDatepicker","title":"Date Picker","default":{"boxShadow":"{{EDS.utilities.boxShadow_2}}","border":"none","borderRadius":"{{EDS.utilities.borderRadius}}","_cell":{"color":"{{EDS.typographies.fS5.color}}","background":"{{EDS.colors.mainBackground}}","border":"none","borderRadius":"0","__disabled":{"color":"{{EDS.colors.softText}}","background":"{{EDS.colors.mainBackground}}","border":"none","borderRadius":"0"},"__hover":{"color":"{{EDS.colors.softText}}","background":"{{EDS.colors.mainBackground}}","border":"1px solid {{EDS.colors.primary}}","borderRadius":"{{EDS.utilities.borderRadius}}"},"__selection":{"color":"{{EDS.colors.inverted}}","background":"{{EDS.colors.primary}}","border":"1px solid {{EDS.colors.primary}}","borderRadius":"{{EDS.utilities.borderRadius}}"},"__range-start":{"color":"{{EDS.colors.inverted}}","background":"{{EDS.colors.primary}}","border":"1px solid {{EDS.colors.primary}}","borderRadius":"{{EDS.utilities.borderRadius}} 0 0 {{EDS.utilities.borderRadius}}"},"__range-within":{"color":"{{EDS.typographies.fS5.color}}","background":"{{EDS.colors.softBackground}}","border":"1px solid {{EDS.colors.softBackground}}","borderRadius":"0"},"__range-end":{"color":"{{EDS.colors.inverted}}","background":"{{EDS.colors.primary}}","border":"1px solid {{EDS.colors.primary}}","borderRadius":"0 {{EDS.utilities.borderRadius}} {{EDS.utilities.borderRadius}} 0"}}}},"calendar":{"$ref":"#/definitions/componentCalendar","title":"Calendar","description":"Used in: Calendars displaying promotions.","default":{"_cell":{"background":"{{EDS.colors.mainBackground}}","border":"{{EDS.colors.border}}","color":"{{EDS.colors.baseText}}","_icon":{"color":"{{EDS.colors.primary}}"},"__hover":{"background":"{{EDS.colors.secondary}}","border":"{{EDS.colors.border}}","color":"{{EDS.colors.inverted}}","_icon":{"color":"{{EDS.colors.inverted}}"}},"__selected":{"background":"{{EDS.colors.primary}}","border":"{{EDS.colors.border}}","color":"{{EDS.colors.inverted}}","_icon":{"color":"{{EDS.colors.inverted}}"}}}}},"table":{"$ref":"#/definitions/componentTable","title":"Table","default":{"_header":{"borderBottom":"1px solid {{EDS.colors.softText}}","background":"{{EDS.colors.softBackground}}","color":"{{EDS.colors.softText}}"},"_body":{"borderBottom":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.mainBackground}}","color":"{{EDS.typographies.fS5.color}}","__hover":{"borderBottom":"1px solid {{EDS.colors.border}}","background":"{{EDS.colors.primary}}","color":"{{EDS.colors.inverted}}"}}}},"bargraph":{"$ref":"#/definitions/componentBarGraph","description":"Used in: Histogram modules showcasing fares.","title":"Bar Graph","default":{"_bar":{"background":"{{EDS.colors.softBackground}}","__hover":{"background":"{{EDS.colors.secondary}}"},"__selected":{"background":"{{EDS.colors.primary}}"},"__disabled":{"background":"{{EDS.colors.baseText}}"}}}}},"additionalProperties":false,"required":["button","buttongroup","inputfield","radiobutton","checkbox","stepper","filter","menu","datepicker","calendar","table","bargraph"],"format":"tabs"}},"additionalProperties":false,"required":["colors","typographies","utilities","components"],"definitions":{"color":{"title":"Color","type":"string","default":"#444","format":"color","examples":["{{EDS.colors.primary}}","{{EDS.colors.secondary}}","{{EDS.colors.accent1}}","{{EDS.colors.accent2}}","{{EDS.colors.baseText}}","{{EDS.colors.softText}}","{{EDS.colors.mainBackground}}","{{EDS.colors.softBackground}}","{{EDS.colors.border}}","{{EDS.colors.success}}","{{EDS.colors.info}}","{{EDS.colors.error}}","{{EDS.colors.inverted}}"]},"background":{"title":"Background","type":"string","default":"none","format":"color","examples":["{{EDS.colors.primary}}","{{EDS.colors.secondary}}","{{EDS.colors.accent1}}","{{EDS.colors.accent2}}","{{EDS.colors.baseText}}","{{EDS.colors.softText}}","{{EDS.colors.mainBackground}}","{{EDS.colors.softBackground}}","{{EDS.colors.border}}","{{EDS.colors.success}}","{{EDS.colors.info}}","{{EDS.colors.error}}","{{EDS.colors.inverted}}"]},"fontSize":{"type":"string","title":"Font size","default":"14px"},"fontFamily":{"type":"string","title":"Font family","default":"sans-serif"},"fontWeight":{"type":"string","title":"Font weight","default":"normal","examples":["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]},"textDecoration":{"type":"string","title":"Text decoration","default":"none","examples":["none","underline","overline","line-through"]},"textTransform":{"type":"string","title":"Text transform","examples":["none","uppercase","lowercase","capitalize"],"default":"none"},"letterSpacing":{"type":"string","title":"Letter spacing","default":"normal"},"lineHeight":{"type":"string","title":"Line height","default":"normal"},"border":{"type":"string","title":"Border","default":"none"},"borderRadius":{"type":"string","title":"Border radius","default":"5px","examples":["0","5px","{{EDS.utilities.borderRadius}}"]},"boxShadow":{"type":"string","title":"Box shadow","default":"none","examples":["none","{{EDS.utilities.boxShadow_1}}","{{EDS.utilities.boxShadow_2}}"]},"typography":{"type":"object","properties":{"fontSize":{"$ref":"#/definitions/fontSize"},"fontFamily":{"$ref":"#/definitions/fontFamily"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"lineHeight":{"$ref":"#/definitions/lineHeight"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"color":{"$ref":"#/definitions/color"},"textTransform":{"$ref":"#/definitions/textTransform"},"_link":{"type":"object","title":"LINK","properties":{"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"}},"additionalProperties":false,"required":["color","textDecoration"],"format":"collapse:closed"},"__focus":{"type":"object","title":"STATE: Focused","properties":{"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"}},"additionalProperties":false,"required":["color","textDecoration"],"format":"collapse:closed"},"__visited":{"type":"object","title":"STATE: Visited","properties":{"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"}},"additionalProperties":false,"required":["color","textDecoration"],"format":"collapse:closed"}},"additionalProperties":false,"required":["color","textDecoration","__hover","__focus","__visited"],"format":"collapse:closed"},"_highlight":{"type":"object","title":"VARIANT: Highlight","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"_soft":{"type":"object","title":"VARIANT: Soft","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"_bold":{"type":"object","title":"VARIANT: Bold","properties":{"fontWeight":{"$ref":"#/definitions/fontWeight"}},"additionalProperties":false,"required":["fontWeight"],"format":"collapse:closed"}},"additionalProperties":false,"required":["fontSize","fontFamily","fontWeight","lineHeight","letterSpacing","color","textTransform","_link","_highlight","_soft","_bold"],"format":"collapse:closed"},"componentButton":{"type":"object","title":"Button","properties":{"boxShadow":{"$ref":"#/definitions/boxShadow"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"textDecoration":{"$ref":"#/definitions/textDecoration"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"boxShadow":{"$ref":"#/definitions/boxShadow"},"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"}},"additionalProperties":false,"required":["boxShadow","border","background","color","textDecoration"],"format":"collapse:closed"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"boxShadow":{"$ref":"#/definitions/boxShadow"},"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"textDecoration":{"$ref":"#/definitions/textDecoration"}},"additionalProperties":false,"required":["boxShadow","border","background","color","textDecoration"],"format":"collapse:closed"},"_icon":{"type":"object","title":"VARIANT: Icon","properties":{"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["borderRadius"],"format":"collapse:closed"}},"additionalProperties":false,"required":["boxShadow","border","borderRadius","background","fontWeight","textDecoration","color","fontSize","textTransform","letterSpacing","__hover","__disabled","_icon"],"format":"collapse:closed"},"componentButtonGroup":{"type":"object","title":"Button group","properties":{"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"marginLeft":{"type":"string","title":"Margin Left","default":"5px"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"__selected":{"type":"object","title":"STATE: Selected","properties":{"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["background","color"],"format":"collapse:closed"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["background","color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["borderRadius","background","marginLeft","fontWeight","color","fontSize","textTransform","letterSpacing","__selected","__hover"],"format":"group"},"componentInputField":{"title":"Input fields","type":"object","properties":{"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"_tag":{"type":"object","title":"Tag","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"}},"additionalProperties":false,"required":["color","background"],"format":"collapse:closed"},"_placeholder":{"type":"object","title":"Placeholder","properties":{"fontWeight":{"$ref":"#/definitions/fontWeight"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"}},"additionalProperties":false,"required":["fontWeight","color","fontSize","textTransform","letterSpacing"],"format":"collapse:closed"},"__error":{"type":"object","title":"STATE: Error","properties":{"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"_placeholder":{"type":"object","title":"Placeholder","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["border","background","color","_icon","_placeholder"],"format":"collapse:closed"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"_placeholder":{"type":"object","title":"Placeholder","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["border","background","color","_icon","_placeholder"],"format":"collapse:closed"}},"additionalProperties":false,"required":["border","borderRadius","background","fontWeight","color","fontSize","textTransform","letterSpacing","_icon","_tag","_placeholder","__error","__disabled"],"format":"group"},"componentRadioAndCheckbox":{"type":"object","properties":{"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"group"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"group"}},"additionalProperties":false,"required":["_icon"],"format":"group"}},"additionalProperties":false,"required":["_icon","__disabled"],"format":"group"},"componentStepper":{"type":"object","title":"Stepper","properties":{"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["border","background","color","_icon"],"format":"collapse:closed"}},"additionalProperties":false,"required":["border","borderRadius","background","fontWeight","color","fontSize","textTransform","letterSpacing","_icon","__disabled"],"format":"group"},"componentFilter":{"type":"object","title":"Filter","properties":{"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"fontWeight":{"$ref":"#/definitions/fontWeight"},"color":{"$ref":"#/definitions/color"},"fontSize":{"$ref":"#/definitions/fontSize"},"textTransform":{"$ref":"#/definitions/textTransform"},"letterSpacing":{"$ref":"#/definitions/letterSpacing"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"__hover":{"type":"object","title":"STATE: Hover","format":"collapse:closed","properties":{"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}}},"__active":{"type":"object","title":"STATE: Active","format":"collapse:closed","properties":{"border":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}}}},"additionalProperties":false,"required":["border","borderRadius","background","fontWeight","color","fontSize","textTransform","letterSpacing","_icon","__hover","__active"],"format":"group"},"componentMenu":{"type":"object","title":"Listed items","properties":{"boxShadow":{"$ref":"#/definitions/boxShadow"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"background":{"$ref":"#/definitions/background"},"_item":{"type":"object","title":"Item","properties":{"__hover":{"type":"object","title":"STATE: Hover","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"}},"additionalProperties":false,"required":["color","background"],"format":"group"}},"additionalProperties":false,"required":["__hover"],"format":"collapse:closed"}},"additionalProperties":false,"required":["boxShadow","border","borderRadius","background","_item"],"format":"group"},"componentDatepicker":{"type":"object","title":"Date Picker","description":"Used in: Controls for date selection.","properties":{"boxShadow":{"$ref":"#/definitions/boxShadow"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"},"_cell":{"type":"object","title":"Cells","description":"Used in: These are all the sates for each cell and are used in the date picker.","properties":{"color":{"type":"string"},"background":{"type":"string"},"border":{"type":"string"},"borderRadius":{"type":"string"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"},"__selection":{"type":"object","title":"STATE: Single Selection","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"},"__range-start":{"type":"object","title":"STATE: Range Start","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"},"__range-within":{"type":"object","title":"STATE: Within Range","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"},"__range-end":{"type":"object","title":"STATE: Range End","properties":{"color":{"$ref":"#/definitions/color"},"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"borderRadius":{"$ref":"#/definitions/borderRadius"}},"additionalProperties":false,"required":["color","background","border","borderRadius"],"format":"collapse:closed"}},"additionalProperties":false,"required":["color","background","border","borderRadius","__disabled","__hover","__selection","__range-start","__range-within","__range-end"],"format":"group"}},"additionalProperties":false,"required":["boxShadow","border","borderRadius","_cell"],"format":"group"},"componentCalendar":{"type":"object","title":"Calendar","properties":{"_cell":{"type":"object","title":"Cell","properties":{"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["background","border","color","_icon"],"format":"collapse:closed"},"__selected":{"type":"object","title":"STATE: Selected","properties":{"background":{"$ref":"#/definitions/background"},"border":{"$ref":"#/definitions/border"},"color":{"$ref":"#/definitions/color"},"_icon":{"type":"object","title":"Icon","properties":{"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["background","border","color","_icon"],"format":"collapse:closed"}},"additionalProperties":false,"required":["background","border","color","_icon","__hover","__selected"],"format":"group"}},"additionalProperties":false,"required":["_cell"],"format":"group"},"componentTable":{"type":"object","title":"Table","properties":{"_header":{"type":"object","title":"Header Row","properties":{"borderBottom":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["borderBottom","background","color"],"format":"group"},"_body":{"type":"object","title":"Data Row","properties":{"borderBottom":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"borderBottom":{"$ref":"#/definitions/border"},"background":{"$ref":"#/definitions/background"},"color":{"$ref":"#/definitions/color"}},"additionalProperties":false,"required":["borderBottom","background","color"],"format":"collapse:closed"}},"additionalProperties":false,"required":["borderBottom","background","color","__hover"],"format":"group"}},"additionalProperties":false,"required":["_header","_body"],"format":"group"},"componentBarGraph":{"type":"object","title":"Table","properties":{"_bar":{"type":"object","title":"Bar","properties":{"background":{"$ref":"#/definitions/background"},"__hover":{"type":"object","title":"STATE: Hover","properties":{"background":{"$ref":"#/definitions/background"}},"additionalProperties":false,"required":["background"],"format":"collapse:closed"},"__selected":{"type":"object","title":"STATE: Selected","properties":{"background":{"$ref":"#/definitions/background"}},"additionalProperties":false,"required":["background"],"format":"collapse:closed"},"__disabled":{"type":"object","title":"STATE: Disabled","properties":{"background":{"$ref":"#/definitions/background"}},"additionalProperties":false,"required":["background"],"format":"collapse:closed"}},"additionalProperties":false,"required":["background","__hover","__selected","__disabled"],"format":"group"}},"additionalProperties":false,"required":["_bar"],"format":"group"}},"format":"tabs"}}');
;// CONCATENATED MODULE: ./src/addons/StylesAddon/form/getSchema.js



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var getSchema = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee(designSystem) {
    var _designSystemSchema$s;
    var definitions;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          definitions = (_designSystemSchema$s = eds_schema_full_namespaceObject.w) === null || _designSystemSchema$s === void 0 ? void 0 : _designSystemSchema$s.definitions;
          return _context.abrupt("return", {
            type: "object",
            definitions: definitions,
            properties: {
              // editTheme: {
              //   title: "Edit Theme",
              //   type: "boolean",
              //   default: false,
              // },
              designSystem: _objectSpread({}, eds_schema_full_namespaceObject.w)
            }
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSchema(_x) {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/addons/StylesAddon/StylesAddon.jsx




function StylesAddon_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function StylesAddon_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? StylesAddon_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : StylesAddon_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








var SET_MODULE_PAYLOAD_SELECTOR = function SET_MODULE_PAYLOAD_SELECTOR(state) {
  return state.setModulePayload;
};
var SETUP_JSON_SELECTOR = function SETUP_JSON_SELECTOR(state) {
  return state.model.setupJson;
};
var PAYLOAD_SELECTOR = function PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};
var SELECTED_THEME_SELECTOR = function SELECTED_THEME_SELECTOR(state) {
  var _state$options;
  return ((_state$options = state.options) === null || _state$options === void 0 || (_state$options = _state$options.styles) === null || _state$options === void 0 ? void 0 : _state$options.selectedTheme) || null;
};
var TOKENS_SELECTOR = function TOKENS_SELECTOR(state) {
  var _state$options2;
  return ((_state$options2 = state.options) === null || _state$options2 === void 0 || (_state$options2 = _state$options2.styles) === null || _state$options2 === void 0 ? void 0 : _state$options2.tokens) || {};
};
var UPDATE_OPTIONS_STYLES_SELECTOR = function UPDATE_OPTIONS_STYLES_SELECTOR(state) {
  return state.updateOptionsStyles;
};
var designSystem = "eds";
var StylesAddon = function StylesAddon(_ref) {
  var _ref$withRealTimeUpda = _ref.withRealTimeUpdates,
    withRealTimeUpdates = _ref$withRealTimeUpda === void 0 ? false : _ref$withRealTimeUpda;
  var setModulePayload = (0,Store/* useStore */.P)(SET_MODULE_PAYLOAD_SELECTOR);
  var setupJson = (0,Store/* useStore */.P)(SETUP_JSON_SELECTOR);
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var selectedTheme = (0,Store/* useStore */.P)(SELECTED_THEME_SELECTOR);
  var tokens = (0,Store/* useStore */.P)(TOKENS_SELECTOR);
  var updateOptionsStyles = (0,Store/* useStore */.P)(UPDATE_OPTIONS_STYLES_SELECTOR);
  var isFirstTime = (0,compat_module.useRef)(true);
  var _useState = (0,compat_module.useState)({
      // editTheme: selectedTheme ? false : true,
      designSystem: tokens
    }),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  (0,compat_module.useEffect)(function () {
    setFormData(StylesAddon_objectSpread(StylesAddon_objectSpread({}, formData), {}, {
      designSystem: tokens
    }));
  }, [tokens]);
  var _useState3 = (0,compat_module.useState)(null),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    schema = _useState4[0],
    setSchema = _useState4[1];
  var createForm = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee(designSystem) {
      var _schema;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getSchema(designSystem);
          case 2:
            _schema = _context.sent;
            // if (withRealTimeUpdates) {
            //   _schema.properties.editTheme.showIf = false;
            //   _schema.properties.designSystem.showIf = true;
            // }
            setSchema(_schema);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function createForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,compat_module.useEffect)(function () {
    createForm(designSystem);
  }, [designSystem]);
  var handleOnSubmit = function handleOnSubmit(e) {
    var _e$formData;
    var tokens = (_e$formData = e.formData) === null || _e$formData === void 0 ? void 0 : _e$formData.designSystem;
    var value = (0,getThemeValue/* getThemeValue */.n)(setupJson, tokens);
    updateOptionsStyles({
      selectedTheme: null,
      tokens: tokens
    });
    var obj = Object.assign({}, payload, {
      styles: StylesAddon_objectSpread(StylesAddon_objectSpread({}, payload.styles), {}, {
        value: value
      })
    });
    setModulePayload(obj);
  };
  var handleFormUpdate = function handleFormUpdate(_ref3) {
    var formData = _ref3.formData;
    setFormData(formData);
    if (withRealTimeUpdates && !isFirstTime.current) {
      handleOnSubmit({
        formData: formData
      });
    }
    if (isFirstTime.current) {
      isFirstTime.current = false;
    }
  };
  var handleOnChange = function handleOnChange(selected) {
    isFirstTime.current = true;
    var tokens = themes/* default */.Ay[selected].tokens;
    var resources = themes/* default */.Ay[selected].resources;
    var value = (0,getThemeValue/* getThemeValue */.n)(setupJson, tokens);
    updateOptionsStyles({
      selectedTheme: selected,
      tokens: tokens,
      resources: resources || {}
    });
    var obj = Object.assign({}, payload, {
      styles: StylesAddon_objectSpread(StylesAddon_objectSpread({}, payload.styles), {}, {
        value: value,
        resources: resources
      })
    });
    setModulePayload(obj);
  };

  // useEffect(() => {
  //   setSchema(schemaResponse.schema);
  // }, []);

  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: StylesAddon_module.panel
  }, /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    p: "md"
  }, /*#__PURE__*/compat_module["default"].createElement(Alert/* Alert */.F, {
    color: "grape",
    style: {
      border: "1px solid #00000033"
    }
  }, "The module's ", /*#__PURE__*/compat_module["default"].createElement("code", null, "setup.json"), " contains ", /*#__PURE__*/compat_module["default"].createElement("em", null, "Styles"), " configurations. Below you have access to some themes and mock tokens to test. The customer will have access to a similar UI in the final environment.")), /*#__PURE__*/compat_module["default"].createElement(Box/* Box */.a, {
    p: "md"
  }, /*#__PURE__*/compat_module["default"].createElement(Select/* Select */.l6, {
    label: "Theme",
    description: "Mock data with tokens for test styles",
    onChange: handleOnChange,
    value: selectedTheme || "",
    data: Object.keys(themes/* default */.Ay).map(function (key) {
      return {
        value: key,
        label: themes/* default */.Ay[key].name
      };
    })
  })), schema ? /*#__PURE__*/compat_module["default"].createElement(es/* default */.A, {
    className: StylesAddon_module.form,
    schema: schema,
    formData: formData,
    onSubmit: handleOnSubmit,
    onChange: handleFormUpdate
  }, !withRealTimeUpdates ? /*#__PURE__*/compat_module["default"].createElement("div", {
    className: StylesAddon_module.actionToolbar
  }, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    type: "submit",
    style: {
      marginRight: 12,
      padding: "5px 12px",
      borderRadius: 4
    }
  }, "Update")) : /*#__PURE__*/compat_module["default"].createElement(compat_module["default"].Fragment, null)) : null);
};
/* harmony default export */ const StylesAddon_StylesAddon = (StylesAddon);
;// CONCATENATED MODULE: ./src/addons/StylesAddon/index.js



/***/ })

}]);