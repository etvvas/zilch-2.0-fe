import React, { useEffect, useState } from 'react';
import { getUserById } from '../../utils/profile';
import avatars from '../../assets/avatars.svg'

const GameHistory = ({games}) => {
  console.log('games', games)
  const avatar = 'dice'
  // const [user1, setUser1] = useState({})
  // const [user2, setUser2] = useState({})

  // useEffect(() => {
    // fetch by id (user1, user2)
    //   render username and avatar
    // getUserById(game.firstUserId).then(setUser1)
    // getUserById(game.secondUserId).then(setUser2)
    // fetch results by gameId
    //   compare games to userId && gameId
    // fetch zilches by gameId
    //   compare games to userId && gameId
    // fetch uberzilches by gameId
    //   compare games to userId && gameId
  // })
 
  return(
    <>
    <h1>Game History</h1>
    {/* {gameHistory} */}
      <li>
        <div className={wrapper}>
          <div className={user1}>
            <div className={userInfo}>
              <span className={user1Name}>username</span>
              <div className={stats}>
                <h1 className={stat}>score: 0</h1>
                <h2 className={stat}>zilches: 0</h2>
                <h2 className={stat}>uberZilches: 0</h2>
              </div>
            </div>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
          </div>
          <div class={result}>
            WIN
          </div>
          <div className={user2}>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <div className={userInfo}>
              <h1 className={user2Name}>username</h1>
              <div className={stats}>
                <h1 className={stat}>score: 0</h1>
                <h2 className={stat}>zilches: 0</h2>
                <h2 className={stat}>uberZilches: 0</h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

const wrapper = `
  flex
  border
`;

const user1 = `
flex
justify-center
items-center
m-2
`;

const user2 = `
flex
justify-center
items-center
m-2
`;

const userInfo = `
flex
flex-col
`;

const user1Name = `
text-right
m-1
`;

const user2Name = `
m-1
`;

const svg = `
  w-20
  h-20
`;

const stats = `
  flex
`;

const stat = `
  m-1
`;

const result = `
  flex
  justify-center
  items-center
  p-2
`;


export default GameHistory;
