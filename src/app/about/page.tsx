import React from 'react'
import Project1 from '../componenets/Project1'
import Project2 from '../componenets/Project2'
import Project3 from '../componenets/Project3'

function page() {
  return (
    <div>
    <div className='flex justify-between h-screen mt-[424px] '>
      <div className='w-1/2'>
        <div className="w-[350px] font-dm-sans text-[60px] font-medium leading-[58.32px] tracking-[-0.03em] text-left">Hello, I’m Mehmet Akif.
        </div>
      </div>
      <div className='w-1/2'>
        <h2 className="font-dm-sans text-[32px] font-normal leading-[37.44px] tracking-[-0.03em] text-left">A senior-year design student who trying to specialize in 3D modeling & texturing.

        </h2>

       

      </div>
      <div></div>
      
    </div>
    <Project1 />
    <div><Project2/></div>
    <div><Project3/></div>


  </div>



  )
}

export default page
