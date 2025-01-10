import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        console.log("Trending movies data:", data); // For debugging
        if (data && data.results) {
          setMovies(data.results.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const truncateTitle = (title) => {
    if (!title) return "";
    return title.length > 20 ? `${title.substring(0, 30)}...` : title;
  };

  return (
    <div className="h-[32.625rem] w-screen bg-[#1B1B1B] overflow-hidden items-center justify-center py-10 mx-auto space-y-8">
      <div className="flex flex-col text-white m-auto">
        <h1 className="text-center text-[1.375rem]">Trending Now</h1>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center text-[0.75rem] overflow-hidden px- bg-transparent">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-transparent group shadow-lg flex-shrink-0"
          >
            <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
              <div className="h-[14.813rem] w-full overflow-hidden">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/src/assets/imagoi.jpg"
                  }
                  alt={truncateTitle(movie.title)}
                  className="h-[15rem] w-full object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.src = "/src/assets/imagoi.jpg";
                  }}
                />
              </div>
              <div className="p-2 w-full h-[4rem] text-white mt-auto">
                <p className="font-medium truncate">
                  {truncateTitle(movie.title)}
                </p>
                <p className="text-gray-400">
                  {movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto text-center">
        <button className="bg-blue-500 shadow-g rounded-full py-[1rem] px-[2rem] w-[20rem] text-[0.75rem] text-white">
          View all
        </button>
      </div>
    </div>
  );
};

export default Trending;
