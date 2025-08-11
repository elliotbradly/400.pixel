import { DiffusionModel } from "../diffusion.model";
import DiffusionBit from "../fce/diffusion.bit";
import State from "../../99.core/state";


export const initDiffusion = (cpy: DiffusionModel, bal: DiffusionBit, ste: State) => {
  debugger
  return cpy;
};

export const updateDiffusion = async (cpy: DiffusionModel, bal: DiffusionBit, ste: State) => {

  const { spawn } = require('child_process');
  const path = require('path');

  var consoleProcess, pid, bit;

  process.chdir('../');
  process.chdir('./kitchen');
  process.chdir('./diffusion');
  const userInputPath = 'D:/kitchen/diffusion/webui.bat';
  const sanitizedPath = path.normalize(userInputPath); // Sanitize the path
  consoleProcess = await spawn('cmd', ['/c', sanitizedPath], { detached: true, shell: true });
  //bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'Batch file launched! ' + userInputPath })
  process.chdir('../');
  process.chdir('../');
  process.chdir('../400.pixel');


  return cpy;
};



