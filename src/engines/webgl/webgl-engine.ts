import * as utils from './webgl-context-utils'
import { Engine, Texture } from '../../interfaces';
import { mat4, mat2, mat3 } from 'gl-matrix';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants';


export default class WebGLEngine implements Engine {
    
    private _gl : WebGLRenderingContext;
    private _shaderProgram: WebGLProgram;
    private _shaderProgramInfo: utils.ProgramInfo
    private _backgroundColor: number[];

    private _buffers : {
        position: WebGLBuffer
    };

    constructor(gl: WebGLRenderingContext, backgroundColor: string = '#ececec') {
        this._gl = gl;
        this._shaderProgram = utils.initShaderProgram(gl);
        this._shaderProgramInfo = utils.makeProgramInfo(this._gl, this._shaderProgram);
        this._backgroundColor = utils.hexToWebGLArray(backgroundColor);

        
        this._gl.viewport(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        utils.resizeCanvasToDisplaySize(this._gl.canvas)

        this._buffers = {
            position: this._gl.createBuffer()
        };
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._buffers.position);

        this._gl.useProgram(this._shaderProgram);
        this._gl.enableVertexAttribArray(this._shaderProgramInfo.attribLocations.vertexPosition);
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._buffers.position);

        this._gl.vertexAttribPointer(this._shaderProgramInfo.attribLocations.vertexPosition, 2, this._gl.FLOAT, false, 0, 0);
        this._gl.uniform2f(this._shaderProgramInfo.uniformLocations.resolution, CANVAS_WIDTH, CANVAS_HEIGHT);
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
        this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
    }

    preDraw(): void {
        const [r, g, b, a] = this._backgroundColor;

        this._gl.clearColor(r, g, b, a);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    }

    createTexture(path: string): Texture {
        return {
            element: {}   
        }
    }

    drawTexture(texture: Texture, x: number, y: number, width: number, height: number): void {
        throw new Error("Method not implemented.");
    }
}