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

  rl.prompt();
  rl.on("line", async (input: string) => {
    if(input.length > 0){
      await commands[cleanInput(input)[0]].callback(state)
    }
    rl.prompt()
  })
}