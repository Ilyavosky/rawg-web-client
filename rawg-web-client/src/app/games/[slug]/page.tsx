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
      <main style={{ minHeight: "100vh", backgroundColor: "#d7cfac" }}>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            gap: "1rem",
          }}
        >
          <img src="/pokeball-spin.png" alt="Cargando" style={{ width: "60px", height: "60px", animation: "spin 1s linear infinite" }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#5e4c3e", fontSize: "1.2rem" }}>
            Cargando...
          </p>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  if (error || !game) {
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#d7cfac" }}>
        <Navbar />
        <ErrorMessage message={error || "Juego no encontrado"} />
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#d7cfac" }}>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        <Link
          href="/"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#5e4c3e",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "inline-block",
            marginBottom: "1.5rem",
          }}
        >
          ← Volver
        </Link>
        {game.background_image && (
          <img
            src={game.background_image}
            alt={game.name}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "2px solid #5e4c3e",
              marginBottom: "1.5rem",
            }}
          />
        )}
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "2rem",
            color: "#2c2c2a",
            marginBottom: "1rem",
          }}
        >
          {game.name}
        </h1>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <span
            style={{
              backgroundColor: "#c98350",
              color: "#d7cfac",
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
            }}
          >
            ⭐ {game.rating}
          </span>
          {game.metacritic && (
            <span
              style={{
                backgroundColor: "#5e4c3e",
                color: "#d7cfac",
                padding: "0.3rem 0.8rem",
                borderRadius: "999px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
              }}
            >
              Metacritic: {game.metacritic}
            </span>
          )}
          <span
            style={{
              backgroundColor: "#a39475",
              color: "#2c2c2a",
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
            }}
          >
            📅 {game.released}
          </span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {game.genres.map((genre) => (
            <span
              key={genre.id}
              style={{
                backgroundColor: "#d7cfac",
                border: "2px solid #5e4c3e",
                color: "#2c2c2a",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.8rem",
              }}
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}