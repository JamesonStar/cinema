import { Link } from "react-router-dom";
import TrendingCard from "../components/UI/TrendingCard";

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

export default function TrendingSection() {
  return (
    <div className="container min-h-70 text-text">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-bold text-2xl lg:text-3xl xl:5xl">
          Movie of the{" "}
          <span className="bg-linear-90/oklab from-primary via-accent to-secondary bg-clip-text text-transparent text-3xl font-monoton">
            W E E K
          </span>
        </h1>

        <Link
          to="/trending"
          className="rounded-full bg-linear-60/oklch from-secondary via-accent bg-clip-text text-primary to-highlight p-1 border border-transparent hover:bg-clip-border hover:bg-black/30 hover:text-white transition-all"
        >
          <svg
            className="size-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* Scrollable list */}
      <div
        className="
          flex gap-4 overflow-x-scroll h-55
          md:gap-4 md:h-60
          lg:gap-6 lg:h-70
          xl:gap-8 xl:h-80
        "
      >
        {trendingMovies.map((movie) => (
          <TrendingCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
