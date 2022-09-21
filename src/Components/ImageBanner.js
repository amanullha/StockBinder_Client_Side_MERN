import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../Assets/CssStyles/textFont.css'
import bannerImg1 from '../Assets/images/bannerImg1.jpg'
import bannerImg2 from '../Assets/images/bannerImg3.jpg'
import bannerImg3 from '../Assets/images/bannerImg2.jpg'

const slideImages = [
    {
        imageLink: bannerImg1,
    },
    {
        imageLink: bannerImg2,
    },
    {
        imageLink: bannerImg3,
    },
]



const ImageBanner = ({ slideChange, setSlideChange }) => {






    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(() => {

        setInterval(() => {

            setSlideIndex(slideIndex => ((slideIndex + 1) % slideImages.length));

        }, 10000);
    }, []);




    useEffect(() => {

        if (slideChange === 'increase') {

            setSlideIndex(slideIndex => ((slideIndex + 1) % slideImages.length));
            setSlideChange('none')
        }
        else if (slideChange === 'decrease') {

            if (slideIndex)
                setSlideIndex(slideIndex - 1)
            else setSlideIndex(slideImages.length - 1)

            setSlideChange('none')
        }

    }, [slideChange])




    return (
        <div



            className=' w-full md:w-1/2  z-40 '>




            {/* <div className=' '>
                <img src="https://i.ibb.co/4VZywgM/bagus-hernawan-k-FDVRCZWwl-A-unsplash.jpg" alt="" />

            </div> */}

            <div className="w-full h-full relative mx-auto flex justify-center md:justify-center">

                <div className='md:-bottom-10 -bottom-56 md:w-full h-[400px] md:h-[500px] xl:h-[600px]  absolute shadow-lg '>

                    <img className='h-full w-full' src={slideImages[slideIndex]?.imageLink} alt="" />



                    <div className='md:h-44 md:w-40 h-32 w-24 bg-[#effd01] z-20  flex justify-center items-center overflow-hidden bottom-8 left-8 absolute'>

                        <div style={{ width: '90%', height: '90%' }} className='  bg-[#effd01]  relative overflow-hidden  '>

                            <div style={{ width: '100%', height: '100%' }} className='  bg-[#effd01]  relative flex flex-col items-center justify-center gap-1 md:gap-4'>

                                <h1 className='text-center text-black font-bold text-3xl md:text-7xl'>10</h1>
                                <p className='text-black uppercase text-sm md:text-lg text-center font-bold tracking-wide'>years of experience</p>

                                <div className=' h-8 w-5 bg-black absolute rotate-45 -right-2 -bottom-4'></div>

                            </div>

                        </div>

                    </div>




                </div>





            </div>





        </div >

    )

};

export default ImageBanner;