(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dyna-guid"), require("react"), require("react-autocomplete"), require("dyna-ui-field-wrapper"), require("dyna-ui-picker-container"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-autocomplete", ["dyna-guid", "react", "react-autocomplete", "dyna-ui-field-wrapper", "dyna-ui-picker-container"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-autocomplete"] = factory(require("dyna-guid"), require("react"), require("react-autocomplete"), require("dyna-ui-field-wrapper"), require("dyna-ui-picker-container"));
	else
		root["dyna-ui-autocomplete"] = factory(root["dyna-guid"], root["react"], root["react-autocomplete"], root["dyna-ui-field-wrapper"], root["dyna-ui-picker-container"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_dyna_guid__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_autocomplete__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_field_wrapper__, __WEBPACK_EXTERNAL_MODULE_dyna_ui_picker_container__) {
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dyna-autocomplete input {\n  width: 100%;\n  border-color: transparent;\n  font-weight: bold;\n  font-size: 16px;\n  border: 0;\n}\n.dyna-autocomplete input:focus {\n  outline: none;\n}\n.dyna-autocomplete .dyna-autocomplete-menu {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 1000;\n  cursor: pointer;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--mode-VIEW {\n  pointer-events: none;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-picker-container > *:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.dyna-autocomplete.dyna-ui-field-wrapper--style-INLINE_ROUNDED .dyna-ui-picker-container > *:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
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
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(/*! react */ "react")),
    classCallCheck = function (t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function (t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
},
    possibleConstructorReturn = function (t, e) {
  if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !e || "object" != typeof e && "function" != typeof e ? t : e;
},
    AppContainer = function (t) {
  function e() {
    return classCallCheck(this, e), possibleConstructorReturn(this, t.apply(this, arguments));
  }

  return inherits(e, t), e.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, e;
}(React.Component),
    hot_prod = function () {
  return function (t) {
    return t;
  };
},
    areComponentsEqual = function (t, e) {
  return t === e;
},
    setConfig = function () {},
    cold = function (t) {
  return t;
};

exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold;

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;

try {
  eval('evalAllowed = true');
} catch (e) {} // eval not allowed due to CSP
// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods


var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {}

  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

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
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


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
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/DynaAutoComplete.tsx":
/*!**********************************!*\
  !*** ./src/DynaAutoComplete.tsx ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react"); // @ts-ignore


var ReactAutoComplete = __webpack_require__(/*! react-autocomplete */ "react-autocomplete");

var dyna_guid_1 = __webpack_require__(/*! dyna-guid */ "dyna-guid");

var dyna_ui_field_wrapper_1 = __webpack_require__(/*! dyna-ui-field-wrapper */ "dyna-ui-field-wrapper");

exports.EColor = dyna_ui_field_wrapper_1.EColor;
exports.EMode = dyna_ui_field_wrapper_1.EMode;
exports.EStyle = dyna_ui_field_wrapper_1.EStyle;
exports.ESize = dyna_ui_field_wrapper_1.ESize;

var dyna_ui_picker_container_1 = __webpack_require__(/*! dyna-ui-picker-container */ "dyna-ui-picker-container");

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.tsx");

__webpack_require__(/*! ./style.less */ "./src/style.less");

var DynaAutoComplete =
/** @class */
function (_super) {
  __extends(DynaAutoComplete, _super);

  function DynaAutoComplete(props) {
    var _this = _super.call(this, props) || this;

    _this.handlerOnChange = function (event, value) {
      if (_this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
      var _a = _this.props,
          name = _a.name,
          items = _a.items,
          onChange = _a.onChange,
          getItemValue = _a.getItemValue;
      onChange(name, {
        value: value,
        item: items.find(function (item) {
          return value === getItemValue(item);
        })
      });
    };

    _this.handlerOnSelect = function (value, item) {
      if (_this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return;
      if (_this.props.value === value) return; // exit, nothing is changed

      var _a = _this.props,
          name = _a.name,
          onChange = _a.onChange;
      onChange(name, {
        value: value,
        item: item
      });
    };

    _this.renderMenu = function (children) {
      if (_this.props.mode === dyna_ui_field_wrapper_1.EMode.VIEW) return React.createElement("div", null);
      if (!children || !children.length) return React.createElement("div", null);
      return React.createElement("div", {
        className: "dyna-autocomplete-menu"
      }, React.createElement(dyna_ui_picker_container_1.DynaPickerContainer, {
        show: true,
        style: dyna_ui_picker_container_1.EStyle.ROUNDED,
        color: dyna_ui_picker_container_1.EColor.WHITE_BLACK,
        responsive: false
      }, children));
    };

    _this.internalHtmlId = props.id || "dyna-autocomplete--" + dyna_guid_1.guid();

    if (props.inputProps && props.inputProps.id) {
      console.error('DynaAutoComplete, You passed `inputProps.id` but this will be overridden by the props.id or it\'s default value a guid.');
    }

    return _this;
  }

  DynaAutoComplete.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        applyLabelId = _a.applyLabelId,
        applyInputId = _a.applyInputId,
        mode = _a.mode,
        style = _a.style,
        color = _a.color,
        size = _a.size,
        label = _a.label,
        required = _a.required,
        isLoading = _a.isLoading,
        isLoadingIcon = _a.isLoadingIcon,
        items = _a.items,
        value = _a.value,
        selectOnBlur = _a.selectOnBlur,
        inputProps = _a.inputProps,
        getItemValue = _a.getItemValue,
        renderItem = _a.renderItem,
        dropDownFilter = _a.dropDownFilter,
        validationMessage = _a.validationMessage,
        footer = _a.footer;
    return React.createElement(dyna_ui_field_wrapper_1.DynaFieldWrapper, {
      className: ("dyna-autocomplete " + className).trim(),
      id: this.internalHtmlId,
      applyLabelId: applyLabelId,
      applyInputId: false,
      style: style,
      color: color,
      size: size,
      mode: mode,
      inputElementSelector: "input",
      label: label,
      isLoading: isLoading ? isLoadingIcon : null,
      required: required,
      validationMessage: validationMessage,
      footer: footer
    }, React.createElement(ReactAutoComplete, {
      items: items,
      value: value,
      enabled: mode === dyna_ui_field_wrapper_1.EMode.EDIT,
      selectOnBlur: selectOnBlur,
      getItemValue: getItemValue,
      renderMenu: this.renderMenu,
      renderItem: renderItem,
      shouldItemRender: dropDownFilter,
      inputProps: __assign({}, inputProps || {}, {
        id: applyInputId && this.internalHtmlId || undefined
      }),
      onChange: this.handlerOnChange,
      onSelect: this.handlerOnSelect
    }));
  };

  DynaAutoComplete.defaultProps = {
    className: '',
    id: null,
    applyLabelId: true,
    applyInputId: true,
    name: '',
    mode: dyna_ui_field_wrapper_1.EMode.EDIT,
    style: dyna_ui_field_wrapper_1.EStyle.INLINE_ROUNDED,
    color: dyna_ui_field_wrapper_1.EColor.WHITE_BLACK,
    size: dyna_ui_field_wrapper_1.ESize.MEDIUM,
    label: null,
    isLoading: false,
    isLoadingIcon: utils_1.faIcon('circle-o-notch fa-spin'),
    items: [],
    value: "",
    inputProps: {},
    selectOnBlur: false,
    getItemValue: function getItemValue(item) {
      return "";
    },
    renderItem: function renderItem(item, isFocused) {
      return null;
    },
    dropDownFilter: function dropDownFilter(item, enteredText) {
      return true;
    },
    validationMessage: null,
    footer: null,
    onChange: function onChange(name, value) {
      return undefined;
    }
  };
  return DynaAutoComplete;
}(React.Component);

exports.DynaAutoComplete = DynaAutoComplete;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__extends, "__extends", "/Users/dennis/dev/dyna/dyna-ui-autocomplete/src/DynaAutoComplete.tsx");
  reactHotLoader.register(__assign, "__assign", "/Users/dennis/dev/dyna/dyna-ui-autocomplete/src/DynaAutoComplete.tsx");
  reactHotLoader.register(DynaAutoComplete, "DynaAutoComplete", "/Users/dennis/dev/dyna/dyna-ui-autocomplete/src/DynaAutoComplete.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var DynaAutoComplete_1 = __webpack_require__(/*! ./DynaAutoComplete */ "./src/DynaAutoComplete.tsx");

exports.DynaAutoComplete = DynaAutoComplete_1.DynaAutoComplete;
exports.EMode = DynaAutoComplete_1.EMode;
exports.EStyle = DynaAutoComplete_1.EStyle;
exports.EColor = DynaAutoComplete_1.EColor;
exports.ESize = DynaAutoComplete_1.ESize;

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.tsx");

exports.debounce = utils_1.debounce;

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/postcss-loader/lib??ref--8-2!../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/style.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils.tsx":
/*!***********************!*\
  !*** ./src/utils.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

exports.faIcon = function (awesomeFontIconName, className) {
  if (className === void 0) {
    className = '';
  }

  return React.createElement("i", {
    className: ("fa fa-" + awesomeFontIconName + " " + className).trim(),
    "aria-hidden": "true"
  });
};

exports.debounce = function (cbFunction, timeout) {
  var setTimerHolder = null;
  var lastCalled = 0;

  var runIt = function runIt(args) {
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
    } else {
      setTimerHolder = setTimeout(function () {
        return runIt(args);
      }, timeout);
    }
  };
};

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennis/dev/dyna/dyna-ui-autocomplete/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "dyna-guid":
/*!****************************!*\
  !*** external "dyna-guid" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_guid__;

/***/ }),

/***/ "dyna-ui-field-wrapper":
/*!****************************************!*\
  !*** external "dyna-ui-field-wrapper" ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_field_wrapper__;

/***/ }),

/***/ "dyna-ui-picker-container":
/*!*******************************************!*\
  !*** external "dyna-ui-picker-container" ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dyna_ui_picker_container__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-autocomplete":
/*!*************************************!*\
  !*** external "react-autocomplete" ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_autocomplete__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map