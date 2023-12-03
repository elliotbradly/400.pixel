import { Action } from "../99.core/interface/action.interface";
import  PixelBit  from "./fce/pixel.bit";

// Pixel actions

export const INIT_PIXEL = "[Pixel action] Init Pixel";
export class InitPixel implements Action {
 readonly type = INIT_PIXEL;
 constructor(public bale: PixelBit) {}
}

export const UPDATE_PIXEL = "[Pixel action] Update Pixel";
export class UpdatePixel implements Action {
 readonly type = UPDATE_PIXEL;
 constructor(public bale: PixelBit) {}
}

export const OPEN_PIXEL = "[Open action] Open Pixel";
 export class OpenPixel implements Action {
 readonly type = OPEN_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const PROCESS_PIXEL = "[Process action] Process Pixel";
 export class ProcessPixel implements Action {
 readonly type = PROCESS_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export const COLOR_PIXEL = "[Color action] Color Pixel";
 export class ColorPixel implements Action {
 readonly type = COLOR_PIXEL;
 constructor(public bale: PixelBit) {}
 }
 
export type Actions = | InitPixel | UpdatePixel 
| OpenPixel
| ProcessPixel
| ColorPixel