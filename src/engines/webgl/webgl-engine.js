"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./webgl-context-utils");
var constants_1 = require("../../constants");
var WebGLEngine = /** @class */ (function () {
    function WebGLEngine(gl, backgroundColor) {
        if (backgroundColor === void 0) { backgroundColor = '#ececec'; }
        this._gl = gl;
        this._shaderProgram = utils.initShaderProgram(gl);
        this._shaderProgramInfo = utils.makeProgramInfo(this._gl, this._shaderProgram);
        this._backgroundColor = utils.hexToWebGLArray(backgroundColor);
        this._gl.viewport(0, 0, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
        utils.resizeCanvasToDisplaySize(this._gl.canvas);
        this._buffers = {
            position: this._gl.createBuffer()
        };
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._buffers.position);
        this._gl.useProgram(this._shaderProgram);
        this._gl.enableVertexAttribArray(this._shaderProgramInfo.attribLocations.vertexPosition);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._buffers.position);
        this._gl.vertexAttribPointer(this._shaderProgramInfo.attribLocations.vertexPosition, 2, this._gl.FLOAT, false, 0, 0);
        this._gl.uniform2f(this._shaderProgramInfo.uniformLocations.resolution, constants_1.CANVAS_WIDTH, constants_1.CANVAS_HEIGHT);
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
        this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
    };
    WebGLEngine.prototype.preDraw = function () {
        var _a = this._backgroundColor, r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        this._gl.clearColor(r, g, b, a);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    };
    WebGLEngine.prototype.createTexture = function (path) {
        return {
            element: {}
        };
    };
    WebGLEngine.prototype.drawTexture = function (texture, x, y, width, height) {
        throw new Error("Method not implemented.");
    };
    return WebGLEngine;
}());
exports.default = WebGLEngine;
//# sourceMappingURL=webgl-engine.js.map