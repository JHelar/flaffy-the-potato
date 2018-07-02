import { GameObjectOptions } from './game-object';
import { UpdateArgs, DrawArgs } from '../interfaces';
import { CANVAS_HEIGHT } from '../constants'
import BoxCollider from '../colliders/box-collider';
import Game from '../game';

interface PipeOptions {
    color: string,
    speed: number,
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
        Game.addCollidable(this);
    }

    update({ deltatime }: UpdateArgs) {
        this.position.x += this._options.speed * deltatime;
    }

    draw({ context }: DrawArgs) {
        context.fillStyle = this._options.color;
        const { x, y } = this.position;
        const { width, height } = this.size;
        context.fillRect(x, 0, width, height);
        context.fillRect(x, this.size.height + this._spacing, width, CANVAS_HEIGHT - height);
    }

    didCollide() {
        
    }
}