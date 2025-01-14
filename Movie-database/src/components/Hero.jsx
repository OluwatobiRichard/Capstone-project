import React from "react";
import MySvg from "../assets/background.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleUpcomingMovies = () => {
    navigate('/UpcomingMoviesPage');
  };

  const handleTrendingNow = () => {
    navigate('/TrendingNowPage');
  };

  return (
    <div
      className="relative min-h-screen w-full bg-[#1B1B1B] overflow-hidden"
      style={{
        backgroundImage: `url(${MySvg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-[25rem] md:max-w-[52.688rem] mx-auto text-center">
          <div className="space-y-6 mb-8 sm:mb-12">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3.563rem] leading-tight sm:leading-tight md:leading-tight lg:leading-[4rem] font-bold">
              Explore a world of films with our extensive collection.
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-[1.5rem] max-w-3xl mx-auto">
              Start exploring today and discover your next favorite film!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button 
              onClick={handleUpcomingMovies}
              className="lg:w-[20rem] w-[15rem] bg-[#007bff] hover:bg-blue-600 transition-colors duration-300 rounded-full py-3 sm:py-4 px-6 sm:px-8 text-white text-sm sm:text-base font-medium min-w-[200px]"
            >
              Check Now
            </button>
            <button 
              onClick={handleTrendingNow}
              className="lg:w-[20rem] w-[15rem] border border-[#dedede] hover:bg-white transition-colors duration-300 rounded-full py-3 sm:py-4 px-6 sm:px-8 text-white hover:text-black text-sm sm:text-base font-medium min-w-[200px] inline-flex items-center justify-center gap-2"
            >
              <span>Check Our Collection</span>
              <MdOutlineArrowOutward className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1B1B1B] to-transparent" />
    </div>
  );
};

export default Hero;
