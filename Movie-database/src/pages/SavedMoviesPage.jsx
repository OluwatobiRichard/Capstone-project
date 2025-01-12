import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaClock, FaCalendarAlt } from "react-icons/fa";

const SavedMoviesPage = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadSavedMovies = () => {
      const movies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
      setSavedMovies(movies.reverse());
    };

    loadSavedMovies();
    window.addEventListener('storage', loadSavedMovies);
    return () => window.removeEventListener('storage', loadSavedMovies);
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleRemoveMovie = (e, movieId) => {
    e.stopPropagation();
    const updatedMovies = savedMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
    setSavedMovies(updatedMovies);
    setShowDeleteMessage(true);
    setTimeout(() => setShowDeleteMessage(false), 2000);
  };

  const truncateTitle = (title) => {
    if (!title) return "";
    const maxLength = window.innerWidth < 640 ? 20 : 30;
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  return (
    <div className="min-h-screen w-full bg-[#1B1B1B] py-8 md:py-10 px-4 md:px-8">
      {/* Toast Notification */}
      {showDeleteMessage && (
        <div className="fixed top-4 right-4 md:top-20 md:right-8 bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
          <div className="flex items-center gap-2">
            <FaTrash className="text-sm md:text-base" />
            <span className="text-sm md:text-base">Movie removed from watchlist</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-white mb-8 md:mb-10">
          <h1 className="text-center text-2xl md:text-[1.375rem] font-semibold mb-2">
            My Watchlist
          </h1>
          <p className="text-center text-gray-400 text-sm md:text-base">
            {savedMovies.length} {savedMovies.length === 1 ? 'movie' : 'movies'} saved
          </p>
        </div>

        {savedMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-white space-y-4 mt-12 md:mt-20 px-4">
            <FaClock className="text-3xl md:text-4xl text-gray-400" />
            <p className="text-lg md:text-xl text-center">Your watchlist is empty</p>
            <p className="text-gray-400 text-sm md:text-base text-center max-w-md">
              Click the bookmark icon on any movie to add it to your list
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 bg-[#007bff] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 text-sm md:text-base"
            >
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-items-center">
            {savedMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="w-full max-w-[15.5rem] bg-transparent group cursor-pointer"
              >
                <div className="relative bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
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
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

                    {/* Remove Button */}
                    <button
                      onClick={(e) => handleRemoveMovie(e, movie.id)}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:scale-110"
                      title="Remove from watchlist"
                    >
                      <FaTrash className="text-xs md:text-sm" />
                    </button>
                  </div>

                  {/* Movie Info */}
                  <div className="p-4">
                    <h3 className="text-white font-medium text-sm md:text-base line-clamp-2 min-h-[2.5rem]">
                      {movie.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-xs md:text-sm">

                      <span>
                        {movie.release_date
                          ? new Date(movie.release_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short'
                          })
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedMoviesPage;