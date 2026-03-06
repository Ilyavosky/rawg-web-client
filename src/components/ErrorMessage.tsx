interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-12 text-center">
      <img src="/mimikyu-face.png" alt="Mimikyu" className="w-[80px] h-[80px] object-contain" />
      <p className="font-sans text-xl text-rawg-brown max-w-[400px]">
        {message}
      </p>
      <p className="font-sans text-sm text-rawg-khaki">
        Mimikyu tampoco encontró nada por aquí...
      </p>
    </div>
  );
}