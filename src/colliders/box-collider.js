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
var collidable_1 = require("./collidable");
var game_1 = require("../game");
var BoxCollider = /** @class */ (function (_super) {
    __extends(BoxCollider, _super);
    function BoxCollider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxCollider.prototype._collisionCheck = function (collidable) {
        if (collidable.guid === this.guid)
            return false;
        if ((this.position.x > collidable.position.x &&
            this.position.x < collidable.position.x + collidable.size.width) ||
            (this.position.x < collidable.position.x &&
                this.position.x + this.size.width > collidable.position.x)) {
            if ((this.position.y > collidable.position.y &&
                this.position.y < collidable.position.y + collidable.size.height) ||
                (this.position.y < collidable.position.y &&
                    this.position.y + this.size.height > collidable.position.y)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    BoxCollider.prototype.collisionCheck = function () {
        var _this = this;
        var collisions = game_1.default.Collidables.filter(this._collisionCheck.bind(this));
        collisions.forEach(function (c) { return c.didCollide(_this); });
    };
    return BoxCollider;
}(collidable_1.Collidable));
exports.default = BoxCollider;
//# sourceMappingURL=box-collider.js.map