// src/components/Home.js
import React from 'react';
// import NextUIExample from '../Components/NextUIExample';
import Navbar from '../Components/Navbar';
import Coverpage from '../Components/Coverpage';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/*Barrita de navegación*/}
      <Navbar page='Home'/>
      
      {/*Portada de página principal*/}
      <Coverpage />
      
      {/*<NextUIExample />*/}
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 Todos los derechos reservados NEP&TP</p>
      </footer>
    </div>
  );
};

export default Home;
