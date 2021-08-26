import React from 'react';

const Navigation = () => {
  return (
    <nav className={nav}>
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
  hidden
  sm:block
  sm:col-span-12
  shadow-md
  bg-gray-800
`;

const ul = `
  mx-auto
  flex 
  gap-4
  justify-evenly 
  p-2
  max-w-screen-xl
`;

const li = `
  px-4 
  tracking-wider 
  text-gray-200 
  cursor-pointer
  w-full
  text-center
  gap-1
  
  hover:text-white
  hover:border-opacity-30 

  text-sm
  hover:bg-white
  hover:bg-opacity-10
  rounded-full
  px-6
  py-2

  xl:hover:border-gray-500

  2xl:text-green-300
  2xl:font-light
`;

const selected = `
  bg-white 
  bg-opacity-10 
  2xl:text-white
`;

export default Navigation;
