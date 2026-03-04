"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import GameGrid from "../components/GameGrid";
import { getGames, getGenres } from "../services/gamesService";
import { Game, Genre } from "../types";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchGames = async (searchQuery: string, genre: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getGames({ search: searchQuery, genres: genre });
      setGames(data.results);
    } catch {
      setError("No se pudo conectar con el servidor. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data.results);
      } catch {
        console.error("Error al cargar géneros");
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchGames(search, selectedGenre);
  }, [search, selectedGenre]);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  const handleGenreSelect = (slug: string) => {
    setSelectedGenre(slug);
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#d7cfac" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "2rem 0 0 0",
        }}
      >
        <img src="/mimikyu-face.png" alt="Mimikyu" style={{ width: "200px", height: "200px", objectFit: "contain" }} />
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.5rem",
            color: "#2c2c2a",
            margin: 0,
          }}
        >
          Buscar Juegos
        </h1>
        <SearchBar onSearch={handleSearch} />
        <GenreFilter
          genres={genres}
          selected={selectedGenre}
          onSelect={handleGenreSelect}
        />
      </div>
      <GameGrid games={games} loading={loading} error={error} />
    </main>
  );
}