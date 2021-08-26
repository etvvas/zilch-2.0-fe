import React, {useContext, createContext} from 'react'
import io from 'socket.io-client'
// const SocketContext = createContext();

// export default function SocketProvider({children}) {
// const socket = io('http://localhost:7890')
//     // return (
//     //     <SocketContext.Provider value={{socket}}>
//     //         {children}
//     //     </SocketContext.Provider>
//     // )
// }

export const socket = io('https://zilch-v2-staging.herokuapp.com')

export const SocketContext = createContext()
