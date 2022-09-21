import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import '../Assets/CssStyles/textFont.css'

const Profile = () => {

    const [profile, setProfile] = useState({})

    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {

        const getUser = async () => {

            const data = await axios.get(`https://stoce-binder-backend-server.onrender.com/get-user/${user?.email}`)

            setProfile(data?.data[0])

        }

        getUser();

    }, [])

    if (loading) return <Loading />

    return (
        <div className='min-h-[70vh] '>



            <section>

                {/* <header className='setProfileBgImg w-96 h-96'>

                </header> */}
                <header className='w-full h-96 relative'>
                    <img className='w-full h-72' src="https://i.ibb.co/171qkYf/profilebg.jpg" alt="profile" />

                    <div className='bottom-5 absolute flex justify-center items-center w-full'>
                        {
                            profile?.image ?

                                <img className='  w-56 h-56 rounded-full ' src={profile?.image} alt="profile" />

                                :

                                <img className='  w-56 h-56 rounded-full ' src='https://icon-library.com/images/2018/3965934_usuario-aws-certification-transparent-png.png' alt="profile" />
                        }
                    </div>



                </header>

                <div className='flex justify-center flex-col items-center'>
                    <h1 className='text-3xl font-bold tracking-wide pb-5'>{profile?.name}</h1>
                    <h1>Current role is <strong>{profile?.rule}</strong></h1>
                </div>

            </section>

        </div>
    );
};

export default Profile;