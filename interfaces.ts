import KeyboardHandler from "./keyboard-handler";

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
    framecount: number,
    keyboard: KeyboardHandler
}

export interface DrawArgs {
    context: CanvasRenderingContext2D
}