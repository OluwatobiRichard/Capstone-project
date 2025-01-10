import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Modal from "./Modal";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="shadow sticky z-50 top-0 w-screen">
      <div className="bg-[#1B1B1B] px-[4rem] py-[1.75rem] h-[6.5rem] text-white w-full">
        <div className="grid grid-cols-3 items-center gap-4 ">
          <Link to="/" className="inline-flex gap-2">
            <img src="/logo.svg" className="h-[2rem] w-[2rem]" alt="Logo" />
            <p className="text-[1.375rem] font-medium">FilmVerse</p>
          </Link>

          <div className="inline-flex text-[0.875rem] no-underline gap-8">
            <a href="#" className="">
              Free Movies and TV
            </a>
            <a href="#" className="">
              Live TV
            </a>
            <a href="#" className="">
              Premium Show
            </a>
          </div>
          <div className="inline-flex text-[0.875rem] gap-2 items-center justify-center ml-auto">
            <div className="inline-flex gap-4 items-center">
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-[#162544] rounded-full"
                >
                  <FaSearch size={20} />
                </button>

                <Modal
                  isOpen={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                >
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search movies..."
                      className="w-full p-2 border rounded text-black"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 rounded"
                    >
                      Search
                    </button>
                  </form>
                </Modal>
              </div>

              <div className="inline-flex gap-1 items-center">
                <FaGlobeAsia />
                <p>EN</p>
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="inline-flex text-[0.75rem] gap-2 ">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="border border-neutral-500 bg-transparent rounded-full py-[1rem] px-[2rem]"
              >
                Sign in
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="bg-[#007bff] rounded-full py-[1rem] px-[2rem]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      <Modal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Header;
