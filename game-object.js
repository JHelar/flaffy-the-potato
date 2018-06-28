"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject = /** @class */ (function () {
    function GameObject(options) {
        if (options) {
            var position = options.position, size = options.size;
            this._position = position;
            this._size = size;
        }
    }
    Object.defineProperty(GameObject.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (v) {
            this._size = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (v) {
            this._position = v;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.draw = function (drawArgs) {
        throw new Error("Method not implemented.");
    };
    GameObject.prototype.update = function (updateArgs) {
        throw new Error("Method not implemented.");
    };
    GameObject.prototype.collision = function (gameObjects) {
        return null;
    };
    return GameObject;
}());
exports.default = GameObject;
//# sourceMappingURL=game-object.js.map