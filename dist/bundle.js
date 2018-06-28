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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CANVAS_WIDTH = 640;\r\nexports.CANVAS_WIDTH = CANVAS_WIDTH;\r\nvar CANVAS_HEIGHT = 480;\r\nexports.CANVAS_HEIGHT = CANVAS_HEIGHT;\r\nvar FPS = 60;\r\nexports.FPS = FPS;\r\n//# sourceMappingURL=constants.js.map\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./flaffy.js":
/*!*******************!*\
  !*** ./flaffy.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar game_object_1 = __webpack_require__(/*! ./game-object */ \"./game-object.js\");\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\r\nvar keyboard_handler_1 = __webpack_require__(/*! ./keyboard-handler */ \"./keyboard-handler.js\");\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player(args) {\r\n        var _this = _super.call(this, args.options) || this;\r\n        _this._velocity = 0;\r\n        _this._lift = -0.1;\r\n        _this._gravity = 0.05;\r\n        _this._color = args.color;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(Player.prototype, \"color\", {\r\n        get: function () {\r\n            return this._color;\r\n        },\r\n        set: function (v) {\r\n            this._color = v;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Player.prototype.draw = function (_a) {\r\n        var context = _a.context;\r\n        var _b = this.size, width = _b.width, height = _b.height;\r\n        var _c = this.position, x = _c.x, y = _c.y;\r\n        context.fillStyle = this._color;\r\n        context.fillRect(x, y, width, height);\r\n    };\r\n    Player.prototype.update = function (_a) {\r\n        var deltatime = _a.deltatime, keyboard = _a.keyboard;\r\n        var keyPressed = keyboard.isKeyActive(keyboard_handler_1.KEYS.W);\r\n        if (keyPressed) {\r\n            this._velocity += this._lift;\r\n        }\r\n        this._velocity += this._gravity;\r\n        this.position.y += this._velocity * deltatime;\r\n        if (this.position.y > constants_1.CANVAS_HEIGHT - this.size.height) {\r\n            this.position.y = constants_1.CANVAS_HEIGHT - this.size.height;\r\n            this._velocity = 0;\r\n        }\r\n        else if (this.position.y < 0) {\r\n            this.position.y = 0;\r\n            this._velocity = 0;\r\n        }\r\n    };\r\n    return Player;\r\n}(game_object_1.default));\r\nexports.default = Player;\r\n//# sourceMappingURL=flaffy.js.map\n\n//# sourceURL=webpack:///./flaffy.js?");

/***/ }),

/***/ "./game-object.js":
/*!************************!*\
  !*** ./game-object.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar GameObject = /** @class */ (function () {\r\n    function GameObject(options) {\r\n        if (options) {\r\n            var position = options.position, size = options.size;\r\n            this._position = position;\r\n            this._size = size;\r\n        }\r\n    }\r\n    Object.defineProperty(GameObject.prototype, \"size\", {\r\n        get: function () {\r\n            return this._size;\r\n        },\r\n        set: function (v) {\r\n            this._size = v;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GameObject.prototype, \"position\", {\r\n        get: function () {\r\n            return this._position;\r\n        },\r\n        set: function (v) {\r\n            this._position = v;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    GameObject.prototype.draw = function (drawArgs) {\r\n        throw new Error(\"Method not implemented.\");\r\n    };\r\n    GameObject.prototype.update = function (updateArgs) {\r\n        throw new Error(\"Method not implemented.\");\r\n    };\r\n    GameObject.prototype.collision = function (gameObjects) {\r\n        return null;\r\n    };\r\n    return GameObject;\r\n}());\r\nexports.default = GameObject;\r\n//# sourceMappingURL=game-object.js.map\n\n//# sourceURL=webpack:///./game-object.js?");

/***/ }),

/***/ "./keyboard-handler.js":
/*!*****************************!*\
  !*** ./keyboard-handler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KEYS = {\r\n    W: 87,\r\n    A: 65,\r\n    S: 83,\r\n    D: 68\r\n};\r\nvar KeyboardHandler = /** @class */ (function () {\r\n    function KeyboardHandler() {\r\n        this._activeKeys = {};\r\n    }\r\n    Object.defineProperty(KeyboardHandler.prototype, \"activeKeys\", {\r\n        get: function () {\r\n            return this._activeKeys;\r\n        },\r\n        set: function (v) {\r\n            this._activeKeys = v;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    KeyboardHandler.prototype.isKeyActive = function (keyCode) {\r\n        return this._activeKeys[keyCode];\r\n    };\r\n    KeyboardHandler.prototype.keyDown = function (event) {\r\n        if (!this._activeKeys[event.which]) {\r\n            this._activeKeys[event.which] = Date.now();\r\n        }\r\n    };\r\n    KeyboardHandler.prototype.keyUp = function (event) {\r\n        delete this._activeKeys[event.which];\r\n    };\r\n    return KeyboardHandler;\r\n}());\r\nexports.default = KeyboardHandler;\r\n//# sourceMappingURL=keyboard-handler.js.map\n\n//# sourceURL=webpack:///./keyboard-handler.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\r\nvar keyboard_handler_1 = __webpack_require__(/*! ./keyboard-handler */ \"./keyboard-handler.js\");\r\n/**\r\n * GameObjects\r\n */\r\nvar flaffy_1 = __webpack_require__(/*! ./flaffy */ \"./flaffy.js\");\r\nvar pipehandler_1 = __webpack_require__(/*! ./pipehandler */ \"./pipehandler.js\");\r\nvar canvas = document.getElementById('game');\r\ncanvas.width = constants_1.CANVAS_WIDTH;\r\ncanvas.height = constants_1.CANVAS_HEIGHT;\r\nvar handler = new keyboard_handler_1.default();\r\nvar context = canvas.getContext('2d');\r\nvar frameCount = 0;\r\nvar fpsInterval;\r\nvar elapsed;\r\nvar startTime;\r\nvar now;\r\nvar then;\r\nwindow.addEventListener('keydown', handler.keyDown.bind(handler), false);\r\nwindow.addEventListener('keyup', handler.keyUp.bind(handler), false);\r\nvar draw = function (context) {\r\n    context.fillStyle = '#ececec';\r\n    context.fillRect(0, 0, 640, 480);\r\n    gameObjects.forEach(function (g) { return g.draw({ context: context }); });\r\n};\r\nvar update = function (elapsed) {\r\n    gameObjects.forEach(function (g) {\r\n        g.update({\r\n            deltatime: elapsed,\r\n            framecount: frameCount,\r\n            keyboard: handler\r\n        });\r\n        g.collision(gameObjects);\r\n    });\r\n};\r\nvar animationUpdate = function () {\r\n    window.requestAnimationFrame(animationUpdate);\r\n    now = Date.now();\r\n    elapsed = now - then;\r\n    if (elapsed > fpsInterval) {\r\n        then = now - (elapsed % fpsInterval);\r\n        frameCount++;\r\n        update(elapsed);\r\n        draw(context);\r\n    }\r\n};\r\nvar start = function () {\r\n    fpsInterval = 1000 / constants_1.FPS;\r\n    then = Date.now();\r\n    startTime = then;\r\n    animationUpdate();\r\n};\r\nvar gameObjects = [];\r\ngameObjects.push(new flaffy_1.default({\r\n    options: {\r\n        position: {\r\n            x: (constants_1.CANVAS_WIDTH / 2) - 60,\r\n            y: constants_1.CANVAS_HEIGHT / 2\r\n        },\r\n        size: {\r\n            width: 20,\r\n            height: 20\r\n        }\r\n    },\r\n    color: '#333'\r\n}));\r\ngameObjects.push(new pipehandler_1.default(75, -0.2));\r\nstart();\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./pipe.js":
/*!*****************!*\
  !*** ./pipe.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar game_object_1 = __webpack_require__(/*! ./game-object */ \"./game-object.js\");\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\r\nvar Pipe = /** @class */ (function (_super) {\r\n    __extends(Pipe, _super);\r\n    function Pipe(gameObject, options) {\r\n        var _this = _super.call(this, gameObject) || this;\r\n        _this._spacing = 150;\r\n        _this._options = options || {\r\n            color: '#00FF00',\r\n            speed: -0.5\r\n        };\r\n        return _this;\r\n    }\r\n    Object.defineProperty(Pipe.prototype, \"options\", {\r\n        get: function () {\r\n            return this._options;\r\n        },\r\n        set: function (v) {\r\n            this._options = v;\r\n            this._bottom = constants_1.CANVAS_HEIGHT - (this.size.height + this._spacing);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Pipe.prototype.update = function (_a) {\r\n        var deltatime = _a.deltatime;\r\n        this.position.x += this._options.speed * deltatime;\r\n    };\r\n    Pipe.prototype.draw = function (_a) {\r\n        var context = _a.context;\r\n        context.fillStyle = this._options.color;\r\n        var _b = this.position, x = _b.x, y = _b.y;\r\n        var _c = this.size, width = _c.width, height = _c.height;\r\n        context.fillRect(x, 0, width, height);\r\n        context.fillRect(x, this.size.height + this._spacing, width, constants_1.CANVAS_HEIGHT - height);\r\n    };\r\n    return Pipe;\r\n}(game_object_1.default));\r\nexports.default = Pipe;\r\n//# sourceMappingURL=pipe.js.map\n\n//# sourceURL=webpack:///./pipe.js?");

/***/ }),

/***/ "./pipehandler.js":
/*!************************!*\
  !*** ./pipehandler.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar game_object_1 = __webpack_require__(/*! ./game-object */ \"./game-object.js\");\r\nvar pipe_1 = __webpack_require__(/*! ./pipe */ \"./pipe.js\");\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./constants.js\");\r\nvar PipeHandler = /** @class */ (function (_super) {\r\n    __extends(PipeHandler, _super);\r\n    function PipeHandler(spawnrate, pipespeed) {\r\n        var _this = _super.call(this, null) || this;\r\n        _this._pipes = [];\r\n        _this._spawnrate = spawnrate;\r\n        _this._pipespeed = pipespeed;\r\n        return _this;\r\n    }\r\n    PipeHandler.prototype._killPipe = function (pipe, index, pipes) {\r\n        if (pipe.position.x + pipe.size.width < 0) {\r\n            pipes.splice(index, 1);\r\n            return;\r\n        }\r\n    };\r\n    PipeHandler.prototype._spawnPipe = function () {\r\n        var random = function (min, max) {\r\n            var rand = Math.random() * max;\r\n            if (rand < min)\r\n                return min;\r\n            return rand;\r\n        };\r\n        var height = random(constants_1.CANVAS_HEIGHT / 6, (3 / 4) * constants_1.CANVAS_HEIGHT);\r\n        var pipeSize = {\r\n            height: height,\r\n            width: 40\r\n        };\r\n        var pipe = new pipe_1.default({\r\n            position: {\r\n                x: constants_1.CANVAS_WIDTH,\r\n                y: 0\r\n            },\r\n            size: pipeSize\r\n        }, {\r\n            speed: this._pipespeed,\r\n            color: '#789933'\r\n        });\r\n        this._pipes.push(pipe);\r\n    };\r\n    PipeHandler.prototype.draw = function (drawArgs) {\r\n        this._pipes.forEach(function (p) { return p.draw(drawArgs); });\r\n    };\r\n    PipeHandler.prototype.update = function (updateArgs) {\r\n        var _this = this;\r\n        this._pipes.forEach(function (p, index, pipes) {\r\n            p.update(updateArgs);\r\n            _this._killPipe(p, index, pipes);\r\n        });\r\n        if (updateArgs.framecount % this._spawnrate === 0) {\r\n            this._spawnPipe();\r\n        }\r\n    };\r\n    return PipeHandler;\r\n}(game_object_1.default));\r\nexports.default = PipeHandler;\r\n//# sourceMappingURL=pipehandler.js.map\n\n//# sourceURL=webpack:///./pipehandler.js?");

/***/ })

/******/ });