import Model from "./99.core/interface/model.interface";

import PixelUnit from "./00.pixel.unit/pixel.unit";
import ColorUnit from "./01.color.unit/color.unit";
import LightUnit from "./02.light.unit/light.unit";
import SwatchUnit from "./03.swatch.unit/swatch.unit";
import PaletteUnit from "./04.palette.unit/palette.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Pixel from "./00.pixel.unit/fce/pixel.interface";
import { PixelModel } from "./00.pixel.unit/pixel.model";
import Color from "./01.color.unit/fce/color.interface";
import { ColorModel } from "./01.color.unit/color.model";
import Light from "./02.light.unit/fce/light.interface";
import { LightModel } from "./02.light.unit/light.model";
import Swatch from "./03.swatch.unit/fce/swatch.interface";
import { SwatchModel } from "./03.swatch.unit/swatch.model";
import Palette from "./04.palette.unit/fce/palette.interface";
import { PaletteModel } from "./04.palette.unit/palette.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [PixelUnit,ColorUnit,LightUnit,SwatchUnit,PaletteUnit,CollectUnit,BusUnit];

import * as reduceFromPixel from "./00.pixel.unit/pixel.reduce";
import * as reduceFromColor from "./01.color.unit/color.reduce";
import * as reduceFromLight from "./02.light.unit/light.reduce";
import * as reduceFromSwatch from "./03.swatch.unit/swatch.reduce";
import * as reduceFromPalette from "./04.palette.unit/palette.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 pixel : reduceFromPixel.reducer, 
color : reduceFromColor.reducer, 
light : reduceFromLight.reducer, 
swatch : reduceFromSwatch.reducer, 
palette : reduceFromPalette.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 pixel : Pixel = new PixelModel();
color : Color = new ColorModel();
light : Light = new LightModel();
swatch : Swatch = new SwatchModel();
palette : Palette = new PaletteModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}
