import React from 'react';
import avatars from '../../assets/avatars.svg';

const PlayerVersusPlayer = ({results, user1, user2, room}) => {
  console.log('user1', user1)
  console.log('user2', user2)
  const avatar = 'dice';
  // add conditional styling (noPlayerSvg) if player does not exist
console.log('results', results)
  return (
    <>
      <div className={outerWrap}>
        <h3 className={h3}>{room} Room</h3>
        </div>
        <div className={innerWrap}>
          <div className={side}>
            {user1 
            ? (<>
              <p className={playerName + playerOne}>{user1.userName}</p>
              <svg className={svg + winning}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>
              </>)
            : (<>
            <div className={side}>
              <p className={playerName + playerTwo}>Waiting..</p>
              <svg className={noPlayerSvg}>
                <use href={avatars + `#${avatar}`} />
              </svg>
            </div>
            </>)
            }
          </div>
          <div className={vs}>
            vs
          </div>
          {user2 
          ? (<>
            <div className={side}>
              <p className={playerName + playerTwo}>{user2.userName}</p>
              <svg className={svg}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>
            </div>
            </>)
          :(<>
            <div className={side}>
              <p className={playerName + playerTwo}>Waiting..</p>
              <svg className={noPlayerSvg}>
                <use href={avatars + `#${avatar}`} />
              </svg>
            </div>
            </>)
          }
        </div>
    </>
  )
}

const outerWrap = `
  flex
  flex-grow
  flex-col
  rounded-lg
  w-full
`;

const h3 = `
  text-2xl
  text-center
  p-2
  text-indigo-500
  font-bold
  tracking-wide
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
  font-semibold
  italic
  tracking-wider
  truncate
  font-bold
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
  md:w-12
  md:h-12
  my-2
  mx-auto
`;

const noPlayerSvg = `
  w-20
  h-20
  md:w-12
  md:h-12
  my-2
  mx-auto
  filter
  grayscale
`;

const playerOne = `
  text-purple-500
`;

const playerTwo = `
  text-pink-500
`;

export default PlayerVersusPlayer;
