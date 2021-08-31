/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { getUsers, getWins } from '../../services/users';

const Leaderboard = () => {
    // const [users, setUsers] = useState([]);
    // const [winners, setWinners] = useState([])

    useEffect(async () => {
        const users = await getUsers();
        console.log(users)
        const wins = await getWins(users)
        console.log(wins)
    }, [])

    return <h1>LEADERBOARD</h1>


}

export default Leaderboard