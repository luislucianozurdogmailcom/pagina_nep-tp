import React from 'react';

const BackgroundVideoResearch = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[10]">
        <source src={require('../../Assets/0001-0100.mp4')} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="relative z-10 grid grid-cols-1">
        {/* Aquí puedes poner el contenido que irá sobre el video */}
        <div className='w-48 h-48 my-80 mx-auto text-center text-4xl bg-transparent font-light'>
          proximamente
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideoResearch;
