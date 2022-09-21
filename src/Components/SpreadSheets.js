import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Fade, Roll, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const Spreadsheets = () => {
    return (
        <div className='bg-[#f7f6f1] hero'>
            <div className='py-20  mx-5 '>
                <section className='hero-content flex flex-col items-center justify-center'>


                    <div className='text-center w-full'>
                        <Roll top>
                            <h1 className='  text-black text-2xl sm:text-6xl font-extrabold my-20 mx-2 '>Sign Up and Upload Your Inventory Spreadsheets</h1>
                        </Roll>


                    </div>


                    <div>
                        <Fade right>
                            <p className=' text-md md:text-lg max-w-[1000px] '>
                                We'll configure your inventory, organize your data, and upload it in just a few hours.
                                All for Free for a Limited Time Only (No Credit Card Required). And if you need to expand later, our affordable pricing and flat monthly rate make it easy to control your budget and your inventory.
                            </p>
                        </Fade>

                        <Zoom bottom>
                           

                            <button className='active:bg-yellow-800 active:font-extrabold bg-[#FEED01] w-80  hover:w-96 py-5 font-bold uppercase tracking-wider flex  items-center justify-between px-5 hover:transition-all duration-500 hover:duration-700  my-10'>

                                <Link to='' className=''>
                                    Take Free Subscriptions
                                </Link>
                                <BsArrowRight size={20} />


                            </button>


                        </Zoom>








                    </div>
                </section>

            </div>
        </div>
    );
};

export default Spreadsheets;