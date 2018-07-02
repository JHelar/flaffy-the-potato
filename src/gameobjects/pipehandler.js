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
var pipe_1 = require("./pipe");
var constants_1 = require("../constants");
var game_1 = require("../game");
var PipeHandler = /** @class */ (function (_super) {
    __extends(PipeHandler, _super);
    function PipeHandler(spawnrate, pipespeed) {
        var _this = _super.call(this, null) || this;
        _this._pipes = [];
        _this._spawnrate = spawnrate;
        _this._pipespeed = pipespeed;
        return _this;
    }
    PipeHandler.prototype._killPipe = function (pipe, index, pipes) {
        if (pipe.position.x + pipe.size.width < 0) {
            pipes.splice(index, 1);
            game_1.default.removeCollidable(pipe.guid);
            return;
        }
    };
    PipeHandler.prototype._spawnPipe = function () {
        var random = function (min, max) {
            var rand = Math.random() * max;
            if (rand < min)
                return min;
            return rand;
        };
        var height = random(constants_1.CANVAS_HEIGHT / 6, (3 / 4) * constants_1.CANVAS_HEIGHT);
        var pipeSize = {
            height: height,
            width: 40
        };
        var pipe = new pipe_1.default({
            position: {
                x: constants_1.CANVAS_WIDTH,
                y: 0
            },
            size: pipeSize
        }, {
            speed: this._pipespeed,
            color: '#789933'
        });
        this._pipes.push(pipe);
    };
    PipeHandler.prototype.draw = function (drawArgs) {
        this._pipes.forEach(function (p) { return p.draw(drawArgs); });
    };
    PipeHandler.prototype.update = function (updateArgs) {
        var _this = this;
        this._pipes.forEach(function (p, index, pipes) {
            p.update(updateArgs);
            _this._killPipe(p, index, pipes);
        });
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