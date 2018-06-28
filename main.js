"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var keyboard_handler_1 = require("./keyboard-handler");
/**
 * GameObjects
 */
var player_1 = require("./player");
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
var draw = function (context) {
    context.fillStyle = '#ececec';
    context.fillRect(0, 0, 640, 480);
    player.draw(context);
};
var update = function (elapsed) {
    player.update(elapsed, handler);
};
window.addEventListener('keydown', handler.keyDown.bind(handler));
window.addEventListener('keyup', handler.keyUp.bind(handler));
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
var player = new player_1.default({
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
});
start();
//# sourceMappingURL=main.js.map