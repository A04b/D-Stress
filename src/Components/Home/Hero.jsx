import React from 'react';
import { Link } from 'react-router-dom';
import S_header from '../../S_header';


// import Sidebar from '../Sidebar';

function Hero() {
  return (
    <>
      <S_header></S_header>
      <div className="h-[100vh] backdrop-blur-xl bg-[url('/assets2/BGwallpaper.jpeg')] bg-cover bg-no-repeat"></div>
      <div className="p-8 absolute top-[150px] w-screen h-screen items-center">
        
        <div className='align-middle'>
          
          <div className='text-balck pl-7'> 
            <h2 className="lg:text-7xl  lg:font-bold text-3xl font-bold text-left text-white font-outline-1">You can't control the waves, but you can learn to surf</h2>
            <p className='lg:mt-20 lg:text-3xl mt-10 text-left lg:font-bold text-white'>Self-care is not selfish, it's essential</p>
            <p className='lg:mt-2 lg:text-2xl text-xl text-left text-white'>Gain an understanding of stress, its causes, and effective strategies to manage it.</p>
            <div className='m-10 flex items-center justify-start gap-10 '>
              <Link to="/test" className='text-white text-2xl font-bold pt-2 pb-2 pr-3 pl-3 bg-purple-500 rounded-3xl animate-pulse'>Get Started</Link>
              {/* <Link to="/Resources" className="text-2xl pt-2 pb-2 pr-3 pl-3 hover:pt-2 hover:pb-2 hover:pr-3 hover:pl-3 Tdelay hover:bg-white hover:rounded-3xl hover:text-green-900 hover:font-bold font-bold">Learn More</Link> */}
            </div>
          </div>
        </div>
      </div>
    
      <hr className="p-1 bg-white"/>
    </>//home's main div
  );
}

export default Hero;






{/* bg-[rgba(0,0,0,0.5)]  <video src={Videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video> */}