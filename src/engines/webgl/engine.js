"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./webgl-context-utils");
var gl_matrix_1 = require("gl-matrix");
var WebGLWrapper = /** @class */ (function () {
    function WebGLWrapper(gl) {
        this._gl = gl;
        this._shaderProgram = utils.initShaderProgram(gl);
        this._fieldOfView = 45 * Math.PI / 180; // in radians
        this._aspect = this._gl.canvas.clientWidth / this._gl.canvas.clientHeight;
        this._zNear = 0.1;
        this._zFar = 100.0;
    }
    WebGLWrapper.prototype.drawSquare = function (x, y, width, height, color) {
        var programInfo = utils.makeProgramInfo(this._gl, this._shaderProgram);
        var buffers = utils.makeSquareBuffer(this._gl);
        var projectionMatrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.perspective(projectionMatrix, this._fieldOfView, this._aspect, this._zNear, this._zFar);
        var modelViewMatrix = gl_matrix_1.mat4.create();
        gl_matrix_1.mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, y, x]);
        {
            var numComponents = 2; // pull out 2 values per iteration
            var type = this._gl.FLOAT; // the data in the buffer is 32bit floats
            var normalize = false; // don't normalize
            var stride = 0; // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            var offset = 0; // how many bytes inside the buffer to start from
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, buffers);
            this._gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
            this._gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        }
        this._gl.useProgram(programInfo.program);
        this._gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
        this._gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);
        {
            var offset = 0;
            var vertexCount = 4;
            this._gl.drawArrays(this._gl.TRIANGLE_STRIP, offset, vertexCount);
        }
    };
    WebGLWrapper.prototype.preDraw = function () {
        this._gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
        this._gl.clearDepth(1.0); // Clear everything
        this._gl.enable(this._gl.DEPTH_TEST); // Enable depth testing
        this._gl.depthFunc(this._gl.LEQUAL); // Near things obscure far things
        // Clear the canvas before we start drawing on it.
        this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
    };
    return WebGLWrapper;
}());
//# sourceMappingURL=engine.js.map