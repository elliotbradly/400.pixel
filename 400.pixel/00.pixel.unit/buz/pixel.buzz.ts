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

  //var cv = document.getElementById(bal.src);
  //var ctx = cv['getContext']('2d');

  const data = bal.dat;

  var source = data;
  var width = source.width;
  var height = source.height;
  var pixels = 2;
  var colors = {};
  var colorList = [];

  var count = 0;
  var pix = 0

  var filter = 13;



  //name = SLUG(fileSRC)

  //trace("do you have a name " + name)

  //var fileFix = SLUG(name) + '.txt';
  //pathMap = mapDAT + label + '/' + fileFix;
  //pathClr = colorDAT + label + '/' + fileFix;

  //trace("STARTING MAP " + fileSRC)

  //total = height

  var allTogetherNow = width * height;

  var pixelGo = Math.floor(allTogetherNow * .01)
  var pixelNo = Math.floor(allTogetherNow * .9)

  var dat;

  for (var y = 0; y < height; y++) {

    // if (y % pix != 0) continue

    count = y;

    for (var x = 0; x < width; x++) {

      //if (x % pix != 0) continue

      update()

      var now = colorRead(source, x, y);

      //    if (now[3] <= 4) continue //high alpha

      pixels += 1;

      //  var lightLimit = 3;

      //if ( pixels < pixelGo ) continue;
      //if ( pixels > pixelNo ) continue;
      //hides white
      //if ((now[0] >= 255 - lightLimit) && (now[1] >= 255 - lightLimit) && (now[2] >= 255 - lightLimit)) continue

      var id = convert.rgb.hex(now[0], now[1], now[2]);

      //trace("before " + id )

      //     var id = convert.rgb.hex(now[0], now[1], now[2]);

      if (colors[id] != null) {
        colors[id].push([x, y, now[3]]);
        continue
      }

      colors[id] = [];


      //var wiggleX = FATE.integer( {min:-13, max:13});
      //var wiggleY = FATE.integer( {min:-13, max:13});
      //colors[id].push([x + wiggleX, y + wiggleY, now[3] ])

      colorList.push(now);
    }
  }


  //backstrap belt

  //colorList.forEach((i, dex) => {
  //item = convert.hex.rgb(i);
  //item = JSON.stringify( '[' + i + ']' );
  //trace("Show me " + item )
  //colorList[dex] = item;
  //})

  colorList.sort(function (a, b) { return (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]) });
  colorList.sort(function (a, b) { return a[0] - b[0] });
  colorList.sort(function (a, b) { return (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]) });
  colorList.sort(function (a, b) { return a[1] - b[1] });
  colorList.sort(function (a, b) { return (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]) });
  colorList.sort(function (a, b) { return a[2] - b[2] });
  colorList.sort(function (a, b) { return (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]) });

  var scolorList = colorList.reverse();
  colors//what you need

  var temp = [];
  colorList.forEach((i, x) => {
    if (x % filter == 1) return
    temp.push(i)
  })

  //here you go
  //var arm0 = fate.style[fate.pass].range[0]
  //var arm1 = fate.style[fate.pass].range[1]

  //var go =  Math.floor( temp.length * arm0 )
  //var no =  Math.floor( temp.length * arm1 )

  //colorList = temp.splice( go, no )
  temp = null;

  //colorList.forEach((i, dex) => colorList[dex] = convert.rgb.hex(i))

  var neoColorList = [];


  var size = colorList.length;

  var pixelList = [];
  colorList.forEach((i, dex) => {

    var id = convert.rgb.hex(i[0], i[1], i[2]);
    //var id = convert.rgb.hex( i );
    // trace("show me the id " + i )
    var data = colors[id];
    pixelList.push(JSON.stringify(data))
  })

  //  var neoPixelList = []
  //   var neoColorList = []

  //  the world has you so wrapped up in your skin color
  //  you can not think of anything else

  //    var go = MATH.floor( neoPixelList * .33  )
  //    var no = MATH.floor( neoPixelList * .55 )

  //    colorList.forEach( ( a , b ) =>{

  //     if ( b < go ) return
  //     if ( b > no ) return

  //     neoColorList.push( a )
  //     neoPixelList.push( pixelList[ b ] )

  //})

  //trace("DO YU HAVE AY HINK " + )

  // pixelList = neoPixelList;
  //  colorList = neoColorList;

  var pxlFile = '';
  var clrFile = '';

  //var head = {};
  //head.name = name;
  //head.src = fileSRC;
  //head.index = index;
  //head.width = width;
  //head.height = height;
  //head.size = size;
  //head.pixel = pixels;
  //head.buffer = pix;
  //head.save = pathMap;

  //head = JSON.stringify(head)
  //pxlFile = head + '\n';
  //pixelList.forEach( (i, x)=> pxlFile += JSON.stringify(i) + '\n')

  //clrFile = head + '\n';
  //colorList.forEach( (i, x)=> clrFile += i + '\n')

  colorList.forEach((i, dex) => {

    //    if ( palette == null ) return colorList[dex] = JSON.stringify('[' + i[0] + ',' + i[1] + ',' + i[2] + ']')

    //   var hex = convert.rgb.hex( i[0], i[1], i[2] );

    //   var reduce = [];
    //   for (var i = 0; i < 111; i++) {
    //     reduce.push( palette[ FATE.integer({ min: 0, max: palette.length }) ])
    //   }

    //   var colorNEO = findNearest2( hex, reduce );

    //   var end = convert.hex.rgb( colorNEO );
    //   return  colorList[dex] = JSON.stringify('[' + end[0] + ',' + end[1] + ',' + end[2] + ']')

    //   if ( ( lighten == null ) && ( darken == null ) && ( saturate == null ) && ( desaturate == null ) && ( rotate == null ) ) return  colorList[dex] = JSON.stringify('[' + end[0] + ',' + end[1] + ',' + end[2] + ']')

    //   var color = Color( {r: end[0], g: end[1], b: end[2] } )

    //   if ( lighten != null ) color.lighten( lighten )
    //   if ( darken != null ) color.darken( darken )
    //   if ( saturate != null ) color.saturate( saturate )
    //   if ( desaturate != null ) color.desaturate( desaturate )
    //   if ( rotate != null ) color.rotate( rotate )

    //   end = color.rgb()

    //  colorList[dex] = JSON.stringify('[' + end.r + ',' + end.g + ',' + end.b + ']')

    //trace("paletting " + dex +' / ' + colorList.length )

  })


  // var packet = {};
  // packet.dat = head;
  // packet.pxl = pixelList;
  // packet.clr = colorList;

  // head.save = pathMap;
  // pixelList.unshift(JSON.stringify(head))

  // head.save = pathClr;
  // colorList.unshift(JSON.stringify(head))

  // FS.writeFileSync(pathMap, pixelList.join('\n'))
  // FS.writeFileSync(pathClr, colorList.join('\n'))

  // trace("path map " + pathMap)
  // trace("path clr " + pathClr)

  // SIGH.emit(E.MAP_IMAGE_COMPLETE, head)

  if (bal.slv != null) bal.slv({ pixBit: { idx: "process-pixel", lst:scolorList, dat: colors } });

  return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { PixelModel } from "../pixel.model";
import PixelBit from "../fce/pixel.bit";
import State from "../../99.core/state";
