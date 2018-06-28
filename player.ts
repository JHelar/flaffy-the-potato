import GameObject, { GameObjectOptions } from './game-object';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import KeyboardHandler, { KEYS } from './keyboard-handler';

interface PlayerArguments {
    options: GameObjectOptions,
    color: string,

}

export default class Player extends GameObject {
    
    private _dX : number = 1;
    private _dY : number = -1;
    private _speed : number = 0.16;

    private _color : string;

    public get color() : string {
        return this._color;
    }
    public set color(v : string) {
        this._color = v;
    }
    

    constructor(args: PlayerArguments) {
        super(args.options)
        this._color = args.color;
    }

    draw(context: CanvasRenderingContext2D) {
        const { width, height } = this.options.size;
        const { x, y } = this.options.position;

        context.fillStyle = this._color;
        context.fillRect(x, y, width, height);
    }

    update(deltatime: number, handler: KeyboardHandler) {
        this.options.position.x += (this._dX * this._speed) * deltatime;
        this.options.position.y += (this._dY * this._speed) * deltatime;

        if((this.options.position.x + this.options.size.width) > CANVAS_WIDTH ) {
            this._dX = -1;
        }
        else if (this.options.position.x  < 0) {
            this._dX = 1;
        }

    }
}