import React from 'react'
import {Divider} from "@nextui-org/react";

function Research_container() {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center bg-slate-200'>
        <div className='max-w-7xl py-10 bg-orange-300 w-full rounded-b-3xl'>
            <span className='text-white font-mono font-extrabold text-3xl'>
                Heat and energy transport phenomena
            </span>
        </div>
        <div className='max-w-7xl py-10  w-full rounded-3xl flex flex-row'>
            <span className='text-black text-lg h-full text-center items-center flex'>
                We study energy transport phenomena in low dimensional systems subject to time dependent fields and inmersed in complex environments.
            </span>
            <Divider className='w-1' orientation='vertical'/>
            <div className='flex flex-csol'>
                <img src={'https://nep-tp.ungs.edu.ar/wp-content/uploads/2018/06/Fig1b-01.jpg'} />
            </div>
        </div>
    </div>
  )
}

export default Research_container