import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import { useSession } from '../../state/SessionProvider';
const PrivateRoute = (props) => {
    // const loading = useVerificationLoading()
    const session = useSession()
    // if(loading) return <h1>Authenticating...</h1>

    if(!session) return <Redirect to="/" />
    return <Route {...props} />
}

export default PrivateRoute;