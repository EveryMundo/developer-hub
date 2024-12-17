"use strict";
(self["webpackChunk_everymundo_registry_playground"] = self["webpackChunk_everymundo_registry_playground"] || []).push([[893],{

/***/ 7893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Adnetify_Adnetify)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/preact/compat/dist/compat.module.js + 2 modules
var compat_module = __webpack_require__(88763);
// EXTERNAL MODULE: ./src/store/Store.js + 6 modules
var Store = __webpack_require__(76032);
// EXTERNAL MODULE: ./config/constants.js
var constants = __webpack_require__(62246);
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/cleanScript.js
var cleanScript = function cleanScript() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.replace(/<script/gi, "\\<script").replace(/<\/script/gi, "\\<\\/script");
};
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/data/blank-template.js


/* harmony default export */ const blank_template = (function (_ref) {
  var id = _ref.id,
    url = _ref.url,
    payload = _ref.payload,
    _ref$textDirection = _ref.textDirection,
    textDirection = _ref$textDirection === void 0 ? "ltr" : _ref$textDirection,
    _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? "en" : _ref$lang;
  return "\n<!DOCTYPE html>\n<html lang=\"".concat(lang, "\" dir=\"").concat(textDirection, "\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width,minimum-scale=1,initial-scale=1\"\n    />\n    <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\" />\n    <style>\n      html {\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n      }\n\n      html::-webkit-scrollbar {\n        display: none;\n      }\n\n      body {\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div data-container-id=\"").concat(id, "\"></div>\n\n    <script src=\"").concat(constants/* ADNETIFY_SCRIPT */.Dy, "\" async=\"true\"></script>\n    <script>\n      function startApp() {\n        const sendPostMessage = (method, args) => {\n          const message = {\n            source: \"registry-adnetify\",\n            payload: {\n              event: \"adnetify-logger\",\n              data: {\n                method,\n                args,\n              }\n            }\n          }\n          window.parent.postMessage(message, \"*\")\n        }\n        const logger = {\n          log: (...args) => sendPostMessage(\"log\", args),\n          info: (...args) => sendPostMessage(\"info\", args),\n          warn: (...args) => sendPostMessage(\"warn\", args),\n          error: (...args) => sendPostMessage(\"error\", args),\n          debug: (...args) => sendPostMessage(\"debug\", args),\n        };\n        const config = {\n          apiService: async (request) => ({\n            \"").concat(id, "\": {\n              iframeUrl: \"").concat(url, "\",\n              layout: [],\n              emContext: ").concat(cleanScript(JSON.stringify(payload.context || {})), ",\n              payload: ").concat(cleanScript(JSON.stringify(payload)), ",\n            }\n          }),\n          logger,\n        };\n\n        if (\n          window.EM &&\n          window.EM.registry.adnetify &&\n          window.EM.registry.adnetify\n        ) {\n          window.EM.registry.adnetify(config);\n        }\n      }\n\n      window.addEventListener(\"load\", startApp, false);\n    </script>\n  </body>\n</html>");
});
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/data/basic-page-template.js


/* harmony default export */ const basic_page_template = (function (_ref) {
  var id = _ref.id,
    url = _ref.url,
    payload = _ref.payload,
    _ref$textDirection = _ref.textDirection,
    textDirection = _ref$textDirection === void 0 ? "ltr" : _ref$textDirection,
    _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? "en" : _ref$lang;
  return "\n<!DOCTYPE html>\n<html lang=\"".concat(lang, "\" dir=\"").concat(textDirection, "\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width,minimum-scale=1,initial-scale=1\"\n    />\n    <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\" />\n    <style>\n      html {\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n      }\n\n      html::-webkit-scrollbar {\n        display: none;\n      }\n\n      body {\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n    <style>\n      body {\n        font-family: serif;\n        font-size: 18px;\n        letter-spacing: 1px;\n      }\n      .container {\n        margin: auto;\n        max-width: 1024px;\n        padding: 15px;\n      }\n      h1 {\n        margin-top: 0;\n      }\n      p {\n        line-height: 1.5;\n        margin-bottom: 20px;\n        text-align: justify;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"container\">\n      <h1>Sample page</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum libero,\n        fringilla eu ante a, auctor mollis ligula. Donec venenatis lacinia metus,\n        vitae vulputate ante pellentesque at. Proin eu condimentum elit. Etiam\n        placerat euismod erat sed hendrerit. Nunc mattis lacinia mauris id cursus.\n        Aenean dolor diam, volutpat vitae metus eu, euismod ullamcorper lorem. In\n        scelerisque sodales felis non blandit.\n      </p>\n\n      <div data-container-id=\"").concat(id, "\"></div>\n\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n      <p>\n        Duis posuere ullamcorper leo. Nunc maximus mi dolor, vitae viverra orci\n        vestibulum ut. Morbi a enim ipsum. Etiam sagittis ex vel nunc euismod\n        mattis. Pellentesque habitant morbi tristique senectus et netus et\n        malesuada fames ac turpis egestas. Etiam at mi quis ex bibendum ornare sit\n        amet et tortor. Aliquam erat volutpat. Nullam malesuada accumsan velit sed\n        ultrices.\n      </p>\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n    </div>\n\n    <script src=\"").concat(constants/* ADNETIFY_SCRIPT */.Dy, "\" async=\"true\"></script>\n    <script>\n      function startApp() {\n        const sendPostMessage = (method, args) => {\n          const message = {\n            source: \"registry-adnetify\",\n            payload: {\n              event: \"adnetify-logger\",\n              data: {\n                method,\n                args,\n              }\n            }\n          }\n          window.parent.postMessage(message, \"*\")\n        }\n        const logger = {\n          log: (...args) => sendPostMessage(\"log\", args),\n          info: (...args) => sendPostMessage(\"info\", args),\n          warn: (...args) => sendPostMessage(\"warn\", args),\n          error: (...args) => sendPostMessage(\"error\", args),\n          debug: (...args) => sendPostMessage(\"debug\", args),\n        };\n        const config = {\n          apiService: async (request) => ({\n            \"").concat(id, "\": {\n              iframeUrl: \"").concat(url, "\",\n              layout: [],\n              emContext: ").concat(cleanScript(JSON.stringify(payload.context || {})), ",\n              payload: ").concat(cleanScript(JSON.stringify(payload)), ",\n            }\n          }),\n          logger,\n        };\n\n        if (\n          window.EM &&\n          window.EM.registry.adnetify &&\n          window.EM.registry.adnetify\n        ) {\n          window.EM.registry.adnetify(config);\n        }\n      }\n\n      window.addEventListener(\"load\", startApp, false);\n    </script>\n  </body>\n</html>");
});
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/data/below-the-fold-page-template.js


/* harmony default export */ const below_the_fold_page_template = (function (_ref) {
  var id = _ref.id,
    url = _ref.url,
    payload = _ref.payload,
    _ref$textDirection = _ref.textDirection,
    textDirection = _ref$textDirection === void 0 ? "ltr" : _ref$textDirection,
    _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? "en" : _ref$lang;
  return "\n<!DOCTYPE html>\n<html lang=\"".concat(lang, "\" dir=\"").concat(textDirection, "\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width,minimum-scale=1,initial-scale=1\"\n    />\n    <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\" />\n    <style>\n      html {\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n      }\n\n      html::-webkit-scrollbar {\n        display: none;\n      }\n\n      body {\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n    <style>\n      body {\n        font-family: serif;\n        font-size: 18px;\n        letter-spacing: 1px;\n      }\n      .container {\n        margin: auto;\n        max-width: 1024px;\n        padding: 15px;\n      }\n      h1 {\n        margin-top: 0;\n      }\n      p {\n        line-height: 1.5;\n        margin-bottom: 20px;\n        text-align: justify;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"container\">\n      <h1>Below the fold page</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum libero,\n        fringilla eu ante a, auctor mollis ligula. Donec venenatis lacinia metus,\n        vitae vulputate ante pellentesque at. Proin eu condimentum elit. Etiam\n        placerat euismod erat sed hendrerit. Nunc mattis lacinia mauris id cursus.\n        Aenean dolor diam, volutpat vitae metus eu, euismod ullamcorper lorem. In\n        scelerisque sodales felis non blandit.\n      </p>\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n      <p>\n        Duis posuere ullamcorper leo. Nunc maximus mi dolor, vitae viverra orci\n        vestibulum ut. Morbi a enim ipsum. Etiam sagittis ex vel nunc euismod\n        mattis. Pellentesque habitant morbi tristique senectus et netus et\n        malesuada fames ac turpis egestas. Etiam at mi quis ex bibendum ornare sit\n        amet et tortor. Aliquam erat volutpat. Nullam malesuada accumsan velit sed\n        ultrices.\n      </p>\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n      <p>\n        Donec maximus eu velit quis ullamcorper. Nunc id nulla eget sapien ultricies convallis. Ut sed dolor sit amet sapien aliquam molestie vel sed orci. Suspendisse dictum tempus elementum. Pellentesque molestie sem sed massa accumsan semper. Mauris ullamcorper metus vel massa efficitur vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec est ex, blandit a nunc vitae, facilisis iaculis justo. Sed eu lectus iaculis, fermentum massa at, pretium sem. Quisque at metus ut eros suscipit faucibus. In gravida, ex a lacinia posuere, ipsum est tempor ipsum, non dignissim est nisi sed augue. In porttitor venenatis libero sed scelerisque. Sed auctor, neque ut aliquam efficitur, purus neque faucibus elit, eget consectetur massa orci id nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam feugiat vel tortor pellentesque varius. Fusce nec tincidunt nisl.\n      </p>\n      <p>\n        In luctus ligula elementum, malesuada lectus in, dictum magna. Quisque molestie sodales tempus. Nam lacinia arcu id magna posuere blandit quis et leo. Mauris tempus nulla in varius interdum. Pellentesque nec magna diam. Quisque nec massa quis lorem aliquam ultricies. Pellentesque iaculis porttitor nulla, ac auctor odio finibus at. Sed venenatis lobortis diam, vel faucibus ligula mattis et.\n      </p>\n\n      <p>\n        Quisque cursus nisi vel luctus pharetra. Praesent a fringilla diam. Nulla nec dui ac lacus porta luctus. Curabitur diam felis, condimentum ornare eros non, interdum ultrices elit. Sed eget pellentesque eros. In hac habitasse platea dictumst. Morbi rhoncus est quis rutrum dapibus. Quisque lobortis pretium lorem sed aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis, metus sed mattis consectetur, mauris turpis mattis ipsum, tincidunt porta erat tortor vitae tellus. Mauris facilisis felis eu enim congue molestie. Fusce mattis eget augue et dapibus. Morbi gravida in mi et suscipit. Etiam tempor quam eros, vitae commodo diam dapibus ac. Pellentesque ac enim in felis varius sollicitudin.\n      </p>\n\n      <div data-container-id=\"").concat(id, "\"></div>\n\n      \n    </div>\n\n    <script src=\"").concat(constants/* ADNETIFY_SCRIPT */.Dy, "\" async=\"true\"></script>\n    <script>\n      function startApp() {\n        const sendPostMessage = (method, args) => {\n          const message = {\n            source: \"registry-adnetify\",\n            payload: {\n              event: \"adnetify-logger\",\n              data: {\n                method,\n                args,\n              }\n            }\n          }\n          window.parent.postMessage(message, \"*\")\n        }\n        const logger = {\n          log: (...args) => sendPostMessage(\"log\", args),\n          info: (...args) => sendPostMessage(\"info\", args),\n          warn: (...args) => sendPostMessage(\"warn\", args),\n          error: (...args) => sendPostMessage(\"error\", args),\n          debug: (...args) => sendPostMessage(\"debug\", args),\n        };\n        const config = {\n          apiService: async (request) => ({\n            \"").concat(id, "\": {\n              iframeUrl: \"").concat(url, "\",\n              layout: [],\n              emContext: ").concat(cleanScript(JSON.stringify(payload.context || {})), ",\n              payload: ").concat(cleanScript(JSON.stringify(payload)), ",\n            }\n          }),\n          logger,\n        };\n\n        if (\n          window.EM &&\n          window.EM.registry.adnetify &&\n          window.EM.registry.adnetify\n        ) {\n          window.EM.registry.adnetify(config);\n        }\n      }\n\n      window.addEventListener(\"load\", startApp, false);\n    </script>\n  </body>\n</html>");
});
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/data/test-module-template.js


/* harmony default export */ const test_module_template = (function (_ref) {
  var id = _ref.id,
    url = _ref.url,
    payload = _ref.payload,
    _ref$textDirection = _ref.textDirection,
    textDirection = _ref$textDirection === void 0 ? "ltr" : _ref$textDirection,
    _ref$lang = _ref.lang,
    lang = _ref$lang === void 0 ? "en" : _ref$lang;
  return "\n<!DOCTYPE html>\n<html lang=\"".concat(lang, "\" dir=\"").concat(textDirection, "\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width,minimum-scale=1,initial-scale=1\"\n    />\n    <link rel=\"icon\" href=\"data:;base64,iVBORw0KGgo=\" />\n    <style>\n      html {\n        -ms-overflow-style: none;\n        scrollbar-width: none;\n      }\n\n      html::-webkit-scrollbar {\n        display: none;\n      }\n\n      body {\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n    <style>\n      body {\n        font-family: serif;\n        font-size: 18px;\n        letter-spacing: 1px;\n      }\n      .container {\n        margin: auto;\n        max-width: 1024px;\n        padding: 15px;\n      }\n      h1 {\n        margin-top: 0;\n      }\n      p {\n        line-height: 1.5;\n        margin-bottom: 20px;\n        text-align: justify;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"container\">\n      <h1>Test module page</h1>\n      <button onClick=\"this.disabled=true;startApp()\">Click to load the module</button>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum libero,\n        fringilla eu ante a, auctor mollis ligula. Donec venenatis lacinia metus,\n        vitae vulputate ante pellentesque at. Proin eu condimentum elit. Etiam\n        placerat euismod erat sed hendrerit. Nunc mattis lacinia mauris id cursus.\n        Aenean dolor diam, volutpat vitae metus eu, euismod ullamcorper lorem. In\n        scelerisque sodales felis non blandit.\n      </p>\n\n      <div data-container-id=\"").concat(id, "\"></div>\n\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n      <p>\n        Duis posuere ullamcorper leo. Nunc maximus mi dolor, vitae viverra orci\n        vestibulum ut. Morbi a enim ipsum. Etiam sagittis ex vel nunc euismod\n        mattis. Pellentesque habitant morbi tristique senectus et netus et\n        malesuada fames ac turpis egestas. Etiam at mi quis ex bibendum ornare sit\n        amet et tortor. Aliquam erat volutpat. Nullam malesuada accumsan velit sed\n        ultrices.\n      </p>\n      <p>\n        Sed a tortor sit amet erat elementum varius. Nulla facilisi. Suspendisse\n        lectus massa, molestie sed pellentesque in, rhoncus et justo. Vestibulum\n        consequat ex mauris, et rutrum neque rutrum ac. Interdum et malesuada\n        fames ac ante ipsum primis in faucibus. Aenean quis dui suscipit, commodo\n        tortor id, placerat felis. Donec aliquet leo sit amet laoreet sodales. Ut\n        non viverra neque. In efficitur nulla sit amet ante dictum fringilla.\n        Etiam ac porttitor nisi, a egestas nunc.\n      </p>\n\n    </div>\n\n    <script src=\"").concat(constants/* ADNETIFY_SCRIPT */.Dy, "\" async=\"true\"></script>\n    <script>\n      function startApp() {\n        const sendPostMessage = (method, args) => {\n          const message = {\n            source: \"registry-adnetify\",\n            payload: {\n              event: \"adnetify-logger\",\n              data: {\n                method,\n                args,\n              }\n            }\n          }\n          window.parent.postMessage(message, \"*\")\n        }\n        const logger = {\n          log: (...args) => sendPostMessage(\"log\", args),\n          info: (...args) => sendPostMessage(\"info\", args),\n          warn: (...args) => sendPostMessage(\"warn\", args),\n          error: (...args) => sendPostMessage(\"error\", args),\n          debug: (...args) => sendPostMessage(\"debug\", args),\n        };\n        const config = {\n          apiService: async (request) => ({\n            \"").concat(id, "\": {\n              iframeUrl: \"").concat(url, "\",\n              layout: [],\n              emContext: ").concat(cleanScript(JSON.stringify(payload.context || {})), ",\n              payload: ").concat(cleanScript(JSON.stringify(payload)), ",\n            }\n          }),\n          logger,\n        };\n\n        if (\n          window.EM &&\n          window.EM.registry.adnetify &&\n          window.EM.registry.adnetify\n        ) {\n          window.EM.registry.adnetify(config);\n        }\n      }\n\n      // window.addEventListener(\"load\", startApp, false);\n    </script>\n  </body>\n</html>");
});
;// CONCATENATED MODULE: ./src/components/Adnetify/templates/index.js




var TEMPLATES = {
  blank: blank_template,
  basicPage: basic_page_template,
  belowTheFoldPage: below_the_fold_page_template,
  testModulePage: test_module_template
};
/* harmony default export */ const templates = ((/* unused pure expression or super */ null && (TEMPLATES)));
var getTemplateFn = function getTemplateFn(name) {
  return name && typeof TEMPLATES[name] !== "undefined" ? TEMPLATES[name] : TEMPLATES.blank;
};
;// CONCATENATED MODULE: ./src/components/Adnetify/Adnetify.jsx




var HAS_ERROR_SELECTOR = function HAS_ERROR_SELECTOR(state) {
  return state.hasError;
};
var MODEL_URL_SELECTOR = function MODEL_URL_SELECTOR(state) {
  return state.model.url;
};
var MODULE_PAYLOAD_SELECTOR = function MODULE_PAYLOAD_SELECTOR(state) {
  return state.module.payload;
};
var TEMPLATE_SELECTOR = function TEMPLATE_SELECTOR(state) {
  return state.options.template;
};
var ADD_LOG_SELECTOR = function ADD_LOG_SELECTOR(state) {
  return state.addLog;
};
var Adnetify = function Adnetify(_ref) {
  var id = _ref.id;
  var hasError = (0,Store/* useStore */.P)(HAS_ERROR_SELECTOR);
  var url = (0,Store/* useStore */.P)(MODEL_URL_SELECTOR);
  var payload = (0,Store/* useStore */.P)(MODULE_PAYLOAD_SELECTOR);
  var _useState = (0,compat_module.useState)(null),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    iframeURL = _useState2[0],
    setIframeURL = _useState2[1];
  var addLog = (0,Store/* useStore */.P)(ADD_LOG_SELECTOR);
  var template = (0,Store/* useStore */.P)(TEMPLATE_SELECTOR);
  var templateFn = getTemplateFn(template);
  var handlePostMessage = function handlePostMessage(e) {
    if (window.location.origin !== (e === null || e === void 0 ? void 0 : e.origin)) {
      return;
    }
    var message = e === null || e === void 0 ? void 0 : e.data;
    if (!message || !(message !== null && message !== void 0 && message.source) || (message === null || message === void 0 ? void 0 : message.source) !== "registry-adnetify") {
      return;
    }
    var payload = (message === null || message === void 0 ? void 0 : message.payload) || {};
    var event = payload === null || payload === void 0 ? void 0 : payload.event;
    if (event === "adnetify-logger") {
      var _ref2 = (payload === null || payload === void 0 ? void 0 : payload.data) || {},
        args = _ref2.args,
        _ref2$method = _ref2.method,
        method = _ref2$method === void 0 ? "log" : _ref2$method;
      if (args) {
        addLog(args, method || "log");
      }
    }
  };
  (0,compat_module.useEffect)(function () {
    window.addEventListener("message", handlePostMessage);
    return function () {
      return window.removeEventListener("message", handlePostMessage);
    };
  }, []);
  (0,compat_module.useEffect)(function () {
    if (hasError) {
      setIframeURL(url);
    } else {
      var _payload$context, _payload$context2;
      var textDirection = payload !== null && payload !== void 0 && (_payload$context = payload.context) !== null && _payload$context !== void 0 && (_payload$context = _payload$context.geo) !== null && _payload$context !== void 0 && (_payload$context = _payload$context.language) !== null && _payload$context !== void 0 && _payload$context.textDirection ? payload.context.geo.language.textDirection.toLowerCase() : "ltr";
      var lang = payload !== null && payload !== void 0 && (_payload$context2 = payload.context) !== null && _payload$context2 !== void 0 && (_payload$context2 = _payload$context2.geo) !== null && _payload$context2 !== void 0 && (_payload$context2 = _payload$context2.language) !== null && _payload$context2 !== void 0 && _payload$context2.lang ? payload.context.geo.language.lang.toLowerCase() : "en";
      var code = templateFn({
        id: id,
        url: url,
        payload: payload,
        textDirection: textDirection,
        lang: lang
      });
      var blob = new Blob([code], {
        type: "text/html"
      });
      setIframeURL(URL.createObjectURL(blob));
    }
  }, [id, url, payload, setIframeURL, hasError]);
  return iframeURL && /*#__PURE__*/compat_module["default"].createElement("iframe", {
    key: id,
    sandbox: "allow-scripts allow-top-navigation allow-forms allow-same-origin",
    src: iframeURL,
    style: {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      border: "none",
      boxSizing: "border-box",
      overflow: "hidden auto"
    }
  });
};
/* harmony default export */ const Adnetify_Adnetify = (Adnetify);
;// CONCATENATED MODULE: ./src/components/Adnetify/index.js



/***/ })

}]);