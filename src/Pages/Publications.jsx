import React from 'react'

import Navbar from '../Components/Navbar';
import Group_text from '../Components/PublicationsComponents/Group_text';
import Publication_list from '../Components/PublicationsComponents/Publication_list'

function Publications() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/*Barrita de navegación*/}
      <Navbar page='Publications'/>
      
      <Group_text />

      <Publication_list />
      
      {/*<NextUIExample />*/}
      <footer className="w-full bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 Todos los derechos reservados NEP&TP</p>
      </footer>
    </div>
  )
}

export default Publications