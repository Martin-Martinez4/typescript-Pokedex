import { map, mapb } from "./command_map.js"
import {commandExit, commandHelp} from "./index.js"
import { State, CLICommand } from "./index.js"


export function getCommands(): Record<string, CLICommand> {
  return  {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next list of locations",
      callback: map,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous list of locations",
      callback: mapb,
    }
  }
}