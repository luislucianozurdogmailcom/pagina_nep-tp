import React from 'react'

import Navbar from '../Components/Navbar';
import BackgroundVideoResearch from '../Components/ResearchComponents.jsx/BackgroundVideoResearch';
import Research_lines from '../Components/ResearchComponents.jsx/Research_lines';
import Research_container from '../Components/ResearchComponents.jsx/Research_container';
import {Divider} from "@nextui-org/react";

function Research() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-slate-200 via-slate-200 to-slate-200">
      {/*Barrita de navegación*/}
      <Navbar page='Research'/>
      
      <Research_lines />
      {/*<BackgroundVideoResearch />*/}
      <Divider className='mx-4'/>
      <Research_container />
      {/*<NextUIExample />*/}
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 Todos los derechos reservados NEP&TP</p>
      </footer>
    </div>
  )
}

export default Research