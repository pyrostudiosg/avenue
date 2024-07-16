import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/lloyds/part two/LloydsPartTwoLanding.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const lloyds_part_two = () => {
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
                        Lloyds Medical Group
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Animation
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                    For Lloyds Medical Group's latest branding video, we aimed to create an animation that not only highlights the aesthetic results of their treatments but also underscores the advanced technology and professionalism behind their services. 
                    Building on the metaphorical approach used in last year’s project, <a href="/work/lloyds_part_one" className="font-bold">The Invixible Art - Part One</a>, we shifted to a more tangible and realistic representation to appeal to a broader audience and emphasize the effectiveness of their medical solutions.
                    </p>
                    <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                    Our creative approach this year centered around the use of body scans and animations of the pico laser machine in action. We focused on illustrating the precision and efficacy of the treatments, giving viewers a clear understanding of how Lloyds Medical Group can enhance their appearance.
                    </p>

                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/965691111?h=ac1b158163&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div className='mb-[50px]'>
                        <h1 className='text-[#000000] text-center font-bold mt-20 my-10 sm:text-2xl text-0.5xl'>The Invixible Art - Part Two</h1>
                    </div>

                   


                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                        Individual Frames
                        </p>

                        <div className='w-full px-[2px] mb-[100px]'>
                   
                            <div className='flex flex-col items-center bg-[#101010]  px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289446?h=e65685fae0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289528?h=815648c0bd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289603?h=f013105ed9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289665?h=91beac4300&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289741?h=9c9821048c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289816?h=7cf23280cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289897?h=eaaf5008f7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966289995?h=86a424f357&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966290030?h=f60968ba4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966299871?h=e28fd89ede&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*next project*/}
                    <div className='w-full px-1 mb-[50px]'>
                        <h1 className='text-5xl text-[#909090] font-FuturaMedium'>Next</h1>
                        <div className='mt-[20px]'>
                            <a href='/work/laura_sweet_monster_series' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            <h1 className='text-base'>体育创意秀《中国故事·武极未来》</h1></a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default lloyds_part_two;


