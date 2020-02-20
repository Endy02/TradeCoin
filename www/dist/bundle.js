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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/style.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/style.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Saira:400,500,600,700&display=swap);\"]);\n// Module\nexports.push([module.i, \"/* LAYOUTS */\\n/* GENERAL */\\n* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Raleway', sans-serif; }\\n\\n/* STYLE CUSTOM LIKE BOOTSTRAP */\\n/* Flex box */\\n.d-flex {\\n  display: flex; }\\n\\n.flex-column {\\n  flex-direction: column; }\\n\\n.jcsa {\\n  justify-content: space-around; }\\n\\n.jcc {\\n  justify-content: center; }\\n\\n.p-right-3 {\\n  padding-right: 3rem !important; }\\n\\n.p-left-3 {\\n  padding-left: 3rem !important; }\\n\\n.m-top-8 {\\n  margin-top: 8rem; }\\n\\n.container {\\n  width: 100%;\\n  padding-right: 1em;\\n  padding-left: 1em;\\n  margin-right: auto;\\n  margin-left: auto; }\\n\\n.row {\\n  display: flex;\\n  flex-wrap: wrap; }\\n\\n/* COLUMNS SIZE */\\n.col-md-12 {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 1em;\\n  padding-left: 1em; }\\n\\n.col-md-8 {\\n  position: relative;\\n  width: 100%;\\n  min-height: 1px;\\n  padding-right: 1em;\\n  padding-left: 1em; }\\n\\n.col-md-6 {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 1em;\\n  padding-left: 1em; }\\n\\n.col-md-4 {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 1em;\\n  padding-left: 1em; }\\n\\n.col-md-2 {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 1em;\\n  padding-left: 1em; }\\n\\n/* NAVBAR */\\n.navbar {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center; }\\n\\n.navbar-brand {\\n  margin-left: 2em;\\n  display: flex;\\n  padding: .5em; }\\n  .navbar-brand img {\\n    width: 2.5em;\\n    height: 2.5em; }\\n  .navbar-brand p {\\n    margin: 0;\\n    padding: 0 .25em;\\n    line-height: 1.3;\\n    font-size: 2em; }\\n\\n.navbar-content-end {\\n  display: flex;\\n  justify-content: flex-end;\\n  width: 100%;\\n  margin: 0;\\n  padding-right: 2em; }\\n  .navbar-content-end .navbar-item {\\n    list-style: none;\\n    padding: 1.5em 1em; }\\n\\nsection.all-content {\\n  width: 100%;\\n  height: 100vh;\\n  background: linear-gradient(#00beee, #242424); }\\n\\nsection.config-bdd {\\n  position: absolute;\\n  top: 30%;\\n  left: 2.5%;\\n  transform: translateY(-30%);\\n  width: 95%;\\n  height: 80vh;\\n  background-color: #1e1e1e;\\n  border-radius: 2.5rem;\\n  color: #fff; }\\n\\nheader {\\n  position: relative;\\n  margin-top: 1.5rem;\\n  margin-left: 1.5rem;\\n  letter-spacing: 3px;\\n  display: flex; }\\n  header img {\\n    width: 5em;\\n    height: auto; }\\n  header h1 {\\n    /*position: absolute;\\n    bottom: 0;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    margin: .75em 0;\\n    font-size: 1.5em;*/ }\\n\\n.container-center {\\n  position: relative;\\n  width: 100%;\\n  padding-right: 8rem;\\n  padding-left: 8rem;\\n  margin-top: 2rem; }\\n\\n.timeline {\\n  white-space: nowrap;\\n  overflow-x: hidden; }\\n  .timeline ul {\\n    font-size: 0;\\n    width: 100%;\\n    padding: 4rem 0; }\\n    .timeline ul li {\\n      position: relative;\\n      display: inline-block;\\n      list-style-type: none;\\n      height: .5rem;\\n      background: #fff; }\\n      .timeline ul li:first-child {\\n        width: 10%;\\n        background-color: #00beee;\\n        border: 1px solid #00beee; }\\n      .timeline ul li:last-child {\\n        width: 10%;\\n        background-color: #fff;\\n        border: 1px solid #fff; }\\n      .timeline ul li:nth-child(2) {\\n        width: 30%;\\n        background-color: #fff;\\n        border: 1px solid #fff; }\\n      .timeline ul li:nth-child(3), .timeline ul li:nth-child(4) {\\n        width: 20%;\\n        background-color: #fff;\\n        border: 1px solid #fff; }\\n      .timeline ul li:not(:first-child) {\\n        margin-left: 1.6rem;\\n        background-color: #fff;\\n        border: 1px solid #fff; }\\n      .timeline ul li:first-child::after {\\n        content: '';\\n        position: absolute;\\n        top: 50%;\\n        transform: translateY(-50%);\\n        left: calc(100%);\\n        bottom: 0;\\n        width: 1.5rem;\\n        height: 1.5rem;\\n        border: 2px solid #00beee;\\n        border-radius: 100%;\\n        background-color: #00beee; }\\n      .timeline ul li:nth-child(2)::after, .timeline ul li:nth-child(3)::after, .timeline ul li:nth-child(4)::after {\\n        content: '';\\n        position: absolute;\\n        top: 50%;\\n        transform: translateY(-50%);\\n        left: calc(100%);\\n        bottom: 0;\\n        width: 1.5rem;\\n        height: 1.5rem;\\n        border: 2px solid #fff;\\n        border-radius: 100%;\\n        background-color: #fff; }\\n\\n/* ELEMENT INTO LI */\\n.timeline ul li div {\\n  position: absolute;\\n  left: calc(50%);\\n  width: 280px;\\n  padding: 0.95rem;\\n  font-size: 1rem;\\n  white-space: normal;\\n  color: #ffffff;\\n  top: -16px;\\n  transform: translateY(-100%); }\\n\\n.timeline ul li:nth-child(2) div {\\n  left: calc(85%); }\\n\\n.timeline ul li:nth-child(3) div {\\n  left: calc(90%); }\\n\\n.timeline ul li:nth-child(4) div {\\n  left: calc(70%); }\\n\\n.blue-light {\\n  background-color: #0772ff; }\\n\\nfooter {\\n  width: 100%;\\n  position: absolute;\\n  bottom: 4rem; }\\n  footer button {\\n    width: 12em;\\n    letter-spacing: 2px;\\n    color: #1e1e1e; }\\n\\n/* NAVBAR HOME */\\nnav {\\n  z-index: 10;\\n  background-color: #fff;\\n  opacity: .95;\\n  box-shadow: 2px 2px 4px 0 rgba(137, 146, 177, 0.15), 2px 6px 20px 0 rgba(137, 146, 177, 0.15);\\n  /*box-shadow: 1px 1px 10px black;*/ }\\n\\n.first-word {\\n  font-weight: 500; }\\n\\n.second-word {\\n  color: #f2a900; }\\n\\n.link-sign-in {\\n  font-size: .90em; }\\n\\n.navbar-content-end .navbar-item:first-child,\\n.navbar-content-end .navbar-item:nth-child(3) {\\n  padding-top: 35px; }\\n\\n.navbar-content-end .navbar-item:nth-child(2) {\\n  padding-top: 1.5em; }\\n\\n.btn-border-orange:hover {\\n  color: #fff;\\n  background-color: #f2a900;\\n  border-color: #f2a900;\\n  transition: .3s ease-in; }\\n\\n/* HEADER */\\nheader {\\n  position: relative;\\n  padding-top: 4rem;\\n  margin-left: 0 !important;\\n  background-attachment: fixed;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 100%; }\\n  header img {\\n    width: 100%;\\n    height: 100%; }\\n\\n.content-header {\\n  position: absolute;\\n  top: 10em;\\n  left: 10em;\\n  color: white;\\n  width: 52%;\\n  display: flex;\\n  flex-direction: column; }\\n  .content-header h1 {\\n    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.55); }\\n  .content-header p {\\n    margin-top: 0;\\n    font-size: 1.5em;\\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }\\n  .content-header .money-button {\\n    margin-top: 1em;\\n    font-size: 1.3rem;\\n    padding: .75rem 2rem;\\n    box-shadow: 2px 2px 4px 0 rgba(137, 146, 177, 0.15), 2px 6px 20px 0 rgba(137, 146, 177, 0.15); }\\n\\n/* SECTION PLATFORM CONTAINER */\\n.plateform-container {\\n  margin-top: 7rem; }\\n  .plateform-container .row div:first-child {\\n    margin-top: 3em; }\\n  .plateform-container .row div:nth-child(2) h2 {\\n    margin-top: 5rem;\\n    font-size: 2rem;\\n    padding: 0 1em 0 0; }\\n  .plateform-container .row div:nth-child(2) p {\\n    font-size: 1.5em;\\n    padding: 0 1em 0 0; }\\n  .plateform-container .platform-device-img {\\n    margin-top: 4em;\\n    width: 100%;\\n    height: 100%; }\\n\\n/* SECTION CRYPTO CONTAINER */\\n.crypto-container {\\n  margin-top: 12rem; }\\n  .crypto-container .row div:first-child h2 {\\n    font-size: 2rem;\\n    padding: 0 0 0 1.2em; }\\n  .crypto-container .row div:first-child p {\\n    font-size: 1.5em;\\n    padding: 0 0 0 1.5em; }\\n  .crypto-container .row div:nth-child(2) {\\n    margin-top: 3em; }\\n  .crypto-container .cryptos {\\n    width: 80%;\\n    margin-left: 1em; }\\n\\n.free-content h2 {\\n  font-size: 2rem;\\n  text-align: center; }\\n\\n.free-content h1 {\\n  font-size: 2.5rem;\\n  text-align: center; }\\n\\n.free-content p {\\n  font-size: 1.5em;\\n  text-align: center; }\\n\\n/* TOOLS */\\n/* COLUMNS SIZE */\\n@media (min-width: 768px) {\\n  .col-md-2 {\\n    -webkit-box-flex: 0;\\n    -ms-flex: 0 0 16.666667%;\\n    flex: 0 0 16.666667%;\\n    max-width: 16.666667%; }\\n  .col-md-4 {\\n    -webkit-box-flex: 0;\\n    -ms-flex: 0 0 33.333333%;\\n    flex: 0 0 33.333333%;\\n    max-width: 33.333333%; }\\n  .col-md-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%; }\\n  .col-md-8 {\\n    -webkit-box-flex: 0;\\n    -ms-flex: 0 0 66.666667%;\\n    flex: 0 0 66.666667%;\\n    max-width: 66.666667%; }\\n  .col-md-12 {\\n    -webkit-box-flex: 0;\\n    -ms-flex: 0 0 100%;\\n    flex: 0 0 100%;\\n    max-width: 100%; } }\\n\\n/* CONTAINERS SIZE */\\n@media (min-width: 992px) {\\n  .container, .container-lg, .container-md, .container-sm {\\n    max-width: 960px; } }\\n\\n@media (min-width: 768px) {\\n  .container, .container-md, .container-sm {\\n    max-width: 720px; } }\\n\\n@media (min-width: 576px) {\\n  .container, .container-sm {\\n    max-width: 540px; } }\\n\\n@media (min-width: 992px) {\\n  .container {\\n    max-width: 960px; } }\\n\\n@media (min-width: 768px) {\\n  .container {\\n    max-width: 720px; } }\\n\\n@media (min-width: 576px) {\\n  .container {\\n    max-width: 540px; } }\\n\\n/* MODULES */\\n.form-group {\\n  display: flex;\\n  flex-direction: column; }\\n\\n.form-input-bg-dark {\\n  background-color: #f8f9ff;\\n  border: 1px solid #F8F9FF;\\n  border-radius: .5rem;\\n  height: 2.5rem;\\n  font-size: 1rem; }\\n\\n.form-label {\\n  margin: .5em 0;\\n  letter-spacing: 1.5px; }\\n\\n.input-group {\\n  display: flex;\\n  flex-direction: column;\\n  padding-bottom: .5em; }\\n\\n.btn {\\n  display: inline-block;\\n  font-weight: 400;\\n  color: #212529;\\n  text-align: center;\\n  vertical-align: middle;\\n  cursor: pointer;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  background-color: transparent;\\n  border: 1px solid transparent;\\n  padding: .5em .75rem;\\n  line-height: 1.5;\\n  border-radius: 1.5rem;\\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; }\\n\\n.btn-blue {\\n  color: #212529;\\n  background-color: #00beee;\\n  border-color: #00beee; }\\n\\n.btn-orange {\\n  color: #fff;\\n  background-color: #f2a900;\\n  border-color: #f2a900; }\\n\\n.btn-border-orange {\\n  color: #f2a900;\\n  background-color: #fff;\\n  border: 1px solid #f2a900; }\\n\\n.logo img {\\n  display: block;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 50px;\\n  margin-bottom: 50px;\\n  max-width: 50%;\\n  height: auto;\\n  text-align: center; }\\n\\n.sidebar-left {\\n  background-color: #323232;\\n  height: 100%;\\n  width: 160px;\\n  top: 0;\\n  left: 0;\\n  position: fixed;\\n  z-index: 1;\\n  overflow-x: hidden;\\n  padding-top: 20px;\\n  float: left;\\n  border-bottom-right-radius: 50px;\\n  border-top-right-radius: 50px; }\\n\\n.sidebar-left ul {\\n  padding-left: 0; }\\n\\n.sidebar-left a {\\n  padding: 6px 8px 6px 16px;\\n  text-decoration: none;\\n  font-size: 15px;\\n  color: white;\\n  display: block; }\\n\\n.sidebar-left a:hover {\\n  color: #323232;\\n  background-color: #0AE2FF; }\\n\\n.sidebar-right {\\n  background-color: #323232;\\n  height: 60%;\\n  width: 40px;\\n  top: 0;\\n  right: 0;\\n  position: fixed;\\n  z-index: 1;\\n  overflow-x: hidden;\\n  margin-top: 10%;\\n  padding-top: 20px;\\n  float: right;\\n  border-bottom-left-radius: 50px;\\n  border-top-left-radius: 50px; }\\n\\n.sidebar-right ul {\\n  padding-left: 0; }\\n\\n.sidebar-right a {\\n  padding: 6px 8px 6px 16px;\\n  text-decoration: none;\\n  font-size: 15px;\\n  color: white;\\n  display: block; }\\n\\n.sidebar-right a:hover {\\n  color: #323232;\\n  background-color: #0AE2FF; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./public/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./public/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/scss/style.scss":
/*!********************************!*\
  !*** ./public/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./public/scss/style.scss?");

/***/ })

/******/ });