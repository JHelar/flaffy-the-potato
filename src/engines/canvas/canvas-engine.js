"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var CanvasEngine = /** @class */ (function () {
    function CanvasEngine(context) {
        this._context = context;
    }
    CanvasEngine.prototype.drawRect = function (x, y, width, height, color) {
        this._context.fillStyle = color;
        this._context.fillRect(x, y, width, height);
    };
    CanvasEngine.prototype.preDraw = function () {
        this._context.fillStyle = '#ececec';
        this._context.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
    };
    return CanvasEngine;
}());
exports.default = CanvasEngine;
//# sourceMappingURL=canvas-engine.js.map