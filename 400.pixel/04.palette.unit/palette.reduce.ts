import * as clone from "clone-deep";
import * as Act from "./palette.action";
import { PaletteModel } from "./palette.model";
import * as Buzz from "./palette.buzzer";
import State from "../99.core/state";

export function reducer(model: PaletteModel = new PaletteModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PALETTE:
 return Buzz.updatePalette(clone(model), act.bale, state);

 case Act.INIT_PALETTE:
 return Buzz.initPalette(clone(model), act.bale, state);

case Act.READ_PALETTE:
 return Buzz.readPalette(clone(model), act.bale, state);
 
case Act.REMOVE_PALETTE:
 return Buzz.removePalette(clone(model), act.bale, state);
 
case Act.DELETE_PALETTE:
 return Buzz.deletePalette(clone(model), act.bale, state);
 
case Act.CREATE_PALETTE:
 return Buzz.createPalette(clone(model), act.bale, state);
 
case Act.WRITE_PALETTE:
 return Buzz.writePalette(clone(model), act.bale, state);
 
case Act.LIST_PALETTE:
 return Buzz.listPalette(clone(model), act.bale, state);
 
case Act.BUILD_PALETTE:
 return Buzz.buildPalette(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
