import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row h-[12rem] bg-[#0b1a3b] pl-[4rem] py-[2rem] gap-[8rem]">
      <div className="flex flex-row items-center gap-4 pb-[6rem]">
        <Link to="/" className="inline-flex gap-2">
          <img src="/logo.svg" className="h-[2rem] w-[2rem]" alt="Logo" />
          <p className="text-white text-[1.375rem] font-medium">FilmVerse</p>
        </Link>
      </div>
      <div className="grid space-x-0 text-white text-[1rem] gap-x-2 h-[8rem] w-[20.625rem]">
        <div className="grid grid-cols-2">
          <h1>About Us</h1>
          <h1>Privacy Policy</h1>
          <h1>Copyright</h1>
          <h1>Contact Us</h1>
        </div>
        <div className="grid grid-cols-2">
          <h1>Media Center</h1>
          <h1>Terms of Use</h1>
          <h1>FAQ</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
