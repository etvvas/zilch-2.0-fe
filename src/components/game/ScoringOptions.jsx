import React from "react";
import { useSession } from "../../state/SessionProvider";

const ScoringOptions = ({ scoringOptions, currentPlayer, onChange, isZilch }) => {
  const session = useSession();

  return (
  <>
    {isZilch
     ?
    <div className="zilch animate"> Zilch! </div>
    :
    <form className={scoringOptionsForm}>
      {scoringOptions.map((option, i) => {
        if(option.choice === 'ZILCH') return null;
        return (
          <>
            <input
              checked={scoringOptions[i].selected}
              onChange={onChange}
              disabled={currentPlayer !== session.userId ? "disabled" : ""}
              type="checkbox"
              id={`input${(i + 1).toString()}`}
              className="hidden"
              value={JSON.stringify(option)}
            />
            <label htmlFor={`input${(i + 1).toString()}`} className={scoringOption}>
              {option.choice}
            </label>
          </>
        );
      })}
    </form>
}
    </>
  );
};

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
