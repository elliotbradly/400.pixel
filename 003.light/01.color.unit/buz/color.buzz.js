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
    let hex;
    switch (bal.val) {
        // we give the read spectrum a hex and it returns a name
        case 1:
            let itm = near(bal.idx);
            hex = itm.name;
            break;
        case 0:
            hex = cpy.colorData[bal.idx];
            if (hex == null)
                console.log("can not read spectrum for " + bal.idx);
            break;
    }
    hex;
    if (bal.slv != null)
        bal.slv({ clrBit: { idx: "read-color", src: hex } });
    return cpy;
};
exports.readColor = readColor;
//# sourceMappingURL=color.buzz.js.map