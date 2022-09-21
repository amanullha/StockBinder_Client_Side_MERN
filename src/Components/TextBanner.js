import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import '../Assets/CssStyles/textFont.css'

const slideTexts = [


    {
        text1: 'Inventory',
        text2: 'Management Software in the',
        text3: 'Cloud',
        textP: 'Simple to use, Beautifully designed',
        buttonText: "Sign up-it's Free",
        buttonLink: '/'
    },
    {
        text1: 'Making',
        text2: 'Dreams',
        text3: 'Comes Real',
        textP: 'We secure your products,Believe US',
        buttonText: "Check Inventory",
        buttonLink: '/'
    },
    {
        text1: 'All',
        text2: 'Smart Solutions',
        text3: 'We Provide',
        textP: 'Use cloud with less amounts',
        buttonText: "Check Products",
        buttonLink: '/'
    },




]

const TextBanner = ({ slideChange, setSlideChange }) => {






    const [slideIndex, setSlideIndex] = useState(0);


    useEffect(() => {

        setInterval(() => {

            setSlideIndex(slideIndex => ((slideIndex + 1) % slideTexts.length));

        }, 10000);
    }, []);




    useEffect(() => {

        if (slideChange === 'increase') {

            setSlideIndex(slideIndex => ((slideIndex + 1) % slideTexts.length));
            setSlideChange('none')
        }
        else if (slideChange === 'decrease') {

            if (slideIndex)
                setSlideIndex(slideIndex - 1)
            else setSlideIndex(slideTexts.length - 1)

            setSlideChange('none')
        }

    }, [slideChange])




    return (
        <div

            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="500"




            className='min-h-[30vh] md:min-h[80vh] flex flex-col gap-5 justify-center relative w-full md:w-1/2 pb-52 pt-20 '>

            <div className='flex flex-col gap-3 min-h-[150px] xl:ml-40 lg:ml-20 md:16 sm:ml-10 ml-5'>

                <div className='flex items-center gap-1 '>

                    <h1 className='text-2xl md:text-4xl text-blue-50 font-bold tracking-wide cursiveFont stroke-none'>{slideTexts[slideIndex]?.text1}

                        <span className='text-lg md:text-4xl text-blue-50 md:font-bold tracking-wide stroke-text'> {slideTexts[slideIndex]?.text2} </span>

                        <span className='text-2xl md:text-4xl text-blue-50 font-bold tracking-wide cursiveFont stroke-none'>{slideTexts[slideIndex]?.text3}</span>
                    </h1>

                </div>



                <span className='text-md md:text-lg tracking-wider text-white'>{slideTexts[slideIndex]?.textP}</span>
            </div>

            <button className='active:bg-yellow-800 active:font-extrabold bg-[#FEED01] w-56 hover:w-64 py-5 font-bold uppercase tracking-wider flex  items-center justify-between px-5 hover:transition-all duration-500 hover:duration-700 xl:ml-40 lg:ml-20 md:16 sm:ml-10 ml-5'>

                <Link to={slideTexts[slideIndex]?.buttonLink} className=''>{slideTexts[slideIndex]?.buttonText}</Link>
                <BsArrowRight size={20} />


            </button>



            <div className='hidden md:flex items-center justify-evenly absolute bottom-[-41px] pb-5 w-full border-b-2'>
                <div className='flex font-bold'>

                    <h1 className='text-4xl text-black'>{slideIndex + 1}
                        <sub className='text-xl text-gray-500 '>/ {slideTexts.length}</sub></h1>

                </div>

                <div className='flex items-center gap-3'>

                    <button onClick={() => setSlideChange('decrease')} className='hover:bg-[#feed01]  font-bold px-5 md:px-8 py-5 md:py-8 rounded-full bg-slate-50 text-black active:bg-blue-200' ><BsArrowLeft size={30} /></button>

                    <button onClick={() => setSlideChange('increase')} className='hover:bg-[#feed01] font-bold px-5 md:px-8 py-5 md:py-8 rounded-full bg-slate-50 text-black active:bg-blue-200' ><BsArrowRight size={30} /></button>



                </div>
            </div>


        </div>

    )

};

export default TextBanner;