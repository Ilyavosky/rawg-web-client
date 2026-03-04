import { Game } from "../types";
import Link from "next/link";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.slug}`} className="no-underline block">
      <div className="bg-rawg-beige rounded-xl overflow-hidden border-2 border-rawg-brown cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,44,42,0.3)]">
        {game.background_image ? (
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-[180px] object-cover"
          />
        ) : (
          <div className="w-full h-[180px] bg-rawg-khaki flex items-center justify-center">
            <img src="/mimikyu-face.png" alt="Mimikyu" className="w-[80px] h-[80px] object-contain" />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-sans text-base text-rawg-dark mb-2 font-bold">
            {game.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="font-sans text-[0.85rem] text-rawg-brown">
              ⭐ {game.rating}
            </span>
            {game.metacritic && (
              <span className="bg-rawg-orange text-rawg-beige rounded px-[0.4rem] py-[0.1rem] text-xs font-sans font-bold">
                {game.metacritic}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}