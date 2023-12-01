"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadColor = exports.READ_COLOR = exports.OpenColor = exports.OPEN_COLOR = exports.UpdateColor = exports.UPDATE_COLOR = exports.InitColor = exports.INIT_COLOR = void 0;
// Color actions
exports.INIT_COLOR = "[Color action] Init Color";
class InitColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLOR;
    }
}
exports.InitColor = InitColor;
exports.UPDATE_COLOR = "[Color action] Update Color";
class UpdateColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLOR;
    }
}
exports.UpdateColor = UpdateColor;
exports.OPEN_COLOR = "[Open action] Open Color";
class OpenColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_COLOR;
    }
}
exports.OpenColor = OpenColor;
exports.READ_COLOR = "[Read action] Read Color";
class ReadColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_COLOR;
    }
}
exports.ReadColor = ReadColor;
//# sourceMappingURL=color.action.js.map