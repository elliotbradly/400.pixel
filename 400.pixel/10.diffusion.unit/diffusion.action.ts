import { Action } from "../99.core/interface/action.interface";
import  DiffusionBit  from "./fce/diffusion.bit";

// Diffusion actions

export const INIT_DIFFUSION = "[Diffusion action] Init Diffusion";
export class InitDiffusion implements Action {
 readonly type = INIT_DIFFUSION;
 constructor(public bale: DiffusionBit) {}
}

export const UPDATE_DIFFUSION = "[Diffusion action] Update Diffusion";
export class UpdateDiffusion implements Action {
 readonly type = UPDATE_DIFFUSION;
 constructor(public bale: DiffusionBit) {}
}

export type Actions = | InitDiffusion | UpdateDiffusion ;
