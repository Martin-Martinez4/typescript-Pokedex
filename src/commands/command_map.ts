import { State } from ".";

export async function map(state: State) {
  if (state.nextLocationsURL == null) {
    console.log("you're on the last page")
    return
  }
  const res = await state.pokeAPI.fetchLocations(state.nextLocationsURL)
  state.nextLocationsURL = res.next
  state.prevLocationsURL = res.previous
  console.log(res.results.forEach((loc) => {
    if (loc.name) {

      console.log(loc.name)
    }
  }))
}

export async function mapb(state: State) {
  if (state.prevLocationsURL == null) {
    console.log("you're on the first page")
    return
  }
  const res = await state.pokeAPI.fetchLocations(state.prevLocationsURL)
  state.nextLocationsURL = res.next
  state.prevLocationsURL = res.previous
  console.log(res.results.forEach((loc) => {
    if (loc.name) {

      console.log(loc.name)
    }
  }))
}
