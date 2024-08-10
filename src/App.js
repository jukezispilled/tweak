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
          <div className='absolute top-5 left-5 flex justify-center items-center z-10'>
            <a href="https://x.com/tweakindog" className='z-10'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#dc2626" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/" className=''>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#dc2626" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
          </div>
      <div className='z-10'>
        <div className="relative">
          <div 
            className="font-custom text-9xl md:text-[250px] leading-none animate-color"
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