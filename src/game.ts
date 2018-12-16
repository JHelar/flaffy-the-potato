import { CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './constants';
import KeyboardHandler, { KEYS } from './keyboard-handler';

import GameObject from "./gameobjects/game-object";
import { Collidable } from './colliders/collidable';

import { findIndex } from 'lodash'
import { Engine, Texture } from './interfaces';
import CanvasEngine from './engines/canvas/canvas-engine';
import WebGLEngine from './engines/webgl/webgl-engine';

export const GAME_STATES = {
    STOP: 'GAME_STOPP',
    PLAY: 'GAME_PLAY',
    PAUSED: 'GAME_PAUSED'
}

export default class Game {
    public static readonly GameObjects: GameObject[] = [];

    public static Input: KeyboardHandler;
    public static STATE: string = GAME_STATES.STOP;
    public static get Collidables(): Collidable[] {
        return <Collidable[]>this.GameObjects.filter(g => g instanceof Collidable);
    }

    private _canvas: HTMLCanvasElement;
    private _engine: Engine;

    private _frameCount: number = 0;
    private _fpsInterval: number = 0;
    private _elapsed : number = 0;
    private _startTime: number = 0;
    private _now : number = 0;
    private _then : number = 0;

    constructor(canvasId: string, mode: string) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._canvas.width = CANVAS_WIDTH;
        this._canvas.height = CANVAS_HEIGHT;

        Game.Input = new KeyboardHandler();
        

        const context = this._canvas.getContext(mode);
        if(context instanceof CanvasRenderingContext2D) {
            this._engine = new CanvasEngine(context);
        }else if (context instanceof WebGLRenderingContext) {
            this._engine = new WebGLEngine(context);
        } else {
            throw new Error('Invalid engine option!');
        }

        window.addEventListener('keydown', Game.Input.keyDown.bind(Game.Input), false);
        window.addEventListener('keyup', Game.Input.keyUp.bind(Game.Input), false);
    }

    private _draw(){
        this._engine.preDraw();
        Game.GameObjects.forEach(g => g.draw({ engine: this._engine }))
    }

    private _update(){
        Game.GameObjects.forEach(g => {
            g.update({
                deltatime: this._elapsed,
                framecount: this._frameCount
            })
            
            if(g instanceof Collidable){
                g.collisionCheck.bind(g)();
            }
        });
    }

    private _gameLoop(){
        window.requestAnimationFrame(this._gameLoop.bind(this));
        this._now = Date.now();
        this._elapsed = this._now - this._then;
        
        if(this._elapsed > this._fpsInterval) {
            this._then = this._now - (this._elapsed % this._fpsInterval);
            this._frameCount++;
            if(Game.STATE === GAME_STATES.PLAY) {
                this._update();
                this._draw();
            } else if(Game.Input.isKeyActive(KEYS.SPACE)){
                Game.STATE = GAME_STATES.PLAY;
            }
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

    public createTexture(path: string): Texture {
        return this._engine.createTexture(path);
    }

    public static addGameObject(gameObject: GameObject){
        Game.GameObjects.push(gameObject);
    }

    public static removeGameobject({ guid }: GameObject) {
        const index = findIndex(Game.GameObjects, c => c.guid === guid);
        if(index > -1) {
            Game.GameObjects.splice(index, 1);
        }
    }
}