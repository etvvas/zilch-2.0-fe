import React from 'react';
import avatars from '../../assets/avatars.svg';

const AuthForm = () => {

  return (
      <form className={form}>
          <input 
            className={input}
            placeholder="Username" />
          <input 
            className={input}
            placeholder="Password" />
        <button className={button}>Log in</button>
      </form>
  )
}

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
