import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";
import { fstat } from "fs";

import * as ActMnu from "../menu.action";

import * as ActPxl from "../../00.pixel.unit/pixel.action";
import * as ActPal from "../../04.palette.unit/palette.action";
import * as ActSwc from "../../03.swatch.unit/swatch.action";

import * as ActDif from "../../10.diffusion.unit/diffusion.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

import * as ActDsk from "../../act/disk.action"

import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";
import * as ActPut from "../../84.input.unit/input.action";


var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 6, ySpan: 12 })
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 8, y: 0, xSpan: 2, ySpan: 12 })
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "PIXEL MENU V0" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  //ActPxl.OPEN_PIXEL,
  //ActPxl.UPDATE_PIXEL,
  //ActPal.WRITE_PALETTE

  lst = [ActDif.UPDATE_DIFFUSION, ActPxl.MP4_PIXEL, ActPxl.FRAME_PIXEL, ActPxl.BATCH_PIXEL, ActPxl.SORT_PIXEL, ActPal.BUILD_PALETTE, ActSwc.CONVERT_SWATCH], ActPxl.PALETTE_PIXEL

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {


    case ActDif.UPDATE_DIFFUSION:
      bit = await ste.hunt(ActDif.UPDATE_DIFFUSION, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'update diffusion....' })
      break;


      case ActSwc.CONVERT_SWATCH:
      bit = await ste.hunt( ActSwc.CONVERT_SWATCH, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'convert swatch....' })
      break;



    case ActPxl.PALETTE_PIXEL:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './img' })
      lst = bit.dskBit.lst;


      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      idx = './img/' + bit.chcBit.src;

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette' })
      lst = bit.dskBit.lst;


      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = './palette/' + bit.chcBit.src;



      bit = await ste.hunt(ActPxl.PALETTE_PIXEL, { idx, src })



      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'palette pixe complete....' })


      break;


    case ActPxl.READ_PIXEL:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './img' })
      lst = bit.dskBit.lst;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      idx = './img/' + bit.chcBit.src;

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'Begin process....' })

      bit = await ste.hunt(ActPxl.READ_PIXEL, { idx, src: './data/color-list/000.color.name.json' })

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'Ending process....' })


      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'reading pixel....' })
      break;


    //first i need you to create a folder in the root palette directory
    //label it the color you want
    //place the index from the data directory in the newly created folder
    //run the menu and make your selection


    case ActPal.CREATE_PALETTE:


      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette' })
      lst = bit.dskBit.lst;


      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = bit.chcBit.src;
      bit = await ste.hunt(ActPal.CREATE_PALETTE, { src: './palette/' + src })

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'create palette....' })
      break;



    case ActPxl.MP4_PIXEL:


      bit = await ste.hunt(ActPxl.MP4_PIXEL, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'create mp4....' })
      break;


    case ActPal.BUILD_PALETTE:

      var FS = require('fs-extra')
      FS.ensureDirSync( './palette-source')

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette-source' })
      lst = bit.dskBit.lst;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      var loc = './palette-source/' + bit.chcBit.src;
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'name palette....' })

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 })
      bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
      idx = bit.putBit.src;

      var name = idx;
      src = './data/color-list/002.color.name.json'

      bit = await ste.hunt(ActPal.BUILD_PALETTE, { idx: loc, src, dat: name })

      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'create palette....' })
      break;


    case ActPal.UPDATE_PALETTE:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette' })
      lst = bit.dskBit.lst;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })


      var name = idx;
      var colorDat = './data/color-list/000.color.name.json'

      src = bit.chcBit.src;

      bit = await ste.hunt(ActPal.UPDATE_PALETTE, { idx: './palette/' + src, src: colorDat })


      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'update palette....' })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: './palette/' + src })

      break;



    //creates a master collection of colors swatches
    case ActPxl.BATCH_PIXEL:

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './palette' })
      lst = bit.dskBit.lst;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = './palette/' + bit.chcBit.src;

      bit = await ste.bus(ActDsk.INDEX_DISK, { src: './frames' })
      lst = bit.dskBit.lst;

      lst.forEach((a, b) => {
        lst[b] = './frames/' + a
      })

      lst


      //bit = await ste.hunt(ActPxl.CHROMA_PIXEL, {})


      bit = await ste.hunt(ActPxl.BATCH_PIXEL, { src, lst })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'batch pixel....' })
      break;


    case ActPxl.FRAME_PIXEL:
      bit = await ste.hunt(ActPxl.FRAME_PIXEL, { src: './data/color-list/000.color.name.json' })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'batch pixel....' })
      break;


    case ActPxl.SORT_PIXEL:
      bit = await ste.hunt(ActPxl.SORT_PIXEL, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'sort pixel....' })
      break;


    //creates a master collection of colors swatches
    case ActPxl.BUILD_PIXEL:
      bit = await ste.hunt(ActPxl.BUILD_PIXEL, { src: './data/color-list/000.color.name.json' })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating pixel....' })
      break;

    case ActPxl.OPEN_PIXEL:
      bit = await ste.hunt(ActPxl.OPEN_PIXEL, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open pixel....' })
      break;


    case ActPxl.UPDATE_PIXEL:
      bit = await ste.hunt(ActPxl.UPDATE_PIXEL, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating pixel....' })
      break;

    case ActPal.WRITE_PALETTE:

      bit = await ste.hunt(ActPal.LIST_PALETTE, {})
      lst = bit.palBit.lst;

      bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
      bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

      src = bit.chcBit.src;

      bit = await ste.hunt(ActPal.WRITE_PALETTE, { src })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating pixel....' })
      break;



    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.hunt(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });



