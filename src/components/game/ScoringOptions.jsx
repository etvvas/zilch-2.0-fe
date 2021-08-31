import React from 'react';

const ScoringOptions = () => {
  return (
    <form className={scoringOptionsForm}>
      <input type="checkbox" id="input1" className="hidden" />
      <label for="input1" className={scoringOption}>1 One: 100 pts</label>

      <input type="checkbox" id="input2" className="hidden" />
      <label for="input2" className={scoringOption}>3 Fives: 300 pts</label>
{/* 
      <input type="checkbox" id="input3" className="hidden" />
      <label for="input3" className={scoringOption}>1 Five: 50 pts</label>

      <input type="checkbox" id="input4" className="hidden" />
      <label for="input4" className={scoringOption}>1 Five: 50 pts</label>

      <input type="checkbox" id="input5" className="hidden" />
      <label for="input5" className={scoringOption}>1 Five: 50 pts</label> */}
    </form>
  )
}

const scoringOptionsForm = `
  flex
  flex-wrap
  flex-col
  sm:flex-row
  gap-2
  sm:gap-4
  justify-center
  p-2
  sm:p-6
  my-4
  bg-gray-200
  rounded-lg
`;

const scoringOption = `
  sm:flex-grow
  py-2
  text-center
  text-purple-500
  text-sm
  font-extrabold
  tracking-wide
  rounded
  border-b-2
  border-gray-300
  bg-white
  select-none
  sm:py-4
`;

export default ScoringOptions;
