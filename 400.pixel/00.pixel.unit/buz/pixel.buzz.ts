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

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/400.pixel' })
    var shade = bit.dskBit.dat;

    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/400.pixel', dat: shade })

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



var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { PixelModel } from "../pixel.model";
import PixelBit from "../fce/pixel.bit";
import State from "../../99.core/state";
