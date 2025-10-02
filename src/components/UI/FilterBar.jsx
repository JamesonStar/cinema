import React from "react";

function FilterBar({ genres, selectedGenre, onGenreChange, sortBy, onSortChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onGenreChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${!selectedGenre ? 'bg-primary text-black' : 'bg-dark/50 text-text hover:bg-dark/70'}`}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onGenreChange(genre.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedGenre === genre.id ? 'bg-primary text-black' : 'bg-dark/50 text-text hover:bg-dark/70'}`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-dark/50 text-text px-4 py-2 rounded-lg border border-secondary/20 focus:outline-none focus:border-primary"
      >
        <option value="popularity.desc">Trending</option>
        <option value="release_date.desc">Newest</option>
        <option value="release_date.asc">Oldest</option>
        <option value="vote_average.desc">Highest Rated</option>
      </select>
    </div>
  );
}

export default FilterBar;
