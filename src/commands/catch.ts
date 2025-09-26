import { State } from ".";

export async function catchPoke(state: State, ...args: string[]){

  if(args.length == 0){
    console.log("Catch requires an arg <pokemonName>")
    return 
  }else{
    let pokemonInfo = await state.pokeAPI.fetchPokemon(args[0]);
    console.log(`Throwing a Pokeball at ${pokemonInfo.name}...`)

    if( (Math.floor(Math.random() * 660) + 1) > pokemonInfo.base_experience){
      state.pokedex[pokemonInfo.name] = pokemonInfo;
      console.log(`${pokemonInfo.name} was caught!`)
    }else{
      console.log(`${pokemonInfo.name} escaped!`)
    }
  }

  }