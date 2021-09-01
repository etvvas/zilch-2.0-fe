/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import { displayLeaders, displayWins, getUsers, getWins, orderWins } from '../../services/users';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const placeholderFunc = async () => {
            const users = await getUsers();
            const wins = await getWins(users)
            const order = await orderWins(wins)
            const leaders = await displayLeaders(order)
            await setLeaderboard(leaders)
            console.log(leaders)
        }
        return placeholderFunc()
    }, [])

    return <h1>leaderboard</h1>
    
}
export default Leaderboard