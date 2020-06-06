"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*****************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/main.js?{"type":"appStyle"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!********************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/main.js?{"page":"pages%2Fchunlei-video-nvue%2Fchunlei-video-nvue"} ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_chunlei_video_nvue_chunlei_video_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/chunlei-video-nvue/chunlei-video-nvue.nvue?mpType=page */ 22);\n\n        \n        \n        \n        _pages_chunlei_video_nvue_chunlei_video_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_chunlei_video_nvue_chunlei_video_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/chunlei-video-nvue/chunlei-video-nvue'\n        _pages_chunlei_video_nvue_chunlei_video_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_chunlei_video_nvue_chunlei_video_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXdGO0FBQ3hGLFFBQVEscUdBQUc7QUFDWCxRQUFRLHFHQUFHO0FBQ1gsUUFBUSxxR0FBRztBQUNYLGdCQUFnQixxR0FBRyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvY2h1bmxlaS12aWRlby1udnVlL2NodW5sZWktdmlkZW8tbnZ1ZS5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jaHVubGVpLXZpZGVvLW52dWUvY2h1bmxlaS12aWRlby1udnVlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video-nvue.nvue?vue&type=template&id=4c8ebc80&mpType=page */ 23);\n/* harmony import */ var _chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video-nvue.nvue?vue&type=script&lang=js&mpType=page */ 55);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2dbb6a08\",\n  false,\n  _chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDa0Y7QUFDTDtBQUM3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsb0dBQU07QUFDUixFQUFFLHlHQUFNO0FBQ1IsRUFBRSxrSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2R0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLW52dWUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YzhlYmM4MCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby1udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2h1bmxlaS12aWRlby1udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIyZGJiNmEwOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJldGhhbi9kZW1vL0FwcC9XZWJWaWV3RGVtby9wYWdlcy9jaHVubGVpLXZpZGVvLW52dWUvY2h1bmxlaS12aWRlby1udnVlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue?vue&type=template&id=4c8ebc80&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video-nvue.nvue?vue&type=template&id=4c8ebc80&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_template_id_4c8ebc80_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue?vue&type=template&id=4c8ebc80&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  chunleiVideo: __webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 25).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["content"] },
    [
      _c("view", {
        staticClass: ["statusBar"],
        style: {
          height: _vm.statusBarHeight + "px",
          width: _vm.windowWidth + "px",
          backgroundColor: "#ff706f"
        }
      }),
      _c("chunlei-video", {
        ref: "video",
        style: {
          height: _vm.windowHeight - _vm.statusBarHeight + 4 + "px",
          width: _vm.windowWidth + "px"
        },
        attrs: {
          autoplay: true,
          orientation: true,
          color: "#ff706f",
          title: _vm.video.title,
          srcList: _vm.video.src,
          isWideScreen: _vm.video.isWideScreen,
          deviceWidth: _vm.windowWidth,
          gDuration: _vm.video.duartion,
          deviceHeight: _vm.windowHeight - 30,
          initialTime: _vm.initialTime
        },
        on: { fullscreenchange: _vm.fullscreenchange, back: _vm.back }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*********************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=91143d40&scoped=true& */ 26);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=91143d40&scoped=true&lang=scss& */ 53).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=91143d40&scoped=true&lang=scss& */ 53).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"91143d40\",\n  \"b0eca644\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkxMTQzZDQwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05MTE0M2Q0MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkxMTQzZDQwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MTE0M2Q0MFwiLFxuICBcImIwZWNhNjQ0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImV0aGFuL2RlbW8vQXBwL1dlYlZpZXdEZW1vL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!****************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=91143d40&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=91143d40&scoped=true& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_91143d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=91143d40&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video-box"] },
    [
      _c(
        "u-video",
        {
          ref: "chunleiVideo",
          staticClass: ["video"],
          attrs: {
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            objectFit: _vm.objectFit,
            src: _vm.src,
            loop: _vm.loop,
            enableProgressGesture: false,
            id: "chunleiVideo"
          },
          on: {
            fullscreenchange: _vm.changeScreen,
            timeupdate: _vm.timeupdate,
            ended: _vm.ended,
            waiting: _vm.waiting,
            play: _vm.playing
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              !_vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["video-view"],
                      style: {
                        width: _vm.deviceWidth + "px",
                        height: _vm.deviceHeight + "px"
                      }
                    },
                    [
                      _c("div", {
                        staticClass: ["move-view"],
                        style: {
                          height: _vm.deviceHeight + "px",
                          width: _vm.deviceWidth + "px"
                        },
                        on: {
                          touchend: _vm.videoTouchEnd,
                          touchmove: _vm.videoTouchMove,
                          touchstart: _vm.videoTouchStart
                        }
                      }),
                      !_vm.play
                        ? _c("div", { staticClass: ["stop"] }, [
                            _c("u-text", { staticClass: ["ios-title"] }, [
                              _vm._v("已暂停")
                            ])
                          ])
                        : _vm._e(),
                      _vm.poster != "" && _vm.playFirst
                        ? _c("u-image", {
                            staticClass: ["video-view"],
                            style: {
                              width: _vm.deviceWidth + "rpx",
                              height: "200px"
                            },
                            attrs: { src: _vm.poster }
                          })
                        : _vm._e(),
                      !_vm.rateView
                        ? _c(
                            "div",
                            {
                              staticClass: ["rate-view"],
                              on: { click: function($event) {} }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["ios-title"],
                                  on: {
                                    click: function($event) {
                                      _vm.rateView = true
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.rate) + "x")]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.showControls
                        ? _c(
                            "div",
                            {
                              staticClass: ["controls-view-top"],
                              on: { click: function($event) {} }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["btnBox"],
                                  on: { click: _vm.back }
                                },
                                [
                                  _c("u-text", { staticClass: ["ios-icon"] }, [
                                    _vm._v("")
                                  ])
                                ]
                              ),
                              _c("u-text", { staticClass: ["top-title"] }, [
                                _vm._v(_vm._s(_vm.notWideScreenTitleSub))
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm.showControls
                        ? _c(
                            "div",
                            {
                              staticClass: ["controls-view"],
                              on: { click: function($event) {} }
                            },
                            [
                              _vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              !_vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _c("u-text", { staticClass: ["sm-title"] }, [
                                _vm._v(
                                  _vm._s(_vm.currentDuration) +
                                    "/" +
                                    _vm._s(_vm.lastDuration)
                                )
                              ]),
                              _c("chunLei-slider", {
                                style: { width: _vm.sliderWidth + "px" },
                                attrs: {
                                  max: _vm.duration,
                                  value: _vm.current,
                                  screenLeft: _vm.duration >= 3600 ? 150 : 120,
                                  width: _vm.sliderWidth,
                                  backgroundColor: _vm.color,
                                  blockColor: _vm.color
                                },
                                on: { change: _vm.changeCurrent }
                              }),
                              _vm.showFullscreenBtn
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.tapFullScreen }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { staticClass: ["ios-icon"] },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm.initialTime != 0 && _vm.remeber && _vm.play
                        ? _c(
                            "div",
                            {
                              staticClass: ["remember-view"],
                              on: { click: function($event) {} }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["btnbox"],
                                  on: {
                                    click: function($event) {
                                      _vm.remeber = !_vm.remeber
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["ios-icon", "marginright"]
                                    },
                                    [_vm._v("")]
                                  )
                                ]
                              ),
                              _c(
                                "u-text",
                                { staticClass: ["sm-title", "marginright"] },
                                [_vm._v("跳转至播放记忆")]
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: ["btnbox"],
                                  on: { click: _vm.tapRemeber }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["sm-title"],
                                      style: { color: _vm.color }
                                    },
                                    [_vm._v(_vm._s(_vm.rememberCurrent))]
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.touchType == "current"
                        ? _c("div", { staticClass: ["current-view", "flex"] }, [
                            _c("div", { staticClass: ["current-top"] }, [
                              _c("u-text", { staticClass: ["ios-title"] }, [
                                _vm._v(
                                  _vm._s(_vm.touchCurrentDuration) +
                                    "/" +
                                    _vm._s(_vm.lastDuration)
                                )
                              ])
                            ]),
                            _c("div", { staticClass: ["current-bottom"] }, [
                              _c("div", {
                                staticClass: ["current-progress"],
                                style: {
                                  width:
                                    (_vm.touchCurrent / _vm.duration) * 260 +
                                    "rpx"
                                }
                              })
                            ])
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm.rateView && !_vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["rate", "flex"],
                      on: { click: function($event) {} }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: ["rate", "flex"],
                          style: { paddingTop: "40px" },
                          on: {
                            click: function($event) {
                              _vm.rateView = false
                            }
                          }
                        },
                        [
                          _c("u-text", { staticClass: ["ios-title"] }, [
                            _vm._v("倍速播放")
                          ]),
                          _c("div", { staticClass: ["rate-list", "flex"] }, [
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 0.5 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 0.5 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    0.5 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 0.5)
                                  }
                                }
                              },
                              [_vm._v("0.5x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 0.8 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 0.8 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    0.8 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 0.8)
                                  }
                                }
                              },
                              [_vm._v("0.8x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.0 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.0 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.0 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.0)
                                  }
                                }
                              },
                              [_vm._v("1.0x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.25 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.25 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.25 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.25)
                                  }
                                }
                              },
                              [_vm._v("1.25x")]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["ios-title", "marginRight"],
                                class: 1.5 == _vm.rate ? "solid-bottom" : "",
                                style: {
                                  color: 1.5 == _vm.rate ? _vm.color : "#fff",
                                  borderBottomColor:
                                    1.5 == _vm.rate ? _vm.color : "#fff"
                                },
                                on: {
                                  click: function(args) {
                                    return _vm.tapRate(args, 1.5)
                                  }
                                }
                              },
                              [_vm._v("1.5x")]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["video-view"],
                      style: {
                        width: _vm.fullControlsWidth + "px",
                        height:
                          (_vm.isWideScreen
                            ? _vm.fullControlsHeigt
                            : _vm.isWideFullControlsHeight) + "px"
                      }
                    },
                    [
                      _vm.danmuView
                        ? _c(
                            "div",
                            {
                              staticClass: ["danmu-view"],
                              style: { width: _vm.fullControlsWidth + "px" }
                            },
                            [
                              _c("chunLei-danmu", {
                                ref: "danmu",
                                attrs: {
                                  danmuList: _vm.danmuList,
                                  width: _vm.fullControlsWidth,
                                  platform: _vm.platform,
                                  current: _vm.current
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _c("div", {
                        staticClass: ["move-view"],
                        style: {
                          width: _vm.fullControlsWidth + "px",
                          height:
                            (_vm.isWideScreen
                              ? _vm.fullControlsHeigt
                              : _vm.isWideFullControlsHeight) + "px"
                        },
                        on: {
                          touchend: _vm.videoTouchEnd,
                          touchmove: _vm.videoTouchMove,
                          touchstart: _vm.videoTouchStart
                        }
                      }),
                      !_vm.play
                        ? _c("div", { staticClass: ["stop"] }, [
                            _c("u-text", { class: _vm.platform + "-title" }, [
                              _vm._v("已暂停")
                            ])
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls && !_vm.lock
                ? _c(
                    "cover-view",
                    {
                      ref: "controlsTop",
                      staticClass: ["controls-top"],
                      style: { width: _vm.fullControlsWidth + "px" },
                      on: { click: function($event) {} }
                    },
                    [
                      _c("div", { staticClass: ["top-left"] }, [
                        _c(
                          "div",
                          {
                            staticClass: ["btnBox"],
                            on: { click: _vm.tapFullScreen }
                          },
                          [
                            _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          ]
                        ),
                        _c("u-text", { class: _vm.platform + "-title" }, [
                          _vm._v(_vm._s(_vm.titleSub))
                        ])
                      ]),
                      _c("div", { staticClass: ["top-right"] }, [
                        _vm.danmuView && _vm.danmuList.length != 0
                          ? _c(
                              "div",
                              {
                                staticClass: ["btnBox"],
                                on: {
                                  click: function($event) {
                                    _vm.danmuView = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "u-text",
                                  {
                                    class: _vm.platform + "-icon",
                                    style: { color: _vm.color }
                                  },
                                  [_vm._v("")]
                                )
                              ]
                            )
                          : _vm._e(),
                        !_vm.danmuView && _vm.danmuList.length != 0
                          ? _c(
                              "div",
                              {
                                staticClass: ["btnBox"],
                                on: {
                                  click: function($event) {
                                    _vm.danmuView = true
                                  }
                                }
                              },
                              [
                                _c(
                                  "u-text",
                                  {
                                    class: _vm.platform + "-icon",
                                    staticStyle: { color: "#FFF" }
                                  },
                                  [_vm._v("")]
                                )
                              ]
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: ["btnBox", "marginRight"],
                            on: { click: _vm.clickMoreView }
                          },
                          [
                            _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          ]
                        ),
                        _c("div", { staticClass: ["power-view"] }, [
                          _c("div", { staticClass: ["power-box"] }, [
                            _c("div", { staticClass: ["power-header"] }),
                            _c("div", { staticClass: ["power-body"] }, [
                              _c("div", {
                                staticClass: ["power-level"],
                                style: {
                                  width: 16 * _vm.level + "px",
                                  backgroundColor: "#fff"
                                }
                              })
                            ])
                          ]),
                          _c("u-text", { class: _vm.platform + "-sm-title" }, [
                            _vm._v(_vm._s(_vm.nowTime))
                          ])
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              (_vm.rateView || _vm.srcView || _vm.moreView || _vm.episodeView)
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["set-view"],
                      style: {
                        width: _vm.fullControlsWidth + "px",
                        height:
                          (_vm.isWideScreen
                            ? _vm.fullControlsHeigt
                            : _vm.isWideFullControlsHeight) + "px"
                      }
                    },
                    [
                      _vm.rateView
                        ? _c(
                            "div",
                            {
                              class: _vm.isWideScreen
                                ? "rate-set"
                                : "wide-screen-rate-set",
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height:
                                  (_vm.isWideScreen
                                    ? _vm.fullControlsHeigt
                                    : _vm.isWideFullControlsHeight) + "px"
                              },
                              on: { click: _vm.clickRateView }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  class: _vm.platform + "-big-title",
                                  style: { marginBottom: "40px" }
                                },
                                [_vm._v("播放速度")]
                              ),
                              _c("div", { staticClass: ["set-bottom"] }, [
                                _c(
                                  "div",
                                  {
                                    class: [
                                      0.5 == _vm.rate ? "solid-bottom" : "",
                                      _vm.isWideScreen
                                        ? "setBox"
                                        : "width-screen-set-box"
                                    ],
                                    style: {
                                      borderBottomColor:
                                        0.5 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 0.5)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            0.5 == _vm.rate
                                              ? _vm.color
                                              : "#fff",
                                          fontSize: _vm.isWideScreen
                                            ? ""
                                            : "14px"
                                        }
                                      },
                                      [_vm._v("0.5x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    class: [
                                      0.8 == _vm.rate ? "solid-bottom" : "",
                                      _vm.isWideScreen
                                        ? "setBox"
                                        : "width-screen-set-box"
                                    ],
                                    style: {
                                      borderBottomColor:
                                        0.8 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 0.8)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            0.8 == _vm.rate
                                              ? _vm.color
                                              : "#fff",
                                          fontSize: _vm.isWideScreen
                                            ? ""
                                            : "14px"
                                        }
                                      },
                                      [_vm._v("0.8x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    class: [
                                      1.0 == _vm.rate ? "solid-bottom" : "",
                                      _vm.isWideScreen
                                        ? "setBox"
                                        : "width-screen-set-box"
                                    ],
                                    style: {
                                      borderBottomColor:
                                        1.0 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.0 == _vm.rate
                                              ? _vm.color
                                              : "#fff",
                                          fontSize: _vm.isWideScreen
                                            ? ""
                                            : "14px"
                                        }
                                      },
                                      [_vm._v("1.0x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    class: [
                                      1.25 == _vm.rate ? "solid-bottom" : "",
                                      _vm.isWideScreen
                                        ? "setBox"
                                        : "width-screen-set-box"
                                    ],
                                    style: {
                                      borderBottomColor:
                                        1.25 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1.25)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.25 == _vm.rate
                                              ? _vm.color
                                              : "#fff",
                                          fontSize: _vm.isWideScreen
                                            ? ""
                                            : "14px"
                                        }
                                      },
                                      [_vm._v("1.25x")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    class: [
                                      1.5 == _vm.rate ? "solid-bottom" : "",
                                      _vm.isWideScreen
                                        ? "setBox"
                                        : "width-screen-set-box"
                                    ],
                                    style: {
                                      borderBottomColor:
                                        1.5 == _vm.rate ? _vm.color : "#fff"
                                    },
                                    on: {
                                      click: function(args) {
                                        return _vm.tapRate(args, 1.5)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        class: _vm.platform + "-big-title",
                                        style: {
                                          color:
                                            1.5 == _vm.rate
                                              ? _vm.color
                                              : "#fff",
                                          fontSize: _vm.isWideScreen
                                            ? ""
                                            : "14px"
                                        }
                                      },
                                      [_vm._v("1.5x")]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm.srcView
                        ? _c(
                            "div",
                            {
                              staticClass: ["rate-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height:
                                  (_vm.isWideScreen
                                    ? _vm.fullControlsHeigt
                                    : _vm.isWideFullControlsHeight) + "px"
                              },
                              on: { click: _vm.clickSrcView }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  class: _vm.platform + "-big-title",
                                  style: { marginBottom: "40px" }
                                },
                                [_vm._v(_vm._s(_vm.srcTitle))]
                              ),
                              _c(
                                "div",
                                { staticClass: ["set-bottom"] },
                                _vm._l(_vm.srcList, function(item, index) {
                                  return _c(
                                    "div",
                                    {
                                      key: index,
                                      staticClass: ["setBox"],
                                      class:
                                        _vm.srcTitle == item.title
                                          ? "solid-bottom"
                                          : "",
                                      style: {
                                        borderBottomColor:
                                          _vm.srcTitle == item.title
                                            ? _vm.color
                                            : "#fff"
                                      },
                                      on: {
                                        click: function(args) {
                                          return _vm.tapSrc(args, item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class: _vm.platform + "-big-title",
                                          style: {
                                            color:
                                              _vm.srcTitle == item.title
                                                ? _vm.color
                                                : "#fff"
                                          }
                                        },
                                        [_vm._v(_vm._s(item.title))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.moreView
                        ? _c(
                            "div",
                            {
                              class: _vm.isWideScreen
                                ? "more-set"
                                : "more-set-width-screen",
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height:
                                  (_vm.isWideScreen
                                    ? _vm.fullControlsHeigt
                                    : _vm.isWideFullControlsHeight) + "px"
                              },
                              on: { click: _vm.clickMoreView }
                            },
                            [
                              _c(
                                "div",
                                {
                                  class: _vm.isWideScreen
                                    ? "more-row"
                                    : "more-row-width-screen"
                                },
                                [
                                  !_vm.loop
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickLoop }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("循环播放")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm.loop
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickLoop }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("取消循环")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  !_vm.full
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickFull }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("撑满全屏")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm.full
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickFull }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("恢复不撑满")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  !_vm.audioFlag && _vm.audio != ""
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickAudio }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("后台音频播放")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm.audioFlag && _vm.audio != ""
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function($event) {
                                              _vm.audioFlag = false
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("后台音频播放")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  !_vm.download && _vm.downloadBtn
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickDownload }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              staticStyle: { color: "#FFF" }
                                            },
                                            [_vm._v("下载")]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm.download && _vm.downloadBtn
                                    ? _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: { click: _vm.clickDownload }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-big-icon",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("")]
                                          ),
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: { color: _vm.color }
                                            },
                                            [_vm._v("下载中")]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              ),
                              _c("div", { staticClass: ["more-tap"] }),
                              _c(
                                "div",
                                {
                                  class: _vm.isWideScreen
                                    ? "more-row"
                                    : "more-row-width-screen"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      class: _vm.isWideScreen
                                        ? "more-box"
                                        : "more-box-width-screen"
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-title" },
                                        [_vm._v("播放速度")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "scroll-view",
                                    {
                                      class: _vm.isWideScreen
                                        ? "scroll-view"
                                        : "scroll-view-wide-screen",
                                      style: {
                                        width:
                                          (_vm.isWideScreen
                                            ? _vm.fullControlsWidth - 320
                                            : _vm.fullControlsWidth) + "px"
                                      },
                                      attrs: {
                                        scrollX: "true",
                                        scrollLeft: 1.5 == _vm.rate ? 200 : 0
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 0.5)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                0.5 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  0.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  0.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("0.5x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 0.8)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                0.8 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  0.8 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  0.8 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("0.8x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.0 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.0 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.0 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.0x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1.25)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.25 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.25 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.25 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.25x")]
                                          )
                                        ]
                                      ),
                                      _c(
                                        "div",
                                        {
                                          class: _vm.isWideScreen
                                            ? "more-box"
                                            : "more-box-width-screen",
                                          on: {
                                            click: function(args) {
                                              return _vm.tapRate(args, 1.5)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "`${platform}-title`"
                                              ],
                                              class:
                                                1.5 == _vm.rate
                                                  ? "solid-bottom"
                                                  : "",
                                              style: {
                                                color:
                                                  1.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff",
                                                borderBottomColor:
                                                  1.5 == _vm.rate
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v("1.5x")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm.episodeView
                        ? _c(
                            "div",
                            {
                              staticClass: ["episode-set"],
                              style: {
                                width: _vm.fullControlsWidth + "px",
                                height:
                                  (_vm.isWideScreen
                                    ? _vm.fullControlsHeigt
                                    : _vm.isWideFullControlsHeight) + "px"
                              },
                              on: { click: _vm.clickEpisodeView }
                            },
                            [
                              _c(
                                "scroll-view",
                                {
                                  staticClass: ["scroll-view"],
                                  style: {
                                    width: _vm.fullControlsWidth - 200 + "px",
                                    height:
                                      (_vm.isWideScreen
                                        ? _vm.fullControlsHeigt
                                        : _vm.isWideFullControlsHeight - 40) +
                                      "px"
                                  },
                                  attrs: { scrollX: true }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: ["episode-scroll"],
                                      style: {
                                        height:
                                          (_vm.isWideScreen
                                            ? _vm.fullControlsHeigt
                                            : _vm.isWideFullControlsHeight -
                                              40) + "px",
                                        width: (75 * _vm.episode) / 4 + "px"
                                      }
                                    },
                                    _vm._l(_vm.episode, function(count) {
                                      return _c(
                                        "div",
                                        {
                                          key: count,
                                          staticClass: ["epiBox"],
                                          class:
                                            count == _vm.index
                                              ? "solid-bottom"
                                              : "",
                                          style: {
                                            borderBottomColor:
                                              count == _vm.index
                                                ? _vm.color
                                                : "#fff"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.clickEpisode(count)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class: _vm.platform + "-title",
                                              style: {
                                                color:
                                                  count == _vm.index
                                                    ? _vm.color
                                                    : "#fff"
                                              }
                                            },
                                            [_vm._v(_vm._s(count))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.touchType == "current"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-current"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("div", { staticClass: ["fullCurrent-top"] }, [
                        _c("u-text", { class: _vm.platform + "-title" }, [
                          _vm._v(
                            _vm._s(_vm.touchCurrentDuration) +
                              "/" +
                              _vm._s(_vm.lastDuration)
                          )
                        ])
                      ]),
                      _c("div", { staticClass: ["fullCurrent-bottom"] }, [
                        _c("div", {
                          staticClass: ["current-progress"],
                          style: {
                            width:
                              (_vm.touchCurrent / _vm.duration) * 110 + "px"
                          }
                        })
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              _vm.touchType == "volume" &&
              _vm.platform == "android"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-view"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("div", { staticClass: ["marginRight"] }, [
                        _vm.touchVolume == 0
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume > 0 && _vm.touchVolume < 0.33
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume >= 0.33 && _vm.touchVolume < 0.66
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e(),
                        _vm.touchVolume >= 0.66 && _vm.touchVolume <= 1
                          ? _c("u-text", { class: _vm.platform + "-icon" }, [
                              _vm._v("")
                            ])
                          : _vm._e()
                      ]),
                      _c("div", { staticClass: ["fullCurrent-volume"] }, [
                        _c("div", { staticClass: ["fullCurrent-volume-left"] }),
                        _c("div", {
                          staticClass: ["fullCurrent-volume-right"]
                        }),
                        _c("div", {
                          staticClass: ["fullCurrent-progress"],
                          style: { width: 151 - _vm.touchVolume * 150 + "px" }
                        })
                      ])
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen &&
              _vm.touchType == "bright" &&
              _vm.platform == "android"
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullCurrent-view"],
                      style: { left: _vm.fullControlsWidth / 2 - 75 + "px" }
                    },
                    [
                      _c("chunLei-moon", {
                        attrs: { percentage: _vm.touchBright }
                      }),
                      _c("div", { staticClass: ["fullCurrent-bright"] }, [
                        _c("div", { staticClass: ["fullCurrent-bright-left"] }),
                        _c("div", {
                          staticClass: ["fullCurrent-bright-right"]
                        }),
                        _c("div", {
                          staticClass: ["fullCurrent-progress"],
                          style: { width: 151 - _vm.touchBright * 150 + "px" }
                        })
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls && !_vm.lock
                ? _c(
                    "cover-view",
                    {
                      ref: "controlsBtm",
                      staticClass: ["fullControls-view"],
                      style: { width: _vm.fullControlsWidth + "px" },
                      on: { click: function($event) {} }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: ["fullControls-top"],
                          style: { width: _vm.fullControlsWidth + "px" }
                        },
                        [
                          _c("u-text", { class: _vm.platform + "-title" }, [
                            _vm._v(_vm._s(_vm.currentDuration))
                          ]),
                          _c("u-text", { class: _vm.platform + "-title" }, [
                            _vm._v(_vm._s(_vm.lastDuration))
                          ])
                        ]
                      ),
                      _c(
                        "div",
                        { staticClass: ["fullControls-center"] },
                        [
                          _c("chunLei-slider", {
                            style: { width: _vm.fullControlsWidth - 40 + "px" },
                            attrs: {
                              max: _vm.duration,
                              iosDirection:
                                _vm.platform != "ios" ? 1 : -_vm.direction / 90,
                              value: _vm.current,
                              screenLeft: 40,
                              width: _vm.fullControlsWidth - 40,
                              ratio: 1,
                              direction:
                                _vm.platform != "ios" ? "screenX" : "screenY",
                              backgroundColor: _vm.color,
                              blockColor: _vm.color
                            },
                            on: { change: _vm.changeCurrent }
                          })
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: ["fullControls-bottom"],
                          style: { width: _vm.fullControlsWidth + "px" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: ["fullControls-bottom-left"] },
                            [
                              _vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-icon" },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              !_vm.play
                                ? _c(
                                    "div",
                                    {
                                      staticClass: ["btnBox"],
                                      on: { click: _vm.videoPlay }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-icon" },
                                        [_vm._v("")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _c(
                            "div",
                            { staticClass: ["fullControls-bottom-right"] },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["marginRight"],
                                  on: { click: _vm.clickRateView }
                                },
                                [
                                  _c(
                                    "u-text",
                                    { class: _vm.platform + "-title" },
                                    [_vm._v(_vm._s(_vm.rate) + "x")]
                                  )
                                ]
                              ),
                              _vm.srcTitle != ""
                                ? _c("div", { staticClass: ["marginRight"] })
                                : _vm._e(),
                              _vm.srcTitle != ""
                                ? _c(
                                    "div",
                                    {
                                      class: _vm.platform + "-title-box",
                                      on: { click: _vm.clickSrcView }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        { class: _vm.platform + "-srcTitle" },
                                        [_vm._v(_vm._s(_vm.srcTitle))]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm.episode != 0
                                ? _c("div", { staticClass: ["marginRight"] })
                                : _vm._e(),
                              _vm.episode != 0
                                ? _c(
                                    "u-text",
                                    {
                                      class: _vm.platform + "-title",
                                      staticStyle: { marginLeft: "20rpx" },
                                      on: { click: _vm.clickEpisodeView }
                                    },
                                    [_vm._v("选集")]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.showControls
                ? _c(
                    "cover-view",
                    {
                      class: _vm.platform + "-lock",
                      style: { top: _vm.fullControlsHeigt / 2 - 30 + "px" },
                      on: { click: _vm.clickLock }
                    },
                    [
                      !_vm.lock
                        ? _c("u-text", { class: _vm.platform + "-icon" }, [
                            _vm._v("")
                          ])
                        : _vm._e(),
                      _vm.lock
                        ? _c("u-text", { class: _vm.platform + "-icon" }, [
                            _vm._v("")
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm.fullScreen && _vm.initialTime != 0 && _vm.remeber && _vm.play
                ? _c(
                    "cover-view",
                    {
                      staticClass: ["fullControls-remember"],
                      on: { click: _vm.clickLock }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: ["btnbox"],
                          on: {
                            click: function($event) {
                              _vm.remeber = !_vm.remeber
                            }
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["marginright"],
                              class: _vm.platform + "-icon"
                            },
                            [_vm._v("")]
                          )
                        ]
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["marginright"],
                          class: _vm.platform + "-title"
                        },
                        [_vm._v("跳转至播放记忆")]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: ["btnbox"],
                          on: { click: _vm.tapRemeber }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              class: _vm.platform + "-title",
                              style: { color: _vm.color }
                            },
                            [_vm._v(_vm._s(_vm.rememberCurrent))]
                          )
                        ]
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!**********************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 30));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 32));\n\nvar _chunLeiDanmu = _interopRequireDefault(__webpack_require__(/*! ./chunLei-danmu/chunLei-danmu.nvue */ 39));\n\nvar _chunLeiMoon = _interopRequireDefault(__webpack_require__(/*! ./chunLei-moon/chunLei-moon.nvue */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default2 =\n\n\n{\n  components: {\n    chunLeiSlider: _chunLeiSlider.default,\n    chunLeiMoon: _chunLeiMoon.default,\n\n    chunLeiDanmu: _chunLeiDanmu.default },\n\n\n  props: {\n    deviceWidth: {\n      type: Number,\n      default: 750 },\n\n    deviceHeight: {\n      type: Number,\n      default: 610 },\n\n    srcList: { //要播放视频的资源地址\n      type: [Array, String],\n      default: '' },\n\n    title: { //视频标题\n      type: String,\n      default: '' },\n\n    gDuration: { //大概总时长\n      type: Number,\n      default: 0 },\n\n    isWideScreen: { // 是否宽屏视频\n      type: Boolean,\n      default: true },\n\n    episode: { //集数\n      type: Number,\n      default: 0 },\n\n    currentSen: { //进度条灵敏度\n      type: Number,\n      default: 4 },\n\n    index: { //当前集数\n      type: Number,\n      default: 1 },\n\n    danmuList: { //弹幕\n      type: Array,\n      default: function _default() {return [];} },\n\n    initialTime: { //指定视频初始播放位置，单位为秒（s）。\n      type: Number,\n      default: 0 },\n\n    color: { //主题颜色\n      type: String,\n      default: '#ff706f' },\n\n    downloadBtn: { //下载按钮\n      type: Boolean,\n      default: false },\n\n    download: { //下载状态\n      type: Boolean,\n      default: false },\n\n    audio: { //音频\n      type: String,\n      default: '' },\n\n    orientation: { //全屏下屏幕旋转\n      type: Boolean,\n      default: false },\n\n    autoplay: { //自动播放\n      type: Boolean,\n      default: false },\n\n    showFullscreenBtn: { //是否显示全屏按钮\t\n      type: Boolean,\n      default: true },\n\n    poster: { //视频封面的图片\n      type: String,\n      default: '' },\n\n    isBack: { //小屏返回\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {\n      src: '',\n      srcTitle: '', //高清标签\n      duration: 0, //精确总时长\n      controls: false,\n      videoCtx: '', //视频上下文\n      current: 0, //video进度\n      play: false, //播放状态\n      loop: false, //循环\n      remeber: false, //播放记忆\n      fullScreen: false, //全屏状态\n      direction: -90, //全屏方向\n      objectFit: 'contain',\n      fullControlsWidth: '', //全屏宽\n      fullControlsHeigt: 0, //全屏高\n      isWideFullControlsHeight: 0, // 窄屏视频全屏高\n      showControls: true, //显示控制\n      oldValue: {}, //触摸开始 进度，音量，亮度\n      nowTime: '', //当前时间\n      lock: false, //锁屏\n      oldTouces: {},\n      touchType: null, //滑动类型\n      platform: '', //系统\n      rate: '1.0',\n      rateView: false, //倍速\n      srcView: false, //切换\n      moreView: false, //更多\n      danmuView: true, //弹幕\n      episodeView: false, //选集\n      full: false, //撑满全屏\n      playFirst: true, //第一次播放\n      rateList: ['0.5', '0.8', '1.0', '1.25', '1.5'], //倍数\n      dblCount: 0, //双击计数\n      touchCurrent: 0,\n      touchBright: 0,\n      touchVolume: 0,\n      ratio: 1, //滚动条比例系数\n      level: 1, //电量\n\n      audioFlag: false, //后台音频\n      innerAudioContext: null //音频上下文\n    };\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('../../static/chunlei-video/text-icon.ttf')\" });\n\n\n  },\n  created: function created() {var _this = this;\n    if (this.isWideScreen) {\n      this.fullControlsWidth = uni.getSystemInfoSync().screenHeight;\n      this.fullControlsHeigt = uni.getSystemInfoSync().screenWidth + 1;\n    } else {\n      this.fullControlsWidth = uni.getSystemInfoSync().screenWidth;\n      this.fullControlsHeigt = uni.getSystemInfoSync().screenWidth + 1;\n      this.isWideFullControlsHeight = this.fullControlsHeigt + this.fullControlsHeigt;\n    }\n    //this.ratio = this.fullControlsWidth / this.fullControlsHeigt\n\n    uni.getSystemInfo({\n      success: function success(e) {\n        _this.platform = e.platform;\n        _this.changDirection();\n      } });\n\n\n  },\n  mounted: function mounted() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              _this2.getLevel();\n              _this2.videoCtx = uni.createVideoContext(\"chunleiVideo\", _this2);case 2:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  methods: {\n    back: function back() {\n      // uni.navigateBack({\n      // \tdelta: 1\n      // })\n      this.$emit('back');\n    },\n    changSrc: function changSrc() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                _this3.playFirst = true;_context2.next = 3;return (\n                  _this3.promise(100));case 3:\n                _this3.playFirst = false;\n                _this3.videoCtx.play();\n                _this3.play = true;\n\n                //if(this.platform=='ios') await this.promise(1500)\n                _this3.videoCtx.seek(0);\n\n                _this3.videoCtx.playbackRate(_this3.rate * 1);\n                if (typeof _this3.$refs.danmu != 'undefined') _this3.$refs.danmu.cleanDanmu();case 9:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n    changDirection: function changDirection() {var _this4 = this; // 监听移动设备方向\n\n      if (this.orientation) {\n        plus.orientation.watchOrientation(function (o) {\n          if (_this4.platform == 'android') {\n            if (o.gamma > 40) {\n              _this4.direction = 90;\n            } else if (o.gamma < -40) {\n              _this4.direction = -90;\n            }\n          } else {\n            if (o.alpha > 40) {\n              _this4.direction = -90;\n            } else if (o.alpha < -40) {\n              _this4.direction = 90;\n            }\n          }\n        }, function () {}, {\n          frequency: 1000 });\n\n      }\n\n    },\n    pageShow: function pageShow() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0: // 显示\n                //显示暂停\n                if (_this5.audio != '') _this5.innerAudioContext.pause();_context3.next = 3;return (\n                  _this5.promise());case 3:\n                if (_this5.play) {\n                  _this5.videoCtx.play();\n                  // await this.promise(1000)\n\n                  //this.videoCtx.seek(this.current)\n                }case 4:case \"end\":return _context3.stop();}}}, _callee3);}))();\n\n    },\n    pageHide: function pageHide() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                if (_this6.fullScreen) _this6.videoCtx.exitFullScreen();\n                _this6.videoCtx.pause();\n                try {\n                  uni.setStorageSync(\"videoCurrent\", { title: _this6.title, current: _this6.current });\n                } catch (err) {\n                  __f__(\"log\", \"\\u8BBE\\u7F6E\\u64AD\\u653E\\u8FDB\\u5EA6\\u5931\\u8D25~\", \" at components/chunlei-video/chunlei-video.nvue:538\");\n                }_context4.next = 5;return (\n                  _this6.promise());case 5:\n                //显示播放\n                if (_this6.audio != '' && _this6.play && _this6.audioFlag) {\n                  _this6.innerAudioContext.seek(_this6.current);\n                  _this6.innerAudioContext.onTimeUpdate(function () {\n                    _this6.current = _this6.innerAudioContext.currentTime;\n                  });\n                  _this6.innerAudioContext.play();\n                }case 6:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n    promise: function promise() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var promise = new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve();\n        }, time);\n      });\n      return promise;\n    },\n    timeupdate: function timeupdate(event) {\n\n      this.duration = event.detail.duration;\n\n      this.current = event.detail.currentTime;\n\n    },\n    ended: function ended() {\n      if (!this.loop) {\n        //下一集\n        if (this.episode != 0 && this.index < this.episode) {\n          this.playNext();\n        } else {\n          this.play = false;\n        }\n      }\n\n    },\n    waiting: function waiting() {\n\n    },\n    playing: function playing() {\n\n    },\n    //拖动滑块\n    changeCurrent: function changeCurrent(e) {\n      this.current = e.detail.value;\n      this.videoCtx.seek(this.current);\n    },\n    seek: function seek(time) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n\n                _this7.current = time;\n                _this7.videoCtx.seek(_this7.current);case 2:case \"end\":return _context5.stop();}}}, _callee5);}))();\n    },\n    //获取视频当前进度\n    getCurrent: function getCurrent() {\n      return Math.floor(this.current);\n    },\n    clickFull: function clickFull(e) {\n      e.stopPropagation();\n      if (this.full) {\n        this.objectFit = 'contain';\n      } else {\n        this.objectFit = 'fill';\n      }\n      this.full = !this.full;\n      this.clickMoreView();\n    },\n    clickDownload: function clickDownload(e) {// 点击下载\n      e.stopPropagation();\n      this.videoCtx.pause(); // 暂停播放\n      this.play = false;\n      this.videoCtx.exitFullScreen(); // 退出全屏\n      var event = {\n        title: this.title,\n        downLoadUrl: this.downLoadUrl };\n\n      this.$emit('clickDownload', event);\n      this.clickMoreView();\n    },\n    clickLoop: function clickLoop(e) {\n      e.stopPropagation();\n      this.loop = !this.loop;\n      this.clickMoreView();\n    },\n    //倍速播放\n    tapRate: function tapRate(e, rate) {\n      e.stopPropagation();\n      this.videoCtx.playbackRate(rate * 1);\n      this.rate = rate;\n      if (this.fullScreen) {\n        this.clickRateView();\n      } else {\n        this.rateView = !this.rateView;\n      }\n    },\n    //跳转记忆\n    tapRemeber: function tapRemeber(e) {\n      e.stopPropagation();\n      this.videoCtx.seek(this.initialTime);\n    },\n    //切换高清\n    tapSrc: function tapSrc(e, item) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var current;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                e.stopPropagation();\n                current = _this8.current;if (!(\n                _this8.src == item.src)) {_context6.next = 5;break;}_context6.next = 13;break;case 5:\n\n\n                _this8.src = item.src;\n                _this8.srcTitle = item.title;_context6.next = 9;return (\n                  _this8.promise());case 9:\n                _this8.videoCtx = uni.createVideoContext(\"chunleiVideo\", _this8);\n                _this8.play = true;\n                _this8.videoCtx.play();\n                _this8.videoCtx.playbackRate(_this8.rate * 1);case 13:\n\n                _this8.clickSrcView();case 14:case \"end\":return _context6.stop();}}}, _callee6);}))();\n    },\n    //暂停\n    pause: function pause() {\n      this.videoCtx.pause();\n      this.play = false;\n    },\n    videoPlay: function videoPlay() {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:if (\n                _this9.play) {_context7.next = 8;break;}_context7.next = 3;return (\n                  _this9.promise(100));case 3:\n                _this9.videoCtx.play();\n\n                if (_this9.playFirst) {\n                  //if(this.platform=='ios') await this.promise(1000)\n\n                  //this.videoCtx.seek(this.initialTime)\n                  _this9.playFirst = false;\n                }\n                if (_this9.current >= _this9.duration) _this9.current = 0;_context7.next = 9;break;case 8:\n\n                _this9.videoCtx.pause();case 9:\n\n                _this9.play = !_this9.play;case 10:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n    tapFullScreen: function tapFullScreen() {// 全屏事件\n      this.showControls = false;\n      if (!this.fullScreen) {\n        if (this.isWideScreen) {\n          this.videoCtx.requestFullScreen({\n            direction: this.direction });\n\n        } else {\n          this.videoCtx.requestFullScreen({\n            direction: 0 });\n          // 非宽屏视频 的全屏模式\n        }\n\n\n      } else {\n        this.videoCtx.exitFullScreen();\n      }\n    },\n    clickVideo: function clickVideo() {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                _this10.showControls = !_this10.showControls;case 1:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n    clickRateView: function clickRateView() {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                _this11.showControls = !_this11.showControls;\n                if (_this11.moreView) {\n                  _this11.moreView = false;\n\n                } else {\n                  _this11.rateView = !_this11.rateView;\n                }case 2:case \"end\":return _context9.stop();}}}, _callee9);}))();\n    },\n    clickAudio: function clickAudio(e) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                e.stopPropagation();\n                _this12.showControls = !_this12.showControls;\n                _this12.audioFlag = true;\n                _this12.moreView = false;\n                uni.showToast({\n                  title: '开启后台音频播放',\n                  icon: 'none' });case 5:case \"end\":return _context10.stop();}}}, _callee10);}))();\n\n    },\n    //切换srctitle\n    clickSrcView: function clickSrcView() {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:if (!(\n                _this13.srcList.length == 1)) {_context11.next = 2;break;}return _context11.abrupt(\"return\");case 2:\n                _this13.showControls = !_this13.showControls;\n                _this13.srcView = !_this13.srcView;case 4:case \"end\":return _context11.stop();}}}, _callee11);}))();\n    },\n    //选集\n    clickEpisodeView: function clickEpisodeView(e) {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:\n                e.stopPropagation();\n\n                _this14.showControls = !_this14.showControls;\n                _this14.episodeView = !_this14.episodeView;case 3:case \"end\":return _context12.stop();}}}, _callee12);}))();\n    },\n    //跳到指定集数\n    clickEpisode: function clickEpisode(count) {\n      this.$emit('playEpi', count);\n    },\n    clickMoreView: function clickMoreView() {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:\n                _this15.showControls = !_this15.showControls;\n                _this15.moreView = !_this15.moreView;case 2:case \"end\":return _context13.stop();}}}, _callee13);}))();\n    },\n    //下一集\n    playNext: function playNext() {\n      this.play = false;\n      this.$emit('playEpi', this.index + 1);\n    },\n    clickLock: function clickLock(e) {\n      e.stopPropagation();\n      this.lock = !this.lock;\n    },\n    animateControls: function animateControls(distance, el) {\n      animation.transition(el, {\n        styles: {\n          transform: \"translate(0px, \".concat(distance, \"px)\") },\n\n        duration: 150, //ms\n        timingFunction: 'ease-in-out',\n        delay: 0 //ms\n      }, function () {\n\n      });\n    },\n    // 触摸开始\n    videoTouchStart: function videoTouchStart(e) {var _this16 = this;\n\n      this.oldTouces = e.changedTouches[0];\n      // 触摸开始的值\n      this.oldValue = {\n        current: this.current };\n\n\n      this.oldValue = _objectSpread({},\n      this.oldValue, {\n        volume: plus.device.getVolume() });\n\n\n\n\n      uni.getScreenBrightness({\n        success: function success(res) {\n          _this16.oldValue = _objectSpread({},\n          _this16.oldValue, {\n            bright: res.value });\n\n        } });\n\n\n    },\n    // 计算方向\n    videoTouchMove: function videoTouchMove(e) {\n      if (this.lock) return;var\n\n      oldTouces =\n\n\n      this.oldTouces,oldValue = this.oldValue,touchType = this.touchType;\n      var newTouces = e.changedTouches[0];\n\n      if (!this.touchType) {\n        //进度控制\n        this.touchType = Math.abs(newTouces.pageX - oldTouces.pageX) > 20 ? 'current' : null;\n        //全屏下支持音量和亮度\n\n        if (this.fullScreen && !this.touchType && this.platform == 'android') {\n\n          this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 && newTouces.pageX <= 200 ? 'bright' : this.touchType;\n\n          this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 && newTouces.pageX > 200 ? 'volume' : this.touchType;\n\n        }\n        if (this.fullScreen && this.platform == 'ios') {\n          this.touchType = Math.abs(newTouces.pageX - oldTouces.pageX) > 20 ? 'bright' : null;\n\n          if (!this.touchType) {\n            this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 ? 'current' : this.touchType;\n          }\n\n        }\n\n      } else if (this.touchType == 'volume' && this.platform == 'android') {\n        this.touchVolume = (oldTouces.pageY - newTouces.pageY) / 200 * 1 * 2 + this.oldValue[touchType];\n        this.touchVolume = this.touchVolume > 1 ? 1 : this.touchVolume;\n        this.touchVolume = this.touchVolume < 0 ? 0 : this.touchVolume;\n        //相等时重置oldTouces\n        if (this.touchVolume == this.oldValue[touchType]) this.oldTouces = newTouces;\n      } else if (this.touchType == 'bright' && this.platform == 'android') {\n        this.touchBright = (oldTouces.pageY - newTouces.pageY) / 200 * 1 * 2 + this.oldValue[touchType];\n        this.touchBright = this.touchBright > 1 ? 1 : this.touchBright;\n        this.touchBright = this.touchBright < 0 ? 0 : this.touchBright;\n        //相等时重置oldTouces\n        if (this.touchBright == this.oldValue[touchType]) this.oldTouces = newTouces;\n      } else if (this.touchType == 'current') {\n\n        this.touchCurrent = (newTouces.pageX - oldTouces.pageX) * this.duration / 250 / this.currentSen + this.oldValue[\n        touchType] * 1;\n        if (this.platform == 'ios' && this.fullScreen) {\n          this.touchCurrent = this.direction / -90 * (newTouces.pageY - oldTouces.pageY) * this.duration / 250 / this.currentSen +\n          this.oldValue[touchType] * 1;\n        }\n\n        this.touchCurrent = this.touchCurrent > this.duration ? this.duration : this.touchCurrent;\n        this.touchCurrent = this.touchCurrent < 0 ? 0 : this.touchCurrent;\n        //相等时重置oldTouces\n        if (this.touchCurrent == this.oldValue[touchType]) this.oldTouces = newTouces;\n      }\n\n    },\n    // 结束触摸\n    videoTouchEnd: function videoTouchEnd(e) {var _this17 = this;\n      if (this.touchType == 'current') {\n        this.current = this.touchCurrent;\n        this.videoCtx.seek(this.current);\n      } else if (this.touchType == 'bright' && this.platform == 'android') {\n        // plus.screen.setBrightness(this.touchBright.toFixed(2))\n        // if(this.play) this.videoCtx.play();\n\n        uni.setScreenBrightness({\n          value: this.touchBright.toFixed(2),\n          success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return (\n                        _this17.promise(100));case 2:\n                      //this.videoCtx.requestFullScreen({direction: this.direction})\n                      if (_this17.play) _this17.videoCtx.play();case 3:case \"end\":return _context14.stop();}}}, _callee14);}));function success() {return _success.apply(this, arguments);}return success;}() });\n\n\n\n\n      } else if (this.touchType == 'volume' && this.platform == 'android') {\n        plus.device.setVolume(this.touchVolume.toFixed(2));\n      } else if (!this.touchType) {\n        if (this.dblCount == 1 || this.dblCount == 0) this.dblCount++;\n\n        if (this.dblCount == 1) {\n          setTimeout(function () {\n            //单击\n            if (_this17.dblCount == 1) _this17.clickVideo();\n            //双击\n            if (_this17.dblCount == 2) _this17.videoPlay();\n            _this17.dblCount = 0;\n          }, 250);\n        }\n      }\n\n      this.touchType = null;\n\n    },\n    changeScreen: function changeScreen() {\n      this.showControls = false;\n      this.rateView = false;\n      this.moreView = false;\n      this.srcView = false;\n      this.fullScreen = !this.fullScreen;\n      this.$emit('fullscreenchange', this.fullScreen);\n    },\n    getLevel: function getLevel() {var _this18 = this;\n      var promise = new Promise(function (resolve, reject) {\n\n        if (_this18.platform == 'android') {\n          //注意，安卓需要配置下manifest.json文件，打开后，进入模块权限配置，在右侧的Android权限设置里勾选上android.permission.BATTERY_STATS\n          var main = plus.android.runtimeMainActivity();\n          var Intent = plus.android.importClass('android.content.Intent');\n          var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n            onReceive: function onReceive(context, intent) {\n              var action = intent.getAction();\n              if (action == Intent.ACTION_BATTERY_CHANGED) {\n                var level = intent.getIntExtra(\"level\", 0); //电量  \n                var voltage = intent.getIntExtra(\"voltage\", 0); //电池电压  \n                var temperature = intent.getIntExtra(\"temperature\", 0); //电池温度  \n                resolve(level / 100);\n              }\n            } });\n\n          var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n          var filter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);\n          main.registerReceiver(recevier, filter);\n        } else if (_this18.platform == 'ios') {\n          var UIDevice = plus.ios.import(\"UIDevice\");\n          var dev = UIDevice.currentDevice();\n          if (!dev.isBatteryMonitoringEnabled()) {\n            dev.setBatteryMonitoringEnabled(true);\n          }\n          var level = dev.batteryLevel();\n          resolve(level);\n        }\n\n\n\n\n\n\n\n\n      });\n      promise.then(function (res) {\n        _this18.level = res;\n      });\n\n\n\n\n    },\n    formatSeconds: function formatSeconds(a, type) {\n      var hh = parseInt(a / 3600);\n      var mm = parseInt((a - hh * 3600) / 60);\n      if (mm < 10) mm = \"0\" + mm;\n      var ss = parseInt((a - hh * 3600) % 60);\n      if (ss < 10) ss = \"0\" + ss;\n      if (hh < 10) hh = hh == '0' ? '' : \"0\".concat(hh, \":\");\n      var length = hh + mm + \":\" + ss;\n      if (a >= 0) {\n        return length;\n      } else {\n        return \"00:00\";\n      }\n    },\n    getNowTime: function getNowTime() {\n      var now = new Date();\n      var hh = now.getHours(); //时\n      if (hh < 10) hh = \"0\" + hh;\n      var mm = now.getMinutes(); //分\n      if (mm < 10) mm = \"0\" + mm;\n      return \"\".concat(hh, \":\").concat(mm);\n    } },\n\n  watch: {\n    playFirst: {\n      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(newVal, oldVal) {return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!\n                  oldVal) {_context15.next = 5;break;}\n                  this.remeber = true;_context15.next = 4;return (\n                    this.promise(5000));case 4:\n                  this.remeber = false;case 5:case \"end\":return _context15.stop();}}}, _callee15, this);}));function handler(_x, _x2) {return _handler.apply(this, arguments);}return handler;}() },\n\n\n\n\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        this.duration = newVal;\n      } },\n\n    audio: {\n      immediate: true,\n      handler: function () {var _handler2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(newVal, oldVal) {return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!(\n                  newVal != '')) {_context16.next = 9;break;}_context16.next = 3;return (\n                    this.promise());case 3:\n                  this.innerAudioContext = uni.createInnerAudioContext();\n\n                  this.innerAudioContext.src = newVal;\n                  this.innerAudioContext.onPlay();\n                  this.innerAudioContext.onPause();_context16.next = 10;break;case 9:\n\n                  this.innerAudioContext = null;case 10:case \"end\":return _context16.stop();}}}, _callee16, this);}));function handler(_x3, _x4) {return _handler2.apply(this, arguments);}return handler;}() },\n\n\n\n\n    index: {\n      handler: function () {var _handler3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(newVal, oldVal) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:_context17.next = 2;return (\n\n                    this.changSrc());case 2:case \"end\":return _context17.stop();}}}, _callee17, this);}));function handler(_x5, _x6) {return _handler3.apply(this, arguments);}return handler;}() },\n\n\n\n    srcList: {\n      immediate: true,\n      handler: function () {var _handler4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(newVal, oldVal) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:\n                  if (typeof newVal == 'string') {\n                    this.src = newVal;\n                  } else {\n                    this.src = newVal[0].src;\n                    this.srcTitle = newVal[0].title;\n                  }if (!(\n\n                  this.playFirst && this.autoplay)) {_context18.next = 4;break;}_context18.next = 4;return this.changSrc();case 4:case \"end\":return _context18.stop();}}}, _callee18, this);}));function handler(_x7, _x8) {return _handler4.apply(this, arguments);}return handler;}() },\n\n\n    showControls: {\n      immediate: true,\n      handler: function () {var _handler5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(newVal) {return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!(\n\n                  newVal && this.fullScreen)) {_context19.next = 7;break;}\n                  this.nowTime = this.getNowTime();\n                  this.getLevel();_context19.next = 5;return (\n                    this.promise());case 5:\n                  this.animateControls(0, this.$refs.controlsTop);\n                  this.animateControls(1, this.$refs.controlsBtm);case 7:case \"end\":return _context19.stop();}}}, _callee19, this);}));function handler(_x9) {return _handler5.apply(this, arguments);}return handler;}() },\n\n\n\n    direction: function direction(newVal) {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:if (!(\n                _this19.fullScreen && !_this19.lock)) {_context20.next = 5;break;}\n                _this19.videoCtx.exitFullScreen();_context20.next = 4;return (\n                  _this19.promise(1000));case 4:\n                _this19.videoCtx.requestFullScreen({\n                  direction: newVal });case 5:case \"end\":return _context20.stop();}}}, _callee20);}))();\n\n\n    } },\n\n\n  computed: {\n    titleSub: function titleSub() {// 标题截取\n      var title = this.title;\n      if (!this.isWideScreen && this.fullScreen && title.length > 10) {\n        return title.substr(0, 10) + '...';\n      } else if (title.length > 25) {\n        return title.substr(0, 25) + '...';\n      } else {\n        return title;\n      }\n    },\n    notWideScreenTitleSub: function notWideScreenTitleSub() {\n      var title = this.title;\n      if (!this.isWideScreen && title.length > 10) {\n        return title.substr(0, 17) + '...';\n      } else {\n        return title;\n      }\n    },\n    rememberCurrent: function rememberCurrent() {\n      return this.formatSeconds(this.initialTime);\n    },\n    lastDuration: function lastDuration() {\n      return this.formatSeconds(this.duration);\n    },\n    currentDuration: function currentDuration() {\n      return this.formatSeconds(this.current);\n    },\n    touchCurrentDuration: function touchCurrentDuration() {\n      return this.formatSeconds(this.touchCurrent);\n    },\n    //小屏时进度条长度\n    sliderWidth: function sliderWidth() {\n      if (this.duration >= 3600) {\n        return this.fullControlsHeigt - 190;\n      } else {\n        return this.fullControlsHeigt - 160;\n      }\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJTQTs7QUFFQTs7QUFFQSwyRzs7O0FBR0E7QUFDQSx3Qzs7O0FBR0E7QUFDQTtBQUNBLHlDQURBO0FBRUEscUNBRkE7O0FBSUEsdUNBSkEsRUFEQTs7O0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFEQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFMQTs7QUFTQTtBQUNBLDJCQURBO0FBRUEsaUJBRkEsRUFUQTs7QUFhQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFiQTs7QUFpQkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBakJBOztBQXFCQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBN0JBOztBQWlDQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0EsaUJBREE7QUFFQSwrQ0FGQSxFQXJDQTs7QUF5Q0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBekNBOztBQTZDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUE3Q0E7O0FBaURBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQWpEQTs7QUFxREE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBckRBOztBQXlEQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUF6REE7O0FBNkRBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQTdEQTs7QUFpRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBakVBOztBQXFFQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFyRUE7O0FBeUVBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQXpFQTs7QUE2RUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBN0VBLEVBUkE7OztBQTBGQSxNQTFGQSxrQkEwRkE7QUFDQTtBQUNBLGFBREE7QUFFQSxrQkFGQSxFQUVBO0FBQ0EsaUJBSEEsRUFHQTtBQUNBLHFCQUpBO0FBS0Esa0JBTEEsRUFLQTtBQUNBLGdCQU5BLEVBTUE7QUFDQSxpQkFQQSxFQU9BO0FBQ0EsaUJBUkEsRUFRQTtBQUNBLG9CQVRBLEVBU0E7QUFDQSx1QkFWQSxFQVVBO0FBQ0Esb0JBWEEsRUFXQTtBQUNBLDBCQVpBO0FBYUEsMkJBYkEsRUFhQTtBQUNBLDBCQWRBLEVBY0E7QUFDQSxpQ0FmQSxFQWVBO0FBQ0Esd0JBaEJBLEVBZ0JBO0FBQ0Esa0JBakJBLEVBaUJBO0FBQ0EsaUJBbEJBLEVBa0JBO0FBQ0EsaUJBbkJBLEVBbUJBO0FBQ0EsbUJBcEJBO0FBcUJBLHFCQXJCQSxFQXFCQTtBQUNBLGtCQXRCQSxFQXNCQTtBQUNBLGlCQXZCQTtBQXdCQSxxQkF4QkEsRUF3QkE7QUFDQSxvQkF6QkEsRUF5QkE7QUFDQSxxQkExQkEsRUEwQkE7QUFDQSxxQkEzQkEsRUEyQkE7QUFDQSx3QkE1QkEsRUE0QkE7QUFDQSxpQkE3QkEsRUE2QkE7QUFDQSxxQkE5QkEsRUE4QkE7QUFDQSxvREEvQkEsRUErQkE7QUFDQSxpQkFoQ0EsRUFnQ0E7QUFDQSxxQkFqQ0E7QUFrQ0Esb0JBbENBO0FBbUNBLG9CQW5DQTtBQW9DQSxjQXBDQSxFQW9DQTtBQUNBLGNBckNBLEVBcUNBOztBQUVBLHNCQXZDQSxFQXVDQTtBQUNBLDZCQXhDQSxDQXdDQTtBQXhDQTtBQTBDQSxHQXJJQTtBQXNJQSxjQXRJQSwwQkFzSUE7O0FBRUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsOERBRkE7OztBQUtBLEdBOUlBO0FBK0lBLFNBL0lBLHFCQStJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOzs7QUFPQSxHQWpLQTtBQWtLQSxTQWxLQSxxQkFrS0E7QUFDQTtBQUNBLCtFQUZBO0FBR0EsR0FyS0E7QUFzS0E7QUFDQSxRQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsWUFQQSxzQkFPQTtBQUNBLHdDQURBO0FBRUEscUNBRkE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhGQVhBO0FBWUEsS0FuQkE7QUFvQkEsa0JBcEJBLDRCQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFdBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWRBLEVBY0EsY0FkQSxFQWNBO0FBQ0EseUJBREEsRUFkQTs7QUFpQkE7O0FBRUEsS0ExQ0E7QUEyQ0EsWUEzQ0Esc0JBMkNBO0FBQ0E7QUFDQSx5RUFGQTtBQUdBLGtDQUhBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBVEE7O0FBV0EsS0F0REE7QUF1REEsWUF2REEsc0JBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxDQUVBO0FBQ0E7QUFDQSxpQkFQQTtBQVFBLGtDQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBO0FBR0E7QUFDQSxpQkFoQkE7QUFpQkEsS0F4RUE7QUF5RUEsV0F6RUEscUJBeUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxPQUpBO0FBS0E7QUFDQSxLQWhGQTtBQWlGQSxjQWpGQSxzQkFpRkEsS0FqRkEsRUFpRkE7O0FBRUE7O0FBRUE7O0FBRUEsS0F2RkE7QUF3RkEsU0F4RkEsbUJBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FsR0E7QUFtR0EsV0FuR0EscUJBbUdBOztBQUVBLEtBckdBO0FBc0dBLFdBdEdBLHFCQXNHQTs7QUFFQSxLQXhHQTtBQXlHQTtBQUNBLGlCQTFHQSx5QkEwR0EsQ0ExR0EsRUEwR0E7QUFDQTtBQUNBO0FBQ0EsS0E3R0E7QUE4R0EsUUE5R0EsZ0JBOEdBLElBOUdBLEVBOEdBOztBQUVBO0FBQ0EscURBSEE7QUFJQSxLQWxIQTtBQW1IQTtBQUNBLGNBcEhBLHdCQW9IQTtBQUNBO0FBQ0EsS0F0SEE7QUF1SEEsYUF2SEEscUJBdUhBLENBdkhBLEVBdUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhJQTtBQWlJQSxpQkFqSUEseUJBaUlBLENBaklBLEVBaUlBO0FBQ0E7QUFDQSw0QkFGQSxDQUVBO0FBQ0E7QUFDQSxxQ0FKQSxDQUlBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHFDQUZBOztBQUlBO0FBQ0E7QUFDQSxLQTVJQTtBQTZJQSxhQTdJQSxxQkE2SUEsQ0E3SUEsRUE2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpKQTtBQWtKQTtBQUNBLFdBbkpBLG1CQW1KQSxDQW5KQSxFQW1KQSxJQW5KQSxFQW1KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0E1SkE7QUE2SkE7QUFDQSxjQTlKQSxzQkE4SkEsQ0E5SkEsRUE4SkE7QUFDQTtBQUNBO0FBQ0EsS0FqS0E7QUFrS0E7QUFDQSxVQW5LQSxrQkFtS0EsQ0FuS0EsRUFtS0EsSUFuS0EsRUFtS0E7QUFDQTtBQUNBLHVCQUZBLEdBRUEsY0FGQTtBQUdBLHNDQUhBOzs7QUFNQTtBQUNBLDZDQVBBO0FBUUEsa0NBUkE7QUFTQTtBQUNBO0FBQ0E7QUFDQSw4REFaQTs7QUFjQSxzQ0FkQTtBQWVBLEtBbExBO0FBbUxBO0FBQ0EsU0FwTEEsbUJBb0xBO0FBQ0E7QUFDQTtBQUNBLEtBdkxBO0FBd0xBLGFBeExBLHVCQXdMQTtBQUNBLDJCQURBO0FBRUEscUNBRkE7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQVhBOztBQWFBLHdDQWJBOztBQWVBLDJDQWZBO0FBZ0JBLEtBeE1BO0FBeU1BLGlCQXpNQSwyQkF5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBOztBQUdBLFNBSkEsTUFJQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUNBOzs7QUFHQSxPQVpBLE1BWUE7QUFDQTtBQUNBO0FBQ0EsS0ExTkE7QUEyTkEsY0EzTkEsd0JBMk5BO0FBQ0EsNkRBREE7QUFFQSxLQTdOQTtBQThOQSxpQkE5TkEsMkJBOE5BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUhBLE1BR0E7QUFDQTtBQUNBLGlCQVBBO0FBUUEsS0F0T0E7QUF1T0EsY0F2T0Esc0JBdU9BLENBdk9BLEVBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsOEJBRkEsSUFMQTs7QUFTQSxLQWhQQTtBQWlQQTtBQUNBLGdCQWxQQSwwQkFrUEE7QUFDQSwyQ0FEQTtBQUVBO0FBQ0EsbURBSEE7QUFJQSxLQXRQQTtBQXVQQTtBQUNBLG9CQXhQQSw0QkF3UEEsQ0F4UEEsRUF3UEE7QUFDQTs7QUFFQTtBQUNBLDJEQUpBO0FBS0EsS0E3UEE7QUE4UEE7QUFDQSxnQkEvUEEsd0JBK1BBLEtBL1BBLEVBK1BBO0FBQ0E7QUFDQSxLQWpRQTtBQWtRQSxpQkFsUUEsMkJBa1FBO0FBQ0E7QUFDQSxxREFGQTtBQUdBLEtBclFBO0FBc1FBO0FBQ0EsWUF2UUEsc0JBdVFBO0FBQ0E7QUFDQTtBQUNBLEtBMVFBO0FBMlFBLGFBM1FBLHFCQTJRQSxDQTNRQSxFQTJRQTtBQUNBO0FBQ0E7QUFDQSxLQTlRQTtBQStRQSxtQkEvUUEsMkJBK1FBLFFBL1FBLEVBK1FBLEVBL1FBLEVBK1FBO0FBQ0E7QUFDQTtBQUNBLDhEQURBLEVBREE7O0FBSUEscUJBSkEsRUFJQTtBQUNBLHFDQUxBO0FBTUEsZ0JBTkEsQ0FNQTtBQU5BLFNBT0E7O0FBRUEsT0FUQTtBQVVBLEtBMVJBO0FBMlJBO0FBQ0EsbUJBNVJBLDJCQTRSQSxDQTVSQSxFQTRSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTs7O0FBSUE7QUFDQSxtQkFEQTtBQUVBLHVDQUZBOzs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsNkJBRkE7O0FBSUEsU0FOQTs7O0FBU0EsS0FwVEE7QUFxVEE7QUFDQSxrQkF0VEEsMEJBc1RBLENBdFRBLEVBc1RBO0FBQ0EsNEJBREE7O0FBR0EsZUFIQTs7O0FBTUEsVUFOQSxDQUdBLFNBSEEsQ0FJQSxRQUpBLEdBTUEsSUFOQSxDQUlBLFFBSkEsQ0FLQSxTQUxBLEdBTUEsSUFOQSxDQUtBLFNBTEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BckJBLE1BcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLE1BTUE7O0FBRUE7QUFDQSxpQkFEQSxJQUNBLENBREE7QUFFQTtBQUNBO0FBQ0Esc0NBREE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBL1dBO0FBZ1hBO0FBQ0EsaUJBalhBLHlCQWlYQSxDQWpYQSxFQWlYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FEQTtBQUVBO0FBQ0EsNENBREE7QUFFQTtBQUNBLGdFQUhBLDZJQUZBOzs7OztBQVVBLE9BZEEsTUFjQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQU5BLEVBTUEsR0FOQTtBQU9BO0FBQ0E7O0FBRUE7O0FBRUEsS0FyWkE7QUFzWkEsZ0JBdFpBLDBCQXNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN1pBO0FBOFpBLFlBOVpBLHNCQThaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFEQSxDQUNBO0FBQ0EsK0RBRkEsQ0FFQTtBQUNBLHVFQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0EsYUFUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxTQWxCQSxNQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBLE9BckNBO0FBc0NBO0FBQ0E7QUFDQSxPQUZBOzs7OztBQU9BLEtBNWNBO0FBNmNBLGlCQTdjQSx5QkE2Y0EsQ0E3Y0EsRUE2Y0EsSUE3Y0EsRUE2Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0ExZEE7QUEyZEEsY0EzZEEsd0JBMmRBO0FBQ0E7QUFDQSw4QkFGQSxDQUVBO0FBQ0E7QUFDQSxnQ0FKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBLEtBbGVBLEVBdEtBOztBQTBvQkE7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxzQ0FGQTtBQUdBLHNDQUhBO0FBSUEsdUNBSkEsMEpBREEsRUFEQTs7Ozs7QUFXQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBO0FBQ0E7QUFDQSxPQUpBLEVBWEE7O0FBaUJBO0FBQ0EscUJBREE7QUFFQTtBQUNBLDhCQURBO0FBRUEsa0NBRkE7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsbURBUEE7O0FBU0EsZ0RBVEEsNkpBRkEsRUFqQkE7Ozs7O0FBaUNBO0FBQ0E7O0FBRUEsbUNBRkEsOEpBREEsRUFqQ0E7Ozs7QUF3Q0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsbUJBTkE7O0FBUUEsaURBUkEsMERBUUEsZUFSQSw2SkFGQSxFQXhDQTs7O0FBcURBO0FBQ0EscUJBREE7QUFFQTs7QUFFQSwyQ0FGQTtBQUdBO0FBQ0Esa0NBSkE7QUFLQSxrQ0FMQTtBQU1BO0FBQ0Esa0VBUEEsdUpBRkEsRUFyREE7Ozs7QUFrRUEsYUFsRUEscUJBa0VBLE1BbEVBLEVBa0VBO0FBQ0EsbURBREE7QUFFQSxrREFGQTtBQUdBLHVDQUhBO0FBSUE7QUFDQSxtQ0FEQSxJQUpBOzs7QUFRQSxLQTFFQSxFQTFvQkE7OztBQXV0QkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FWQTtBQVdBLHlCQVhBLG1DQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLG1CQW5CQSw2QkFtQkE7QUFDQTtBQUNBLEtBckJBO0FBc0JBLGdCQXRCQSwwQkFzQkE7QUFDQTtBQUNBLEtBeEJBO0FBeUJBLG1CQXpCQSw2QkF5QkE7QUFDQTtBQUNBLEtBM0JBO0FBNEJBLHdCQTVCQSxrQ0E0QkE7QUFDQTtBQUNBLEtBOUJBO0FBK0JBO0FBQ0EsZUFoQ0EseUJBZ0NBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXRDQSxFQXZ0QkEsRSIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInZpZGVvLWJveFwiPlxyXG5cdFx0PHZpZGVvIDpjb250cm9scz1cImZhbHNlXCIgOnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIiA6c2hvdy1mdWxsc2NyZWVuLWJ0bj1cImZhbHNlXCIgOnNob3ctcHJvZ3Jlc3M9XCJmYWxzZVwiIDpvYmplY3RGaXQ9XCJvYmplY3RGaXRcIlxyXG5cdFx0IDpzcmM9XCJzcmNcIiA6bG9vcD1cImxvb3BcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiIEBmdWxsc2NyZWVuY2hhbmdlPVwiY2hhbmdlU2NyZWVuXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdCBAZW5kZWQ9XCJlbmRlZFwiIEB3YWl0aW5nPVwid2FpdGluZ1wiIEBwbGF5PVwicGxheWluZ1wiIGlkPVwiY2h1bmxlaVZpZGVvXCIgcmVmPVwiY2h1bmxlaVZpZGVvXCIgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0XHQ8IS0tIOaSreaUvuaOp+WItumdouadvyAtLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJ2aWRlby12aWV3XCIgdi1pZj1cIiFmdWxsU2NyZWVuXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZGV2aWNlV2lkdGh9cHhgLGhlaWdodDogYCR7ZGV2aWNlSGVpZ2h0fXB4YCB9XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vdmUtdmlld1wiIEB0b3VjaGVuZD1cInZpZGVvVG91Y2hFbmRcIiBAdG91Y2htb3ZlPVwidmlkZW9Ub3VjaE1vdmVcIiBAdG91Y2hzdGFydD1cInZpZGVvVG91Y2hTdGFydFwiIDpzdHlsZT1cInsgaGVpZ2h0OiBgJHtkZXZpY2VIZWlnaHR9cHhgLHdpZHRoOiBgJHtkZXZpY2VXaWR0aH1weGAgfVwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdG9wXCIgdi1pZj1cIiFwbGF5XCI+PHRleHQgY2xhc3M9XCJpb3MtdGl0bGVcIj7lt7LmmoLlgZw8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwidmlkZW8tdmlld1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke2RldmljZVdpZHRofXJweGAsaGVpZ2h0OiBgMjAwcHhgIH1cIiA6c3JjPVwicG9zdGVyXCIgdi1pZj1cInBvc3RlciE9JycmJnBsYXlGaXJzdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJhdGUtdmlld1wiIEBjbGljay5zdG9wPVwiXCIgdi1pZj1cIiFyYXRlVmlld1wiPjx0ZXh0IGNsYXNzPVwiaW9zLXRpdGxlXCIgQGNsaWNrPVwicmF0ZVZpZXc9dHJ1ZVwiPnt7cmF0ZX19eDwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJjb250cm9scy12aWV3LXRvcFwiIHYtaWY9XCJzaG93Q29udHJvbHMmJmlzQmFja1wiIEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cImJhY2tcIiBjbGFzcz1cImJ0bkJveFwiPjx0ZXh0IGNsYXNzPVwiaW9zLWljb25cIj4mI3hlNjBhOzwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj4gLS0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRyb2xzLXZpZXctdG9wXCIgdi1pZj1cInNob3dDb250cm9sc1wiIEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cImJhY2tcIiBjbGFzcz1cImJ0bkJveFwiPlxyXG5cdFx0XHRcdFx0ICAgPHRleHQgY2xhc3M9XCJpb3MtaWNvblwiPiYjeGU2MGE7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQgPHRleHQgY2xhc3M9XCJ0b3AtdGl0bGVcIj57e25vdFdpZGVTY3JlZW5UaXRsZVN1Yn19PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250cm9scy12aWV3XCIgdi1pZj1cInNob3dDb250cm9sc1wiIEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInZpZGVvUGxheVwiIHYtaWY9XCJwbGF5XCIgY2xhc3M9XCJidG5Cb3hcIj48dGV4dCBjbGFzcz1cImlvcy1pY29uXCI+JiN4ZTYwMTs8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInZpZGVvUGxheVwiIHYtaWY9XCIhcGxheVwiIGNsYXNzPVwiYnRuQm94XCI+PHRleHQgY2xhc3M9XCJpb3MtaWNvblwiPiYjeGU4OTY7PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzbS10aXRsZVwiPnt7Y3VycmVudER1cmF0aW9ufX0ve3tsYXN0RHVyYXRpb259fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTIC0tPlxyXG5cdFx0XHRcdFx0PGNodW5MZWktc2xpZGVyIDptYXg9XCJkdXJhdGlvblwiIDp2YWx1ZT1cImN1cnJlbnRcIiA6c3R5bGU9XCJ7d2lkdGg6YCR7c2xpZGVyV2lkdGh9cHhgfVwiIDpzY3JlZW5MZWZ0PVwiZHVyYXRpb24+PTM2MDA/MTUwOjEyMFwiXHJcblx0XHRcdFx0XHQgOndpZHRoPVwic2xpZGVyV2lkdGhcIiBAY2hhbmdlPVwiY2hhbmdlQ3VycmVudFwiIDpiYWNrZ3JvdW5kQ29sb3I9XCJjb2xvclwiIDpibG9ja0NvbG9yPVwiY29sb3JcIj48L2NodW5MZWktc2xpZGVyPlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHQ8IS0tICNpZm5kZWYgQVBQLVBMVVMgLS0+XHJcblx0XHRcdFx0XHQ8Y2h1bkxlaS1zbGlkZXIgOm1heD1cImR1cmF0aW9uXCIgOnZhbHVlPVwiY3VycmVudFwiIDpzdHlsZT1cInt3aWR0aDpgJHtzbGlkZXJXaWR0aH1weGB9XCIgOnNjcmVlbkxlZnQ9XCJkdXJhdGlvbj49MzYwMD8xNTA6MTIwXCJcclxuXHRcdFx0XHRcdCA6d2lkdGg9XCJzbGlkZXJXaWR0aFwiIEBjaGFuZ2U9XCJjaGFuZ2VDdXJyZW50XCIgOmJhY2tncm91bmRDb2xvcj1cImNvbG9yXCIgOmJsb2NrQ29sb3I9XCJjb2xvclwiIGRpcmVjdGlvbj1cImNsaWVudFhcIj48L2NodW5MZWktc2xpZGVyPlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInRhcEZ1bGxTY3JlZW5cIiBjbGFzcz1cImJ0bkJveFwiIHYtaWY9XCJzaG93RnVsbHNjcmVlbkJ0blwiPjx0ZXh0IGNsYXNzPVwiaW9zLWljb25cIj4mI3hlNjBkOzwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVtZW1iZXItdmlld1wiIHYtaWY9XCJpbml0aWFsVGltZSE9MCYmcmVtZWJlciYmcGxheVwiIEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInJlbWViZXI9IXJlbWViZXJcIiBjbGFzcz1cImJ0bmJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlvcy1pY29uIG1hcmdpbnJpZ2h0XCI+JiN4ZTYwNzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic20tdGl0bGUgbWFyZ2lucmlnaHRcIj7ot7Povazoh7Pmkq3mlL7orrDlv4Y8L3RleHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuYm94XCIgQGNsaWNrPVwidGFwUmVtZWJlclwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNtLXRpdGxlXCIgOnN0eWxlPVwie2NvbG9yfVwiPnt7cmVtZW1iZXJDdXJyZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIOa7keWKqHZpZGVv5pe25pi+56S6IC0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjdXJyZW50LXZpZXcgZmxleFwiIHYtaWY9XCJ0b3VjaFR5cGU9PSdjdXJyZW50J1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImN1cnJlbnQtdG9wXCI+PHRleHQgY2xhc3M9XCJpb3MtdGl0bGVcIj57e3RvdWNoQ3VycmVudER1cmF0aW9ufX0ve3tsYXN0RHVyYXRpb259fTwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjdXJyZW50LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3VycmVudC1wcm9ncmVzc1wiIDpzdHlsZT1cInt3aWR0aDogYCR7dG91Y2hDdXJyZW50L2R1cmF0aW9uKjI2MH1ycHhgfVwiPiA8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8IS0tIOaSreaUvumAn+eOhyAtLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyYXRlIGZsZXhcIiBAY2xpY2suc3RvcD1cIlwiIHYtaWY9XCJyYXRlVmlldyYmIWZ1bGxTY3JlZW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmF0ZSBmbGV4XCIgQGNsaWNrLnN0b3A9XCJyYXRlVmlldz1mYWxzZVwiIDpzdHlsZT1cIntwYWRkaW5nVG9wOiAnNDBweCd9XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlvcy10aXRsZVwiPuWAjemAn+aSreaUvjwvdGV4dD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyYXRlLWxpc3QgZmxleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlvcy10aXRsZSBtYXJnaW5SaWdodFwiIDpjbGFzcz1cIjAuNT09cmF0ZT8nc29saWQtYm90dG9tJzonJ1wiIEBjbGljay5zdG9wPVwiKGFyZ3MpPT50YXBSYXRlKGFyZ3MsMC41KVwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJ7Y29sb3I6MC41PT1yYXRlP2NvbG9yOicjZmZmJyxib3JkZXJCb3R0b21Db2xvcjowLjU9PXJhdGU/Y29sb3I6JyNmZmYnfVwiPjAuNXg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW9zLXRpdGxlIG1hcmdpblJpZ2h0XCIgOmNsYXNzPVwiMC44PT1yYXRlPydzb2xpZC1ib3R0b20nOicnXCIgQGNsaWNrLnN0b3A9XCIoYXJncyk9PnRhcFJhdGUoYXJncywwLjgpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIntjb2xvcjowLjg9PXJhdGU/Y29sb3I6JyNmZmYnLGJvcmRlckJvdHRvbUNvbG9yOjAuOD09cmF0ZT9jb2xvcjonI2ZmZid9XCI+MC44eDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpb3MtdGl0bGUgbWFyZ2luUmlnaHRcIiA6Y2xhc3M9XCIxLjA9PXJhdGU/J3NvbGlkLWJvdHRvbSc6JydcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEuMClcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwie2NvbG9yOjEuMD09cmF0ZT9jb2xvcjonI2ZmZicsYm9yZGVyQm90dG9tQ29sb3I6MS4wPT1yYXRlP2NvbG9yOicjZmZmJ31cIj4xLjB4PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImlvcy10aXRsZSBtYXJnaW5SaWdodFwiIDpjbGFzcz1cIjEuMjU9PXJhdGU/J3NvbGlkLWJvdHRvbSc6JydcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEuMjUpXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cIntjb2xvcjoxLjI1PT1yYXRlP2NvbG9yOicjZmZmJyxib3JkZXJCb3R0b21Db2xvcjoxLjI1PT1yYXRlP2NvbG9yOicjZmZmJ31cIj4xLjI1eDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpb3MtdGl0bGUgbWFyZ2luUmlnaHRcIiA6Y2xhc3M9XCIxLjU9PXJhdGU/J3NvbGlkLWJvdHRvbSc6JydcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEuNSlcIlxyXG5cdFx0XHRcdFx0XHQgOnN0eWxlPVwie2NvbG9yOjEuNT09cmF0ZT9jb2xvcjonI2ZmZicsYm9yZGVyQm90dG9tQ29sb3I6MS41PT1yYXRlP2NvbG9yOicjZmZmJ31cIj4xLjV4PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMgLS0+XHJcblxyXG5cclxuXHRcdFx0PCEtLSDlhajlsY8gLS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwidmlkZW8tdmlld1wiIHYtaWY9XCJmdWxsU2NyZWVuXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGh9cHhgLGhlaWdodDogYCR7aXNXaWRlU2NyZWVuP2Z1bGxDb250cm9sc0hlaWd0OmlzV2lkZUZ1bGxDb250cm9sc0hlaWdodH1weGAgfVwiPlxyXG5cdFx0XHRcdDxkaXYgdi1pZj1cImRhbm11Vmlld1wiIGNsYXNzPVwiZGFubXUtdmlld1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke2Z1bGxDb250cm9sc1dpZHRofXB4YCB9XCI+XHJcblx0XHRcdFx0XHQ8Y2h1bkxlaS1kYW5tdSA6ZGFubXVMaXN0PVwiZGFubXVMaXN0XCIgOndpZHRoPVwiZnVsbENvbnRyb2xzV2lkdGhcIiA6cGxhdGZvcm09XCJwbGF0Zm9ybVwiIDpjdXJyZW50PVwiY3VycmVudFwiIHJlZj1cImRhbm11XCI+PC9jaHVuTGVpLWRhbm11PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb3ZlLXZpZXdcIiBAdG91Y2hlbmQ9XCJ2aWRlb1RvdWNoRW5kXCIgQHRvdWNobW92ZT1cInZpZGVvVG91Y2hNb3ZlXCIgQHRvdWNoc3RhcnQ9XCJ2aWRlb1RvdWNoU3RhcnRcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtmdWxsQ29udHJvbHNXaWR0aH1weGAsaGVpZ2h0OiBgJHtpc1dpZGVTY3JlZW4/ZnVsbENvbnRyb2xzSGVpZ3Q6aXNXaWRlRnVsbENvbnRyb2xzSGVpZ2h0fXB4YCB9XCI+PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdG9wXCIgdi1pZj1cIiFwbGF5XCI+PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiPuW3suaaguWBnDwvdGV4dD48L2Rpdj5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHJcblx0XHRcdDwhLS0g5a+86Iiq5qCH6aKYIC0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvbnRyb2xzLXRvcFwiIHJlZj1cImNvbnRyb2xzVG9wXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGh9cHhgIH1cIiBAY2xpY2suc3RvcD1cIlwiIHYtaWY9XCJmdWxsU2NyZWVuJiZzaG93Q29udHJvbHMmJiFsb2NrXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRvcC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuQm94XCIgQGNsaWNrPVwidGFwRnVsbFNjcmVlblwiPjx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1pY29uYFwiPiYjeGU2MGE7PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiPnt7dGl0bGVTdWJ9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9wLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuQm94XCIgQGNsaWNrPVwiZGFubXVWaWV3PWZhbHNlXCIgdi1pZj1cImRhbm11VmlldyYmZGFubXVMaXN0Lmxlbmd0aCE9MFwiPjx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1pY29uYFwiXHJcblx0XHRcdFx0XHRcdCA6c3R5bGU9XCJ7Y29sb3I6Y29sb3J9XCI+JiN4ZTYwNDs8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuQm94XCIgQGNsaWNrPVwiZGFubXVWaWV3PXRydWVcIiB2LWlmPVwiIWRhbm11VmlldyYmZGFubXVMaXN0Lmxlbmd0aCE9MFwiPjx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1pY29uYFwiXHJcblx0XHRcdFx0XHRcdCBzdHlsZT1cImNvbG9yOiNGRkZcIj4mI3hlOGRlOzwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5Cb3ggbWFyZ2luUmlnaHRcIiBAY2xpY2s9XCJjbGlja01vcmVWaWV3XCI+PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCI+JiN4ZTY0Njs8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG93ZXItdmlld1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG93ZXItYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBvd2VyLWhlYWRlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3dlci1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG93ZXItbGV2ZWxcIiA6c3R5bGU9XCJ7IHdpZHRoOmAkezE2KmxldmVsfXB4YCxiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyB9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tc20tdGl0bGVgXCI+e3tub3dUaW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJzZXQtdmlld1wiIHYtaWY9XCJmdWxsU2NyZWVuJiYocmF0ZVZpZXd8fHNyY1ZpZXd8fG1vcmVWaWV3fHxlcGlzb2RlVmlldylcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtmdWxsQ29udHJvbHNXaWR0aH1weGAsIGhlaWdodDpgJHtpc1dpZGVTY3JlZW4/ZnVsbENvbnRyb2xzSGVpZ3Q6aXNXaWRlRnVsbENvbnRyb2xzSGVpZ2h0fXB4YH1cIj5cclxuXHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8ncmF0ZS1zZXQnOid3aWRlLXNjcmVlbi1yYXRlLXNldCdcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtmdWxsQ29udHJvbHNXaWR0aH1weGAsaGVpZ2h0OmAke2lzV2lkZVNjcmVlbj9mdWxsQ29udHJvbHNIZWlndDppc1dpZGVGdWxsQ29udHJvbHNIZWlnaHR9cHhgIH1cIlxyXG5cdFx0XHRcdCB2LWlmPVwicmF0ZVZpZXdcIiBAY2xpY2suc3RvcD1cImNsaWNrUmF0ZVZpZXdcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctdGl0bGVgXCIgOnN0eWxlPVwieyBtYXJnaW5Cb3R0b206ICc0MHB4JyB9XCI+5pKt5pS+6YCf5bqmPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInNldC1ib3R0b21cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJbKDAuNT09cmF0ZT8nc29saWQtYm90dG9tJzonJyksKGlzV2lkZVNjcmVlbj8nc2V0Qm94Jzond2lkdGgtc2NyZWVuLXNldC1ib3gnKV1cIiA6c3R5bGU9XCJ7Ym9yZGVyQm90dG9tQ29sb3I6MC41PT1yYXRlP2NvbG9yOicjZmZmJ31cIlxyXG5cdFx0XHRcdFx0XHQgQGNsaWNrLnN0b3A9XCIoYXJncyk9PnRhcFJhdGUoYXJncywwLjUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy10aXRsZWBcIiA6c3R5bGU9XCJ7Y29sb3I6MC41PT1yYXRlP2NvbG9yOicjZmZmJywnZm9udFNpemUnOmlzV2lkZVNjcmVlbj8nJzonMTRweCd9XCI+MC41eDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiWygwLjg9PXJhdGU/J3NvbGlkLWJvdHRvbSc6JycpLChpc1dpZGVTY3JlZW4/J3NldEJveCc6J3dpZHRoLXNjcmVlbi1zZXQtYm94JyldXCIgOnN0eWxlPVwie2JvcmRlckJvdHRvbUNvbG9yOjAuOD09cmF0ZT9jb2xvcjonI2ZmZid9XCJcclxuXHRcdFx0XHRcdFx0IEBjbGljay5zdG9wPVwiKGFyZ3MpPT50YXBSYXRlKGFyZ3MsMC44KVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctdGl0bGVgXCIgOnN0eWxlPVwie2NvbG9yOjAuOD09cmF0ZT9jb2xvcjonI2ZmZicsJ2ZvbnRTaXplJzppc1dpZGVTY3JlZW4/Jyc6JzE0cHgnfVwiPjAuOHg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cIlsoMS4wPT1yYXRlPydzb2xpZC1ib3R0b20nOicnKSwoaXNXaWRlU2NyZWVuPydzZXRCb3gnOid3aWR0aC1zY3JlZW4tc2V0LWJveCcpXVwiIDpzdHlsZT1cIntib3JkZXJCb3R0b21Db2xvcjoxLjA9PXJhdGU/Y29sb3I6JyNmZmYnfVwiXHJcblx0XHRcdFx0XHRcdCBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy10aXRsZWBcIiA6c3R5bGU9XCJ7Y29sb3I6MS4wPT1yYXRlP2NvbG9yOicjZmZmJywnZm9udFNpemUnOmlzV2lkZVNjcmVlbj8nJzonMTRweCd9XCI+MS4weDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiWygxLjI1PT1yYXRlPydzb2xpZC1ib3R0b20nOicnKSwoaXNXaWRlU2NyZWVuPydzZXRCb3gnOid3aWR0aC1zY3JlZW4tc2V0LWJveCcpXVwiIDpzdHlsZT1cIntib3JkZXJCb3R0b21Db2xvcjoxLjI1PT1yYXRlP2NvbG9yOicjZmZmJ31cIlxyXG5cdFx0XHRcdFx0XHQgQGNsaWNrLnN0b3A9XCIoYXJncyk9PnRhcFJhdGUoYXJncywxLjI1KVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctdGl0bGVgXCIgOnN0eWxlPVwie2NvbG9yOjEuMjU9PXJhdGU/Y29sb3I6JyNmZmYnLCdmb250U2l6ZSc6aXNXaWRlU2NyZWVuPycnOicxNHB4J31cIj4xLjI1eDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiWygxLjU9PXJhdGU/J3NvbGlkLWJvdHRvbSc6JycpLChpc1dpZGVTY3JlZW4/J3NldEJveCc6J3dpZHRoLXNjcmVlbi1zZXQtYm94JyldXCIgOnN0eWxlPVwie2JvcmRlckJvdHRvbUNvbG9yOjEuNT09cmF0ZT9jb2xvcjonI2ZmZid9XCJcclxuXHRcdFx0XHRcdFx0IEBjbGljay5zdG9wPVwiKGFyZ3MpPT50YXBSYXRlKGFyZ3MsMS41KVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctdGl0bGVgXCIgOnN0eWxlPVwie2NvbG9yOjEuNT09cmF0ZT9jb2xvcjonI2ZmZicsJ2ZvbnRTaXplJzppc1dpZGVTY3JlZW4/Jyc6JzE0cHgnfVwiPjEuNXg8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJhdGUtc2V0XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGh9cHhgLGhlaWdodDogYCR7aXNXaWRlU2NyZWVuP2Z1bGxDb250cm9sc0hlaWd0OmlzV2lkZUZ1bGxDb250cm9sc0hlaWdodH1weGAgfVwiXHJcblx0XHRcdFx0IHYtaWY9XCJzcmNWaWV3XCIgQGNsaWNrLnN0b3A9XCJjbGlja1NyY1ZpZXdcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctdGl0bGVgXCIgOnN0eWxlPVwieyBtYXJnaW5Cb3R0b206ICc0MHB4JyB9XCI+e3tzcmNUaXRsZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZXQtYm90dG9tXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzZXRCb3hcIiA6Y2xhc3M9XCJzcmNUaXRsZT09aXRlbS50aXRsZT8nc29saWQtYm90dG9tJzonJ1wiIDpzdHlsZT1cIntib3JkZXJCb3R0b21Db2xvcjpzcmNUaXRsZT09aXRlbS50aXRsZT9jb2xvcjonI2ZmZid9XCJcclxuXHRcdFx0XHRcdFx0IEBjbGljay5zdG9wPVwiKGFyZ3MpPT50YXBTcmMoYXJncyxpdGVtKVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNyY0xpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tYmlnLXRpdGxlYFwiIDpzdHlsZT1cIntjb2xvcjpzcmNUaXRsZT09aXRlbS50aXRsZT9jb2xvcjonI2ZmZid9XCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J21vcmUtc2V0JzonbW9yZS1zZXQtd2lkdGgtc2NyZWVuJ1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke2Z1bGxDb250cm9sc1dpZHRofXB4YCxoZWlnaHQ6IGAke2lzV2lkZVNjcmVlbj9mdWxsQ29udHJvbHNIZWlndDppc1dpZGVGdWxsQ29udHJvbHNIZWlnaHR9cHhgIH1cIlxyXG5cdFx0XHRcdCB2LWlmPVwibW9yZVZpZXdcIiBAY2xpY2suc3RvcD1cImNsaWNrTW9yZVZpZXdcIj5cclxuXHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLXJvdyc6J21vcmUtcm93LXdpZHRoLXNjcmVlbidcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J21vcmUtYm94JzonbW9yZS1ib3gtd2lkdGgtc2NyZWVuJ1wiIEBjbGljay5zdG9wPVwiY2xpY2tMb29wXCIgdi1pZj1cIiFsb29wXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy1pY29uYFwiIHN0eWxlPVwiY29sb3I6I0ZGRlwiPiYjeGU2NTc7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiBzdHlsZT1cImNvbG9yOiNGRkZcIj7lvqrnjq/mkq3mlL48L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8nbW9yZS1ib3gnOidtb3JlLWJveC13aWR0aC1zY3JlZW4nXCIgQGNsaWNrLnN0b3A9XCJjbGlja0xvb3BcIiB2LWlmPVwibG9vcFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctaWNvbmBcIiA6c3R5bGU9XCJ7Y29sb3I6Y29sb3J9XCI+JiN4ZTYzYjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cIntjb2xvcjpjb2xvcn1cIj7lj5bmtojlvqrnjq88L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8nbW9yZS1ib3gnOidtb3JlLWJveC13aWR0aC1zY3JlZW4nXCIgQGNsaWNrLnN0b3A9XCJjbGlja0Z1bGxcIiB2LWlmPVwiIWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tYmlnLWljb25gXCIgc3R5bGU9XCJjb2xvcjojRkZGXCI+JiN4ZTYwMjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIHN0eWxlPVwiY29sb3I6I0ZGRlwiPuaSkea7oeWFqOWxjzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLWJveCc6J21vcmUtYm94LXdpZHRoLXNjcmVlbidcIiBAY2xpY2suc3RvcD1cImNsaWNrRnVsbFwiIHYtaWY9XCJmdWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy1pY29uYFwiIDpzdHlsZT1cIntjb2xvcjpjb2xvcn1cIj4mI3hlNzhhOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwie2NvbG9yOmNvbG9yfVwiPuaBouWkjeS4jeaSkea7oTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLWJveCc6J21vcmUtYm94LXdpZHRoLXNjcmVlbidcIiBAY2xpY2suc3RvcD1cImNsaWNrQXVkaW9cIiB2LWlmPVwiIWF1ZGlvRmxhZyYmYXVkaW8hPScnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy1pY29uYFwiIHN0eWxlPVwiY29sb3I6I0ZGRlwiPiYjeGU2MDY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiBzdHlsZT1cImNvbG9yOiNGRkZcIj7lkI7lj7Dpn7PpopHmkq3mlL48L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8nbW9yZS1ib3gnOidtb3JlLWJveC13aWR0aC1zY3JlZW4nXCIgQGNsaWNrLnN0b3A9XCJhdWRpb0ZsYWc9ZmFsc2VcIiB2LWlmPVwiYXVkaW9GbGFnJiZhdWRpbyE9JydcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tYmlnLWljb25gXCIgOnN0eWxlPVwie2NvbG9yOmNvbG9yfVwiPiYjeGU2MDU7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7Y29sb3I6Y29sb3J9XCI+5ZCO5Y+w6Z+z6aKR5pKt5pS+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J21vcmUtYm94JzonbW9yZS1ib3gtd2lkdGgtc2NyZWVuJ1wiIEBjbGljay5zdG9wPVwiY2xpY2tEb3dubG9hZFwiIHYtaWY9XCIhZG93bmxvYWQmJmRvd25sb2FkQnRuXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWJpZy1pY29uYFwiIHN0eWxlPVwiY29sb3I6I0ZGRlwiPiYjeGU2Y2Y7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiBzdHlsZT1cImNvbG9yOiNGRkZcIj7kuIvovb08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8nbW9yZS1ib3gnOidtb3JlLWJveC13aWR0aC1zY3JlZW4nXCIgQGNsaWNrLnN0b3A9XCJjbGlja0Rvd25sb2FkXCIgdi1pZj1cImRvd25sb2FkJiZkb3dubG9hZEJ0blwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1iaWctaWNvbmBcIiA6c3R5bGU9XCJ7Y29sb3I6Y29sb3J9XCI+JiN4ZTZjZjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cIntjb2xvcjpjb2xvcn1cIj7kuIvovb3kuK08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9yZS10YXBcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLXJvdyc6J21vcmUtcm93LXdpZHRoLXNjcmVlbidcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J21vcmUtYm94JzonbW9yZS1ib3gtd2lkdGgtc2NyZWVuJ1wiPjx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIj7mkq3mlL7pgJ/luqY8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxzY3JvbGwtdmlldyA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J3Njcm9sbC12aWV3Jzonc2Nyb2xsLXZpZXctd2lkZS1zY3JlZW4nXCIgc2Nyb2xsLXg9XCJ0cnVlXCIgOnNjcm9sbC1sZWZ0PVwiMS41PT1yYXRlPzIwMDowXCJcclxuXHRcdFx0XHRcdFx0IDpzdHlsZT1cInsgd2lkdGg6IGAke2lzV2lkZVNjcmVlbj8oZnVsbENvbnRyb2xzV2lkdGgtMzIwKTpmdWxsQ29udHJvbHNXaWR0aH1weGB9XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJpc1dpZGVTY3JlZW4/J21vcmUtYm94JzonbW9yZS1ib3gtd2lkdGgtc2NyZWVuJ1wiIEBjbGljay5zdG9wPVwiKGFyZ3MpPT50YXBSYXRlKGFyZ3MsMC41KVwiPjx0ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHQgY2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOmNsYXNzPVwiMC41PT1yYXRlPydzb2xpZC1ib3R0b20nOicnXCIgOnN0eWxlPVwie2NvbG9yOjAuNT09cmF0ZT9jb2xvcjonI2ZmZicsYm9yZGVyQm90dG9tQ29sb3I6MC41PT1yYXRlP2NvbG9yOicjZmZmJ31cIj4wLjV4PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLWJveCc6J21vcmUtYm94LXdpZHRoLXNjcmVlbidcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDAuOClcIj48dGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0IGNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpjbGFzcz1cIjAuOD09cmF0ZT8nc29saWQtYm90dG9tJzonJ1wiIDpzdHlsZT1cIntjb2xvcjowLjg9PXJhdGU/Y29sb3I6JyNmZmYnLGJvcmRlckJvdHRvbUNvbG9yOjAuOD09cmF0ZT9jb2xvcjonI2ZmZid9XCI+MC44eDwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cImlzV2lkZVNjcmVlbj8nbW9yZS1ib3gnOidtb3JlLWJveC13aWR0aC1zY3JlZW4nXCIgQGNsaWNrLnN0b3A9XCIoYXJncyk9PnRhcFJhdGUoYXJncywxKVwiPjx0ZXh0IGNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiXHJcblx0XHRcdFx0XHRcdFx0XHQgOmNsYXNzPVwiMS4wPT1yYXRlPydzb2xpZC1ib3R0b20nOicnXCIgOnN0eWxlPVwie2NvbG9yOjEuMD09cmF0ZT9jb2xvcjonI2ZmZicsYm9yZGVyQm90dG9tQ29sb3I6MS4wPT1yYXRlP2NvbG9yOicjZmZmJ31cIj4xLjB4PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLWJveCc6J21vcmUtYm94LXdpZHRoLXNjcmVlbidcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEuMjUpXCI+PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdCBjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6Y2xhc3M9XCIxLjI1PT1yYXRlPydzb2xpZC1ib3R0b20nOicnXCIgOnN0eWxlPVwie2NvbG9yOjEuMjU9PXJhdGU/Y29sb3I6JyNmZmYnLGJvcmRlckJvdHRvbUNvbG9yOjEuMjU9PXJhdGU/Y29sb3I6JyNmZmYnfVwiPjEuMjV4PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiaXNXaWRlU2NyZWVuPydtb3JlLWJveCc6J21vcmUtYm94LXdpZHRoLXNjcmVlbidcIiBAY2xpY2suc3RvcD1cIihhcmdzKT0+dGFwUmF0ZShhcmdzLDEuNSlcIj48dGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0IGNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpjbGFzcz1cIjEuNT09cmF0ZT8nc29saWQtYm90dG9tJzonJ1wiIDpzdHlsZT1cIntjb2xvcjoxLjU9PXJhdGU/Y29sb3I6JyNmZmYnLGJvcmRlckJvdHRvbUNvbG9yOjEuNT09cmF0ZT9jb2xvcjonI2ZmZid9XCI+MS41eDwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJlcGlzb2RlLXNldFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2Z1bGxDb250cm9sc1dpZHRofXB4YCxoZWlnaHQ6IGAke2lzV2lkZVNjcmVlbj9mdWxsQ29udHJvbHNIZWlndDppc1dpZGVGdWxsQ29udHJvbHNIZWlnaHR9cHhgIH1cIlxyXG5cdFx0XHRcdCB2LWlmPVwiZXBpc29kZVZpZXdcIiBAY2xpY2suc3RvcD1cImNsaWNrRXBpc29kZVZpZXdcIj5cclxuXHRcdFx0XHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteCBjbGFzcz1cInNjcm9sbC12aWV3XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGgtMjAwfXB4YCxoZWlnaHQ6IGAke2lzV2lkZVNjcmVlbj9mdWxsQ29udHJvbHNIZWlndDppc1dpZGVGdWxsQ29udHJvbHNIZWlnaHQtNDB9cHhgIH1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVwaXNvZGUtc2Nyb2xsXCIgOnN0eWxlPVwie2hlaWdodDogYCR7aXNXaWRlU2NyZWVuP2Z1bGxDb250cm9sc0hlaWd0OmlzV2lkZUZ1bGxDb250cm9sc0hlaWdodC00MH1weGAsd2lkdGg6IGAkezc1KmVwaXNvZGUvNH1weGAgfVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcGlCb3hcIiB2LWZvcj1cImNvdW50IGluIGVwaXNvZGVcIiA6a2V5PVwiY291bnRcIiBAY2xpY2s9XCJjbGlja0VwaXNvZGUoY291bnQpXCIgOmNsYXNzPVwiY291bnQ9PWluZGV4Pydzb2xpZC1ib3R0b20nOicnXCJcclxuXHRcdFx0XHRcdFx0XHQgOnN0eWxlPVwie2JvcmRlckJvdHRvbUNvbG9yOmNvdW50PT1pbmRleD9jb2xvcjonI2ZmZid9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwie2NvbG9yOmNvdW50PT1pbmRleD9jb2xvcjonI2ZmZid9XCI+e3tjb3VudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8IS0tIOa7keWKqHZpZGVv5pe25pi+56S6IC0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImZ1bGxDdXJyZW50LWN1cnJlbnRcIiB2LWlmPVwiZnVsbFNjcmVlbiYmdG91Y2hUeXBlPT0nY3VycmVudCdcIiA6c3R5bGU9XCJ7IGxlZnQ6IGAke2Z1bGxDb250cm9sc1dpZHRoLzItNzV9cHhgfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmdWxsQ3VycmVudC10b3BcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIj57e3RvdWNoQ3VycmVudER1cmF0aW9ufX0ve3tsYXN0RHVyYXRpb259fTwvdGV4dD5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDdXJyZW50LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImN1cnJlbnQtcHJvZ3Jlc3NcIiA6c3R5bGU9XCJ7d2lkdGg6IGAke3RvdWNoQ3VycmVudC9kdXJhdGlvbioxMTB9cHhgfVwiPiA8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0PCEtLSDmu5Hliqh2aWRlb+aXtuaYvuekuumfs+mHjyAtLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJmdWxsQ3VycmVudC12aWV3XCIgdi1pZj1cImZ1bGxTY3JlZW4mJnRvdWNoVHlwZT09J3ZvbHVtZScmJnBsYXRmb3JtPT0nYW5kcm9pZCdcIiA6c3R5bGU9XCJ7IGxlZnQ6IGAke2Z1bGxDb250cm9sc1dpZHRoLzItNzV9cHhgfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXJnaW5SaWdodFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCIgdi1pZj1cInRvdWNoVm9sdW1lPT0wXCI+JiN4ZTY1NDs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0taWNvbmBcIiB2LWlmPVwidG91Y2hWb2x1bWU+MCYmdG91Y2hWb2x1bWU8MC4zM1wiPiYjeGU3Nzk7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCIgdi1pZj1cInRvdWNoVm9sdW1lPj0wLjMzJiZ0b3VjaFZvbHVtZTwwLjY2XCI+JiN4ZTYwMzs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0taWNvbmBcIiB2LWlmPVwidG91Y2hWb2x1bWU+PTAuNjYmJnRvdWNoVm9sdW1lPD0xXCI+JiN4ZTYxYjs8L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDdXJyZW50LXZvbHVtZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDdXJyZW50LXZvbHVtZS1sZWZ0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbEN1cnJlbnQtdm9sdW1lLXJpZ2h0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbEN1cnJlbnQtcHJvZ3Jlc3NcIiA6c3R5bGU9XCJ7d2lkdGg6IGAkezE1MS10b3VjaFZvbHVtZSoxNTB9cHhgfVwiPiA8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8IS0tIOa7keWKqHZpZGVv5pe25pi+56S65Lqu5bqmIC0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImZ1bGxDdXJyZW50LXZpZXdcIiB2LWlmPVwiZnVsbFNjcmVlbiYmdG91Y2hUeXBlPT0nYnJpZ2h0JyYmcGxhdGZvcm09PSdhbmRyb2lkJ1wiIDpzdHlsZT1cInsgbGVmdDogYCR7ZnVsbENvbnRyb2xzV2lkdGgvMi03NX1weGB9XCI+XHJcblx0XHRcdFx0PGNodW5MZWktbW9vbiA6cGVyY2VudGFnZT1cInRvdWNoQnJpZ2h0XCI+PC9jaHVuTGVpLW1vb24+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDdXJyZW50LWJyaWdodFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDdXJyZW50LWJyaWdodC1sZWZ0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbEN1cnJlbnQtYnJpZ2h0LXJpZ2h0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbEN1cnJlbnQtcHJvZ3Jlc3NcIiA6c3R5bGU9XCJ7d2lkdGg6IGAkezE1MS10b3VjaEJyaWdodCoxNTB9cHhgfVwiPiA8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJmdWxsQ29udHJvbHMtdmlld1wiIHJlZj1cImNvbnRyb2xzQnRtXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGh9cHhgIH1cIiBAY2xpY2suc3RvcD1cIlwiXHJcblx0XHRcdCB2LWlmPVwiZnVsbFNjcmVlbiYmc2hvd0NvbnRyb2xzJiYhbG9ja1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmdWxsQ29udHJvbHMtdG9wXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7ZnVsbENvbnRyb2xzV2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIj57e2N1cnJlbnREdXJhdGlvbn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiPnt7bGFzdER1cmF0aW9ufX08L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZ1bGxDb250cm9scy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxjaHVuTGVpLXNsaWRlciA6bWF4PVwiZHVyYXRpb25cIiA6aW9zRGlyZWN0aW9uPVwicGxhdGZvcm0hPSdpb3MnPzE6LWRpcmVjdGlvbi85MFwiIDp2YWx1ZT1cImN1cnJlbnRcIiA6c3R5bGU9XCJ7d2lkdGg6YCR7ZnVsbENvbnRyb2xzV2lkdGgtNDB9cHhgfVwiXHJcblx0XHRcdFx0XHQgOnNjcmVlbkxlZnQ9XCI0MFwiIDp3aWR0aD1cImZ1bGxDb250cm9sc1dpZHRoLTQwXCIgQGNoYW5nZT1cImNoYW5nZUN1cnJlbnRcIiA6cmF0aW89XCIxXCIgOmRpcmVjdGlvbj1cInBsYXRmb3JtIT0naW9zJz8nc2NyZWVuWCc6J3NjcmVlblknXCJcclxuXHRcdFx0XHRcdCA6YmFja2dyb3VuZENvbG9yPVwiY29sb3JcIiA6YmxvY2tDb2xvcj1cImNvbG9yXCI+PC9jaHVuTGVpLXNsaWRlcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbENvbnRyb2xzLWJvdHRvbVwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2Z1bGxDb250cm9sc1dpZHRofXB4YCB9XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZnVsbENvbnRyb2xzLWJvdHRvbS1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5Cb3hcIiBAY2xpY2s9XCJ2aWRlb1BsYXlcIiB2LWlmPVwicGxheVwiPjx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS1pY29uYFwiPiYjeGU2MDE7PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuQm94XCIgQGNsaWNrPVwidmlkZW9QbGF5XCIgdi1pZj1cIiFwbGF5XCI+PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCI+JiN4ZTg5Njs8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmdWxsQ29udHJvbHMtYm90dG9tLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXJnaW5SaWdodFwiIEBjbGljaz1cImNsaWNrUmF0ZVZpZXdcIj48dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCI+e3tyYXRlfX14PC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFyZ2luUmlnaHRcIiB2LWlmPVwic3JjVGl0bGUhPScnXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlLWJveGBcIiBAY2xpY2s9XCJjbGlja1NyY1ZpZXdcIiB2LWlmPVwic3JjVGl0bGUhPScnXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXNyY1RpdGxlYFwiPnt7c3JjVGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYXJnaW5SaWdodFwiIHYtaWY9XCJlcGlzb2RlIT0wXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiBAY2xpY2s9XCJjbGlja0VwaXNvZGVWaWV3XCIgc3R5bGU9XCJtYXJnaW5MZWZ0OjIwcnB4XCIgdi1pZj1cImVwaXNvZGUhPTBcIj7pgInpm4Y8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8Y292ZXItdmlldyA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tbG9ja2BcIiBAY2xpY2suc3RvcD1cImNsaWNrTG9ja1wiIHYtaWY9XCJmdWxsU2NyZWVuJiZzaG93Q29udHJvbHNcIiA6c3R5bGU9XCJ7IHRvcDogYCR7ZnVsbENvbnRyb2xzSGVpZ3QvMi0zMH1weGB9XCI+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCIgdi1pZj1cIiFsb2NrXCI+JiN4ZThkZDs8L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCIgdi1pZj1cImxvY2tcIj4mI3hlNjFkOzwvdGV4dD5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImZ1bGxDb250cm9scy1yZW1lbWJlclwiIEBjbGljay5zdG9wPVwiY2xpY2tMb2NrXCIgdi1pZj1cImZ1bGxTY3JlZW4mJmluaXRpYWxUaW1lIT0wJiZyZW1lYmVyJiZwbGF5XCI+XHJcblxyXG5cdFx0XHRcdDxkaXYgQGNsaWNrPVwicmVtZWJlcj0hcmVtZWJlclwiIGNsYXNzPVwiYnRuYm94XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1hcmdpbnJpZ2h0XCIgOmNsYXNzPVwiYCR7cGxhdGZvcm19LWljb25gXCI+JiN4ZTYwNzs8L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJtYXJnaW5yaWdodFwiIDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIj7ot7Povazoh7Pmkq3mlL7orrDlv4Y8L3RleHQ+XHJcblx0XHRcdFx0PGRpdiBAY2xpY2s9XCJ0YXBSZW1lYmVyXCIgY2xhc3M9XCJidG5ib3hcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7Y29sb3J9XCI+e3tyZW1lbWJlckN1cnJlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8L3ZpZGVvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGNodW5MZWlTbGlkZXIgZnJvbSAnLi9jaHVuTGVpLXNsaWRlci9jaHVuTGVpLXNsaWRlci5udnVlJztcclxuXHQvLyNpZmRlZiBBUFAtTlZVRVxyXG5cdGltcG9ydCBjaHVuTGVpRGFubXUgZnJvbSAnLi9jaHVuTGVpLWRhbm11L2NodW5MZWktZGFubXUubnZ1ZSc7XHJcblx0Ly8jZW5kaWZcclxuXHRpbXBvcnQgY2h1bkxlaU1vb24gZnJvbSAnLi9jaHVuTGVpLW1vb24vY2h1bkxlaS1tb29uLm52dWUnO1xyXG5cclxuXHQvLyNpZmRlZiBBUFAtTlZVRVxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XHJcblx0Y29uc3QgbW9kYWwgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ21vZGFsJyk7XHJcblx0Ly8jZW5kaWZcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRjaHVuTGVpU2xpZGVyLFxyXG5cdFx0XHRjaHVuTGVpTW9vbixcclxuXHRcdFx0Ly8jaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0Y2h1bkxlaURhbm11XHJcblx0XHRcdC8vI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZGV2aWNlV2lkdGg6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogNzUwXHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUhlaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiA2MTBcclxuXHRcdFx0fSxcclxuXHRcdFx0c3JjTGlzdDogeyAvL+imgeaSreaUvuinhumikeeahOi1hOa6kOWcsOWdgFxyXG5cdFx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aXRsZTogeyAvL+inhumikeagh+mimFxyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnRHVyYXRpb246IHsgLy/lpKfmpoLmgLvml7bplb9cclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc1dpZGVTY3JlZW46IHsgLy8g5piv5ZCm5a695bGP6KeG6aKRXHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGVwaXNvZGU6IHsgLy/pm4bmlbBcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50U2VuOiB7IC8v6L+b5bqm5p2h54G15pWP5bqmXHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDRcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5kZXg6IHsgLy/lvZPliY3pm4bmlbBcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkYW5tdUxpc3Q6IHsgLy/lvLnluZVcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0OiAoKSA9PiBbXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0aWFsVGltZTogeyAvL+aMh+WumuinhumikeWIneWni+aSreaUvuS9jee9ru+8jOWNleS9jeS4uuenku+8iHPvvInjgIJcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvcjogeyAvL+S4u+mimOminOiJslxyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmNzA2ZidcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG93bmxvYWRCdG46IHsgLy/kuIvovb3mjInpkq5cclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvd25sb2FkOiB7IC8v5LiL6L2954q25oCBXHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdWRpbzogeyAvL+mfs+mikVxyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcmllbnRhdGlvbjogeyAvL+WFqOWxj+S4i+Wxj+W5leaXi+i9rFxyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b3BsYXk6IHsgLy/oh6rliqjmkq3mlL5cclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dGdWxsc2NyZWVuQnRuOiB7IC8v5piv5ZCm5pi+56S65YWo5bGP5oyJ6ZKuXHRcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zdGVyOiB7IC8v6KeG6aKR5bCB6Z2i55qE5Zu+54mHXHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzQmFjazogeyAvL+Wwj+Wxj+i/lOWbnlxyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3JjOiAnJyxcclxuXHRcdFx0XHRzcmNUaXRsZTogJycsIC8v6auY5riF5qCH562+XHJcblx0XHRcdFx0ZHVyYXRpb246IDAsIC8v57K+56Gu5oC75pe26ZW/XHJcblx0XHRcdFx0Y29udHJvbHM6IGZhbHNlLFxyXG5cdFx0XHRcdHZpZGVvQ3R4OiAnJywgLy/op4bpopHkuIrkuIvmlodcclxuXHRcdFx0XHRjdXJyZW50OiAwLCAvL3ZpZGVv6L+b5bqmXHJcblx0XHRcdFx0cGxheTogZmFsc2UsIC8v5pKt5pS+54q25oCBXHJcblx0XHRcdFx0bG9vcDogZmFsc2UsIC8v5b6q546vXHJcblx0XHRcdFx0cmVtZWJlcjogZmFsc2UsIC8v5pKt5pS+6K6w5b+GXHJcblx0XHRcdFx0ZnVsbFNjcmVlbjogZmFsc2UsIC8v5YWo5bGP54q25oCBXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAtOTAsIC8v5YWo5bGP5pa55ZCRXHJcblx0XHRcdFx0b2JqZWN0Rml0OiAnY29udGFpbicsXHJcblx0XHRcdFx0ZnVsbENvbnRyb2xzV2lkdGg6ICcnLCAvL+WFqOWxj+WuvVxyXG5cdFx0XHRcdGZ1bGxDb250cm9sc0hlaWd0OiAwLCAvL+WFqOWxj+mrmFxyXG5cdFx0XHRcdGlzV2lkZUZ1bGxDb250cm9sc0hlaWdodDogMCwgLy8g56qE5bGP6KeG6aKR5YWo5bGP6auYXHJcblx0XHRcdFx0c2hvd0NvbnRyb2xzOiB0cnVlLCAvL+aYvuekuuaOp+WItlxyXG5cdFx0XHRcdG9sZFZhbHVlOiB7fSwgLy/op6bmkbjlvIDlp4sg6L+b5bqm77yM6Z+z6YeP77yM5Lqu5bqmXHJcblx0XHRcdFx0bm93VGltZTogJycsIC8v5b2T5YmN5pe26Ze0XHJcblx0XHRcdFx0bG9jazogZmFsc2UsIC8v6ZSB5bGPXHJcblx0XHRcdFx0b2xkVG91Y2VzOiB7fSxcclxuXHRcdFx0XHR0b3VjaFR5cGU6IG51bGwsIC8v5ruR5Yqo57G75Z6LXHJcblx0XHRcdFx0cGxhdGZvcm06ICcnLCAvL+ezu+e7n1xyXG5cdFx0XHRcdHJhdGU6ICcxLjAnLFxyXG5cdFx0XHRcdHJhdGVWaWV3OiBmYWxzZSwgLy/lgI3pgJ9cclxuXHRcdFx0XHRzcmNWaWV3OiBmYWxzZSwgLy/liIfmjaJcclxuXHRcdFx0XHRtb3JlVmlldzogZmFsc2UsIC8v5pu05aSaXHJcblx0XHRcdFx0ZGFubXVWaWV3OiB0cnVlLCAvL+W8ueW5lVxyXG5cdFx0XHRcdGVwaXNvZGVWaWV3OiBmYWxzZSwgLy/pgInpm4ZcclxuXHRcdFx0XHRmdWxsOiBmYWxzZSwgLy/mkpHmu6HlhajlsY9cclxuXHRcdFx0XHRwbGF5Rmlyc3Q6IHRydWUsIC8v56ys5LiA5qyh5pKt5pS+XHJcblx0XHRcdFx0cmF0ZUxpc3Q6IFsnMC41JywgJzAuOCcsICcxLjAnLCAnMS4yNScsICcxLjUnXSwgLy/lgI3mlbBcclxuXHRcdFx0XHRkYmxDb3VudDogMCwgLy/lj4zlh7vorqHmlbBcclxuXHRcdFx0XHR0b3VjaEN1cnJlbnQ6IDAsXHJcblx0XHRcdFx0dG91Y2hCcmlnaHQ6IDAsXHJcblx0XHRcdFx0dG91Y2hWb2x1bWU6IDAsXHJcblx0XHRcdFx0cmF0aW86IDEsIC8v5rua5Yqo5p2h5q+U5L6L57O75pWwXHJcblx0XHRcdFx0bGV2ZWw6IDEsIC8v55S16YePXHJcblxyXG5cdFx0XHRcdGF1ZGlvRmxhZzogZmFsc2UsIC8v5ZCO5Y+w6Z+z6aKRXHJcblx0XHRcdFx0aW5uZXJBdWRpb0NvbnRleHQ6IG51bGwsIC8v6Z+z6aKR5LiK5LiL5paHXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRiZWZvcmVDcmVhdGUoKSB7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHR2YXIgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJ0ZXh0aWNvbnNcIixcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJy4uLy4uL3N0YXRpYy9jaHVubGVpLXZpZGVvL3RleHQtaWNvbi50dGYnKVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc1dpZGVTY3JlZW4pIHtcclxuXHRcdFx0XHR0aGlzLmZ1bGxDb250cm9sc1dpZHRoID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0XHJcblx0XHRcdFx0dGhpcy5mdWxsQ29udHJvbHNIZWlndCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoICsgMVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZnVsbENvbnRyb2xzV2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5XaWR0aFxyXG5cdFx0XHRcdHRoaXMuZnVsbENvbnRyb2xzSGVpZ3QgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5XaWR0aCArIDFcclxuXHRcdFx0XHR0aGlzLmlzV2lkZUZ1bGxDb250cm9sc0hlaWdodCA9ICh0aGlzLmZ1bGxDb250cm9sc0hlaWd0ICsgdGhpcy5mdWxsQ29udHJvbHNIZWlndClcclxuXHRcdFx0fVxyXG5cdFx0XHQvL3RoaXMucmF0aW8gPSB0aGlzLmZ1bGxDb250cm9sc1dpZHRoIC8gdGhpcy5mdWxsQ29udHJvbHNIZWlndFxyXG5cclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXRmb3JtID0gZS5wbGF0Zm9ybVxyXG5cdFx0XHRcdFx0dGhpcy5jaGFuZ0RpcmVjdGlvbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdH0sXHJcblx0XHRhc3luYyBtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldExldmVsKClcclxuXHRcdFx0dGhpcy52aWRlb0N0eCA9IHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoYGNodW5sZWlWaWRlb2AsIHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRiYWNrKCkge1xyXG5cdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdC8vIFx0ZGVsdGE6IDFcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2JhY2snKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjaGFuZ1NyYygpIHtcclxuXHRcdFx0XHR0aGlzLnBsYXlGaXJzdCA9IHRydWVcclxuXHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoMTAwKVxyXG5cdFx0XHRcdHRoaXMucGxheUZpcnN0ID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBsYXkoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXkgPSB0cnVlXHJcblxyXG5cdFx0XHRcdC8vaWYodGhpcy5wbGF0Zm9ybT09J2lvcycpIGF3YWl0IHRoaXMucHJvbWlzZSgxNTAwKVxyXG5cdFx0XHRcdHRoaXMudmlkZW9DdHguc2VlaygwKVxyXG5cclxuXHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBsYXliYWNrUmF0ZSh0aGlzLnJhdGUgKiAxKVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy4kcmVmcy5kYW5tdSAhPSAndW5kZWZpbmVkJykgdGhpcy4kcmVmcy5kYW5tdS5jbGVhbkRhbm11KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdEaXJlY3Rpb24oKSB7IC8vIOebkeWQrOenu+WKqOiuvuWkh+aWueWQkVxyXG5cdFx0XHRcdC8vI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0aWYgKHRoaXMub3JpZW50YXRpb24pIHtcclxuXHRcdFx0XHRcdHBsdXMub3JpZW50YXRpb24ud2F0Y2hPcmllbnRhdGlvbihvID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG8uZ2FtbWEgPiA0MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSA5MFxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoby5nYW1tYSA8IC00MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAtOTBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG8uYWxwaGEgPiA0MCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAtOTBcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG8uYWxwaGEgPCAtNDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGlyZWN0aW9uID0gOTBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sICgpID0+IHt9LCB7XHJcblx0XHRcdFx0XHRcdGZyZXF1ZW5jeTogMTAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIHBhZ2VTaG93KCkgeyAvLyDmmL7npLpcclxuXHRcdFx0XHQvL+aYvuekuuaaguWBnFxyXG5cdFx0XHRcdGlmICh0aGlzLmF1ZGlvICE9ICcnKSB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnBhdXNlKClcclxuXHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKVxyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXkpIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGxheSgpXHJcblx0XHRcdFx0XHQvLyBhd2FpdCB0aGlzLnByb21pc2UoMTAwMClcclxuXHJcblx0XHRcdFx0XHQvL3RoaXMudmlkZW9DdHguc2Vlayh0aGlzLmN1cnJlbnQpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgcGFnZUhpZGUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlbikgdGhpcy52aWRlb0N0eC5leGl0RnVsbFNjcmVlbigpXHJcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5wYXVzZSgpXHJcblx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidmlkZW9DdXJyZW50XCIse3RpdGxlOnRoaXMudGl0bGUsY3VycmVudDp0aGlzLmN1cnJlbnR9KVxyXG5cdFx0XHRcdH1jYXRjaChlcnIpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYOiuvue9ruaSreaUvui/m+W6puWksei0pX5gKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKVxyXG5cdFx0XHRcdC8v5pi+56S65pKt5pS+XHJcblx0XHRcdFx0aWYgKHRoaXMuYXVkaW8gIT0gJycgJiYgdGhpcy5wbGF5ICYmIHRoaXMuYXVkaW9GbGFnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlubmVyQXVkaW9Db250ZXh0LnNlZWsodGhpcy5jdXJyZW50KVxyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckF1ZGlvQ29udGV4dC5vblRpbWVVcGRhdGUoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSB0aGlzLmlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckF1ZGlvQ29udGV4dC5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21pc2UodGltZSA9IDApIHtcclxuXHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdH0sIHRpbWUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aW1ldXBkYXRlKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBldmVudC5kZXRhaWwuZHVyYXRpb25cclxuXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRUaW1lXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmRlZCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubG9vcCkge1xyXG5cdFx0XHRcdFx0Ly/kuIvkuIDpm4ZcclxuXHRcdFx0XHRcdGlmICh0aGlzLmVwaXNvZGUgIT0gMCAmJiB0aGlzLmluZGV4IDwgdGhpcy5lcGlzb2RlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGxheU5leHQoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3YWl0aW5nKCkge1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheWluZygpIHtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5ouW5Yqo5ruR5Z2XXHJcblx0XHRcdGNoYW5nZUN1cnJlbnQoZSkge1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMuY3VycmVudClcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgc2Vlayh0aW1lKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IHRpbWVcclxuXHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnNlZWsodGhpcy5jdXJyZW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+iOt+WPluinhumikeW9k+WJjei/m+W6plxyXG5cdFx0XHRnZXRDdXJyZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiBNYXRoLmZsb29yKHRoaXMuY3VycmVudClcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2tGdWxsKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmZ1bGwpIHtcclxuXHRcdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gJ2NvbnRhaW4nXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMub2JqZWN0Rml0ID0gJ2ZpbGwnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuZnVsbCA9ICF0aGlzLmZ1bGxcclxuXHRcdFx0XHR0aGlzLmNsaWNrTW9yZVZpZXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0Rvd25sb2FkKGUpIHsgLy8g54K55Ye75LiL6L29XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBhdXNlKCk7IC8vIOaaguWBnOaSreaUvlxyXG5cdFx0XHRcdHRoaXMucGxheSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudmlkZW9DdHguZXhpdEZ1bGxTY3JlZW4oKTsgLy8g6YCA5Ye65YWo5bGPXHJcblx0XHRcdFx0Y29uc3QgZXZlbnQgPSB7XHJcblx0XHRcdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcclxuXHRcdFx0XHRcdGRvd25Mb2FkVXJsOiB0aGlzLmRvd25Mb2FkVXJsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrRG93bmxvYWQnLCBldmVudClcclxuXHRcdFx0XHR0aGlzLmNsaWNrTW9yZVZpZXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0xvb3AoZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy5sb29wID0gIXRoaXMubG9vcFxyXG5cdFx0XHRcdHRoaXMuY2xpY2tNb3JlVmlldygpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5YCN6YCf5pKt5pS+XHJcblx0XHRcdHRhcFJhdGUoZSwgcmF0ZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5wbGF5YmFja1JhdGUocmF0ZSAqIDEpXHJcblx0XHRcdFx0dGhpcy5yYXRlID0gcmF0ZVxyXG5cdFx0XHRcdGlmICh0aGlzLmZ1bGxTY3JlZW4pIHtcclxuXHRcdFx0XHRcdHRoaXMuY2xpY2tSYXRlVmlldygpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucmF0ZVZpZXcgPSAhdGhpcy5yYXRlVmlld1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ot7PovazorrDlv4ZcclxuXHRcdFx0dGFwUmVtZWJlcihlKSB7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnNlZWsodGhpcy5pbml0aWFsVGltZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/liIfmjaLpq5jmuIVcclxuXHRcdFx0YXN5bmMgdGFwU3JjKGUsIGl0ZW0pIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50XHJcblx0XHRcdFx0aWYgKHRoaXMuc3JjID09IGl0ZW0uc3JjKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNyYyA9IGl0ZW0uc3JjO1xyXG5cdFx0XHRcdFx0dGhpcy5zcmNUaXRsZSA9IGl0ZW0udGl0bGU7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGBjaHVubGVpVmlkZW9gLCB0aGlzKTtcclxuXHRcdFx0XHRcdHRoaXMucGxheSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBsYXkoKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGxheWJhY2tSYXRlKHRoaXMucmF0ZSAqIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmNsaWNrU3JjVmlldygpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5pqC5YGcXHJcblx0XHRcdHBhdXNlKCkge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9DdHgucGF1c2UoKTtcclxuXHRcdFx0XHR0aGlzLnBsYXkgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyB2aWRlb1BsYXkoKSB7IC8vIOinhumikeaSreaUvlxyXG5cdFx0XHRcdGlmICghdGhpcy5wbGF5KSB7XHJcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoMTAwKVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wbGF5KCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGxheUZpcnN0KSB7XHJcblx0XHRcdFx0XHRcdC8vaWYodGhpcy5wbGF0Zm9ybT09J2lvcycpIGF3YWl0IHRoaXMucHJvbWlzZSgxMDAwKVxyXG5cclxuXHRcdFx0XHRcdFx0Ly90aGlzLnZpZGVvQ3R4LnNlZWsodGhpcy5pbml0aWFsVGltZSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5Rmlyc3QgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY3VycmVudCA+PSB0aGlzLmR1cmF0aW9uKSB0aGlzLmN1cnJlbnQgPSAwXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGF1c2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5wbGF5ID0gIXRoaXMucGxheVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBGdWxsU2NyZWVuKCkgeyAvLyDlhajlsY/kuovku7ZcclxuXHRcdFx0XHR0aGlzLnNob3dDb250cm9scyA9IGZhbHNlXHJcblx0XHRcdFx0aWYgKCF0aGlzLmZ1bGxTY3JlZW4pIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzV2lkZVNjcmVlbikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnJlcXVlc3RGdWxsU2NyZWVuKHtcclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnJlcXVlc3RGdWxsU2NyZWVuKHtcclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb246IDBcclxuXHRcdFx0XHRcdFx0fSkgLy8g6Z2e5a695bGP6KeG6aKRIOeahOWFqOWxj+aooeW8j1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHguZXhpdEZ1bGxTY3JlZW4oKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgY2xpY2tWaWRlbygpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dDb250cm9scyA9ICF0aGlzLnNob3dDb250cm9sc1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjbGlja1JhdGVWaWV3KCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXHJcblx0XHRcdFx0aWYgKHRoaXMubW9yZVZpZXcpIHtcclxuXHRcdFx0XHRcdHRoaXMubW9yZVZpZXcgPSBmYWxzZVxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5yYXRlVmlldyA9ICF0aGlzLnJhdGVWaWV3XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjbGlja0F1ZGlvKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXHJcblx0XHRcdFx0dGhpcy5hdWRpb0ZsYWcgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5tb3JlVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+W8gOWQr+WQjuWPsOmfs+mikeaSreaUvicsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WIh+aNonNyY3RpdGxlXHJcblx0XHRcdGFzeW5jIGNsaWNrU3JjVmlldygpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zcmNMaXN0Lmxlbmd0aCA9PSAxKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnNob3dDb250cm9scyA9ICF0aGlzLnNob3dDb250cm9sc1xyXG5cdFx0XHRcdHRoaXMuc3JjVmlldyA9ICF0aGlzLnNyY1ZpZXdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/pgInpm4ZcclxuXHRcdFx0YXN5bmMgY2xpY2tFcGlzb2RlVmlldyhlKSB7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0dGhpcy5zaG93Q29udHJvbHMgPSAhdGhpcy5zaG93Q29udHJvbHNcclxuXHRcdFx0XHR0aGlzLmVwaXNvZGVWaWV3ID0gIXRoaXMuZXBpc29kZVZpZXdcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ot7PliLDmjIflrprpm4bmlbBcclxuXHRcdFx0Y2xpY2tFcGlzb2RlKGNvdW50KSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgncGxheUVwaScsIGNvdW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBjbGlja01vcmVWaWV3KCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzID0gIXRoaXMuc2hvd0NvbnRyb2xzXHJcblx0XHRcdFx0dGhpcy5tb3JlVmlldyA9ICF0aGlzLm1vcmVWaWV3XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5LiL5LiA6ZuGXHJcblx0XHRcdHBsYXlOZXh0KCkge1xyXG5cdFx0XHRcdHRoaXMucGxheSA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgncGxheUVwaScsIHRoaXMuaW5kZXggKyAxKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0xvY2soZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy5sb2NrID0gIXRoaXMubG9ja1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRlQ29udHJvbHMoZGlzdGFuY2UsIGVsKSB7XHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oZWwsIHtcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMHB4LCAke2Rpc3RhbmNlfXB4KWAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDE1MCwgLy9tc1xyXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlLWluLW91dCcsXHJcblx0XHRcdFx0XHRkZWxheTogMCAvL21zXHJcblx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDop6bmkbjlvIDlp4tcclxuXHRcdFx0dmlkZW9Ub3VjaFN0YXJ0KGUpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5vbGRUb3VjZXMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXHJcblx0XHRcdFx0Ly8g6Kem5pG45byA5aeL55qE5YC8XHJcblx0XHRcdFx0dGhpcy5vbGRWYWx1ZSA9IHtcclxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuY3VycmVudFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0dGhpcy5vbGRWYWx1ZSA9IHtcclxuXHRcdFx0XHRcdC4uLnRoaXMub2xkVmFsdWUsXHJcblx0XHRcdFx0XHR2b2x1bWU6IHBsdXMuZGV2aWNlLmdldFZvbHVtZSgpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHRcdC8vI2lmbmRlZiBINVxyXG5cdFx0XHRcdHVuaS5nZXRTY3JlZW5CcmlnaHRuZXNzKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vbGRWYWx1ZSA9IHtcclxuXHRcdFx0XHRcdFx0XHQuLi50aGlzLm9sZFZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGJyaWdodDogcmVzLnZhbHVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpfmlrnlkJFcclxuXHRcdFx0dmlkZW9Ub3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxvY2spIHJldHVybjtcclxuXHRcdFx0XHRsZXQge1xyXG5cdFx0XHRcdFx0b2xkVG91Y2VzLFxyXG5cdFx0XHRcdFx0b2xkVmFsdWUsXHJcblx0XHRcdFx0XHR0b3VjaFR5cGVcclxuXHRcdFx0XHR9ID0gdGhpc1xyXG5cdFx0XHRcdGxldCBuZXdUb3VjZXMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXHJcblxyXG5cdFx0XHRcdGlmICghdGhpcy50b3VjaFR5cGUpIHtcclxuXHRcdFx0XHRcdC8v6L+b5bqm5o6n5Yi2XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IE1hdGguYWJzKG5ld1RvdWNlcy5wYWdlWCAtIG9sZFRvdWNlcy5wYWdlWCkgPiAyMCA/ICdjdXJyZW50JyA6IG51bGxcclxuXHRcdFx0XHRcdC8v5YWo5bGP5LiL5pSv5oyB6Z+z6YeP5ZKM5Lqu5bqmXHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlbiAmJiAhdGhpcy50b3VjaFR5cGUgJiYgdGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMobmV3VG91Y2VzLnBhZ2VZIC0gb2xkVG91Y2VzLnBhZ2VZKSA+IDIwICYmIG5ld1RvdWNlcy5wYWdlWCA8PSAyMDAgPyAnYnJpZ2h0JyA6IHRoaXMudG91Y2hUeXBlXHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IE1hdGguYWJzKG5ld1RvdWNlcy5wYWdlWSAtIG9sZFRvdWNlcy5wYWdlWSkgPiAyMCAmJiBuZXdUb3VjZXMucGFnZVggPiAyMDAgPyAndm9sdW1lJyA6IHRoaXMudG91Y2hUeXBlXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlbiAmJiB0aGlzLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMobmV3VG91Y2VzLnBhZ2VYIC0gb2xkVG91Y2VzLnBhZ2VYKSA+IDIwID8gJ2JyaWdodCcgOiBudWxsXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIXRoaXMudG91Y2hUeXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyhuZXdUb3VjZXMucGFnZVkgLSBvbGRUb3VjZXMucGFnZVkpID4gMjAgPyAnY3VycmVudCcgOiB0aGlzLnRvdWNoVHlwZVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudG91Y2hUeXBlID09ICd2b2x1bWUnICYmIHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoVm9sdW1lID0gKG9sZFRvdWNlcy5wYWdlWSAtIG5ld1RvdWNlcy5wYWdlWSkgLyAyMDAgKiAxICogMiArIHRoaXMub2xkVmFsdWVbdG91Y2hUeXBlXVxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFZvbHVtZSA9IHRoaXMudG91Y2hWb2x1bWUgPiAxID8gMSA6IHRoaXMudG91Y2hWb2x1bWVcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hWb2x1bWUgPSB0aGlzLnRvdWNoVm9sdW1lIDwgMCA/IDAgOiB0aGlzLnRvdWNoVm9sdW1lXHJcblx0XHRcdFx0XHQvL+ebuOetieaXtumHjee9rm9sZFRvdWNlc1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMudG91Y2hWb2x1bWUgPT0gdGhpcy5vbGRWYWx1ZVt0b3VjaFR5cGVdKSB0aGlzLm9sZFRvdWNlcyA9IG5ld1RvdWNlc1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT0gJ2JyaWdodCcgJiYgdGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hCcmlnaHQgPSAob2xkVG91Y2VzLnBhZ2VZIC0gbmV3VG91Y2VzLnBhZ2VZKSAvIDIwMCAqIDEgKiAyICsgdGhpcy5vbGRWYWx1ZVt0b3VjaFR5cGVdXHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoQnJpZ2h0ID0gdGhpcy50b3VjaEJyaWdodCA+IDEgPyAxIDogdGhpcy50b3VjaEJyaWdodFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaEJyaWdodCA9IHRoaXMudG91Y2hCcmlnaHQgPCAwID8gMCA6IHRoaXMudG91Y2hCcmlnaHRcclxuXHRcdFx0XHRcdC8v55u4562J5pe26YeN572ub2xkVG91Y2VzXHJcblx0XHRcdFx0XHRpZiAodGhpcy50b3VjaEJyaWdodCA9PSB0aGlzLm9sZFZhbHVlW3RvdWNoVHlwZV0pIHRoaXMub2xkVG91Y2VzID0gbmV3VG91Y2VzXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnRvdWNoVHlwZSA9PSAnY3VycmVudCcpIHtcclxuXHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoQ3VycmVudCA9IChuZXdUb3VjZXMucGFnZVggLSBvbGRUb3VjZXMucGFnZVgpICogdGhpcy5kdXJhdGlvbiAvIDI1MCAvIHRoaXMuY3VycmVudFNlbiArIHRoaXMub2xkVmFsdWVbXHJcblx0XHRcdFx0XHRcdHRvdWNoVHlwZV0gKiAxXHJcblx0XHRcdFx0XHRpZiAodGhpcy5wbGF0Zm9ybSA9PSAnaW9zJyAmJiB0aGlzLmZ1bGxTY3JlZW4pIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b3VjaEN1cnJlbnQgPSB0aGlzLmRpcmVjdGlvbiAvIC05MCAqIChuZXdUb3VjZXMucGFnZVkgLSBvbGRUb3VjZXMucGFnZVkpICogdGhpcy5kdXJhdGlvbiAvIDI1MCAvIHRoaXMuY3VycmVudFNlbiArXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5vbGRWYWx1ZVt0b3VjaFR5cGVdICogMVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMudG91Y2hDdXJyZW50ID0gdGhpcy50b3VjaEN1cnJlbnQgPiB0aGlzLmR1cmF0aW9uID8gdGhpcy5kdXJhdGlvbiA6IHRoaXMudG91Y2hDdXJyZW50XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoQ3VycmVudCA9IHRoaXMudG91Y2hDdXJyZW50IDwgMCA/IDAgOiB0aGlzLnRvdWNoQ3VycmVudFxyXG5cdFx0XHRcdFx0Ly/nm7jnrYnml7bph43nva5vbGRUb3VjZXNcclxuXHRcdFx0XHRcdGlmICh0aGlzLnRvdWNoQ3VycmVudCA9PSB0aGlzLm9sZFZhbHVlW3RvdWNoVHlwZV0pIHRoaXMub2xkVG91Y2VzID0gbmV3VG91Y2VzXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uT5p2f6Kem5pG4XHJcblx0XHRcdHZpZGVvVG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoVHlwZSA9PSAnY3VycmVudCcpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IHRoaXMudG91Y2hDdXJyZW50XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnNlZWsodGhpcy5jdXJyZW50KVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT0gJ2JyaWdodCcgJiYgdGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdC8vIHBsdXMuc2NyZWVuLnNldEJyaWdodG5lc3ModGhpcy50b3VjaEJyaWdodC50b0ZpeGVkKDIpKVxyXG5cdFx0XHRcdFx0Ly8gaWYodGhpcy5wbGF5KSB0aGlzLnZpZGVvQ3R4LnBsYXkoKTtcclxuXHRcdFx0XHRcdC8vI2lmbmRlZiBINVxyXG5cdFx0XHRcdFx0dW5pLnNldFNjcmVlbkJyaWdodG5lc3Moe1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy50b3VjaEJyaWdodC50b0ZpeGVkKDIpLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wcm9taXNlKDEwMClcclxuXHRcdFx0XHRcdFx0XHQvL3RoaXMudmlkZW9DdHgucmVxdWVzdEZ1bGxTY3JlZW4oe2RpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb259KVxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBsYXkpIHRoaXMudmlkZW9DdHgucGxheSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT0gJ3ZvbHVtZScgJiYgdGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdHBsdXMuZGV2aWNlLnNldFZvbHVtZSh0aGlzLnRvdWNoVm9sdW1lLnRvRml4ZWQoMikpXHJcblx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy50b3VjaFR5cGUpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRibENvdW50ID09IDEgfHwgdGhpcy5kYmxDb3VudCA9PSAwKSB0aGlzLmRibENvdW50KytcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYmxDb3VudCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8v5Y2V5Ye7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZGJsQ291bnQgPT0gMSkgdGhpcy5jbGlja1ZpZGVvKClcclxuXHRcdFx0XHRcdFx0XHQvL+WPjOWHu1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmRibENvdW50ID09IDIpIHRoaXMudmlkZW9QbGF5KClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRibENvdW50ID0gMFxyXG5cdFx0XHRcdFx0XHR9LCAyNTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBudWxsXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VTY3JlZW4oKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93Q29udHJvbHMgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMucmF0ZVZpZXcgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMubW9yZVZpZXcgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuc3JjVmlldyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5mdWxsU2NyZWVuID0gIXRoaXMuZnVsbFNjcmVlblxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLmZ1bGxTY3JlZW4pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExldmVsKCkge1xyXG5cdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8jaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcblx0XHRcdFx0XHRcdC8v5rOo5oSP77yM5a6J5Y2T6ZyA6KaB6YWN572u5LiLbWFuaWZlc3QuanNvbuaWh+S7tu+8jOaJk+W8gOWQju+8jOi/m+WFpeaooeWdl+adg+mZkOmFjee9ru+8jOWcqOWPs+S+p+eahEFuZHJvaWTmnYPpmZDorr7nva7ph4zli77pgInkuIphbmRyb2lkLnBlcm1pc3Npb24uQkFUVEVSWV9TVEFUU1xyXG5cdFx0XHRcdFx0XHR2YXIgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHRcdFx0XHRcdHZhciBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnQnKTtcclxuXHRcdFx0XHRcdFx0dmFyIHJlY2V2aWVyID0gcGx1cy5hbmRyb2lkLmltcGxlbWVudHMoJ2lvLmRjbG91ZC5mZWF0dXJlLmludGVybmFsLnJlZmxlY3QuQnJvYWRjYXN0UmVjZWl2ZXInLCB7XHJcblx0XHRcdFx0XHRcdFx0b25SZWNlaXZlOiBmdW5jdGlvbihjb250ZXh0LCBpbnRlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBhY3Rpb24gPSBpbnRlbnQuZ2V0QWN0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWN0aW9uID09IEludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBsZXZlbCA9IGludGVudC5nZXRJbnRFeHRyYShcImxldmVsXCIsIDApOyAvL+eUtemHjyAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciB2b2x0YWdlID0gaW50ZW50LmdldEludEV4dHJhKFwidm9sdGFnZVwiLCAwKTsgLy/nlLXmsaDnlLXljosgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdGVtcGVyYXR1cmUgPSBpbnRlbnQuZ2V0SW50RXh0cmEoXCJ0ZW1wZXJhdHVyZVwiLCAwKTsgLy/nlLXmsaDmuKnluqYgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKGxldmVsIC8gMTAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHZhciBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTtcclxuXHRcdFx0XHRcdFx0dmFyIGZpbHRlciA9IG5ldyBJbnRlbnRGaWx0ZXIoSW50ZW50LkFDVElPTl9CQVRURVJZX0NIQU5HRUQpO1xyXG5cdFx0XHRcdFx0XHRtYWluLnJlZ2lzdGVyUmVjZWl2ZXIocmVjZXZpZXIsIGZpbHRlcik7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdFx0XHRcdFx0dmFyIFVJRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlEZXZpY2VcIik7XHJcblx0XHRcdFx0XHRcdHZhciBkZXYgPSBVSURldmljZS5jdXJyZW50RGV2aWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZGV2LmlzQmF0dGVyeU1vbml0b3JpbmdFbmFibGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRkZXYuc2V0QmF0dGVyeU1vbml0b3JpbmdFbmFibGVkKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBsZXZlbCA9IGRldi5iYXR0ZXJ5TGV2ZWwoKTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShsZXZlbClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdFx0XHQvLyNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdHd4LmdldEJhdHRlcnlJbmZvKHtcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZS5sZXZlbClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRwcm9taXNlLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubGV2ZWwgPSByZXNcclxuXHRcdFx0XHR9KVxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9ybWF0U2Vjb25kcyhhLCB0eXBlKSB7XHJcblx0XHRcdFx0dmFyIGhoID0gcGFyc2VJbnQoYSAvIDM2MDApO1xyXG5cdFx0XHRcdHZhciBtbSA9IHBhcnNlSW50KChhIC0gaGggKiAzNjAwKSAvIDYwKTtcclxuXHRcdFx0XHRpZiAobW0gPCAxMCkgbW0gPSBcIjBcIiArIG1tO1xyXG5cdFx0XHRcdHZhciBzcyA9IHBhcnNlSW50KChhIC0gaGggKiAzNjAwKSAlIDYwKTtcclxuXHRcdFx0XHRpZiAoc3MgPCAxMCkgc3MgPSBcIjBcIiArIHNzO1xyXG5cdFx0XHRcdGlmIChoaCA8IDEwKSBoaCA9IGhoID09ICcwJyA/ICcnIDogYDAke2hofTpgO1xyXG5cdFx0XHRcdHZhciBsZW5ndGggPSBoaCArIG1tICsgXCI6XCIgKyBzcztcclxuXHRcdFx0XHRpZiAoYSA+PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gXCIwMDowMFwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Tm93VGltZSgpIHtcclxuXHRcdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHR2YXIgaGggPSBub3cuZ2V0SG91cnMoKTsgLy/ml7ZcclxuXHRcdFx0XHRpZiAoaGggPCAxMCkgaGggPSBcIjBcIiArIGhoO1xyXG5cdFx0XHRcdHZhciBtbSA9IG5vdy5nZXRNaW51dGVzKCk7IC8v5YiGXHJcblx0XHRcdFx0aWYgKG1tIDwgMTApIG1tID0gXCIwXCIgKyBtbTtcclxuXHRcdFx0XHRyZXR1cm4gYCR7aGh9OiR7bW19YDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHBsYXlGaXJzdDoge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcblx0XHRcdFx0XHRpZiAob2xkVmFsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVtZWJlciA9IHRydWVcclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wcm9taXNlKDUwMDApXHJcblx0XHRcdFx0XHRcdHRoaXMucmVtZWJlciA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z0R1cmF0aW9uOiB7XHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBuZXdWYWxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGF1ZGlvOiB7XHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcblx0XHRcdFx0XHRpZiAobmV3VmFsICE9ICcnKSB7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucHJvbWlzZSgpXHJcblx0XHRcdFx0XHRcdHRoaXMuaW5uZXJBdWRpb0NvbnRleHQgPSB1bmkuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlubmVyQXVkaW9Db250ZXh0Lm9uUGF1c2UoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5uZXJBdWRpb0NvbnRleHQgPSBudWxsXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0aW5kZXg6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBhc3luYyBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xyXG5cclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuY2hhbmdTcmMoKVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNyY0xpc3Q6IHtcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlcjogYXN5bmMgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgbmV3VmFsID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3JjID0gbmV3VmFsXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IG5ld1ZhbFswXS5zcmNcclxuXHRcdFx0XHRcdFx0dGhpcy5zcmNUaXRsZSA9IG5ld1ZhbFswXS50aXRsZVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLnBsYXlGaXJzdCAmJiB0aGlzLmF1dG9wbGF5KSBhd2FpdCB0aGlzLmNoYW5nU3JjKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dDb250cm9sczoge1xyXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyOiBhc3luYyBmdW5jdGlvbihuZXdWYWwpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAobmV3VmFsICYmIHRoaXMuZnVsbFNjcmVlbikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5vd1RpbWUgPSB0aGlzLmdldE5vd1RpbWUoKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmdldExldmVsKClcclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5wcm9taXNlKClcclxuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRlQ29udHJvbHMoMCwgdGhpcy4kcmVmcy5jb250cm9sc1RvcClcclxuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRlQ29udHJvbHMoMSwgdGhpcy4kcmVmcy5jb250cm9sc0J0bSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGRpcmVjdGlvbihuZXdWYWwpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mdWxsU2NyZWVuICYmICF0aGlzLmxvY2spIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHguZXhpdEZ1bGxTY3JlZW4oKVxyXG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wcm9taXNlKDEwMDApXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnJlcXVlc3RGdWxsU2NyZWVuKHtcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uOiBuZXdWYWxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHRpdGxlU3ViKCkgeyAvLyDmoIfpopjmiKrlj5ZcclxuXHRcdFx0XHRsZXQgdGl0bGUgPSB0aGlzLnRpdGxlO1xyXG5cdFx0XHRcdGlmICghdGhpcy5pc1dpZGVTY3JlZW4gJiYgdGhpcy5mdWxsU2NyZWVuICYmIHRpdGxlLmxlbmd0aCA+IDEwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGUuc3Vic3RyKDAsIDEwKSArICcuLi4nO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGl0bGUubGVuZ3RoID4gMjUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZS5zdWJzdHIoMCwgMjUpICsgJy4uLic7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG5vdFdpZGVTY3JlZW5UaXRsZVN1Yigpe1xyXG5cdFx0XHRcdGxldCB0aXRsZSA9IHRoaXMudGl0bGU7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzV2lkZVNjcmVlbiAmJiB0aXRsZS5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlLnN1YnN0cigwLCAxNykgKyAnLi4uJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cmVtZW1iZXJDdXJyZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdFNlY29uZHModGhpcy5pbml0aWFsVGltZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0bGFzdER1cmF0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdFNlY29uZHModGhpcy5kdXJhdGlvbilcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudER1cmF0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdFNlY29uZHModGhpcy5jdXJyZW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaEN1cnJlbnREdXJhdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRTZWNvbmRzKHRoaXMudG91Y2hDdXJyZW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+Wwj+Wxj+aXtui/m+W6puadoemVv+W6plxyXG5cdFx0XHRzbGlkZXJXaWR0aCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kdXJhdGlvbiA+PSAzNjAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsQ29udHJvbHNIZWlndCAtIDE5MFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsQ29udHJvbHNIZWlndCAtIDE2MFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cdEBpbXBvcnQgXCIuL2FuZHJvaWQuc2Nzc1wiO1xyXG5cdEBpbXBvcnQgXCIuL2lvcy5zY3NzXCI7XHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiovXHJcblx0LmZsZXgge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHR9XHJcblxyXG5cdC52aWRlby1ib3gge1xyXG5cclxuXHRcdGhlaWdodDogMjAwcHg7XHJcblxyXG5cdH1cclxuXHJcblx0Lm1hcmdpblJpZ2h0IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5tYXJnaW5yaWdodCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC5idG5Cb3gge1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcblxyXG5cdC5idG5ib3gge1xyXG5cdFx0cGFkZGluZzogNXB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC52aWRlbyB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC52aWRlby12aWV3IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiovXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0fVxyXG5cclxuXHQuc20tdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGZvbnQtZmFtaWx5OiBcInRleHRpY29uc1wiO1xyXG5cdFx0LyogI2VuZGlmKi9cclxuXHR9XHJcblxyXG5cdC5zZXQtdmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdH1cclxuXHJcblx0LmRhbm11LXZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0aGVpZ2h0OiAxNjBweDtcclxuXHR9XHJcblxyXG5cdC5yYXRlLXNldCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNDBweCA4MHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHR9XHJcblxyXG5cdC53aWRlLXNjcmVlbi1yYXRlLXNldCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNDBweCA0MHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblx0fVxyXG5cclxuXHQucG93ZXItdmlldyB7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnBvd2VyLWJveCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5wb3dlci1oZWFkZXIge1xyXG5cdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHR3aWR0aDogMnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5wb3dlci1ib2R5IHtcclxuXHRcdGhlaWdodDogOXB4O1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDFweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHJcblx0LnBvd2VyLWxldmVsIHtcclxuXHRcdGhlaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnNjcm9sbC12aWV3IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQuc2Nyb2xsLXZpZXctd2lkZS1zY3JlZW4ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHR9XHJcblxyXG5cdC5tb3JlLXNldCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogNDBweCAxMDBweDtcclxuXHR9XHJcblxyXG5cdC5tb3JlLXNldC13aWR0aC1zY3JlZW4ge1xyXG5cdFx0cGFkZGluZzogNDBweCAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmVwaXNvZGUtc2V0IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiA0MHB4IDEwMHB4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LmVwaXNvZGUtc2Nyb2xsIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQuZXBpQm94IHtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHR9XHJcblxyXG5cdC5tb3JlLXJvdyB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cGFkZGluZzogMCAyMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1vcmUtcm93LXdpZHRoLXNjcmVlbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0fVxyXG5cclxuXHQubW9yZS10YXAge1xyXG5cdFx0aGVpZ2h0OiAxcHg7XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzBBMEEwO1xyXG5cdH1cclxuXHJcblx0Lm1vcmUtYm94LXdpZHRoLXNjcmVlbiB7XHJcblx0XHQvLyDnqoTlsY/mm7TlpJrpgInpobnmjInpkq7ljLpcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogOTBweDtcclxuXHRcdHdpZHRoOiA5MHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1vcmUtYm94IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHR3aWR0aDogMTIwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG5cdH1cclxuXHJcblx0LnNldC1ib3R0b20ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5zZXRCb3gge1xyXG5cdFx0aGVpZ2h0OiAxMDBweDtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTQsIDE2MiwgMTYyLCAwLjIpO1xyXG5cdH1cclxuXHJcblx0LndpZHRoLXNjcmVlbi1zZXQtYm94IHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk0LCAxNjIsIDE2MiwgMC4yKTtcclxuXHR9XHJcblxyXG5cdC5zbWFsbC10aXRsZSB7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHQud2lkZS1zY3JlZW4tc2V4LWJveCB7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHR3aWR0aDogMjBweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgMTYyLCAxNjIsIDAuMik7XHJcblx0fVxyXG5cclxuXHQuc29saWQtYm90dG9tIHtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuXHR9XHJcblxyXG5cdC5jb250cm9scy10b3Age1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC44KSk7XHJcblxyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgNDBweCAwIDMwcHg7XHJcblxyXG5cdH1cclxuXHJcblx0LnRvcC1sZWZ0IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudG9wLXJpZ2h0IHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdC5zdG9wIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0fVxyXG5cclxuXHQucmF0ZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDE2MHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHotaW5kZXg6IDEwMTtcclxuXHR9XHJcblxyXG5cdC5yYXRlLXZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0dG9wOiAyNDBweDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0ei1pbmRleDogOTA7XHJcblx0fVxyXG5cclxuXHQuY3VycmVudC12aWV3IHtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDMwcHg7XHJcblx0XHRsZWZ0OiAyMjVycHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbEN1cnJlbnQtdmlldyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0d2lkdGg6IDIyMHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0dG9wOiA1MHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHJcblx0LmZ1bGxDdXJyZW50LWN1cnJlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdHdpZHRoOiAxNTBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdHRvcDogNjBweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cdC5mdWxsQ29udHJvbHMtYm90dG9tLWxlZnQge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5mdWxsQ3VycmVudC1ib3R0b20ge1xyXG5cdFx0d2lkdGg6IDExMHB4O1xyXG5cclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuXHRcdG1hcmdpbi10b3A6IDE1cHg7XHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5mdWxsQ3VycmVudC12b2x1bWUge1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cclxuXHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LmZ1bGxDdXJyZW50LXZvbHVtZS1sZWZ0IHtcclxuXHRcdHdpZHRoOiA3NXB4O1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkFGRkZELCAjNzFGQ0JBKTtcclxuXHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC5mdWxsQ3VycmVudC12b2x1bWUtcmlnaHQge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3MUZDQkEsICNFMzUzMTMpO1xyXG5cclxuXHRcdGhlaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGxDdXJyZW50LWJyaWdodCB7XHJcblx0XHR3aWR0aDogMTUwcHg7XHJcblxyXG5cclxuXHRcdGhlaWdodDogNXB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQuZnVsbEN1cnJlbnQtYnJpZ2h0LWxlZnQge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMUI2RkYsICNGRkYxNTkpO1xyXG5cclxuXHRcdGhlaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LmZ1bGxDdXJyZW50LWJyaWdodC1yaWdodCB7XHJcblx0XHR3aWR0aDogNzVweDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRjE1OSwgI0ZGRkZGRik7XHJcblxyXG5cdFx0aGVpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbEN1cnJlbnQtcHJvZ3Jlc3Mge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IC0xcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG5cdFx0aGVpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQuY3VycmVudC1ib3R0b20ge1xyXG5cdFx0d2lkdGg6IDI2MHJweDtcclxuXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdFx0aGVpZ2h0OiA1cHg7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQuY3VycmVudC1wcm9ncmVzcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC5yYXRlLWxpc3Qge1xyXG5cdFx0cGFkZGluZy10b3A6IDIwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuZnVsbFJhdGUtdmlldyB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LmNvbnRyb2xzLXZpZXcge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0d2lkdGg6IDczMHJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHRcdC8qICNpZmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblxyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHJcblx0fVxyXG5cclxuXHQucmVtZW1iZXItdmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Ym90dG9tOiA1MHB4O1xyXG5cdFx0bGVmdDogMTBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHR9XHJcblxyXG5cdC5mdWxsQ29udHJvbHMtcmVtZW1iZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJvdHRvbTogMTMwcHg7XHJcblx0XHRsZWZ0OiAzNXB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cdH1cclxuXHJcblx0LmNvbnRyb2xzLXZpZXctdG9wIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiA3MzBycHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHJcblx0XHQvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHRcdGhlaWdodDogNDBweDtcclxuXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHJcblx0fVxyXG5cdCAudG9wLXRpdGxle1xyXG5cdFx0IGNvbG9yOiNGRkZGRkY7XHJcblx0IH1cclxuXHQuZnVsbENvbnRyb2xzLXZpZXcge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC44KSk7XHJcblx0XHRoZWlnaHQ6IDEyMHB4O1xyXG5cclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjBweCk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiA5OTk5OTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHR9XHJcblxyXG5cdC5mdWxsQ29udHJvbHMtdG9wIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cGFkZGluZzogMCA0MHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5mdWxsQ29udHJvbHMtY2VudGVyIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbENvbnRyb2xzLWJvdHRvbSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHBhZGRpbmc6IDAgNDBweCAwIDMwcHg7XHJcblx0fVxyXG5cclxuXHQuZnVsbENvbnRyb2xzLWJvdHRvbS1yaWdodCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LnZpZGVvLXNsaWRlciB7XHJcblx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 31);

/***/ }),
/* 31 */
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 32 */
/*!*************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=e6599a5e&scoped=true& */ 33);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=e6599a5e&lang=scss&scoped=true& */ 37).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=e6599a5e&lang=scss&scoped=true& */ 37).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e6599a5e\",\n  \"14fef102\",\n  false,\n  _chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNjU5OWE1ZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTY1OTlhNWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTY1OTlhNWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImU2NTk5YTVlXCIsXG4gIFwiMTRmZWYxMDJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiZXRoYW4vZGVtby9BcHAvV2ViVmlld0RlbW8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!********************************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=e6599a5e&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=template&id=e6599a5e&scoped=true& */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_e6599a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=e6599a5e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" }
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor }
          })
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px"
          },
          on: { click: function($event) {} }
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart
              }
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!**************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=script&lang=js& */ 36);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    min: {\n      type: Number,\n      default: 0 },\n\n    max: {\n      type: Number,\n      default: 0 },\n\n    value: {\n      type: Number,\n      default: 0 },\n\n    width: {\n      type: Number,\n      default: 0 },\n\n    ratio: {\n      type: Number,\n      default: 1 },\n\n    direction: {\n      type: String,\n      default: 'screenX' },\n\n    backgroundColor: { //滑块右侧背景条的颜色\n      type: String,\n      default: '#e9e9e9' },\n\n    blockColor: { //滑块颜色\n      type: String,\n      default: '#ffffff' },\n\n    screenLeft: { //slider距离左边距离\n      type: Number,\n      default: 0 },\n\n    iosDirection: {\n      type: Number,\n      default: 1 } },\n\n\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false };\n\n  },\n  mounted: function mounted() {\n\n\n  },\n  methods: {\n    sliderTouch: function sliderTouch(e) {\n      var touches = e.changedTouches[0];\n      this.leftWidth = touches[this.direction] * this.ratio - this.screenLeft;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n      this.blockTouchEnd();\n\n    },\n    // 触摸开始\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      this.oldToucesX = e.changedTouches[0][this.direction];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX;\n\n      newToucesX = e.changedTouches[0][this.direction];\n      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      var current = this.leftWidth / this.currentWidth * this.max;\n      var event = { detail: { value: current } };\n      this.$emit('change', event);\n      this.touch = false;\n    },\n    colorRgb: function colorRgb(string, opacity) {\n      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n      var sColor = string.toLowerCase();\n      if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n          var sColorNew = \"#\";\n          for (var i = 1; i < 4; i += 1) {\n            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n          }\n          sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n          sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        }\n        return \"rgba(\" + sColorChange.join(\",\") + \",\".concat(opacity) + \")\";\n      } else {\n        return sColor;\n      }\n    } },\n\n  computed: {\n    blockOuterColor: function blockOuterColor() {\n      return this.colorRgb(this.blockColor, 0.4);\n    },\n    blockBackgroundColor: function blockBackgroundColor() {\n      return this.colorRgb(this.blockColor, 0.5);\n    },\n    currentWidth: function currentWidth() {\n      return this.width - 40;\n    } },\n\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n\n        this.leftWidth = newVal / this.max * this.currentWidth;\n        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      } } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWJBOztBQWlCQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFqQkE7O0FBcUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXJCQTs7QUF5QkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBekJBOztBQTZCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUE3QkE7O0FBaUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWpDQTs7QUFxQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBckNBLEVBREE7OztBQTJDQSxNQTNDQSxrQkEyQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSxxQkFIQTtBQUlBLGtCQUpBOztBQU1BLEdBbERBO0FBbURBLFNBbkRBLHFCQW1EQTs7O0FBR0EsR0F0REE7QUF1REE7QUFDQSxlQURBLHVCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FSQTtBQVNBO0FBQ0EsbUJBVkEsMkJBVUEsQ0FWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBQ0Esa0JBaEJBLDBCQWdCQSxDQWhCQSxFQWdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBeEJBO0FBeUJBO0FBQ0EsaUJBMUJBLHlCQTBCQSxDQTFCQSxFQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvQkE7QUFnQ0EsWUFoQ0Esb0JBZ0NBLE1BaENBLEVBZ0NBLE9BaENBLEVBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWRBLE1BY0E7QUFDQTtBQUNBO0FBQ0EsS0FwREEsRUF2REE7O0FBNkdBO0FBQ0EsbUJBREEsNkJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSx3QkFKQSxrQ0FJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLGdCQVBBLDBCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBN0dBOztBQXdIQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxhQUZBLG1CQUVBLE1BRkEsRUFFQSxNQUZBLEVBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FQQSxFQURBLEVBeEhBLEUiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cInNsaWRlciBmbGV4XCIgaWQ9XCJzbGlkZXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiIHJlZj1cInNsaWRlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInNsaWRlci1sZWZ0IGZsZXhcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtsZWZ0V2lkdGh9cHhgIH1cIiBAdG91Y2hlbmQuc3RvcD1cInNsaWRlclRvdWNoXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsZWZ0XCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpiYWNrZ3JvdW5kQ29sb3J9XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzbGlkZXItcmlnaHQgZmxleFwiIEB0b3VjaGVuZC5zdG9wPVwic2xpZGVyVG91Y2hcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHtjdXJyZW50V2lkdGgtbGVmdFdpZHRofXB4YCB9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyaWdodFwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2sgZmxleFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6dG91Y2g/YmxvY2tPdXRlckNvbG9yOidyZ2JhKDAsMCwwLDApJywgbGVmdDogYCR7bGVmdFdpZHRofXB4YH1cIlxyXG5cdFx0XHRAY2xpY2suc3RvcD1cIlwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2staW5uZXIgZmxleFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6YmxvY2tCYWNrZ3JvdW5kQ29sb3J9XCIgIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwiYmxvY2tUb3VjaE1vdmVcIiBAdG91Y2hlbmQ9XCJibG9ja1RvdWNoRW5kXCIgQHRvdWNoc3RhcnQ9XCJibG9ja1RvdWNoU3RhcnRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxvY2staW5uZXItaW5uZXJcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJsb2NrQ29sb3J9XCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdG1pbjp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdG1heDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdHZhbHVlOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkdGg6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyYXRpbzp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDoxXHJcblx0XHRcdH0sXHJcblx0XHRcdGRpcmVjdGlvbjp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonc2NyZWVuWCdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOnsgLy/mu5HlnZflj7Pkvqfog4zmma/mnaHnmoTpopzoibJcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OicjZTllOWU5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRibG9ja0NvbG9yOnsgLy/mu5HlnZfpopzoibJcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OicjZmZmZmZmJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY3JlZW5MZWZ0OnsgLy9zbGlkZXLot53nprvlt6bovrnot53nprtcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0aW9zRGlyZWN0aW9uOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdG9sZFRvdWNlc1g6MCxcclxuXHRcdFx0XHRsZWZ0V2lkdGg6MCxcclxuXHRcdFx0XHRvbGRMZWZ0V2lkdGg6MCxcclxuXHRcdFx0XHR0b3VjaDpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRzbGlkZXJUb3VjaChlKXtcclxuXHRcdFx0XHRsZXQgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRvdWNoZXNbdGhpcy5kaXJlY3Rpb25dKnRoaXMucmF0aW8tdGhpcy5zY3JlZW5MZWZ0XHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmxlZnRXaWR0aCA+IHRoaXMuY3VycmVudFdpZHRoPyB0aGlzLmN1cnJlbnRXaWR0aCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmxlZnRXaWR0aCA8IDA/IDAgOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMuYmxvY2tUb3VjaEVuZCgpXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOinpuaRuOW8gOWni1xyXG5cdFx0XHRibG9ja1RvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMudG91Y2ggPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5vbGRMZWZ0V2lkdGggPSB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMub2xkVG91Y2VzWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1bdGhpcy5kaXJlY3Rpb25dO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpfmlrnlkJFcclxuXHRcdFx0YmxvY2tUb3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGxldCBuZXdUb3VjZXNYXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bmV3VG91Y2VzWD0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl07XHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmlvc0RpcmVjdGlvbioobmV3VG91Y2VzWCAtIHRoaXMub2xkVG91Y2VzWCkqdGhpcy5yYXRpbysgdGhpcy5vbGRMZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMD8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7k+adn+inpuaRuFxyXG5cdFx0XHRibG9ja1RvdWNoRW5kKGUpIHtcclxuXHRcdFx0XHRsZXQgY3VycmVudCA9IHRoaXMubGVmdFdpZHRoIC8gdGhpcy5jdXJyZW50V2lkdGggKnRoaXMubWF4XHJcblx0XHRcdFx0Y29uc3QgZXZlbnQgPSB7ZGV0YWlsOnt2YWx1ZTpjdXJyZW50fX1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLGV2ZW50KVxyXG5cdFx0XHRcdHRoaXMudG91Y2ggPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvclJnYihzdHJpbmcsb3BhY2l0eSl7XHJcblx0XHRcdFx0dmFyIHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcclxuXHRcdFx0XHR2YXIgc0NvbG9yID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0aWYoc0NvbG9yICYmIHJlZy50ZXN0KHNDb2xvcikpe1xyXG5cdFx0XHRcdCAgICBpZihzQ29sb3IubGVuZ3RoID09PSA0KXtcclxuXHRcdFx0XHQgICAgICAgIHZhciBzQ29sb3JOZXcgPSBcIiNcIjtcclxuXHRcdFx0XHQgICAgICAgIGZvcih2YXIgaT0xOyBpPDQ7IGkrPTEpe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHNDb2xvck5ldyArPSBzQ29sb3Iuc2xpY2UoaSxpKzEpLmNvbmNhdChzQ29sb3Iuc2xpY2UoaSxpKzEpKTsgICBcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIHNDb2xvciA9IHNDb2xvck5ldztcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICAvL+WkhOeQhuWFreS9jeeahOminOiJsuWAvFxyXG5cdFx0XHRcdCAgICB2YXIgc0NvbG9yQ2hhbmdlID0gW107XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaT0xOyBpPDc7IGkrPTIpe1xyXG5cdFx0XHRcdCAgICAgICAgc0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoXCIweFwiK3NDb2xvci5zbGljZShpLGkrMikpKTsgIFxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIHJldHVybiBcInJnYmEoXCIgKyBzQ29sb3JDaGFuZ2Uuam9pbihcIixcIikgK2AsJHtvcGFjaXR5fWArXCIpXCI7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ICAgIHJldHVybiBzQ29sb3I7ICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdGJsb2NrT3V0ZXJDb2xvcigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbG9yUmdiKHRoaXMuYmxvY2tDb2xvciwwLjQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrQmFja2dyb3VuZENvbG9yKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3JSZ2IodGhpcy5ibG9ja0NvbG9yLDAuNSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudFdpZHRoKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMud2lkdGggLSA0MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHR2YWx1ZTp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2gpIHJldHVyblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IG5ld1ZhbC90aGlzLm1heCAqIHRoaXMuY3VycmVudFdpZHRoXHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQuZmxleHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFxyXG5cdH1cclxuXHQuc2xpZGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuc2xpZGVyLWxlZnR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmxlZnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiAzcHg7XHJcblx0fVxyXG5cdC5zbGlkZXItcmlnaHR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnJpZ2h0e1xyXG5cdFx0aGVpZ2h0OiAzcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuYmxvY2t7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0fVxyXG5cdC5ibG9jay1pbm5lcntcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmJsb2NrLWlubmVyLWlubmVye1xyXG5cdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!***********************************************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=e6599a5e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=style&index=0&id=e6599a5e&lang=scss&scoped=true& */ 38);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_e6599a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=e6599a5e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "relative",
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "slider-left": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left": {
    "flex": 1,
    "height": "3"
  },
  "slider-right": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "height": "3",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flex": 1
  },
  "block": {
    "position": "absolute",
    "height": "40",
    "width": "40",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999999
  },
  "block-inner": {
    "height": "20",
    "width": "20",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "block-inner-inner": {
    "height": "10",
    "width": "10",
    "borderRadius": "5"
  }
}

/***/ }),
/* 39 */
/*!***********************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=template&id=b4d02dda& */ 40);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=script&lang=js& */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 44).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 44).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"52c42204\",\n  false,\n  _chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI0ZDAyZGRhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNTJjNDIyMDRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiZXRoYW4vZGVtby9BcHAvV2ViVmlld0RlbW8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!******************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=b4d02dda& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=template&id=b4d02dda& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_b4d02dda___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 41 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=b4d02dda& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["danmu"], style: { width: _vm.width + "px" } },
    [
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList1, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList2, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList3, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList4, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 42 */
/*!************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=script&lang=js& */ 43);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9qQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _createForOfIteratorHelper(o) {if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default2 =\n{\n  props: {\n    width: {\n      type: Number,\n      default: 0 },\n\n    danmuList: { //弹幕\n      type: [Array],\n      default: function _default() {return [];} },\n\n    platform: {\n      type: String,\n      default: 'android' },\n\n    current: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      danmuList1: [],\n      danmuList2: [],\n      danmuList3: [],\n      danmuList4: [] };\n\n  },\n  methods: {\n    promise: function promise() {\n      var promise = new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve();\n        }, 100);\n      });\n      return promise;\n    },\n    cleanDanmu: function cleanDanmu() {\n      this.danmuList1 = [];\n      this.danmuList2 = [];\n      this.danmuList3 = [];\n      this.danmuList4 = [];\n    },\n    randomRange: function randomRange(min, max) {// min最小值，max最大值\n      return Math.floor(Math.random() * (max - min)) + min;\n    },\n    animationText: function animationText(id, distance, fn) {\n      var el;\n      var elList = this.$refs.move;var _iterator = _createForOfIteratorHelper(\n      elList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n          if (item.attr.id == id) {\n            el = item;\n          }\n\n        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n      animation.transition(el, {\n        styles: {\n          transform: \"translate( \".concat(distance, \"px, 0px)\") },\n\n        duration: 20000, //ms\n        timingFunction: 'ease',\n        delay: 0 //ms\n      }, function () {\n        fn();\n      });\n\n    } },\n\n  watch: {\n    danmuList: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        for (var key in newVal) {\n          newVal[key]._id = key;\n        }\n      } },\n\n    current: {\n      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {var _this = this;var _iterator2, _step2, _loop;return _regenerator.default.wrap(function _callee$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(\n\n\n                  Math.abs(newVal - oldVal) >= 0.24)) {_context2.next = 17;break;}_iterator2 = _createForOfIteratorHelper(\n                  this.danmuList);_context2.prev = 2;_loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {var item, num;return _regenerator.default.wrap(function _loop$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:item = _step2.value;if (!(\n                            item.time > Math.floor(newVal * 1) && item.time <= Math.floor(newVal * 1 + 0.25))) {_context.next = 7;break;}\n                            num = _this.randomRange(1, 5);\n                            _this[\"danmuList\".concat(num)].push(item);_context.next = 6;return (\n                              _this.promise());case 6:\n\n                            //开始动画\n                            _this.animationText(item._id, -_this.width * 2, function () {\n                              var index;\n                              //删除动画后的text\n                              for (var key in _this[\"danmuList\".concat(num)]) {\n                                if (_this[\"danmuList\".concat(num)][key]._id == item._id) {\n                                  index = key;\n                                }\n                              }\n                              _this[\"danmuList\".concat(num)].splice(index, 1);\n                            });case 7:case \"end\":return _context.stop();}}}, _loop);});_iterator2.s();case 5:if ((_step2 = _iterator2.n()).done) {_context2.next = 9;break;}return _context2.delegateYield(_loop(), \"t0\", 7);case 7:_context2.next = 5;break;case 9:_context2.next = 14;break;case 11:_context2.prev = 11;_context2.t1 = _context2[\"catch\"](2);_iterator2.e(_context2.t1);case 14:_context2.prev = 14;_iterator2.f();return _context2.finish(14);case 17:case \"end\":return _context2.stop();}}}, _callee, this, [[2, 11, 14, 17]]);}));function handler(_x, _x2) {return _handler.apply(this, arguments);}return handler;}() } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBLHdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0EsbUJBREE7QUFFQSwrQ0FGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWJBLEVBREE7OztBQW1CQSxNQW5CQSxrQkFtQkE7QUFDQTtBQUNBLG9CQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTtBQUlBLG9CQUpBOztBQU1BLEdBMUJBO0FBMkJBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0EsT0FKQTtBQUtBO0FBQ0EsS0FSQTtBQVNBLGNBVEEsd0JBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZEE7QUFlQSxlQWZBLHVCQWVBLEdBZkEsRUFlQSxHQWZBLEVBZUE7QUFDQTtBQUNBLEtBakJBO0FBa0JBLGlCQWxCQSx5QkFrQkEsRUFsQkEsRUFrQkEsUUFsQkEsRUFrQkEsRUFsQkEsRUFrQkE7QUFDQTtBQUNBLG1DQUZBO0FBR0EsWUFIQSxhQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBUkE7QUFTQTtBQUNBO0FBQ0EsK0RBREEsRUFEQTs7QUFJQSx1QkFKQSxFQUlBO0FBQ0EsOEJBTEE7QUFNQSxnQkFOQSxDQU1BO0FBTkEsU0FPQTtBQUNBO0FBQ0EsT0FUQTs7QUFXQSxLQXRDQSxFQTNCQTs7QUFtRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BUEEsRUFEQTs7QUFVQTtBQUNBOzs7QUFHQSxtREFIQTtBQUlBLGdDQUpBLDBOQUlBLElBSkE7QUFLQSw0R0FMQTtBQU1BLCtCQU5BLEdBTUEsdUJBTkE7QUFPQSxzRUFQQTtBQVFBLDZDQVJBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBVEEsRUFYQSw2a0JBREEsRUFWQSxFQW5FQSxFIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJkYW5tdVwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3QxXCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhbm11LXJvd1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHRcdDxkaXYgOnN0eWxlPVwieyBsZWZ0OmAke3dpZHRofXB4YH1cIiByZWY9XCJtb3ZlXCIgOmlkPVwiaXRlbS5faWRcIiB2LWZvcj1cIml0ZW0gaW4gZGFubXVMaXN0MlwiIDprZXk9XCJpdGVtLl9pZFwiIGNsYXNzPVwibW92ZURpdlwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cImltZ1wiIHYtaWY9XCJpdGVtLmF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cInsgY29sb3I6aXRlbS5jb2xvcj9pdGVtLmNvbG9yOicjZmZmJyB9XCI+e3tpdGVtLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDNcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3Q0XCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xyXG5cdGNvbnN0IG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpO1xyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHR3aWR0aDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhbm11TGlzdDp7IC8v5by55bmVXHJcblx0XHRcdFx0dHlwZTpbQXJyYXldLFxyXG5cdFx0XHRcdGRlZmF1bHQ6KCk9PltdXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXRmb3JtOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OidhbmRyb2lkJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKXtcclxuXHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdGRhbm11TGlzdDE6W10sXHJcblx0XHRcdFx0ZGFubXVMaXN0MjpbXSxcclxuXHRcdFx0XHRkYW5tdUxpc3QzOltdLFxyXG5cdFx0XHRcdGRhbm11TGlzdDQ6W10sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0cHJvbWlzZSgpe1xyXG5cdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHByb21pc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYW5EYW5tdSgpe1xyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0MSA9IFtdXHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3QyID0gW11cclxuXHRcdFx0XHR0aGlzLmRhbm11TGlzdDMgPSBbXVxyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0NCA9IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7IC8vIG1pbuacgOWwj+WAvO+8jG1heOacgOWkp+WAvFxyXG5cdFx0XHQgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcclxuXHRcdFx0fSxcclxuXHRcdFx0YW5pbWF0aW9uVGV4dChpZCxkaXN0YW5jZSxmbil7XHJcblx0XHRcdFx0bGV0IGVsXHJcblx0XHRcdFx0bGV0IGVsTGlzdCA9IHRoaXMuJHJlZnMubW92ZVxyXG5cdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgZWxMaXN0KSB7XHJcblx0XHRcdFx0XHRpZihpdGVtLmF0dHIuaWQgPT0gaWQpe1xyXG5cdFx0XHRcdFx0XHRlbCA9IGl0ZW1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbihlbCwge1xyXG5cdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZSggJHtkaXN0YW5jZX1weCwgMHB4KWAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAwLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRmbigpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHRkYW5tdUxpc3Q6e1xyXG5cdFx0XHRcdGltbWVkaWF0ZTp0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiBuZXdWYWwpIHtcclxuXHRcdFx0XHRcdFx0bmV3VmFsW2tleV0uX2lkID0ga2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OntcclxuXHRcdFx0XHRoYW5kbGVyOmFzeW5jIGZ1bmN0aW9uKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL+mXtOmalDAuMjVcclxuXHRcdFx0XHRcdGlmKE1hdGguYWJzKG5ld1ZhbC1vbGRWYWwpPj0wLjI0KXtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLmRhbm11TGlzdCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCBpdGVtLnRpbWUgPiBNYXRoLmZsb29yKG5ld1ZhbCoxKSAmJiBpdGVtLnRpbWUgPD0gTWF0aC5mbG9vcihuZXdWYWwqMSsgMC4yNSkgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgbnVtID0gdGhpcy5yYW5kb21SYW5nZSgxLDUpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzW2BkYW5tdUxpc3Qke251bX1gXS5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQvL+W8gOWni+WKqOeUu1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25UZXh0KGl0ZW0uX2lkLC10aGlzLndpZHRoKjIsKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8v5Yig6Zmk5Yqo55S75ZCO55qEdGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpc1tgZGFubXVMaXN0JHtudW19YF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzW2BkYW5tdUxpc3Qke251bX1gXVtrZXldLl9pZD09aXRlbS5faWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXggPSBrZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpc1tgZGFubXVMaXN0JHtudW19YF0uc3BsaWNlKGluZGV4LDEpXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5kYW5tdXtcclxuXHRoZWlnaHQ6IDE2MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHJcbn1cclxuLmRhbm11LXJvd3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHJcbn1cclxuLm1vdmVEaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFuZHJvaWQtdGl0bGV7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5pbWd7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmlvcy10aXRsZXtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!********************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 45);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "danmu": {
    "height": "160",
    "flexDirection": "column"
  },
  "danmu-row": {
    "position": "relative",
    "height": "40",
    "flexDirection": "row"
  },
  "moveDiv": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "android-title": {
    "fontSize": "24"
  },
  "img": {
    "width": "30",
    "height": "30",
    "marginLeft": "10",
    "borderRadius": "15"
  },
  "ios-title": {
    "fontSize": "24"
  }
}

/***/ }),
/* 46 */
/*!*********************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-moon.nvue?vue&type=template&id=b04239de& */ 47);\n/* harmony import */ var _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-moon.nvue?vue&type=script&lang=js& */ 49);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 51).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 51).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2887bdfc\",\n  false,\n  _chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDhEQUFzRDtBQUMxRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsOERBQXNEO0FBQy9HOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1tb29uLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjA0MjM5ZGUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaHVuTGVpLW1vb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2h1bkxlaS1tb29uLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLW1vb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVuTGVpLW1vb24ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjI4ODdiZGZjXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImV0aGFuL2RlbW8vQXBwL1dlYlZpZXdEZW1vL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVuTGVpLW1vb24vY2h1bkxlaS1tb29uLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!****************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=template&id=b04239de& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-moon.nvue?vue&type=template&id=b04239de& */ 48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_template_id_b04239de___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 48 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=template&id=b04239de& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: ["moon-box"] }, [
    _c("div", {
      staticClass: ["light", "light1"],
      style: { opacity: _vm.light1 }
    }),
    _c("div", {
      staticClass: ["light", "light2"],
      style: { opacity: _vm.light2 }
    }),
    _c("div", {
      staticClass: ["light", "light3"],
      style: { opacity: _vm.light3 }
    }),
    _c("div", {
      staticClass: ["light", "light4"],
      style: { opacity: _vm.light4 }
    }),
    _c("div", {
      staticClass: ["light", "light5"],
      style: { opacity: _vm.light5 }
    }),
    _c("div", {
      staticClass: ["light", "light6"],
      style: { opacity: _vm.light6 }
    }),
    _c("div", {
      staticClass: ["light", "light7"],
      style: { opacity: _vm.light7 }
    }),
    _c("div", {
      staticClass: ["light", "light8"],
      style: { opacity: _vm.light8 }
    }),
    _c("div", {
      staticClass: ["light", "light9"],
      style: { opacity: _vm.light9 }
    }),
    _c("div", {
      staticClass: ["light", "light10"],
      style: { opacity: _vm.light10 }
    }),
    _c("div", {
      staticClass: ["light", "light11"],
      style: { opacity: _vm.light11 }
    }),
    _c("div", {
      staticClass: ["light", "light12"],
      style: { opacity: _vm.light12 }
    }),
    _c("div", { staticClass: ["moon"] }, [
      _c(
        "div",
        {
          staticClass: ["move-box"],
          style: {
            transform: "rotate(" + (225 - 270 * _vm.percentage) + "deg)"
          }
        },
        [
          _c("div", {
            staticClass: ["move-moon"],
            style: { right: -16 + (1 - _vm.percentage) * 14 + "px" }
          })
        ]
      )
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 49 */
/*!**********************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-moon.nvue?vue&type=script&lang=js& */ 50);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1qQixDQUFnQiw2akJBQUcsRUFBQyIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLW1vb24ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NodW5MZWktbW9vbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    percentage: {\n      type: Number,\n      default: 1 } },\n\n\n  data: function data() {\n    return {};\n\n\n  },\n  methods: {\n    getOpacity: function getOpacity(percentage, nub) {\n      var opacity;\n      if (percentage < 13 / 12 - nub / 12 && percentage > 1 - nub / 12) {\n        opacity = '0.5';\n      } else if (percentage <= 1 - nub / 12) {\n        opacity = '0';\n      } else {\n        opacity = '1';\n      }\n      return opacity;\n    } },\n\n  computed: {\n    light1: function light1() {\n      return this.getOpacity(this.percentage, 1);\n    },\n    light2: function light2() {\n      return this.getOpacity(this.percentage, 2);\n    },\n    light3: function light3() {\n      return this.getOpacity(this.percentage, 3);\n    },\n    light4: function light4() {\n      return this.getOpacity(this.percentage, 4);\n    },\n    light5: function light5() {\n      return this.getOpacity(this.percentage, 5);\n    },\n    light6: function light6() {\n      return this.getOpacity(this.percentage, 6);\n    },\n    light7: function light7() {\n      return this.getOpacity(this.percentage, 7);\n    },\n    light8: function light8() {\n      return this.getOpacity(this.percentage, 8);\n    },\n    light9: function light9() {\n      return this.getOpacity(this.percentage, 9);\n    },\n    light10: function light10() {\n      return this.getOpacity(this.percentage, 10);\n    },\n    light11: function light11() {\n      return this.getOpacity(this.percentage, 11);\n    },\n    light12: function light12() {\n      return this.getOpacity(this.percentage, 12);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktbW9vbi9jaHVuTGVpLW1vb24ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREEsRUFEQTs7O0FBT0EsTUFQQSxrQkFPQTtBQUNBOzs7QUFHQSxHQVhBO0FBWUE7QUFDQSxjQURBLHNCQUNBLFVBREEsRUFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEEsRUFaQTs7QUF5QkE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsVUFKQSxvQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFVBUEEsb0JBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxVQVZBLG9CQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUEsVUFiQSxvQkFhQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQSxVQWhCQSxvQkFnQkE7QUFDQTtBQUNBLEtBbEJBO0FBbUJBLFVBbkJBLG9CQW1CQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsVUF0QkEsb0JBc0JBO0FBQ0E7QUFDQSxLQXhCQTtBQXlCQSxVQXpCQSxvQkF5QkE7QUFDQTtBQUNBLEtBM0JBO0FBNEJBLFdBNUJBLHFCQTRCQTtBQUNBO0FBQ0EsS0E5QkE7QUErQkEsV0EvQkEscUJBK0JBO0FBQ0E7QUFDQSxLQWpDQTtBQWtDQSxXQWxDQSxxQkFrQ0E7QUFDQTtBQUNBLEtBcENBLEVBekJBLEUiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cIm1vb24tYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQxXCIgOnN0eWxlPVwie29wYWNpdHk6bGlnaHQxfVwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpZ2h0IGxpZ2h0MlwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0Mn1cIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJsaWdodCBsaWdodDNcIiA6c3R5bGU9XCJ7b3BhY2l0eTpsaWdodDN9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQ0XCIgOnN0eWxlPVwie29wYWNpdHk6bGlnaHQ0fVwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpZ2h0IGxpZ2h0NVwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0NX1cIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJsaWdodCBsaWdodDZcIiA6c3R5bGU9XCJ7b3BhY2l0eTpsaWdodDZ9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQ3XCIgOnN0eWxlPVwie29wYWNpdHk6bGlnaHQ3fVwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpZ2h0IGxpZ2h0OFwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0OH1cIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJsaWdodCBsaWdodDlcIiA6c3R5bGU9XCJ7b3BhY2l0eTpsaWdodDl9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQxMFwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0MTB9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQxMVwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0MTF9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQgbGlnaHQxMlwiIDpzdHlsZT1cIntvcGFjaXR5OmxpZ2h0MTJ9XCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9vblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW92ZS1ib3hcIiA6c3R5bGU9XCJ7dHJhbnNmb3JtOmByb3RhdGUoJHsyMjUtMjcwKnBlcmNlbnRhZ2V9ZGVnKWB9XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vdmUtbW9vblwiIDpzdHlsZT1cIntyaWdodDpgJHstMTYrKDEtcGVyY2VudGFnZSkqMTR9cHhgfVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0cGVyY2VudGFnZTp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDoxXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRnZXRPcGFjaXR5KHBlcmNlbnRhZ2UsbnViKXtcclxuXHRcdFx0XHRsZXQgb3BhY2l0eVxyXG5cdFx0XHRcdGlmKHBlcmNlbnRhZ2U8KDEzLzEyLW51Yi8xMikmJnBlcmNlbnRhZ2U+KDEtbnViLzEyKSl7XHJcblx0XHRcdFx0XHRvcGFjaXR5ID0gJzAuNSdcclxuXHRcdFx0XHR9ZWxzZSBpZihwZXJjZW50YWdlPD0oMS1udWIvMTIpKXtcclxuXHRcdFx0XHRcdG9wYWNpdHkgPSAnMCdcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdG9wYWNpdHkgPSAnMSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG9wYWNpdHlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0bGlnaHQxKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsMSlcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQyKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsMilcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQzKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsMylcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ0KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsNClcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ1KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsNSlcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ2KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsNilcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ3KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsNylcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ4KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsOClcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQ5KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsOSlcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlnaHQxMCgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldE9wYWNpdHkodGhpcy5wZXJjZW50YWdlLDEwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaWdodDExKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0T3BhY2l0eSh0aGlzLnBlcmNlbnRhZ2UsMTEpXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpZ2h0MTIoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRPcGFjaXR5KHRoaXMucGVyY2VudGFnZSwxMilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lm1vb24tYm94e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG5cdC5tb29ue1xyXG5cdFx0d2lkdGg6IDE2cHg7XHJcblx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDEwcHg7XHJcblx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0Lm1vdmUtYm94e1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDE2cHg7XHJcblx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0fVxyXG5cdC5tb3ZlLW1vb257XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMTZweDtcclxuXHRcdGhlaWdodDogMTZweDtcclxuXHRcdHRvcDowO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdH1cclxuXHQubGlnaHR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwLjhweDtcclxuXHRcdGhlaWdodDogM3B4O1xyXG5cdFx0d2lkdGg6IDJweDtcclxuXHRcdHRvcDogNC43NXB4O1xyXG5cdFx0bGVmdDogMTYuNzVweDtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46MHB4IDEzcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQubGlnaHQye1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG5cdH1cclxuXHQubGlnaHQze1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG5cdH1cclxuXHQubGlnaHQ0e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdH1cclxuXHQubGlnaHQ1e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuXHR9XHJcblx0LmxpZ2h0NntcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcblx0fVxyXG5cdC5saWdodDd7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxuXHQubGlnaHQ4e1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuXHR9XHJcblx0LmxpZ2h0OXtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcblx0fVxyXG5cdC5saWdodDEwe1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuXHR9XHJcblx0LmxpZ2h0MTF7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG5cdH1cclxuXHQubGlnaHQxMntcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!******************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-moon.nvue?vue&type=style&index=0&lang=css& */ 52);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_moon_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunLei-moon/chunLei-moon.nvue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "moon-box": {
    "position": "relative",
    "width": "40",
    "height": "40"
  },
  "moon": {
    "width": "16",
    "height": "16",
    "borderRadius": "8",
    "position": "absolute",
    "top": "10",
    "left": "10",
    "backgroundColor": "#ffffff"
  },
  "move-box": {
    "position": "relative",
    "width": "16",
    "height": "16",
    "borderRadius": "8"
  },
  "move-moon": {
    "position": "relative",
    "width": "16",
    "height": "16",
    "top": 0,
    "borderRadius": "8",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "light": {
    "position": "absolute",
    "borderRadius": "0.8",
    "height": "3",
    "width": "2",
    "top": "4.75",
    "left": "16.75",
    "transformOrigin": "0px 13px",
    "backgroundColor": "#FFFFFF"
  },
  "light2": {
    "transform": "rotate(30deg)"
  },
  "light3": {
    "transform": "rotate(60deg)"
  },
  "light4": {
    "transform": "rotate(90deg)"
  },
  "light5": {
    "transform": "rotate(120deg)"
  },
  "light6": {
    "transform": "rotate(150deg)"
  },
  "light7": {
    "transform": "rotate(180deg)"
  },
  "light8": {
    "transform": "rotate(210deg)"
  },
  "light9": {
    "transform": "rotate(240deg)"
  },
  "light10": {
    "transform": "rotate(270deg)"
  },
  "light11": {
    "transform": "rotate(300deg)"
  },
  "light12": {
    "transform": "rotate(330deg)"
  }
}

/***/ }),
/* 53 */
/*!*******************************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=91143d40&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=91143d40&scoped=true&lang=scss& */ 54);
/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_91143d40_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=91143d40&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "android-lock": {
    "position": "absolute",
    "left": "40",
    "width": "30",
    "height": "30",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "borderRadius": 50
  },
  "android-icon": {
    "fontSize": "18",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "android-title": {
    "fontSize": "18",
    "color": "#ffffff"
  },
  "android-title-box": {
    "alignItems": "center",
    "textAlign": "center",
    "borderWidth": "2",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "android-srcTitle": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "android-sm-title": {
    "fontSize": "8",
    "color": "#ffffff"
  },
  "android-big-title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "android-big-icon": {
    "fontSize": "52",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "ios-icon": {
    "fontSize": "18",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "ios-title": {
    "fontSize": "18",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "ios-lock": {
    "position": "absolute",
    "left": "40",
    "width": "40",
    "height": "40",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "borderRadius": 50,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "ios-title-box": {
    "alignItems": "center",
    "textAlign": "center",
    "borderWidth": "2",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "ios-srcTitle": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "ios-sm-title": {
    "fontSize": "6",
    "color": "#ffffff"
  },
  "ios-big-title": {
    "fontSize": "28",
    "color": "#ffffff"
  },
  "ios-big-icon": {
    "fontSize": "52",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "video-box": {
    "height": "200"
  },
  "marginRight": {
    "marginRight": "10"
  },
  "marginright": {
    "marginRight": "5"
  },
  "btnBox": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "btnbox": {
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5"
  },
  "video": {
    "flex": 1,
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "video-view": {
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "zIndex": 999
  },
  "sm-title": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "set-view": {
    "position": "absolute",
    "top": 0,
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "danmu-view": {
    "position": "absolute",
    "top": 0,
    "height": "160"
  },
  "rate-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "80",
    "paddingBottom": "40",
    "paddingLeft": "80",
    "justifyContent": "flex-end",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "wide-screen-rate-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "40",
    "paddingBottom": "40",
    "paddingLeft": "40",
    "justifyContent": "center",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "power-view": {
    "alignItems": "center"
  },
  "power-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "power-header": {
    "height": "4",
    "width": "2",
    "backgroundColor": "#ffffff"
  },
  "power-body": {
    "height": "9",
    "width": "20",
    "borderWidth": "1",
    "borderColor": "#ffffff",
    "paddingTop": "1",
    "paddingRight": "1",
    "paddingBottom": "1",
    "paddingLeft": "1",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "power-level": {
    "height": "5"
  },
  "scroll-view": {
    "flexDirection": "row"
  },
  "scroll-view-wide-screen": {
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "more-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "100",
    "paddingBottom": "40",
    "paddingLeft": "100"
  },
  "more-set-width-screen": {
    "paddingTop": "40",
    "paddingRight": "20",
    "paddingBottom": "40",
    "paddingLeft": "20",
    "height": "200",
    "justifyContent": "center"
  },
  "episode-set": {
    "flexDirection": "column",
    "paddingTop": "40",
    "paddingRight": "100",
    "paddingBottom": "40",
    "paddingLeft": "100",
    "flexWrap": "wrap"
  },
  "episode-scroll": {
    "flexDirection": "column",
    "flexWrap": "wrap"
  },
  "epiBox": {
    "height": "50",
    "width": "50",
    "marginRight": "20",
    "marginBottom": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "more-row": {
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "more-row-width-screen": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "100"
  },
  "more-tap": {
    "height": "1",
    "opacity": 0.6,
    "backgroundColor": "#70A0A0"
  },
  "more-box-width-screen": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "90",
    "width": "90",
    "marginRight": "10"
  },
  "more-box": {
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "100",
    "width": "120",
    "marginRight": "20"
  },
  "set-bottom": {
    "flexDirection": "row"
  },
  "setBox": {
    "height": "100",
    "width": "100",
    "marginRight": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(94,162,162,0.2)"
  },
  "width-screen-set-box": {
    "height": "40",
    "width": "40",
    "marginRight": "8",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(94,162,162,0.2)"
  },
  "small-title": {
    "fontSize": "14"
  },
  "wide-screen-sex-box": {
    "height": "20",
    "width": "20",
    "marginRight": "4",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(94,162,162,0.2)"
  },
  "solid-bottom": {
    "borderBottomWidth": "2"
  },
  "controls-top": {
    "position": "absolute",
    "backgroundImage": "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))",
    "height": "40",
    "transform": "translateY(-40px)",
    "top": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "top-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "12",
    "color": "#ffffff"
  },
  "top-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "12",
    "color": "#ffffff"
  },
  "stop": {
    "position": "absolute",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "borderRadius": "2"
  },
  "rate": {
    "position": "absolute",
    "top": "0",
    "width": "750rpx",
    "height": "160",
    "flexDirection": "column",
    "zIndex": 101
  },
  "rate-view": {
    "position": "absolute",
    "height": "20",
    "top": "240",
    "right": 0,
    "zIndex": 90
  },
  "current-view": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "width": "300rpx",
    "height": "80",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "position": "absolute",
    "top": "30",
    "left": "225rpx"
  },
  "fullCurrent-view": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "width": "220",
    "height": "40",
    "top": "50",
    "position": "absolute"
  },
  "fullCurrent-current": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "5",
    "width": "150",
    "height": "80",
    "top": "60",
    "position": "absolute"
  },
  "fullControls-bottom-left": {
    "flexDirection": "row"
  },
  "fullCurrent-bottom": {
    "width": "110",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "marginTop": "15",
    "height": "5",
    "overflow": "hidden"
  },
  "fullCurrent-volume": {
    "width": "150",
    "height": "5",
    "overflow": "hidden",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "relative"
  },
  "fullCurrent-volume-left": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #BAFFFD, #71FCBA)",
    "height": "5"
  },
  "fullCurrent-volume-right": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #71FCBA, #E35313)",
    "height": "5"
  },
  "fullCurrent-bright": {
    "width": "150",
    "height": "5",
    "overflow": "hidden",
    "justifyContent": "space-between",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "relative"
  },
  "fullCurrent-bright-left": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #01B6FF, #FFF159)",
    "height": "5"
  },
  "fullCurrent-bright-right": {
    "width": "75",
    "backgroundImage": "linear-gradient(to right, #FFF159, #FFFFFF)",
    "height": "5"
  },
  "fullCurrent-progress": {
    "position": "absolute",
    "right": "-1",
    "backgroundColor": "#000000",
    "height": "5"
  },
  "current-bottom": {
    "width": "260rpx",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "marginTop": "15",
    "height": "5",
    "overflow": "hidden"
  },
  "current-progress": {
    "backgroundColor": "rgba(255,255,255,0.7)",
    "height": "5"
  },
  "rate-list": {
    "paddingTop": "20",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "fullRate-view": {
    "flexDirection": "row"
  },
  "controls-view": {
    "width": "750rpx",
    "height": "40",
    "position": "absolute",
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
    "bottom": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "remember-view": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "bottom": "50",
    "left": "10",
    "paddingRight": "5",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "fullControls-remember": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "bottom": "130",
    "left": "35",
    "paddingRight": "5",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "controls-view-top": {
    "width": "750rpx",
    "height": "40",
    "position": "absolute",
    "top": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "top-title": {
    "color": "#FFFFFF"
  },
  "fullControls-view": {
    "backgroundImage": "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
    "height": "120",
    "transform": "translateY(120px)",
    "position": "absolute",
    "bottom": 0,
    "zIndex": 99999,
    "flexDirection": "column",
    "alignItems": "center"
  },
  "fullControls-top": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "20",
    "flex": 1,
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40",
    "alignItems": "center"
  },
  "fullControls-center": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "40"
  },
  "fullControls-bottom": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "40",
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "fullControls-bottom-right": {
    "flexDirection": "row"
  },
  "video-slider": {
    "zIndex": 100,
    "flex": 1
  }
}

/***/ }),
/* 55 */
/*!**************************************************************************************************************************!*\
  !*** D:/ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../soft/HBuilderX.2.6.16.20200424.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video-nvue.nvue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony import */ var _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_soft_HBuilderX_2_6_16_20200424_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJqQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiI1NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9zb2Z0L0hCdWlsZGVyWC4yLjYuMTYuMjAyMDA0MjQuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLW52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL3NvZnQvSEJ1aWxkZXJYLjIuNi4xNi4yMDIwMDQyNC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vc29mdC9IQnVpbGRlclguMi42LjE2LjIwMjAwNDI0LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby1udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/ethan/demo/App/WebViewDemo/pages/chunlei-video-nvue/chunlei-video-nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { chunleiVideo: _chunleiVideo.default }, data: function data() {return { windowHeight: 0, windowWidth: 0, statusBarHeight: 0, fullScreen: false, initialTime: 0, // 开始播放时间\n      video: {\n        title: \"测试视频\",\n        src: \"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4\",\n        duartion: 60,\n        isWideScreen: false } };\n\n\n  },\n  created: function created() {\n\n    plus.screen.lockOrientation(\"portrait-primary\"); // 锁定屏幕竖屏状态\n\n  },\n  onShow: function onShow() {\n    if (typeof this.$refs.video != 'undefined') this.$refs.video.pageShow(); // 获取 video 组件\n    try {\n      var videoCurrent = uni.getStorageSync(\"videoCurrent\");\n      if (videoCurrent && videoCurrent.title == this.video.title) {\n        this.initialTime = videoCurrent.current;\n      }\n    } catch (err) {\n      __f__(\"log\", '获取记录失败!', \" at pages/chunlei-video-nvue/chunlei-video-nvue.nvue:46\");\n    }\n\n  },\n  onUnload: function onUnload() {\n    if (typeof this.$refs.video != 'undefined') {\n      this.$refs.video.pageHide();\n    }\n  },\n  onLoad: function onLoad(options) {\n    var data = options.data;\n    if (data) {\n      this.video = JSON.parse(data);\n    }\n    try {\n      var res = uni.getSystemInfoSync();\n      this.windowHeight = res.windowHeight - 4; // 显示区高度\n      this.statusBarHeight = res.statusBarHeight;\n      this.windowWidth = res.windowWidth; // 显示区宽度\n    } catch (e) {\n      __f__(\"log\", '获取系统信息失败!', e, \" at pages/chunlei-video-nvue/chunlei-video-nvue.nvue:66\");\n    }\n  },\n  methods: {\n    fullscreenchange: function fullscreenchange(e) {// 全屏\n      this.fullScreen = e;\n    },\n    clickDownload: function clickDownload(e) {// 下载\n      __f__(\"log\", e, \" at pages/chunlei-video-nvue/chunlei-video-nvue.nvue:74\");\n    },\n    back: function back() {// 返回\n      uni.navigateBack({\n        delta: 1 });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2h1bmxlaS12aWRlby1udnVlL2NodW5sZWktdmlkZW8tbnZ1ZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBLHlIOzs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSxtQ0FEQSxFQURBLEVBSUEsSUFKQSxrQkFJQSxDQUNBLFNBQ0EsZUFEQSxFQUVBLGNBRkEsRUFHQSxrQkFIQSxFQUlBLGlCQUpBLEVBS0EsY0FMQSxFQUtBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLGdFQUZBO0FBR0Esb0JBSEE7QUFJQSwyQkFKQSxFQU5BOzs7QUFhQSxHQWxCQTtBQW1CQSxTQW5CQSxxQkFtQkE7O0FBRUEsb0RBRkEsQ0FFQTs7QUFFQSxHQXZCQTtBQXdCQSxRQXhCQSxvQkF3QkE7QUFDQSw0RUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsQ0FLQTtBQUNBO0FBQ0E7O0FBRUEsR0FuQ0E7QUFvQ0EsVUFwQ0Esc0JBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F4Q0E7QUF5Q0EsUUF6Q0Esa0JBeUNBLE9BekNBLEVBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBRkEsQ0FFQTtBQUNBO0FBQ0EseUNBSkEsQ0FJQTtBQUNBLEtBTEEsQ0FLQTtBQUNBO0FBQ0E7QUFDQSxHQXREQTtBQXVEQTtBQUNBLG9CQURBLDRCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGlCQUpBLHlCQUlBLENBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFFBUEEsa0JBT0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBWEEsRUF2REEsRSIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzdGF0dXNCYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OnN0YXR1c0JhckhlaWdodCsncHgnLHdpZHRoOndpbmRvd1dpZHRoKydweCcsYmFja2dyb3VuZENvbG9yOicjZmY3MDZmJ31cIiAvPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8Y2h1bmxlaS12aWRlbyBhdXRvcGxheSBvcmllbnRhdGlvbiA6c3R5bGU9XCJ7aGVpZ2h0Oih3aW5kb3dIZWlnaHQtc3RhdHVzQmFySGVpZ2h0KzQpKydweCcsd2lkdGg6d2luZG93V2lkdGgrJ3B4J31cIiByZWY9XCJ2aWRlb1wiXHJcblx0XHQgY29sb3I9XCIjZmY3MDZmXCIgOnRpdGxlPVwidmlkZW8udGl0bGVcIiA6c3JjTGlzdD1cInZpZGVvLnNyY1wiIDppc1dpZGVTY3JlZW49XCJ2aWRlby5pc1dpZGVTY3JlZW5cIiA6ZGV2aWNlV2lkdGg9XCJ3aW5kb3dXaWR0aFwiXHJcblx0XHQgOmdEdXJhdGlvbj1cInZpZGVvLmR1YXJ0aW9uXCIgOmRldmljZUhlaWdodD1cIih3aW5kb3dIZWlnaHQtMzApXCIgQGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsc2NyZWVuY2hhbmdlXCIgOmluaXRpYWxUaW1lPVwiaW5pdGlhbFRpbWVcIiBAYmFjaz1cImJhY2tcIi8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2h1bmxlaVZpZGVvIGZyb20gJ0AvY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRjaHVubGVpVmlkZW9cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogMCxcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXHJcblx0XHRcdFx0ZnVsbFNjcmVlbjogZmFsc2UsXHJcblx0XHRcdFx0aW5pdGlhbFRpbWU6IDAsIC8vIOW8gOWni+aSreaUvuaXtumXtFxyXG5cdFx0XHRcdHZpZGVvOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogXCLmtYvor5Xop4bpopFcIixcclxuXHRcdFx0XHRcdHNyYzogXCJodHRwOi8vY2xpcHMudm9yd2FlcnRzLWdtYmguZGUvYmlnX2J1Y2tfYnVubnkubXA0XCIsXHJcblx0XHRcdFx0XHRkdWFydGlvbjogNjAsXHJcblx0XHRcdFx0XHRpc1dpZGVTY3JlZW46IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJwb3J0cmFpdC1wcmltYXJ5XCIpIC8vIOmUgeWumuWxj+W5leerluWxj+eKtuaAgVxyXG5cdFx0XHQvLyNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLiRyZWZzLnZpZGVvICE9ICd1bmRlZmluZWQnKSB0aGlzLiRyZWZzLnZpZGVvLnBhZ2VTaG93KCkgLy8g6I635Y+WIHZpZGVvIOe7hOS7tlxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGxldCB2aWRlb0N1cnJlbnQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ2aWRlb0N1cnJlbnRcIik7XHJcblx0XHRcdFx0aWYgKHZpZGVvQ3VycmVudCYmdmlkZW9DdXJyZW50LnRpdGxlPT10aGlzLnZpZGVvLnRpdGxlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmluaXRpYWxUaW1lID0gdmlkZW9DdXJyZW50LmN1cnJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W6K6w5b2V5aSx6LSlIScpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy4kcmVmcy52aWRlbyAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW8ucGFnZUhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRcdGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdHRoaXMudmlkZW8gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodCAtIDQ7IC8vIOaYvuekuuWMuumrmOW6plxyXG5cdFx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodDtcclxuXHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoOyAvLyDmmL7npLrljLrlrr3luqZcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bns7vnu5/kv6Hmga/lpLHotKUhJywgZSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZnVsbHNjcmVlbmNoYW5nZShlKSB7Ly8g5YWo5bGPXHJcblx0XHRcdFx0dGhpcy5mdWxsU2NyZWVuID0gZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0Rvd25sb2FkKGUpIHsgLy8g5LiL6L29XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YmFjaygpey8vIOi/lOWbnlxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6MVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56\n");

/***/ })
/******/ ]);