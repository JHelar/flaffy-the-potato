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
var game = new game_1.default('game', '2d');
game.start();
window.GameObjects = game_1.default.GameObjects;
window.Game = game;
var flaffy = new flaffy_1.default({
    options: {
        position: {
            x: (constants_1.CANVAS_WIDTH / 2) - 60,
            y: constants_1.CANVAS_HEIGHT / 2
        },
        size: {
            width: 30,
            height: 35
        }
    },
    color: '#333333',
    texture: game.createTexture('/flaffy.png')
});
flaffy.guid = 'PLAYER';
var pipehandler = new pipehandler_1.default(75, -0.2, game.createTexture('/pipe.png'));
game_1.default.addGameObject(pipehandler);
game_1.default.addGameObject(flaffy);
//# sourceMappingURL=main.js.map