import { Point, Size } from './interfaces';
import KeyboardHandler from './keyboard-handler';

export interface GameObjectInterface {
    /**
     * draw
     */
    draw(context: CanvasRenderingContext2D);

    /**
     * update
     */
    update(deltatime: number, handler: KeyboardHandler);
}

export interface GameObjectOptions {
    position: Point,
    size: Size
}

export default abstract class GameObject implements GameObjectInterface {
    
    private _options : GameObjectOptions;
    public get options() : GameObjectOptions {
        return this._options;
    }
    public set options(v : GameObjectOptions) {
        this._options = v;
    }
    

    constructor(options: GameObjectOptions){
        this._options = options;
    }

    draw(context: CanvasRenderingContext2D) {
        throw new Error("Method not implemented.");
    }
    update(deltatime: number, handler: KeyboardHandler) {
        throw new Error("Method not implemented.");
    }
}