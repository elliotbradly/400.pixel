import { boot } from "quasar/wrappers";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import * as ActPly from "../acts/play.action";

import { EventBus } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (dat) => {
  // something to do

  const bus = new EventBus()

  // for Options API

  var win: any = window;
  dat.app.provide("SHADE", win.SHADE);
  dat.app.provide("MQTT", win.MQTT);

  dat.app.config.globalProperties.$bus = bus

  // for Composition API
  dat.app.provide('bus', bus)



  const prt = 8883;
  const local = "mqtt://localhost:" + prt;
  const localBit = { idx: "local", src: local };

  var bit = await win.SHADE.hunt(win.SHADE.ActShd.INIT_SHADE, {
    val: 0,
    src: local,
  });

  var bit = await window['electronAPI'].openGame()
  console.log(JSON.stringify(bit))

  //  var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 0, dat: win.MQTT, src: local });
});
