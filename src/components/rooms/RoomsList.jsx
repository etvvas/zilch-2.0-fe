import React from 'react';
import { Link } from 'react-router-dom';
import Room from './Room';

const RoomsList = () => {

  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'];

  const roomsElements = rooms.map((room) => (
    <li key={room}>
      <Link to={`/rooms/${room}`}>
        <Room room={room} />
      </Link>
    </li>
  ))

  return (
    <ul>
      {roomsElements}
    </ul>
  )
}

export default RoomsList;
