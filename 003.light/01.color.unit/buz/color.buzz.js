"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColor = exports.removeColor = exports.writeColor = exports.readColor = exports.openColor = exports.updateColor = exports.createColor = exports.initColor = void 0;
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
    debugger;
    dat.bit(bal.src);
    if (bal.slv != null)
        return bal.slv({ canBit: { idx: "update-container", dat } });
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
    var updateBit = await ste.hunt(ActClr.UPDATE_COLOR, { idx: bal.idx });
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActClr.CREATE_COLOR });
    var item = bit.clcBit.dat;
    debugger;
    if (slv != null)
        slv({ clrBit: { idx: "read-color", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readColor = readColor;
const writeColor = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActClr.CREATE_COLOR });
    ste.hunt(ActClr.UPDATE_COLOR, { idx: bal.idx });
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "write-color", dat: bit.clcBit.dat } });
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
//# sourceMappingURL=color.buzz.js.map