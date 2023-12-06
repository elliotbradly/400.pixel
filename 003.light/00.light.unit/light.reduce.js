"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./light.action");
const light_model_1 = require("./light.model");
const Buzz = require("./light.buzzer");
function reducer(model = new light_model_1.LightModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_LIGHT:
            return Buzz.updateLight(clone(model), act.bale, state);
        case Act.INIT_LIGHT:
            return Buzz.initLight(clone(model), act.bale, state);
        case Act.READ_LIGHT:
            return Buzz.readLight(clone(model), act.bale, state);
        case Act.SOURCE_LIGHT:
            return Buzz.sourceLight(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=light.reduce.js.map