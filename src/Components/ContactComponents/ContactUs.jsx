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
<<<<<<< HEAD
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto'>
                <div className='col-span-1 flex flex-col h-full items-center justify-center my-8'>
                    <span className=' text-5xl font-extralight text-white'>
                        Contact <span className='text-orange-400 font-bold'>Us</span>
                    </span>
                    <p className='h-32 flex flex-col justify-center text-gray-100 text-xl font-light'>
                        mail us: flor@campus.ungs.edu.ar
                    </p>
                </div>
                <div className='col-span-1 flex flex-row h-full my-8 items-end justify-center'>
                    <GlassForm />
                </div>
                <div className='lg:col-span-2 col-span-1 flex flex-row justify-center mx-8'>
                    <div className='bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col justify-center items-center p-8'>
                        <p className='mb-10 font-bold text-gray-100 max-w-96 text-justify'>Our Campus is located at Los Polvorines, Buenos Aires.

                            The main access is located at Juan María Gutiérrez 1150, just a few meters from José León Suárez street, equidistant to routes 8 and 23 (ex202). At the intersection between both routes you can find General Lemos railway station, (Urquiza Line).
                        </p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2203.4575191048666!2d-58.702020131544835!3d-34.52247773393887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd2507bec447%3A0x3e4c6acf8f9df78c!2sUniversidad%20Nacional%20de%20General%20Sarmiento%20(UNGS)!5e1!3m2!1ses-419!2sar!4v1733010630764!5m2!1ses-419!2sar" 
                            width="600" 
                            height="450" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
=======
            <div className='grid lg:grid-cols-2 gap-2 max-w-7xl min-h-screen mx-auto'>
                <div className='col-span-1 flex flex-row lg:h-screen h-80 items-center justify-center'>
                    <span className=' text-5xl font-extralight text-white'>
                        Contact <span className='text-orange-400 font-bold'>Us</span>
                    </span>
                </div>
                <div className='col-span-1 flex flex-row lg:h-screen items-center justify-center'>
                    <GlassForm />
                </div>
>>>>>>> 4b2e08e3242576523e73d2c40e119c44b036a7b0
            </div>
        </div>
  )
}

export default ContactUs