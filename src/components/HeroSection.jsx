export default function HeroSection() {
  return (
    <div className="container text-text">
      <div className="container relative h-40 lg:h-60 rounded-lg bg-[url('./src/assets/img/thumbnail/Chainsaw-Man-Reze-Arc-Thumb.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 flex items-center gap-2">

          <div className="p-4 w-50 lg:w-40">
            <img
              className="size-auto "
              src="./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg"
              alt=""
            />
          </div>

          <div className="flex-col gap-2 max-w-lg">
            <p className="text-sm font-bold lg:text-2xl">
              Chainsaw Man - The Movie: Reze Arc
            </p>
            <p className="text-[10px] font-extralight lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              saepe ipsa? Exercitationem excepturi hic minus totam minima
              voluptate assumenda quod?
            </p>
            <div className="flex pt-2 gap-1">
                <button className="bg-secondary rounded-sm p-1 text-[10px] border border-transparent hover:border-secondary hover:bg-black/50 hover:text-secondary transition-all">See Detail</button>
                <button className="rounded-sm bg-linear-60/oklch from-secondary via-accent bg-clip-text text-transparent to-highlight p-1 text-[10px] border border-transparent hover:bg-clip-border hover:bg-black/50 hover:text-white transition-all">Add Watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
