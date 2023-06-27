


import React from 'react'


const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>

          <div className='max-h-[500px] relative'>
          {/* overlay */}
             <div className='max-h-[500px] absolute top-[0] left-[0] text-white w-full h-full bg-black/60 flex flex-col justify-center space-y-1 '>
                <h1 className='text-3xl sm:text-5xl md:text-6xl px-4 font-bold'>The<span   className='text-orange-500 '>Best</span></h1>
                <h1 className='text-3xl sm:text-5xl md:text-6xl px-4 font-bold'><span className='text-orange-500 '>Foods</span>Delivered</h1>
             </div>
             <img className='max-h-[500px] w-full object-cover' src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   alt="hero " />
          </div>
    </div>
  )
}

export default Hero