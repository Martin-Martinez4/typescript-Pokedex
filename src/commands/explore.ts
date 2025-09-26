import { State } from ".";

export async function explore(state: State, ...args: string[]) {

  if (args.length == 0) {
    console.log("Explore requires an arg <locationName>")
    return
  } else {

    let locationInfo = await state.pokeAPI.fetchLocation(args[0]);
    locationInfo?.pokemon_encounters.forEach((obj: any) => { console.log(obj.pokemon.name) })
  }

}