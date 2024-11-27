import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function header() {
  return (
    <div className='flex justify-between bg-white text-[24px] px-10 '>
        <div className='text-[40px] mt-10px my-4 '>
             <Image 
             src="/site-logo.png"
             alt="logo"
             width={80}
             height={23}
             className=''>

             </Image>
        </div>
        <div className='flex gap-6 items-center text-black'>
     <div>Playground</div>
     <Link href="/about">About us</Link>
     <Link href="/work">Work</Link>

     <div>Contact</div>
     </div>
    </div>
  )
}

export default header
