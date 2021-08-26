import React from 'react';

const RoomsList = () => {

  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6'];

  const roomsElements = rooms.map((room) => (
    <li key={room}>
      {room}
    </li>
  ))

  return (
    <ul>
      {roomsElements}
    </ul>
  )
}

export default RoomsList;
