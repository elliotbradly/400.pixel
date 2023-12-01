"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldMenu = exports.YIELD_MENU = exports.RenderMenu = exports.RENDER_MENU = exports.CreateHexmapMenu = exports.CREATE_HEXMAP_MENU = exports.HexmapMenu = exports.HEXMAP_MENU = exports.CreateMenu = exports.CREATE_MENU = exports.UpdateFocusPlayMenu = exports.UPDATE_FOCUS_PLAY_MENU = exports.FocusPlayMenu = exports.FOCUS_PLAY_MENU = exports.FocusMenu = exports.FOCUS_MENU = exports.TimeMenu = exports.TIME_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
exports.INIT_MENU = "[Menu action] Init Menu";
class InitMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MENU;
    }
}
exports.InitMenu = InitMenu;
exports.UPDATE_MENU = "[Menu action] Update Menu";
class UpdateMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_MENU;
    }
}
exports.UpdateMenu = UpdateMenu;
exports.TEST_MENU = "[Menu action] Test Menu";
class TestMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_MENU;
    }
}
exports.TestMenu = TestMenu;
exports.CLOSE_MENU = "[Menu action] Close Menu";
class CloseMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_MENU;
    }
}
exports.CloseMenu = CloseMenu;
exports.TIME_MENU = "[Time action] Time Menu";
class TimeMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TIME_MENU;
    }
}
exports.TimeMenu = TimeMenu;
exports.FOCUS_MENU = "[Focus action] Focus Menu";
class FocusMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FOCUS_MENU;
    }
}
exports.FocusMenu = FocusMenu;
exports.FOCUS_PLAY_MENU = "[Focus action] Focus Play Menu";
class FocusPlayMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FOCUS_PLAY_MENU;
    }
}
exports.FocusPlayMenu = FocusPlayMenu;
exports.UPDATE_FOCUS_PLAY_MENU = "[Focus action] Update Focus Play Menu";
class UpdateFocusPlayMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_FOCUS_PLAY_MENU;
    }
}
exports.UpdateFocusPlayMenu = UpdateFocusPlayMenu;
exports.CREATE_MENU = "[Create action] Create Menu";
class CreateMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_MENU;
    }
}
exports.CreateMenu = CreateMenu;
exports.HEXMAP_MENU = "[Hexmap action] Hexmap Menu";
class HexmapMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.HEXMAP_MENU;
    }
}
exports.HexmapMenu = HexmapMenu;
exports.CREATE_HEXMAP_MENU = "[Hexmap action] Create Hexmap Menu";
class CreateHexmapMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_HEXMAP_MENU;
    }
}
exports.CreateHexmapMenu = CreateHexmapMenu;
exports.RENDER_MENU = "[Render action] Render Menu";
class RenderMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RENDER_MENU;
    }
}
exports.RenderMenu = RenderMenu;
exports.YIELD_MENU = "[Render action] Yield Menu";
class YieldMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.YIELD_MENU;
    }
}
exports.YieldMenu = YieldMenu;
//# sourceMappingURL=menu.action.js.map