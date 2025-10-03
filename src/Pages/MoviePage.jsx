import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import FilmCard from "../components/UI/FilmCard";
import Input from "../components/UI/Input";

// Dummy data for movies
const movies = [
  {
    id: 1,
    title: "Bleach: Thousand Blood Wars",
    description: "Ichigo dan Gotei 13 melawan Wandenreich. Arc penuh intensitas dan visual keren.",
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    category: "Series",
    categoryColor: "text-highlight",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen Movie: 0",
    description: "Prequel epik dengan Yuta Okkotsu sebagai protagonis utama. Pertarungan sengit dengan Suguru Geto.",
    poster: "./src/assets/img/posters/Gekijo-ban_Jujutsu_Kaisen_0.png",
    category: "Movie",
    categoryColor: "text-blue-400",
  },
  // Add more dummy movies as needed
  {
    id: 3,
    title: "Chainsaw Man",
    description: "A devil hunter with a chainsaw heart fights demons.",
    poster: "./src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg",
    category: "Series",
    categoryColor: "text-highlight",
  },
  {
    id: 4,
    title: "Another Movie",
    description: "Description for another movie.",
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    category: "Movie",
    categoryColor: "text-blue-400",
  },
  // Repeat or add more to have enough for slices
];

function GenreRow({ title, movies }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-monoton text-text mb-6">{title}</h2>
      <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <FilmCard
              category={movie.category}
              title={movie.title}
              desc={movie.description}
              poster={movie.poster}
              categoryColor={movie.categoryColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex justify-center">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-secondary text-text px-4 py-2 rounded-l-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="bg-primary text-dark px-4 py-2 rounded-r-lg hover:bg-primary/80 flex items-center">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
}

function MoviePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = searchQuery
    ? movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : movies;

  const topRated = movies.slice(0, 5); // Dummy slice
  const newest = movies.slice(1, 6);
  const recommendations = movies.slice(2, 7);

  return (
    <div className="min-h-screen bg-dark text-text">
      <div className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />

        {searchQuery && (
          <section className="mb-12">
            <h2 className="text-2xl font-monoton text-text mb-6">Search Results for "{searchQuery}"</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <FilmCard
                  key={movie.id}
                  category={movie.category}
                  title={movie.title}
                  desc={movie.description}
                  poster={movie.poster}
                  categoryColor={movie.categoryColor}
                />
              ))}
            </div>
          </section>
        )}

        {!searchQuery && (
          <>
            <GenreRow title="Top Rated" movies={topRated} />
            <GenreRow title="New Releases" movies={newest} />
            <GenreRow title="Recommended for You" movies={recommendations} />
          </>
        )}
      </div>
    </div>
  );
}

export default MoviePage;
