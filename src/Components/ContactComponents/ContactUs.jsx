import React from 'react'
import GlassForm from './Formulario'; 

const ContactUs = () => {
    const backgroundImage = require('../../Assets/fondo_research.png');

  
    return (
        <div id='Colaborators' className='w-screen min-h-screen' style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className='grid lg:grid-cols-2 gap-2 max-w-7xl min-h-screen mx-auto'>
                <div className='col-span-1 flex flex-row lg:h-screen h-80 items-center justify-center'>
                    <span className=' text-5xl font-extralight text-white'>
                        Contact <span className='text-orange-400 font-bold'>Us</span>
                    </span>
                </div>
                <div className='col-span-1 flex flex-row lg:h-screen items-center justify-center'>
                    <GlassForm />
                </div>
            </div>
        </div>
  )
}

export default ContactUs