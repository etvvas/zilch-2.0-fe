import React from 'react';

const GameRoom = () => {

  
  return (
    <div className={wrap}>
      <h1 className={h1}>ScrumMast3r vs _UXgUrU_</h1>

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
    <div className={mainControls}>
      <div className={diceDisplay}>
        <i className={die + 'fa-dice-one'}></i>
        <i className={die + 'fa-dice-two'}></i>
        <i className={die + 'fa-dice-three'}></i>
        <i className={die + 'fa-dice-four'}></i>
        <i className={die + 'fa-dice-five'}></i>
        <i className={die + 'fa-dice-six'}></i>
      </div>
      <div className={diceControls}>
        <button className={diceButton + rollButton}>Roll</button>
        <button className={diceButton + bankButton}>Bank</button>
      </div>
    </div>
    </div>
  )
}

const wrap = `
  max-w-screen-xl
  mx-auto
  p-4
`;

const h1 = `
  text-2xl
  text-center
`;

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

const mainControls = `

`;

const diceDisplay = `
  flex
  gap-2
  justify-between
  my-4
`;

const die = `
  fas
  text-6xl
  text-gray-700
`;

const diceControls = `
  flex
  flex-row
  gap-4
  my-4
`;

const diceButton = `
  py-4
  text-center
  text-white
  w-full
  rounded
`;

const rollButton = `
  bg-indigo-500
`;

const bankButton = `
  bg-green-500
`;

export default GameRoom;
