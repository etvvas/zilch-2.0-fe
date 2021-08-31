import React from 'react';
import avatars from '../../assets/avatars.svg'

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
            <td id="avatar">
              <svg className={svg}>
                <use href={avatars + `#${user1.avatar}`} />
              </svg>
            </td>
              <td id="name">{user1.userName}</td>
              <td id="rounds">{user1.numberOfRounds}</td>
              <td id="score">{user1.playerScore}</td>
              <td id="zilches">{user1.playerZilches}</td>
              <td id="uberzilches">{user1.playerUberZilches}</td>
          </tr>
          <tr>
              <td id="avatar">
              <svg className={svg}>
                <use href={avatars + `#${user2.avatar}`} />
              </svg>
            </td>
              <td id="name">{user2.userName}</td>
              <td id="rounds">{user2.numberOfRounds}</td>
              <td id="score">{user2.playerScore}</td>
              <td id="zilches">{user2.playerZilches}</td>
              <td id="uberzilches">{user2.playerUberZilches}</td>
          </tr>
      </tbody>
    </table>
    </>
  )
}

const svg = `
  w-12
  h-12
  md:w-12
  md:h-12
  my-2
  mx-auto
  border-4
  border-transparent
`;

export default Results;
