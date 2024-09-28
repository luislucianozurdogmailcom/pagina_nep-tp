import React from 'react';
import Swiper from './Swiper';

function Coverpage(fondo) {
    return (
        <div className={`w-full h-screen p-6 grid lg:grid-cols-2 grid-cols-1 gap-4 ${fondo.fondo ? '' : ''}`}>

            <div className='col-span-1 justify-center flex flex-col items-center'>
                <span className={`text-8xl font-light ${fondo.theme_dark ? 'text-white':'text-white'}`}>
                NEP<span className='text-orange-400 font-medium'>&</span>TP
                </span>
                <br>
                </br>
                <span className={`text-2xl font-light ${fondo.theme_dark ? 'text-white': 'text-gray-900'}`} >
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