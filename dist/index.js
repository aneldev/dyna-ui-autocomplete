(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-autocomplete", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-autocomplete"] = factory(require("react"), require("react-dom"));
	else
		root["dyna-ui-autocomplete"] = factory(root["react"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(28);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.faIcon = function (awesomeFontIconName, className) {
    if (className === void 0) { className = ''; }
    return React.createElement("i", { className: ("fa fa-" + awesomeFontIconName + " " + className).trim(), "aria-hidden": "true" });
};
exports.debounce = function (cbFunction, timeout) {
    var setTimerHolder = null;
    var lastCalled = 0;
    var runIt = function (args) {
        clearTimeout(setTimerHolder);
        setTimerHolder = null;
        lastCalled = new Date();
        cbFunction.apply(void 0, args);
    };
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (setTimerHolder) {
            clearTimeout(setTimerHolder);
        }
        if (Number(new Date()) - Number(lastCalled) > timeout) {
            runIt(args);
        }
        else {
            setTimerHolder = setTimeout(function () { return runIt(args); }, timeout);
        }
    };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaAutoComplete_1 = __webpack_require__(12);
exports.DynaAutoComplete = DynaAutoComplete_1.DynaAutoComplete;
exports.EMode = DynaAutoComplete_1.EMode;
exports.EStyle = DynaAutoComplete_1.EStyle;
exports.EColor = DynaAutoComplete_1.EColor;
exports.ESize = DynaAutoComplete_1.ESize;
var utils_1 = __webpack_require__(9);
exports.debounce = utils_1.debounce;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactAutoComplete = __webpack_require__(13);
var dyna_ui_field_wrapper_1 = __webpack_require__(24);
exports.EColor = dyna_ui_field_wrapper_1.EColor;
exports.EMode = dyna_ui_field_wrapper_1.EMode;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.ESize = dyna_ui_field_wrapper_1.ESize;
var dyna_ui_picker_container_1 = __webpack_require__(25);
__webpack_require__(26);
__webpack_require__(29);
var utils_1 = __webpack_require__(9);
var DynaAutoComplete = /** @class */ (function (_super) {
    __extends(DynaAutoComplete, _super);
    function DynaAutoComplete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DynaAutoComplete.prototype.handlerOnChange = function (event, value) {
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return;
        var _a = this.props, name = _a.name, items = _a.items, onChange = _a.onChange, getItemValue = _a.getItemValue;
        onChange(name, {
            value: value,
            item: items.find(function (item) { return value === getItemValue(item); }),
        });
    };
    DynaAutoComplete.prototype.handlerOnSelect = function (value, item) {
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return;
        if (this.props.value === value)
            return; // exit, nothing is changed
        var _a = this.props, name = _a.name, onChange = _a.onChange;
        onChange(name, {
            value: value,
            item: item,
        });
    };
    DynaAutoComplete.prototype.renderMenu = function (children) {
        if (this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW)
            return React.createElement("div", null);
        if (!children || !children.length)
            return React.createElement("div", null);
        return (React.createElement("div", { className: "dyna-autocomplete-menu" },
            React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, { show: true, style: dyna_ui_picker_container_1.EStyle.ROUNDED, color: dyna_ui_picker_container_1.EColor.WHITE_BLACK, responsive: false }, children)));
    };
    DynaAutoComplete.prototype.render = function () {
        var _a = this.props, className = _a.className, mode = _a.mode, style = _a.style, color = _a.color, size = _a.size, label = _a.label, required = _a.required, isLoading = _a.isLoading, items = _a.items, value = _a.value, selectOnBlur = _a.selectOnBlur, inputProps = _a.inputProps, getItemValue = _a.getItemValue, renderItem = _a.renderItem, dropDownFilter = _a.dropDownFilter, validationMessage = _a.validationMessage, footer = _a.footer;
        return (React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, { className: ("dyna-autocomplete " + className).trim(), style: style, color: color, size: size, mode: mode, inputElementSelector: "input", label: label, isLoading: isLoading ? utils_1.faIcon('circle-o-notch fa-spin fa-3x fa-fw') : null, required: required, validationMessage: validationMessage, footer: footer },
            React.createElement(ReactAutoComplete, { items: items, value: value, enabled: mode === dyna_ui_field_wrapper_1.EMode.EDIT, selectOnBlur: selectOnBlur, getItemValue: getItemValue, renderMenu: this.renderMenu.bind(this), renderItem: renderItem, shouldItemRender: dropDownFilter, inputProps: inputProps, onChange: this.handlerOnChange.bind(this), onSelect: this.handlerOnSelect.bind(this) })));
    };
    DynaAutoComplete.defaultProps = {
        className: '',
        name: '',
        mode: dyna_ui_field_wrapper_1.EMode.EDIT,
        style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
        color: dyna_ui_field_wrapper_1.EColor.WHITE_BLACK,
        size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
        label: null,
        isLoading: false,
        items: [],
        value: "",
        inputProps: {},
        selectOnBlur: false,
        getItemValue: function (item) { return ""; },
        renderItem: function (item, isFocused) { return null; },
        dropDownFilter: function (item, enteredText) { return true; },
        validationMessage: null,
        footer: null,
        onChange: function (name, value) { return undefined; },
    };
    return DynaAutoComplete;
}(React.Component));
exports.DynaAutoComplete = DynaAutoComplete;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(15);

var _require = __webpack_require__(20),
    findDOMNode = _require.findDOMNode;

var scrollIntoView = __webpack_require__(21);

var IMPERATIVE_API = ['blur', 'checkValidity', 'click', 'focus', 'select', 'setCustomValidity', 'setSelectionRange', 'setRangeText'];

function getScrollOffset() {
  return {
    x: window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
}

var Autocomplete = function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      isOpen: false,
      highlightedIndex: null
    };
    _this._debugStates = [];
    _this.ensureHighlightedIndex = _this.ensureHighlightedIndex.bind(_this);
    _this.exposeAPI = _this.exposeAPI.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.maybeAutoCompleteText = _this.maybeAutoCompleteText.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.refs is frozen, so we need to assign a new object to it
      this.refs = {};
      this._ignoreBlur = false;
      this._ignoreFocus = false;
      this._scrollOffset = null;
      this._scrollTimer = null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._scrollTimer);
      this._scrollTimer = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.highlightedIndex !== null) {
        this.setState(this.ensureHighlightedIndex);
      }
      if (nextProps.autoHighlight && (this.props.value !== nextProps.value || this.state.highlightedIndex === null)) {
        this.setState(this.maybeAutoCompleteText);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.isOpen()) {
        this.setMenuPositions();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.isOpen && !prevState.isOpen || 'open' in this.props && this.props.open && !prevProps.open) this.setMenuPositions();

      this.maybeScrollItemIntoView();
      if (prevState.isOpen !== this.state.isOpen) {
        this.props.onMenuVisibilityChange(this.state.isOpen);
      }
    }
  }, {
    key: 'exposeAPI',
    value: function exposeAPI(el) {
      var _this2 = this;

      this.refs.input = el;
      IMPERATIVE_API.forEach(function (ev) {
        return _this2[ev] = el && el[ev] && el[ev].bind(el);
      });
    }
  }, {
    key: 'maybeScrollItemIntoView',
    value: function maybeScrollItemIntoView() {
      if (this.isOpen() && this.state.highlightedIndex !== null) {
        var itemNode = this.refs['item-' + this.state.highlightedIndex];
        var menuNode = this.refs.menu;
        scrollIntoView(findDOMNode(itemNode), findDOMNode(menuNode), { onlyScrollIfNeeded: true });
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      if (Autocomplete.keyDownHandlers[event.key]) Autocomplete.keyDownHandlers[event.key].call(this, event);else if (!this.isOpen()) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(event, event.target.value);
    }
  }, {
    key: 'getFilteredItems',
    value: function getFilteredItems(props) {
      var items = props.items;

      if (props.shouldItemRender) {
        items = items.filter(function (item) {
          return props.shouldItemRender(item, props.value);
        });
      }

      if (props.sortItems) {
        items.sort(function (a, b) {
          return props.sortItems(a, b, props.value);
        });
      }

      return items;
    }
  }, {
    key: 'maybeAutoCompleteText',
    value: function maybeAutoCompleteText(state, props) {
      var highlightedIndex = state.highlightedIndex;
      var value = props.value,
          getItemValue = props.getItemValue;

      var index = highlightedIndex === null ? 0 : highlightedIndex;
      var items = this.getFilteredItems(props);
      for (var i = 0; i < items.length; i++) {
        if (props.isItemSelectable(items[index])) break;
        index = (index + 1) % items.length;
      }
      var matchedItem = items[index] && props.isItemSelectable(items[index]) ? items[index] : null;
      if (value !== '' && matchedItem) {
        var itemValue = getItemValue(matchedItem);
        var itemValueDoesMatch = itemValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
        if (itemValueDoesMatch) {
          return { highlightedIndex: index };
        }
      }
      return { highlightedIndex: null };
    }
  }, {
    key: 'ensureHighlightedIndex',
    value: function ensureHighlightedIndex(state, props) {
      if (state.highlightedIndex >= this.getFilteredItems(props).length) {
        return { highlightedIndex: null };
      }
    }
  }, {
    key: 'setMenuPositions',
    value: function setMenuPositions() {
      var node = this.refs.input;
      var rect = node.getBoundingClientRect();
      var computedStyle = global.window.getComputedStyle(node);
      var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
      var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
      var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
      this.setState({
        menuTop: rect.bottom + marginBottom,
        menuLeft: rect.left + marginLeft,
        menuWidth: rect.width + marginLeft + marginRight
      });
    }
  }, {
    key: 'highlightItemFromMouse',
    value: function highlightItemFromMouse(index) {
      this.setState({ highlightedIndex: index });
    }
  }, {
    key: 'selectItemFromMouse',
    value: function selectItemFromMouse(item) {
      var _this3 = this;

      var value = this.props.getItemValue(item);
      // The menu will de-render before a mouseLeave event
      // happens. Clear the flag to release control over focus
      this.setIgnoreBlur(false);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        _this3.props.onSelect(value, item);
      });
    }
  }, {
    key: 'setIgnoreBlur',
    value: function setIgnoreBlur(ignore) {
      this._ignoreBlur = ignore;
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this4 = this;

      var items = this.getFilteredItems(this.props).map(function (item, index) {
        var element = _this4.props.renderItem(item, _this4.state.highlightedIndex === index, { cursor: 'default' });
        return React.cloneElement(element, {
          onMouseEnter: _this4.props.isItemSelectable(item) ? function () {
            return _this4.highlightItemFromMouse(index);
          } : null,
          onClick: _this4.props.isItemSelectable(item) ? function () {
            return _this4.selectItemFromMouse(item);
          } : null,
          ref: function ref(e) {
            return _this4.refs['item-' + index] = e;
          }
        });
      });
      var style = {
        left: this.state.menuLeft,
        top: this.state.menuTop,
        minWidth: this.state.menuWidth
      };
      var menu = this.props.renderMenu(items, this.props.value, style);
      return React.cloneElement(menu, {
        ref: function ref(e) {
          return _this4.refs.menu = e;
        },
        // Ignore blur to prevent menu from de-rendering before we can process click
        onTouchStart: function onTouchStart() {
          return _this4.setIgnoreBlur(true);
        },
        onMouseEnter: function onMouseEnter() {
          return _this4.setIgnoreBlur(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setIgnoreBlur(false);
        }
      });
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(event) {
      var _this5 = this;

      if (this._ignoreBlur) {
        this._ignoreFocus = true;
        this._scrollOffset = getScrollOffset();
        this.refs.input.focus();
        return;
      }
      var setStateCallback = void 0;
      var highlightedIndex = this.state.highlightedIndex;

      if (this.props.selectOnBlur && highlightedIndex !== null) {
        var items = this.getFilteredItems(this.props);
        var item = items[highlightedIndex];
        var value = this.props.getItemValue(item);
        setStateCallback = function setStateCallback() {
          return _this5.props.onSelect(value, item);
        };
      }
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, setStateCallback);
      var onBlur = this.props.inputProps.onBlur;

      if (onBlur) {
        onBlur(event);
      }
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(event) {
      var _this6 = this;

      if (this._ignoreFocus) {
        this._ignoreFocus = false;
        var _scrollOffset = this._scrollOffset,
            x = _scrollOffset.x,
            y = _scrollOffset.y;

        this._scrollOffset = null;
        // Focus will cause the browser to scroll the <input> into view.
        // This can cause the mouse coords to change, which in turn
        // could cause a new highlight to happen, cancelling the click
        // event (when selecting with the mouse)
        window.scrollTo(x, y);
        // Some browsers wait until all focus event handlers have been
        // processed before scrolling the <input> into view, so let's
        // scroll again on the next tick to ensure we're back to where
        // the user was before focus was lost. We could do the deferred
        // scroll only, but that causes a jarring split second jump in
        // some browsers that scroll before the focus event handlers
        // are triggered.
        clearTimeout(this._scrollTimer);
        this._scrollTimer = setTimeout(function () {
          _this6._scrollTimer = null;
          window.scrollTo(x, y);
        }, 0);
        return;
      }
      this.setState({ isOpen: true });
      var onFocus = this.props.inputProps.onFocus;

      if (onFocus) {
        onFocus(event);
      }
    }
  }, {
    key: 'isInputFocused',
    value: function isInputFocused() {
      var el = this.refs.input;
      return el.ownerDocument && el === el.ownerDocument.activeElement;
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick() {
      // Input will not be focused if it's disabled
      if (this.isInputFocused() && !this.isOpen()) this.setState({ isOpen: true });
    }
  }, {
    key: 'composeEventHandlers',
    value: function composeEventHandlers(internal, external) {
      return external ? function (e) {
        internal(e);external(e);
      } : internal;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return 'open' in this.props ? this.props.open : this.state.isOpen;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.debug) {
        // you don't like it, you love it
        this._debugStates.push({
          id: this._debugStates.length,
          state: this.state
        });
      }

      var inputProps = this.props.inputProps;

      var open = this.isOpen();
      return React.createElement('div', _extends({ style: _extends({}, this.props.wrapperStyle) }, this.props.wrapperProps), this.props.renderInput(_extends({}, inputProps, {
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-expanded': open,
        autoComplete: 'off',
        ref: this.exposeAPI,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onChange: this.handleChange,
        onKeyDown: this.composeEventHandlers(this.handleKeyDown, inputProps.onKeyDown),
        onClick: this.composeEventHandlers(this.handleInputClick, inputProps.onClick),
        value: this.props.value
      })), open && this.renderMenu(), this.props.debug && React.createElement('pre', { style: { marginLeft: 300 } }, JSON.stringify(this._debugStates.slice(Math.max(0, this._debugStates.length - 5), this._debugStates.length), null, 2)));
    }
  }]);

  return Autocomplete;
}(React.Component);

Autocomplete.propTypes = {
  /**
   * The items to display in the dropdown menu
   */
  items: PropTypes.array.isRequired,
  /**
   * The value to display in the input field
   */
  value: PropTypes.any,
  /**
   * Arguments: `event: Event, value: String`
   *
   * Invoked every time the user changes the input's value.
   */
  onChange: PropTypes.func,
  /**
   * Arguments: `value: String, item: Any`
   *
   * Invoked when the user selects an item from the dropdown menu.
   */
  onSelect: PropTypes.func,
  /**
   * Arguments: `item: Any, value: String`
   *
   * Invoked for each entry in `items` and its return value is used to
   * determine whether or not it should be displayed in the dropdown menu.
   * By default all items are always rendered.
   */
  shouldItemRender: PropTypes.func,
  /**
   * Arguments: `item: Any`
   *
   * Invoked when attempting to select an item. The return value is used to
   * determine whether the item should be selectable or not.
   * By default all items are selectable.
   */
  isItemSelectable: PropTypes.func,
  /**
   * Arguments: `itemA: Any, itemB: Any, value: String`
   *
   * The function which is used to sort `items` before display.
   */
  sortItems: PropTypes.func,
  /**
   * Arguments: `item: Any`
   *
   * Used to read the display value from each entry in `items`.
   */
  getItemValue: PropTypes.func.isRequired,
  /**
   * Arguments: `item: Any, isHighlighted: Boolean, styles: Object`
   *
   * Invoked for each entry in `items` that also passes `shouldItemRender` to
   * generate the render tree for each item in the dropdown menu. `styles` is
   * an optional set of styles that can be applied to improve the look/feel
   * of the items in the dropdown menu.
   */
  renderItem: PropTypes.func.isRequired,
  /**
   * Arguments: `items: Array<Any>, value: String, styles: Object`
   *
   * Invoked to generate the render tree for the dropdown menu. Ensure the
   * returned tree includes every entry in `items` or else the highlight order
   * and keyboard navigation logic will break. `styles` will contain
   * { top, left, minWidth } which are the coordinates of the top-left corner
   * and the width of the dropdown menu.
   */
  renderMenu: PropTypes.func,
  /**
   * Styles that are applied to the dropdown menu in the default `renderMenu`
   * implementation. If you override `renderMenu` and you want to use
   * `menuStyle` you must manually apply them (`this.props.menuStyle`).
   */
  menuStyle: PropTypes.object,
  /**
   * Arguments: `props: Object`
   *
   * Invoked to generate the input element. The `props` argument is the result
   * of merging `props.inputProps` with a selection of props that are required
   * both for functionality and accessibility. At the very least you need to
   * apply `props.ref` and all `props.on<event>` event handlers. Failing to do
   * this will cause `Autocomplete` to behave unexpectedly.
   */
  renderInput: PropTypes.func,
  /**
   * Props passed to `props.renderInput`. By default these props will be
   * applied to the `<input />` element rendered by `Autocomplete`, unless you
   * have specified a custom value for `props.renderInput`. Any properties
   * supported by `HTMLInputElement` can be specified, apart from the
   * following which are set by `Autocomplete`: value, autoComplete, role,
   * aria-autocomplete. `inputProps` is commonly used for (but not limited to)
   * placeholder, event handlers (onFocus, onBlur, etc.), autoFocus, etc..
   */
  inputProps: PropTypes.object,
  /**
   * Props that are applied to the element which wraps the `<input />` and
   * dropdown menu elements rendered by `Autocomplete`.
   */
  wrapperProps: PropTypes.object,
  /**
   * This is a shorthand for `wrapperProps={{ style: <your styles> }}`.
   * Note that `wrapperStyle` is applied before `wrapperProps`, so the latter
   * will win if it contains a `style` entry.
   */
  wrapperStyle: PropTypes.object,
  /**
   * Whether or not to automatically highlight the top match in the dropdown
   * menu.
   */
  autoHighlight: PropTypes.bool,
  /**
   * Whether or not to automatically select the highlighted item when the
   * `<input>` loses focus.
   */
  selectOnBlur: PropTypes.bool,
  /**
   * Arguments: `isOpen: Boolean`
   *
   * Invoked every time the dropdown menu's visibility changes (i.e. every
   * time it is displayed/hidden).
   */
  onMenuVisibilityChange: PropTypes.func,
  /**
   * Used to override the internal logic which displays/hides the dropdown
   * menu. This is useful if you want to force a certain state based on your
   * UX/business logic. Use it together with `onMenuVisibilityChange` for
   * fine-grained control over the dropdown menu dynamics.
   */
  open: PropTypes.bool,
  debug: PropTypes.bool
};
Autocomplete.defaultProps = {
  value: '',
  wrapperProps: {},
  wrapperStyle: {
    display: 'inline-block'
  },
  inputProps: {},
  renderInput: function renderInput(props) {
    return React.createElement('input', props);
  },
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  isItemSelectable: function isItemSelectable() {
    return true;
  },
  renderMenu: function renderMenu(items, value, style) {
    return React.createElement('div', { style: _extends({}, style, this.menuStyle), children: items });
  },

  menuStyle: {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%' },
  autoHighlight: true,
  selectOnBlur: false,
  onMenuVisibilityChange: function onMenuVisibilityChange() {}
};
Autocomplete.keyDownHandlers = {
  ArrowDown: function ArrowDown(event) {
    event.preventDefault();
    var items = this.getFilteredItems(this.props);
    if (!items.length) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === null ? -1 : highlightedIndex;
    for (var i = 0; i < items.length; i++) {
      var p = (index + i + 1) % items.length;
      if (this.props.isItemSelectable(items[p])) {
        index = p;
        break;
      }
    }
    if (index > -1 && index !== highlightedIndex) {
      this.setState({
        highlightedIndex: index,
        isOpen: true
      });
    }
  },
  ArrowUp: function ArrowUp(event) {
    event.preventDefault();
    var items = this.getFilteredItems(this.props);
    if (!items.length) return;
    var highlightedIndex = this.state.highlightedIndex;

    var index = highlightedIndex === null ? items.length : highlightedIndex;
    for (var i = 0; i < items.length; i++) {
      var p = (index - (1 + i) + items.length) % items.length;
      if (this.props.isItemSelectable(items[p])) {
        index = p;
        break;
      }
    }
    if (index !== items.length) {
      this.setState({
        highlightedIndex: index,
        isOpen: true
      });
    }
  },
  Enter: function Enter(event) {
    var _this7 = this;

    // Key code 229 is used for selecting items from character selectors (Pinyin, Kana, etc)
    if (event.keyCode !== 13) return;
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
    if (!this.isOpen()) {
      // menu is closed so there is no selection to accept -> do nothing
      return;
    } else if (this.state.highlightedIndex == null) {
      // input has focus but no menu item is selected + enter is hit -> close the menu, highlight whatever's in input
      this.setState({
        isOpen: false
      }, function () {
        _this7.refs.input.select();
      });
    } else {
      // text entered + menu item has been highlighted + enter is hit -> update value to that of selected menu item, close the menu
      event.preventDefault();
      var item = this.getFilteredItems(this.props)[this.state.highlightedIndex];
      var value = this.props.getItemValue(item);
      this.setState({
        isOpen: false,
        highlightedIndex: null
      }, function () {
        //this.refs.input.focus() // TODO: file issue
        _this7.refs.input.setSelectionRange(value.length, value.length);
        _this7.props.onSelect(value, item);
      });
    }
  },
  Escape: function Escape() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
    this.setState({
      highlightedIndex: null,
      isOpen: false
    });
  },
  Tab: function Tab() {
    // In case the user is currently hovering over the menu
    this.setIgnoreBlur(false);
  }
};

module.exports = Autocomplete;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(16)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(19)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(5);
var assign = __webpack_require__(17);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(18);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(22);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(23);

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset, ch, cw, containerScroll, diffTop, diffBottom, win, winScroll, ww, wh;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left,
      top: elemOffset.top - winScroll.top
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww),
      top: elemOffset.top + eh - (winScroll.top + wh)
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)),
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0))
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)),
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0))
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

module.exports = scrollIntoView;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box, x, y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return { left: x, top: y };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    //ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      //quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle) {
  var val = '';
  var d = elem.ownerDocument;

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/,
    CURRENT_STYLE = 'currentStyle',
    RUNTIME_STYLE = 'runtimeStyle',
    LEFT = 'left',
    PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style,
        left = style[LEFT],
        rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem),
      ret = {},
      current,
      key;

  for (key in offset) {
    current = parseFloat(css(elem, key)) || 0;
    ret[key] = current + offset[key] - old[key];
  }
  css(elem, ret);
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'],
    CONTENT_INDEX = -1,
    PADDING_INDEX = 2,
    BORDER_INDEX = 1,
    MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {},
      style = elem.style,
      name;

  // Remember the old values, and insert the new ones
  for (name in options) {
    old[name] = style[name];
    style[name] = options[name];
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    style[name] = old[name];
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0,
      prop,
      j,
      i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /*jshint eqeqeq:false*/
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    //firefox chrome documentElement.scrollHeight< body.scrollHeight
    //ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name,
        doc = win.document,
        body = doc.body,
        documentElement = doc.documentElement,
        documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
      borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    } else {
      return cssBoxValue;
    }
  } else if (borderBoxValueOrIsBorderBox) {
    return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  } else {
    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
  }
}

var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val,
      args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function css(el, name, value) {
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      css(el, i, name[i]);
    }
    return;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
  } else {
    return getComputedStyleX(el, name);
  }
}

function mix(to, from) {
  for (var i in from) {
    to[i] = from[i];
  }
  return to;
}

var utils = module.exports = {
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      ret[i] = obj[i];
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        ret.overflow[i] = obj.overflow[i];
      }
    }
    return ret;
  },
  mix: mix,
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      } else {
        window.scrollTo(v, getScrollTop(w));
      }
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      } else {
        w.scrollLeft = v;
      }
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      } else {
        window.scrollTo(getScrollLeft(w), v);
      }
    } else {
      if (v === undefined) {
        return w.scrollTop;
      } else {
        w.scrollTop = v;
      }
    }
  },
  merge: function merge() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["dyna-ui-field-wrapper"] = factory(require("react"));else root["dyna-ui-field-wrapper"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_6__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "/dist/";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 3);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			module.exports = function (module) {
				if (!module.webpackPolyfill) {
					module.deprecate = function () {};
					module.paths = [];
					// module.parent = undefined by default
					if (!module.children) module.children = [];
					Object.defineProperty(module, "loaded", {
						enumerable: true,
						get: function get() {
							return module.l;
						}
					});
					Object.defineProperty(module, "id", {
						enumerable: true,
						get: function get() {
							return module.i;
						}
					});
					module.webpackPolyfill = 1;
				}
				return module;
			};

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */
			// css base code, injected by the css-loader

			module.exports = function (useSourceMap) {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					return this.map(function (item) {
						var content = cssWithMappingToString(item, useSourceMap);
						if (item[2]) {
							return "@media " + item[2] + "{" + content + "}";
						} else {
							return content;
						}
					}).join("");
				};

				// import a list of modules into the list
				list.i = function (modules, mediaQuery) {
					if (typeof modules === "string") modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number") alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};

			function cssWithMappingToString(item, useSourceMap) {
				var content = item[1] || '';
				var cssMapping = item[3];
				if (!cssMapping) {
					return content;
				}

				if (useSourceMap && typeof btoa === 'function') {
					var sourceMapping = toComment(cssMapping);
					var sourceURLs = cssMapping.sources.map(function (source) {
						return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
					});

					return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
				}

				return [content].join('\n');
			}

			// Adapted from convert-source-map (MIT)
			function toComment(sourceMap) {
				// eslint-disable-next-line no-undef
				var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
				var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

				return '/*# ' + data + ' */';
			}

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */

			var stylesInDom = {};

			var memoize = function memoize(fn) {
				var memo;

				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			};

			var isOldIE = memoize(function () {
				// Test for IE <= 9 as proposed by Browserhacks
				// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
				// Tests for existence of standard globals is to allow style-loader
				// to operate correctly into non-standard environments
				// @see https://github.com/webpack-contrib/style-loader/issues/177
				return window && document && document.all && !window.atob;
			});

			var getElement = function (fn) {
				var memo = {};

				return function (selector) {
					if (typeof memo[selector] === "undefined") {
						memo[selector] = fn.call(this, selector);
					}

					return memo[selector];
				};
			}(function (target) {
				return document.querySelector(target);
			});

			var singleton = null;
			var singletonCounter = 0;
			var stylesInsertedAtTop = [];

			var fixUrls = __webpack_require__(11);

			module.exports = function (list, options) {
				if (typeof DEBUG !== "undefined" && DEBUG) {
					if ((typeof document === 'undefined' ? 'undefined' : _typeof2(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
				}

				options = options || {};

				options.attrs = _typeof2(options.attrs) === "object" ? options.attrs : {};

				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				if (!options.singleton) options.singleton = isOldIE();

				// By default, add <style> tags to the <head> element
				if (!options.insertInto) options.insertInto = "head";

				// By default, add <style> tags to the bottom of the target
				if (!options.insertAt) options.insertAt = "bottom";

				var styles = listToStyles(list, options);

				addStylesToDom(styles, options);

				return function update(newList) {
					var mayRemove = [];

					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];

						domStyle.refs--;
						mayRemove.push(domStyle);
					}

					if (newList) {
						var newStyles = listToStyles(newList, options);
						addStylesToDom(newStyles, options);
					}

					for (var i = 0; i < mayRemove.length; i++) {
						var domStyle = mayRemove[i];

						if (domStyle.refs === 0) {
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j]();
							}delete stylesInDom[domStyle.id];
						}
					}
				};
			};

			function addStylesToDom(styles, options) {
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];

					if (domStyle) {
						domStyle.refs++;

						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j](item.parts[j]);
						}

						for (; j < item.parts.length; j++) {
							domStyle.parts.push(addStyle(item.parts[j], options));
						}
					} else {
						var parts = [];

						for (var j = 0; j < item.parts.length; j++) {
							parts.push(addStyle(item.parts[j], options));
						}

						stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
					}
				}
			}

			function listToStyles(list, options) {
				var styles = [];
				var newStyles = {};

				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					var id = options.base ? item[0] + options.base : item[0];
					var css = item[1];
					var media = item[2];
					var sourceMap = item[3];
					var part = { css: css, media: media, sourceMap: sourceMap };

					if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
				}

				return styles;
			}

			function insertStyleElement(options, style) {
				var target = getElement(options.insertInto);

				if (!target) {
					throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
				}

				var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

				if (options.insertAt === "top") {
					if (!lastStyleElementInsertedAtTop) {
						target.insertBefore(style, target.firstChild);
					} else if (lastStyleElementInsertedAtTop.nextSibling) {
						target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
					} else {
						target.appendChild(style);
					}
					stylesInsertedAtTop.push(style);
				} else if (options.insertAt === "bottom") {
					target.appendChild(style);
				} else {
					throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				}
			}

			function removeStyleElement(style) {
				if (style.parentNode === null) return false;
				style.parentNode.removeChild(style);

				var idx = stylesInsertedAtTop.indexOf(style);
				if (idx >= 0) {
					stylesInsertedAtTop.splice(idx, 1);
				}
			}

			function createStyleElement(options) {
				var style = document.createElement("style");

				options.attrs.type = "text/css";

				addAttrs(style, options.attrs);
				insertStyleElement(options, style);

				return style;
			}

			function createLinkElement(options) {
				var link = document.createElement("link");

				options.attrs.type = "text/css";
				options.attrs.rel = "stylesheet";

				addAttrs(link, options.attrs);
				insertStyleElement(options, link);

				return link;
			}

			function addAttrs(el, attrs) {
				Object.keys(attrs).forEach(function (key) {
					el.setAttribute(key, attrs[key]);
				});
			}

			function addStyle(obj, options) {
				var style, update, remove, result;

				// If a transform function was defined, run it on the css
				if (options.transform && obj.css) {
					result = options.transform(obj.css);

					if (result) {
						// If transform returns a value, use that instead of the original css.
						// This allows running runtime transformations on the css.
						obj.css = result;
					} else {
						// If the transform function returns a falsy value, don't add this css.
						// This allows conditional loading of css
						return function () {
							// noop
						};
					}
				}

				if (options.singleton) {
					var styleIndex = singletonCounter++;

					style = singleton || (singleton = createStyleElement(options));

					update = applyToSingletonTag.bind(null, style, styleIndex, false);
					remove = applyToSingletonTag.bind(null, style, styleIndex, true);
				} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
					style = createLinkElement(options);
					update = updateLink.bind(null, style, options);
					remove = function remove() {
						removeStyleElement(style);

						if (style.href) URL.revokeObjectURL(style.href);
					};
				} else {
					style = createStyleElement(options);
					update = applyToTag.bind(null, style);
					remove = function remove() {
						removeStyleElement(style);
					};
				}

				update(obj);

				return function updateStyle(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
							return;
						}

						update(obj = newObj);
					} else {
						remove();
					}
				};
			}

			var replaceText = function () {
				var textStore = [];

				return function (index, replacement) {
					textStore[index] = replacement;

					return textStore.filter(Boolean).join('\n');
				};
			}();

			function applyToSingletonTag(style, index, remove, obj) {
				var css = remove ? "" : obj.css;

				if (style.styleSheet) {
					style.styleSheet.cssText = replaceText(index, css);
				} else {
					var cssNode = document.createTextNode(css);
					var childNodes = style.childNodes;

					if (childNodes[index]) style.removeChild(childNodes[index]);

					if (childNodes.length) {
						style.insertBefore(cssNode, childNodes[index]);
					} else {
						style.appendChild(cssNode);
					}
				}
			}

			function applyToTag(style, obj) {
				var css = obj.css;
				var media = obj.media;

				if (media) {
					style.setAttribute("media", media);
				}

				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					while (style.firstChild) {
						style.removeChild(style.firstChild);
					}

					style.appendChild(document.createTextNode(css));
				}
			}

			function updateLink(link, options, obj) {
				var css = obj.css;
				var sourceMap = obj.sourceMap;

				/*
    	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
    	and there is no publicPath defined then lets turn convertToAbsoluteUrls
    	on by default.  Otherwise default to the convertToAbsoluteUrls option
    	directly
    */
				var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

				if (options.convertToAbsoluteUrls || autoFixUrls) {
					css = fixUrls(css);
				}

				if (sourceMap) {
					// http://stackoverflow.com/a/26603875
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
				}

				var blob = new Blob([css], { type: "text/css" });

				var oldSrc = link.href;

				link.href = URL.createObjectURL(blob);

				if (oldSrc) URL.revokeObjectURL(oldSrc);
			}

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(4);

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", { value: true });
			var DynaFieldWrapper_1 = __webpack_require__(5);
			exports.DynaFieldWrapper = DynaFieldWrapper_1.DynaFieldWrapper;
			exports.EMode = DynaFieldWrapper_1.EMode;
			exports.EStyle = DynaFieldWrapper_1.EStyle;
			exports.EColor = DynaFieldWrapper_1.EColor;
			exports.ESize = DynaFieldWrapper_1.ESize;

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function () {
				var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
					d.__proto__ = b;
				} || function (d, b) {
					for (var p in b) {
						if (b.hasOwnProperty(p)) d[p] = b[p];
					}
				};
				return function (d, b) {
					extendStatics(d, b);
					function __() {
						this.constructor = d;
					}
					d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
				};
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			var React = __webpack_require__(6);
			var dyna_guid_1 = __webpack_require__(7);
			var dyna_ui_styles_1 = __webpack_require__(8);
			exports.EColor = dyna_ui_styles_1.EColor;
			__webpack_require__(9);
			__webpack_require__(12);
			var EMode;
			(function (EMode) {
				EMode["VIEW"] = "VIEW";
				EMode["EDIT"] = "EDIT";
			})(EMode = exports.EMode || (exports.EMode = {}));
			var EStyle;
			(function (EStyle) {
				EStyle["INLINE_ROUNDED"] = "INLINE_ROUNDED";
			})(EStyle = exports.EStyle || (exports.EStyle = {}));
			var ESize;
			(function (ESize) {
				ESize["XSMALL"] = "XSMALL";
				ESize["SMALL"] = "SMALL";
				ESize["MEDIUM"] = "MEDIUM";
				ESize["LARGE"] = "LARGE";
			})(ESize = exports.ESize || (exports.ESize = {}));
			var DynaFieldWrapper = /** @class */function (_super) {
				__extends(DynaFieldWrapper, _super);
				function DynaFieldWrapper(props) {
					var _this = _super.call(this, props) || this;
					_this.internalId = dyna_guid_1.guid();
					_this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
					if (document && document.body && document.body.addEventListener) {
						document.body.addEventListener('click', _this.handleGlobalClick);
					}
					return _this;
				}
				DynaFieldWrapper.prototype.componentWillUnmount = function () {
					document.body.removeEventListener('click', this.handleGlobalClick);
				};
				DynaFieldWrapper.prototype.handleGlobalClick = function (event) {
					if (!this.refs.container.contains(event.target)) {
						this.props.onOutsideClick(event);
					}
				};
				Object.defineProperty(DynaFieldWrapper.prototype, "inputElement", {
					get: function get() {
						return this.props.inputElementSelector && this.controlContainerElement && this.controlContainerElement.querySelector(this.props.inputElementSelector) || null;
					},
					enumerable: true,
					configurable: true
				});
				DynaFieldWrapper.prototype.componentDidMount = function () {
					if (this.props.inputElementSelector) {
						if (!this.inputElement) {
							console.error("DynaFieldWrapper: the inputElementSelector is defined but doesn't return any input control, inputElementSelector: [" + this.props.inputElementSelector + "]");
						} else {
							this.inputElement && this.inputElement.setAttribute('id', this.internalId);
						}
					}
				};
				DynaFieldWrapper.prototype.handleClick = function (event) {
					this.props.onClick(event);
				};
				DynaFieldWrapper.prototype.handleLabelClick = function (event) {
					var controlElement = this.controlContainerElement.querySelector(this.props.inputElementSelector);
					if (controlElement) controlElement.focus();
					this.props.onFocus();
				};
				DynaFieldWrapper.prototype.handleContainerClick = function (event) {
					var controlElement = this.controlContainerElement.querySelector(this.props.inputElementSelector);
					if (event.target !== event.currentTarget) return;
					if (controlElement) controlElement.focus();
					this.props.onFocus();
				};
				DynaFieldWrapper.prototype.render = function () {
					var _this = this;
					var _a = this.props,
					    cn = _a.className,
					    mode = _a.mode,
					    style = _a.style,
					    color = _a.color,
					    size = _a.size,
					    label = _a.label,
					    required = _a.required,
					    isLoading = _a.isLoading,
					    children = _a.children,
					    validationMessage = _a.validationMessage,
					    footer = _a.footer;
					var className = [cn || '', 'dyna-ui-field-wrapper', "dyna-ui-field-wrapper--mode-" + mode, "dyna-ui-field-wrapper--style-" + style, "dyna-ui-field-wrapper--color-" + color, "dyna-ui-field-wrapper--size-" + size].join(' ').trim();
					return React.createElement("div", { className: className, onClick: this.handleClick.bind(this), ref: "container" }, label ? React.createElement("div", { className: "dyna-ui-label", onClick: this.handleLabelClick.bind(this) }, React.createElement("label", { htmlFor: this.internalId, onClick: function onClick(e) {
							return e.stopPropagation();
						} }, label)) : null, React.createElement("div", { className: "dyna-ui-field-wrapper-container", onClick: this.handleContainerClick.bind(this) }, React.createElement("div", { className: "dyna-ui-field-wrapper-required", onClick: this.handleContainerClick.bind(this) }, required), React.createElement("div", { className: "dyna-ui-field-wrapper-isLoading", onClick: this.handleContainerClick.bind(this) }, isLoading), React.createElement("div", { className: "dyna-ui-field-wrapper-control-container", ref: function ref(element) {
							return _this.controlContainerElement = element;
						}, onClick: this.handleContainerClick.bind(this) }, children), React.createElement("div", { className: "dyna-ui-field-wrapper-validation-message", onClick: this.handleContainerClick.bind(this) }, validationMessage), React.createElement("div", { className: "dyna-ui-field-wrapper-footer", onClick: this.handleContainerClick.bind(this) }, footer)));
				};
				DynaFieldWrapper.defaultProps = {
					className: null,
					mode: EMode.EDIT,
					style: EStyle.INLINE_ROUNDED,
					color: dyna_ui_styles_1.EColor.WHITE_BLACK,
					size: ESize.MEDIUM,
					label: null,
					required: null,
					isLoading: null,
					children: null,
					inputElementSelector: null,
					validationMessage: null,
					footer: null,
					onClick: function onClick() {
						return undefined;
					},
					onFocus: function onFocus() {
						return undefined;
					},
					onOutsideClick: function onOutsideClick() {
						return undefined;
					}
				};
				return DynaFieldWrapper;
			}(React.Component);
			exports.DynaFieldWrapper = DynaFieldWrapper;

			/***/
		},
		/* 6 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";
			/* WEBPACK VAR INJECTION */
			(function (module) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				(function webpackUniversalModuleDefinition(root, factory) {
					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dyna-guid"] = factory();else root["dyna-guid"] = factory();
				})(undefined, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId]) {
									/******/return installedModules[moduleId].exports;
									/******/
								}
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.l = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};
							/******/
							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};
							/******/
							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};
							/******/
							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "/dist/";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 1);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {

							"use strict";

							Object.defineProperty(exports, "__esModule", { value: true });
							var random = function random() {
								return Math.floor(1000000000 + Math.random() * 0x10000000 /* 65536 */).toString(18).substr(0, 8);
							};
							exports.guid = function (blocks) {
								if (blocks === void 0) {
									blocks = 2;
								}
								var date = new Date();
								var datePart = (Number(date) * 3).toString().split("").reverse().join("");
								var timeZonePart = new Date().getTimezoneOffset();
								if (timeZonePart < 0) {
									timeZonePart = -timeZonePart;
									timeZonePart = '7' + timeZonePart;
								} else {
									timeZonePart = '3' + timeZonePart;
								}
								var output = '';
								for (var i = 0; i < blocks; i++) {
									output += random() + '-';
								}output += datePart;
								output += timeZonePart;
								return output;
							};

							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {

							module.exports = __webpack_require__(0);

							/***/
						}]
						/******/)
					);
				});
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(0)(module));

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";
			/* WEBPACK VAR INJECTION */
			(function (module) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				(function webpackUniversalModuleDefinition(root, factory) {
					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dyna-ui-styles"] = factory();else root["dyna-ui-styles"] = factory();
				})(undefined, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId]) {
									/******/return installedModules[moduleId].exports;
									/******/
								}
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.l = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};
							/******/
							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};
							/******/
							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};
							/******/
							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "/dist/";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 1);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {

							"use strict";

							Object.defineProperty(exports, "__esModule", { value: true });
							var EColor;
							(function (EColor) {
								EColor["BLACK_WHITE"] = "BLACK_WHITE";
								EColor["BLACK_ORANGE"] = "BLACK_ORANGE";
								EColor["TRANSPARENT_ORANGE"] = "TRANSPARENT_ORANGE";
								EColor["TRANSPARENT_WHITE"] = "TRANSPARENT_WHITE";
								EColor["ORANGE_WHITE"] = "ORANGE_WHITE";
								EColor["RED_WHITE"] = "RED_WHITE";
								EColor["GREY_WHITE"] = "GREY_WHITE";
								EColor["WHITE_BLACK"] = "WHITE_BLACK";
								EColor["WHITE_RED"] = "WHITE_RED";
								EColor["WHITE_ORANGE"] = "WHITE_ORANGE";
							})(EColor = exports.EColor || (exports.EColor = {}));

							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {

							module.exports = __webpack_require__(0);

							/***/
						}]
						/******/)
					);
				});
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(0)(module));

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(10);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(2)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(1)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-field-wrapper {\n  outline: none;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-label label {\n  margin: 0;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container input,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container select {\n  font-size: inherit;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  opacity: 1;\n  -webkit-transition: opacity 250ms ease-in-out;\n  transition: opacity 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  border-right: 1px solid;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  position: relative;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  position: absolute;\n  top: 4px;\n  right: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  position: absolute;\n  bottom: 4px;\n  right: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  width: 100%;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container > * {\n  width: 100%;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  position: absolute;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-label,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-label {\n  padding: 12px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container {\n  padding: 8px 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 10px;\n  top: 1px;\n  font-weight: bold;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n  bottom: 1px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  position: relative;\n  top: 3px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-XSMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-SMALL .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 10px;\n  bottom: 1px;\n  font-weight: bold;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-label {\n  padding: 16px;\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container {\n  padding: 16px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  font-size: 14px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-MEDIUM .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-label {\n  padding: 24px;\n  font-size: 20px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container {\n  padding: 24px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading {\n  font-size: 11px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  font-size: 20px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--size-LARGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  font-size: 12px;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-required,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-isLoading,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  opacity: 0.01;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container {\n  cursor: default;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-EDIT {\n  cursor: pointer;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--mode-EDIT .dyna-ui-label label {\n  cursor: pointer;\n}\n", ""]);

			// exports


			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/**
    * When source maps are enabled, `style-loader` uses a link element with a data-uri to
    * embed the css on the page. This breaks all relative urls because now they are relative to a
    * bundle instead of the current page.
    *
    * One solution is to only use full urls, but that may be impossible.
    *
    * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
    *
    * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
    *
    */

			module.exports = function (css) {
				// get current location
				var location = typeof window !== "undefined" && window.location;

				if (!location) {
					throw new Error("fixUrls requires window.location");
				}

				// blank or null?
				if (!css || typeof css !== "string") {
					return css;
				}

				var baseUrl = location.protocol + "//" + location.host;
				var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

				// convert each url(...)
				/*
    This regular expression is just a way to recursively match brackets within
    a string.
    	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
                 *\) = Match anything and then a close parens
             )  = Close non-capturing group
             *  = Match anything
          )  = Close capturing group
     \)  = Match a close parens
    	 /gi  = Get all matches, not the first.  Be case insensitive.
     */
				var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
					// strip quotes (if they exist)
					var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
						return $1;
					}).replace(/^'(.*)'$/, function (o, $1) {
						return $1;
					});

					// already a full url? no change
					if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
						return fullMatch;
					}

					// convert the url to a full url
					var newUrl;

					if (unquotedOrigUrl.indexOf("//") === 0) {
						//TODO: should we add protocol?
						newUrl = unquotedOrigUrl;
					} else if (unquotedOrigUrl.indexOf("/") === 0) {
						// path should be relative to the base url
						newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
					} else {
						// path should be relative to current directory
						newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
					}

					// send back the fixed url(...)
					return "url(" + JSON.stringify(newUrl) + ")";
				});

				// send back the fixed css
				return fixedCss;
			};

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(13);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(2)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(1)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-field-wrapper {\n  outline: none;\n  -webkit-transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container input,\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-control-container select {\n  color: inherit;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK {\n  border-color: #222223;\n  background-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_BLACK.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D0D3D4;\n  color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE {\n  border-color: #D0D3D4;\n  background-color: #65665C;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-label {\n  border-color: #D0D3D4;\n  background-color: #51534A;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #51534A;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-GREY_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #51534A;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED {\n  border-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-label {\n  border-color: #C8102E;\n  color: #E4002B;\n  background-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_RED.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D0D3D4;\n  color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE {\n  border-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-label {\n  border-color: #C8102E;\n  color: #D0D3D4;\n  background-color: #E4002B;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-RED_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #E4002B;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE {\n  border-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-label {\n  border-color: #212721;\n  color: #D0D3D4;\n  background-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #222223;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE {\n  border-color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-label {\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-field-wrapper-container {\n  color: #D0D3D4;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: transparent;\n  color: #D0D3D4;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-label {\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-field-wrapper-container {\n  color: #FF6900;\n  background-color: transparent;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-TRANSPARENT_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: transparent;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-label {\n  border-color: #FFAE62;\n  background-color: #FF6900;\n  color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-ORANGE_WHITE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #FF6900;\n  color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE {\n  border-color: #222223;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-label {\n  border-color: #212721;\n  background-color: #222223;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-field-wrapper-container {\n  background-color: #FF6900;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-BLACK_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #222223;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE {\n  border-color: #D9D9D6;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-label {\n  border-color: #C8C9C7;\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container {\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE {\n  border-color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-label {\n  border-color: #FF6900;\n  background-color: #D9D9D6;\n  color: #FF6900;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container {\n  border-color: #FFAE62;\n  background-color: white;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  color: #E40046;\n}\n.dyna-ui-field-wrapper.dyna-ui-field-wrapper--color-WHITE_ORANGE.dyna-ui-field-wrapper--mode-VIEW .dyna-ui-field-wrapper-container {\n  background-color: #D9D9D6;\n  color: #2D2926;\n}\n.dyna-ui-field-wrapper .dyna-ui-label {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n.dyna-ui-field-wrapper .dyna-ui-field-wrapper-container .dyna-ui-field-wrapper-validation-message {\n  -webkit-transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;\n}\n", ""]);

			// exports


			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["dyna-ui-picker-container"] = factory(require("react"));else root["dyna-ui-picker-container"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : undefined, function (__WEBPACK_EXTERNAL_MODULE_5__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "/dist/";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 2);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */
			// css base code, injected by the css-loader

			module.exports = function (useSourceMap) {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					return this.map(function (item) {
						var content = cssWithMappingToString(item, useSourceMap);
						if (item[2]) {
							return "@media " + item[2] + "{" + content + "}";
						} else {
							return content;
						}
					}).join("");
				};

				// import a list of modules into the list
				list.i = function (modules, mediaQuery) {
					if (typeof modules === "string") modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number") alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};

			function cssWithMappingToString(item, useSourceMap) {
				var content = item[1] || '';
				var cssMapping = item[3];
				if (!cssMapping) {
					return content;
				}

				if (useSourceMap && typeof btoa === 'function') {
					var sourceMapping = toComment(cssMapping);
					var sourceURLs = cssMapping.sources.map(function (source) {
						return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
					});

					return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
				}

				return [content].join('\n');
			}

			// Adapted from convert-source-map (MIT)
			function toComment(sourceMap) {
				// eslint-disable-next-line no-undef
				var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
				var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

				return '/*# ' + data + ' */';
			}

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			/*
   	MIT License http://www.opensource.org/licenses/mit-license.php
   	Author Tobias Koppers @sokra
   */

			var stylesInDom = {};

			var memoize = function memoize(fn) {
				var memo;

				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			};

			var isOldIE = memoize(function () {
				// Test for IE <= 9 as proposed by Browserhacks
				// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
				// Tests for existence of standard globals is to allow style-loader
				// to operate correctly into non-standard environments
				// @see https://github.com/webpack-contrib/style-loader/issues/177
				return window && document && document.all && !window.atob;
			});

			var getElement = function (fn) {
				var memo = {};

				return function (selector) {
					if (typeof memo[selector] === "undefined") {
						memo[selector] = fn.call(this, selector);
					}

					return memo[selector];
				};
			}(function (target) {
				return document.querySelector(target);
			});

			var singleton = null;
			var singletonCounter = 0;
			var stylesInsertedAtTop = [];

			var fixUrls = __webpack_require__(10);

			module.exports = function (list, options) {
				if (typeof DEBUG !== "undefined" && DEBUG) {
					if ((typeof document === 'undefined' ? 'undefined' : _typeof2(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
				}

				options = options || {};

				options.attrs = _typeof2(options.attrs) === "object" ? options.attrs : {};

				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				if (!options.singleton) options.singleton = isOldIE();

				// By default, add <style> tags to the <head> element
				if (!options.insertInto) options.insertInto = "head";

				// By default, add <style> tags to the bottom of the target
				if (!options.insertAt) options.insertAt = "bottom";

				var styles = listToStyles(list, options);

				addStylesToDom(styles, options);

				return function update(newList) {
					var mayRemove = [];

					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];

						domStyle.refs--;
						mayRemove.push(domStyle);
					}

					if (newList) {
						var newStyles = listToStyles(newList, options);
						addStylesToDom(newStyles, options);
					}

					for (var i = 0; i < mayRemove.length; i++) {
						var domStyle = mayRemove[i];

						if (domStyle.refs === 0) {
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j]();
							}delete stylesInDom[domStyle.id];
						}
					}
				};
			};

			function addStylesToDom(styles, options) {
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];

					if (domStyle) {
						domStyle.refs++;

						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j](item.parts[j]);
						}

						for (; j < item.parts.length; j++) {
							domStyle.parts.push(addStyle(item.parts[j], options));
						}
					} else {
						var parts = [];

						for (var j = 0; j < item.parts.length; j++) {
							parts.push(addStyle(item.parts[j], options));
						}

						stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
					}
				}
			}

			function listToStyles(list, options) {
				var styles = [];
				var newStyles = {};

				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					var id = options.base ? item[0] + options.base : item[0];
					var css = item[1];
					var media = item[2];
					var sourceMap = item[3];
					var part = { css: css, media: media, sourceMap: sourceMap };

					if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
				}

				return styles;
			}

			function insertStyleElement(options, style) {
				var target = getElement(options.insertInto);

				if (!target) {
					throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
				}

				var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

				if (options.insertAt === "top") {
					if (!lastStyleElementInsertedAtTop) {
						target.insertBefore(style, target.firstChild);
					} else if (lastStyleElementInsertedAtTop.nextSibling) {
						target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
					} else {
						target.appendChild(style);
					}
					stylesInsertedAtTop.push(style);
				} else if (options.insertAt === "bottom") {
					target.appendChild(style);
				} else {
					throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				}
			}

			function removeStyleElement(style) {
				if (style.parentNode === null) return false;
				style.parentNode.removeChild(style);

				var idx = stylesInsertedAtTop.indexOf(style);
				if (idx >= 0) {
					stylesInsertedAtTop.splice(idx, 1);
				}
			}

			function createStyleElement(options) {
				var style = document.createElement("style");

				options.attrs.type = "text/css";

				addAttrs(style, options.attrs);
				insertStyleElement(options, style);

				return style;
			}

			function createLinkElement(options) {
				var link = document.createElement("link");

				options.attrs.type = "text/css";
				options.attrs.rel = "stylesheet";

				addAttrs(link, options.attrs);
				insertStyleElement(options, link);

				return link;
			}

			function addAttrs(el, attrs) {
				Object.keys(attrs).forEach(function (key) {
					el.setAttribute(key, attrs[key]);
				});
			}

			function addStyle(obj, options) {
				var style, update, remove, result;

				// If a transform function was defined, run it on the css
				if (options.transform && obj.css) {
					result = options.transform(obj.css);

					if (result) {
						// If transform returns a value, use that instead of the original css.
						// This allows running runtime transformations on the css.
						obj.css = result;
					} else {
						// If the transform function returns a falsy value, don't add this css.
						// This allows conditional loading of css
						return function () {
							// noop
						};
					}
				}

				if (options.singleton) {
					var styleIndex = singletonCounter++;

					style = singleton || (singleton = createStyleElement(options));

					update = applyToSingletonTag.bind(null, style, styleIndex, false);
					remove = applyToSingletonTag.bind(null, style, styleIndex, true);
				} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
					style = createLinkElement(options);
					update = updateLink.bind(null, style, options);
					remove = function remove() {
						removeStyleElement(style);

						if (style.href) URL.revokeObjectURL(style.href);
					};
				} else {
					style = createStyleElement(options);
					update = applyToTag.bind(null, style);
					remove = function remove() {
						removeStyleElement(style);
					};
				}

				update(obj);

				return function updateStyle(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
							return;
						}

						update(obj = newObj);
					} else {
						remove();
					}
				};
			}

			var replaceText = function () {
				var textStore = [];

				return function (index, replacement) {
					textStore[index] = replacement;

					return textStore.filter(Boolean).join('\n');
				};
			}();

			function applyToSingletonTag(style, index, remove, obj) {
				var css = remove ? "" : obj.css;

				if (style.styleSheet) {
					style.styleSheet.cssText = replaceText(index, css);
				} else {
					var cssNode = document.createTextNode(css);
					var childNodes = style.childNodes;

					if (childNodes[index]) style.removeChild(childNodes[index]);

					if (childNodes.length) {
						style.insertBefore(cssNode, childNodes[index]);
					} else {
						style.appendChild(cssNode);
					}
				}
			}

			function applyToTag(style, obj) {
				var css = obj.css;
				var media = obj.media;

				if (media) {
					style.setAttribute("media", media);
				}

				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					while (style.firstChild) {
						style.removeChild(style.firstChild);
					}

					style.appendChild(document.createTextNode(css));
				}
			}

			function updateLink(link, options, obj) {
				var css = obj.css;
				var sourceMap = obj.sourceMap;

				/*
    	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
    	and there is no publicPath defined then lets turn convertToAbsoluteUrls
    	on by default.  Otherwise default to the convertToAbsoluteUrls option
    	directly
    */
				var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

				if (options.convertToAbsoluteUrls || autoFixUrls) {
					css = fixUrls(css);
				}

				if (sourceMap) {
					// http://stackoverflow.com/a/26603875
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
				}

				var blob = new Blob([css], { type: "text/css" });

				var oldSrc = link.href;

				link.href = URL.createObjectURL(blob);

				if (oldSrc) URL.revokeObjectURL(oldSrc);
			}

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(3);

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", { value: true });
			var DynaPickerContainer_1 = __webpack_require__(4);
			exports.DynaPickerContainer = DynaPickerContainer_1.DynaPickerContainer;
			exports.EStyle = DynaPickerContainer_1.EStyle;
			exports.EColor = DynaPickerContainer_1.EColor;

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __extends = this && this.__extends || function () {
				var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
					d.__proto__ = b;
				} || function (d, b) {
					for (var p in b) {
						if (b.hasOwnProperty(p)) d[p] = b[p];
					}
				};
				return function (d, b) {
					extendStatics(d, b);
					function __() {
						this.constructor = d;
					}
					d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
				};
			}();
			Object.defineProperty(exports, "__esModule", { value: true });
			var React = __webpack_require__(5);
			var dyna_ui_styles_1 = __webpack_require__(6);
			exports.EColor = dyna_ui_styles_1.EColor;
			__webpack_require__(8);
			__webpack_require__(11);
			var EStyle;
			(function (EStyle) {
				EStyle["ROUNDED"] = "INLINE_ROUNDED";
			})(EStyle = exports.EStyle || (exports.EStyle = {}));
			var DynaPickerContainer = /** @class */function (_super) {
				__extends(DynaPickerContainer, _super);
				function DynaPickerContainer(props) {
					var _this = _super.call(this, props) || this;
					_this.keepInScreen = _this.keepInScreen.bind(_this);
					return _this;
				}
				DynaPickerContainer.prototype.componentDidMount = function () {
					this.keepInScreen();
					console.log('evenbt added');
					window.addEventListener("resize", this.keepInScreen);
				};
				DynaPickerContainer.prototype.componentWillUnmount = function () {
					window.removeEventListener("resize", this.keepInScreen);
				};
				DynaPickerContainer.prototype.componentDidUpdate = function () {
					this.keepInScreen();
				};
				DynaPickerContainer.prototype.keepInScreen = function () {
					var show = this.props.show;
					var container = this.refs.container;
					if (!show) return;
					// reset the position to get the actual default value
					container.style.left = "";
					container.style.right = "";
					var getContainerLeft = function getContainerLeft() {
						return container.getClientRects()[0].left;
					}; // IE11 bug fix, don't use getComputedStyle!
					if (getContainerLeft() + container.offsetWidth > window.innerWidth - 10) {
						container.style.right = "10px";
					}
					if (getContainerLeft() - 10 < 0) {
						container.style.right = "";
						container.style.left = "10px";
					}
				};
				DynaPickerContainer.prototype.render = function () {
					var _a = this.props,
					    show = _a.show,
					    children = _a.children,
					    style = _a.style,
					    color = _a.color,
					    responsive = _a.responsive;
					var className = ['dyna-ui-picker-container', "dyna-ui-picker-container--style-" + style, "dyna-ui-picker-container--color-" + color, "dyna-ui-picker-container--" + (show ? 'show' : 'hide'), "dyna-ui-picker-container--" + (responsive ? 'responsive' : '')].join(' ').trim();
					return React.createElement("div", { className: className, ref: "container" }, children);
				};
				DynaPickerContainer.defaultProps = {
					show: true,
					children: null,
					style: EStyle.ROUNDED,
					color: dyna_ui_styles_1.EColor.WHITE_BLACK,
					responsive: true
				};
				return DynaPickerContainer;
			}(React.Component);
			exports.DynaPickerContainer = DynaPickerContainer;

			/***/
		},
		/* 5 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";
			/* WEBPACK VAR INJECTION */
			(function (module) {
				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				(function webpackUniversalModuleDefinition(root, factory) {
					if ((false ? 'undefined' : _typeof(exports)) === 'object' && (false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dyna-ui-styles"] = factory();else root["dyna-ui-styles"] = factory();
				})(undefined, function () {
					return (/******/function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId]) {
									/******/return installedModules[moduleId].exports;
									/******/
								}
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/i: moduleId,
									/******/l: false,
									/******/exports: {}
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.l = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // identity function for calling harmony imports with the correct context
							/******/__webpack_require__.i = function (value) {
								return value;
							};
							/******/
							/******/ // define getter function for harmony exports
							/******/__webpack_require__.d = function (exports, name, getter) {
								/******/if (!__webpack_require__.o(exports, name)) {
									/******/Object.defineProperty(exports, name, {
										/******/configurable: false,
										/******/enumerable: true,
										/******/get: getter
										/******/ });
									/******/
								}
								/******/
							};
							/******/
							/******/ // getDefaultExport function for compatibility with non-harmony modules
							/******/__webpack_require__.n = function (module) {
								/******/var getter = module && module.__esModule ?
								/******/function getDefault() {
									return module['default'];
								} :
								/******/function getModuleExports() {
									return module;
								};
								/******/__webpack_require__.d(getter, 'a', getter);
								/******/return getter;
								/******/
							};
							/******/
							/******/ // Object.prototype.hasOwnProperty.call
							/******/__webpack_require__.o = function (object, property) {
								return Object.prototype.hasOwnProperty.call(object, property);
							};
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "/dist/";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(__webpack_require__.s = 1);
							/******/
						}(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {

							"use strict";

							Object.defineProperty(exports, "__esModule", { value: true });
							var EColor;
							(function (EColor) {
								EColor["BLACK_WHITE"] = "BLACK_WHITE";
								EColor["BLACK_ORANGE"] = "BLACK_ORANGE";
								EColor["TRANSPARENT_ORANGE"] = "TRANSPARENT_ORANGE";
								EColor["TRANSPARENT_WHITE"] = "TRANSPARENT_WHITE";
								EColor["ORANGE_WHITE"] = "ORANGE_WHITE";
								EColor["RED_WHITE"] = "RED_WHITE";
								EColor["GREY_WHITE"] = "GREY_WHITE";
								EColor["WHITE_BLACK"] = "WHITE_BLACK";
								EColor["WHITE_RED"] = "WHITE_RED";
								EColor["WHITE_ORANGE"] = "WHITE_ORANGE";
							})(EColor = exports.EColor || (exports.EColor = {}));

							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {

							module.exports = __webpack_require__(0);

							/***/
						}]
						/******/)
					);
				});
				/* WEBPACK VAR INJECTION */
			}).call(exports, __webpack_require__(7)(module));

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			module.exports = function (module) {
				if (!module.webpackPolyfill) {
					module.deprecate = function () {};
					module.paths = [];
					// module.parent = undefined by default
					if (!module.children) module.children = [];
					Object.defineProperty(module, "loaded", {
						enumerable: true,
						get: function get() {
							return module.l;
						}
					});
					Object.defineProperty(module, "id", {
						enumerable: true,
						get: function get() {
							return module.i;
						}
					});
					module.webpackPolyfill = 1;
				}
				return module;
			};

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(9);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(1)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(0)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-picker-container--style-INLINE_ROUNDED {\n  position: fixed;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 10px;\n  margin-top: 12px;\n}\n.dyna-ui-picker-container--style-INLINE_ROUNDED:before,\n.dyna-ui-picker-container--style-INLINE_ROUNDED:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 15px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  top: -30px;\n  border-color: transparent transparent deeppink transparent;\n  border-width: 15px;\n}\n.dyna-ui-picker-container--style-INLINE_ROUNDED:after {\n  top: -28px;\n  left: 16px;\n  border-width: 14px;\n}\n@media (max-width: 768px) {\n  .dyna-ui-picker-container--style-INLINE_ROUNDED.dyna-ui-picker-container--responsive {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: none;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n.dyna-ui-picker-container--show {\n  display: block;\n}\n.dyna-ui-picker-container--hide {\n  display: none;\n}\n", ""]);

			// exports


			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			/**
    * When source maps are enabled, `style-loader` uses a link element with a data-uri to
    * embed the css on the page. This breaks all relative urls because now they are relative to a
    * bundle instead of the current page.
    *
    * One solution is to only use full urls, but that may be impossible.
    *
    * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
    *
    * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
    *
    */

			module.exports = function (css) {
				// get current location
				var location = typeof window !== "undefined" && window.location;

				if (!location) {
					throw new Error("fixUrls requires window.location");
				}

				// blank or null?
				if (!css || typeof css !== "string") {
					return css;
				}

				var baseUrl = location.protocol + "//" + location.host;
				var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

				// convert each url(...)
				/*
    This regular expression is just a way to recursively match brackets within
    a string.
    	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
                 *\) = Match anything and then a close parens
             )  = Close non-capturing group
             *  = Match anything
          )  = Close capturing group
     \)  = Match a close parens
    	 /gi  = Get all matches, not the first.  Be case insensitive.
     */
				var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
					// strip quotes (if they exist)
					var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
						return $1;
					}).replace(/^'(.*)'$/, function (o, $1) {
						return $1;
					});

					// already a full url? no change
					if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
						return fullMatch;
					}

					// convert the url to a full url
					var newUrl;

					if (unquotedOrigUrl.indexOf("//") === 0) {
						//TODO: should we add protocol?
						newUrl = unquotedOrigUrl;
					} else if (unquotedOrigUrl.indexOf("/") === 0) {
						// path should be relative to the base url
						newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
					} else {
						// path should be relative to current directory
						newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
					}

					// send back the fixed url(...)
					return "url(" + JSON.stringify(newUrl) + ")";
				});

				// send back the fixed css
				return fixedCss;
			};

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(12);
			if (typeof content === 'string') content = [[module.i, content, '']];
			// Prepare cssTransformation
			var transform;

			var options = {};
			options.transform = transform;
			// add the styles to the DOM
			var update = __webpack_require__(1)(content, options);
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less", function () {
						var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () {
					update();
				});
			}

			/***/
		},
		/* 12 */
		/***/function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(0)(false);
			// imports


			// module
			exports.push([module.i, ".dyna-ui-picker-container--color-WHITE_BLACK {\n  color: black;\n  border-color: black;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_BLACK:before {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-WHITE_BLACK:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-GREY_WHITE {\n  color: #434343;\n  border-color: #434343;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-GREY_WHITE:before {\n  border-bottom-color: #434343;\n}\n.dyna-ui-picker-container--color-GREY_WHITE:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_RED {\n  color: red;\n  border-color: red;\n  background-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_RED:before {\n  border-bottom-color: red;\n}\n.dyna-ui-picker-container--color-WHITE_RED:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE {\n  color: white;\n  border-color: black;\n  background-color: black;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE:before {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-BLACK_WHITE:after {\n  border-bottom-color: black;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE {\n  color: white;\n  border-color: white;\n  background-color: transparent;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE:before {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-TRANSPARENT_WHITE:after {\n  border-bottom-color: white;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE {\n  color: #FF6900;\n  border-color: #FF6900;\n  background-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE:before {\n  border-bottom-color: #FF6900;\n}\n.dyna-ui-picker-container--color-WHITE_ORANGE:after {\n  border-bottom-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE {\n  color: #D9D9D6;\n  border-color: #D9D9D6;\n  background-color: #FF6900;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE:before {\n  border-bottom-color: #D9D9D6;\n}\n.dyna-ui-picker-container--color-ORANGE_WHITE:after {\n  border-bottom-color: #FF6900;\n}\n", ""]);

			// exports


			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".dyna-autocomplete input {\n  width: 100%;\n  border-color: transparent;\n  font-weight: bold;\n  font-size: 16px;\n  border: 0;\n}\n.dyna-autocomplete input:focus {\n  outline: none;\n}\n.dyna-autocomplete .dyna-autocomplete-menu {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  cursor: pointer;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--mode-VIEW {\n  pointer-events: none;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-picker-container > *:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-picker-container > *:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--4-2!../node_modules/less-loader/dist/cjs.js!./color.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })
/******/ ]);
});