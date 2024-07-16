import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroVideo from '../assets/HeroBackground.mp4';
import { Link } from 'react-router-dom';
import PyroLogo from '../assets/Logo Shape.svg';
import { useEffect } from 'react';

const Services = () => {
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
          <h1 className='text-center sm:text-7xl text-5xl'>WHAT WE DO</h1>
        </div>
        <div className='border-b-2 border-black sm:mx-[200px] mx-[30px]'></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center"
        >
          {/* Staggered animation for ServiceItems */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ServiceItem
              type={"3D Modeling /"}
              content={"We specialize in creating detailed and precise 3D models that bring your concepts to life. Whether you need architectural models, product designs, character models, or any other 3D representation, our team uses advanced software and techniques to ensure every detail is accurate and visually stunning. Our 3D models are optimized for various uses, including virtual reality (VR), augmented reality (AR), gaming, and industrial design."}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceItem
              type={"Compositing /"}
              content={"Our compositing services integrate various visual elements seamlessly to create cohesive and compelling visuals. We combine live-action footage with computer-generated imagery (CGI), digital matte paintings, and other elements to produce realistic scenes that captivate audiences. Our team is skilled in techniques such as green screen keying, rotoscoping, and color grading, ensuring that all components blend perfectly to create a unified final product."}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ServiceItem
              type={"Virtual Space Design /"}
              content={"We design immersive virtual environments tailored to your needs, whether for virtual reality experiences, architectural visualization, or interactive simulations. Our expertise includes creating realistic and engaging spaces that users can explore and interact with. From virtual showrooms and exhibitions to complex architectural interiors and exteriors, we bring your vision to life in a way that’s both functional and visually appealing."}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ServiceItem
              type={"Concept Visualization /"}
              content={"We turn your ideas into vivid visual representations, making your vision a reality. Our concept visualization services are perfect for pre-visualizing projects before they are built or produced. We create detailed concept art, storyboards, and 3D renderings that help you communicate your ideas clearly and effectively. Whether you’re developing a new product, planning an architectural project, or creating a new media production, our visualizations provide a clear and compelling preview of the final result."}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <ServiceItem
              type={"3D Animation /"}
              content={"From character animation to dynamic scenes, we bring motion and emotion to your projects. Our 3D animation services cover a wide range of applications, including commercials, films, video games, and educational content. We focus on creating lifelike animations with fluid motion, expressive characters, and captivating storytelling. Our animators use the latest tools and techniques to ensure high-quality results that resonate with your audience."}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Services;



const ServiceItem = ({ type, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className='relative z-10 mx-10 py-[60px] bg-[#fefefe] rounded-xl m-8 '
  >
    <div className='md:grid md:grid-cols-2 sm:flex sm:flex-col items-center'>
      <motion.h1
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='sm:px-10 sm:ml-10 md:text-5xl sm:text-4xl text-3xl text-black font-FuturaMedium md:text-right text-center underline'
      >
        {type}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='first-letter:text-3xl md:pt-0 sm:pt-3 pt-6 px-5 text-[#101010] text-justify max-w-[500px] font-FuturaLight text-xl'
      >
        {content}
      </motion.p>
    </div>
  </motion.div>
);




