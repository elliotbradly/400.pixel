"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightModel = void 0;
class LightModel {
    constructor() {
        this.idx = '003.light';
        //lightBitList: LightBit[] = [];
        //lightBits: any = {};
        this.boundaryTitle = {
            "00": { idx: "00.AL.achromatic-light", src: 'black' },
            "01": { idx: "01.AB.achromatic-blood", src: 'red' },
            "02": { idx: "02.CV.chromatic-virid", src: 'green' },
            "03": { idx: "03.CM.chromatic-marine", src: 'blue' },
            "04": { idx: "04.CS.chromatic-straw", src: 'yello' },
            "05": { idx: "05.CI.chromatic-ink", src: 'black' },
            "06": { idx: "06.CN.chromatic-nobel", src: 'purple' },
            "07": { idx: "07.CA.chromatic-amber", src: 'orange' },
            "08": { idx: "08.CP.chromatic-peach", src: 'pink' },
            "09": { idx: "09.CC.chromatic-coffee", src: 'brown' },
            "10": { idx: "10.AA.asymmetrical-achromatic", src: 'glob00' },
            "11": { idx: "11.BA.bootlegged-achromatic", src: 'glop01' },
            "12": { idx: "12.CA.criminal-achromatic", src: 'glop02' },
            "13": { idx: "13.DA.defunct-achromatic", src: 'glop03' },
            "14": { idx: "14.EA.execrable-achromatic", src: 'glop04' },
            "15": { idx: "15.FAfallacious-achromatic", src: 'glop05' },
            "16": { idx: "16.GA.grotesque-achromatic", src: 'glop06' },
            "17": { idx: "17.HA.grotesque-achromatic", src: 'glop07' },
            "18": { idx: "18.IA.irrational-achromatic", src: 'glop08' },
            "19": { idx: "19.JA.jejune-achromatic", src: 'glop09' },
            "20": { idx: "20.KA.kleptomanical-achromatic", src: 'glop10' },
            "21": { idx: "21.LA.loathsome-achromatic", src: 'glop11' },
            "22": { idx: "22.MA.mordant-achromatic", src: 'glop12' },
            "23": { idx: "23.NA.nasty-achromatic", src: 'glop13' },
            "24": { idx: "24.OA.odious-achromatic", src: 'glop14' },
            "25": { idx: "25.PA.profane-achromatic", src: 'glop15' },
            "26": { idx: "26.QA.quixotic-achromatic", src: 'glop16' },
            "27": { idx: "27.RA.rapacious-achromatic", src: 'glop17' },
            "28": { idx: "29.SA.slanderous-achromatic", src: 'glop18' },
            "29": { idx: "29.TA.tyrannical-achromatic", src: 'glop19' },
            "30": { idx: "30.UA.unborn-achromatic", src: 'glop20' },
            "31": { idx: "31.VA.vehement-achromatic", src: 'glop21' },
            "32": { idx: "32.WA.worthless-achromatic", src: 'glop22' },
            "33": { idx: "33.XA.xenophobic-achromatic", src: 'glop23' },
            "34": { idx: "34.YA.yucky-achromatic", src: 'glop24' },
            "35": { idx: "34.ZA.zeronic-achromatic", src: 'glop25' }
        };
        this.boundaryData = {
            black: "#000000",
            white: "#ffffff",
            blue: "#0000FF",
            green: "#00FF00",
            yello: "#FFFF00",
            red: "#FF0000",
            purple: "#800080",
            orange: "#FFA500",
            brown: "#964B00",
            pink: "#ffc0cb",
            glop00: "#708090",
            glop01: "#808080",
            glop02: "#708090",
            glop03: "#808080",
            glop04: "#708090",
            glop05: "#808080",
            glop06: "#708090",
            glop07: "#808080",
            glop08: "#708090",
            glop09: "#808080",
            glop10: "#708090",
            glop11: "#808080",
            glop12: "#708090",
            glop13: "#808080",
            glop14: "#708090",
            glop15: "#808080",
            glop16: "#708090",
            glop17: "#808080",
            glop18: "#708090",
            glop19: "#808080",
            glop20: "#808080",
            glop21: "#808080",
            glop22: "#808080",
            glop23: "#808080",
            glop24: "#808080",
            glop25: "#808080",
        };
    }
}
exports.LightModel = LightModel;
//# sourceMappingURL=light.model.js.map