"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchPivot = exports.bundlePivot = exports.containsPivot = exports.listPivot = exports.editPivot = exports.runPivot = exports.openPivot = exports.updatePivot = exports.initPivot = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActPvt = require("../pivot.action");
const ActDsk = require("../../96.disk.unit/disk.action");
var bit, val, idx, dex, lst, dat, src;
const initPivot = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActPvt, ActDsk], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-pivot" } });
    return cpy;
};
exports.initPivot = initPivot;
const updatePivot = (cpy, bal, ste) => {
    //check and see if artefact exists
    src = bal.src;
    if (src == null)
        src = '999.pivot';
    const { exec } = require('child_process');
    const path = require("path");
    exec('tsc -b ' + src, async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        bit = await ste.bus(ActDsk.EXIST_DISK, { src: '../../artefact' });
        if (bit.dskBit.src == 'false ') {
            console.log("artefact does not exist");
            setTimeout(() => {
                if (bal.slv != null)
                    bal.slv({ pvtBit: { idx: "update-pivot" } });
            }, 3);
            return cpy;
        }
        console.log("updating pivot");
        bit = await ste.bus(ActDsk.COPY_DISK, { src: '../' + src + '/dist/' + src, idx: '../../' + src });
        var fileList = [];
        var indexFile = '';
        const walkFunc = async (err, pathname, dirent) => {
            if (err) {
                throw err;
            }
            if (dirent.isDirectory()) {
                //return false;
            }
            var ext = path.extname(pathname);
            var base = path.basename(pathname);
            if (base == 'hunt.js') {
                indexFile = pathname;
            }
            if (ext == '.ts' || ext == '.map' || ext == '.tsbuildinfo') {
                fileList.push(pathname);
            }
        };
        var wait = await (0, walk_1.walk)('../../' + src, walkFunc);
        fileList;
        bit = await ste.hunt(ActDsk.READ_DISK, { src: '../../' + src + '/hunt.js' });
        dat = bit.dskBit.dat;
        bit = await ste.hunt(ActDsk.WRITE_DISK, { src: '../../' + src + '/index.js', dat });
        bit = await ste.hunt(ActDsk.DELETE_DISK, { src: '../../' + src + '/hunt.js' });
        fileList.forEach((a) => ste.hunt(ActDsk.DELETE_DISK, { src: a }));
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ pvtBit: { idx: "update-pivot", src } });
        }, 3333);
    });
    return cpy;
};
exports.updatePivot = updatePivot;
const openPivot = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' });
    bit = await ste.hunt(ActPvt.RUN_PIVOT, {});
    const open = require('open');
    var loc = './vrt.opn.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "open-pivot" } });
    }, 33);
    return cpy;
};
exports.openPivot = openPivot;
const runPivot = async (cpy, bal, ste) => {
    const open = require('open');
    var loc = './vrt.gil.bat';
    bit = await open(loc);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "run-pivot" } });
    });
    return cpy;
};
exports.runPivot = runPivot;
const editPivot = (cpy, bal, ste) => {
    const { exec } = require('child_process');
    process.chdir("../../studio/");
    exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        process.chdir("../packages/999.pivot");
        if (bal.slv != null)
            bal.slv({ pvtBit: { idx: "edit-pivot", dat: {} } });
    });
    return cpy;
};
exports.editPivot = editPivot;
const listPivot = async (cpy, bal, ste) => {
    var root = "../";
    var listDir = await FS.readdir(root);
    var pivotList = [];
    listDir.forEach((a) => {
        var pth = root + a;
        if (FS.lstatSync(pth).isDirectory() == false)
            return;
        if (a.includes(".") == false)
            return;
        var sub = a.split(".")[0];
        if (sub.length != 3)
            return;
        if (S(sub).isNumeric().s == false)
            return;
        pivotList.push(a);
    });
    if (bal.src != null) {
        var out = [];
        pivotList.forEach((a) => {
            var loc = '../' + a + '/' + bal.src;
            var flag = FS.existsSync(loc);
            if (flag == false)
                return;
            out.push(a);
        });
        pivotList = out;
    }
    bal.slv({ pvtBit: { idx: "list-pivot", lst: pivotList } });
    return cpy;
};
exports.listPivot = listPivot;
const containsPivot = (cpy, bal, ste) => {
    var out = [];
    var check = bal.src;
    debugger;
    bal.lst.forEach((a) => {
        var dir = '../' + a + '/' + a;
        var lst = FS.readdirSync(dir);
        debugger;
        lst.forEach((b) => {
            if (b.includes(check))
                out.push([a, b]);
        });
    });
    if (bal.slv != null)
        bal.slv({ pvtBit: { idx: "contains-pivot", lst: out } });
    return cpy;
};
exports.containsPivot = containsPivot;
const bundlePivot = async (cpy, bal, ste) => {
    var exec = require('child_process').exec;
    if (bal.src == null)
        bal.src = '999.pivot';
    var root = '999.pivot';
    var template = 'node ./data/hand/000.eveiefy -t ' + bal.src;
    exec(template, async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        console.log("bundling " + bal.src);
        //bit = await ste.bus(ActDsk.WRITE_DISK, { src: './002.bundle-pivot.bat', dat: template })
        //bit = await ste.bus(ActDsk.BATCH_DISK, { src: '002.bundle-pivot.bat' })
        if (bal.val == null)
            bal.val = 3;
        setTimeout(() => bal.slv({ pvtBit: { idx: "bundle-pivot" } }), bal.val);
    });
    //bit = await FS.ensureDirSync( '../' + bal.src + '/work/')
    //bit = await ste.bus(ActVrt.LIST_PIVOT_VURT, {})
    //lst = bit.vrtBit.lst
    //var output = []
    //lst.forEach((a) => {
    //  var idx = '../' + a + '/work/' + bal.src + '.js'
    //  var flag = FS.existsSync(idx);
    //  if (flag == false) return
    //  output.push(idx)
    //})
    //if ( output.length == 0 ) {
    //  bal.slv({ vrtBit: { idx: "bundle-vurt", src:bal.src } })
    //  return
    // }
    //var source =  root + '/bundle/' + bal.src + '.js'
    //debugger
    //output.forEach(async (a, b) => {
    //  bit = await FS.copy(source, a)
    //  console.log("copying to " + a)
    //  debugger
    //  if (b < output.length - 1) return
    //})
    return cpy;
};
exports.bundlePivot = bundlePivot;
const patchPivot = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.patchPivot = patchPivot;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const FS = require("fs-extra");
const S = require("string");
const walk_1 = require("@root/walk");
//# sourceMappingURL=00.pivot.buzz.js.map