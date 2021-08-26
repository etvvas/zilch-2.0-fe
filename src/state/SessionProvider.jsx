import React, { useState, useContext, createContext } from 'react';
import { postSignup } from '../services/auth';

const SessionContext = createContext();

export default function SessionProvider({ children }) {
    const [session, setSession] = useState(null);

    const signup = async ({ username, password, avatar }) => {
        const newUser = await postSignup(username, password, avatar);
        setSession(newUser);
    }

    return (
        <SessionContext.Provider value={{ session, signup }}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession(){
    const { session } = useContext(SessionContext);
    return session;
}

export function useUser() {
    const { user } = useContext(SessionContext);
    return user;
}

export function useSignup() {
    const { signup } = useContext(SessionContext);
    return signup;
}
