import * as clone from "clone-deep";
import * as Act from "./diffusion.action";
import { DiffusionModel } from "./diffusion.model";
import * as Buzz from "./diffusion.buzzer";
import State from "../99.core/state";

export function reducer(model: DiffusionModel = new DiffusionModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_DIFFUSION:
 return Buzz.updateDiffusion(clone(model), act.bale, state);

 case Act.INIT_DIFFUSION:
 return Buzz.initDiffusion(clone(model), act.bale, state);

 default:
 return model;
 }
}
