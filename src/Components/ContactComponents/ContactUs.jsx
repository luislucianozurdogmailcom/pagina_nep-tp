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
                <div className='lg:col-span-1 col-span-1 flex flex-row justify-center p-10 mx-auto overflow-hidden'>
                    <div className='bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col justify-center items-center p-8'>
                    <h1 className='text-2xl text-white'>Where is the campus <span className='text-orange-400'>located</span>? </h1>
                        <p className='mb-10 font-light text-gray-100 max-w-96 text-justify'>Our Campus is located at Los Polvorines, Buenos Aires. 
                            <br/>
                            The main access is located at Juan María Gutiérrez 1150, just a few meters from José León Suárez street, equidistant to routes 8 and 23 (ex202). At the intersection between both routes you can find General Lemos railway station, (Urquiza Line).
                        </p>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2203.4575191048666!2d-58.702020131544835!3d-34.52247773393887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd2507bec447%3A0x3e4c6acf8f9df78c!2sUniversidad%20Nacional%20de%20General%20Sarmiento%20(UNGS)!5e1!3m2!1ses-419!2sar!4v1733010630764!5m2!1ses-419!2sar" 
                            className="w-[450px] md:w-[450px] xl:w-[550px] xl:h-[550px] h-[450px]" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className='lg:col-span-1 col-span-1 flex flex-row justify-center p-10 overflow-hidden'>
                    <div className='bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col justify-start items-start'>
                        <h1 className='text-2xl text-white text-justify'>How to get to the university <span className='text-orange-400'>by car</span>? </h1>
                        <p className='text-white font-light text-justify'>From the center of the city the travel demands around 45 minutes. You have several options, but the two easy ones are: 1) North access-route 23 to San Miguel until Jose Leon Suarez. 2) West access-Camino del Buen Ayre Highway-route 8 to San Miguel until Jose Maria Gutierrez.</p>
                        <br/>
                        <br/>
                        <h1 className='text-2xl text-white text-justify'><span className='text-orange-400'>Public Transport </span> to San Miguel and Lemos Station:</h1><br/>
                        <h2 className='text-xl text-white '>Bus:</h2>
                        <p className='text-white font-light text-justify'>
                            203 from Puente Saavedra<br/>
                            57 from Palermo<br/>
                            176 from Chacarita<br/>
                            182 from Liniers, Villa Luro and Floresta<br/>
                        </p><br/>
                        <h2 className='text-xl text-white '>Metro and Train:</h2>
                        <p className='text-white font-light text-justify'>
                            Metro Line D, Train San Martín from Retiro to San Miguel. <br/>
                            Metro Line B, Train Urquiza from Federico Lacroze (Chacarita) to Lemos.<br/>
                        </p>
                        <br/>
                        <h1 className='text-2xl text-white text-justify'><span className='text-orange-400'>Public Transport </span> from San Miguel and Lemos to UNGS:</h1><br/>
                        <h2 className='text-xl text-white '>Bus:</h2>
                        <p className='text-white font-light text-justify'>

                        Line 440: (03) or (52)-

                        Line 501-
                        </p>
                        <br/>
                        <h2 className='text-xl text-white '>Taxi:</h2>
                        <p className='text-white font-light text-justify'>

                        Gral. Lemos station.

                        UNGS Bus: Free service between Lemos and UNGS Timetable
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactUs