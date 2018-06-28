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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar CANVAS_WIDTH = 640;\nexports.CANVAS_WIDTH = CANVAS_WIDTH;\nvar CANVAS_HEIGHT = 480;\nexports.CANVAS_HEIGHT = CANVAS_HEIGHT;\nvar FPS = 60;\nexports.FPS = FPS;\n//# sourceMappingURL=constants.js.map\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./game-object.js":
/*!************************!*\
  !*** ./game-object.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GameObject = /** @class */ (function () {\n    function GameObject(options) {\n        this._options = options;\n    }\n    Object.defineProperty(GameObject.prototype, \"options\", {\n        get: function () {\n            return this._options;\n        },\n        set: function (v) {\n            this._options = v;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    GameObject.prototype.draw = function (context) {\n        throw new Error(\"Method not implemented.\");\n    };\n    GameObject.prototype.update = function (deltatime, handler) {\n        throw new Error(\"Method not implemented.\");\n    };\n    return GameObject;\n}());\nexports.default = GameObject;\n//# sourceMappingURL=game-object.js.map\n\n//# sourceURL=webpack:///./game-object.js?");

/***/ }),

/***/ "./keyboard-handler.js":
/*!*****************************!*\
  !*** ./keyboard-handler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.KEYS = {\n    W: 87,\n    A: 65,\n    S: 83,\n    D: 68\n};\nvar KeyboardHandler = /** @class */ (function () {\n    function KeyboardHandler() {\n        this._activeKeys = {};\n    }\n    Object.defineProperty(KeyboardHandler.prototype, \"activeKeys\", {\n        get: function () {\n            return this._activeKeys;\n        },\n        set: function (v) {\n            this._activeKeys = v;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    KeyboardHandler.prototype.isKeyActive = function (keyCode) {\n        return this._activeKeys[keyCode];\n    };\n    KeyboardHandler.prototype.keyDown = function (event) {\n        this._activeKeys[event.which] = true;\n    };\n    KeyboardHandler.prototype.keyUp = function (event) {\n        this._activeKeys[event.which] = false;\n    };\n    return KeyboardHandler;\n}());\nexports.default = KeyboardHandler;\n//# sourceMappingURL=keyboard-handler.js.map\n\n//# sourceURL=webpack:///./keyboard-handler.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\nvar keyboard_handler_1 = __webpack_require__(/*! ./keyboard-handler */ \"./keyboard-handler.js\");\n/**\n * GameObjects\n */\nvar player_1 = __webpack_require__(/*! ./player */ \"./player.js\");\nvar canvas = document.getElementById('game');\ncanvas.width = constants_1.CANVAS_WIDTH;\ncanvas.height = constants_1.CANVAS_HEIGHT;\nvar handler = new keyboard_handler_1.default();\nvar context = canvas.getContext('2d');\nvar frameCount = 0;\nvar fpsInterval;\nvar elapsed;\nvar startTime;\nvar now;\nvar then;\nvar draw = function (context) {\n    context.fillStyle = '#ececec';\n    context.fillRect(0, 0, 640, 480);\n    player.draw(context);\n};\nvar update = function (elapsed) {\n    player.update(elapsed, handler);\n};\nwindow.addEventListener('keydown', handler.keyDown.bind(handler));\nwindow.addEventListener('keyup', handler.keyUp.bind(handler));\nvar animationUpdate = function () {\n    window.requestAnimationFrame(animationUpdate);\n    now = Date.now();\n    elapsed = now - then;\n    if (elapsed > fpsInterval) {\n        then = now - (elapsed % fpsInterval);\n        frameCount++;\n        update(elapsed);\n        draw(context);\n    }\n};\nvar start = function () {\n    fpsInterval = 1000 / constants_1.FPS;\n    then = Date.now();\n    startTime = then;\n    animationUpdate();\n};\nvar player = new player_1.default({\n    options: {\n        position: {\n            x: 0,\n            y: 220\n        },\n        size: {\n            width: 20,\n            height: 20\n        }\n    },\n    color: '#333'\n});\nstart();\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar game_object_1 = __webpack_require__(/*! ./game-object */ \"./game-object.js\");\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(args) {\n        var _this = _super.call(this, args.options) || this;\n        _this._dX = 1;\n        _this._dY = -1;\n        _this._speed = 0.16;\n        _this._color = args.color;\n        return _this;\n    }\n    Object.defineProperty(Player.prototype, \"color\", {\n        get: function () {\n            return this._color;\n        },\n        set: function (v) {\n            this._color = v;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Player.prototype.draw = function (context) {\n        var _a = this.options.size, width = _a.width, height = _a.height;\n        var _b = this.options.position, x = _b.x, y = _b.y;\n        context.fillStyle = this._color;\n        context.fillRect(x, y, width, height);\n    };\n    Player.prototype.update = function (deltatime, handler) {\n        this.options.position.x += (this._dX * this._speed) * deltatime;\n        this.options.position.y += (this._dY * this._speed) * deltatime;\n        if ((this.options.position.x + this.options.size.width) > constants_1.CANVAS_WIDTH) {\n            this._dX = -1;\n        }\n        else if (this.options.position.x < 0) {\n            this._dX = 1;\n        }\n    };\n    return Player;\n}(game_object_1.default));\nexports.default = Player;\n//# sourceMappingURL=player.js.map\n\n//# sourceURL=webpack:///./player.js?");

/***/ })

/******/ });