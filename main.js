"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var keyboard_handler_1 = require("./keyboard-handler");
/**
 * GameObjects
 */
var flaffy_1 = require("./flaffy");
var pipehandler_1 = require("./pipehandler");
var canvas = document.getElementById('game');
canvas.width = constants_1.CANVAS_WIDTH;
canvas.height = constants_1.CANVAS_HEIGHT;
var handler = new keyboard_handler_1.default();
var context = canvas.getContext('2d');
var frameCount = 0;
var fpsInterval;
var elapsed;
var startTime;
var now;
var then;
window.addEventListener('keydown', handler.keyDown.bind(handler), false);
window.addEventListener('keyup', handler.keyUp.bind(handler), false);
var draw = function (context) {
    context.fillStyle = '#ececec';
    context.fillRect(0, 0, 640, 480);
    gameObjects.forEach(function (g) { return g.draw({ context: context }); });
};
var update = function (elapsed) {
    gameObjects.forEach(function (g) {
        g.update({
            deltatime: elapsed,
            framecount: frameCount,
            keyboard: handler
        });
        g.collision(gameObjects);
    });
};
var animationUpdate = function () {
    window.requestAnimationFrame(animationUpdate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        frameCount++;
        update(elapsed);
        draw(context);
    }
};
var start = function () {
    fpsInterval = 1000 / constants_1.FPS;
    then = Date.now();
    startTime = then;
    animationUpdate();
};
var gameObjects = [];
gameObjects.push(new flaffy_1.default({
    options: {
        position: {
            x: (constants_1.CANVAS_WIDTH / 2) - 60,
            y: constants_1.CANVAS_HEIGHT / 2
        },
        size: {
            width: 20,
            height: 20
        }
    },
    color: '#333'
}));
gameObjects.push(new pipehandler_1.default(75, -0.2));
start();
//# sourceMappingURL=main.js.map