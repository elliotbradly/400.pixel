import * as clone from "clone-deep";
import * as Act from "./pixel.action";
import { PixelModel } from "./pixel.model";
import * as Buzz from "./pixel.buzzer";
import State from "../99.core/state";

export function reducer(model: PixelModel = new PixelModel(), act: Act.Actions, state?: State) {
  switch (act.type) {

    case Act.UPDATE_PIXEL:
      return Buzz.updatePixel(clone(model), act.bale, state);

    case Act.INIT_PIXEL:
      return Buzz.initPixel(clone(model), act.bale, state);

    case Act.SORT_PIXEL:
      return Buzz.sortPixel(clone(model), act.bale, state);

    case Act.OPEN_PIXEL:
      return Buzz.openPixel(clone(model), act.bale, state);

    case Act.PROCESS_PIXEL:
      return Buzz.processPixel(clone(model), act.bale, state);

    case Act.COLOR_PIXEL:
      return Buzz.colorPixel(clone(model), act.bale, state);

    case Act.BUILD_PIXEL:
      return Buzz.buildPixel(clone(model), act.bale, state);

    case Act.WRITE_PIXEL:
      return Buzz.writePixel(clone(model), act.bale, state);

    case Act.READ_PIXEL:
      return Buzz.readPixel(clone(model), act.bale, state);


    case Act.PALETTE_PIXEL:
      return Buzz.palettePixel(clone(model), act.bale, state);

    case Act.BATCH_PIXEL:
      return Buzz.batchPixel(clone(model), act.bale, state);

    case Act.FRAME_PIXEL:
      return Buzz.framePixel(clone(model), act.bale, state);

    case Act.CHROMA_PIXEL:
      return Buzz.chromaPixel(clone(model), act.bale, state);

      case Act.MP4_PIXEL:
      return Buzz.mp4Pixel(clone(model), act.bale, state);

    default:
      return model;
  }
}
