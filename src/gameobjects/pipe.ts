import { GameObjectOptions } from './game-object';
import { UpdateArgs, DrawArgs, Texture } from '../interfaces';
import { CANVAS_HEIGHT } from '../constants'
import BoxCollider from '../colliders/box-collider';
import Game from '../game';

interface PipeOptions {
    color: string,
    speed: number,
    texture?: Texture
}

export default class Pipe extends BoxCollider {
    
    private _bottom: number;
    private _spacing: number = 150;

    private _options : PipeOptions;
    public get options() : PipeOptions {
        return this._options;
    }
    public set options(v : PipeOptions) {
        this._options = v;
        this._bottom = CANVAS_HEIGHT - (this.size.height + this._spacing);
    }

    constructor(gameObject: GameObjectOptions, options?: PipeOptions){
        super(gameObject);
        this._options = options || {
            color: '#00FF00',
            speed: -0.5
        }
    }

    update({ deltatime }: UpdateArgs) {
        this.position.x += this._options.speed * deltatime;

        if(this.position.x + this.size.width < 0) {
            Game.removeGameobject(this); // Kill self
        }
    }

    draw({ engine }: DrawArgs) {
        const { x, y } = this.position;
        const { width, height } = this.size;
        if(this._options.texture) {
            engine.drawTexture(this._options.texture, x, y, width, height);
        } else {
            engine.drawRect(x, y, width, height, this._options.color);
        }
    }

    didCollide() {
    }
}