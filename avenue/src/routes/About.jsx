import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import HeroVideo from '../assets/HeroBackground.mp4';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PyroLogo from '../assets/Logo Shape.svg';
import { useEffect } from 'react';


const About = () => {
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
        className='mt-[60px] pt-20 pb-20 bg-[#ffffff]'
      >
        <div className='text-black font-FuturaBold h-[35vh] flex flex-col items-center justify-center'>
          <img src={PyroLogo} className='h-20 mb-[40px]' alt="" />
          <h1 className='text-center sm:text-7xl text-5xl'>ABOUT US</h1>
        </div>
        <div className='border-b-2 border-black md:mx-[200px] sm:mx-[70px] mx-[30px]'></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center items-center"
        >
          <div className='flex flex-col justify-center items-center'>
            <p className='indent-8 first-letter:text-3xl text-xl my-[100px] max-w-[500px] text-justify font-FuturaLight mx-10'>
                At Pyro Studio, we transform ideas into stunning visual realities. Based in Singapore, we specialize in 3D modeling, compositing, 3D animation, concept visualisation, and virtual space design. Our mission is to push the boundaries of creativity and technology to deliver exceptional 3D production services that captivate and inspire.
            </p>
          </div>

   
          
          
        </motion.div>
        <div className='border-b-2 border-black md:mx-[200px] sm:mx-[70px] mx-[30px] z-[50]'></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center items-center sm:mx-10 mx-3 mb-[100px]"
        >
         
          <div className='timeline-items flex flex-col '>
            <TimelineItem year={2021} title={"The Beginning"} content={
              "Our journey began in 2021 with a passion for innovation and creativity.\n We established our studio with a commitment to pushing the boundaries of digital experiences."
              } />
            <TimelineItem year={2022} title={"Expanding Horizons"} content={
              "Enhanced our capabilities with Unreal Engine 4, enabling more immersive and interactive experiences."
              } />
            <TimelineItem year={2023} title={"Major Achievements"} content={
              "Produced a stunning 24-meter wide and 6-meter high background video for UFC star Zhang Weili's speech, showcasing our expertise in creating high-quality, large-scale visual content for major events.!"
              } />
            <TimelineItem year={2024} title={"Exploring New Frontiers"} content={
              "Ventured into augmented reality (AR) video production, expanding our service offerings to include cutting-edge AR experiences. This new direction underscores our commitment to staying at the forefront of technological advancements in the digital space."
              } />
          </div>

      
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}


export default About

const TimelineItem = ({ to, year, content, title, onClick }) => (
  <div className='timeline-item'>
    <div className='timeline-dot'></div>
    <div className='timeline-date font-FuturaBold text-2xl'>{year}</div>
    <div className='timeline-content'>
      <h3 className='font-FuturaBold'>{title}</h3>
      <p className='font-FuturaLight'>{content}</p>
    </div>
   
  </div>
);







{/* <div className=''>
          <div className='relative mx-20 h-[70vh] z-10'>
            <div className='text-white text-center py-20 text-5xl font-FuturaBold'>Milestone</div>
            <div className='timeline-items'>
              <TimelineItem year={"2021"} title={"Founded"} content={"foundeddsfasfdafdsadfdas"}/>
              <TimelineItem year={"2021"} title={"Founded"} content={"foundeddsfasfdafdsadfdas"}/>

            </div>
          </div>
      
        </div> */}