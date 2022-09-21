import { faArrowCircleLeft, faArrowRight, faCarSide, faPeopleGroup, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-reveal';

const AdvancedFeatures = () => {
    return (
        <div className='bg-[#c4c69f] bg-opacity-40'>

            <section className="mx-5 lg:mx-10 xl:mx-20 flex flex-col justify-center items-center py-20">
                <header>
                    <Fade top>
                        <h1 className='text-black text-2xl sm:text-6xl font-extrabold my-20 mx-2'>Advanced features made simple</h1>
                    </Fade>
                    <h1 className='text-xl text-center mt-3 mb-12'>Use cutting-edge automation and advanced routes to manage any warehouse.
                    </h1>
                </header>

                <div className='flex flex-col md:flex-row gap-8 '>

                    <Fade left>
                        <div className='flex flex-col items-center justify-evenly'>
                            <div className='flex gap-5 items-center justify-center'>
                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faCarSide} />
                                <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />

                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />


                            </div>

                            <div className='text-2xl font-bold tracking-wide my-2'>Drop-Shipping</div>
                        </div>
                    </Fade>


                    <Fade bottom>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex gap-5 items-center justify-center'>
                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />
                                <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />
                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faPeopleGroup} />

                            </div>
                            <div className='text-2xl font-bold tracking-wide my-2'>Cross-docking</div>
                        </div>
                    </Fade>

                    <Fade right>

                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex gap-5 items-center justify-center'>
                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faWarehouse} />
                                <FontAwesomeIcon className='text-2xl' icon={faArrowRight} />
                                <FontAwesomeIcon className='border-2 rounded-full p-3 text-5xl' icon={faWarehouse} />
                            </div>
                            <div className='text-2xl font-bold tracking-wide my-2'>Multi-warehouse</div>
                        </div>
                    </Fade>


                </div>

            </section>

        </div>
    );
};

export default AdvancedFeatures;