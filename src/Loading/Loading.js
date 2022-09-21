import React from 'react';
import './Loading.css'


const Loading = () => {
    return (
        // <div>
        //     <div className='flex  justify-center w-full h-full min-h-[500px] items-center'>
        //         <div className=''>
        //             <p className="item">L</p>
        //             <p className="item">o</p>
        //             <p className="item">a</p>
        //             <p className="item">d</p>
        //             <p className="item">i</p>
        //             <p className="item">n</p>
        //             <p className="item">g</p>
        //             <p className="item">.</p>
        //             <p className="item">.</p>
        //             <p className="item">.</p>

        //         </div>


        //     </div>

        // </div>





        <div>
            <div className='flex w-full  justify-center min-h-screen items-center bg-[#effd01] pageLoadingCSS'>
                <div className=''>
                    <p className="item">L</p>
                    <p className="item">o</p>
                    <p className="item">a</p>
                    <p className="item">d</p>
                    <p className="item">i</p>
                    <p className="item">n</p>
                    <p className="item">g</p>
                    <p className="item">.</p>
                    <p className="item">.</p>
                    <p className="item">.</p>

                </div>

            </div>
        </div>
    );
};

export default Loading;