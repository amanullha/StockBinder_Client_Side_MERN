import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'

const RequireAdmin = () => {

    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);


    const [admin] = useAdmin(user);

    if (admin === 'admin') {
        return <Outlet />
    }
    else {
        return <Navigate to={{ from: location }} replace />
    }

};

export default RequireAdmin;