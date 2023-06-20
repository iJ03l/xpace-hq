import React from 'react'
import splash from '../assets/images/splash-screen.png'

function Hero() {
  return (
    <div className="max-w-[1120px] mx-auto font-inter">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className='text-4xl font-bold items-center justify-center'>Easy Living with Logistics/Proxy services.</h1>
          </div>
        </div>
        <div className="col-span-6">
          <img src={splash} alt="spash-screen" />
        </div>
      </div>
    </div>
  );
}

export default Hero