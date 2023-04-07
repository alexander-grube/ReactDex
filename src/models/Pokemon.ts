export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface PokemonState {
  page: number;
  count: number;
  limit: number;
  data: Pokemon[];
  loading: boolean;
}
