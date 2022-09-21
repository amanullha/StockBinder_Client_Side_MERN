import React from 'react';
import { Fade, Flip, LightSpeed } from 'react-reveal';

const ImprovePerformance = () => {
    return (
        <div className='bg-slate-200'>
            <div className='mx-5 lg:mx-10 xl:mx-20 flex justify-evenly items-center flex-col md:flex-row  py-20'>


                <div className='p-5  md:w-1/2 w-full'>


                    <LightSpeed bottom>
                        <h1 className='text-black text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Improve performance & process time</h1>
                    </LightSpeed>
                    <Fade left>
                        <h1 className='text-xl font-bold mb-5'>
                            Better organize your warehouse with the stockBinder inventory system.

                        </h1>
                    </Fade>
                    <Fade left>
                        <p>
                            Get the most efficient stocking method and improve all your internal operations. Odoo's double-entry inventory has no stock input, output or transformation. Instead, all operations are stock moves between locations.
                        </p>
                    </Fade>

                </div>

                <div className='p-5 md:w-1/2 w-full'>

                    <Flip left>
                        <iframe className='w-full ' height="400" src="https://www.youtube.com/embed/Vp5xqQOWLzE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Flip>


                </div>

            </div>
        </div>
    );
};

export default ImprovePerformance;