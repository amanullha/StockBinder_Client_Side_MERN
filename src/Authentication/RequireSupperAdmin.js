import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAdmin } from '../hooks/useAdmin';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'

const RequireSupperAdmin = () => {


    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);


    const [admin] = useAdmin(user);

    // console.log("supper admin thake admin : ", admin);

    if (admin === 'supperAdmin') {
        return <Outlet />
    }
    else {
        return <Navigate to={{ from: location }} replace />
    }

};

export default RequireSupperAdmin;