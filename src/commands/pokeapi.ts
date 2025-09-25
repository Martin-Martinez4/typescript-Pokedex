export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    
    let resp = await fetch(pageURL ? pageURL : PokeAPI.baseURL + "/location-area/?limit=20&offset=0", {
      method: "GET"
    })
    return resp.json()
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const resp = await fetch(PokeAPI.baseURL + +"/location-area/" + locationName, {
      method: "GET"
    })
    return resp.json()
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[]

};

export type Location = {
  name: string;
  url: string;
};