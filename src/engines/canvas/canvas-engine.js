"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var CanvasEngine = /** @class */ (function () {
    function CanvasEngine(context, backgroundColor) {
        if (backgroundColor === void 0) { backgroundColor = '#ececec'; }
        this._context = context;
        this._backgroundColor = backgroundColor;
    }
    CanvasEngine.prototype.drawRect = function (x, y, width, height, color) {
        this._context.fillStyle = color;
        this._context.fillRect(x, y, width, height);
    };
    CanvasEngine.prototype.drawTexture = function (tex, x, y, width, height) {
        this._context.drawImage(tex.element, x, y, width, height);
    };
    CanvasEngine.prototype.preDraw = function () {
        this._context.fillStyle = this._backgroundColor;
        this._context.fillRect(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
    };
    CanvasEngine.prototype.createTexture = function (path) {
        var element = document.createElement('img');
        element.src = path;
        return {
            element: element
        };
    };
    return CanvasEngine;
}());
exports.default = CanvasEngine;
//# sourceMappingURL=canvas-engine.js.map