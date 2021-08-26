import React from 'react';

const Navigation = ({ isOpen }) => {
  console.log(isOpen);
  return (
    <nav className={
      isOpen
        ? nav
        : nav + 'hidden'}>
      <ul className={ul}>
        <li className={li + selected}>Play Zilch</li>
        <li className={li}>Rules</li>
        <li className={li}>Leaderboard</li>
        <li className={li}>Log Out</li>
      </ul>
    </nav>
  )
}

const nav = `
  shadow-md
  bg-gray-800


  sm:block
  sm:col-span-12
`;

const ul = `
  mx-auto
  flex 
  flex-col
  gap-2
  py-8
  px-2

  sm:gap-2
  justify-evenly 
  sm:p-2
  max-w-screen-xl

  sm:flex-row
  sm:gap-4
`;

const li = `
  rounded-md
  px-4 
  tracking-wider
  text-purple-100 
  cursor-pointer
  w-full
  text-lg
  
  sm:text-sm
  hover:text-white
  hover:bg-purple-900
  px-6
  py-2
  
  sm:text-center

  2xl:text-green-300
  2xl:font-light
`;

const selected = `
  bg-purple-500 
  bg-opacity-20 
  2xl:text-white
`;

export default Navigation;
