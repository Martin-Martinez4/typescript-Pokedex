import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval)
  }

  closeCache() {
    this.cache.stopReapLoop();
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

    if (!pageURL) {
      pageURL = PokeAPI.baseURL + "/location-area/?limit=20&offset=0";
    }

    const cacheHit = this.cache.get<ShallowLocations>(pageURL)
    if (cacheHit) {

      return cacheHit
    } else {

      let resp = await fetch(pageURL, {
        method: "GET"
      })
      const val = resp.json()
      this.cache.add(pageURL, val)
      return val
    }

  }

  async fetchLocation(locationName: string): Promise<Location> {

    const pageURL = PokeAPI.baseURL + "/location-area/" + locationName

    const cacheHit = this.cache.get<Location>(pageURL)
    if (cacheHit) {

      return cacheHit
    } else {

      const resp = await fetch(pageURL, {
        method: "GET"
      })
      const val = resp.json();
      this.cache.add(pageURL, val);
      return val;
    }

  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {

    const pageURL = PokeAPI.baseURL + "/pokemon/" + pokemonName

    const cacheHit = this.cache.get<Pokemon>(pageURL)
    if (cacheHit) {

      return cacheHit
    } else {

      const resp = await fetch(pageURL, {
        method: "GET"
      })
      const val = resp.json();
      this.cache.add(pageURL, val);
      return val;
    }

  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};

// max_exp: 608
// Math.floor(Math.random() * 660) + 1
export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  stats: {base_stat: number, effort: number}[],
  types: {slot: number, type: {name: string, url: string}}[]
}