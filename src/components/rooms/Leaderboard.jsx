/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { displayLeaders, displayWins, getUsers, getWins, orderWins } from '../../services/users';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [winners, setWinners] = useState([])

    useEffect(() => {
        const placeholderFunc = async () => {
            const users = await getUsers();
            const wins = await getWins(users)
            const array = await orderWins(wins)
            const leaders = await displayLeaders(array)
            console.log(leaders)
        }
        return placeholderFunc()
    }, [])

    return <h1>Leaderboard</h1>


}

export default Leaderboard