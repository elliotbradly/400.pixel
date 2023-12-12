"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fateColor = exports.mixColor = exports.deleteColor = exports.removeColor = exports.writeColor = exports.readColor = exports.openColor = exports.updateColor = exports.createColor = exports.initColor = void 0;
const ActClr = require("../../01.color.unit/color.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, dat;
var near, near0;
const initColor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initColor = initColor;
const createColor = (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src, bit: null, dat: null };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    var data = {};
    var list = bal.dat.lst;
    list.forEach((a) => {
        var idx = a.name.toLowerCase();
        data[idx] = a.hex;
    });
    dat.dat = data;
    dat.bit = require("nearest-color").from(data);
    if (bal.slv != null)
        return bal.slv({ clrBit: { idx: "create-color", dat } });
    return cpy;
};
exports.createColor = createColor;
const updateColor = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: bal.idx });
    dat = bit.clrBit.dat;
    bal.src;
    var itm = dat.bit(bal.src);
    if (bal.slv != null)
        return bal.slv({ clrBit: { idx: "update-container", dat: itm } });
    return cpy;
};
exports.updateColor = updateColor;
const openColor = async (cpy, bal, ste) => {
    var data = {};
    var modClr = ste.value.light;
    var list = bal.dat;
    list.forEach((a) => {
        var idx = a.name.toLowerCase();
        data[idx] = a.hex;
    });
    near = require("nearest-color").from(data);
    cpy.boundaryList = require("nearest-color").from(modClr.boundaryData);
    cpy.colorData = data;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "open-color", dat: cpy.colorData } });
    return cpy;
};
exports.openColor = openColor;
const readColor = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'clr00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActClr.CREATE_COLOR });
    var item = bit.clcBit.dat;
    if (slv != null)
        slv({ clrBit: { idx: "read-color", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readColor = readColor;
const writeColor = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClr.CREATE_COLOR });
    if (bal.src != null) {
        bit = await ste.hunt(ActClr.UPDATE_COLOR, { idx: bal.idx, src: bal.src });
        var colorDat = bit.clrBit.dat;
        bit = colorDat;
    }
    else
        bit = bit.clcBit.dat;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "write-color", dat: bit } });
    return cpy;
};
exports.writeColor = writeColor;
const removeColor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeColor = removeColor;
const deleteColor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteColor = deleteColor;
const mixColor = async (cpy, bal, ste) => {
    var lst = bal.dat.lst;
    var val = bal.dat.val;
    var rgb0 = convert.hex.rgb(lst[0]);
    var rgb1 = convert.hex.rgb(lst[1]);
    var clr0 = Color.rgb(rgb0);
    var clr1 = Color.rgb(rgb1);
    if (val == null)
        val = 0.5;
    val;
    var mix = clr0.mix(clr1, val);
    var mixColor = mix.color;
    var mixHex = convert.rgb.hex(mixColor);
    bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: bal.idx, src: '#' + mixHex });
    dat = bit.clrBit.dat;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "mix-color", dat } });
    return cpy;
};
exports.mixColor = mixColor;
const fateColor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.fateColor = fateColor;
const Color = require("color");
const convert = require("color-convert");
//# sourceMappingURL=color.buzz.js.map