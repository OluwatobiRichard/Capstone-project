import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-[#1B1B1B] py-6 md:py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-white">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">About FilmVerse</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Your ultimate destination for exploring movies, keeping track of what to watch,
            and discovering new favorites.
          </p>
        </div>

        {/* App Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">Your Personal Movie Database</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              FilmVerse is designed to be your go-to platform for all things movies.
              Built with movie enthusiasts in mind, our application provides a seamless
              experience for browsing, tracking, and discovering films from around the world.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 text-sm md:text-base">
                <li>Extensive movie database with detailed information</li>
                <li>Real-time updates on trending and upcoming releases</li>
                <li>User-friendly interface for easy navigation</li>
                <li>Personalized watchlist creation</li>
                <li>Advanced search functionality</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold">How to Use FilmVerse</h2>
            <div className="space-y-4">
              <div className="border border-[#dedede] border-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-sm md:text-base">Browse Movies</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Explore our vast collection of movies, filter by genre, year, or rating.
                </p>
              </div>
              <div className="border border-[#dedede] border-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-sm md:text-base">Track Your Watchlist</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Save movies to your watchlist and keep track of what you want to watch next.
                </p>
              </div>
              <div className="border border-[#dedede] border-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-sm md:text-base">Discover New Films</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Find new movies through our trending section and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="bg-[#2d2d2d] rounded-xl p-6 md:p-8 mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Meet the Developer</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#007bff]">
              <img
                src="/developer-image.jpg"
                alt="Gabriel Isaacs"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200x200";
                }}
              />
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold">Oluwatobi OJO</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Front-end Developer passionate about creating intuitive and engaging web applications.
                FilmVerse is built with modern technologies and best practices to ensure a smooth
                user experience while helping movie enthusiasts discover and track their favorite films.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a
                  href="https://github.com/OluwatobiRichard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B1B1B] text-white px-4 py-2 rounded-full hover:bg-[#007bff] transition-colors text-sm md:text-base"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/gabrielisaacs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B1B1B] text-white px-4 py-2 rounded-full hover:bg-[#007bff] transition-colors text-sm md:text-base"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="mailto:contact@gabrielisaacs.com"
                  className="inline-flex items-center gap-2 bg-[#1B1B1B] text-white px-4 py-2 rounded-full hover:bg-[#007bff] transition-colors text-sm md:text-base"
                >
                  <FaEnvelope /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Built With</h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="px-4 py-2 bg-[#2d2d2d] rounded-full text-sm md:text-base">React</span>
            <span className="px-4 py-2 bg-[#2d2d2d] rounded-full text-sm md:text-base">Tailwind CSS</span>
            <span className="px-4 py-2 bg-[#2d2d2d] rounded-full text-sm md:text-base">TMDB API</span>
            <span className="px-4 py-2 bg-[#2d2d2d] rounded-full text-sm md:text-base">React Router</span>
            <span className="px-4 py-2 bg-[#2d2d2d] rounded-full text-sm md:text-base">Vite</span>
          </div>
        </div>

        {/* Additional Features Section - Optional */}
        <div className="mt-8 md:mt-16 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#2d2d2d] rounded-xl p-4 md:p-6">
              <h3 className="font-semibold mb-2 text-sm md:text-base">User Reviews</h3>
              <p className="text-gray-400 text-sm">Share your thoughts on movies with the community</p>
            </div>
            <div className="bg-[#2d2d2d] rounded-xl p-4 md:p-6">
              <h3 className="font-semibold mb-2 text-sm md:text-base">Custom Lists</h3>
              <p className="text-gray-400 text-sm">Create and share your curated movie collections</p>
            </div>
            <div className="bg-[#2d2d2d] rounded-xl p-4 md:p-6">
              <h3 className="font-semibold mb-2 text-sm md:text-base">Advanced Filters</h3>
              <p className="text-gray-400 text-sm">Find exactly what you're looking for</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;