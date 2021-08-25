import React from 'react';
import avatars from '../../assets/avatars.svg';

const Avatars = () => {
  return (
    <>
      <h3 className="text-sm font-bold mt-10 uppercase">Choose an avatar</h3>
      <div className="flex flex-wrap gap-4 justify-center my-10">
        <svg className={svg}>
          <use href={avatars + '#bear'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#dog'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#polar-bear'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#puffer-fish'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#dog-1'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#weasel'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#giraffe'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#cobra'} />
        </svg>
        <svg className={svg}>
          <use href={avatars + '#cow'} />
        </svg>
      </div>
    </>
  )
}

const svg = `
  w-20
  h-20
`;

export default Avatars;
