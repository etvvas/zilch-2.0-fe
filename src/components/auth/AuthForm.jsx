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
        {/* Toggle text Log in / Sign up */}
        <button className={button}>Log in</button>
      </form>
  )
}

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
