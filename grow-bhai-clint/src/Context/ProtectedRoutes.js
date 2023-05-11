import React from 'react';
import { useUserAuth } from './UserAuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    let {user} = useUserAuth();
    if(!user){
        return <Navigate to='/login' />
    }
    return children;
};

export default ProtectedRoutes;