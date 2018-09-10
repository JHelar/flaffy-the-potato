import GameObject, { GameObjectOptions } from './game-object';
import { DrawArgs, UpdateArgs, Texture } from '../interfaces'
import { CANVAS_HEIGHT } from '../constants';
import { KEYS } from '../keyboard-handler';
import Game, { GAME_STATES } from '../game';
import BoxCollider from '../colliders/box-collider';

interface PlayerArguments {
    options: GameObjectOptions,
    color: string,
    texture?: Texture
}

export default class Player extends BoxCollider {
    
    private _velocity : number = 0;
    private _lift : number = -0.1;
    private _gravity: number = 0.05;
    private _texture: Texture;

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
        this._texture = args.texture;
    }

    draw({ engine }: DrawArgs) {
        const { width, height } = this.size;
        const { x, y } = this.position;

        if(this._texture) {
            engine.drawTexture(this._texture, x, y, width, height);
        } else {
            engine.drawRect(x, y, width, height, this._color);
        }
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