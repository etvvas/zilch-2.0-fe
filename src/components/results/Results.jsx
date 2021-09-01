import React from 'react';
import avatars from '../../assets/avatars.svg';

const Results = ({user1, user2}) => {

  return(
    <>
    <h1>Results</h1>
    <table>
      <thead>
          <tr>
              <td>Player</td>
              <td>Rounds</td>
              <td>Score</td>
              <td>Zilches</td>
              <td>Uber Zilches</td>
          </tr>
      </thead>
      <tbody>
          <tr>
            <td className={avatar}>
              <svg className={svg}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>
            </td>
              <td className={username}>{user1.userName}</td>
              <td className={rounds}>{user1.numberOfRounds}</td>
              <td className={score}>{user1.playerScore}</td>
              <td className={zilches}>{user1.playerZilches}</td>
              <td className={uberZilches}>{user1.playerUberZilches}</td>
          </tr>
          <tr>
              <td className={avatar}>
              <svg className={svg}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>
            </td>
              <td className={username}>{user2.userName}</td>
              <td className={rounds}>{user2.numberOfRounds}</td>
              <td className={score}>{user2.playerScore}</td>
              <td className={zilches}>{user2.playerZilches}</td>
              <td className={uberZilches}>{user2.playerUberZilches}</td>
          </tr>
      </tbody>
    </table>
    </>
  )
}

const svg = `
  w-20
  h-20
  md:w-12
  md:h-12
  my-2
  mx-auto
`;

const avatar = `

`;
const username = `

`;
const rounds = `

`;
const score = `

`;
const zilches = `

`;
const uberZilches = `

`;

export default Results;
