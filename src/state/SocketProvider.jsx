import {createContext} from 'react'
import io from 'socket.io-client'
import dotenv from 'dotenv';
// const SocketContext = createContext();

// export default function SocketProvider({children}) {
// const socket = io('http://localhost:7890')
//     // return (
//     //     <SocketContext.Provider value={{socket}}>
//     //         {children}
//     //     </SocketContext.Provider>
//     // )
// }

export const socket = io(process.env.REACT_APP_HEROKU_URL)

export const SocketContext = createContext()
