import React from "react";

const Right = () => {
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b1a3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-white text-xs sm:text-sm">
              Copyright © {currentYear}
              {/* Optional: Display user info */}
              {/* <span className="ml-1 text-gray-400">| {gabrielisaacs}</span> */}
            </p>
          </div>

          {/* Rights Reserved */}
          <div className="text-center sm:text-right">
            <p className="text-white text-xs sm:text-sm">
              All Rights Reserved!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Right;