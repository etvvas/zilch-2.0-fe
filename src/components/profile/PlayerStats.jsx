import React from 'react';

const PlayerStats = ({user, wins, losses, zilches, uberZilches}) => {
  return(
    <>
      <h1 className={h1}>Player Stats</h1>
      <div className={wrap}>

        <div className={outer}>
          <div className={inner}>
            <div className={stat + 'text-green-500'}>
              {wins}
            </div>
            <div className={label}>
              Wins
            </div>
          </div>
          <div className={inner}>
            <div className={stat + 'text-pink-500'}>
            {losses}
            </div>
            <div className={label}>
              Losses
            </div>
          </div>
          <div className={inner}>
            <div className={stat + 'text-blue-500'}>
            {zilches}
            </div>
            <div className={label}>
              Zilches
            </div>
          </div>
          <div className={inner}>
            <div className={stat + 'text-purple-500'}>
            {uberZilches}
            </div>
            <div className={label}>
              UberZilches
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const wrap = `
  bg-gray-100
  rounded-lg
  p-4
  mt-2
  mb-6
`;

const outer = `
  grid
  grid-cols-4
`;

const inner = `
  flex
  flex-col
  items-center
`;

const h1 = `
  text-sm
  text-gray-600
  sm:text-lg
  font-semibold
`;

const stat = `
  text-xl
  sm:text-4xl
  font-semibold
`;

const label = `
  text-xs
  text-gray-500
  tracking-wide
  font-semibold
`;

export default PlayerStats;
