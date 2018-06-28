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
var Pipe = /** @class */ (function (_super) {
    __extends(Pipe, _super);
    function Pipe(gameObject, options) {
        var _this = _super.call(this, gameObject) || this;
        _this._spacing = 150;
        _this._options = options || {
            color: '#00FF00',
            speed: -0.5
        };
        return _this;
    }
    Object.defineProperty(Pipe.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (v) {
            this._options = v;
            this._bottom = constants_1.CANVAS_HEIGHT - (this.size.height + this._spacing);
        },
        enumerable: true,
        configurable: true
    });
    Pipe.prototype.update = function (_a) {
        var deltatime = _a.deltatime;
        this.position.x += this._options.speed * deltatime;
    };
    Pipe.prototype.draw = function (_a) {
        var context = _a.context;
        context.fillStyle = this._options.color;
        var _b = this.position, x = _b.x, y = _b.y;
        var _c = this.size, width = _c.width, height = _c.height;
        context.fillRect(x, 0, width, height);
        context.fillRect(x, this.size.height + this._spacing, width, constants_1.CANVAS_HEIGHT - height);
    };
    return Pipe;
}(game_object_1.default));
exports.default = Pipe;
//# sourceMappingURL=pipe.js.map