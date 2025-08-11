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

export const BUILD_PIXEL = "[Build action] Build Pixel";
 export class BuildPixel implements Action {
 readonly type = BUILD_PIXEL;
 constructor(public bale: PixelBit) {}
 }

export const WRITE_PIXEL = "[Write action] Write Pixel";
 export class WritePixel implements Action {
 readonly type = WRITE_PIXEL;
 constructor(public bale: PixelBit) {}
 }

 export const READ_PIXEL = "[Read action] Read Pixel";
 export class ReadPixel implements Action {
 readonly type = READ_PIXEL;
 constructor(public bale: PixelBit) {}
 }

 export const PALETTE_PIXEL = "[Read action] Palette Pixel";
 export class PalettePixel implements Action {
 readonly type = PALETTE_PIXEL;
 constructor(public bale: PixelBit) {}
 }



export const BATCH_PIXEL = "[Batch action] Batch Pixel";
 export class BatchPixel implements Action {
 readonly type = BATCH_PIXEL;
 constructor(public bale: PixelBit) {}
 }

export const FRAME_PIXEL = "[Frame action] Frame Pixel";
 export class FramePixel implements Action {
 readonly type = FRAME_PIXEL;
 constructor(public bale: PixelBit) {}
 }

export const CHROMA_PIXEL = "[Chroma action] Chroma Pixel";
 export class ChromaPixel implements Action {
 readonly type = CHROMA_PIXEL;
 constructor(public bale: PixelBit) {}
 }

 export const SORT_PIXEL = "[Chroma action] Sort Pixel";
 export class SortPixel implements Action {
 readonly type = SORT_PIXEL;
 constructor(public bale: PixelBit) {}
 }

 export const MP4_PIXEL = "[Chroma action] MP4 Pixel";
 export class Mp4Pixel implements Action {
 readonly type = MP4_PIXEL;
 constructor(public bale: PixelBit) {}
 }

export type Actions = | InitPixel | UpdatePixel
| OpenPixel
| ProcessPixel
| ColorPixel
| BuildPixel
| WritePixel
| ReadPixel
| PalettePixel
| BatchPixel
| FramePixel
| ChromaPixel
| SortPixel
| Mp4Pixel
