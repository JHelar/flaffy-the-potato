import { CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './constants';
import KeyboardHandler, { KEYS } from './keyboard-handler';

/**
 * GameObjects
 */
import Player from './flaffy';
import PipeHandler from './pipehandler';
import GameObject from './game-object';


const canvas: HTMLCanvasElement = document.getElementById('game') as HTMLCanvasElement;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const handler = new KeyboardHandler();

const context = canvas.getContext('2d');

let frameCount: number = 0;
let fpsInterval: number;
let elapsed : number;
let startTime: number;
let now : number;
let then : number;

window.addEventListener('keydown', handler.keyDown.bind(handler), false);
window.addEventListener('keyup', handler.keyUp.bind(handler), false);

const draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = '#ececec';
    context.fillRect(0, 0, 640, 480);
    gameObjects.forEach(g => g.draw({ context: context }))
}

const update = (elapsed: number) => {
    gameObjects.forEach(g => {
        g.update({
            deltatime: elapsed,
            framecount: frameCount,
            keyboard: handler
        })
        g.collision(gameObjects)
    });
}

const animationUpdate = () => {
    
    window.requestAnimationFrame(animationUpdate)

    now = Date.now();
    elapsed = now - then;

    if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        frameCount++;

        update(elapsed)
        draw(context);
    }
}

const start = () => {
    fpsInterval = 1000 / FPS;
    then = Date.now();
    startTime = then;
    animationUpdate();
}

const gameObjects: GameObject[] = [];
gameObjects.push(new Player({
    options: {
        position: {
            x: (CANVAS_WIDTH / 2) - 60,
            y: CANVAS_HEIGHT / 2
        },
        size: {
            width: 20,
            height: 20
        }
    },
    color: '#333'
}))
gameObjects.push(new PipeHandler(75, -0.2));

start();