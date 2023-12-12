"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./color.action");
const color_model_1 = require("./color.model");
const Buzz = require("./color.buzzer");
function reducer(model = new color_model_1.ColorModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_COLOR:
            return Buzz.updateColor(clone(model), act.bale, state);
        case Act.INIT_COLOR:
            return Buzz.initColor(clone(model), act.bale, state);
        case Act.OPEN_COLOR:
            return Buzz.openColor(clone(model), act.bale, state);
        case Act.READ_COLOR:
            return Buzz.readColor(clone(model), act.bale, state);
        case Act.WRITE_COLOR:
            return Buzz.writeColor(clone(model), act.bale, state);
        case Act.REMOVE_COLOR:
            return Buzz.removeColor(clone(model), act.bale, state);
        case Act.DELETE_COLOR:
            return Buzz.deleteColor(clone(model), act.bale, state);
        case Act.CREATE_COLOR:
            return Buzz.createColor(clone(model), act.bale, state);
        case Act.MIX_COLOR:
            return Buzz.mixColor(clone(model), act.bale, state);
        case Act.FATE_COLOR:
            return Buzz.fateColor(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=color.reduce.js.map