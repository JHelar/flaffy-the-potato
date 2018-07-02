import { Collidable } from "./collidable";
import Game from "../game";

export default class BoxCollider extends Collidable  {
    private _collisionCheck(collidable: Collidable): boolean {
        if(collidable.guid === this.guid) return false; 

        if(
            (this.position.x > collidable.position.x &&
            this.position.x < collidable.position.x + collidable.size.width) || 
            (this.position.x < collidable.position.x &&
            this.position.x + this.size.width > collidable.position.x)
        ) {
            if(
                (this.position.y > collidable.position.y &&
                this.position.y < collidable.position.y + collidable.size.height) || 
                (this.position.y < collidable.position.y &&
                this.position.y + this.size.height > collidable.position.y)
            ) {
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }
    
    collisionCheck() {
        const collisions = Game.Collidables.filter(this._collisionCheck.bind(this));
        collisions.forEach(c => c.didCollide(this));
    }
}