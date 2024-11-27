import React from 'react'
import Image from 'next/image'
function Hero() {
    return (
        <div>
        <div className='flex justify-between h-screen '>
            <div className='w-1/2 mx-12 '>
            <div className='flex flex-col gap-4 mt-[150px]'>
                <h1 className='font-dm-sans text-6xl font-medium leading-[58.32px] tracking[-0.03em] text-left'>Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
            <p className="font-dm-sans text-[32px] font-normal leading-[37.44px] tracking-[-0.03em] text-left"
            >My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.

Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
            </div>
            </div>


            <div className='w-1/2 '>
            <Image 
    src="/Profile Photo.png"  
    alt="pic"
    width={421}
    height={591}
    className="w-[421px] h-[591px]" 
/>
            </div>


        </div>
        <hr className='mt-10 bg-black' style={{height:'2px'}} />


<div className='flex justify-between'>
    <hr className="my-custom-line"/>
        <div className='w-1/2'>
            <div className='flex flex-col gap-4 w-[347px]'>
      <h2 className="font-dm-sans text-[32px] font-normal leading-[37.44px] tracking-[-0.03em] text-left">
        I am thrilled to answer to your next project </h2>
    </div>
    </div>

    <div className='w-1/2 '>
    <div>
        <h2 className="font-dm-sans text-[32px] font-normal leading-[37.44px] tracking-[-0.03em] text-left">makifkarasu@outlook.com</h2>
    </div>
    </div>
    </div>
   </div>
    )
}

export default Hero
