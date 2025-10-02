
import { useState } from "react";

const slides = [
  {
    id: 1,
    bg: "./src/assets/img/thumbnail/Chainsaw-Man-Reze-Arc-Thumb.jpg",
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    title: "Chainsaw Man - The Movie: Reze Arc",
    rating: "9.9/10 ⭐",
    desc: "Arc paling dinanti dengan Reze yang penuh misteri. Visual epik dan drama emosional.",
  },
  {
    id: 2,
    bg: "./src/assets/img/thumbnail/yuta-okkotsu-jujutsu-kaisen-0-Cropped.jpg",
    poster: "./src/assets/img/posters/Gekijo-ban_Jujutsu_Kaisen_0.png",
    title: "Jujutsu Kaisen 0",
    rating: "8.1/10 ⭐",
    desc: "Prequel epik dengan Yuta Okkotsu sebagai protagonis utama. Pertarungan sengit dengan Suguru Geto.",
  },
  {
    id: 3,
    bg: "./src/assets/img/thumbnail/bleach-thousand-year-blood-war-11095-1257633339.jpg",
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    title: "Bleach: Thousand-Year Blood War",
    rating: "8.7/10 ⭐",
    desc: "Ichigo dan Gotei 13 melawan Wandenreich. Arc penuh intensitas dan visual keren.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="container relative text-white">
      <div className="relative h-48 lg:h-72 rounded-xl overflow-hidden shadow-lg">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out
              ${current === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 flex items-center gap-4 p-4 lg:p-8">
              {/* Poster */}
              <div className="w-24 lg:w-40 shrink-0">
                <img
                  className="rounded-lg shadow-md"
                  src={slide.poster}
                  alt={slide.title}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 max-w-xl">
                {/* Rating */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 bg-yellow-500 text-black font-semibold rounded">
                    TMDB
                  </span>
                  <span>{slide.rating}</span>
                </div>

                {/* Title */}
                <h2 className="text-base lg:text-2xl font-extrabold drop-shadow">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-200 line-clamp-3">
                  {slide.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="px-3 py-1 text-xs rounded bg-secondary border border-transparent hover:border-secondary hover:bg-black/60 hover:text-secondary transition">
                    See Detail
                  </button>
                  <button className="px-3 py-1 text-xs rounded font-bold bg-gradient-to-r from-secondary via-accent to-highlight bg-clip-text text-transparent border border-transparent hover:bg-black/40 hover:text-white transition">
                    Add Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx
                  ? "bg-yellow-500 scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
