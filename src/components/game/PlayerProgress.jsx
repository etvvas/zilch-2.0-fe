import React from 'react';

const PlayerProgress = () => {
  return (
    <div>
      <div class="relative pt-1">
        <div className={stats}>
          <div className={nameOne}>ScrumMast3r</div>
          <div className={scoreOne}>6669</div>
        </div>
        <div class="overflow-hidden h-2 text-xs flex bg-pink-200">
          <div style={{ width: '60%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
        </div>
      </div>
      <div class="relative pt-1">
        <div class="overflow-hidden h-2 text-xs flex bg-purple-200">
          <div style={{ width: '30%' }} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
        </div>
        <div className={stats}>
          <div className={nameTwo}>_UXgUrU_</div>
          <div className={scoreTwo}>420</div>
        </div>
      </div>
      {/* <div className={goalDisplay}>
        <p>Race to <span>6000 pts</span></p>
      </div> */}
    </div>
  )
}

const stats = `
  hidden
  sm:flex
  justify-between
`;

const nameOne = `
  text-xs
  text-pink-500
  italic
`;

const nameTwo = `
  text-xs
  text-purple-500
  italic
`;

const scoreOne = `
  text-xs
  text-right
  text-pink-500
  italic
`;

const scoreTwo = `
  text-xs
  text-right
  text-purple-500
  italic
`;

export default PlayerProgress;
