import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-[#1B1B1B] px-4 1g:px-6 py-2.5 h-[6.5rem] ">
        <Link to="/" className="flex items-center">
            <img
                src='/logo.svg'
                 className="mr-[24px] h-24"
                alt="Logo"
            />
            <h1 className='pr-[2.5rem] text-[#0468d4] font-bold text-[1.375rem] font-Montserrat '>FilmVerse</h1>
            <h2 className='pl- [0.5rem] text-[#e3e3e3] font-Montserrat font-medium'>Free Movies and TV</h2>
            <h2 className='text-[#e3e3e3] font-Montserrat font-medium'>Live TV</h2>
            <h2 className='text-[#e3e3e3] font-Montserrat font-medium'>Premium Show</h2>
        </Link>
        

        </nav>
    </header>
  )
}

export default Header
