import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSetLoading, useVerificationLoading } from '../../state/SessionProvider';
import { SocketContext } from '../../state/SocketProvider';
import rooms from '../../roomData.js'
import Room from './Room';


const Lobby = () => {
  const socket = useContext(SocketContext)
  const [gameRooms, setGameRooms] = useState(rooms)

  const loading = useVerificationLoading()
  const setLoading = useSetLoading()
  useEffect(() => {
    
    setLoading(true)
    socket.on('UPDATE_LOBBY', (socketRooms) => {

        const updatedRooms = rooms.map(room => {
        let newRoom;
        const match = socketRooms.find(item => item[room.roomName]?.roomName === room.roomName) 
        match ? newRoom = match[room.roomName] : newRoom = room
        return newRoom
      })
      
     setGameRooms(updatedRooms)
    })
    socket.on("connect", () => {
      console.log('LOBBY CONNECTED');
    });
    socket.on("disconnect", (reason) => {
      console.log('LOBBY', reason);
    });
    return () => {
      socket.removeListener('UPDATE_LOBBY')
      socket.emit('DISCONNECT')
    }
  }, [])

const handleClick = () => {
  socket.emit('DISCONNECT')
}

  const roomsElements = gameRooms.map((room) => (
    
    <li  key={room.roomName} className={li}>
      <Link 
      onClick={handleClick}
      to={`/lobby/${room.roomName}`}>
        <Room {...room}/>
      </Link>
    </li>
))

console.log(gameRooms)

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
  sm:px-4
`;

const wrap = `
  max-w-screen-lg
  sm:mx-auto
  bg-white
  rounded-xl
  sm:my-12
  sm:py-12
`;

const h1 = `
  text-xl
  sm:text-4xl
  text-center
  mt-6
`;

const span = `
  font-black
  text-indigo-500
`;

const ul = `
  flex
  flex-wrap
  justify-evenly
  sm:justify-start
  p-4
  md:p-12
`;


const li = `
  w-full
  p-2
  sm:w-1/2
  lg:w-1/3
`;

export default Lobby;
