import React from "react";
import { useSession } from "../../state/SessionProvider";

const ScoringOptions = ({ scoringOptions, currentPlayer, onChange, isZilch }) => {
  const session = useSession();

  return (
  <>
    <div className={isZilch ? 'zilch animate' : 'zilch'}> Zilch! </div>
    <form className={scoringOptionsForm}>

      {/* CASE: Zilch */}
      {/* <div className={message}>Oof. Lose a turn.</div> */}

      {/* CASE: User has selected all options and form is blank. */}
      {/* <div className={message}>Roll remaining dice or bank your points.</div> */}

      {/* CASE: Before first roll of turn */}
      {/* <div className={message}>PlayerName, roll the dice to start your turn.</div> */}

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
  scoring-form
`;

const message = `
  text-center
  text-sm
  text-gray-700
  font-semibold
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
