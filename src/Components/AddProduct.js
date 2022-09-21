import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Slide } from 'react-reveal';
import auth from '../firebase.init';

const AddProduct = () => {


    const [user, loading, error] = useAuthState(auth);



    const {
        register,
        handleSubmit,
        formState: { errors }, reset,
    } = useForm();



    const onSubmit = (data) => {

        if (user?.uid) {

            data.user = user?.email;
            data.soldItems = 0;

            // add items to the db
            fetch('https://stoce-binder-backend-server.onrender.com/phones', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
                .then(res => res.json())
                .then(data => {
                    toast.success("New Item added! ")

                    reset();

                })

        }
        else {
            toast.error("You haven't permission to add items ")
        }



    }






    return (
        <div className=' flex flex-col justify-center items-center bg-black bg-opacity-90 h-full w-full'>
            <Slide top>


                <div className=' w-full h-full'>

                    <h1 className='border-b-2 border-gray-500 text-center text-lg md:text-2xl py-10 font-bold text-white  ' >Add new item to the Inventory</h1>


                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 px-5  mx-auto mt-10">

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-auto'>

                            <div className=' mx-auto '>
                                <div className='flex flex-col max-w-sm sm:mx-2'>

                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="name">Product Name</label>

                                    <input className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black' placeholder='Enter your product name' {...register('name', { required: true })} />

                                    {errors.name && <p className='text-red-500'> Name is required.</p>}
                                </div>

                                <div className='flex flex-col  max-w-sm sm:mx-2'>
                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="price">Product Price ( per unit )</label>
                                    <input className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black' placeholder='Product price' {...register('price', { required: true })} />
                                    {errors.price && <p className='text-red-500'>Price is required.</p>}
                                </div>

                                <div className='flex flex-col max-w-sm sm:mx-2'>
                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="quantity">Product quantity</label>
                                    <input className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black' placeholder='Enter your quantity' {...register('quantity', { required: true })} />
                                    {errors.quantity && <p className='text-red-500'>Product quantity is required.</p>}
                                </div>
                            </div>

                            <div className=' mx-auto'>
                                <div className='flex flex-col  max-w-sm sm:mx-2'>
                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="supplier ">Supplier Name</label>
                                    <input className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black ' placeholder='Enter supplier name' {...register('supplier', { required: true })} />
                                    {errors.supplier && <p className='text-red-500'>Supplier is required.</p>}
                                </div>

                                <div className='flex flex-col  max-w-sm sm:mx-2'>
                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="image ">Image link</label>
                                    <input className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black' placeholder='Enter image link' {...register('image', { required: true })} />
                                    {errors.image && <p className='text-red-500'>Image link is required.</p>}
                                </div>

                                <div className='flex flex-col  max-w-sm sm:mx-2'>
                                    <label className='py-2 ml-2 text-gray-300' htmlhtmlFor="description">Product description</label>
                                    <textarea className=' text-gray-200 focus:outline-none px-2 py-1 md:py-2 text-sm md:text-md bg-[#000000] border-4 border-[#131313] rounded-md shadow-md shadow-black ' placeholder='Enter product description' {...register('description', { required: true })} />
                                    {errors.description && <p className='text-red-500'>Description required.</p>}
                                </div>
                            </div>
                        </div>


                        <input className=' mt-8 md:mt-12  px-12 md:px-20 py-2 active:font-bold text-lg md:text-xl tracking-wide bg-[#effd01] text-black active:bg-[#f0fd01b5] active:text-red-400 cursor-pointer mx-auto ' type="submit" value="Add Item" />
                    </form>


                </div>
            </Slide>
        </div>
    );
};

export default AddProduct;