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
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        padding: "0 2rem",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => onSelect("")}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.85rem",
          padding: "0.5rem 2rem",
          borderRadius: "999px",
          border: "2px solid #5e4c3e",
          cursor: "pointer",
          backgroundColor: selected === "" ? "#c98350" : "#d7cfac",
          color: selected === "" ? "#d7cfac" : "#2c2c2a",
          transition: "all 0.2s ease",
        }}
      >
        Todos
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre.slug)}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.85rem",
            padding: "0.3rem 0.8rem",
            borderRadius: "999px",
            border: "2px solid #5e4c3e",
            cursor: "pointer",
            backgroundColor: selected === genre.slug ? "#c98350" : "#d7cfac",
            color: selected === genre.slug ? "#d7cfac" : "#2c2c2a",
            transition: "all 0.2s ease",
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}