import React from 'react'
import Navbar from '../components/Navbar'
import {motion} from 'framer-motion'
import PyroLogo from '../assets/Logo Shape.svg';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='mt-[60px] mb-[300px] pt-20 pb-20 bg-[#ffffff]'
      >
        <div className='text-black font-FuturaBold h-[35vh] flex flex-col items-center justify-center'>
          <img src={PyroLogo} className='h-20 mb-[40px]' alt="" />
          <h1 className='text-center sm:text-7xl text-5xl'>CONTACT</h1>
        </div>
        <div className='border-b-2 border-black sm:mx-[200px] mx-[30px]'></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center"
        >
         <div className='my-4 flex flex-col items-center justify-center'>
          <p className='mt-20 mb-10 mx-10 font-FuturaLight text-2xl text-black text-center'>
            If you have a project or collaboration in mind, please reach out to us at
          </p>
          {/* <p className='font-FuturaBold text-2xl'>+65 9819 2197</p> */}
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=info@pyrostudiosg.com'
            className='text-center text-black font-FuturaBold text-2xl relative z-10 mx-10 email'
          >
            info@pyrostudiosg.com
          </a>
          
        </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact