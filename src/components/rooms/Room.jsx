import React from 'react';
import avatars from '../../assets/avatars.svg';

const Room = ({roomName, firstUser, secondUser, }) => {
  // console.log(props);
  const avatar = 'polar-bear';
//   {
//     "ready": [],
//     "currentPlayerIndex": 0,
//     "players": [
//         "2"
//     ],
//     "roomName": "Room1",
//     "rounds": 0,
//     "targetScore": 5000,
//     "firstUser": {
//         "userName": "user2",
//         "userId": "2",
//         "avatar": "dog",
//         "gameId": "",
//         "numberOfRound": 0,
//         "playerScore": 0,
//         "playerZilches": 0,
//         "playerUberZilches": 0
//     }
// }
  return (
    <>
      <div className={outerWrap}>
        <h3 className={h3}>{roomName}</h3>
        <div className={innerWrap}>
          <div className={side}>
            <p className={playerName}>{firstUser?.userName ? firstUser.userName : 'Player One'}</p>
            <svg className={svg + winning}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>{firstUser?.playerScore ? firstUser.playerScore : '0'}</p>
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName}>{secondUser?.userName ? secondUser.userName : 'Player One'}</p>
            <svg className={svg}>
              <use href={avatars + `#${avatar}`} />
            </svg>
            <p className={score}>{secondUser?.playerScore ? secondUser.playerScore : '0'}</p>
          </div>

        </div>
      </div>
    </>
  )
}

const outerWrap = `
  flex
  flex-grow
  flex-col
  bg-gray-800
  text-purple-100
  rounded-lg
`;

const h3 = `
  text-lg
  text-center
  bg-gray-700
  p-2
  text-gray-300
  tracking-wider
  rounded-t-lg
`;

const innerWrap = `
  flex
  py-6
  px-10
  gap-6
  justify-center
`;

const side = `
  w-28
  md:max-w-32
`;

const playerName = `
  text-center
  text-sm
  text-green-300
  font-semibold
  italic
  tracking-wider
  truncate
`;

const winning = `
  border-purple-400
  rounded-full
`;

const vs = `
  text-4xl
  font-light
  self-center
`;

const svg = `
  w-20
  h-20
  md:w-20
  md:h-20
  my-2
  mx-auto
  border-4
  border-transparent
`;

const score = `
  text-center
  text-sm
  text-gray-400
`;

export default Room;
