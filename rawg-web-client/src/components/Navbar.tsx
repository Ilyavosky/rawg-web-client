export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2c2c2a",
        borderBottom: "3px solid #5e4c3e",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: "2rem" }}></div>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#d7cfac",
          letterSpacing: "0.05em",
        }}
      >
        Buscador de juegos de Mimikyu powered by RAWG
      </span>
    </nav>
  );
}