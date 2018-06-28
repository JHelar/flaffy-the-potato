"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject = /** @class */ (function () {
    function GameObject(options) {
        this._options = options;
    }
    Object.defineProperty(GameObject.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (v) {
            this._options = v;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.draw = function (context) {
        throw new Error("Method not implemented.");
    };
    GameObject.prototype.update = function (deltatime, handler) {
        throw new Error("Method not implemented.");
    };
    return GameObject;
}());
exports.default = GameObject;
//# sourceMappingURL=game-object.js.map