"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#a39475",
        borderRadius: "999px",
        padding: "0.5rem 1rem",
        border: "2px solid #5e4c3e",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar juegos..."
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1rem",
          color: "#2c2c2a",
        }}
      />
      <button
        type="submit"
        aria-label="Buscar"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#2c2c2a",
          fontSize: "1.2rem",
          padding: 0,
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}