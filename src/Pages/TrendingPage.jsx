import { useState } from 'react';
import FilterBar from '../components/UI/FilterBar';
import TrendingCard from '../components/UI/TrendingCard';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';

// Sample trending films data
const trendingFilms = [
  {
    id: 1,
    poster: './src/assets/img/posters/Chainsaw-Man-Reze-Arc-Key-Visual.jpg',
    alt: 'Chainsaw Man',
    rank: 1,
    rankColor: 'text-yellow-500',
    genre: 'Action',
    title: 'Chainsaw Man',
    releaseYear: 2022,
    rating: 8.5,
  },
  {
    id: 2,
    poster: './src/assets/img/posters/Gekijo-ban_Jujutsu_Kaisen_0.png',
    alt: 'Jujutsu Kaisen 0',
    rank: 2,
    rankColor: 'text-slate-400',
    genre: 'Action',
    title: 'Jujutsu Kaisen 0',
    releaseYear: 2021,
    rating: 7.9,
  },
  {
    id: 3,
    poster: './src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png',
    alt: 'Bleach: Thousand-Year Blood War',
    rank: 3,
    rankColor: 'text-yellow-700',
    genre: 'Action',
    title: 'Bleach: Thousand-Year Blood War',
    releaseYear: 2022,
    rating: 8.2,
  },
  // Add more films as needed
];

const genres = [
  { id: 'Action', name: 'Action' },
  { id: 'Drama', name: 'Drama' },
  { id: 'Comedy', name: 'Comedy' },
  // Add more genres
];

export default function TrendingPage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [visibleFilms, setVisibleFilms] = useState(6);

  // Filter and sort films
  const filteredFilms = trendingFilms
    .filter((film) => !selectedGenre || film.genre === selectedGenre)
    .sort((a, b) => {
      if (sortBy === 'release_date.desc') return b.releaseYear - a.releaseYear;
      if (sortBy === 'release_date.asc') return a.releaseYear - b.releaseYear;
      if (sortBy === 'vote_average.desc') return b.rating - a.rating;
      return a.rank - b.rank; // Default trending
    });

  const displayedFilms = filteredFilms.slice(0, visibleFilms);

  const loadMore = () => {
    setVisibleFilms(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header Section */}
      <div className="relative py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black font-monoton mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            TRENDING
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            Stay ahead of the curve with the most buzzed-about films of the moment
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Updated in real-time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 md:px-10 mb-12">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </div>

      {/* Films Grid */}
      <div className="px-6 md:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedFilms.map((film, index) => (
              <div
                key={film.id}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <div className="relative">
                    <TrendingCard
                      poster={film.poster}
                      alt={film.alt}
                      rank={film.rank}
                      rankColor={film.rankColor}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-xl mb-3 text-white">{film.title}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="primary" size="sm">
                          {film.genre}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white font-semibold">{film.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{film.releaseYear}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleFilms < filteredFilms.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="primary" size="lg">
                Load More Films
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
