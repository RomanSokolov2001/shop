import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

const PrivateRoutes = () => {
    const {userAuth} = useAuth();
    return userAuth ? <Outlet/> : <Navigate to='login'/>

}

export default PrivateRoutes