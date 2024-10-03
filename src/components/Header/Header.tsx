'use client';
import React, { useState } from 'react';

import ThemeSwitcher from '../hooks/ThemeSwitcher';
import { SunIcon, MoonIcon } from '../Icon/Icon';

const Navbar = () => {
  const [mode, setMode] = ThemeSwitcher();

  return (
    <header className='w-full px-6 py-4 font-medium flex items-center justify-between dark:text-light relative z-10 bg-transparent lg:px-16 md:px-12'>
      <div className='w-full flex justify-between items-center text-dark dark:text-light'>
        {/* CV Download Button */}
        <div className="flex items-center justify-center">
          <a
            href="/ayam.pdf"
            download="ayam.pdf"
            className="group relative flex h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-52 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-solid border-black dark:border-light transition-all duration-300 ease-in-out"
          >
            <div className="absolute left-3 sm:left-4 z-0 h-3 w-3 rounded-full bg-black dark:bg-blue-400 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:h-full group-hover:w-full"></div>
            <p className="absolute right-4 sm:right-6 z-10 font-bold uppercase text-xs sm:text-sm md:text-base  transition-all duration-300 ease-in-out group-hover:right-10 group-hover:text-white">
              Download CV
            </p>
          </a>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={() => setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))}
          className={`ml-4 p-1 sm:p-2 rounded-full flex items-center justify-center transition-colors duration-300 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
        >
          {mode === 'dark' ? <SunIcon className={'fill-dark w-4 h-4 sm:w-6 sm:h-6'} /> : <MoonIcon className={'fill-dark w-4 h-4 sm:w-6 sm:h-6'} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
