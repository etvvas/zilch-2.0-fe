import React from "react";
import { useSession } from "../../state/SessionProvider";

const ScoringOptions = ({ scoringOptions, currentPlayer, onChange, isZilch, isFreeRoll, rollDisabled, bankDisabled }) => {
  const session = useSession();
  let message = null;

  if(isZilch && session.userId !== currentPlayer && !isFreeRoll){
    message = 'Oof. You lost your turn!'
  }

  if(isZilch && session.userId === currentPlayer){
    message = 'Roll the dice to start your turn.'
  }

  if(isZilch && session.userId !== currentPlayer && isFreeRoll){
    message = 'Your opponent got a free roll! Womp womp.'
  }
  
  if(!isZilch && session.userId === currentPlayer && !rollDisabled && !scoringOptions[1]){
      message = 'Roll the dice.'
    }
  
  if(!isZilch && session.userId === currentPlayer && !rollDisabled && !scoringOptions[1] && !bankDisabled){
      message = 'Roll the dice or bank your points.'
    }

  if(!isZilch && session.userId === currentPlayer && scoringOptions[0] && scoringOptions[0].choice !== 'ZILCH' && !rollDisabled){
    message = 'Roll the dice or score some points.'
  }
  
  if(!isZilch && session.userId === currentPlayer && scoringOptions[0] && scoringOptions[0].choice !== 'ZILCH' && bankDisabled && !rollDisabled){
    message = 'Roll the dice or score more points.'
  }
  
  if(!isZilch && session.userId === currentPlayer && scoringOptions[0] && scoringOptions[0].choice !== 'ZILCH' && rollDisabled){
    message = 'Score some points.'
  }

  if(!isZilch && session.userId === currentPlayer && scoringOptions[0] && scoringOptions[0].choice !== 'ZILCH' && !bankDisabled){
    message = 'Score some points or bank.'
  }
  
  if(!isZilch && session.userId === currentPlayer && scoringOptions[0] && scoringOptions[0].choice !== 'ZILCH' && !rollDisabled && !bankDisabled){
    message = 'Roll, score, or bank!'
  }

  if(!isZilch && session.userId !== currentPlayer){
    message = 'Your opponent is thinking...'
  }

  return (
  <>
    <div className={isZilch ? 'zilch animate' : 'zilch'}> Zilch! </div>
    <form className={scoringOptionsForm}>
      <div className={messageDiv}>{message}</div>

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

const messageDiv = `
  w-full
  text-center
  text-sm
  text-gray-600
  font-semibold
  sm:text-base
`;

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
  bg-gray-200
  rounded-lg
  scoring-form
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
