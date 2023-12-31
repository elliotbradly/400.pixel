
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openPixel: ()=> ipcRenderer.invoke('pixel:openPixel'),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  writeColor: (idx, src)=> ipcRenderer.invoke('light:writeColor', idx, src),
  readColor: (idx)=> ipcRenderer.invoke('light:readColor', idx),
  saveImage: (dat)=> ipcRenderer.invoke('pixel:saveImage', dat),
  readLight: (val)=> ipcRenderer.invoke('light:readLight', val),

  openGame: ()=> ipcRenderer.invoke('game:openGame'),
  shapeHexmap: ()=> ipcRenderer.invoke('space:shapeHexmap'),

  readHexmap: (idx)=> ipcRenderer.invoke('space:readHexmap', idx),
  spinRightFocus: (idx)=> ipcRenderer.invoke('space:spinRightFocus', idx),
  spinLeftFocus: (idx)=> ipcRenderer.invoke('space:spinLeftFocus', idx),
  forwardFocus: (idx)=> ipcRenderer.invoke('space:forwardFocus', idx),
  backwardFocus: (idx)=> ipcRenderer.invoke('space:backwardFocus', idx),
  listFocus: (src)=> ipcRenderer.invoke('space:listFocus', src),


})

contextBridge.exposeInMainWorld('electron', {
  store: {
    get(key) {
      return ipcRenderer.sendSync('electron-store-get', key);
    },
    set(property, val) {
      ipcRenderer.send('electron-store-set', property, val);
    },
    // Other method you want to add like has(), reset(), etc.
  },
  // Any other methods you want to expose in the window object.
  // ...
});




/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 *
 * WARNING!
 * If accessing Node functionality (like importing @electron/remote) then in your
 * electron-main.js you will need to set the following when you instantiate BrowserWindow:
 *
 * mainWindow = new BrowserWindow({
 *   // ...
 *   webPreferences: {
 *     // ...
 *     sandbox: false // <-- to be able to import @electron/remote in preload script
 *   }
 * }
 */
