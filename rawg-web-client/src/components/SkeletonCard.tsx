export default function SkeletonCard() {
  return (
    <div
      style={{
        backgroundColor: "#a39475",
        borderRadius: "12px",
        overflow: "hidden",
        border: "2px solid #5e4c3e",
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          backgroundColor: "#5e4c3e",
          opacity: 0.5,
        }}
      />
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div
          style={{
            height: "1rem",
            backgroundColor: "#5e4c3e",
            borderRadius: "4px",
            opacity: 0.5,
            width: "70%",
          }}
        />
        <div
          style={{
            height: "0.75rem",
            backgroundColor: "#5e4c3e",
            borderRadius: "4px",
            opacity: 0.5,
            width: "40%",
          }}
        />
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}