
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Space from './components/Space'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Modeling from './components/Modeling'
import Modelling from './components/Modelling'
import Visualisation from './components/Visualisation'
import VirtualSpace from './components/VirtualSpace'
import Compositing from './components/Compositing'
import Animation from './components/Animation'
import {motion} from "framer-motion"
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=' bg-[#ffffff]'
      > 
        <Navbar />
        <Hero />
        <Modelling />
        <Visualisation />
        <VirtualSpace />
        <Compositing />
        <Animation />
        {/* <Space /> */}
        <Newsletter />
        {/* <Cards /> */}
        <Footer />
      </motion.div>
    )
  }

