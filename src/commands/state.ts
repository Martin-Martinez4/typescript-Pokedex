import { createInterface, type Interface } from "readline";
import process from "process";
import { getCommands } from "./registry.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>,
  pokeAPI: PokeAPI,
  nextLocationsURL: string | null,
  prevLocationsURL: string | null
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
}

export function initState(): State{
  return {
    rl: createInterface({input: process.stdin, output: process.stdout, prompt: "Pokedex > "}),
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: "https://pokeapi.co/api/v2/location-area/?limit=20&offset=0",
    prevLocationsURL: null
  }
}