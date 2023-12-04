"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = exports.readLight = exports.initLight = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActClr = require("../../01.color.unit/color.action");
const ActLgt = require("../../00.light.unit/light.action");
const ActBus = require("../../99.bus.unit/bus.action");
const clone = require("clone-deep");
var bit, val, idx, dex, lst, dat, src;
const initLight = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLgt, ActClr], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-space" } });
    return cpy;
};
exports.initLight = initLight;
const readLight = (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 0;
    switch (bal.val) {
        case 0:
            dat = clone(cpy.boundaryData);
            break;
        case 1:
            dat = clone(cpy.boundaryTitle);
            break;
    }
    if (bal.slv != null)
        bal.slv({ lgtBit: { idx: "read-light", dat } });
    return cpy;
};
exports.readLight = readLight;
const updateLight = (cpy, bal, ste) => {
    return cpy;
};
exports.updateLight = updateLight;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=light.buzz.js.map