import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMovies } from "../services/api";
import { FaSpinner } from "react-icons/fa";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const truncateTitle = (title) => {
    if (!title) return "";
    const maxLength = window.innerWidth < 640 ? 20 : 30;
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  if (loading) {
    return (
      <div className="min-h-[32.625rem] w-full bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-white text-lg md:text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[32.625rem] w-full bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-red-500 text-lg md:text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[32.625rem] w-full bg-[#1B1B1B] py-8 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-white mb-8 md:mb-10">
          <h1 className="text-center text-2xl md:text-[1.375rem] font-semibold">
            Search Results for "{query}"
          </h1>
        </div>

        {movies.length === 0 ? (
          <div className="text-center">
            <p className="text-white text-lg md:text-xl">No results found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <div className="relative">
            {/* Movie Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-items-center">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                  className="w-full max-w-[15.5rem] bg-transparent group cursor-pointer"
                >
                  <div className="relative bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
                    {/* Movie Poster */}
                    <div className="aspect-[2/3] relative">
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "/src/assets/imagoi.jpg"
                        }
                        alt={truncateTitle(movie.title)}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/src/assets/imagoi.jpg";
                        }}
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                    </div>

                    {/* Movie Info */}
                    <div className="p-4">
                      <h3 className="text-white font-medium text-sm md:text-base truncate">
                        {truncateTitle(movie.title)}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">
                        {movie.release_date
                          ? new Date(movie.release_date).getFullYear()
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Responsive Scroll Indicators - Optional */}
      <div className="mt-6 flex justify-center gap-2 md:hidden">
        {movies.slice(0, 5).map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-600"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;