import { app, ipcMain, dialog, BrowserWindow } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

let mainWindow

const MQTT = require('async-mqtt');
const PORT = 1001;

const GAME = require('./game')
//const PLAY = require('../000.play/index.js')

const PIVOT = require('../999.pivot/index.js')
const LIGHT = require('../003.light/index.js')

const ActLgt = require('../003.light/00.light.unit/light.action')
const ActClr = require('../003.light/01.color.unit/color.action')
const ActDsk = require('../999.pivot/96.disk.unit/disk.action')


const local = 'mqtt://localhost:' + PORT;

var bit;


console.log(JSON.stringify(bit))

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

async function openGame() {



  bit = await PIVOT.hunt(ActDsk.READ_DISK, { src: './data/color-list/000.color.name.json' })
  var dat = bit.dskBit.dat;
  dat = JSON.parse(dat)



  bit = await LIGHT.hunt(ActClr.OPEN_COLOR, { dat })

  bit = await LIGHT.hunt(ActClr.READ_COLOR, { idx: '#FF0000' })



  //var bit = await PLAY.hunt(ActPly.OPEN_PLAY, { val: 0 })
  return { intBit: { idx: 'game-opened' } }
}

async function shapeHexmap() {
  return bit
}

async function createWindow() {

  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('game:openGame', openGame)
  ipcMain.handle('space:shapeHexmap', shapeHexmap)

  ipcMain.handle('light:readLight', async (event, val) => {
    bit = await LIGHT.hunt(ActLgt.READ_LIGHT, { idx, val })
    return JSON.stringify(bit)
  })

  ipcMain.handle('pixel:saveImage', async (event, lst) => {

    var fs = require("fs");
    var PNG = require("pngjs").PNG;


    fs.createReadStream("./data/in.png")
      .pipe(
        new PNG({
          filterType: 4,
        })
      )
      .on("parsed", function () {


        lst.forEach((a) => {

          var hex = a.hex
          var r = a.r
          var g = a.g
          var b = a.b
          var x = a.x;
          var y = a.y;

          var idx = (this.width * y + x) << 2;

          this.data[idx] = r;
          this.data[idx + 1] = g;
          this.data[idx + 2] = b;

          // and reduce opacity
          this.data[idx + 3] = 255;

        })


        this.pack().pipe(fs.createWriteStream("./data/out.png"));


      }
      )



    return JSON.stringify({ idx: "save-image" })
  })



  ipcMain.handle('light:readColor', async (event, idx) => {
    bit = await LIGHT.hunt(ActClr.READ_COLOR, { idx, val: 1 })
    return JSON.stringify(bit)
  })


  ipcMain.handle('space:listFocus', async (event, src) => {
    return JSON.stringify(bit)
  })


  ipcMain.handle('space:readHexmap', async (event, idx) => {
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:spinRightFocus', async (event, idx) => {
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:spinLeftFocus', async (event, idx) => {
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:forwardFocus', async (event, idx) => {
    return JSON.stringify(bit)
  })

  ipcMain.handle('space:backwardFocus', async (event, idx) => {
    return JSON.stringify(bit)
  })


  ipcMain.handle('space:hexmapFocus', async (idx) => {
    return bit
  })


  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 480,
    height: 480,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  //mainWindow.setPosition(-950, 250);

  //mainWindow.setPosition(950, 250);
  mainWindow.maximize();

  console.log("in the beginning...")

  // IPC listener
  ipcMain.on('electron-store-get', async (event, val) => {

    bit = await TIME.hunt(ActTme.INIT_TIME, { val: 0 })
    event.returnValue = JSON.stringify(bit);

  });
  ipcMain.on('electron-store-set', async (event, key, val) => {
    store.set('alligator', 0);
  });


  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
