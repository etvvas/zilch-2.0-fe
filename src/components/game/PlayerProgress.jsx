import React from 'react';

const PlayerProgress = () => {
  return (
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
  )
}

const progressDisplay = `

`;

const goalDisplay = `

`;

export default PlayerProgress;
