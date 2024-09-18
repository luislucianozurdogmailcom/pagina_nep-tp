import React from 'react'

function Group_text() {
  return (
    <div className='h-84 bg-slate-200 w-full'>
            <div className='mx-auto grid lg:grid-cols-2 grid-cols-1 max-w-7xl'>

                <div className='text-center flex items-center justify-center py-20 col-span-1 max-w-7xl'>
                    <span className='text-5xl font-extralight text-black'>
                        Our <span className='text-orange-400 font-bold'>Team</span>
                    </span>
                </div>
                <p className='p-20 text-justify font-extralight text-2xl max-w-7xl'>
                At NEP&TP, we believe that innovation thrives in an environment where equality and diversity are paramount. Our team is a vibrant mosaic of researchers, doctoral fellows, and undergraduate scholars from various backgrounds and disciplines. We are committed to fostering an inclusive atmosphere where every voice is heard, every perspective is valued, and every individual has the opportunity to excel.
                </p>

            </div>

    </div>
  )
}

export default Group_text