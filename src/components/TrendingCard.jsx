/* TrendingCard.jsx */
export default function TrendingCard({ poster, alt, rank, rankColor }) {
  return (
    <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
      {/* Poster */}
      <img
        src={poster}
        alt={alt}
        className="w-full h-full object-cover opacity-80"
      />

      {/* Ranking number */}
      <p
        className={`font-monoton text-7xl absolute bottom-0 pl-1 drop-shadow-lg ${rankColor}`}
      >
        {rank}
      </p>
    </div>
  );
}
