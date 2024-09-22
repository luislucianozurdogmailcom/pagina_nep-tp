import React from 'react'
import { Divider } from '@nextui-org/react'

function Research_card_investigation({id_section, titulo, texto, imagen}) {
  return (
        <div id={id_section} className='max-w-7xl w-full bg-gray-800 bg-opacity-40 backdrop-blur-lg rounded-lg shadow-2xl p-5 mb-10'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='lg:w-1/2 w-full p-5'>
            <h2 className='text-3xl font-bold text-orange-400 mb-4'>{titulo}</h2>
            <p className='text-lg text-white'>
                {texto}
            </p>
          </div>
          <Divider className='lg:hidden my-4' />
          <div className='lg:w-1/2 w-full p-5'>
            <img src={imagen} alt='Transport phenomena of confined soft and active matter' className='w-full h-auto text-white rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
  )
}

export default Research_card_investigation