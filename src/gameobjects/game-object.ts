import { Point, Size, UpdateArgs, DrawArgs } from '../interfaces';

export interface GameObjectInterface {
    /**
     * draw
     */
    draw(drawArgs: DrawArgs);

    /**
     * update
     */
    update(updateArgs: UpdateArgs);

    size: Size;
    position: Point
}

export interface GameObjectOptions {
    position: Point,
    size: Size
}

export default abstract class GameObject implements GameObjectInterface {
    
    private _size : Size;
    public get size() : Size {
        return this._size;
    }
    public set size(v : Size) {
        this._size = v;
    }
    
    
    private _position : Point;
    public get position() : Point {
        return this._position;
    }
    public set position(v : Point) {
        this._position = v;
    }
    
    

    constructor(options?: GameObjectOptions){
        if(options){
            const { position, size } = options;
            this._position = position;
            this._size = size;
        }
    }

    draw(drawArgs: DrawArgs) {
        throw new Error("Method not implemented.");
    }

    update(updateArgs: UpdateArgs) {
        throw new Error("Method not implemented.");
    }
}