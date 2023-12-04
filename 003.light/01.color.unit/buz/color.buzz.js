"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readColor = exports.openColor = exports.updateColor = exports.initColor = void 0;
var bit;
var near, near0;
const initColor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initColor = initColor;
const updateColor = (cpy, bal, ste) => {
    return cpy;
};
exports.updateColor = updateColor;
const openColor = async (cpy, bal, ste) => {
    var data = {};
    var list = bal.dat;
    list.forEach((a) => {
        var idx = a.name.toLowerCase();
        data[idx] = a.hex;
    });
    near = require("nearest-color").from(data);
    near0 = require("nearest-color").from(cpy.boundaryData);
    cpy.colorData = data;
    data;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "open-color", dat: cpy.colorData } });
    return cpy;
};
exports.openColor = openColor;
const readColor = (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 0;
    let src;
    let r, g, b, hex;
    switch (bal.val) {
        // we give the read spectrum a hex and it returns a name
        case 1:
            let itm = near(bal.idx);
            r = itm.rgb.r;
            g = itm.rgb.g;
            b = itm.rgb.b;
            hex = S(itm.value).slugify().s;
            src = itm.name;
            src = S(src).slugify().s;
            src += '.' + S(itm.value).slugify().s;
            src += '.' + String(itm.rgb.r).padStart(3, '0');
            src += '.' + String(itm.rgb.g).padStart(3, '0');
            src += '.' + String(itm.rgb.b).padStart(3, '0');
            src;
            break;
        case 0:
            src = cpy.colorData[bal.idx];
            if (src == null)
                console.log("can not read spectrum for " + bal.idx);
            break;
    }
    src;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "read-color", src, dat: { r, g, b, hex, src } } });
    return cpy;
};
exports.readColor = readColor;
const S = require("string");
//# sourceMappingURL=color.buzz.js.map