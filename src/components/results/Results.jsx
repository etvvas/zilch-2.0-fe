import React from 'react';
import avatars from '../../assets/avatars.svg';
//comment
const Results = ({user1, user2}) => {

  return(
    <>
    <table className={table}>
      <thead>
          <tr>
              <th className={th}></th>
              <th className={th + player}>Player</th>
              <th className={th + rounds}>Rounds</th>
              <th className={th + right}>Zilches</th>
              <th className={th + right}>Uber Zilches</th>
              <th className={th + score + right}>Score</th>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td className={avatar}>
              <svg className={svg}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>
            </td>
              <td className={td + username}>{user1.userName}</td>
              <td className={td + rounds + right}>{user1.numberOfRounds}</td>
              <td className={td + zilches + right}>{user1.playerZilches}</td>
              <td className={td + uberZilches + right}>{user1.playerUberZilches}</td>
              <td className={td + score + right}>{user1.playerScore}</td>
          </tr>
          <tr>
              <td className={td + avatar}>
              <svg className={svg}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>
            </td>
              <td className={td + username}>{user2.userName}</td>
              <td className={td + rounds + right}>{user2.numberOfRounds}</td>
              <td className={td + zilches + right}>{user2.playerZilches}</td>
              <td className={td + uberZilches + right}>{user2.playerUberZilches}</td>
              <td className={td + score + right}>{user2.playerScore}</td>
          </tr>
      </tbody>
    </table>
    </>
  )
}

const svg = `
  hidden
  sm:block
  w-8
  h-8
  md:w-12
  md:h-12
  my-2
  mx-auto
`;

const table = `
  w-full
  rounded-lg
  bg-gray-200
  text-gray-700
  text-xs
  mt-6
  mb-10
`;

const td = `
  px-2
  py-4
  tracking-wider
`;

const th = `
  px-2
  py-4
  tracking-wider
  text-left
  text-gray-600
`;

const player = `
  text-left
`;

const right = `
  text-right
`;

const avatar = `

`;

const username = `
  text-indigo-500
  font-bold
`;
const rounds = `
  hidden
  sm:table-cell
`;
const score = `
  pr-6
`;
const zilches = `

`;
const uberZilches = `

`;

export default Results;
