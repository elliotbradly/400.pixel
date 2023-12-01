"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModel = void 0;
class ColorModel {
    constructor() {
        //idx:string;
        //colorBitList: ColorBit[] = [];
        //colorBits: any = {};
        this.boundaryTitle = {
            "00": "00.AL.achromatic-light",
            "01": "01.AB.achromatic-blood",
            "02": "02.CV.chromatic-virid",
            "03": "03.CM.chromatic-marine",
            "04": "04.CS.chromatic-straw",
            "05": "05.CI.chromatic-ink",
            "06": "06.CN.chromatic-nobel",
            "07": "07.CA.chromatic-amber",
            "08": "08.CP.chromatic-peach",
            "09": "09.CC.chromatic-coffee",
            "10": "10.AA.asymmetrical-achromatic",
            "11": "11.BA.bootlegged-achromatic",
            "12": "12.CA.criminal-achromatic",
            "13": "13.DA.defunct-achromatic",
            "14": "14.EA.execrable-achromatic",
            "15": "15.FAfallacious-achromatic",
            "16": "16.GA.grotesque-achromatic",
            "17": "17.HA.grotesque-achromatic",
            "18": "18.IA.irrational-achromatic",
            "19": "19.JA.jejune-achromatic",
            "20": "20.KA.kleptomanical-achromatic",
            "21": "21.LA.loathsome-achromatic",
            "22": "22.MA.mordant-achromatic",
            "23": "23.NA.nasty-achromatic",
            "24": "24.OA.odious-achromatic",
            "25": "25.PA.profane-achromatic",
            "26": "26.QA.quixotic-achromatic",
            "27": "27.RA.rapacious-achromatic",
            "28": "29.SA.slanderous-achromatic",
            "29": "29.TA.tyrannical-achromatic",
            "30": "30.UA.unborn-achromatic",
            "31": "31.VA.vehement-achromatic",
            "32": "32.WA.worthless-achromatic",
            "33": "33.XA.xenophobic-achromatic",
            "34": "34.YA.yucky-achromatic",
            "35": "34.ZA.zeronic-achromatic",
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
            grey: "#708090",
            gray: "#808080",
        };
    }
}
exports.ColorModel = ColorModel;
//# sourceMappingURL=color.model.js.map