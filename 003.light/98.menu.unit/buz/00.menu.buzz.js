"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActLgt = require("../../00.light.unit/light.action");
const ActClr = require("../../01.color.unit/color.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
const ActDsk = require("../../act/disk.action");
const ActPut = require("../../act/input.action");
var bit, lst, dex, idx, dat, src, val;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 5, y: 0, xSpan: 9, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "LIGHT PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]
    lst = [ActClr.MIX_COLOR, ActClr.WRITE_COLOR, ActClr.READ_COLOR, ActLgt.UPDATE_LIGHT, ActClr.OPEN_COLOR, ActLgt.READ_LIGHT];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActClr.MIX_COLOR:
            bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' });
            var dat = bit.dskBit.dat;
            dat = JSON.parse(dat);
            bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: 'clr00', dat: { lst: dat } });
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat });
            var clr0 = '#' + bit.putBit.src;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat });
            var clr1 = '#' + bit.putBit.src;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat });
            val = Number(bit.putBit.src);
            //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
            //var dat = bit.dskBit.dat;
            //dat = JSON.parse(dat)
            //bit = await ste.hunt(ActClr.OPEN_COLOR, { dat })
            bit = await ste.hunt(ActClr.MIX_COLOR, { idx: 'clr00', dat: { lst: [clr0, clr1], val } });
            src = JSON.stringify(bit.clrBit.dat);
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src });
            break;
        case ActClr.WRITE_COLOR:
            bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/color-list/' });
            lst = bit.dskBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src });
            dat = bit.dskBit.dat;
            var datClr = JSON.parse(dat);
            bit = await ste.hunt(ActClr.WRITE_COLOR, { idx: 'clr000', src: 'FF00FF', dat: { lst: datClr } });
            //src = JSON.stringify( bit.lgtBit.dat ) 
            //lst = src.split(',')
            //lst.forEach( async (a) =>{
            //  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })
            //})
            break;
        case ActClr.READ_COLOR:
            //bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 })
            //bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'color input', net: bit.grdBit.dat })
            //idx = '#' + bit.putBit.src;
            bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' });
            var dat = bit.dskBit.dat;
            dat = JSON.parse(dat);
            bit = await ste.hunt(ActClr.OPEN_COLOR, { dat });
            bit = await ste.hunt(ActClr.READ_COLOR, { idx: 'clr000', src: '00FF00' });
            src = bit.clrBit.src;
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src });
            break;
        case ActLgt.READ_LIGHT:
            lst = ['000', '001'];
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            val = Number(src);
            bit = await ste.hunt(ActLgt.READ_LIGHT, { val });
            src = JSON.stringify(bit.lgtBit.dat);
            lst = src.split(',');
            lst.forEach(async (a) => {
                bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a });
            });
            break;
        case ActLgt.UPDATE_LIGHT:
            bit = await ste.hunt(ActLgt.UPDATE_LIGHT, {});
            break;
        case ActClr.OPEN_COLOR:
            bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' });
            var dat = bit.dskBit.dat;
            dat = JSON.parse(dat);
            bit = await ste.hunt(ActClr.OPEN_COLOR, { dat });
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const createMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createMenu = createMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map