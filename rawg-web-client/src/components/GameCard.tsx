import { Game } from "../types";
import Link from "next/link";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: "#d7cfac",
          borderRadius: "12px",
          overflow: "hidden",
          border: "2px solid #5e4c3e",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(44,44,42,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {game.background_image ? (
          <img
            src={game.background_image}
            alt={game.name}
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "180px",
              backgroundColor: "#a39475",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/mimikyu-face.png" alt="Mimikyu" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
          </div>
        )}
        <div style={{ padding: "1rem" }}>
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              color: "#2c2c2a",
              margin: "0 0 0.5rem 0",
              fontWeight: "bold",
            }}
          >
            {game.name}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.85rem",
                color: "#5e4c3e",
              }}
            >
              ⭐ {game.rating}
            </span>
            {game.metacritic && (
              <span
                style={{
                  backgroundColor: "#c98350",
                  color: "#d7cfac",
                  borderRadius: "4px",
                  padding: "0.1rem 0.4rem",
                  fontSize: "0.75rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: "bold",
                }}
              >
                {game.metacritic}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}