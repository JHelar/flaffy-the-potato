import GameObject from "./game-object";
import Pipe from "./pipe";
import { DrawArgs, UpdateArgs, Size, Texture } from '../interfaces';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';
import Game from "../game";

export default class PipeHandler extends GameObject {
    private _spawnrate: number;
    private _pipespeed: number;
    private _texture: Texture;

    constructor(spawnrate: number, pipespeed: number, texture?: Texture){
        super(null)
        this._spawnrate = spawnrate;
        this._pipespeed = pipespeed;
        this._texture = texture;
    }

    private _spawnPipe() {
        const random = (min: number, max: number): number => {
            const rand = Math.random() * max;
            if(rand < min) return min;
            return rand;
        }

        const height = random(CANVAS_HEIGHT / 6, (3 / 4) * CANVAS_HEIGHT);

        const pipe_1 = new Pipe({
            position: {
                x: CANVAS_WIDTH,
                y: 0
            },
            size: {
                height,
                width: 40
            }
        }, {
            speed: this._pipespeed,
            color: '#789933',
            texture: this._texture
        });

        const pipe_2 = new Pipe({
            position: {
                x: CANVAS_WIDTH,
                y: height + 150
            },
            size: {
                height: CANVAS_HEIGHT - height,
                width: 40
            },
        }, {
            speed: this._pipespeed,
            color: '#789933',
            texture: this._texture
        })

        Game.addGameObject(pipe_1);
        Game.addGameObject(pipe_2);
    }

    draw(drawArgs: DrawArgs){
    }

    update(updateArgs: UpdateArgs) {
        if(updateArgs.framecount % this._spawnrate === 0) {
            this._spawnPipe();
        }
    }

    collision(gameObjects: GameObject[]) {
        
    }
}