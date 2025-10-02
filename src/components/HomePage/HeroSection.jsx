import { useState } from "react";

const slides = [
  {
    id: 1,
    bg: "./src/assets/img/thumbnail/Chainsaw-Man-Reze-Arc-Thumb.jpg",
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    title: "Chainsaw Man - The Movie: Reze Arc",
    rating: "9.9/10 ⭐",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe ipsa? Exercitationem excepturi",
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

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container relative text-text">
      <div className="relative h-40 lg:h-60 rounded-lg overflow-hidden">
        {slides.map((slide, idx) => (
  <div
    key={slide.id}
    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out
      ${current === idx ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    style={{ backgroundImage: `url(${slide.bg})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center gap-2 p-2">
      {/* Poster */}
      <div className="p-2 w-28 lg:w-40 shrink-0">
        <img
          className="rounded-md"
          src={slide.poster}
          alt={slide.title}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 max-w-lg pb-5">
        <div className="flex gap-1 items-center text-sm">
          <p className="text-[7px] bg-yellow-600 w-7 h-3 text-center rounded-sm text-black">
            Tmdb
          </p>
          <p className="text-[10px]">{slide.rating}</p>
        </div>
        <p className="text-sm font-bold lg:text-2xl">{slide.title}</p>
        <p className="text-[10px] font-extralight lg:text-sm">{slide.desc}</p>
        <div className="flex pt-2 gap-1">
          <button className="bg-secondary rounded-sm p-1 text-[10px] border border-transparent hover:border-secondary hover:bg-black/50 hover:text-secondary transition-all">
            See Detail
          </button>
          <button className="rounded-sm font-bold bg-linear-60/oklch from-secondary via-accent bg-clip-text text-transparent to-highlight p-1 text-[10px] border border-transparent hover:bg-clip-border hover:bg-black/30 hover:text-white transition-all">
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
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1"
        >
          <svg
            className="size-5 shadow-sm rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-1"
        >
          <svg
            className="size-5 shadow-sm rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-white" : "bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
