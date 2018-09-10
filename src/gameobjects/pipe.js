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
var constants_1 = require("../constants");
var box_collider_1 = require("../colliders/box-collider");
var game_1 = require("../game");
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
        if (this.position.x + this.size.width < 0) {
            game_1.default.removeGameobject(this); // Kill self
        }
    };
    Pipe.prototype.draw = function (_a) {
        var engine = _a.engine;
        var _b = this.position, x = _b.x, y = _b.y;
        var _c = this.size, width = _c.width, height = _c.height;
        if (this._options.texture) {
            engine.drawTexture(this._options.texture, x, y, width, height);
        }
        else {
            engine.drawRect(x, y, width, height, this._options.color);
        }
    };
    Pipe.prototype.didCollide = function () {
    };
    return Pipe;
}(box_collider_1.default));
exports.default = Pipe;
//# sourceMappingURL=pipe.js.map