export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface PokemonAbility {
  id: number;
  name: string;
}

export interface PokemonList {
  name: string;
  image: string;
  url: string;
  abilities: PokemonAbility[];
}

export interface PokemonState {
  page: number;
  count: number;
  limit: number;
  data: Pokemon[];
  loading: boolean;
}

export interface PokemonListState {
  count: number;
  next: number;
  previous: number;
  results: PokemonList[];
}
