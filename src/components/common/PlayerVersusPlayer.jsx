import React from 'react';
import avatars from '../../assets/avatars.svg';

const PlayerVersusPlayer = ({results, user1, user2, room, winner, ready}) => {
  // console.log('user1', user1)
  // console.log('user2', user2)
  const avatar = 'dice';

  // const [ready1, setReady1] = useState(false);
  // const [ready2, setReady2] = useState(false);

  // console.log('ready', ready)
  // console.log('user1', user1)
  // const avatar = 'dice';
  // useEffect(()=> {
  //   if(ready.includes(user1.userId)) setReady1(true);
  //   if(ready.includes(user2.userId)) setReady2(true);
  // },[ready])

  // console.log('ready1', ready1)
  // console.log('ready2', ready2)

  return (
    <>
      <div className={outerWrap}>
        
        </div>
        {winner
        ? <h1 className={h1}><span className={span}>{winner}</span> wins!</h1>
        : <h3 className={h3}>{room} Room</h3>
        }
        <div className={innerWrap}>
          <div className={side}>
            {user1 
            ? (<>
              <svg className={svg + winning}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>
              <p className={playerName + playerOne}>{user1.userName}</p>
              </>)
            : (<>
            <div className={side}>
              <svg className={noPlayerSvg}>
                <use href={avatars + `#${avatar}`} />
              <p className={playerName + playerTwo}>Waiting..</p>
              </svg>
            </div>
            </>)
            }
            <div className={readyDisplay}>READY!</div>
          </div>
          <div className={vs}>
            vs
          </div>
          <div className={side}>
          {user2 
          ? (<>
              <svg className={svg}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>
              <p className={playerName + playerTwo}>{user2.userName}</p>
            </>)
          :(<>
            <div className={side}>
              <svg className={noPlayerSvg}>
                <use href={avatars + `#${avatar}`} />
              </svg>
              <p className={playerName + playerTwo}>Waiting</p>
            </div>
          </>)
          }
          <div className={readyDisplay}>READY!</div>
        </div>
      </div>
    </>
  )
}


const h1 = `
  text-3xl
  sm:text-4xl
  text-center
  mt-4
  mb-4
  sm:mb-8
`;

const span = `
  font-black
  text-indigo-500
`;

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
  md:w-32
  md:h-32
  my-2
  mx-auto
`;

const noPlayerSvg = `
  w-20
  h-20
  md:w-32
  md:h-32
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

const readyDisplay = `
  text-center
  text-green-500
  font-bold
  mt-4
`;

export default PlayerVersusPlayer;
