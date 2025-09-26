import { State } from ".";

export async function list(state: State, ...args: string[]) {

  for(const mon in state.pokedex){
    console.log(" - " + mon)
  }

}

