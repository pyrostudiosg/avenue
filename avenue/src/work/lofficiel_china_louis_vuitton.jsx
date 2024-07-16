import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/lofficiel/Lofficiel China 1.webp'
import UVProcess from '/works/lofficiel/lv uv.webp'
import TexturingProcess from '/works/lofficiel/lv texturing.webp'
import Viewport from '/works/lofficiel/lv viewport.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const lofficiel_china_louis_vuitton = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=' bg-[#ffffff]'>
            <Navbar />
            <div className='mt-[90px] mx-5'>
                <div className='mb-[50px]'>
                    <h1 className='text-5xl font-FuturaLight font-bold my-5 '>
                        L'officiel China
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Modeling
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                        We have a passion for blending high fashion with cutting-edge digital artistry. 
                        In 2021, we had the extraordinary opportunity to collaborate with L'Officiel China, a prestigious name in the fashion industry, to create an image featuring Louis Vuitton bags.
                    </p>
                    
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[50px] sm:max-w-[50vw]  text-justify'>
                    Our collaboration with L'Officiel China was a seamless blend of creativity and precision. We started with a series of brainstorming sessions, aiming to merge the timeless luxury of Louis Vuitton with contemporary digital aesthetics. Our team utilized advanced 3D modeling and rendering techniques to bring the concept to life, ensuring that every detail of the bags was meticulously recreated to match the brand’s high standards.
                    </p>

                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[50px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                    The floating LV logos were designed to add a dynamic element to the composition, symbolizing the pervasive and influential nature of the brand. The black wires connecting the bags introduce a sense of interconnectedness and modernity, reflecting the brand's innovative approach to fashion.
                    </p>


                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mt-[50px] mb-[50px] pb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                        Process
                        </p>
                        <div className='mx-10 flex flex-col items-center justify-center'>
                            <img src={UVProcess} className='mt-[100px]' alt="" />
                            <h1 className='text-center text-[#505050] mt-10'>UV Unwrapping</h1>
                            <img src={TexturingProcess} className='mt-[100px]' alt="" />
                            <h1 className='text-center text-[#505050] mt-10'>Texturing</h1>
                            <img src={Viewport} className='mt-[100px]' alt="" />
                            <h1 className='text-center text-[#505050] mt-10'>Viewport Rendering</h1>
                        </div>
                        
                       
                    </div>

                    {/*next project*/}
                    <div className='w-full px-1 mb-[50px]'>
                        <h1 className='text-5xl text-[#909090] font-FuturaMedium'>Next</h1>
                        <div className='mt-[20px]'>
                            <a href='/work/uniiione' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            uniiione</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default lofficiel_china_louis_vuitton;


