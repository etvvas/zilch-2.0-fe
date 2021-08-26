import React, { useState, useContext, createContext } from 'react';
import { postSignup, postLogin } from '../services/auth';

const SessionContext = createContext();

export default function SessionProvider({ children }) {
    const [session, setSession] = useState(null);

    const signup = async ({ username, password, avatar }) => {
        const newUser = await postSignup(username, password, avatar);
        setSession(newUser);
    }

    const login = async ({username, password}) => {
        const newUser = await postLogin(username, password)
        setSession(newUser)
    }

    return (
        <SessionContext.Provider value={{ session, signup, login }}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession(){
    const { session } = useContext(SessionContext);
    return session;
}

export function useSignup() {
    const { signup } = useContext(SessionContext);
    return signup;
}

export function useLogin() {
    const { login } = useContext(SessionContext);
    return login;
}
