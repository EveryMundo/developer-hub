"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[854],{

/***/ 98048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Divider)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 29 modules
var MantineProvider = __webpack_require__(35103);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js
var get_size = __webpack_require__(9103);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Divider/Divider.styles.js


const sizes = {
  xs: (0,rem/* rem */.D)(1),
  sm: (0,rem/* rem */.D)(2),
  md: (0,rem/* rem */.D)(3),
  lg: (0,rem/* rem */.D)(4),
  xl: (0,rem/* rem */.D)(5)
};
function getColor(theme, color) {
  const themeColor = theme.fn.variant({ variant: "outline", color }).border;
  return typeof color === "string" && (color in theme.colors || color.split(".")[0] in theme.colors) ? themeColor : color === void 0 ? theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4] : color;
}
var useStyles = (0,create_styles/* createStyles */.r)((theme, { color }, { size, variant }) => ({
  root: {},
  withLabel: {
    borderTop: "0 !important"
  },
  left: {
    "&::before": {
      display: "none"
    }
  },
  right: {
    "&::after": {
      display: "none"
    }
  },
  label: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      flex: 1,
      height: (0,rem/* rem */.D)(1),
      borderTop: `${(0,get_size/* getSize */.Y)({ size, sizes })} ${variant} ${getColor(theme, color)}`,
      marginRight: theme.spacing.xs
    },
    "&::after": {
      content: '""',
      flex: 1,
      borderTop: `${(0,get_size/* getSize */.Y)({ size, sizes })} ${variant} ${getColor(theme, color)}`,
      marginLeft: theme.spacing.xs
    }
  },
  labelDefaultStyles: {
    color: color === "dark" ? theme.colors.dark[1] : theme.fn.themeColor(color, theme.colorScheme === "dark" ? 5 : theme.fn.primaryShade(), false)
  },
  horizontal: {
    border: 0,
    borderTopWidth: (0,rem/* rem */.D)((0,get_size/* getSize */.Y)({ size, sizes })),
    borderTopColor: getColor(theme, color),
    borderTopStyle: variant,
    margin: 0
  },
  vertical: {
    border: 0,
    alignSelf: "stretch",
    height: "auto",
    borderLeftWidth: (0,rem/* rem */.D)((0,get_size/* getSize */.Y)({ size, sizes })),
    borderLeftColor: getColor(theme, color),
    borderLeftStyle: variant
  }
}));

/* harmony default export */ const Divider_styles = (useStyles);
//# sourceMappingURL=Divider.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(99826);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Divider/Divider.js






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
const defaultProps = {
  orientation: "horizontal",
  size: "xs",
  labelPosition: "left",
  variant: "solid"
};
const Divider = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Divider", defaultProps, props), {
    className,
    color,
    orientation,
    size,
    label,
    labelPosition,
    labelProps,
    variant,
    styles,
    classNames,
    unstyled
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "orientation",
    "size",
    "label",
    "labelPosition",
    "labelProps",
    "variant",
    "styles",
    "classNames",
    "unstyled"
  ]);
  const { classes, cx } = Divider_styles({ color }, { classNames, styles, unstyled, name: "Divider", variant, size });
  const vertical = orientation === "vertical";
  const horizontal = orientation === "horizontal";
  const withLabel = !!label && horizontal;
  const useLabelDefaultStyles = !(labelProps == null ? void 0 : labelProps.color);
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, __spreadValues({
    ref,
    className: cx(classes.root, {
      [classes.vertical]: vertical,
      [classes.horizontal]: horizontal,
      [classes.withLabel]: withLabel
    }, className),
    role: "separator"
  }, others), withLabel && /* @__PURE__ */ compat_module["default"].createElement(Text/* Text */.E, __spreadProps(__spreadValues({}, labelProps), {
    size: (labelProps == null ? void 0 : labelProps.size) || "xs",
    mt: (0,rem/* rem */.D)(2),
    className: cx(classes.label, classes[labelPosition], {
      [classes.labelDefaultStyles]: useLabelDefaultStyles
    })
  }), label));
});
Divider.displayName = "@mantine/core/Divider";


//# sourceMappingURL=Divider.js.map


/***/ }),

/***/ 38195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ DefaultItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88763);


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
const DefaultItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_a, ref) => {
  var _b = _a, { label, value } = _b, others = __objRest(_b, ["label", "value"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", __spreadValues({
    ref
  }, others), label || value);
});
DefaultItem.displayName = "@mantine/core/DefaultItem";


//# sourceMappingURL=DefaultItem.js.map


/***/ }),

/***/ 92228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l6: () => (/* binding */ Select)
});

// UNUSED EXPORTS: defaultFilter, defaultShouldCreate

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/use-scroll-into-view.js + 4 modules
var use_scroll_into_view = __webpack_require__(53247);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js
var use_uncontrolled = __webpack_require__(19203);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js
var use_did_update = __webpack_require__(96915);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js
var use_merged_ref = __webpack_require__(12305);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js
var get_default_z_index = __webpack_require__(28361);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/group-options/group-options.js
var group_options = __webpack_require__(79786);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/SelectScrollArea/SelectScrollArea.js
var SelectScrollArea = __webpack_require__(5309);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/DefaultItem/DefaultItem.js
var DefaultItem = __webpack_require__(38195);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/SelectRightSection/get-select-right-section-props.js + 2 modules
var get_select_right_section_props = __webpack_require__(93840);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/SelectItems/SelectItems.js + 1 modules
var SelectItems = __webpack_require__(1327);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/SelectPopover/SelectPopover.js + 1 modules
var SelectPopover = __webpack_require__(23067);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/filter-data/filter-data.js
function filterData({
  data,
  searchable,
  limit,
  searchValue,
  filter,
  value,
  filterDataOnExactSearchMatch
}) {
  if (!searchable) {
    return data;
  }
  const selected = value != null ? data.find((item) => item.value === value) || null : null;
  if (selected && !filterDataOnExactSearchMatch && (selected == null ? void 0 : selected.label) === searchValue) {
    if (limit) {
      if (limit >= data.length) {
        return data;
      }
      const firstIndex = data.indexOf(selected);
      const lastIndex = firstIndex + limit;
      const firstIndexOffset = lastIndex - data.length;
      if (firstIndexOffset > 0) {
        return data.slice(firstIndex - firstIndexOffset);
      }
      return data.slice(firstIndex, lastIndex);
    }
    return data;
  }
  const result = [];
  for (let i = 0; i < data.length; i += 1) {
    if (filter(searchValue, data[i])) {
      result.push(data[i]);
    }
    if (result.length >= limit) {
      break;
    }
  }
  return result;
}


//# sourceMappingURL=filter-data.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/Select.styles.js


var useStyles = (0,create_styles/* createStyles */.r)(() => ({
  input: {
    "&:not(:disabled)": {
      cursor: "pointer",
      "&::selection": {
        backgroundColor: "transparent"
      }
    }
  }
}));

/* harmony default export */ const Select_styles = (useStyles);
//# sourceMappingURL=Select.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Input/use-input-props.js
var use_input_props = __webpack_require__(86873);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Input/Input.js + 11 modules
var Input = __webpack_require__(13323);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/Select.js














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
function defaultFilter(value, item) {
  return item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}
function defaultShouldCreate(query, data) {
  return !!query && !data.some((item) => item.label.toLowerCase() === query.toLowerCase());
}
const defaultProps = {
  required: false,
  size: "sm",
  shadow: "sm",
  itemComponent: DefaultItem/* DefaultItem */.T,
  transitionProps: { transition: "fade", duration: 0 },
  initiallyOpened: false,
  filter: defaultFilter,
  maxDropdownHeight: 220,
  searchable: false,
  clearable: false,
  limit: Infinity,
  disabled: false,
  creatable: false,
  shouldCreate: defaultShouldCreate,
  selectOnBlur: false,
  switchDirectionOnFlip: false,
  filterDataOnExactSearchMatch: false,
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.I)("popover"),
  positionDependencies: [],
  dropdownPosition: "flip"
};
const Select = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,use_input_props/* useInputProps */.I)("Select", defaultProps, props), {
    inputProps,
    wrapperProps,
    shadow,
    data,
    value,
    defaultValue,
    onChange,
    itemComponent,
    onKeyDown,
    onBlur,
    onFocus,
    transitionProps,
    initiallyOpened,
    unstyled,
    classNames,
    styles,
    filter,
    maxDropdownHeight,
    searchable,
    clearable,
    nothingFound,
    limit,
    disabled,
    onSearchChange,
    searchValue,
    rightSection,
    rightSectionWidth,
    creatable,
    getCreateLabel,
    shouldCreate,
    selectOnBlur,
    onCreate,
    dropdownComponent,
    onDropdownClose,
    onDropdownOpen,
    withinPortal,
    portalProps,
    switchDirectionOnFlip,
    zIndex,
    name,
    dropdownPosition,
    allowDeselect,
    placeholder,
    filterDataOnExactSearchMatch,
    form,
    positionDependencies,
    readOnly,
    clearButtonProps,
    hoverOnSearchChange
  } = _a, others = __objRest(_a, [
    "inputProps",
    "wrapperProps",
    "shadow",
    "data",
    "value",
    "defaultValue",
    "onChange",
    "itemComponent",
    "onKeyDown",
    "onBlur",
    "onFocus",
    "transitionProps",
    "initiallyOpened",
    "unstyled",
    "classNames",
    "styles",
    "filter",
    "maxDropdownHeight",
    "searchable",
    "clearable",
    "nothingFound",
    "limit",
    "disabled",
    "onSearchChange",
    "searchValue",
    "rightSection",
    "rightSectionWidth",
    "creatable",
    "getCreateLabel",
    "shouldCreate",
    "selectOnBlur",
    "onCreate",
    "dropdownComponent",
    "onDropdownClose",
    "onDropdownOpen",
    "withinPortal",
    "portalProps",
    "switchDirectionOnFlip",
    "zIndex",
    "name",
    "dropdownPosition",
    "allowDeselect",
    "placeholder",
    "filterDataOnExactSearchMatch",
    "form",
    "positionDependencies",
    "readOnly",
    "clearButtonProps",
    "hoverOnSearchChange"
  ]);
  const { classes, cx, theme } = Select_styles();
  const [dropdownOpened, _setDropdownOpened] = (0,compat_module.useState)(initiallyOpened);
  const [hovered, setHovered] = (0,compat_module.useState)(-1);
  const inputRef = (0,compat_module.useRef)();
  const itemsRefs = (0,compat_module.useRef)({});
  const [direction, setDirection] = (0,compat_module.useState)("column");
  const isColumn = direction === "column";
  const { scrollIntoView, targetRef, scrollableRef } = (0,use_scroll_into_view/* useScrollIntoView */.q)({
    duration: 0,
    offset: 5,
    cancelable: false,
    isList: true
  });
  const isDeselectable = allowDeselect === void 0 ? clearable : allowDeselect;
  const setDropdownOpened = (opened) => {
    if (dropdownOpened !== opened) {
      _setDropdownOpened(opened);
      const handler = opened ? onDropdownOpen : onDropdownClose;
      typeof handler === "function" && handler();
    }
  };
  const isCreatable = creatable && typeof getCreateLabel === "function";
  let createLabel = null;
  const formattedData = data.map((item) => typeof item === "string" ? { label: item, value: item } : item);
  const sortedData = (0,group_options/* groupOptions */.M)({ data: formattedData });
  const [_value, handleChange, controlled] = (0,use_uncontrolled/* useUncontrolled */.Z)({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const selectedValue = sortedData.find((item) => item.value === _value);
  const [inputValue, setInputValue] = (0,use_uncontrolled/* useUncontrolled */.Z)({
    value: searchValue,
    defaultValue: (selectedValue == null ? void 0 : selectedValue.label) || "",
    finalValue: void 0,
    onChange: onSearchChange
  });
  const handleSearchChange = (val) => {
    setInputValue(val);
    if (searchable && typeof onSearchChange === "function") {
      onSearchChange(val);
    }
  };
  const handleClear = () => {
    var _a2;
    if (!readOnly) {
      handleChange(null);
      if (!controlled) {
        handleSearchChange("");
      }
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    }
  };
  (0,compat_module.useEffect)(() => {
    const newSelectedValue = sortedData.find((item) => item.value === _value);
    if (newSelectedValue) {
      handleSearchChange(newSelectedValue.label);
    } else if (!isCreatable || !_value) {
      handleSearchChange("");
    }
  }, [_value]);
  (0,compat_module.useEffect)(() => {
    if (selectedValue && (!searchable || !dropdownOpened)) {
      handleSearchChange(selectedValue.label);
    }
  }, [selectedValue == null ? void 0 : selectedValue.label]);
  const handleItemSelect = (item) => {
    if (!readOnly) {
      if (isDeselectable && (selectedValue == null ? void 0 : selectedValue.value) === item.value) {
        handleChange(null);
        setDropdownOpened(false);
      } else {
        if (item.creatable && typeof onCreate === "function") {
          const createdItem = onCreate(item.value);
          if (typeof createdItem !== "undefined" && createdItem !== null) {
            if (typeof createdItem === "string") {
              handleChange(createdItem);
            } else {
              handleChange(createdItem.value);
            }
          }
        } else {
          handleChange(item.value);
        }
        if (!controlled) {
          handleSearchChange(item.label);
        }
        setHovered(-1);
        setDropdownOpened(false);
        inputRef.current.focus();
      }
    }
  };
  const filteredData = filterData({
    data: sortedData,
    searchable,
    limit,
    searchValue: inputValue,
    filter,
    filterDataOnExactSearchMatch,
    value: _value
  });
  if (isCreatable && shouldCreate(inputValue, filteredData)) {
    createLabel = getCreateLabel(inputValue);
    filteredData.push({ label: inputValue, value: inputValue, creatable: true });
  }
  const getNextIndex = (index, nextItem, compareFn) => {
    let i = index;
    while (compareFn(i)) {
      i = nextItem(i);
      if (!filteredData[i].disabled)
        return i;
    }
    return index;
  };
  (0,use_did_update/* useDidUpdate */.C)(() => {
    if (hoverOnSearchChange && inputValue) {
      setHovered(0);
    } else {
      setHovered(-1);
    }
  }, [inputValue, hoverOnSearchChange]);
  const selectedItemIndex = _value ? filteredData.findIndex((el) => el.value === _value) : 0;
  const shouldShowDropdown = !readOnly && (filteredData.length > 0 ? dropdownOpened : dropdownOpened && !!nothingFound);
  const handlePrevious = () => {
    setHovered((current) => {
      var _a2;
      const nextIndex = getNextIndex(current, (index) => index - 1, (index) => index > 0);
      targetRef.current = itemsRefs.current[(_a2 = filteredData[nextIndex]) == null ? void 0 : _a2.value];
      shouldShowDropdown && scrollIntoView({ alignment: isColumn ? "start" : "end" });
      return nextIndex;
    });
  };
  const handleNext = () => {
    setHovered((current) => {
      var _a2;
      const nextIndex = getNextIndex(current, (index) => index + 1, (index) => index < filteredData.length - 1);
      targetRef.current = itemsRefs.current[(_a2 = filteredData[nextIndex]) == null ? void 0 : _a2.value];
      shouldShowDropdown && scrollIntoView({ alignment: isColumn ? "end" : "start" });
      return nextIndex;
    });
  };
  const scrollSelectedItemIntoView = () => window.setTimeout(() => {
    var _a2;
    targetRef.current = itemsRefs.current[(_a2 = filteredData[selectedItemIndex]) == null ? void 0 : _a2.value];
    scrollIntoView({ alignment: isColumn ? "end" : "start" });
  }, 50);
  (0,use_did_update/* useDidUpdate */.C)(() => {
    if (shouldShowDropdown)
      scrollSelectedItemIntoView();
  }, [shouldShowDropdown]);
  const handleInputKeydown = (event) => {
    typeof onKeyDown === "function" && onKeyDown(event);
    switch (event.key) {
      case "ArrowUp": {
        event.preventDefault();
        if (!dropdownOpened) {
          setHovered(selectedItemIndex);
          setDropdownOpened(true);
          scrollSelectedItemIntoView();
        } else {
          isColumn ? handlePrevious() : handleNext();
        }
        break;
      }
      case "ArrowDown": {
        event.preventDefault();
        if (!dropdownOpened) {
          setHovered(selectedItemIndex);
          setDropdownOpened(true);
          scrollSelectedItemIntoView();
        } else {
          isColumn ? handleNext() : handlePrevious();
        }
        break;
      }
      case "Home": {
        if (!searchable) {
          event.preventDefault();
          if (!dropdownOpened) {
            setDropdownOpened(true);
          }
          const firstItemIndex = filteredData.findIndex((item) => !item.disabled);
          setHovered(firstItemIndex);
          shouldShowDropdown && scrollIntoView({ alignment: isColumn ? "end" : "start" });
        }
        break;
      }
      case "End": {
        if (!searchable) {
          event.preventDefault();
          if (!dropdownOpened) {
            setDropdownOpened(true);
          }
          const lastItemIndex = filteredData.map((item) => !!item.disabled).lastIndexOf(false);
          setHovered(lastItemIndex);
          shouldShowDropdown && scrollIntoView({ alignment: isColumn ? "end" : "start" });
        }
        break;
      }
      case "Escape": {
        event.preventDefault();
        setDropdownOpened(false);
        setHovered(-1);
        break;
      }
      case " ": {
        if (!searchable) {
          event.preventDefault();
          if (filteredData[hovered] && dropdownOpened) {
            handleItemSelect(filteredData[hovered]);
          } else {
            setDropdownOpened(true);
            setHovered(selectedItemIndex);
            scrollSelectedItemIntoView();
          }
        }
        break;
      }
      case "Enter": {
        if (!searchable) {
          event.preventDefault();
        }
        if (filteredData[hovered] && dropdownOpened) {
          event.preventDefault();
          handleItemSelect(filteredData[hovered]);
        }
      }
    }
  };
  const handleInputBlur = (event) => {
    typeof onBlur === "function" && onBlur(event);
    const selected = sortedData.find((item) => item.value === _value);
    if (selectOnBlur && filteredData[hovered] && dropdownOpened) {
      handleItemSelect(filteredData[hovered]);
    }
    handleSearchChange((selected == null ? void 0 : selected.label) || "");
    setDropdownOpened(false);
  };
  const handleInputFocus = (event) => {
    typeof onFocus === "function" && onFocus(event);
    if (searchable) {
      setDropdownOpened(true);
    }
  };
  const handleInputChange = (event) => {
    if (!readOnly) {
      handleSearchChange(event.currentTarget.value);
      if (clearable && event.currentTarget.value === "") {
        handleChange(null);
      }
      setHovered(-1);
      setDropdownOpened(true);
    }
  };
  const handleInputClick = () => {
    if (!readOnly) {
      setDropdownOpened(!dropdownOpened);
      if (_value && !dropdownOpened) {
        setHovered(selectedItemIndex);
      }
    }
  };
  return /* @__PURE__ */ compat_module["default"].createElement(Input/* Input */.p.Wrapper, __spreadProps(__spreadValues({}, wrapperProps), {
    __staticSelector: "Select"
  }), /* @__PURE__ */ compat_module["default"].createElement(SelectPopover/* SelectPopover */.k, {
    opened: shouldShowDropdown,
    transitionProps,
    shadow,
    withinPortal,
    portalProps,
    __staticSelector: "Select",
    onDirectionChange: setDirection,
    switchDirectionOnFlip,
    zIndex,
    dropdownPosition,
    positionDependencies: [...positionDependencies, inputValue],
    classNames,
    styles,
    unstyled,
    variant: inputProps.variant
  }, /* @__PURE__ */ compat_module["default"].createElement(SelectPopover/* SelectPopover */.k.Target, null, /* @__PURE__ */ compat_module["default"].createElement("div", {
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-owns": shouldShowDropdown ? `${inputProps.id}-items` : null,
    "aria-controls": inputProps.id,
    "aria-expanded": shouldShowDropdown,
    onMouseLeave: () => setHovered(-1),
    tabIndex: -1
  }, /* @__PURE__ */ compat_module["default"].createElement("input", {
    type: "hidden",
    name,
    value: _value || "",
    form,
    disabled
  }), /* @__PURE__ */ compat_module["default"].createElement(Input/* Input */.p, __spreadValues(__spreadProps(__spreadValues(__spreadValues({
    autoComplete: "off",
    type: "search"
  }, inputProps), others), {
    ref: (0,use_merged_ref/* useMergedRef */.p)(ref, inputRef),
    onKeyDown: handleInputKeydown,
    __staticSelector: "Select",
    value: inputValue,
    placeholder,
    onChange: handleInputChange,
    "aria-autocomplete": "list",
    "aria-controls": shouldShowDropdown ? `${inputProps.id}-items` : null,
    "aria-activedescendant": hovered >= 0 ? `${inputProps.id}-${hovered}` : null,
    onMouseDown: handleInputClick,
    onBlur: handleInputBlur,
    onFocus: handleInputFocus,
    readOnly: !searchable || readOnly,
    disabled,
    "data-mantine-stop-propagation": shouldShowDropdown,
    name: null,
    classNames: __spreadProps(__spreadValues({}, classNames), {
      input: cx({ [classes.input]: !searchable }, classNames == null ? void 0 : classNames.input)
    })
  }), (0,get_select_right_section_props/* getSelectRightSectionProps */._)({
    theme,
    rightSection,
    rightSectionWidth,
    styles,
    size: inputProps.size,
    shouldClear: clearable && !!selectedValue,
    onClear: handleClear,
    error: wrapperProps.error,
    clearButtonProps,
    disabled,
    readOnly
  }))))), /* @__PURE__ */ compat_module["default"].createElement(SelectPopover/* SelectPopover */.k.Dropdown, {
    component: dropdownComponent || SelectScrollArea/* SelectScrollArea */.F,
    maxHeight: maxDropdownHeight,
    direction,
    id: inputProps.id,
    innerRef: scrollableRef,
    __staticSelector: "Select",
    classNames,
    styles
  }, /* @__PURE__ */ compat_module["default"].createElement(SelectItems/* SelectItems */.p, {
    data: filteredData,
    hovered,
    classNames,
    styles,
    isItemSelected: (val) => val === _value,
    uuid: inputProps.id,
    __staticSelector: "Select",
    onItemHover: setHovered,
    onItemSelect: handleItemSelect,
    itemsRefs,
    itemComponent,
    size: inputProps.size,
    nothingFound,
    creatable: isCreatable && !!createLabel,
    createLabel,
    "aria-label": wrapperProps.label,
    unstyled,
    variant: inputProps.variant
  }))));
});
Select.displayName = "@mantine/core/Select";


//# sourceMappingURL=Select.js.map


/***/ }),

/***/ 1327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ SelectItems)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/utils/random-id/random-id.js
var random_id = __webpack_require__(57453);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(99826);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Divider/Divider.js + 1 modules
var Divider = __webpack_require__(98048);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js
var get_size = __webpack_require__(9103);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectItems/SelectItems.styles.js


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
var useStyles = (0,create_styles/* createStyles */.r)((theme, _params, { size }) => ({
  item: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    boxSizing: "border-box",
    wordBreak: "break-all",
    textAlign: "left",
    width: "100%",
    padding: `calc(${(0,get_size/* getSize */.Y)({ size, sizes: theme.spacing })} / 1.5) ${(0,get_size/* getSize */.Y)({
      size,
      sizes: theme.spacing
    })}`,
    cursor: "pointer",
    fontSize: (0,get_size/* getSize */.Y)({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.fn.radius(),
    "&[data-hovered]": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    },
    "&[data-selected]": __spreadValues({
      backgroundColor: theme.fn.variant({ variant: "filled" }).background,
      color: theme.fn.variant({ variant: "filled" }).color
    }, theme.fn.hover({ backgroundColor: theme.fn.variant({ variant: "filled" }).hover })),
    "&[data-disabled]": {
      cursor: "default",
      color: theme.colors.dark[2]
    }
  }),
  nothingFound: {
    boxSizing: "border-box",
    color: theme.colors.gray[6],
    paddingTop: `calc(${(0,get_size/* getSize */.Y)({ size, sizes: theme.spacing })} / 2)`,
    paddingBottom: `calc(${(0,get_size/* getSize */.Y)({ size, sizes: theme.spacing })} / 2)`,
    textAlign: "center"
  },
  separator: {
    boxSizing: "border-box",
    textAlign: "left",
    width: "100%",
    padding: `calc(${(0,get_size/* getSize */.Y)({ size, sizes: theme.spacing })} / 1.5) ${(0,get_size/* getSize */.Y)({
      size,
      sizes: theme.spacing
    })}`
  },
  separatorLabel: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
  }
}));

/* harmony default export */ const SelectItems_styles = (useStyles);
//# sourceMappingURL=SelectItems.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectItems/SelectItems.js






var SelectItems_defProp = Object.defineProperty;
var SelectItems_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelectItems_hasOwnProp = Object.prototype.hasOwnProperty;
var SelectItems_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelectItems_defNormalProp = (obj, key, value) => key in obj ? SelectItems_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelectItems_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelectItems_hasOwnProp.call(b, prop))
      SelectItems_defNormalProp(a, prop, b[prop]);
  if (SelectItems_getOwnPropSymbols)
    for (var prop of SelectItems_getOwnPropSymbols(b)) {
      if (SelectItems_propIsEnum.call(b, prop))
        SelectItems_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function SelectItems({
  data,
  hovered,
  classNames,
  styles,
  isItemSelected,
  uuid,
  __staticSelector,
  onItemHover,
  onItemSelect,
  itemsRefs,
  itemComponent: Item,
  size,
  nothingFound,
  creatable,
  createLabel,
  unstyled,
  variant
}) {
  const { classes } = SelectItems_styles(null, {
    classNames,
    styles,
    unstyled,
    name: __staticSelector,
    variant,
    size
  });
  const unGroupedItems = [];
  const groupedItems = [];
  let creatableDataIndex = null;
  const constructItemComponent = (item, index) => {
    const selected = typeof isItemSelected === "function" ? isItemSelected(item.value) : false;
    return /* @__PURE__ */ compat_module["default"].createElement(Item, SelectItems_spreadValues({
      key: item.value,
      className: classes.item,
      "data-disabled": item.disabled || void 0,
      "data-hovered": !item.disabled && hovered === index || void 0,
      "data-selected": !item.disabled && selected || void 0,
      selected,
      onMouseEnter: () => onItemHover(index),
      id: `${uuid}-${index}`,
      role: "option",
      tabIndex: -1,
      "aria-selected": hovered === index,
      ref: (node) => {
        if (itemsRefs && itemsRefs.current) {
          itemsRefs.current[item.value] = node;
        }
      },
      onMouseDown: !item.disabled ? (event) => {
        event.preventDefault();
        onItemSelect(item);
      } : null,
      disabled: item.disabled,
      variant
    }, item));
  };
  let groupName = null;
  data.forEach((item, index) => {
    if (item.creatable) {
      creatableDataIndex = index;
    } else if (!item.group) {
      unGroupedItems.push(constructItemComponent(item, index));
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(/* @__PURE__ */ compat_module["default"].createElement("div", {
          className: classes.separator,
          key: `__mantine-divider-${index}`
        }, /* @__PURE__ */ compat_module["default"].createElement(Divider/* Divider */.c, {
          classNames: { label: classes.separatorLabel },
          label: item.group
        })));
      }
      groupedItems.push(constructItemComponent(item, index));
    }
  });
  if (creatable) {
    const creatableDataItem = data[creatableDataIndex];
    unGroupedItems.push(/* @__PURE__ */ compat_module["default"].createElement("div", {
      key: (0,random_id/* randomId */.z)(),
      className: classes.item,
      "data-hovered": hovered === creatableDataIndex || void 0,
      onMouseEnter: () => onItemHover(creatableDataIndex),
      onMouseDown: (event) => {
        event.preventDefault();
        onItemSelect(creatableDataItem);
      },
      tabIndex: -1,
      ref: (node) => {
        if (itemsRefs && itemsRefs.current) {
          itemsRefs.current[creatableDataItem.value] = node;
        }
      }
    }, createLabel));
  }
  if (groupedItems.length > 0 && unGroupedItems.length > 0) {
    unGroupedItems.unshift(/* @__PURE__ */ compat_module["default"].createElement("div", {
      className: classes.separator,
      key: "empty-group-separator"
    }, /* @__PURE__ */ compat_module["default"].createElement(Divider/* Divider */.c, null)));
  }
  return groupedItems.length > 0 || unGroupedItems.length > 0 ? /* @__PURE__ */ compat_module["default"].createElement(compat_module["default"].Fragment, null, groupedItems, unGroupedItems) : /* @__PURE__ */ compat_module["default"].createElement(Text/* Text */.E, {
    size,
    unstyled,
    className: classes.nothingFound
  }, nothingFound);
}
SelectItems.displayName = "@mantine/core/SelectItems";


//# sourceMappingURL=SelectItems.js.map


/***/ }),

/***/ 23067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ SelectPopover)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Select/SelectScrollArea/SelectScrollArea.js
var SelectScrollArea = __webpack_require__(5309);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectPopover/SelectPopover.styles.js


var useStyles = (0,create_styles/* createStyles */.r)(() => ({
  dropdown: {},
  itemsWrapper: {
    padding: (0,rem/* rem */.D)(4),
    display: "flex",
    width: "100%",
    boxSizing: "border-box"
  }
}));

/* harmony default export */ const SelectPopover_styles = (useStyles);
//# sourceMappingURL=SelectPopover.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Popover/Popover.js + 19 modules
var Popover = __webpack_require__(75733);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectPopover/SelectPopover.js







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
function SelectPopoverDropdown(_a) {
  var _b = _a, {
    children,
    component = "div",
    maxHeight = 220,
    direction = "column",
    id,
    innerRef,
    __staticSelector,
    styles,
    classNames,
    unstyled
  } = _b, others = __objRest(_b, [
    "children",
    "component",
    "maxHeight",
    "direction",
    "id",
    "innerRef",
    "__staticSelector",
    "styles",
    "classNames",
    "unstyled"
  ]);
  const { classes } = SelectPopover_styles(null, { name: __staticSelector, styles, classNames, unstyled });
  return /* @__PURE__ */ compat_module["default"].createElement(Popover/* Popover */.A.Dropdown, __spreadValues({
    p: 0,
    onMouseDown: (event) => event.preventDefault()
  }, others), /* @__PURE__ */ compat_module["default"].createElement("div", {
    style: { maxHeight: (0,rem/* rem */.D)(maxHeight), display: "flex" }
  }, /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, {
    component: component || "div",
    id: `${id}-items`,
    "aria-labelledby": `${id}-label`,
    role: "listbox",
    onMouseDown: (event) => event.preventDefault(),
    style: { flex: 1, overflowY: component !== SelectScrollArea/* SelectScrollArea */.F ? "auto" : void 0 },
    "data-combobox-popover": true,
    tabIndex: -1,
    ref: innerRef
  }, /* @__PURE__ */ compat_module["default"].createElement("div", {
    className: classes.itemsWrapper,
    style: { flexDirection: direction }
  }, children))));
}
function SelectPopover({
  opened,
  transitionProps = { transition: "fade", duration: 0 },
  shadow,
  withinPortal,
  portalProps,
  children,
  __staticSelector,
  onDirectionChange,
  switchDirectionOnFlip,
  zIndex,
  dropdownPosition,
  positionDependencies = [],
  classNames,
  styles,
  unstyled,
  readOnly,
  variant
}) {
  return /* @__PURE__ */ compat_module["default"].createElement(Popover/* Popover */.A, {
    unstyled,
    classNames,
    styles,
    width: "target",
    withRoles: false,
    opened,
    middlewares: { flip: dropdownPosition === "flip", shift: false },
    position: dropdownPosition === "flip" ? "bottom" : dropdownPosition,
    positionDependencies,
    zIndex,
    __staticSelector,
    withinPortal,
    portalProps,
    transitionProps,
    shadow,
    disabled: readOnly,
    onPositionChange: (nextPosition) => switchDirectionOnFlip && (onDirectionChange == null ? void 0 : onDirectionChange(nextPosition === "top" ? "column-reverse" : "column")),
    variant
  }, children);
}
SelectPopover.Target = Popover/* Popover */.A.Target;
SelectPopover.Dropdown = SelectPopoverDropdown;


//# sourceMappingURL=SelectPopover.js.map


/***/ }),

/***/ 93840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ getSelectRightSectionProps)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/rem/rem.js
var rem = __webpack_require__(48085);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 29 modules
var MantineProvider = __webpack_require__(35103);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js
var get_size = __webpack_require__(9103);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectRightSection/ChevronIcon.js



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
const iconSizes = {
  xs: (0,rem/* rem */.D)(14),
  sm: (0,rem/* rem */.D)(18),
  md: (0,rem/* rem */.D)(20),
  lg: (0,rem/* rem */.D)(24),
  xl: (0,rem/* rem */.D)(28)
};
function ChevronIcon(_a) {
  var _b = _a, { size, error, style } = _b, others = __objRest(_b, ["size", "error", "style"]);
  const theme = (0,MantineProvider/* useMantineTheme */.xd)();
  const _size = (0,get_size/* getSize */.Y)({ size, sizes: iconSizes });
  return /* @__PURE__ */ compat_module["default"].createElement("svg", __spreadValues({
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: __spreadValues({
      color: error ? theme.colors.red[6] : theme.colors.gray[6],
      width: _size,
      height: _size
    }, style),
    "data-chevron": true
  }, others), /* @__PURE__ */ compat_module["default"].createElement("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}


//# sourceMappingURL=ChevronIcon.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/CloseButton/CloseButton.js + 1 modules
var CloseButton = __webpack_require__(76453);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectRightSection/SelectRightSection.js




var SelectRightSection_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var SelectRightSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SelectRightSection_hasOwnProp = Object.prototype.hasOwnProperty;
var SelectRightSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var SelectRightSection_defNormalProp = (obj, key, value) => key in obj ? SelectRightSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SelectRightSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SelectRightSection_hasOwnProp.call(b, prop))
      SelectRightSection_defNormalProp(a, prop, b[prop]);
  if (SelectRightSection_getOwnPropSymbols)
    for (var prop of SelectRightSection_getOwnPropSymbols(b)) {
      if (SelectRightSection_propIsEnum.call(b, prop))
        SelectRightSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function SelectRightSection({
  shouldClear,
  clearButtonProps,
  onClear,
  size,
  error
}) {
  return shouldClear ? /* @__PURE__ */ compat_module["default"].createElement(CloseButton/* CloseButton */.J, __spreadProps(SelectRightSection_spreadValues({}, clearButtonProps), {
    variant: "transparent",
    onClick: onClear,
    size,
    onMouseDown: (event) => event.preventDefault()
  })) : /* @__PURE__ */ compat_module["default"].createElement(ChevronIcon, {
    error,
    size
  });
}
SelectRightSection.displayName = "@mantine/core/SelectRightSection";


//# sourceMappingURL=SelectRightSection.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Select/SelectRightSection/get-select-right-section-props.js



var get_select_right_section_props_defProp = Object.defineProperty;
var get_select_right_section_props_defProps = Object.defineProperties;
var get_select_right_section_props_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var get_select_right_section_props_getOwnPropSymbols = Object.getOwnPropertySymbols;
var get_select_right_section_props_hasOwnProp = Object.prototype.hasOwnProperty;
var get_select_right_section_props_propIsEnum = Object.prototype.propertyIsEnumerable;
var get_select_right_section_props_defNormalProp = (obj, key, value) => key in obj ? get_select_right_section_props_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var get_select_right_section_props_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (get_select_right_section_props_hasOwnProp.call(b, prop))
      get_select_right_section_props_defNormalProp(a, prop, b[prop]);
  if (get_select_right_section_props_getOwnPropSymbols)
    for (var prop of get_select_right_section_props_getOwnPropSymbols(b)) {
      if (get_select_right_section_props_propIsEnum.call(b, prop))
        get_select_right_section_props_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var get_select_right_section_props_spreadProps = (a, b) => get_select_right_section_props_defProps(a, get_select_right_section_props_getOwnPropDescs(b));
var get_select_right_section_props_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (get_select_right_section_props_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && get_select_right_section_props_getOwnPropSymbols)
    for (var prop of get_select_right_section_props_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && get_select_right_section_props_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function getSelectRightSectionProps(_a) {
  var _b = _a, {
    styles,
    rightSection,
    rightSectionWidth,
    theme
  } = _b, props = get_select_right_section_props_objRest(_b, [
    "styles",
    "rightSection",
    "rightSectionWidth",
    "theme"
  ]);
  if (rightSection) {
    return { rightSection, rightSectionWidth, styles };
  }
  const _styles = typeof styles === "function" ? styles(theme) : styles;
  return {
    rightSection: !props.readOnly && !(props.disabled && props.shouldClear) && /* @__PURE__ */ compat_module["default"].createElement(SelectRightSection, get_select_right_section_props_spreadValues({}, props)),
    styles: get_select_right_section_props_spreadProps(get_select_right_section_props_spreadValues({}, _styles), {
      rightSection: get_select_right_section_props_spreadProps(get_select_right_section_props_spreadValues({}, _styles == null ? void 0 : _styles.rightSection), {
        pointerEvents: props.shouldClear ? void 0 : "none"
      })
    })
  };
}


//# sourceMappingURL=get-select-right-section-props.js.map


/***/ }),

/***/ 5309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SelectScrollArea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88763);
/* harmony import */ var _ScrollArea_ScrollArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90986);



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
const SelectScrollArea = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_a, ref) => {
  var _b = _a, { style } = _b, others = __objRest(_b, ["style"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ScrollArea_ScrollArea_js__WEBPACK_IMPORTED_MODULE_1__/* .ScrollArea */ .F, __spreadProps(__spreadValues({}, others), {
    style: __spreadValues({ width: "100%" }, style),
    viewportProps: { tabIndex: -1 },
    viewportRef: ref
  }), others.children);
});
SelectScrollArea.displayName = "@mantine/core/SelectScrollArea";


//# sourceMappingURL=SelectScrollArea.js.map


/***/ }),

/***/ 24001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Stack)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 29 modules
var MantineProvider = __webpack_require__(35103);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(54297);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-size/get-size.js
var get_size = __webpack_require__(9103);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Stack/Stack.styles.js


var useStyles = (0,create_styles/* createStyles */.r)((theme, { spacing, align, justify }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: align,
    justifyContent: justify,
    gap: (0,get_size/* getSize */.Y)({ size: spacing, sizes: theme.spacing })
  }
}));

/* harmony default export */ const Stack_styles = (useStyles);
//# sourceMappingURL=Stack.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(29180);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Stack/Stack.js





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
  spacing: "md",
  align: "stretch",
  justify: "flex-start"
};
const Stack = (0,compat_module.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.a1)("Stack", defaultProps, props), { spacing, className, align, justify, unstyled, variant } = _a, others = __objRest(_a, ["spacing", "className", "align", "justify", "unstyled", "variant"]);
  const { classes, cx } = Stack_styles({ spacing, align, justify }, { name: "Stack", unstyled, variant });
  return /* @__PURE__ */ compat_module["default"].createElement(Box/* Box */.a, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others));
});
Stack.displayName = "@mantine/core/Stack";


//# sourceMappingURL=Stack.js.map


/***/ }),

/***/ 53247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ useScrollIntoView)
});

// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.js + 1 modules
var use_reduced_motion = __webpack_require__(36032);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-window-event/use-window-event.js
var use_window_event = __webpack_require__(5979);
;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/utils/ease-in-out-quad.js
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;


//# sourceMappingURL=ease-in-out-quad.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/utils/get-relative-position.js
const getRelativePosition = ({
  axis,
  target,
  parent,
  alignment,
  offset,
  isList
}) => {
  if (!target || !parent && typeof document === "undefined") {
    return 0;
  }
  const isCustomParent = !!parent;
  const parentElement = parent || document.body;
  const parentPosition = parentElement.getBoundingClientRect();
  const targetPosition = target.getBoundingClientRect();
  const getDiff = (property) => targetPosition[property] - parentPosition[property];
  if (axis === "y") {
    const diff = getDiff("top");
    if (diff === 0)
      return 0;
    if (alignment === "start") {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.height * (isList ? 0 : 1) || !isList;
      return shouldScroll ? distance : 0;
    }
    const parentHeight = isCustomParent ? parentPosition.height : window.innerHeight;
    if (alignment === "end") {
      const distance = diff + offset - parentHeight + targetPosition.height;
      const shouldScroll = distance >= -targetPosition.height * (isList ? 0 : 1) || !isList;
      return shouldScroll ? distance : 0;
    }
    if (alignment === "center") {
      return diff - parentHeight / 2 + targetPosition.height / 2;
    }
    return 0;
  }
  if (axis === "x") {
    const diff = getDiff("left");
    if (diff === 0)
      return 0;
    if (alignment === "start") {
      const distance = diff - offset;
      const shouldScroll = distance <= targetPosition.width || !isList;
      return shouldScroll ? distance : 0;
    }
    const parentWidth = isCustomParent ? parentPosition.width : window.innerWidth;
    if (alignment === "end") {
      const distance = diff + offset - parentWidth + targetPosition.width;
      const shouldScroll = distance >= -targetPosition.width || !isList;
      return shouldScroll ? distance : 0;
    }
    if (alignment === "center") {
      return diff - parentWidth / 2 + targetPosition.width / 2;
    }
    return 0;
  }
  return 0;
};


//# sourceMappingURL=get-relative-position.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/utils/get-scroll-start.js
const getScrollStart = ({ axis, parent }) => {
  if (!parent && typeof document === "undefined") {
    return 0;
  }
  const method = axis === "y" ? "scrollTop" : "scrollLeft";
  if (parent) {
    return parent[method];
  }
  const { body, documentElement } = document;
  return body[method] + documentElement[method];
};


//# sourceMappingURL=get-scroll-start.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/utils/set-scroll-param.js
const setScrollParam = ({ axis, parent, distance }) => {
  if (!parent && typeof document === "undefined") {
    return;
  }
  const method = axis === "y" ? "scrollTop" : "scrollLeft";
  if (parent) {
    parent[method] = distance;
  } else {
    const { body, documentElement } = document;
    body[method] = distance;
    documentElement[method] = distance;
  }
};


//# sourceMappingURL=set-scroll-param.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-scroll-into-view/use-scroll-into-view.js








function useScrollIntoView({
  duration = 1250,
  axis = "y",
  onScrollFinish,
  easing = easeInOutQuad,
  offset = 0,
  cancelable = true,
  isList = false
} = {}) {
  const frameID = (0,compat_module.useRef)(0);
  const startTime = (0,compat_module.useRef)(0);
  const shouldStop = (0,compat_module.useRef)(false);
  const scrollableRef = (0,compat_module.useRef)(null);
  const targetRef = (0,compat_module.useRef)(null);
  const reducedMotion = (0,use_reduced_motion/* useReducedMotion */.I)();
  const cancel = () => {
    if (frameID.current) {
      cancelAnimationFrame(frameID.current);
    }
  };
  const scrollIntoView = (0,compat_module.useCallback)(({ alignment = "start" } = {}) => {
    var _a;
    shouldStop.current = false;
    if (frameID.current) {
      cancel();
    }
    const start = (_a = getScrollStart({ parent: scrollableRef.current, axis })) != null ? _a : 0;
    const change = getRelativePosition({
      parent: scrollableRef.current,
      target: targetRef.current,
      axis,
      alignment,
      offset,
      isList
    }) - (scrollableRef.current ? 0 : start);
    function animateScroll() {
      if (startTime.current === 0) {
        startTime.current = performance.now();
      }
      const now = performance.now();
      const elapsed = now - startTime.current;
      const t = reducedMotion || duration === 0 ? 1 : elapsed / duration;
      const distance = start + change * easing(t);
      setScrollParam({
        parent: scrollableRef.current,
        axis,
        distance
      });
      if (!shouldStop.current && t < 1) {
        frameID.current = requestAnimationFrame(animateScroll);
      } else {
        typeof onScrollFinish === "function" && onScrollFinish();
        startTime.current = 0;
        frameID.current = 0;
        cancel();
      }
    }
    animateScroll();
  }, [axis, duration, easing, isList, offset, onScrollFinish, reducedMotion]);
  const handleStop = () => {
    if (cancelable) {
      shouldStop.current = true;
    }
  };
  (0,use_window_event/* useWindowEvent */.M)("wheel", handleStop, {
    passive: true
  });
  (0,use_window_event/* useWindowEvent */.M)("touchmove", handleStop, {
    passive: true
  });
  (0,compat_module.useEffect)(() => cancel, []);
  return {
    scrollableRef,
    targetRef,
    scrollIntoView,
    cancel
  };
}


//# sourceMappingURL=use-scroll-into-view.js.map


/***/ }),

/***/ 79786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ groupOptions)
/* harmony export */ });
/* unused harmony export getGroupedOptions */
function groupOptions({ data }) {
  const sortedData = [];
  const unGroupedData = [];
  const groupedData = data.reduce((acc, item, index) => {
    if (item.group) {
      if (acc[item.group])
        acc[item.group].push(index);
      else
        acc[item.group] = [index];
    } else {
      unGroupedData.push(index);
    }
    return acc;
  }, {});
  Object.keys(groupedData).forEach((groupName) => {
    sortedData.push(...groupedData[groupName].map((index) => data[index]));
  });
  sortedData.push(...unGroupedData.map((itemIndex) => data[itemIndex]));
  return sortedData;
}
function getGroupedOptions(data) {
  const sorted = groupOptions({ data });
  const unGrouped = [];
  const grouped = [];
  let groupName = null;
  sorted.forEach((item, index) => {
    if (!item.group) {
      unGrouped.push({ type: "item", item, index });
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        grouped.push({ type: "label", label: groupName });
      }
      grouped.push({ type: "item", item, index });
    }
  });
  return {
    grouped,
    unGrouped,
    items: [...grouped, ...unGrouped],
    hasItems: grouped.length > 0 || unGrouped.length > 0
  };
}


//# sourceMappingURL=group-options.js.map


/***/ })

}]);