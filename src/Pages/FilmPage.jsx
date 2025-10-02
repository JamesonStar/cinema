import React, { useState, useEffect } from "react";
import { HeartIcon as OutlineHeart, HeartIcon as SolidHeart, PlayIcon, StarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// TMDB API
const API_KEY = "1cddc7ec9232424ba1c771a3be254cba";
const IMG_BASE = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";

function MovieCard({ movie, onAddToWatchlist, onLike, isLiked }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-text font-bold text-lg mb-2">{movie.title}</h3>
            <p className="text-highlight text-sm mb-4 line-clamp-2">{movie.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 text-primary mr-1" />
                <span className="text-text">{movie.rating}</span>
              </div>
              <button
                onClick={() => onLike(movie.id)}
                className="text-accent hover:text-highlight transition-colors"
              >
                {isLiked ? <SolidHeart className="w-6 h-6" /> : <OutlineHeart className="w-6 h-6" />}
              </button>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="bg-primary hover:bg-primary/80 text-dark px-4 py-2 rounded-lg font-semibold flex items-center text-sm flex-1 justify-center">
                <PlayIcon className="w-4 h-4 mr-1" /> Play
              </button>
              <button
                onClick={() => onAddToWatchlist(movie)}
                className="bg-secondary hover:bg-secondary/80 text-text px-4 py-2 rounded-lg font-semibold flex items-center text-sm flex-1 justify-center"
              >
                <OutlineHeart className="w-4 h-4 mr-1" /> Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GenreRow({ title, movies, onAddToWatchlist, onLike, likedMovies }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-monoton text-text mb-6">{title}</h2>
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-48">
            <MovieCard
              movie={movie}
              onAddToWatchlist={onAddToWatchlist}
              onLike={onLike}
              isLiked={likedMovies.has(movie.id)}
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
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-secondary text-text px-4 py-3 pr-12 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text hover:text-primary">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}

function FilmPage() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [likedMovies, setLikedMovies] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await res.json();

        const mapped = data.results.map((m) => ({
          id: m.id,
          title: m.title,
          year: m.release_date ? m.release_date.split("-")[0] : "N/A",
          poster: m.poster_path ? `${IMG_BASE}${m.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image",
          backdrop: m.backdrop_path ? `${BACKDROP_BASE}${m.backdrop_path}` : null,
          description: m.overview,
          rating: m.vote_average.toFixed(1),
          genres: m.genre_ids, // Keep as IDs for now
          popularity: m.popularity,
          release_date: m.release_date,
        }));

        setMovies(mapped);
        setFeaturedMovie(mapped[0]);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie]);
  };

  const handleLike = (movieId) => {
    setLikedMovies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(movieId)) {
        newSet.delete(movieId);
      } else {
        newSet.add(movieId);
      }
      return newSet;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = searchQuery
    ? movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : movies;

  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const newest = [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 10);
  const recommendations = movies.slice(10, 20);

  return (
    <div className="min-h-screen bg-dark text-text">

      <div className="container mx-auto px-4">
        <SearchBar onSearch={handleSearch} />

        {searchQuery && (
          <section className="mb-12">
            <h2 className="text-2xl font-monoton text-text mb-6">Search Results for "{searchQuery}"</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onAddToWatchlist={handleAddToWatchlist}
                  onLike={handleLike}
                  isLiked={likedMovies.has(movie.id)}
                />
              ))}
            </div>
          </section>
        )}

        {!searchQuery && (
          <>
            <GenreRow
              title="Top Rated"
              movies={topRated}
              onAddToWatchlist={handleAddToWatchlist}
              onLike={handleLike}
              likedMovies={likedMovies}
            />
            <GenreRow
              title="New Releases"
              movies={newest}
              onAddToWatchlist={handleAddToWatchlist}
              onLike={handleLike}
              likedMovies={likedMovies}
            />
            <GenreRow
              title="Recommended for You"
              movies={recommendations}
              onAddToWatchlist={handleAddToWatchlist}
              onLike={handleLike}
              likedMovies={likedMovies}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default FilmPage;
