import Model from "./99.core/interface/model.interface";

import PixelUnit from "./00.pixel.unit/pixel.unit";
import ColorUnit from "./01.color.unit/color.unit";
import LightUnit from "./02.light.unit/light.unit";
import SwatchUnit from "./03.swatch.unit/swatch.unit";
import PaletteUnit from "./04.palette.unit/palette.unit";
import DiffusionUnit from "./10.diffusion.unit/diffusion.unit";
import TerminalUnit from "./80.terminal.unit/terminal.unit";
import GridUnit from "./81.grid.unit/grid.unit";
import CanvasUnit from "./82.canvas.unit/canvas.unit";
import ConsoleUnit from "./83.console.unit/console.unit";
import InputUnit from "./84.input.unit/input.unit";
import ChoiceUnit from "./85.choice.unit/choice.unit";
import ContainerUnit from "./86.container.unit/container.unit";
import GraphicUnit from "./87.graphic.unit/graphic.unit";
import HexagonUnit from "./88.hexagon.unit/hexagon.unit";
import SpriteUnit from "./89.sprite.unit/sprite.unit";
import TextUnit from "./90.text.unit/text.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
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
import Diffusion from "./10.diffusion.unit/fce/diffusion.interface";
import { DiffusionModel } from "./10.diffusion.unit/diffusion.model";
import Terminal from "./80.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./80.terminal.unit/terminal.model";
import Grid from "./81.grid.unit/fce/grid.interface";
import { GridModel } from "./81.grid.unit/grid.model";
import Canvas from "./82.canvas.unit/fce/canvas.interface";
import { CanvasModel } from "./82.canvas.unit/canvas.model";
import Console from "./83.console.unit/fce/console.interface";
import { ConsoleModel } from "./83.console.unit/console.model";
import Input from "./84.input.unit/fce/input.interface";
import { InputModel } from "./84.input.unit/input.model";
import Choice from "./85.choice.unit/fce/choice.interface";
import { ChoiceModel } from "./85.choice.unit/choice.model";
import Container from "./86.container.unit/fce/container.interface";
import { ContainerModel } from "./86.container.unit/container.model";
import Graphic from "./87.graphic.unit/fce/graphic.interface";
import { GraphicModel } from "./87.graphic.unit/graphic.model";
import Hexagon from "./88.hexagon.unit/fce/hexagon.interface";
import { HexagonModel } from "./88.hexagon.unit/hexagon.model";
import Sprite from "./89.sprite.unit/fce/sprite.interface";
import { SpriteModel } from "./89.sprite.unit/sprite.model";
import Text from "./90.text.unit/fce/text.interface";
import { TextModel } from "./90.text.unit/text.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [PixelUnit,ColorUnit,LightUnit,SwatchUnit,PaletteUnit,DiffusionUnit,TerminalUnit,GridUnit,CanvasUnit,ConsoleUnit,InputUnit,ChoiceUnit,ContainerUnit,GraphicUnit,HexagonUnit,SpriteUnit,TextUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromPixel from "./00.pixel.unit/pixel.reduce";
import * as reduceFromColor from "./01.color.unit/color.reduce";
import * as reduceFromLight from "./02.light.unit/light.reduce";
import * as reduceFromSwatch from "./03.swatch.unit/swatch.reduce";
import * as reduceFromPalette from "./04.palette.unit/palette.reduce";
import * as reduceFromDiffusion from "./10.diffusion.unit/diffusion.reduce";
import * as reduceFromTerminal from "./80.terminal.unit/terminal.reduce";
import * as reduceFromGrid from "./81.grid.unit/grid.reduce";
import * as reduceFromCanvas from "./82.canvas.unit/canvas.reduce";
import * as reduceFromConsole from "./83.console.unit/console.reduce";
import * as reduceFromInput from "./84.input.unit/input.reduce";
import * as reduceFromChoice from "./85.choice.unit/choice.reduce";
import * as reduceFromContainer from "./86.container.unit/container.reduce";
import * as reduceFromGraphic from "./87.graphic.unit/graphic.reduce";
import * as reduceFromHexagon from "./88.hexagon.unit/hexagon.reduce";
import * as reduceFromSprite from "./89.sprite.unit/sprite.reduce";
import * as reduceFromText from "./90.text.unit/text.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 pixel : reduceFromPixel.reducer, 
color : reduceFromColor.reducer, 
light : reduceFromLight.reducer, 
swatch : reduceFromSwatch.reducer, 
palette : reduceFromPalette.reducer, 
diffusion : reduceFromDiffusion.reducer, 
terminal : reduceFromTerminal.reducer, 
grid : reduceFromGrid.reducer, 
canvas : reduceFromCanvas.reducer, 
console : reduceFromConsole.reducer, 
input : reduceFromInput.reducer, 
choice : reduceFromChoice.reducer, 
container : reduceFromContainer.reducer, 
graphic : reduceFromGraphic.reducer, 
hexagon : reduceFromHexagon.reducer, 
sprite : reduceFromSprite.reducer, 
text : reduceFromText.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 pixel : Pixel = new PixelModel();
color : Color = new ColorModel();
light : Light = new LightModel();
swatch : Swatch = new SwatchModel();
palette : Palette = new PaletteModel();
diffusion : Diffusion = new DiffusionModel();
terminal : Terminal = new TerminalModel();
grid : Grid = new GridModel();
canvas : Canvas = new CanvasModel();
console : Console = new ConsoleModel();
input : Input = new InputModel();
choice : Choice = new ChoiceModel();
container : Container = new ContainerModel();
graphic : Graphic = new GraphicModel();
hexagon : Hexagon = new HexagonModel();
sprite : Sprite = new SpriteModel();
text : Text = new TextModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
