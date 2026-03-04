export default function SkeletonCard() {
  return (
    <div className="bg-rawg-khaki rounded-xl overflow-hidden border-2 border-rawg-brown animate-pulse">
      <div className="w-full h-[180px] bg-rawg-brown opacity-50" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-4 bg-rawg-brown rounded opacity-50 w-[70%]" />
        <div className="h-3 bg-rawg-brown rounded opacity-50 w-[40%]" />
      </div>
    </div>
  );
}