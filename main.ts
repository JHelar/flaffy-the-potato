import { CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './constants';
import KeyboardHandler, { KEYS } from './keyboard-handler';

/**
 * GameObjects
 */
import Player from './player';


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

const draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = '#ececec';
    context.fillRect(0, 0, 640, 480);
    player.draw(context)
}

const update = (elapsed: number) => {
    player.update(elapsed, handler);
}

window.addEventListener('keydown', handler.keyDown.bind(handler));
window.addEventListener('keyup', handler.keyUp.bind(handler));

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

const player = new Player({
    options: {
        position: {
            x: 0,
            y: 220
        },
        size: {
            width: 20,
            height: 20
        }
    },
    color: '#333'
})

start();