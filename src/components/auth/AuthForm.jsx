import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthForm from '../../state/hooks/useAuthForm';
import { useLogin, useSession, useSetLoading, useSignup, useVerificationLoading } from '../../state/SessionProvider';
import Avatars from './Avatars';

const AuthForm = () => {
  const history = useHistory();
  const[username, password, avatar, isSignUp, setIsSignUp, handleChange] = useAuthForm()
  const signup = useSignup();
  const login = useLogin();
  const session = useSession()
  const loading = useVerificationLoading()
  const setLoading = useSetLoading()
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    if(session !== null) history.push("/lobby")
    setLoading(false)
    console.log(loading)
  }, [session])

  const handleSubmit = e => {
    e.preventDefault();
    if(isSignUp) signup({username, password, avatar}).catch(setError)
      login({username, password}).catch(setError)
  }

  

if(loading) return <h1>LOADING</h1>
  return (
    <div className={outer}>
      <div className={wrap}>

        { isSignUp
          ? <h1 className={h1}>Sign up with <span className={brand}>Zilch 2.0</span></h1>
          : <h1 className={h1}>Log in with <span className={brand}>Zilch 2.0</span></h1>
        }
        
        <form className={form} onSubmit={handleSubmit}>        

          <label className={label}>
            <span className={span}>Username</span>
            <input 
              required
              className={input}
              placeholder="Username" 
              name="username"
              value={username}
              onChange={handleChange}
              />
          </label>
          <label className={label}>
            <span className={span}>Password</span>
            <input  type="password"
              required
              className={input}
              placeholder="Password" 
              name="password"
              value={password}
              onChange={handleChange}
              />
          </label>

          {error && 
          <div className={errMsg}>{error.message}</div>
          }

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
    </div>
  )
}

const outer = `
  flex
  justify-center
`

const wrap = `
  max-w-screen-xs
  bg-white
  rounded-xl
  w-full
  py-12
  px-12
  sm:my-12
`;

const h1 = `
  text-2xl
  text-center
  font-light
  my-10
`;

const brand = `
  font-black
  text-indigo-500
`;

const label = `
  flex
  flex-col
  my-2
`;

const span = `
  font-bold
  text-sm
  text-indigo-700
  tracking-wide
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
  text-indigo-400
  text-center
  cursor-pointer
  hover:text-indigo-600
`;

const errMsg = `
  text-red-500
  text-center
`;

export default AuthForm;
