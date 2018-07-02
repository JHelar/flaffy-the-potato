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
var game_object_1 = require("../gameobjects/game-object");
var guid_1 = require("../utils/guid");
var Collidable = /** @class */ (function (_super) {
    __extends(Collidable, _super);
    function Collidable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.guid = guid_1.default();
        return _this;
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