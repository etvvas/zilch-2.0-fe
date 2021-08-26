import React from 'react';
import avatars from '../../assets/avatars.svg';

const Avatars = ({onChange}) => {
  return (
    <>
      <h3 className="text-sm font-bold mt-10 uppercase">Choose an avatar</h3>
      <div className="flex flex-wrap gap-4 justify-center my-10">
        <label>
          <input type="radio" name="avatar" className="hidden" defaultChecked value="bear" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#bear'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="dog" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#dog'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="polarBear" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#polar-bear'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="pufferFish" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#puffer-fish'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="dogOne"
          onChange={onChange}
           />
          <svg className={svg}>
            <use href={avatars + '#dog-1'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="weasel" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#weasel'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="giraffe" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#giraffe'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="cobra" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#cobra'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="cow" 
            onChange={onChange}
          />
          <svg className={svg}>
            <use href={avatars + '#cow'} />
          </svg>
        </label>
      </div>
    </>
  )
}

const svg = `
  w-24
  h-24
  border-8
  border-gray-100
  rounded-full 
`;

export default Avatars;
