"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var sim = {
    hunt: null,
    state: null
};


sim.open = (space) => { return open(space); };
var open = (space) => {



    init(space);

    var slv;
    const promo = new Promise((rslv, rjct) => (slv = rslv));

    //if (obj == null)
     //   obj = {};
    //if (obj.slv == null)
    //    obj.slv = (val0) => slv(val0);

   // return promo;
};

var init = async ( space ) => {

  console.log("open the game ")



};

module.exports = sim;
