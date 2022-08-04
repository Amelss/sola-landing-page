import React from 'react'
import Navbar from './Navbar'

export default function LandingPage() {
  return (
    <div className="px-4 md:px-0 pt-4 md:pt-36 flex md:justify-center">
          <div className="bg-white rounded-md w-full md:w-[900px] bg-opacity-80 pb-20 pl-5 pr-5 pt-5">
              <Navbar />
              <div className='md:flex items-center justify-between  pb-10'>
                  <img src="./images/ethereum.png" alt="coins" className=' md:hidden nmd:w-96  py-10 mx-auto' />

                  <h1 className='text-center md:text-left text-6xl font-libreFranklin font-bold tracking-wider px-6 pt-10 md:pt-0'>Join the <span className='font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500'>Sola</span> system.</h1>

              <img src="./images/ethereum.png" alt="coins" className='hidden md:flex md:w-96 pr-4 py-10' />
              </div>
              
                <p className='font-libreFranklin text-center  md:text-left md:-mt-44 md:px-6 '>Experience the power of Sola today, <br></br> for freedom tomorrow.</p>
                
              <div className='text-center md:text-left'>
                  <button type='button' className='px-6 mt-8 md:ml-6 py-2 rounded-md text-white font-libreFranklin font-semibold bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-blue-400 hover:to-purple-500'>Launch App</button>
              </div>
                
          </div>
          

    </div>
  );
}
