import * as utils from './webgl-context-utils'
import { Engine } from '../../interfaces';
import { mat4, mat2, mat3 } from 'gl-matrix';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants';


export default class WebGLEngine implements Engine {
    
    private _gl : WebGLRenderingContext;
    private _shaderProgram: WebGLProgram;
    private _shaderProgramInfo: utils.ProgramInfo

    constructor(gl: WebGLRenderingContext) {
        this._gl = gl;
        this._shaderProgram = utils.initShaderProgram(gl);
        this._shaderProgramInfo = utils.makeProgramInfo(this._gl, this._shaderProgram);

        this._gl.viewport(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        utils.resizeCanvasToDisplaySize(this._gl.canvas)

        const positionBuffer = this._gl.createBuffer();
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, positionBuffer);

        this._gl.useProgram(this._shaderProgram);
    }

    private _setRect(x: number, y: number, width: number, height: number) {
        const x1 = x;
        const x2 = x + width;
        const y1 = y;
        const y2 = y + height;

        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array([
            x1, y1,
            x2, y1,
            x1, y2,
            x1, y2,
            x2, y1,
            x2, y2]), this._gl.STATIC_DRAW);
    }

    drawRect(x: number, y: number, width: number, height: number, color: string): void {
        const webGLColor = utils.hexToWebGLArray(color);

        this._setRect(x, y, width, height);
        this._gl.uniform4fv(this._shaderProgramInfo.uniformLocations.color, webGLColor);

        const primitiveType = this._gl.TRIANGLES;
        const count = 6;
        const offset = 0;
        
        this._gl.drawArrays(primitiveType, offset, count);
    }

    preDraw(): void {
        this._gl.clearColor(1.0, 0.0, 1.0, 0.2);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    }
}