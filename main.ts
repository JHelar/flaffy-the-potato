import { CANVAS_WIDTH, CANVAS_HEIGHT } from './src/constants';
import Game from './src/game';

declare global {
    interface Window { Game: Game; GameObjects: GameObject[] }
}

/**
 * GameObjects
 */
import Player from './src/gameobjects/flaffy';
import PipeHandler from './src/gameobjects/pipehandler';
import GameObject from './src/gameobjects/game-object';

const gameObjects: GameObject[] = [];
gameObjects.push()
gameObjects.push();

const game = new Game('game', '2d');
game.start();

window.GameObjects = Game.GameObjects;
window.Game = game;

const flaffy = new Player({
    options: {
        position: {
            x: (CANVAS_WIDTH / 2) - 60,
            y: CANVAS_HEIGHT / 2
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

const pipehandler = new PipeHandler(75, -0.2, game.createTexture('/pipe.png'));

Game.addGameObject(pipehandler);
Game.addGameObject(flaffy);