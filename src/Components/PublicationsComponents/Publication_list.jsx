import React from 'react'
import Paper_lines from './Paper_lines';


function Publication_list() {

  const backgroundImage = require('../../Assets/fondo_research.png');
  
  return (
    <div className='h-full bg-slate-200 w-full'
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
            <div className='min-h-screen mx-auto grid lg:grid-cols-1 grid-cols-1 max-w-7xl'>

                <Paper_lines />

            </div>
            <div className='h-3 bg-orange-400'></div>

    </div>
  )
}

export default Publication_list