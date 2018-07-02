"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./src/constants");
var game_1 = require("./src/game");
/**
 * GameObjects
 */
var flaffy_1 = require("./src/gameobjects/flaffy");
var pipehandler_1 = require("./src/gameobjects/pipehandler");
var gameObjects = [];
gameObjects.push();
gameObjects.push();
window.Game = new game_1.default('game');
window.Game.start();
var flaffy = new flaffy_1.default({
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
});
var pipehandler = new pipehandler_1.default(75, -0.2);
game_1.default.addGameObject(pipehandler);
game_1.default.addGameObject(flaffy);
//# sourceMappingURL=main.js.map