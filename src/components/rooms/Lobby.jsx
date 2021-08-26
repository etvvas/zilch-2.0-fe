import React from 'react';
import { Link } from 'react-router-dom';

import Room from './Room';


const Lobby = () => {

  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'];


  const roomsElements = rooms.map((room) => (
    
    <li key={room}>
      <Link to={`/lobby/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))

  return (
    <>
      <h1>Zilch lobby</h1>
      <ul className={ul}>
        {roomsElements}
      </ul>
    </>
  )
}

const ul = `
  flex
  flex-wrap
  gap-4
  justify-evenly
  p-10
`;

export default Lobby;
