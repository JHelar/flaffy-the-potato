"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./webgl-context-utils");
var constants_1 = require("../../constants");
var WebGLEngine = /** @class */ (function () {
    function WebGLEngine(gl) {
        this._gl = gl;
        this._shaderProgram = utils.initShaderProgram(gl);
        this._shaderProgramInfo = utils.makeProgramInfo(this._gl, this._shaderProgram);
        this._gl.viewport(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
        utils.resizeCanvasToDisplaySize(this._gl.canvas);
        var positionBuffer = this._gl.createBuffer();
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, positionBuffer);
        this._gl.useProgram(this._shaderProgram);
    }
    WebGLEngine.prototype._setRect = function (x, y, width, height) {
        var x1 = x;
        var x2 = x + width;
        var y1 = y;
        var y2 = y + height;
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2
        ]), this._gl.STATIC_DRAW);
    };
    WebGLEngine.prototype.drawRect = function (x, y, width, height, color) {
        var webGLColor = utils.hexToWebGLArray(color);
        this._setRect(x, y, width, height);
        this._gl.uniform4fv(this._shaderProgramInfo.uniformLocations.color, webGLColor);
        var primitiveType = this._gl.TRIANGLES;
        var count = 6;
        var offset = 0;
        this._gl.drawArrays(primitiveType, offset, count);
    };
    WebGLEngine.prototype.preDraw = function () {
        this._gl.clearColor(1.0, 0.0, 1.0, 0.2);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    };
    return WebGLEngine;
}());
exports.default = WebGLEngine;
//# sourceMappingURL=webgl-engine.js.map