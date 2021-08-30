import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSetLoading, useVerificationLoading } from '../../state/SessionProvider';
import { SocketContext } from '../../state/SocketProvider';

import Room from './Room';
const rooms = [{roomName: 'Room1'}, {roomName: 'Room2'}, {roomName: 'Room3'}, {roomName: 'Room4'}, {roomName: 'Room5'}, {roomName: 'Room6'}];

const Lobby = () => {
  const socket = useContext(SocketContext)
  const [gameRooms, setGameRooms] = useState(rooms)
  const loading = useVerificationLoading()
  const setLoading = useSetLoading()
  useEffect(() => {
    setLoading(true)
    socket.on('UPDATE_LOBBY', (socketRooms) => {
      // console.log('Socket Rooms', socketRooms);
        const updatedRooms = rooms.map(room => {
          // console.log('socket room', socketRooms[0][room.roomName]?.roomName);
        let newRoom;
        const match = socketRooms.find(item => item[room.roomName]?.roomName === room.roomName) 
        match ? newRoom = match[room.roomName] : newRoom = room
        return newRoom
      })
      // filter again
     setGameRooms(updatedRooms)
    // setTimeout(() => setLoading(false), 1000)
    
  }, [])
  
  //   [
    //     {
      //         "Room1": {
        //             "ready": [],
        //             "currentPlayerIndex": 0,
        //             "players": [
          //                 "1"
          //             ],
          //             "roomName": "Room1",
          //             "rounds": 0,
          //             "targetScore": 5000,
          //             "firstUser": {
            //                 "userName": "user1",
            //                 "userId": "1",
            //                 "avatar": "dog",
            //                 "gameId": "",
            //                 "numberOfRound": 0,
            //                 "playerScore": 0,
            //                 "playerZilches": 0,
            //                 "playerUberZilches": 0
            //             }
            //         }
            //     }
            // ]
            //
            // Loading long enough to see spinning dice 
            // 

           setTimeout(() => setLoading(false),500) 
            return () => {
              socket.removeListener('UPDATE_LOBBY')
              socket.emit('DISCONNECT')
    }
  }, [])

  // useEffect(() => {

  // }, [lobby])

  // need to took in the lobby data to see if there is data that exists for the room
  // regardless of whether there is or isn't data, we need to pass a prop down
 
  const roomsElements = gameRooms.map((room) => (
    
    <li  key={room.roomName} className={li}>
      <Link to={`/lobby/${room.roomName}`}>
        <Room {...room} />
      </Link>
    </li>
))
  
if(loading) return <h1>LOADING</h1>

  return (
    <div className={wrap}>
      <h1 className={h1}>Zilch Lobby</h1>
      <ul className={ul}>
        {roomsElements}
      </ul>
    </div>
  )
}

const wrap = `
  max-w-screen-xl
  mx-auto
`;

const h1 = `
  text-4xl
  text-center
  mt-10
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
