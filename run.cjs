const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1001;
const wsPort = 8883;

let SHADE;
let VURT;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false
let pvt = false

if (title == 'development') dev = true
if (title == 'pivot') pvt = true

const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
  console.log('Aedes MQTT-WS listening on port: ' + wsPort)
  aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(PORT, async () => {
    console.log('server started and listening on port ', PORT);

    var exec  = require('child_process').exec;

    exec('tsc -b 400.pixel', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        init(PORT);

        })


});


const init = async (prt) => {

    console.log("inits")

    const local = 'mqtt://localhost:' + prt;
    const localBit = { idx: 'local', src: local };

    PIXEL = require(path.resolve('./dist/400.pixel/hunt'));
    PIXEL_ACTION = require(path.resolve('./dist/400.pixel/00.pixel.unit/pixel.action'));

    LIGHT = require(path.resolve('./003.light/index'));
    LIGHT_ACTION = require(path.resolve('./003.light/00.light.unit/light.action'));

    PIVOT = require(path.resolve('./999.pivot/index'));
    PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));

    TERMINAL = require(path.resolve('./997.terminal/index'));
    TERMINAL_ACTION = require(path.resolve('./997.terminal/00.terminal.unit/terminal.action'));

    if ( pvt == false){

      await TERMINAL.hunt( TERMINAL_ACTION.INIT_TERMINAL, { dat: MQTT, src: local });
      await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, {  dat: MQTT, src: local });
      await LIGHT.hunt( LIGHT_ACTION.INIT_LIGHT, {  dat: MQTT, src: local });
      await PIXEL.hunt( PIXEL_ACTION.INIT_PIXEL , { val: 1, dat: MQTT, src:  [localBit]  });

    }
    else{

      await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, { val:1, dat: MQTT, src: local });
      //await SHADE.hunt( SHADE_ACTION.INIT_SHADE , { val: 1, dat: MQTT, src:  [localBit]  });
    }


};



const close = async () => {


    var run = fs.readFileSync("./run.cjs").toString()
    fs.writeFileSync("./run.cjs", run)

}


if (dev == false) return

console.log("deving...")
const { exec } = require('child_process');
const { resolve } = require('path');

process.chdir("../");

var pivot = exec("pnpm watch")

process.chdir("./400.pixel");

pivot.stderr.on('data', function (data) {
    //console.log('aaads stderr: ' + data.toString());
});

let errored = false
let working = false

pivot.stdout.on('data', async (data) => {
    if (data.length < 3) return

    if (data.includes('Watching for file changes.') == false) return
    if (data.includes('Found 0 errors.') == true) {

        if (errored == false) {

            if (working == false) {

                setTimeout(() => working = true, 3333)

                return
            }

            bit = await close()
            bit = await init(PORT)

            return
        }

        errored = false

        //now reset the game
        bit = await close()
        bit = await init(PORT)

        return

    }


    if (data.includes('Debugger') == true) return
    data
    errored = true;


});

//-----------------------







