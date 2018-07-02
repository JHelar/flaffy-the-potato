import { CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './constants';
import KeyboardHandler, { KEYS } from './keyboard-handler';

import GameObject from "./gameobjects/game-object";
import { Collidable } from './colliders/collidable';

import { findIndex } from 'lodash'

export const GAME_STATES = {
    STOP: 'GAME_STOPP',
    PLAY: 'GAME_PLAY',
    PAUSED: 'GAME_PAUSED'
}

export default class Game {
    public static readonly GameObjects: GameObject[] = [];
    public static readonly Collidables: Collidable[] = [];

    public static Input: KeyboardHandler;
    public static STATE: string = GAME_STATES.STOP;

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    private _frameCount: number = 0;
    private _fpsInterval: number = 0;
    private _elapsed : number = 0;
    private _startTime: number = 0;
    private _now : number = 0;
    private _then : number = 0;

    constructor(canvasId: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._canvas.width = CANVAS_WIDTH;
        this._canvas.height = CANVAS_HEIGHT;

        Game.Input = new KeyboardHandler();

        this._context = this._canvas.getContext('2d');

        window.addEventListener('keydown', Game.Input.keyDown.bind(Game.Input), false);
        window.addEventListener('keyup', Game.Input.keyUp.bind(Game.Input), false);
    }

    private _draw(){
        this._context.fillStyle = '#ececec';
        this._context.fillRect(0, 0, 640, 480);
        Game.GameObjects.forEach(g => g.draw({ context: this._context }))
    }

    private _update(){
        if(Game.Input.isKeyActive(KEYS.SPACE)){
            Game.STATE = GAME_STATES.PLAY;
        }

        if(Game.STATE === GAME_STATES.PLAY) {
            Game.GameObjects.forEach(g => {
                g.update({
                    deltatime: this._elapsed,
                    framecount: this._frameCount
                })
            });
    
            Game.Collidables.forEach(c => {
                c.collisionCheck.bind(c)();
            });
        }
    }

    private _gameLoop(){
        window.requestAnimationFrame(this._gameLoop.bind(this));
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        
        if(this._elapsed > this._fpsInterval) {
            this._then = this._now - (this._elapsed % this._fpsInterval);
            this._frameCount++;
            this._update();
            this._draw();
        }
    }

    public start(){
        this._frameCount = 0;
        this._fpsInterval = 1000 / FPS;
        this._then = Date.now();
        this._startTime = this._then;
        
        Game.STATE = GAME_STATES.PLAY;

        this._gameLoop();
    }

    public static addGameObject(gameObject: GameObject){
        Game.GameObjects.push(gameObject);
    }

    public static addCollidable(collidable: Collidable) {
        Game.Collidables.push(collidable);
    }

    public static removeCollidable(guid: string) {
        const index = findIndex(Game.Collidables, c => c.guid === guid);
        if(index > -1) {
            Game.Collidables.splice(index, 1);
        }
    }
}