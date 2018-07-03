import GameObject from "../gameobjects/game-object";

export interface CollidableInterface {
    collisionCheck(): void
    didCollide(gameObject: Collidable)
}

export class Collidable extends GameObject implements CollidableInterface {

    collisionCheck(): void {
        throw new Error("Method not implemented.");
    }    didCollide(gameObject: GameObject) {
        throw new Error("Method not implemented.");
    }
}