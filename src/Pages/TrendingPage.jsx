import TrendingCard from "../components/TrendingCard";

const trendingMovies = [
  {
    id: 1,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 1,
    rankColor: "text-yellow-500",
  },
  {
    id: 2,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 2,
    rankColor: "text-slate-400",
  },
  {
    id: 3,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 3,
    rankColor: "text-yellow-700",
  },
  {
    id: 4,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 4,
    rankColor: "text-white",
  },
  {
    id: 5,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 5,
    rankColor: "text-white",
  },
  {
    id: 6,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 6,
    rankColor: "text-white",
  },
  {
    id: 7,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man",
    rank: 7,
    rankColor: "text-white",
  },
];
const trendingSeries = [
  {
    id: 1,
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    alt: "Bleach: Thousand-Year Blood War",
    rank: 1,
    rankColor: "text-yellow-500",
  },
  {
    id: 2,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man: Reze Arc",
    rank: 2,
    rankColor: "text-slate-400",
  },
  {
    id: 3,
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    alt: "Bleach: Thousand-Year Blood War",
    rank: 3,
    rankColor: "text-yellow-700",
  },
  {
    id: 4,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man: Reze Arc",
    rank: 4,
    rankColor: "text-white",
  },
  {
    id: 5,
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    alt: "Bleach: Thousand-Year Blood War",
    rank: 5,
    rankColor: "text-white",
  },
  {
    id: 6,
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    alt: "Chainsaw Man: Reze Arc",
    rank: 6,
    rankColor: "text-white",
  },
  {
    id: 7,
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    alt: "Bleach: Thousand-Year Blood War",
    rank: 7,
    rankColor: "text-white",
  },
];

export default function TrendingPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Movies Section */}
      <section>
        <h2 className="font-press-2p text-4xl mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          🎬 Top 7 Movies
        </h2>

        {/* Hero Movie (Rank #1) */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg mb-12">
          <img
            src={trendingMovies[0].poster}
            alt={trendingMovies[0].alt}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
            <span className="px-4 py-1 bg-yellow-500 text-black font-bold rounded-full text-lg w-fit mb-4">
              #1
            </span>
            <h3 className="text-4xl font-extrabold text-white mb-4">
              {trendingMovies[0].alt}
            </h3>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-primary rounded-xl text-white hover:bg-primary/80 transition">
                See Detail
              </button>
              <button className="px-6 py-2 bg-secondary rounded-xl text-white hover:bg-secondary/80 transition">
                + Watchlist
              </button>
            </div>
          </div>
        </div>

        {/* Rank 2–7 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingMovies.slice(1).map((movie) => (
            <TrendingCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      {/* Series Section */}
      <section>
        <h2 className="font-press-2p text-4xl mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          📺 Top 7 Series
        </h2>

        {/* Hero Series (Rank #1) */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg mb-12">
          <img
            src={trendingSeries[0].poster}
            alt={trendingSeries[0].alt}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
            <span className="px-4 py-1 bg-yellow-500 text-black font-bold rounded-full text-lg w-fit mb-4">
              #1
            </span>
            <h3 className="text-4xl font-extrabold text-white mb-4">
              {trendingSeries[0].alt}
            </h3>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-primary rounded-xl text-white hover:bg-primary/80 transition">
                See Detail
              </button>
              <button className="px-6 py-2 bg-secondary rounded-xl text-white hover:bg-secondary/80 transition">
                + Watchlist
              </button>
            </div>
          </div>
        </div>

        {/* Rank 2–7 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingSeries.slice(1).map((serie) => (
            <TrendingCard key={serie.id} {...serie} />
          ))}
        </div>
      </section>
    </div>
  );
}
