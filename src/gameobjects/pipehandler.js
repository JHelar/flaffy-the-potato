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
var game_object_1 = require("./game-object");
var pipe_3 = require("./pipe");
var constants_1 = require("../constants");
var game_1 = require("../game");
var PipeHandler = /** @class */ (function (_super) {
    __extends(PipeHandler, _super);
    function PipeHandler(spawnrate, pipespeed, texture) {
        var _this = _super.call(this, null) || this;
        _this._spawnrate = spawnrate;
        _this._pipespeed = pipespeed;
        _this._texture = texture;
        return _this;
    }
    PipeHandler.prototype._spawnPipe = function () {
        var random = function (min, max) {
            var rand = Math.random() * max;
            if (rand < min)
                return min;
            return rand;
        };
        var height = random(constants_1.CANVAS_HEIGHT / 6, (3 / 4) * constants_1.CANVAS_HEIGHT);
        var pipe_1 = new pipe_3.default({
            position: {
                x: constants_1.CANVAS_WIDTH,
                y: 0
            },
            size: {
                height: height,
                width: 40
            }
        }, {
            speed: this._pipespeed,
            color: '#789933',
            texture: this._texture
        });
        var pipe_2 = new pipe_3.default({
            position: {
                x: constants_1.CANVAS_WIDTH,
                y: height + 150
            },
            size: {
                height: constants_1.CANVAS_HEIGHT - height,
                width: 40
            },
        }, {
            speed: this._pipespeed,
            color: '#789933',
            texture: this._texture
        });
        game_1.default.addGameObject(pipe_1);
        game_1.default.addGameObject(pipe_2);
    };
    PipeHandler.prototype.draw = function (drawArgs) {
    };
    PipeHandler.prototype.update = function (updateArgs) {
        if (updateArgs.framecount % this._spawnrate === 0) {
            this._spawnPipe();
        }
    };
    PipeHandler.prototype.collision = function (gameObjects) {
    };
    return PipeHandler;
}(game_object_1.default));
exports.default = PipeHandler;
//# sourceMappingURL=pipehandler.js.map