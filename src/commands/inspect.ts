import { State } from ".";

export async function inspect(state: State, ...args: string[]) {

  if (args.length == 0) {
    console.log("Inspect requires an arg <locationName>")
    return
  } else {

    let {name, height, weight, stats, types} = state.pokedex[args[0]];

    const statsDisp = `
    \t- hp:              ${stats[0].base_stat}
    \t- attack:          ${stats[1].base_stat}
    \t- defense:         ${stats[2].base_stat}
    \t- special-attack:  ${stats[3].base_stat}
    \t- special-defense: ${stats[4].base_stat}
    \t- speed:           ${stats[5].base_stat}
    `

    let typesDisp = ``
    for(let i = 0; i < types.length; i++){
      typesDisp += "\n\t- " + types[i].type.name ;
    }

    const disp = `Name: ${name}\nHeight: ${height}\nWeight: ${weight}\nStats: ${statsDisp}\nTypes: ${typesDisp}\n`

    console.log(disp)

  }

}