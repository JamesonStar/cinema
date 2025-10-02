import React, { useState, useEffect } from "react";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";

// TMDB base URL
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=1cddc7ec9232424ba1c771a3be254cba&language=en-US&page=1`;
const IMG_BASE = "https://image.tmdb.org/t/p/w500"; // TMDB image base

function MovieCard({ movie, onLike }) {
  const isLiked = movie.liked;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {movie.title} ({movie.year})
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{movie.description}</p>
        <button
          onClick={() => onLike(movie.id)}
          className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
        >
          {isLiked ? (
            <SolidHeart className="w-6 h-6 text-red-500" />
          ) : (
            <OutlineHeart className="w-6 h-6" />
          )}
          <span>{isLiked ? "Liked" : "Like"}</span>
        </button>
      </div>
    </div>
  );
}

function FilmPage() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from TMDB
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        // Map API response to match our movie format
        const mapped = data.results.map((m) => ({
          id: m.id,
          title: m.title,
          year: m.release_date ? m.release_date.split("-")[0] : "N/A",
          poster: m.poster_path
            ? `${IMG_BASE}${m.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image",
          description: m.overview,
          liked: false,
        }));

        setMovies(mapped);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  const handleLike = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onLike={handleLike} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
