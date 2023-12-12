"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FateColor = exports.FATE_COLOR = exports.MixColor = exports.MIX_COLOR = exports.CreateColor = exports.CREATE_COLOR = exports.DeleteColor = exports.DELETE_COLOR = exports.RemoveColor = exports.REMOVE_COLOR = exports.WriteColor = exports.WRITE_COLOR = exports.ReadColor = exports.READ_COLOR = exports.OpenColor = exports.OPEN_COLOR = exports.UpdateColor = exports.UPDATE_COLOR = exports.InitColor = exports.INIT_COLOR = void 0;
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
exports.WRITE_COLOR = "[Write action] Write Color";
class WriteColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_COLOR;
    }
}
exports.WriteColor = WriteColor;
exports.REMOVE_COLOR = "[Remove action] Remove Color";
class RemoveColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_COLOR;
    }
}
exports.RemoveColor = RemoveColor;
exports.DELETE_COLOR = "[Delete action] Delete Color";
class DeleteColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_COLOR;
    }
}
exports.DeleteColor = DeleteColor;
exports.CREATE_COLOR = "[Create action] Create Color";
class CreateColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_COLOR;
    }
}
exports.CreateColor = CreateColor;
exports.MIX_COLOR = "[Mix action] Mix Color";
class MixColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MIX_COLOR;
    }
}
exports.MixColor = MixColor;
exports.FATE_COLOR = "[Fate action] Fate Color";
class FateColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FATE_COLOR;
    }
}
exports.FateColor = FateColor;
//# sourceMappingURL=color.action.js.map