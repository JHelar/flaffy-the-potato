import GameObject from "./game-object";
import Pipe from "./pipe";
import { DrawArgs, UpdateArgs, Size } from '../interfaces';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants';
import Game from "../game";

export default class PipeHandler extends GameObject {
    private _pipes : Pipe[];
    private _spawnrate: number;
    private _pipespeed: number;

    constructor(spawnrate: number, pipespeed: number){
        super(null)
        this._pipes = [];
        this._spawnrate = spawnrate;
        this._pipespeed = pipespeed;
    }

    private _killPipe(pipe: Pipe, index: number, pipes: Pipe[]) {
        if(pipe.position.x + pipe.size.width < 0) {
            pipes.splice(index, 1);
            Game.removeCollidable(pipe.guid);
            return;
        }
    }

    private _spawnPipe() {
        const random = (min: number, max: number): number => {
            const rand = Math.random() * max;
            if(rand < min) return min;
            return rand;
        }

        const height = random(CANVAS_HEIGHT / 6, (3 / 4) * CANVAS_HEIGHT);

        const pipeSize: Size = {
            height,
            width: 40
        }
        const pipe = new Pipe({
            position: {
                x: CANVAS_WIDTH,
                y: 0
            },
            size: pipeSize
        }, {
            speed: this._pipespeed,
            color: '#789933'
        });
        this._pipes.push(pipe)
    }

    draw(drawArgs: DrawArgs){
        this._pipes.forEach(p => p.draw(drawArgs))
    }

    update(updateArgs: UpdateArgs) {
        this._pipes.forEach((p: Pipe, index: number, pipes: Pipe[]) => {
            p.update(updateArgs);
            this._killPipe(p, index, pipes);
        });


        if(updateArgs.framecount % this._spawnrate === 0) {
            this._spawnPipe();
        }
    }

    collision(gameObjects: GameObject[]) {
        
    }
}