import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import { useSession, useVerificationLoading } from '../../state/SessionProvider';
const PrivateRoute = (props) => {
    const session = useSession()

    if(!session) return <Redirect to="/" />
    return <Route {...props} />
}

export default PrivateRoute;
