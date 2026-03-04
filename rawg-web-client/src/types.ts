export interface GamesQueryParams {
  page?: number;
  page_size?: number;
  search?: string;
  search_precise?: boolean;
  search_exact?: boolean;
  parent_platforms?: string;
  platforms?: string;
  stores?: string;
  developers?: string;
  publishers?: string;
  genres?: string;
  tags?: string;
  creators?: string;
  dates?: string;
  updated?: string;
  platforms_count?: number;
  metacritic?: string;
  exclude_collection?: number;
  exclude_additions?: boolean;
  exclude_parents?: boolean;
  exclude_game_series?: boolean;
  exclude_stores?: string;
  ordering?: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  metacritic: number;
  genres: Genre[];
  platforms: { platform: Platform }[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface GenresResponse {
  count: number;
  results: Genre[];
}