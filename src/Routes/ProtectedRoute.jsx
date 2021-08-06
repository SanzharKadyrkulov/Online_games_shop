import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
const ProtectedRoute = ({component: Component, ...rest}) => {
    const {user} = useAuth()
    return (
        <Route {...rest} render={({location}) => 
            user ? <Component/> : (<Redirect to={{pathname: '/login', state: {from: location}}}/>)
        } />
    );
};

export default ProtectedRoute;