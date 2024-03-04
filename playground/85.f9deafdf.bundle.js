"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[85],{

/***/ 5085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ I18nAddon_I18nAddon)
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
// EXTERNAL MODULE: ./node_modules/lodash.set/index.js
var lodash_set = __webpack_require__(20974);
var lodash_set_default = /*#__PURE__*/__webpack_require__.n(lodash_set);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Button/Button.js + 3 modules
var Button = __webpack_require__(67859);
// EXTERNAL MODULE: ./node_modules/@everymundo/registry-json-schema-form/es/index.js + 280 modules
var es = __webpack_require__(91352);
;// CONCATENATED MODULE: ./src/addons/I18nAddon/form/schema.json
const schema_namespaceObject = /*#__PURE__*/JSON.parse('{"type":"object","properties":{"direction":{"type":"string","title":"Direction","description":"Test the module with different text direction.","enum":["ltr","rtl"],"enumNames":["LTR (Left to Right)","RTL (Right to Left)"],"default":"ltr"},"showLabels":{"type":"boolean","title":"Show labels","help":"Uncheck to not send labels to the module","default":true},"labels":{"type":"array","description":"List of all module labels","format":"collapse:closed","title":"Labels","items":{"type":"object","properties":{"key":{"type":"string","title":"Key","placeholder":"some-unique-key"},"value":{"type":"string","title":"Value","placeholder":"some-value"}},"default":{}},"showIf":{"showLabels":true}}}}');
;// CONCATENATED MODULE: ./src/addons/I18nAddon/form/uiSchema.json
const uiSchema_namespaceObject = /*#__PURE__*/JSON.parse('{"labels":{"ui:options":{"addable":true,"orderable":false,"removable":true}}}');
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
;// CONCATENATED MODULE: ./src/addons/I18nAddon/I18nAddon.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const I18nAddon_module = ({"panel":"w","actionToolbar":"x"});
;// CONCATENATED MODULE: ./src/addons/I18nAddon/I18nAddon.jsx




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
var normalizeLabels = function normalizeLabels(labels) {
  return labels ? Object.keys(labels).map(function (key) {
    return {
      key: key,
      value: labels[key]
    };
  }) : [];
};
var I18nAddon = function I18nAddon(_ref) {
  var _payload$i18n, _setupJson$i18n, _setupJson$i18n2, _setupJson$i18n3, _payload$context;
  var _ref$withRealTimeUpda = _ref.withRealTimeUpdates,
    withRealTimeUpdates = _ref$withRealTimeUpda === void 0 ? false : _ref$withRealTimeUpda;
  var setModulePayload = (0,Store/* useStore */.P)(SET_MODULE_PAYLOAD_SELECTOR);
  var setupJson = (0,Store/* useStore */.P)(SETUP_JSON_SELECTOR);
  var payload = (0,Store/* useStore */.P)(PAYLOAD_SELECTOR);
  var labels = (payload === null || payload === void 0 || (_payload$i18n = payload.i18n) === null || _payload$i18n === void 0 ? void 0 : _payload$i18n.labels) || null;
  schema_namespaceObject.properties.direction.showIf = (setupJson === null || setupJson === void 0 || (_setupJson$i18n = setupJson.i18n) === null || _setupJson$i18n === void 0 ? void 0 : _setupJson$i18n.rtl) || false;
  schema_namespaceObject.properties.showLabels.showIf = ((setupJson === null || setupJson === void 0 || (_setupJson$i18n2 = setupJson.i18n) === null || _setupJson$i18n2 === void 0 ? void 0 : _setupJson$i18n2.language) === "*" || setupJson !== null && setupJson !== void 0 && (_setupJson$i18n3 = setupJson.i18n) !== null && _setupJson$i18n3 !== void 0 && _setupJson$i18n3.labels) && !withRealTimeUpdates ? true : false;
  var _useState = (0,compat_module.useState)({
      direction: (payload === null || payload === void 0 || (_payload$context = payload.context) === null || _payload$context === void 0 || (_payload$context = _payload$context.geo) === null || _payload$context === void 0 || (_payload$context = _payload$context.language) === null || _payload$context === void 0 ? void 0 : _payload$context.textDirection) || "ltr",
      showLabels: labels && Object.keys(labels).length !== 0,
      labels: normalizeLabels(labels)
    }),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var handleOnSubmit = function handleOnSubmit(e) {
    var obj = JSON.parse(JSON.stringify(payload));
    obj = lodash_set_default()(obj, "i18n.labels", _objectSpread({}, e.formData.labels.filter(function (_ref2) {
      var key = _ref2.key;
      return typeof key !== "undefined";
    }).reduce(function (a, v) {
      return _objectSpread(_objectSpread({}, a), {}, (0,defineProperty/* default */.A)({}, v.key, v.value));
    }, {})));
    obj = lodash_set_default()(obj, "context.geo.language.textDirection", formData.direction || "ltr");
    setModulePayload(obj);
  };
  var handleOnReset = function handleOnReset(e) {
    var obj = JSON.parse(JSON.stringify(payload));
    var i18n = setupJson !== null && setupJson !== void 0 && setupJson.i18n ? JSON.parse(JSON.stringify(setupJson.i18n)) : undefined;
    obj = lodash_set_default()(obj, "i18n", i18n);
    obj = lodash_set_default()(obj, "context.geo.language.textDirection", "ltr");
    setModulePayload(obj);
    setFormData({
      direction: "ltr",
      showLabels: true,
      labels: normalizeLabels(i18n === null || i18n === void 0 ? void 0 : i18n.labels)
    });
  };
  var handleFormUpdate = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)( /*#__PURE__*/regenerator_default().mark(function _callee(_ref3) {
      var newObj, _setupJson$i18n4, _setupJson$i18n5;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newObj = _ref3.formData;
            if (typeof (newObj === null || newObj === void 0 ? void 0 : newObj.showLabels) !== "undefined" && (formData === null || formData === void 0 ? void 0 : formData.showLabels) !== (newObj === null || newObj === void 0 ? void 0 : newObj.showLabels)) {
              if (!newObj.showLabels) {
                newObj.labels = [];
              } else {
                if (Object.keys(labels).length === 0 && setupJson !== null && setupJson !== void 0 && (_setupJson$i18n4 = setupJson.i18n) !== null && _setupJson$i18n4 !== void 0 && _setupJson$i18n4.labels) {
                  newObj.labels = normalizeLabels(setupJson === null || setupJson === void 0 || (_setupJson$i18n5 = setupJson.i18n) === null || _setupJson$i18n5 === void 0 ? void 0 : _setupJson$i18n5.labels);
                } else {
                  newObj.labels = normalizeLabels(labels);
                }
              }
            }
            setFormData(newObj);

            // if (withRealTimeUpdates){
            //   handleOnSubmit({ formData: newObj})
            // }
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleFormUpdate(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/compat_module["default"].createElement("div", {
    className: I18nAddon_module.panel,
    style: withRealTimeUpdates ? {
      paddingBottom: 0
    } : {}
  }, /*#__PURE__*/compat_module["default"].createElement(es/* default */.A, {
    schema: schema_namespaceObject,
    uiSchema: uiSchema_namespaceObject,
    formData: formData,
    onSubmit: handleOnSubmit,
    onChange: handleFormUpdate
  }, /*#__PURE__*/compat_module["default"].createElement("div", {
    className: I18nAddon_module.actionToolbar
  }, /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    type: "submit",
    style: {
      marginRight: 12
    }
  }, "Update"), /*#__PURE__*/compat_module["default"].createElement(Button/* Button */.$, {
    type: "button",
    variant: "default",
    onClick: handleOnReset
  }, "Reset"))));
};
/* harmony default export */ const I18nAddon_I18nAddon = (I18nAddon);
;// CONCATENATED MODULE: ./src/addons/I18nAddon/index.js



/***/ })

}]);