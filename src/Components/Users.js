import React from 'react';
import { useQuery } from '@tanstack/react-query'
import SingleUser from './SingleUser';
import Loading from '../Loading/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';


const Users = () => {


    const { isLoading, error, data: users, refetch } = useQuery(['repoUserData'], () =>
        fetch(`https://stoce-binder-backend-server.onrender.com/get-users`).then(res =>
            res.json()
        )
    )



    const makeSupperAdmin = (supper, user) => {

        if (supper)
            user.rule = 'supperAdmin'
        else user.rule = 'admin';

        fetch(`https://stoce-binder-backend-server.onrender.com/make-supperAdmin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(res => {
                if (res.acknowledged) {

                    toast.success("Role changed successfully!");
                    refetch();
                }
                else {
                    toast.error("Something wrong!!!");
                }
            })

    }


    const handleDeleteUser = async (deleteUserId, user) => {


        if (deleteUserId) {

            const res = await axios.delete(`https://stoce-binder-backend-server.onrender.com/delete-user/${deleteUserId}`)

            console.log("delete res: ", res);

            if (res.data.deletedCount > 0) {

                toast.success('User delete successfully!')
                refetch();

            }

        }



    }


    if (isLoading) return <Loading />

    if (error) {
        return <div className='h-full w-full flex justify-center items-center min-h-min'> <h1 className='text-red-600'>{error.message}</h1></div>
    }


    return (
        <div>
            {/* <h1>All users{users?.length} </h1> */}



            <div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className='text-xl'>

                                <th className='text-md md:text-lg w-5'>No.</th>
                                <th className='text-md md:text-lg'>Avatar</th>
                                <th className='text-md md:text-lg'>Name</th>
                                <th className='text-md md:text-lg'>Email</th>
                                <th className='text-md md:text-lg'>Rule</th>
                                <th className='text-md md:text-lg'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                users?.map((user, index) => <SingleUser

                                    key={index}
                                    index={index}

                                    user={user}
                                    makeSupperAdmin={makeSupperAdmin}
                                    handleDeleteUser={handleDeleteUser}


                                />)
                            }


                        </tbody>


                    </table>
                </div>

            </div>


        </div>
    );
};

export default Users;