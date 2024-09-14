import React from 'react'

import Navbar from '../Components/Navbar';
import Container from '../Components/GroupComponents/Container';
import BackgroundVideo from '../Components/GroupComponents/BackgroundVideoGroup';

function Group() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/*Barrita de navegación*/}
      <Navbar page='Group'/>
      
      <Container fondo={false}/>
      
      {/*<NextUIExample />*/}
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 Todos los derechos reservados NEP&TP</p>
      </footer>
    </div>
  )
}

export default Group