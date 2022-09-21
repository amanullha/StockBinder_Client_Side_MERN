import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {


    const [user, loading, error] = useAuthState(auth)

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);

    let location = useLocation();
    // console.log("user: ",user);


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    else if (loading) {
        return <Loading />
    }

    // else if (user && user.providerData[0].providerId === 'password' && user.emailVerified === false) {

    //     return <div className='min-h-[30vh] md:min-h-[60vh] mx-auto my-20 flex flex-col gap-5 items-center justify-center  '>

    //         <h1 className='text-red-700 font-bold tracking-wider md:text-3xl'>Please verify your email address!!</h1>

    //         <button
    //             className='hover:text-red-500 md:px-10 md:py-3 px-5 py-1 bg-blue-700 text-white font-bold tracking-wider rounded-lg my-2 active:bg-blue-900 active:text-yellow-500'
    //             onClick={async () => {
    //                 await sendEmailVerification();

    //                 toast.error('Sent verification link to your email');
    //             }}
    //         >
    //             Verify email sent
    //         </button>


    //     </div>
    // }

    else {
        return <Outlet />;
    }

};

export default RequireAuth;