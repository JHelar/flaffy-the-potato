import GameObject from "../gameobjects/game-object";
import guid from '../utils/guid';

export interface CollidableInterface {
    collisionCheck(): void
    didCollide(gameObject: Collidable)
}

export class Collidable extends GameObject implements CollidableInterface {
    public guid: string = guid()

    collisionCheck(): void {
        throw new Error("Method not implemented.");
    }    didCollide(gameObject: GameObject) {
        throw new Error("Method not implemented.");
    }
}