import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActPxl from "../../00.pixel.unit/pixel.action";
import * as ActPal from "../../01.palette.unit/palette.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

import * as ActClr from "../../act/color.action"
import * as ActLgt from "../../act/light.action"

var bit, val, idx, dex, lst, dat, src;

export const initPalette = (cpy: PaletteModel, bal: PaletteBit, ste: State) => {
  debugger
  return cpy;
};

export const updatePalette = (cpy: PaletteModel, bal: PaletteBit, ste: State) => {
  return cpy;
};


export const readPalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {


  if (bal.idx == null) bal.idx = 'can00';
  bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPal.CREATE_PALETTE })

  //if (slv != null) slv({ canBit: { idx: "read-container", dat: bit.clcBit.dat } });


  return cpy;
};


export const writePalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {

  bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPal.CREATE_PALETTE })
  ste.hunt(ActPal.UPDATE_PALETTE, { idx: bal.idx })

  if (bal.slv != null) bal.slv({ canBit: { idx: "write-container", dat: bit.clcBit.dat } });

  return cpy;
};

export const removePalette = (cpy: PaletteModel, bal: PaletteBit, ste: State) => {
  debugger
  return cpy;
};
export const deletePalette = (cpy: PaletteModel, bal: PaletteBit, ste: State) => {
  debugger
  return cpy;
};
export const createPalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {

  var dir = './palette/' + bal.src

  bit = await ste.bus(ActDsk.INDEX_DISK, { src: dir })
  dat = bit.dskBit
  lst =dat.lst
  debugger

  if (bal.slv != null) bal.slv({ canBit: { idx: "create-palette", dat } });

  return cpy;
};


export const listPalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {

  bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette' })
  lst = bit.dskBit.lst;

  lst = lst.filter(a => a != ".git")
  lst = lst.filter(a => a != "README.md")
  lst = lst.filter(a => a != ".gitattributes")

  setTimeout(() => {
    if (bal.slv != null) bal.slv({ palBit: { idx: "list-palette", lst } });
  }, 3);

  return cpy;


};
import { PaletteModel } from "../palette.model";
import PaletteBit from "../fce/palette.bit";
import State from "../../99.core/state";
