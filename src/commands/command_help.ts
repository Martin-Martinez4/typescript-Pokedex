import { State } from "./index.js";

export async function commandHelp(state: State){


  let output = "Welcome to the Pokedex!\nUsage:\n\n"

  const commands = state.commands;

  for(const key in commands){
    const command = commands[key]
    output += `${command.name}: ${command.description}\n`
  }

  console.log(output)
}