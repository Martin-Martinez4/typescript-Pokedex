import { catchPoke } from "./catch.js"
import { map, mapb } from "./command_map.js"
import { explore } from "./explore.js"
import {commandExit, commandHelp} from "./index.js"
import { State, CLICommand } from "./index.js"
import { inspect } from "./inspect.js"
import { list } from "./list.js"


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
    },
    explore: {
      name: "explore",
      description: "See the Pokemon in the area requires one arg <locationName>",
      callback: explore,
    },
    catch: {
      name: "catch",
      description: "Attempt to catch Pokemon requires one arg <pokemonName>",
      callback: catchPoke,
    },
    inspect: {
      name: "inspect",
      description: "See info of Pokemon that you have already caught requires one arg <pokemonName>",
      callback: inspect,
    },
      list: {
      name: "list",
      description: "List the names of pokemon in your pokedex (ones you hav caught)",
      callback: list,
    }
  }
}