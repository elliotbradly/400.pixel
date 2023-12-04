import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance, nextTick } from 'vue'

import * as ActVsg from '../110.shade/01.visage.unit/visage.action'
import * as ActFce from '../110.shade/02.surface.unit/surface.action'

import * as ActCan from '../110.shade/03.container.unit/container.action'
import * as ActTxt from '../110.shade/05.text.unit/text.action'
import * as ActGph from '../110.shade/04.graphic.unit/graphic.action'
import * as ActSpr from '../110.shade/06.sprite.unit/sprite.action'
import * as ActHex from '../110.shade/07.hexagon.unit/hexagon.action'
import * as ActFcg from '../110.shade/08.focigon.unit/focigon.action'

import * as ActPxl from '../../400.pixel/00.pixel.unit/pixel.action'

export type HelloWorld = string | number

export const render = async (value: HelloWorld) => {

  //var bit = await window['electronAPI'].listFocus('avas')
  //var toot = JSON.parse(bit)
  //var list = toot.focBit.lst

  // list.forEach(async (a, b) => {
  //   var focus = a;
  //  console.log("po " + a.idx)
  //  bit = await SHADE['hunt'](ActFcg.WRITE_FOCIGON, { idx: focus.idx, dat: { src: 'gph01', clr: 0x0FF000, sze: 111, fce: focus.face, bit: focus } })
  // })

}


export const mount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  var bit = await SHADE['hunt'](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { width: 960, height: 960 } });
  instance?.proxy?.$forceUpdate();

  return value
}

export const update = async (value: HelloWorld) => {

  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')
  const PIXEL = inject('PIXEL')

  var lst = []

  var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })
  bit = await SHADE['hunt'](ActVsg.MOUNT_VISAGE, { idx: "vsg00", src: "indexCanvas", dat: { width: 960, height: 960 } })

  bit = await SHADE['hunt'](ActVsg.READ_VISAGE, { idx: "vsg00" })

  bit = await SHADE['hunt'](ActCan.WRITE_CONTAINER, { idx: "can00", src: 'vsg00' })
  var container = bit.canBit.dat.bit

  bit = await SHADE['hunt'](ActCan.SURFACE_CONTAINER, { idx: 'fce-can-00', src: "vsg00" });

  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "fce-can-00", dat: { bit: container } })

  //bit = await SHADE['hunt']( ActTxt.WRITE_TEXT, { idx:'txt00', dat: {  txt: "text 00" }  })
  //bit = await SHADE['hunt']( ActCan.ADD_CONTAINER, { idx: "can00",  dat:{bit:bit.txtBit.dat.bit }})

  //bit = await SHADE['hunt']( ActTxt.WRITE_TEXT, { idx:'txt01', dat: {  txt: "text 01", y:15 }  })
  //bit = await SHADE['hunt']( ActCan.ADD_CONTAINER, { idx: "can00",  dat:{bit:bit.txtBit.dat.bit }})

  //bit = await SHADE['hunt']( ActTxt.WRITE_TEXT, { idx:'txt02', dat: {  txt: "text 02", y:30 }  })
  //bit = await SHADE['hunt']( ActCan.ADD_CONTAINER, { idx: "can00",  dat:{bit:bit.txtBit.dat.bit }})

  //bit = await SHADE['hunt']( ActTxt.WRITE_TEXT, { idx:'txt03', dat: {  txt: "text 03", y:45 }  })
  //bit = await SHADE['hunt']( ActCan.ADD_CONTAINER, { idx: "can00",  dat:{bit:bit.txtBit.dat.bit }})

  bit = await SHADE['hunt'](ActSpr.WRITE_SPRITE, { idx: 'spr00', dat: { src: './img/000.png', x: 0, y: 0 } })
  bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.sprBit.dat.bit } })


  setTimeout(async () => {

    bit = await SHADE['hunt'](ActFce.EXTRACT_SURFACE, { idx: "vsg00" })
    var dat = bit.fceBit.dat;

    bit = await PIXEL['hunt'](ActPxl.PROCESS_PIXEL, { dat })
    lst = bit.pixBit.lst

    bit = await PIXEL['hunt'](ActPxl.COLOR_PIXEL, { lst })
    lst = bit.pixBit.lst






    bit = await window['electronAPI'].saveImage( lst )

    console.log("show me the bit " + JSON.stringify(bit))

    //see if you can recreate the image from just pixels

    //dat = bit.pixBit.dat;
    //lst = bit.pixBit.lst;


    //for (var key in dat) {
    //  key

    //  var item = dat[key]

    //  debugger


    //  var bit = await window['electronAPI'].readColor('#' + key)
    //  var puff = JSON.parse(bit)
    //  var name = puff.clrBit.src

    //  var options = []

    //  if (family[name] == null){

    //    family[name] = []
    //    family[name] = family[name].concat(item);
    //    wealth.push(name)
    //    console.log('color name: ' + name)
    //  }else{
    //    family[name] = family[name].concat(item);
    //  }
    //  }



  }, 333)







  //bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph00', dat: { h: 100, w: 40, x: 40, y: 40 } })
  //bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })

  //bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph01', dat: { h: 100, w: 40, x: 40, y: 40 } })
  //bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })

  //bit = await SHADE['hunt'](ActGph.WRITE_GRAPHIC, { idx: 'gph02', dat: { h: 100, w: 40, x: 40, y: 40 } })
  //bit = await SHADE['hunt'](ActCan.ADD_CONTAINER, { idx: "can00", dat: { bit: bit.gphBit.dat.bit } })

  //var bit = await window['electronAPI'].readHexmap('map00')
  //var puff = JSON.parse(bit)

  //var map = puff.mapBit.dat.grid
  //bit = await SHADE['hunt'](ActHex.WRITE_HEXAGON, { idx: 'hex00', dat: { src: 'gph00', frm: 'hexmap', sze: 111, bit: map } })

  return value
}

export const unmount = async (value: HelloWorld) => {
  console.log('sampleFunc:: ', value)

  const instance = getCurrentInstance();
  const SHADE = inject('SHADE')

  console.log("unmounted..")
  var bit = await SHADE['hunt'](ActVsg.REMOVE_VISAGE, { idx: "vsg00" })

  return value
}

export type Shade<Type> = {
  hunt: Function;
} & Type

