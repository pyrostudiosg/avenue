import React from 'react'
import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import {motion} from 'framer-motion'
import PyroLogo from '../assets/Logo Shape.svg';
import Footer from '../components/Footer';

const Works = () => {

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
        className='mt-[60px] pt-20 pb-20 bg-[#ffffff] flex flex-col items-center'
      >
        <div className='text-black font-FuturaBold h-[35vh] flex flex-col items-center justify-center'>
          <img src={PyroLogo} className='h-20 mb-[40px]' alt="" />
          <h1 className='text-center sm:text-7xl text-5xl'>WORK</h1>
        </div>
        <div className='w-[70vw] border-b-2 border-black'></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col justify-center items-center my-[80px]"
        >
          <WorkItem link={"/work/uniiione"} client={"uniiione"} project={"Nasdaq"} category={"Concept Visualisation"}/>
          <WorkItem link={"/work/takami"} client={"Takami"} project={"Takami"} category={"3D Animation"}/>
          <WorkItem link={"/work/avenue_juvederm"} client={"Avenue Medical Group"} project={"Juvederm"} category={"3D Animation"}/>
          <WorkItem link={"/work/lloyds_part_two"} client={"Lloyds Medical Group"} project={"The Invixible Art Part Two"} category={"3D Animation"}/>
          <WorkItem link={"/work/zhangweili"} client={<h1 className='text-base'>中国网络视听年度盛典</h1>} project={<h1 className='text-base'>体育创意秀《中国故事·武极未来》</h1>} category={"3D Animation"}/>
          <WorkItem link={"/work/laura_sweet_monster_series"} client={"ToyC!ty"} project={"Laura Sweet Monster Series"} category={"3D Animation"}/>
          <WorkItem link={"/work/laura_cyberpunk_series"} client={"ToyC!ty"} project={"Laura Cyberpunk Series"} category={"3D Animation"}/>
          <WorkItem link={"/work/laura_space_capsule_series"} client={"ToyC!ty"} project={"Laura Space Capsule Series"} category={"3D Animation"}/>
          <WorkItem link={"/work/lloyds_part_one"} client={"Lloyds Medical Group"} project={"The Invixible Art Part One"} category={"3D Animation"}/>
          <WorkItem link={"/work/larmoire_virtual_store"} client={"L'armoire"} project={"L'armoire Virtual Store"} category={"Virtual Space Design"}/>
          <WorkItem link={"/work/lofficiel_china_louis_vuitton"} client={"L'officiel China"} project={"Louis Vuitton"} category={"3D Modeling"}/>
          {/* <WorkItem link={"/work/Kappa "} client={"Kappa"} project={"Kappa昊奇心大冒险"} category={"Compositing"}/> */}

        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Works

const WorkItem = ({ link, client, project, category }) => (
  <div className=''>
    <a href={link} className="px-[40px] w-[90vw] grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4  text-2xl font-FuturaLight items-center text-left">
      <p className="sm:p-10 px-4 py-2 md:px-8 md:py-5">{client}</p>
      <p className="sm:p-10 px-4 py-2 md:px-8 md:py-5">{project}</p>
      <p className="text-right sm:p-10 px-4 py-2 md:px-8 md:py-5 sm:contents hidden md:block">{category}</p>
    </a>
  </div>
)