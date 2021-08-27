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
          <button className={button + rollButton}>Roll</button>
          <button className={button + bankButton}>Bank</button>
        </div>
      </div>
      <div className={scoringOptionsDisplay}>
        <button className={button + scoringButton}>1 One: 100 pts</button>
        <button className={button + scoringButton}>3 Fives: 300 pts</button>
        <button className={button + scoringButton}>1 Five: 50 pts</button>
        <button className={button + scoringButton}>1 Five: 50 pts</button>
      </div>
      <div className={progressDisplay}>
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-2 text-xs flex rounded bg-purple-200">
          </div>
        </div>
        <div class="relative pt-1">
          <div class="overflow-hidden h-2 mb-2 text-xs flex rounded bg-blue-200">
            <div style={{ width: '30%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
        <div className={goalDisplay}>
          <p>Race to <span>6000 pts</span></p>
        </div>
      </div>
    </div>
  )
}

const wrap = `
  max-w-screen-sm
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

const button = `
  py-4
  text-center
  w-full
  rounded
`;

const rollButton = `
  bg-indigo-500
  text-white
`;

const bankButton = `
  bg-green-500
  text-white
`;

const scoringOptionsDisplay = `
  flex
  flex-wrap
  gap-4
`;

const scoringButton = `
  border
  w-1/2
`;

const progressDisplay = `

`;

const goalDisplay = `

`;

export default GameRoom;
