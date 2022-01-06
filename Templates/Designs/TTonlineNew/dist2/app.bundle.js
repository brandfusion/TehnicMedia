/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/app.js":
/*!*********************!*\
  !*** ./_src/app.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Templates_Designs_TTonlineNew_css_custom_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Templates/Designs/TTonlineNew/css/custom.less */ \"./Templates/Designs/TTonlineNew/css/custom.less\");\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ \"./_src/custom.js\");\n/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://tehnicmedia/./_src/app.js?");

/***/ }),

/***/ "./_src/custom.js":
/*!************************!*\
  !*** ./_src/custom.js ***!
  \************************/
/***/ (function() {

eval("console.log(\"loaded\");\n\nfunction makeBannerStickyOnScroll(element) {\n  if (element !== null) {\n    var elementTop = element.getBoundingClientRect().top;\n    var closeIcon = document.createElement('i');\n    closeIcon.setAttribute('style', 'padding: .5em; border-radius: 25px; background-color: black; color: white; position: absolute; right:0; cursor: pointer; top: 0');\n    closeIcon.setAttribute('onclick', 'this.parentNode.classList.add(\"closed\"); this.parentNode.querySelectorAll(\"*\").forEach(function(el) {el.remove()});');\n    closeIcon.classList.add('fa', 'fa-close', 'close-icon');\n    window.addEventListener('scroll', function (e) {\n      if (window.scrollY > elementTop) {\n        element.style.position = 'fixed';\n        element.style.zIndex = '999';\n        element.style.bottom = '2%';\n        !element.classList.contains(\"closed\") && element.querySelector('.close-icon') === null && element.appendChild(closeIcon);\n      } else {\n        element.style.position = '';\n        element.style.zIndex = '';\n        element.style.bottom = '';\n        element.querySelector('.close-icon') !== null && element.querySelector('.close-icon').remove();\n      }\n    });\n  }\n}\n\nif (window.innerWidth < 500) {\n  makeBannerStickyOnScroll(document.querySelector('.ad728-wrapper'));\n}\n\n//# sourceURL=webpack://tehnicmedia/./_src/custom.js?");

/***/ }),

/***/ "./Templates/Designs/TTonlineNew/css/custom.less":
/*!*******************************************************!*\
  !*** ./Templates/Designs/TTonlineNew/css/custom.less ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tehnicmedia/./Templates/Designs/TTonlineNew/css/custom.less?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/app.js");
/******/ 	
/******/ })()
;