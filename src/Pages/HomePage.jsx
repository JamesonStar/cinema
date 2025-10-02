import FilmSection from "../components/FilmSection";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <TrendingSection />
      <FilmSection />
    </div>
  );
}
