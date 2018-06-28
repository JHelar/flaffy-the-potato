export const KEYS = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
}

export default class KeyboardHandler {
    
    private _activeKeys : any;
    public get activeKeys() : any {
        return this._activeKeys;
    }
    public set activeKeys(v : any) {
        this._activeKeys = v;
    }
    

    constructor(){
        this._activeKeys = {};
    }

    isKeyActive(keyCode: number) : boolean {
        return this._activeKeys[keyCode];
    }

    keyDown(event: KeyboardEvent){
        this._activeKeys[event.which] = true;
    }

    keyUp(event: KeyboardEvent) {
        this._activeKeys[event.which] = false;
    }
}