import { GameObjectOptions } from './game-object';
import { DrawArgs, UpdateArgs } from '../interfaces'
import { CANVAS_HEIGHT } from '../constants';
import { KEYS } from '../keyboard-handler';
import Game, { GAME_STATES } from '../game';
import BoxCollider from '../colliders/box-collider';

interface PlayerArguments {
    options: GameObjectOptions,
    color: string,

}

export default class Player extends BoxCollider {
    
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
        Game.addCollidable(this);
    }

    draw({ context }: DrawArgs) {
        const { width, height } = this.size;
        const { x, y } = this.position;

        context.fillStyle = this._color;
        context.fillRect(x, y, width, height);
    }

    update({ deltatime }: UpdateArgs) {
        const keyPressed = Game.Input.isKeyActive(KEYS.W);
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

    didCollide() {
        Game.STATE = GAME_STATES.PAUSED
    }
}