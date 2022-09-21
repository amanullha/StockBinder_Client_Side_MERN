import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';

const SingleUser = ({ user, index, makeSupperAdmin, handleDeleteUser }) => {

    const [firebaseUser, loading, errorr] = useAuthState(auth);


    return (
        <tr className=' hover'>
            <td>{index + 1}</td>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                user?.image ? <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                    :
                                    <img src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {user.name}

            </td>
            <td>{user.email}</td>

            <td className={`${user?.rule === 'admin' ? 'text-yellow-600 ' : 'text-green-800'}`}>{user.rule}</td>



            {
                user.email === 'aullah060@gmail.com' ? <td>Administrator</td> :

                    <td className=''>

                        <div className=' h-full flex gap-3 justify-between w-48 items-center'>

                            {
                                firebaseUser?.email === user?.email ? "No permission" :

                                    <label className='h-full  flex justify-center items-center '>
                                        {
                                            user?.rule === 'admin' ?

                                                < button onClick={() => makeSupperAdmin(true, user)} className="btn btn-ghost btn-xs bg-[#dffd01]">Make Supper Admin</button>

                                                :

                                                <button onClick={() => makeSupperAdmin(false, user)} className="btn btn-ghost btn-xs bg-[#dffd01]">Make Admin</button>
                                        }

                                    </label>
                            }




                            {
                                firebaseUser?.email === user?.email ?
                                    <label className='h-full w-10 flex justify-center items-center text-gray-300 py-1 cursor-pointer'>

                                        <RiDeleteBin6Fill size={20} />

                                    </label>

                                    :
                                    <label onClick={() => handleDeleteUser(user?._id, user)} className='h-full w-10 flex justify-center items-center text-red-600 hover:text-red-800 hover:bg-red-200 hover:rounded-full py-1 cursor-pointer'>

                                        <RiDeleteBin6Fill size={20} />

                                    </label>
                            }




                        </div>


                    </td>
            }
        </tr>
    );
};

export default SingleUser;