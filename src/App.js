import React from 'react';
import { motion } from 'framer-motion';
import bg from './bg.png';
import tweak from './tweak.png';

function App() {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center relative overflow-clip"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 h-screen w-screen bg-black opacity-30'></div>
      <div className='absolute top-3 left-3 flex space-x-1 items-center z-[50]'>
        <a href="https://x.com/tweakindog" className='transition ease-in-out duration-150'>
          <img src="Xlogo.jpg" className='size-12'></img>
        </a>
        <a href="https://t.me/" className='transition ease-in-out duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-14' viewBox="0 0 48 48">
            <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path>
          </svg>
        </a>
      </div>
      <div className='z-10'>
        <div className="relative">
          <div 
            className="font-custom text-9xl md:text-[200px] leading-none animate-color"
            style={{
              color: '#dc2626',
              textShadow: `
                -1px -1px 0 #f97316,  
                1px -1px 0 #f97316,
                -1px 1px 0 #f97316,
                1px 1px 0 #f97316,
                2px 2px 0 #84cc16,
                3px 3px 0 #84cc16,
                4px 4px 0 #84cc16,
                5px 5px 0 #84cc16
              `
            }}
          >
            Tweak
          </div>
        </div>
        <p className='z-10 text-center text-white font-custom text-sm md:text-xl -mt-4'>
          CA: updating...
        </p>
      </div>

      <motion.img
        src={tweak}
        alt="Tweak"
        className="absolute -bottom-[10%] right-0 mb-4 mr-4 w-[85%] md:w-[55%]"
        style={{ rotate: '-10deg' }} // Rotate a little left
        animate={{
          x: [0, -2, 2, -2, 2, 0],
          y: [0, 2, -2, 2, -2, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </div>
  );
}

export default App;