import { useState } from 'react';
import FilmCard from '../components/FilmCard';
import FilterBar from '../components/FilterBar';

const series = [
  {
    id: 1,
    category: 'Series',
    title: 'Bleach: Thousand-Year Blood War',
    desc: 'The final arc of Bleach, featuring epic battles against powerful enemies.',
    poster: './src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png',
    categoryColor: 'text-highlight',
    genres: [1, 3], // Action, Supernatural
  },
  {
    id: 2,
    category: 'Series',
    title: 'Chainsaw Man: Reze Arc',
    desc: 'Denji encounters Reze, a mysterious girl with her own agenda.',
    poster: './src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg',
    categoryColor: 'text-highlight',
    genres: [1, 3], // Action, Supernatural
  },
  // Tambahkan lebih banyak series di sini jika diperlukan
];

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Supernatural' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Comedy' },
];

export default function SeriesSection() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState('popularity.desc');

  // Filter series based on selected genre
  const filteredSeries = selectedGenre
    ? series.filter(serie => serie.genres.includes(selectedGenre))
    : series;

  // For now, no sorting implemented since data is limited
  const sortedSeries = filteredSeries;

  return (
    <div className="container">
      <h1 className="text-text font-bold font-press-2p text-2xl pb-2">
        <span className="text-highlight">S</span>eries
      </h1>

      <FilterBar
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        {sortedSeries.map((serie) => (
          <FilmCard key={serie.id} {...serie} />
        ))}
      </div>

      {sortedSeries.length === 0 && (
        <p className="text-text text-center mt-8">No series found for the selected genre.</p>
      )}

      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-highlight text-black rounded-md hover:bg-highlight/80 transition">
          Load More
        </button>
      </div>
    </div>
  );
}
