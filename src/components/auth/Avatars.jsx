import React from 'react';
import avatars from '../../assets/avatars.svg';

const Avatars = () => {
  return (
    <>
      <h3 className="text-sm font-bold mt-10 uppercase">Choose an avatar</h3>
      <div className="flex flex-wrap gap-4 justify-center my-10">
        <label>
          <input type="radio" name="avatar" className="hidden" defaultChecked value="bear" />
          <svg className={svg}>
            <use href={avatars + '#bear'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="dog" />
          <svg className={svg}>
            <use href={avatars + '#dog'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="polarBear" />
          <svg className={svg}>
            <use href={avatars + '#polar-bear'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="pufferFish" />
          <svg className={svg}>
            <use href={avatars + '#puffer-fish'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="dogOne" />
          <svg className={svg}>
            <use href={avatars + '#dog-1'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="weasel" />
          <svg className={svg}>
            <use href={avatars + '#weasel'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="giraffe" />
          <svg className={svg}>
            <use href={avatars + '#giraffe'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="cobra" />
          <svg className={svg}>
            <use href={avatars + '#cobra'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" className="hidden" value="cow" />
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
