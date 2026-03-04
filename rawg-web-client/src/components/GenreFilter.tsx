"use client";

import { Genre } from "../types";

interface GenreFilterProps {
  genres: Genre[];
  selected: string;
  onSelect: (slug: string) => void;
}

export default function GenreFilter({ genres, selected, onSelect }: GenreFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2 px-8 justify-center"
    >
      <button
        onClick={() => onSelect("")}
        className={`cursor-pointer hover:scale-105 font-sans text-[0.85rem] py-2 px-8 rounded-full border-2 border-rawg-brown transition-all duration-200 ${
          selected === "" ? "bg-rawg-orange text-rawg-beige" : "bg-rawg-beige text-rawg-dark"
        }`}
      >
        Todos
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre.slug)}
          className={`cursor-pointer hover:scale-105 font-sans text-[0.85rem] py-[0.3rem] px-[0.8rem] rounded-full border-2 border-rawg-brown transition-all duration-200 ${
            selected === genre.slug ? "bg-rawg-orange text-rawg-beige" : "bg-rawg-beige text-rawg-dark"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}