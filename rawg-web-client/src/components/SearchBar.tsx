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
      className="flex items-center gap-2 bg-rawg-khaki rounded-full px-4 py-2 border-2 border-rawg-brown w-full max-w-[500px]"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar juegos..."
        className="flex-1 bg-transparent border-none outline-none font-sans text-base text-rawg-dark"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="bg-transparent border-none cursor-pointer text-rawg-dark text-xl p-0"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}