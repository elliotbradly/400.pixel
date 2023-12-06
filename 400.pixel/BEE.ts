import Model from "./99.core/interface/model.interface";

import PixelUnit from "./00.pixel.unit/pixel.unit";
import PaletteUnit from "./01.palette.unit/palette.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Pixel from "./00.pixel.unit/fce/pixel.interface";
import { PixelModel } from "./00.pixel.unit/pixel.model";
import Palette from "./01.palette.unit/fce/palette.interface";
import { PaletteModel } from "./01.palette.unit/palette.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [PixelUnit,PaletteUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromPixel from "./00.pixel.unit/pixel.reduce";
import * as reduceFromPalette from "./01.palette.unit/palette.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 pixel : reduceFromPixel.reducer, 
palette : reduceFromPalette.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 pixel : Pixel = new PixelModel();
palette : Palette = new PaletteModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
