export default function TrendingSection() {
  return (
    <div className="container min-h-70 text-text">
      <h1 className="font-inter font-bold text-2xl lg:text-3xl xl:5xl">
        Movie of the{" "}
        <span className="bg-linear-90/oklab from-primary via-accent to-secondary bg-clip-text text-transparent text-3xl font-monoton">
          W E E K
        </span>
      </h1>

      <div
        className="
          flex gap-4 overflow-x-scroll h-55
          md:gap-4 md:h-60
          lg:gap-6 lg:h-70
          xl:gap-8 xl:h-80
        "
      >
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <div className="absolute bottom-0 left-1 items-end">
            <a className="font-monoton text-7xl text-yellow-500 drop-shadow-lg">
              1
            </a>
          </div>
        </div>

        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1 text-slate-400 drop-shadow-lg">
            2
          </p>
        </div>
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1 text-yellow-700 drop-shadow-lg">
            3
          </p>
        </div>
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1">4</p>
        </div>
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1">5</p>
        </div>
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1">6</p>
        </div>
        <div className="w-40 h-50 md:h-55 md:w-40 lg:h-65 lg:w-50 xl:h-75 shrink-0 rounded-lg relative group overflow-hidden">
          {/* Poster */}
          <img
            src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
            alt="Chainsaw Man"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Ranking number */}
          <p className="font-monoton text-7xl absolute bottom-0 pl-1">7</p>
        </div>
      </div>
    </div>
  );
}
