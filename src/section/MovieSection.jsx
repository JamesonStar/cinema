import { useState } from 'react';
import FilmCard from '../components/FilmCard';
import FilterBar from '../components/FilterBar';

const movies = [
  {
    id: 1,
    category: 'Movie',
    title: 'Jujutsu Kaisen 0',
    desc: 'Prequel epik dengan Yuta Okkotsu sebagai protagonis utama. Pertarungan sengit dengan Suguru Geto.',
    poster: './src/assets/img/posters/Gekijo-ban_Jujutsu_Kaisen_0.png',
    categoryColor: 'text-blue-400',
    genres: [1, 3], // Action, Supernatural
  },
  // Tambahkan lebih banyak film di sini jika diperlukan
];

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Supernatural' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Comedy' },
];

export default function MovieSection() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState('popularity.desc');

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genres.includes(selectedGenre))
    : movies;

  // For now, no sorting implemented since data is limited
  const sortedMovies = filteredMovies;

  return (
    <div className="container">
      <h1 className="text-text font-bold font-press-2p text-2xl pb-2">
        <span className="text-blue-400">M</span>ovies
      </h1>

      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        {sortedMovies.map((movie) => (
          <FilmCard key={movie.id} {...movie} />
        ))}
      </div>

      {sortedMovies.length === 0 && (
        <p className="text-text text-center mt-8">No movies found for the selected genre.</p>
      )}

      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-highlight text-black rounded-md hover:bg-highlight/80 transition">
          Load More
        </button>
      </div>
    </div>
  );
}
