import GameObject from "../gameobjects/game-object";

export interface CollidableInterface {
    collisionCheck(): void
    didCollide(gameObject: Collidable)
}

export class Collidable extends GameObject implements CollidableInterface {

    collisionCheck(): void {
        throw new Error("Method not implemented.");
<<<<<<< HEAD
    }
     
=======
    }    
>>>>>>> 0dd3d4e628ef585216565944b266e25f87849bce
    didCollide(gameObject: GameObject) {
        throw new Error("Method not implemented.");
    }
}