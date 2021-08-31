import {createContext} from 'react'
import io from 'socket.io-client'
export const SocketContext = createContext();

export default function SocketProvider({children}) {

const socket = io(process.env.REACT_APP_HEROKU_URL)

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}


