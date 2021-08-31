import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import avatars from '../../assets/avatars.svg';
import Navigation from './Navigation';

const Header = () => {
  const user = 'ZilchPlayer420';
  const avatar = 'cobra';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={outerWrap}>
        <header className={header}>
          <div className={wrap}>
            <button className={button} onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className={
                isOpen
                  ? icon + 'text-green-400 hover:text-green-200'
                  : icon + 'text-purple-800 hover:text-purple-600'} />
            </button>
            <h1 className={h1}>Zilch 2.0</h1>
          </div>
          <div className={wrap}>
            <h2 className={h2}>{user}</h2>
              <svg className={svg}>
                <use href={avatars + `#${avatar}`} />
              </svg>
          </div>
        </header>
      </div>

      <Navigation isOpen={isOpen} />
    </>
  )
}

const header = `
  p-2
  flex
  gap-4
  items-center
  justify-between
  max-w-screen-xl
  mx-auto
`;

const outerWrap = `
  border-b-8
  border-black
  border-opacity-30
  bg-gradient-to-r
  from-purple-500
  to-purple-800
`;

const button = `
  sm:hidden
`;

const icon = `
  sm:hidden 
  w-8
`;

const h1 = `
  text-purple-100
  font-bold
  text-xl
  zilch
`;

const h2 = `
  hidden
  text-purple-200
  text-sm
  tracking-widest
  text-shadow
  sm:block
`;

const svg = `
  w-8
  h-8
  border-4
  border-black
  border-opacity-10
  rounded-full
`

const wrap = `
  flex
  flex-row
  items-center
  gap-4
  sm:gap-2
`;

export default Header;
