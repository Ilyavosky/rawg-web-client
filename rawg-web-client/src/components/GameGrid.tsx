import { Game } from "../types";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import ErrorMessage from "./ErrorMessage";

interface GameGridProps {
  games: Game[];
  loading: boolean;
  error: string | null;
}

export default function GameGrid({ games, loading, error }: GameGridProps) {
  if (loading) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (games.length === 0) {
    return <ErrorMessage message="No se encontraron juegos con ese criterio." />;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}