import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import avatars from '../../assets/avatars.svg';

const Header = () => {
  const user = 'ZilchPlayer420';
  const avatar = 'cobra';

  return (
    <header className={header}>
      <div className={wrap}>
        <MenuIcon className={icon} />
        <h1 className={h1}>Zilch 2.0</h1>
      </div>
      <div className={wrap}>
        <h2 className={h2}>{user}</h2>
        <svg className={svg}>
          <use href={avatars + `#${avatar}`} />
        </svg>
      </div>
    </header>
  )
}

const header = `
  col-span-12 
  bg-purple-500 
  p-4
  flex
  border-b-8
  border-black
  border-opacity-30
  gap-4
  items-center
  justify-between
`;

const icon = `
  h-8 
  sm:hidden 
  text-purple-600 
  hover:text-purple-800
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

const h2 = `
  text-white
  text-sm
  tracking-widest
  text-shadow
`;

const svg = `
  w-8
  h-8
`

const wrap = `
  flex
  flex-row
  items-center
  gap-4
`;

export default Header;
