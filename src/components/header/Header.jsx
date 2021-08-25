import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className={header}>
      <MenuIcon className="h-6 sm:hidden" />
      <h1 className={h1}>Zilch 2.0</h1>
    </header>
  )
}

const header = `
  col-span-12 
  bg-gradient-to-r 
  from-pink-500 
  via-blue-300
  to-purple-500 
  p-4
  flex
  border-b-8
  border-black
  border-opacity-30
  gap-4
`;

const h1 = `
  font-light 
  text-white
  text-2xl
  tracking-wider 
  w-full
  mx-auto
  xl:max-w-screen-xl
  xl:pl-6
`;

export default Header;
