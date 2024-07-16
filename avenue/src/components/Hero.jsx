import React from 'react';
import {ReactTyped} from 'react-typed';
import HeroVideo from '../assets/HeroBackground.mp4';

const Hero = () => {
  return (
    <div className='mt-[60px]'>
        <div className="relative w-full h-[90vh]">
            <div className="absolute mt-10 inset-0 z-0">
                <video
                className="w-full h-full object-cover p-2 rounded-3xl"
                autoPlay
                loop
                muted
                playsInline
                style={{ pointerEvents: 'none' }}
                >
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div className='relative z-10 max-w-[900px] w-full h-full mx-auto text-center flex flex-col justify-center'>
                <div className='flex justify-center items-center'>
                  <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
                  <ReactTyped 
                      className='md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 pl-2 text-white font-FuturaMedium'
                      strings={['3D Modeling', 'Concept Visualisation', 'Compositing', 'Virtual Space Design', '3D Animation']} 
                      typeSpeed={120}
                      backSpeed={50}
                      loop 
                  />
                </div>
                <p className='md:text-2xl text-xl font-bold text-[#818181] mb-10 font-FuturaLight'>
                  Create your immersive experience now.
                </p>
                <a href="/service" className="text-white underline font-medium mx-auto block text-center font-FuturaMedium">
                  Explore
                </a>

                
            </div>
            </div>
    </div>
    
  );
};

export default Hero;
