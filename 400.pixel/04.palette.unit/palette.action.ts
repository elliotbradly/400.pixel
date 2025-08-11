import { Action } from "../99.core/interface/action.interface";
import  PaletteBit  from "./fce/palette.bit";

// Palette actions

export const INIT_PALETTE = "[Palette action] Init Palette";
export class InitPalette implements Action {
 readonly type = INIT_PALETTE;
 constructor(public bale: PaletteBit) {}
}

export const UPDATE_PALETTE = "[Palette action] Update Palette";
export class UpdatePalette implements Action {
 readonly type = UPDATE_PALETTE;
 constructor(public bale: PaletteBit) {}
}

export const READ_PALETTE = "[Read action] Read Palette";
 export class ReadPalette implements Action {
 readonly type = READ_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const REMOVE_PALETTE = "[Remove action] Remove Palette";
 export class RemovePalette implements Action {
 readonly type = REMOVE_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const DELETE_PALETTE = "[Delete action] Delete Palette";
 export class DeletePalette implements Action {
 readonly type = DELETE_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const CREATE_PALETTE = "[Create action] Create Palette";
 export class CreatePalette implements Action {
 readonly type = CREATE_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const WRITE_PALETTE = "[Write action] Write Palette";
 export class WritePalette implements Action {
 readonly type = WRITE_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const LIST_PALETTE = "[List action] List Palette";
 export class ListPalette implements Action {
 readonly type = LIST_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export const BUILD_PALETTE = "[Build action] Build Palette";
 export class BuildPalette implements Action {
 readonly type = BUILD_PALETTE;
 constructor(public bale: PaletteBit) {}
 }
 
export type Actions = | InitPalette | UpdatePalette 
| ReadPalette
| RemovePalette
| DeletePalette
| CreatePalette
| WritePalette
| ListPalette
| BuildPalette