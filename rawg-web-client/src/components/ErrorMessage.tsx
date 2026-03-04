interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "3rem",
        textAlign: "center",
      }}
    >
      <img src="/mimikyu-face.png" alt="Mimikyu" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1.2rem",
          color: "#5e4c3e",
          maxWidth: "400px",
        }}
      >
        {message}
      </p>
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.9rem",
          color: "#a39475",
        }}
      >
        Mimikyu tampoco encontró nada por aquí...
      </p>
    </div>
  );
}