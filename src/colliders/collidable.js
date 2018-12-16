"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = require("../gameobjects/game-object");
var Collidable = /** @class */ (function (_super) {
    __extends(Collidable, _super);
    function Collidable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collidable.prototype.collisionCheck = function () {
        throw new Error("Method not implemented.");
    };
    Collidable.prototype.didCollide = function (gameObject) {
        throw new Error("Method not implemented.");
    };
    return Collidable;
}(game_object_1.default));
exports.Collidable = Collidable;
//# sourceMappingURL=collidable.js.map