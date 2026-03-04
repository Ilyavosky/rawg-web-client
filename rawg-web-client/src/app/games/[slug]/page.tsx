"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getGameBySlug } from "../../../services/gamesService";
import { Game } from "../../../types";
import ErrorMessage from "../../../components/ErrorMessage";
import Navbar from "../../../components/Navbar";

export default function GamePage() {
  const { slug } = useParams<{ slug: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getGameBySlug(slug);
        setGame(data);
      } catch {
        setError("No se pudo cargar la información del juego.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-rawg-beige">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <img src="/pokeball-spin.png" alt="Cargando" className="w-[60px] h-[60px] animate-spin" />
          <p className="font-sans text-rawg-brown text-xl">
            Cargando...
          </p>
        </div>
      </main>
    );
  }

  if (error || !game) {
    return (
      <main className="min-h-screen bg-rawg-beige">
        <Navbar />
        <ErrorMessage message={error || "Juego no encontrado"} />
      </main>
    );
  }

    return (
      <main className="min-h-screen bg-rawg-beige">
        <Navbar />
        <div className="max-w-[900px] mx-auto p-8">
          <Link
            href="/"
            className="font-sans text-rawg-brown no-underline text-sm inline-block mb-6"
          >
            ← Volver
          </Link>
          {game.background_image && (
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-[350px] object-cover rounded-xl border-2 border-rawg-brown mb-6"
            />
          )}
          <h1 className="font-sans text-3xl text-rawg-dark mb-4">
            {game.name}
          </h1>
          <div className="flex gap-4 flex-wrap mb-6">
            <span className="bg-rawg-orange text-rawg-beige px-3 py-1 rounded-full font-sans text-sm flex items-center gap-1">
              <i className="fa-solid fa-star"></i> {game.rating}
            </span>
            {game.metacritic && (
              <span className="bg-rawg-brown text-rawg-beige px-3 py-1 rounded-full font-sans text-sm">
                Metacritic: {game.metacritic}
              </span>
            )}
            <span className="bg-rawg-khaki text-rawg-dark px-3 py-1 rounded-full font-sans text-sm flex items-center gap-1">
              <i className="fa-solid fa-calendar"></i> {game.released}
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {game.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-rawg-beige border-2 border-rawg-brown text-rawg-dark px-2 py-1 rounded font-sans text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </main>
  );
}