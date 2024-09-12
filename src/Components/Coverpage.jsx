import React from 'react';
import Swiper from '../Components/Swiper';

function Coverpage() {
    return (
        <div className='w-full h-screen p-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>

            <div className='col-span-1 justify-center flex flex-col items-center'>
                <span className='text-8xl font-extralight text-yellow-600'>
                NEP&TP
                </span>
                <br>
                </br>
                <span className='text-2xl font-light'>
                    Group on Non-Equilibrium Processes
                    & Transport Phenomena
                </span>
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <Swiper />
            </div>
        </div>
    );
}

export default Coverpage;