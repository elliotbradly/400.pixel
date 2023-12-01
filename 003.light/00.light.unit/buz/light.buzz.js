"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = exports.initLight = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActClr = require("../../01.color.unit/color.action");
const ActLgt = require("../../00.light.unit/light.action");
const ActBus = require("../../99.bus.unit/bus.action");
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
const updateLight = (cpy, bal, ste) => {
    return cpy;
};
exports.updateLight = updateLight;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=light.buzz.js.map