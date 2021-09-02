import React, {useEffect} from 'react';
import avatars from '../../assets/avatars.svg';

const Room = ({roomName, currentPlayerIndex, players, firstUser, secondUser, isGameStarted }) => {

  return (
    <>
      <div className={outerWrap}>
        <div className={title}>
          <h3 className={h3}>{roomName}</h3>
          <div className={goal}>5000 pts</div>
        </div>
        <div className={innerWrap}>
          <div className={side}>
            <p className={playerName}>{firstUser?.userName ? firstUser.userName : 'Open'}</p>
            {firstUser ?
            <svg className={svg + `${(players[currentPlayerIndex] === firstUser.userId) ? currentTurn : null }`}>
              <use href={avatars + `#${firstUser.avatar}`} />
            </svg>
            :
            <svg className={noPlayerSvg}>
              <use href={avatars + `#${'dice'}`} />
            </svg>
            }
            <p className={
              firstUser?.playerScore || firstUser?.playerScore === 0 ? score : score + 'opacity-0'
            }>{firstUser?.playerScore || firstUser?.playerScore === 0 ? firstUser.playerScore : '0'}</p>
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName}>{secondUser?.userName ? secondUser.userName : 'Open'}</p>
            {secondUser ?
            <svg className={svg + `${(players[currentPlayerIndex] === secondUser.userId) ? currentTurn : null }`}>
              <use href={avatars + `#${secondUser.avatar}`} />
            </svg>
            :
            <svg className={noPlayerSvg}>
              <use href={avatars + `#${'dice'}`} />
            </svg>
            }
            <p className={score}>{secondUser?.playerScore || secondUser?.playerScore === 0 ? secondUser.playerScore : null}</p>
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

  transition
  duration-300
  ease-in-out
  transform
  hover:scale-105
`;

const h3 = `
  text-lg
  text-center
  font-bold
  text-gray-300
  tracking-wider
`;

const title = `
  flex
  flex-row
  justify-between
  items-center
  py-2
  px-4
  rounded-t-lg
  bg-gray-700
`;

const goal = `
  text-sm
  text-gray-400
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

const currentTurn = `
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

const noPlayerSvg = `
  w-20
  h-20
  md:w-20
  md:h-20
  my-2
  mx-auto
  filter
  grayscale
`;

const span = `
  font-light
  tracking-normal
  text-sm
`;

export default Room;
