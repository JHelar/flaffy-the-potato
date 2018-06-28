"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYS = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
};
var KeyboardHandler = /** @class */ (function () {
    function KeyboardHandler() {
        this._activeKeys = {};
    }
    Object.defineProperty(KeyboardHandler.prototype, "activeKeys", {
        get: function () {
            return this._activeKeys;
        },
        set: function (v) {
            this._activeKeys = v;
        },
        enumerable: true,
        configurable: true
    });
    KeyboardHandler.prototype.isKeyActive = function (keyCode) {
        return this._activeKeys[keyCode];
    };
    KeyboardHandler.prototype.keyDown = function (event) {
        this._activeKeys[event.which] = true;
    };
    KeyboardHandler.prototype.keyUp = function (event) {
        this._activeKeys[event.which] = false;
    };
    return KeyboardHandler;
}());
exports.default = KeyboardHandler;
//# sourceMappingURL=keyboard-handler.js.map