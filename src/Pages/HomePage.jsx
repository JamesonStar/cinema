import FilmSection from "../section/MovieSeriesSection";
import HeroSection from "../section/HeroSection";
import TrendingMovieSection from "../section/TrendingMovieSection";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <TrendingMovieSection />
      <FilmSection />
    </div>
  );
}
