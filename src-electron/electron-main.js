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

const LIGHT = require('../003.light/index.js')
const ActLgt = require('../003.light/00.light.unit/light.action')
const ActClr = require('../003.light/01.color.unit/color.action')


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

  debugger
  //bit = await LIGHT.hunt(ActClr.READ_COLOR, { idx })

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

  ipcMain.handle('light:readColor', async (event, idx) => {

    debugger

    bit = await LIGHT.hunt(ActClr.READ_COLOR, { idx })
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
