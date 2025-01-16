import React from "react";
import { useNavigate } from 'react-router-dom';

const Latest = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/UpcomingMoviesPage');
  };

  return (
    <div className="relative min-h-[19.25rem] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('./src/assets/latestBg.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative py-8 md:py-10">
        <div className="max-w-[25rem] md:max-w-[42.25rem] mx-auto px-4 md:px-8 text-center space-y-6 md:space-y-8">
          {/* Title */}
          <div className="flex flex-col text-white">
            <h1 className="text-xl md:text-[1.375rem] font-semibold">
              Upcoming Movies
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl md:text-[2.25rem] text-white leading-tight md:leading-[2.75rem] max-w-3xl">
              Browse our curated lists of the latest and greatest movies.
            </p>
          </div>

          {/* Button */}
          <div className="mx-auto text-center">
            <button
              onClick={handleViewAll}
              className="w-[15rem] lg:w-[20rem] border border-[#dedede] bg-transparent hover:bg-white hover:text-black rounded-full py-3 md:py-4 px-6 md:px-8 text-sm md:text-base text-white transition-all duration-300"
            >
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;