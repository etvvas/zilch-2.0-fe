import {useState} from 'react'

const useLobby = () => {
const [lobby, setLobby] = useState([])

return {lobby, setLobby}
}


export default useLobby