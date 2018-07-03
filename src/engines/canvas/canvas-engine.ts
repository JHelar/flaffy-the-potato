import { Engine } from '../../interfaces';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants';

export default class CanvasEngine implements Engine {

    private _context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this._context = context;
    }

    drawRect(x: number, y: number, width: number, height: number, color: string): void {
        this._context.fillStyle = color;
        this._context.fillRect(x, y, width, height);
    }
    preDraw(): void {
        this._context.fillStyle = '#ececec';
        this._context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}