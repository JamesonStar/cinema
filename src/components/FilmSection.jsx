/* FilmSection.jsx */
import FilmCard from "./UI/FilmCard";

const films = [
  {
    id: 1,
    category: "Series",
    title: "Bleach: Thousand Blood Wars",
    desc: "Ichigo dan Gotei 13 melawan Wandenreich. Arc penuh intensitas dan visual keren.",
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    categoryColor: "text-highlight",
  },
  {
    id: 2,
    category: "Movie",
    title: "Jujutsu Kaisen Movie: 0",
    desc: "Prequel epik dengan Yuta Okkotsu sebagai protagonis utama. Pertarungan sengit dengan Suguru Geto.",
    poster: "./src/assets/img/posters/Gekijo-ban_Jujutsu_Kaisen_0.png",
    categoryColor: "text-blue-400",
  },
  // Tambahin data lain di sini...
];

export default function FilmSection() {
  return (
    <div className="container">
      <h1 className="text-text font-bold font-press-2p text-2xl pb-2">
        <span className="text-blue-400">M</span>ovie and{" "}
        <span className="text-highlight">S</span>eries
      </h1>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        {films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-highlight text-black rounded-md hover:bg-highlight/80 transition">
          Load More
        </button>
      </div>
    </div>
  );
}
