import React, { useEffect } from 'react';
import { getUserById } from '../../utils/profile';

const GameHistory = ({games}) => {
  console.log('games', games)

  useEffect(() => {
    // fetch by id (user1, user2)
      //render username and avatar
    // fetch results by gameId
      // compare games to userId && gameId
    // fetch zilches by gameId
      // compare games to userId && gameId
    // fetch uberzilches by gameId
      // compare games to userId && gameId
  })
 


  const gameHistory = games.map(async (game, i)=> {
    const user1 = await getUserById(game.firstUserId)
    const user2 = await getUserById(game.secondUserId)
    
    return (
      <li key={i}>
        
      </li>
    )
  })


  return(
    <>
    <h1>Game History</h1>
    </>
  )
}

export default GameHistory;
