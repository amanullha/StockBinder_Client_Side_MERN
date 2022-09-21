import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';


const SocialAuthentication = () => {

    let pageError;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);


    if (error) {
        pageError = <p className='text-sm text-red-500'>{error?.message}</p>;
        if (error?.message === 'Firebase: Error (auth/popup-closed-by-user).') {
            pageError = <p className='text-sm text-red-500'>You have close Google window!</p>;
        }
    }
    else {
        pageError = "";
    }

    // Redirect to the last page
    const navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    console.log("from : ", from);

    if (token) {

        toast.success('Successfully LogIn!');

        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1000);


    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }

    const handleWithGoogle = () => {

        signInWithGoogle();
        pageError = <p className='text-sm text-green-700'>Login successfully!</p>;

    }
    if (loading) {
        <Loading />
    }


    return (
        <div className='flex  flex-col items-center justify-center w-full pb-10'>

            <div className='w-full'>
                <div className='flex items-center justify-center '>
                    <hr className='w-1/4'></hr>
                    <h1 className='mx-2 text-white'> Continue with</h1>
                    <hr className='w-1/4'></hr>
                </div>
            </div>


            <div onClick={handleWithGoogle}  className='cursor-pointer font-bold active:bg-green-200 flex items-center justify-center py-2 my-5 rounded-xl bg-white px-5'>

                <img width="20px" alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />

                <h1  className=' mx-2 w-full'> Continue with Google</h1>

            </div>
            <div>
                {pageError}
            </div>


        </div>
    );
};

export default SocialAuthentication;