import React from 'react'
import { Link } from 'react-router-dom'
import { FaGlobeAsia, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="shadow sticky z-50 top-0 w-screen">
        <div className="bg-[#1B1B1B] px-[4rem] py-[1.75rem] h-[6.5rem] text-white w-full">
          <div className="grid grid-cols-3 items-center gap-4 ">
            <Link to="/" className='inline-flex gap-2'>
              <img
              src='/logo.svg'
                className="h-[2rem] w-[2rem]"
              alt='Logo'
              />
              <p className="text-[1.375rem] font-medium">FilmVerse</p>
            </Link>

            <div className='inline-flex text-[0.875rem] no-underline gap-8'>
              <a href="#" className=''>Free Movies and TV</a>
              <a href="#" className=''>Live TV</a>
              <a href="#" className=''>Premium Show</a>
            </div>
            <div className="inline-flex text-[0.875rem] gap-2 items-center justify-center ml-auto">
              <div className="inline-flex gap-4 items-center">
                <FaSearch/>
                

                <div className="inline-flex gap-1 items-center">
                  
                <FaGlobeAsia/>
                  <p>EN</p>
                  <IoMdArrowDropdown/>
                </div>
              </div>
              <div className="inline-flex text-[0.75rem] gap-2 ">
                <button className='border border-neutral-500 bg-transparent rounded-full py-[1rem] px-[2rem]'>Sign in</button>
                <button className='bg-[#007bff] rounded-full py-[1rem] px-[2rem]'>Sign up</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;
