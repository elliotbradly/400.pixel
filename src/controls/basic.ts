import { ref, onMounted, onUnmounted, onUpdated, inject, getCurrentInstance } from 'vue'
import { Mouse, Keyboard, Gamepad, or, and } from 'contro'

export type HelloWorld = string | number

const keyboard = new Keyboard()
const gamepad = new Gamepad()

export const mountControl = async (value: HelloWorld) => {

  const bus = inject('bus') // inside setup()

  console.log('sampleFunc:: ', value)

  var focIDX = 'foc03'

  var render = () => {

   bus.emit('RENDER')


  }

  const acts = {
    a: async () => {
      await window['electronAPI'].spinRightFocus(focIDX)
      render();
    },
    b: async () => {
      await window['electronAPI'].spinLeftFocus(focIDX)
      render();

    },
    x: async () => {
      await window['electronAPI'].spinRightFocus(focIDX)
      render();

    },
    y: async () => {
      await window['electronAPI'].spinLeftFocus(focIDX)
      render();

    },
    up: async () => {
      await window['electronAPI'].spinRightFocus(focIDX)
      render();

    },
    down: async () => {
      await window['electronAPI'].spinLeftFocus(focIDX)
      render();

    },
    right: async () => {
      await window['electronAPI'].forwardFocus(focIDX)
      render();
    },
    left: async () => {
      await window['electronAPI'].backwardFocus(focIDX)
      render();
    },
    back: async () => {
      await window['electronAPI'].readHexmap(focIDX)
      render();
    },
    lb: async () => {
      await window['electronAPI'].readHexmap(focIDX)
      render();
    },
    rb: async () => {
      await window['electronAPI'].readHexmap(focIDX)
      render();
    },
  }

  const controls = {
    a: or(gamepad.button('A').trigger, keyboard.key('z').trigger),
    b: or(gamepad.button('B').trigger, keyboard.key('x').trigger),
    x: or(gamepad.button('x').trigger, keyboard.key('c').trigger),
    y: or(gamepad.button('y').trigger, keyboard.key('v').trigger),
    up: or(gamepad.button('Up').trigger, keyboard.key('Up').trigger),
    down: or(gamepad.button('Down').trigger, keyboard.key('Down').trigger),
    left: or(gamepad.button('Left').trigger, keyboard.key('Left').trigger),
    right: or(gamepad.button('Right').trigger, keyboard.key('Right').trigger),
    back: or(gamepad.button('Back').trigger, keyboard.key('Space').trigger),
    lb: or(gamepad.button('LB').trigger, keyboard.key('a').trigger),
    rb: or(gamepad.button('RB').trigger, keyboard.key('f').trigger),
  }

  function gameLoop() {


    // Update the UI to reflect the player's input device(s)
    //game.jumpButton.text = controls.jump.label
    //game.menuButton.text = controls.menu.label

    for (var key in controls) {
      if (controls[key].query()) {
        acts[key]()
      }
    }
    // ...

    // Query the controls and do something
    //if (controls.jump.query()) alert("jump")
    //if (controls.menu.query()) alert("menu")
    //game.statusOverlay.visible = controls.statusOverlay.query()
    // ...

    requestAnimationFrame(gameLoop)
  }


  gameLoop()


  return value
}
