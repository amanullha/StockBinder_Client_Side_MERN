import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export const useAdmin = (user) => {

    const [admin, setAdmin] = useState('user');

    // console.log("user: ", user.email);

    useEffect(() => {

        const getUser = async () => {

            const data = await axios.get(`https://stoce-binder-backend-server.onrender.com/get-user/${user?.email}`)

            setAdmin(data?.data[0]?.rule)

            // console.log("useadmin role : ", data?.data[0]?.rule);
        }

        getUser();

    }, [user])




    return [admin];

};

