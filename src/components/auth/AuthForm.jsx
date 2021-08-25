import React from 'react';
import avatars from '../../assets/avatars.svg';

const AuthForm = () => {

  return (
    <div className={wrap}>

      {/* Toggle text Log in / Sign up */}
      <h1 className={h1}>Log in</h1>
      
      <form className={form}>


        

        {/* Log in */}
        <label className={label}>
          <span className={span}>Username</span>
          <input 
            className={input}
            placeholder="Username" />
        </label>
        <label className={label}>
          <span className={span}>Password</span>
          <input 
            className={input}
            placeholder="Password" />
        </label>

        {/* Sign up && */}
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

        {/* Toggle text Log in / Sign up */}
        <button className={button}>Log in</button>
      </form>

      <div className="text-xs text-center text-gray-400">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

const svg = `
  w-20
  h-20
`;

const wrap = `
  mx-auto
  max-w-xs
`;

const h1 = `
  text-4xl
  text-center
  font-light
  my-10
`;

const label = `
  flex
  flex-col
  my-2
`;

const span = `
  font-bold
  uppercase
  text-sm
  text-gray-700
  mb-2
`;

const input = `
  border
  border-gray-400
  p-2
`;

const button = `
  my-6
  bg-green-500
  py-4
  rounded
  text-white
  text-xl
  border-b-4
  border-green-600
  hover:bg-green-600
  hover:border-green-700
`;

const form = `
  flex
  flex-col
`;

export default AuthForm;
