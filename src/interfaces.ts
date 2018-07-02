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
    context: CanvasRenderingContext2D
}