"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceLight = exports.SOURCE_LIGHT = exports.ReadLight = exports.READ_LIGHT = exports.UpdateLight = exports.UPDATE_LIGHT = exports.InitLight = exports.INIT_LIGHT = void 0;
// Light actions
exports.INIT_LIGHT = "[Light action] Init Light";
class InitLight {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_LIGHT;
    }
}
exports.InitLight = InitLight;
exports.UPDATE_LIGHT = "[Light action] Update Light";
class UpdateLight {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_LIGHT;
    }
}
exports.UpdateLight = UpdateLight;
exports.READ_LIGHT = "[Read action] Read Light";
class ReadLight {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_LIGHT;
    }
}
exports.ReadLight = ReadLight;
exports.SOURCE_LIGHT = "[Source action] Source Light";
class SourceLight {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SOURCE_LIGHT;
    }
}
exports.SourceLight = SourceLight;
//# sourceMappingURL=light.action.js.map