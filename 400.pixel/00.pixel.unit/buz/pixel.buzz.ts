import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActPxl from "../../00.pixel.unit/pixel.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;

export const initPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActPxl], dat: bal.dat, src: bal.src })

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-pixel" } });

  return cpy;
};

export const updatePixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {

  const { exec } = require('child_process');

  exec('tsc -b 400.pixel', async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }

    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "400.pixel" });

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/400.pixel.js' })
    var shade = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/400.pixel.js', dat: shade })

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ pxlBit: { idx: "update-pixel" } });
    }, 3);

  });

  return cpy;
};


export const openPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {

  const { exec } = require('child_process');

  exec('npx quasar dev -m electron', async (err, stdout, stderr) => {

    if (bal.slv != null) bal.slv({ pxlBit: { idx: "open-pixel", dat: {} } });

  })

  return cpy;
};


var colorRead = function (png, x, y) {
  var data = [];
  var idx = (png.width * y + x) << 2;
  data[0] = png.data[idx];    //R
  data[1] = png.data[idx + 1];  //G
  data[2] = png.data[idx + 2];  //B
  data[3] = png.data[idx + 3]; //ALPHA
  return data;
}


var update = function () {
  var data = [];

  return data;
}


export const processPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {

  var convert = require('color-convert');

  const data = bal.dat;

  var source = data;
  var width = source.width;
  var height = source.height;
  var pixels = 0;
  var colors = {};
  var colorList = [];
  var pixelList = []

  var count;

  for (var y = 0; y < height; y++) {

    count = y;

    for (var x = 0; x < width; x++) {

      var now = colorRead(source, x, y);
      pixels += 1;
      var id = convert.rgb.hex(now[0], now[1], now[2]);

      var marling = { x, y, hex: id, r: now[0], g: now[1], b: now[2] }

      pixelList.push(marling)

      if (colors[id] != null) {
        colors[id].push([x, y, now[3]]);
      }

      colors[id] = [];
      colorList.push(now);
    }
  }

  pixelList


  if (bal.slv != null) bal.slv({ pixBit: { idx: "process-pixel", lst: pixelList, dat: colors } });

  return cpy;
};


export const colorPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  var lst = bal.lst;
  var dex = bal.lst.length - 1;

  var fin = [];

  console.log('color pixel')

  var next = async () => {

    if (dex <= 0) {


      console.log('color complete')

      fin
      debugger


      bal.slv({ pixBit: { idx: "color-pixel", lst: fin } });
      return
    }

    var itm = lst[dex]

    if ( dex % 10000 == 3) console.log('processing itm ' + JSON.stringify(itm) )

    dex -= 1;

    if ( dex % 10000 == 3) console.log('processing now ' + dex )


    var bit = await window['electronAPI'].readColor('#' + itm.hex)


    var nowBit = JSON.parse(bit)

    var nowDat = nowBit.clrBit.dat;

    var marling = { x:itm.x, y:itm.y, hex: nowDat.hex, r: nowDat.r, g: nowDat.g, b: nowDat.b }
    //console.log( marling )


    if ( dex % 10000 == 3) console.log('processing marling ' + JSON.stringify(marling) )

    fin.push( marling)
    next()

  }

  next()

  return cpy;
};




var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { PixelModel } from "../pixel.model";
import PixelBit from "../fce/pixel.bit";
import State from "../../99.core/state";
