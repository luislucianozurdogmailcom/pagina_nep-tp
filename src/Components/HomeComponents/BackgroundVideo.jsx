import React from 'react';
import Coverpage from './Coverpage';

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[10]">
        <source src={require('../../Assets/0001-0100.mp4')} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="relative z-10">
        {/* Aquí puedes poner el contenido que irá sobre el video */}
        <Coverpage fondo={false} theme_dark={true}/>
      </div>
      <div className='h-3 bg-orange-400'></div>
    </div>
  );
};

export default BackgroundVideo;
