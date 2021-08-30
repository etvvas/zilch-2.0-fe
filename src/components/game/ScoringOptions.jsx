import React, { useState } from 'react';
import { useSession } from '../../state/SessionProvider';

const ScoringOptions = ({scoringOptions, currentPlayer}) => {
  const session = useSession();
  const [selectedScoringOption, setSelectedScoringOption] = useState([])
  // scoringOptiong structure
  // {"score":600,"choice":"3 6s: Score: 600","dice":[{"held":false,"value":6},{"held":false,"value":6},{"held":false,"value":6}]}

  // need to clear selected inputs when turn ends
  const handleChange = ({target}) => {
    const updatedState = [...selectedScoringOption]
    const matchIndex = updatedState.findIndex(option => option.score === JSON.parse(target.value).score)
    if(matchIndex !== -1) {
      updatedState.splice(matchIndex, 1)
      setSelectedScoringOption(updatedState)
    } else {
      setSelectedScoringOption(prevState => [...prevState, JSON.parse(target.value)])
    }
        
  }
  return (
    <form className={scoringOptionsForm}>
      {  scoringOptions.map((option, i) => (
        <>
          <input 
          onChange={handleChange}
          disabled={currentPlayer !== session.userId ? "disabled" : ""} type="checkbox" id={`input${(i+1).toString()}`} className="hidden" value={JSON.stringify(option)} />
          <label for={`input${(i+1).toString()}`}  className={scoringOption}>{option.choice}</label>
        </>
      ))
      }
    </form>
  )
}

const scoringOptionsForm = `
  flex
  flex-wrap
  gap-2
  sm:gap-4
  justify-center
  p-6
  my-4
  bg-gray-200
  rounded-lg
`;

const scoringOption = `
  flex-grow
  py-4
  text-center
  text-purple-500
  text-sm
  font-extrabold
  tracking-wide
  rounded
  border-b-2
  border-gray-300
  bg-white
  w-1/3
  select-none
`;

export default ScoringOptions;

//  original code
// <input type="checkbox" id="input1" className="hidden" />
// <label for="input1" className={scoringOption}>1 On100 pts</labe
// <input type="checkbox" id="input2" className="hidden" />
// <label for="input2" className={scoringOption}>3 Five300 pts</labe
// <input type="checkbox" id="input3" className="hidden" />
// <label for="input3" className={scoringOption}>1 Fiv50 pts</labe
// <input type="checkbox" id="input4" className="hidden" />
// <label for="input4" className={scoringOption}>1 Fiv50 pts</labe
// <input type="checkbox" id="input5" className="hidden" />
// <label for="input5" className={scoringOption}>1 Fiv50 pts</label>
