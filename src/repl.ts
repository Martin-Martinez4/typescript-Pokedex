import { createInterface } from 'node:readline';
import { getCommands, State } from './commands/index.js';
import { stat } from 'node:fs';

export function cleanInput(arg: string): string[] {
  return arg.trim().toLowerCase().split(" ").filter((elem) => {
    return elem != "" && elem != undefined
  })
}


export async function startREPL(state: State) {
  const commands = getCommands();
  const rl = state.rl

  state.rl.prompt();
  state.rl.on("line", async (input: string) => {
    if(input.length > 0){
      const cmd = commands[cleanInput(input)[0]]; 
      const [, ...args] = cleanInput(input)
      if(cmd != undefined){

        if(args.length > 0){

          await cmd.callback(state, ...args)
        }else{
          await cmd.callback(state)

        }
      }else{
        console.log("unknown command")
      }
    }
    rl.prompt()
  })
}