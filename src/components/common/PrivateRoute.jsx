import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import { useSession, useVerificationLoading } from '../../state/SessionProvider';
const PrivateRoute = (props) => {
    const loading = useVerificationLoading()
    const session = useSession()

    if(!session && !loading) return <Redirect to="/" />
    return <Route {...props} />
}

export default PrivateRoute;
