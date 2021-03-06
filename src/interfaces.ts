import KeyboardHandler from "./keyboard-handler";
import Game from "./game";

export interface Point {
    x: number,
    y: number
}

export interface Size {
    width: number,
    height: number
}

export interface UpdateArgs {
    deltatime: number,
    framecount: number
}

export interface DrawArgs {
    engine: Engine
}

export interface Texture {}

export interface CanvasTexture extends Texture {
    element: HTMLImageElement
}

export interface Engine {
    drawRect(x: number, y: number, width: number, height: number, color: string): void,
    preDraw(): void,
    createTexture(path: string): Texture,
    drawTexture(texture: Texture, x: number, y: number, width: number, height: number): void
}