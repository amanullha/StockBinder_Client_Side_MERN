import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const useToken = user => {

    const [token, setToken] = useState('');

    // console.log("useToken user: ", user?.user?.displayName);


    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {

                const { data } = await axios.post('https://stoce-binder-backend-server.onrender.com/login', { email });

                localStorage.setItem('accessToken', data?.accessToken);
                setToken(data?.accessToken);
            }
        }




        const addUser = async () => {

            const email = user?.user?.email;
            const name = user?.user?.displayName;


            if (email && name) {

                const userData = {

                    name: name,
                    email: email,
                    image: user?.user?.photoURL,
                    rule: 'admin',
                }

                const res = await axios.post('https://stoce-binder-backend-server.onrender.com/add-user', userData);

                console.log("user add res: ", res);
            }
        }

        getToken();

        addUser();



    }, [user])


    return [token, setToken];

};

export default useToken;