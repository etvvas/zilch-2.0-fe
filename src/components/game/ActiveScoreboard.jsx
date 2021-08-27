import React from 'react';

const ActiveScoreboard = () => {

  return (

    <div className={scoreBoard}>
        <div className={currentPlayerBox}>
          <p className={currentPlayer}>Your move, ZilchPlayer420</p>
          <p className={currentPlayerScore}>6669 pts</p>
        </div>
        <table>
          <thead>
            <tr>
              <td>Round</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500</td>
              <td>6669</td>
            </tr>
            <tr>
              <td>500</td>
              <td>6669</td>
            </tr>
            <tr>
              <td>500</td>
              <td>6669</td>
            </tr>
            <tr>
              <td>500</td>
              <td>6669</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

const scoreBoard = `
  grid
  grid-cols-2
`;

const currentPlayerBox = `
  flex
  flex-col
`;

const currentPlayer = `
  text-lg
`;

const currentPlayerScore = `
  text-3xl
`;

export default ActiveScoreboard;
