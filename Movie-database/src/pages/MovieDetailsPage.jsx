import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBookmark,
  FaPlay,
  FaStar,
  FaClock,
  FaGlobe,
  FaChevronLeft,
  FaCalendarAlt
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  getMovieDetails,
  getMovieVideos,
  getWatchProviders
} from "../services/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [watchProviders, setWatchProviders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showProvidersModal, setShowProvidersModal] = useState(false);

  // Check if movie is saved in watchlist
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');
    setIsSaved(savedMovies.some(savedMovie => savedMovie.id === Number(id)));
  }, [id]);

  // Fetch movie data, videos, and watch providers
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const [movieData, videosData, providersData] = await Promise.all([
          getMovieDetails(id),
          getMovieVideos(id),
          getWatchProviders(id)
        ]);

        setMovie(movieData);
        setVideos(videosData.results || []);
        setWatchProviders(providersData.results?.US || null); // Using US as default region
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieData();
      window.scrollTo(0, 0);
    }
  }, [id]);

  const handleSaveMovie = () => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies') || '[]');

    if (isSaved) {
      const updatedMovies = savedMovies.filter(savedMovie => savedMovie.id !== movie.id);
      localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      setIsSaved(false);
    } else {
      const movieToSave = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average
      };
      savedMovies.push(movieToSave);
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      setIsSaved(true);
    }

    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 2000);
  };

  const handleWatchClick = () => {
    const trailer = videos.find(video => video.type === "Trailer" && video.site === "YouTube");

    if (trailer) {
      setShowTrailerModal(true);
    } else if (watchProviders) {
      setShowProvidersModal(true);
    } else {
      alert("No watch options available at the moment.");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen w-full bg-[#1B1B1B] flex items-center justify-center">
        <div className="text-white text-xl">Movie not found</div>
      </div>
    );
  }

  const TrailerModal = ({ videoKey, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          aria-label="Close trailer"
        >
          <IoMdClose size={24} />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          className="w-full h-full rounded-lg"
          title={`${movie.title} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );

  const ProvidersModal = ({ providers, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#2d2d2d] rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-xl font-semibold">Watch Options</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
            aria-label="Close watch options"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {providers.flatrate && (
          <div className="mb-4">
            <h4 className="text-white text-lg mb-2">Streaming</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {providers.flatrate.map(provider => (
                <a
                  key={provider.provider_id}
                  href={providers.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3d3d3d] rounded-lg p-2 hover:bg-[#4d4d4d] transition"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-8 h-8 rounded"
                  />
                  <span className="text-white text-sm">{provider.provider_name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {providers.rent && (
          <div className="mb-4">
            <h4 className="text-white text-lg mb-2">Rent</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {providers.rent.map(provider => (
                <a
                  key={provider.provider_id}
                  href={providers.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3d3d3d] rounded-lg p-2 hover:bg-[#4d4d4d] transition"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                    alt={provider.provider_name}
                    className="w-8 h-8 rounded"
                  />
                  <span className="text-white text-sm">{provider.provider_name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#1B1B1B] py-6 md:py-10 px-8 md:px-16">
      {/* Save Message Toast */}
      {showSaveMessage && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {isSaved ? "Movie saved to your list!" : "Movie removed from your list"}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-white mb-6 flex items-center gap-2 hover:text-gray-300 transition-colors"
        >
          <FaChevronLeft /> Back
        </button>

        {/* Movie Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleSaveMovie}
                  className={`p-3 rounded-full transition-all duration-300 ${isSaved
                    ? 'bg-[#007bff] text-white hover:bg-blue-600'
                    : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  title={isSaved ? "Remove from watchlist" : "Add to watchlist"}
                >
                  <FaBookmark />
                </button>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className="lg:col-span-2 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>

            {/* Movie Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm md:text-base">
              {movie.vote_average > 0 && (
                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span>{movie.vote_average.toFixed(1)}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" />
                <span>{formatDate(movie.release_date)}</span>
              </div>
              {movie.runtime > 0 && (
                <div className="flex items-center gap-1">
                  <FaClock className="text-gray-400" />
                  <span>{formatRuntime(movie.runtime)}</span>
                </div>
              )}
              {movie.original_language && (
                <div className="flex items-center gap-1">
                  <FaGlobe className="text-gray-400" />
                  <span className="uppercase">{movie.original_language}</span>
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Genres */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-[#2d2d2d] rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Watch Now Button */}
            <button
              onClick={handleWatchClick}
              className="inline-flex items-center gap-2 bg-[#007bff] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <FaPlay className="text-sm" />
              <span>{videos.some(v => v.type === "Trailer") ? "Watch Trailer" : "Watch Now"}</span>
            </button>

            {/* Modals */}
            {showTrailerModal && (
              <TrailerModal
                videoKey={videos.find(v => v.type === "Trailer" && v.site === "YouTube")?.key}
                onClose={() => setShowTrailerModal(false)}
              />
            )}

            {showProvidersModal && (
              <ProvidersModal
                providers={watchProviders}
                onClose={() => setShowProvidersModal(false)}
              />
            )}

            {/* Credits Section */}
            {movie.credits?.cast?.length > 0 && (
              <div className="my-8">
                <h2 className="text-xl font-semibold mb-4">Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {movie.credits.cast.slice(0, 5).map((person) => (
                    <div key={person.id} className="text-center">
                      <div className="w-full aspect-square rounded-full overflow-hidden mb-2">
                        <img
                          src={
                            person.profile_path
                              ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                              : "https://via.placeholder.com/200x200"
                          }
                          alt={person.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="font-medium text-sm">{person.name}</p>
                      <p className="text-gray-400 text-xs">{person.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Movies Section */}
        {movie.similar?.results?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-white text-2xl font-semibold mb-6">Similar Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {movie.similar.results.slice(0, 5).map((similarMovie) => (
                <div
                  key={similarMovie.id}
                  onClick={() => navigate(`/movie/${similarMovie.id}`)}
                  className="cursor-pointer group"
                >
                  <div className="relative bg-[#2d2d2d] rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={
                        similarMovie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`
                          : "https://via.placeholder.com/500x750"
                      }
                      alt={similarMovie.title}
                      className="w-full h-auto aspect-[2/3] object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-medium text-sm mb-1 truncate">
                        {similarMovie.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {new Date(similarMovie.release_date).getFullYear()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsPage;