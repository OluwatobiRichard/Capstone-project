import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1a3b] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src="/logo.svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                alt="FilmVerse Logo"
              />
              <span className="text-white text-lg sm:text-[1.375rem] font-medium">
                FilmVerse
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-8">
            <Link
              to="/about"
              className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white text-sm sm:text-base hover:text-blue-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;