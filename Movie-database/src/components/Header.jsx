import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobeAsia, FaSearch, FaGoogle, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        setIsSearchOpen(false);
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery("");
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full shadow bg-[#1B1B1B]">
      <div className="px-4 md:px-8 lg:px-[4rem] py-4 md:py-[1.75rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12 md:h-[2rem]">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" className="h-8 w-8 md:ml-0 ml-4" alt="Logo" />
              <span className="text-white text-lg md:text-[1.375rem] font-medium sm:block">
                FilmVerse
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/UpcomingMoviesPage"
                className="text-white text-[0.875rem] hover:text-gray-300 transition-colors"
              >
                Upcoming Movies
              </Link>
              <Link
                to="/TrendingNowPage"
                className="text-white text-[0.875rem] hover:text-gray-300 transition-colors"
              >
                Trending Now
              </Link>
              <Link
                to="/saved"
                className="text-white text-[0.875rem] hover:text-gray-300 transition-colors"
              >
                Watchlist
              </Link>
            </div>

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-white hover:bg-white hover:text-[#1b1b1b] rounded-full transition-colors duration-300"
                >
                  <FaSearch />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-[14rem] bg-[#303030] rounded-full shadow-2xl">
                    <form onSubmit={handleSearch} className="p-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={handleSearchKeyPress}
                          placeholder={isSearching ? "Searching..." : "Search for a movie title"}
                          className="w-full p-3 rounded-full text-white bg-inherit text-xs placeholder-gray-400 focus:outline-none"
                          disabled={isSearching}
                          autoFocus
                        />
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 text-white">
                <FaGlobeAsia />
                <span className="text-[0.875rem]">EN</span>
                <IoMdArrowDropdown />
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="text-white text-[0.75rem] border border-neutral-500 py-[1rem] px-[2rem] rounded-full hover:bg-white hover:text-[#1b1b1b] transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={() => setIsSignUpOpen(true)}
                  className="text-white text-[0.75rem] bg-[#007bff] py-[1rem] px-[2rem] rounded-full hover:bg-blue-600 transition-colors"
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-4"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 mx-4" ref={mobileMenuRef}>
              <div className="flex flex-col gap-4">
                {/* Mobile Navigation Links */}
                <Link
                  to="/UpcomingMoviesPage"
                  className="text-white text-[0.875rem] py-2 hover:text-gray-300"
                >
                  Upcoming Movies
                </Link>
                <Link
                  to="/TrendingNowPage"
                  className="text-white text-[0.875rem] py-2 hover:text-gray-300"
                >
                  Trending Now
                </Link>
                <Link
                  to="/saved"
                  className="text-white text-[0.875rem] py-2 hover:text-gray-300"
                >
                  Watchlist
                </Link>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie title"
                    className="w-full p-3 rounded-full text-white bg-[#303030] text-sm placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                  >
                    <FaSearch />
                  </button>
                </form>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => setIsSignInOpen(true)}
                    className="text-white text-[0.75rem] border border-neutral-500 py-[1rem] px-[2rem] rounded-full hover:bg-white hover:text-[#1b1b1b] transition-colors w-full"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => setIsSignUpOpen(true)}
                    className="text-white text-[0.75rem] bg-[#007bff] py-[1rem] px-[2rem] rounded-full hover:bg-blue-600 transition-colors w-full"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sign In Modal */}
      <Modal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Login</h2>
        <form className="space-y-4 text-xs">
          <div>
            <label className="block text-black font-bold mb-1">Enter Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 text-xs border rounded-full"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-black font-bold mb-1">Create Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 text-xs border rounded-full"
              placeholder="Password"
            />
          </div>
          <div>
            <a href="#" className="block text-black font-bold mb-1">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-xs bg-blue-500 text-white py-3 px-4 rounded-full font-bold hover:bg-blue-600"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex w-full bg-gray-300 text-black items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold hover:bg-gray-400 border"
          >
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
          <button
            type="button"
            className="inline-flex w-full bg-gray-300 text-black items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold hover:bg-gray-400 border"
          >
            <AiOutlineLinkedin />
            <span>Continue with LinkedIn</span>
          </button>

          <div className="text-xs flex flex-row text-center gap-1 items-center justify-center">
            <p>Don't have an account?</p>
            <button
              type="button"
              onClick={() => {
                setIsSignInOpen(false);
                setIsSignUpOpen(true);
              }}
              className="text-neutral-600 hover:text-neutral-800"
            >
              Create Account
            </button>
          </div>
        </form>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Create Account</h2>
        <form className="space-y-4 text-xs">
          <div>
            <label className="block text-black font-bold mb-1">Enter Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 text-xs border rounded-full"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-black font-bold mb-1">Enter Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 text-xs border rounded-full"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-black font-bold mb-1">Create Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 text-xs border rounded-full"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full text-xs bg-blue-500 text-white py-3 px-4 rounded-full font-bold hover:bg-blue-600"
          >
            Sign up
          </button>
          <button
            type="button"
            className="inline-flex w-full bg-gray-300 text-black items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold hover:bg-gray-400 border"
          >
            <FaGoogle size={16} />
            <span>Signup with Google</span>
          </button>
          <button
            type="button"
            className="inline-flex w-full bg-gray-300 text-black items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold hover:bg-gray-400 border"
          >
            <AiOutlineLinkedin size={18} />
            <span>Signup with LinkedIn</span>
          </button>

          <div className="text-xs flex flex-row text-center gap-1 items-center justify-center">
            <p>Already have an account?</p>
            <button
              type="button"
              onClick={() => {
                setIsSignUpOpen(false);
                setIsSignInOpen(true);
              }}
              className="text-neutral-600 hover:text-neutral-800"
            >
              Log in
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Header;