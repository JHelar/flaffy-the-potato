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
var constants_1 = require("../constants");
var keyboard_handler_1 = require("../keyboard-handler");
var game_1 = require("../game");
var box_collider_1 = require("../colliders/box-collider");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(args) {
        var _this = _super.call(this, args.options) || this;
        _this._velocity = 0;
        _this._lift = -0.1;
        _this._gravity = 0.05;
        _this._color = args.color;
        game_1.default.addCollidable(_this);
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
    Player.prototype.draw = function (_a) {
        var context = _a.context;
        var _b = this.size, width = _b.width, height = _b.height;
        var _c = this.position, x = _c.x, y = _c.y;
        context.fillStyle = this._color;
        context.fillRect(x, y, width, height);
    };
    Player.prototype.update = function (_a) {
        var deltatime = _a.deltatime;
        var keyPressed = game_1.default.Input.isKeyActive(keyboard_handler_1.KEYS.W);
        if (keyPressed) {
            this._velocity += this._lift;
        }
        this._velocity += this._gravity;
        this.position.y += this._velocity * deltatime;
        if (this.position.y > constants_1.CANVAS_HEIGHT - this.size.height) {
            this.position.y = constants_1.CANVAS_HEIGHT - this.size.height;
            this._velocity = 0;
        }
        else if (this.position.y < 0) {
            this.position.y = 0;
            this._velocity = 0;
        }
    };
    Player.prototype.didCollide = function () {
        game_1.default.STATE = game_1.GAME_STATES.PAUSED;
    };
    return Player;
}(box_collider_1.default));
exports.default = Player;
//# sourceMappingURL=flaffy.js.map