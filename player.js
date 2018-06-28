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
var game_object_1 = require("./game-object");
var constants_1 = require("./constants");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(args) {
        var _this = _super.call(this, args.options) || this;
        _this._dX = 1;
        _this._dY = -1;
        _this._speed = 0.16;
        _this._color = args.color;
        return _this;
    }
    Object.defineProperty(Player.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (v) {
            this._color = v;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.draw = function (context) {
        var _a = this.options.size, width = _a.width, height = _a.height;
        var _b = this.options.position, x = _b.x, y = _b.y;
        context.fillStyle = this._color;
        context.fillRect(x, y, width, height);
    };
    Player.prototype.update = function (deltatime, handler) {
        this.options.position.x += (this._dX * this._speed) * deltatime;
        this.options.position.y += (this._dY * this._speed) * deltatime;
        if ((this.options.position.x + this.options.size.width) > constants_1.CANVAS_WIDTH) {
            this._dX = -1;
        }
        else if (this.options.position.x < 0) {
            this._dX = 1;
        }
    };
    return Player;
}(game_object_1.default));
exports.default = Player;
//# sourceMappingURL=player.js.map