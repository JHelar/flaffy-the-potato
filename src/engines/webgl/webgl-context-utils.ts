import * as Shaders from './shaders'
import hexToRgb from '../../utils/hex-to-rgb';

const loadShader = (gl: WebGLRenderingContext, type: number, source: string): (WebGLShader | null) => {
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occured compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

const initShaderProgram = (gl: WebGLRenderingContext): (WebGLProgram | null) => {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, Shaders.vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, Shaders.fsSource);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }

    return shaderProgram;
}

const makeSquareBuffer = (gl: WebGLRenderingContext): WebGLBuffer => {
    const positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
        -1.0, 1.0,
        1.0, 1.0,
        -1.0, -1.0,
        1.0, -1.0
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

export interface ProgramInfo {
    program: WebGLProgram,
    attribLocations: {
        vertexPosition: number,
    },
    uniformLocations: {
        resolution: WebGLUniformLocation,
        color: WebGLUniformLocation
    }
}

const makeProgramInfo = (gl: WebGLRenderingContext, program: WebGLProgram): ProgramInfo => {
    const vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    const resolution = gl.getUniformLocation(program, 'uResolution');
    const color = gl.getUniformLocation(program, 'uColor');
    return {
        program,
        attribLocations: {
            vertexPosition
        },
        uniformLocations: {
            resolution,
            color
        }
    }
}

const hexToWebGLArray = (hex: string, alpha: number = 1.0) => {
    const { r, g, b } = hexToRgb(hex);
    return [
        r / 255,
        g / 255,
        b / 255,
        alpha
    ]
}

const resizeCanvasToDisplaySize = (canvas, multiplier?) => {
    multiplier = multiplier || 1;
    var width = canvas.clientWidth * multiplier | 0;
    var height = canvas.clientHeight * multiplier | 0;
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

export {
    makeSquareBuffer,
    initShaderProgram,
    makeProgramInfo,
    hexToWebGLArray,
    resizeCanvasToDisplaySize
}