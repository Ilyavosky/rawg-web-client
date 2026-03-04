import { GamesQueryParams, GamesResponse, Game, GenresResponse } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getGames = async (query: GamesQueryParams = {}): Promise<GamesResponse> => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.append(key, String(value));
    }
  });

  const res = await fetch(`${API_URL}/games?${params.toString()}`);
  if (!res.ok) throw new Error("Error al obtener juegos");
  return res.json();
};

export const getGameBySlug = async (slug: string): Promise<Game> => {
  const res = await fetch(`${API_URL}/games/${slug}`);
  if (!res.ok) throw new Error("Juego no encontrado");
  return res.json();
};

export const getGenres = async (): Promise<GenresResponse> => {
  const res = await fetch(`${API_URL}/genres`);
  if (!res.ok) throw new Error("Error al obtener géneros");
  return res.json();
};