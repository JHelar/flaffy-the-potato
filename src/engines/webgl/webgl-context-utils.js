"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shaders = require("./shaders");
var hex_to_rgb_1 = require("../../utils/hex-to-rgb");
var loadShader = function (gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occured compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
};
var initShaderProgram = function (gl) {
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, Shaders.vsSource);
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, Shaders.fsSource);
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
};
exports.initShaderProgram = initShaderProgram;
var makeSquareBuffer = function (gl) {
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var positions = [
        -1.0, 1.0,
        1.0, 1.0,
        -1.0, -1.0,
        1.0, -1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
};
exports.makeSquareBuffer = makeSquareBuffer;
var makeProgramInfo = function (gl, program) {
    var vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    var resolution = gl.getUniformLocation(program, 'uResolution');
    var color = gl.getUniformLocation(program, 'uColor');
    return {
        program: program,
        attribLocations: {
            vertexPosition: vertexPosition
        },
        uniformLocations: {
            resolution: resolution,
            color: color
        }
    };
};
exports.makeProgramInfo = makeProgramInfo;
var hexToWebGLArray = function (hex, alpha) {
    if (alpha === void 0) { alpha = 1.0; }
    var _a = hex_to_rgb_1.default(hex), r = _a.r, g = _a.g, b = _a.b;
    return [
        r / 255,
        g / 255,
        b / 255,
        alpha
    ];
};
exports.hexToWebGLArray = hexToWebGLArray;
var resizeCanvasToDisplaySize = function (canvas, multiplier) {
    multiplier = multiplier || 1;
    var width = canvas.clientWidth * multiplier | 0;
    var height = canvas.clientHeight * multiplier | 0;
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
};
exports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
//# sourceMappingURL=webgl-context-utils.js.map