import { createInterface, type Interface } from "readline";
import process from "process";
import { getCommands } from "./registry.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>,
  pokeAPI: PokeAPI,
  nextLocationsURL: string | null,
  prevLocationsURL: string | null
  pokedex: Record<string, Pokemon>
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
}

export function initState(cacheInterval: number): State{
  return {
    rl: createInterface({input: process.stdin, output: process.stdout, prompt: "Pokedex > "}),
    commands: getCommands(),
    pokeAPI: new PokeAPI(cacheInterval),
    nextLocationsURL: "https://pokeapi.co/api/v2/location-area/?limit=20&offset=0",
    prevLocationsURL: null,
    pokedex: {}
  }
}