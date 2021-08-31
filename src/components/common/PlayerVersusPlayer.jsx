import React from 'react';
import avatars from '../../assets/avatars.svg';

const PlayerVersusPlayer = ({user1, user2, room, results}) => {
  room = 'Titanium';
  const avatar = 'dice';
  const winner = user1.userName

  return (
    <>
      <div className={outerWrap}>
        {results
          ? <h2>{winner} WINS!</h2>
          : <h3 className={h3}>{room}</h3>
        }
        <div className={innerWrap}>
          <div className={side}>
            <p className={playerName}>{user1.userName}</p>
            {user1 
            ? (<svg className={svg + winning}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>)
            : (<svg className={noPlayerSvg + winning}>
                <use href={avatars + `#${avatar}`} />
              </svg>)
            }
            {!results  
              ? <p className={ready}>Ready!</p>
              : null
            }
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
            <p className={playerName}>{user2.userName}</p>
            {user2 
            ? (<svg className={svg + winning}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>)
            : (<svg className={noPlayerSvg + winning}>
                <use href={avatars + `#${avatar}`} />
              </svg>)
            }
            {!results  
              ? <p className={ready}>Ready!</p>
              : null
            }
          </div>
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

const ready = `
  font-bold
  text-green-500
  text-center
  tracking-wide
`;

const playerOne = `
  text-purple-500
`;

const playerTwo = `
  text-pink-500
`;

export default PlayerVersusPlayer;
