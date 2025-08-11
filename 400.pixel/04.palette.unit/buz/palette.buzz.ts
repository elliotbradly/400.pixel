import { PaletteModel } from "../palette.model";
import PaletteBit from "../fce/palette.bit";
import State from "../../99.core/state";


import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActPxl from "../../00.pixel.unit/pixel.action";
import * as ActPal from "../../04.palette.unit/palette.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

import * as ActClr from "../../act/color.action"
import * as ActLgt from "../../act/light.action"

import * as S from 'string'

var bit, val, idx, dex, lst, dat, src;

export const initPalette = (cpy: PaletteModel, bal: PaletteBit, ste: State) => {
  debugger
  return cpy;
};

export const updatePalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {

  //going to need a color source
  bit = await ste.bus(ActDsk.INDEX_DISK, { src: bal.idx })
  var lstMain = bit.dskBit.lst;



  var dex = lstMain.length - 1;

  var output = []

  var next = async () => {

    if (dex < 0) {


      output
      idx = bal.idx + '/index.json'



      bit = await ste.bus(ActDsk.WRITE_DISK, { src: idx, dat: JSON.stringify(output) })
      bal.slv({ canBit: { idx: "update-palette", src: idx } });

      return
    }

    var itm = lstMain[dex]



    if (itm == null) {

      debugger


      output
      idx = bal.src + '/index.json'
      bit = await ste.bus(ActDsk.WRITE_DISK, { src: idx, dat: JSON.stringify(output) })
      bal.slv({ canBit: { idx: "update-palette", src: idx } });

      return

    }



    if (itm == 'index.json') {
      dex -= 1
      next()
      return
    }

    //bit = await ste.bus(ActDsk.COLOR_DISK, { src: bal.src + '/' + itm })
    //var clrDat = bit.dskBit.dat;

    itm


    var name = itm.split('.')[0]

    console.log( 'named : ' + name )







    bit = await ste.hunt(ActPxl.READ_PIXEL, { idx: name, src: bal.src, val: 1 })
    lst = []

    output.push(bit.pxlBit.dat)





    //this needs to be in a different format

    //"name": "prunus avium",
    //"value": "#dd4492",
    //"rgb": {
    //  "r": 221,
    //  "g": 68,
    //  "b": 146
    //},
    //"distance": 5.385164807134504

    //var data = { name: name, hex: '#' + clrDat.hex }

    //output.push((data))

    dex -= 1

    if ((dex + 1) % 3 == 0) {

      var msg = dex + '/' + lst.length;
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: msg })

    }


    await next()
  }



  await next()

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

  idx = bal.src + '/index.json'


  bit = await ste.bus(ActDsk.READ_DISK, { src: idx })

  lst = JSON.parse(bit.dskBit.dat)

  const result = [];

  for (let i = 0; i < lst.length; i++) {
    if ((i + 1) % 10 == 0) {
      result.push(lst[i]);
    }
  }

  //reduce size



  var output = []

  var dex = result.length - 1;



  var val = 0;

  var next = async () => {

    if (dex < 0) {
      output

      //var bit0 = await ste.hunt(ActPal.UPDATE_PALETTE, { lst: output })


      if (bal.slv != null) bal.slv({ palBit: { idx: "create-palette", dat } });
      return
    }

    var a = result[dex]


    var S = require('string')
    var nom = S(a.name).slugify().s


    //  var ha =  val.toString().padStart(2, '000')
    var ha = a.value.substring(1);

    src = bal.src + '/' + ha + '.' + nom + '.png'
    val += 1;

    bit = await ste.bus(ActDsk.SWATCH_DISK, { idx: a.value.substring(1), src })

    dex -= 1;

    if ((dex + 1) % 2 == 0) {

      var msg = dex + '/' + result.length;
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: msg })



    }


    next()
  }

  next()





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
export const buildPalette = async (cpy: PaletteModel, bal: PaletteBit, ste: State) => {

  bit = await ste.hunt(ActPxl.READ_PIXEL, { idx: bal.idx, src: bal.src })
  lst = []

  var dat = {}
  var datLst = []

  bit.pxlBit.lst.forEach((a, b) => {

    //if (b % 55 != 1) return



    idx = S(a.name).slugify().s
    if (dat[idx] != null) return
    dat[idx] = a
    datLst.push(dat[idx])

  })



  var srcItm = './palette/' + bal.dat + '/index.json';
  var datItm = datLst
  datItm.push({name: 'chroma key green', value: '#00FF00', rgb: {r: 0, g: 255, b: 0}, distance: 0}
  )

  var FS = require('fs-extra')

  FS.ensureFileSync( srcItm )

  FS.writeJsonSync( srcItm, datItm)

  //bit = await ste.bus(ActDsk.WRITE_DISK, { src: , dat: JSON.stringify() })



  datLst.forEach(async (a, b) => {

    var idx = S(a.name).slugify().s
    var dir = './palette/' + bal.dat + "/" + idx + ".png";

    var value = a.value

    //var nowClr = a.hex;

    //if (nowClr == null && a.idx != null) nowClr = a.idx;
    bit = await ste.bus(ActDsk.SWATCH_DISK, { idx: value, src: dir });

  })





  bal.slv({ palBit: { idx: "build-palette", lst: datLst } })


  return cpy;
};
