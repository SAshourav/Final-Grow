import React from 'react';
import { useUserAuth } from './UserAuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    let {user, loading} = useUserAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(!user){
        return <Navigate to='/login' state={{form:location}} replace/>
    }
    return children;
};

export default ProtectedRoutes;