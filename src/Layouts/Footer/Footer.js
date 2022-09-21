import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import headerBG from '../../Assets/images/headerBG.jpg'

const Footer = () => {
    return (
        <div className=' z-10 '>

            <div className='hero  z-10 setBgImgHeader'>

                <div className=' w-full max-w-[1300px] py-5' >



                    <div className='hero-content flex flex-col  items-start min-h-[300px]'>


                        <Link to="/" className="left-0 flex items-center ">
                            <img className='h-20' src="https://i.ibb.co/YDrYGr7/Artboard-1.png" alt="" srcSet="" />
                            {/* <img className='h-20 w-24' src="phoneLogo.png" alt="" srcSet="" /> */}

                            {/* <h1 className='text-white font-bold tracking-wider text-2xl  '>StockBinder</h1> */}

                        </Link>


                        <div className='flex items-center gap-1 ml-3'>

                            <h1 className='text-2xl md:text-4xl text-blue-50 font-bold tracking-wide cursiveFont stroke-none'>Live

                                <span className='text-lg md:text-4xl text-blue-50 md:font-bold tracking-wide stroke-text'> better </span>

                                <span className='text-2xl md:text-4xl text-blue-50 font-bold tracking-wide cursiveFont stroke-none'>and</span>
                                <span className='text-lg md:text-4xl text-blue-50 md:font-bold tracking-wide stroke-text'> beautiful </span>
                            </h1>

                        </div>
                        <div className=' flex justify-between items-center gap-10 ml-3'>

                            <button className='active:bg-yellow-800 active:font-extrabold bg-[#FEED01] w-64 hover:w-72 py-5 font-bold uppercase tracking-wider flex  items-center justify-between px-5 hover:transition-all duration-500 hover:duration-700 '>

                                <Link to='/' className=''>Get a consultation</Link>
                                <BsArrowRight size={20} />


                            </button>
                            <div className='flex items-center gap-5'>
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar bg-white ">
                                    <div className="w-10 rounded-full bg-white ">
                                        <img src="https://placeimg.com/80/80/people" />
                                    </div>
                                </label>

                                <div className="text-white">
                                    <h1>Sales representative <span className='border-b-2 border-[#effd01] mx-2'>+1 (850) 344 0 66 #20 </span>free call !
                                    </h1>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>












            </div>

            <div className='hero  z-10 bg-black py-10 px-5 xl:px-0'>

                <div className=' max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 '>

                    <div className=''>
                        <header className='text-blue-50 text-lg py-5'>HEADQUARTER
                        </header>

                        <ul className='text-white flex flex-col gap-4'>
                            <li>228 Cardigan Road, Leeds
                                Geneva Switzerland</li>
                            <li>+1 (850) 344 0 66 #20

                            </li>
                            <li className='cursor-pointer'><span className='border-b-2 border-[#effd01]'>FIND US ON MAP</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <header className='text-blue-50 text-lg py-5 uppercase'>maintenance OFFICE
                        </header>

                        <ul className='text-white flex flex-col gap-4'>
                            <li>121 South 8th Street, Suite 1200
                                Minneapolis MN 55402</li>
                            <li>+1 (850) 344 0 66 #20

                            </li>
                            <li className='cursor-pointer'><span className='border-b-2 border-[#effd01]'>FIND US ON MAP</span></li>
                        </ul>
                    </div>

                    <div className=''>
                        <header className='text-blue-50 text-lg py-5 uppercase'>SUBSCRIPTION
                        </header>

                        <ul className='text-white flex flex-col gap-4'>
                            <li>For more information, please join us.

                            </li>
                            <li><button className='px-8 py-3 text-black bg-[#effd01]'>JOIN NOW</button>

                            </li>
                            <li className='cursor-pointer'><span className='border-b-2 border-[#effd01]'>FIND US ON MAP</span></li>
                        </ul>
                    </div>

                </div>



            </div>
            <div className='hero  z-10 bg-black py-10 '>
                <div className=' max-w-[1300px] w-full px-2 '>

                    <div className="border-t-2 border-gray-700 w-full flex flex-col md:flex-row  justify-between items-center py-5">

                        <h1 className='text-gray-500 text-sm'>© 2020 StockBinder | Inventory Management Service Provider</h1>
                        <ul className='flex items-center gap-3 text-gray-400 py-4 md:py-0'>
                            <li className='hover:border-b-2 hover:border-[#effd01]'>Facebook</li>
                            <li className='hover:border-b-2 hover:border-[#effd01]'>LinkedIn</li>
                            <li className='hover:border-b-2 hover:border-[#effd01]'>GitHub</li>
                        </ul>

                    </div>

                </div>

            </div>




        </div>
    );
};

export default Footer;