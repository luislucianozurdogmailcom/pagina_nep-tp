import React from 'react'
import ContactUs from '../Components/ContactComponents/ContactUs';
import Navbar from '../Components/Navbar';

const Contact = () => {

    const backgroundImage = require('../Assets/fondo_research.png');


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    
    <Navbar page='Contact'/>
    
    <ContactUs />

    <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 Todos los derechos reservados NEP&TP</p>
    </footer>
    </div>
  )
}

export default Contact