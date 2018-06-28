import GameObject, { GameObjectOptions } from './game-object';
import { UpdateArgs, DrawArgs } from './interfaces'
import { CANVAS_HEIGHT } from './constants';
import { KEYS } from './keyboard-handler';

interface PlayerArguments {
    options: GameObjectOptions,
    color: string,

}

export default class Player extends GameObject {
    
    private _velocity : number = 0;
    private _lift : number = -0.1;
    private _gravity: number = 0.05;

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

    draw({ context }: DrawArgs) {
        const { width, height } = this.size;
        const { x, y } = this.position;

        context.fillStyle = this._color;
        context.fillRect(x, y, width, height);
    }

    update({ deltatime, keyboard }: UpdateArgs) {
        const keyPressed = keyboard.isKeyActive(KEYS.W);
        if(keyPressed) {
            this._velocity += this._lift;
        }
        this._velocity += this._gravity;

        this.position.y += this._velocity * deltatime;

        if(this.position.y > CANVAS_HEIGHT - this.size.height) {
            this.position.y = CANVAS_HEIGHT - this.size.height;
            this._velocity = 0;
        } else if (this.position.y < 0) {
            this.position.y = 0;
            this._velocity = 0;
        }
    }
}