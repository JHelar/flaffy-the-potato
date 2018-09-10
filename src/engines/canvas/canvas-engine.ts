import { Engine, CanvasTexture, Texture } from '../../interfaces';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants';

export default class CanvasEngine implements Engine {

    private _context: CanvasRenderingContext2D;
    private _backgroundColor: string;

    constructor(context: CanvasRenderingContext2D, backgroundColor: string = '#ececec') {
        this._context = context;
        this._backgroundColor = backgroundColor;
    }

    drawRect(x: number, y: number, width: number, height: number, color: string): void {
        this._context.fillStyle = color;
        this._context.fillRect(x, y, width, height);
    }

    drawTexture(tex: CanvasTexture, x: number, y: number, width: number, height: number): void {
        this._context.drawImage(tex.element, x, y, width, height);
    }

    preDraw(): void {
        this._context.fillStyle = this._backgroundColor;
        this._context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    createTexture(path: string): CanvasTexture {
        const element = document.createElement('img');
        element.src = path;

        return {
            element
        }
    }
}