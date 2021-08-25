import React from 'react';
import Avatars from './Avatars';

const AuthForm = () => {
  const isSignUp = false;

  return (
    <div className={wrap}>

      { isSignUp
        ? <h1 className={h1}>Sign up</h1>
        : <h1 className={h1}>Log in</h1>
      }
      
      <form className={form}>        

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


        { isSignUp && 
          <Avatars />
        }

        { isSignUp
          ? <button className={button}>Sign up</button>
          : <button className={button}>Log in</button>
        }
        
      </form>

      { isSignUp
        ? <p className={p}>Don't have an account? Sign up.</p>
        : <p className={p}>Already have an account? Log in.</p>
      }
      

      <div className="my-10 text-xs text-center text-gray-400">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
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

const p = `
  text-sm
  text-indigo-500
  text-center
`;

export default AuthForm;
