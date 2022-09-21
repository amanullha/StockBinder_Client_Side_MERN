



import React from 'react';
import { Fade, LightSpeed } from 'react-reveal';
import '../Assets/CssStyles/textFont.css'

const AboutPage = () => {




    return (
        <div className=' min-h-screen bg-gradient-to-r from-[#c6f2c2] to-[#7486ed6f] flex justify-center items-center setBgImg'>
            <div className="mx-5 lg:mx-10 xl:mx-20 py-20flex items-center justify-center ">

                <div className=' p-5 min-h-[60vh]  w-full lg:w-3/4 flex flex-col justify-center '>


                    <LightSpeed>
                        <h1 className=' text-2xl sm:text-6xl font-extrabold tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-green-700'>About StockBinder </h1>
                    </LightSpeed>
                    <h1 className='my-5 text-xl md:text-2xl font-bold tracking-wider text-green-500'>What We Do</h1>
                    <Fade right>
                        <div>
                            <p className='text-gray-300 tracking-wide'>
                                StockBinder is a web-based inventory management system that is extremely easy to use. This system has been developed Practice purpose, who just want to get the job done. Our interface is built for busy people who don’t want to spend a lot of time learning how to use a new piece of software. If you’ve been keeping inventory in your head, on paper, or in a program like Microsoft Word® or Excel®, our inventory system is the next leap forward. However, if you’re just totally frustrated by the inscrutability of your current feature-bloated inventory system, then we’re here for you too! We have excellent resources to provide a strong start and help you maintain consistently accurate inventory.


                            </p>
                        </div>
                    </Fade>


                </div>
            </div>

        </div>
    );
};

export default AboutPage;