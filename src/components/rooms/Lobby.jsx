import React from 'react';
import { Link } from 'react-router-dom';

import Room from './Room';

const Lobby = () => {

  const rooms = ['Vibranium', 'Gold', 'Xenon', 'Mythril', 'Titanium', 'Adamantium'];


  const roomsElements = rooms.map((room) => (
    
    <li key={room} className={li}>
      <Link to={`/lobby/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))
  

  return (
    <div className={outer}>
      <div className={wrap}>
        <h1 className={h1}><span className={span}>Zilch 2.0</span> Lobby</h1>
        <ul className={ul}>
          {roomsElements}
        </ul>
      </div>
    </div>
  )
}

const outer = `
  flex
  flex-col
`;

const wrap = `
  max-w-screen-xl
  mx-auto
  bg-white
  rounded-xl
  sm:my-12
  sm:py-12
`;

const h1 = `
  text-4xl
  text-center
  mt-4
`;

const span = `
  font-black
  text-indigo-500
`;

const ul = `
  flex
  flex-wrap
  justify-evenly
  p-4
  md:p-10
`;

const li = `
  w-full
  p-2
  sm:w-1/2
  lg:w-1/3
`;

export default Lobby;
