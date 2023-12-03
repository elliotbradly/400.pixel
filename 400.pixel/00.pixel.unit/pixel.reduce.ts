import * as clone from "clone-deep";
import * as Act from "./pixel.action";
import { PixelModel } from "./pixel.model";
import * as Buzz from "./pixel.buzzer";
import State from "../99.core/state";

export function reducer(model: PixelModel = new PixelModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PIXEL:
 return Buzz.updatePixel(clone(model), act.bale, state);

 case Act.INIT_PIXEL:
 return Buzz.initPixel(clone(model), act.bale, state);

case Act.OPEN_PIXEL:
 return Buzz.openPixel(clone(model), act.bale, state);
 
case Act.PROCESS_PIXEL:
 return Buzz.processPixel(clone(model), act.bale, state);
 
case Act.COLOR_PIXEL:
 return Buzz.colorPixel(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
