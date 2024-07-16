
import './App.css'
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
        <h1 className='text-yellow-500'>haha</h1>
      </motion.div>
    )
  }

