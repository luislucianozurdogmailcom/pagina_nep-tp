import React from 'react';
import Swiper from './Swiper';

function Coverpage(fondo) {
    return (
        <div className={`w-full h-screen p-6 grid lg:grid-cols-2 grid-cols-1 gap-4 ${fondo.fondo ? 'bg-center bg-cover bg-no-repeat lg:bg-[url("./Assets/fondo_hexagonal3.png")] bg-[url("./Assets/fondo_hexagonal4.png")]' : ''}`}>

            <div className='col-span-1 justify-center flex flex-col items-center'>
                <span className={`text-8xl font-extralight ${fondo.theme_dark ? 'text-yellow-200':'text-yellow-600'}`}>
                NEP&TP
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