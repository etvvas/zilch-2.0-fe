import React from 'react';
import useAuthForm from '../../state/hooks/useAuthForm';
import { useLogin, useSignup } from '../../state/SessionProvider';
import Avatars from './Avatars';

const AuthForm = () => {
  const[username, password, avatar, isSignUp, setIsSignUp, handleChange] = useAuthForm()
  const signup = useSignup();
  const login = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();
    if(isSignUp) await signup({username, password, avatar})
    else await login({username, password})
  }


  return (
    <div className={wrap}>

      { isSignUp
        ? <h1 className={h1}>Sign up with Zilch</h1>
        : <h1 className={h1}>Log in with Zilch</h1>
      }
      
      <form className={form} onSubmit={handleSubmit}>        

        <label className={label}>
          <span className={span}>Username</span>
          <input 
            className={input}
            placeholder="Username" 
            name="username"
            value={username}
            onChange={handleChange}
            />
        </label>
        <label className={label}>
          <span className={span}>Password</span>
          <input 
            className={input}
            placeholder="Password" 
            name="password"
            value={password}
            onChange={handleChange}
            />
        </label>


        { isSignUp && 
          <Avatars onChange={handleChange} />
        }

        { isSignUp
          ? <button className={button}>Sign up</button>
          : <button className={button}>Log in</button>
        }
        
      </form>

      { isSignUp
        ? <p  onClick={() => setIsSignUp(!isSignUp)} className={p}>Already have an account? Log in.</p>
        : <p  onClick={() => setIsSignUp(!isSignUp)} className={p}>Don't have an account? Sign up.</p>
      }
      

      { isSignUp &&
        <div className="my-10 text-xs text-center text-gray-400">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      }
    </div>
  )
}

const wrap = `
  mx-auto
  max-w-xs
`;

const h1 = `
  text-3xl
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
