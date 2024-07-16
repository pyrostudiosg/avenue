import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/toycity/space capsule/Toycity Space Capsule Landing Page.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const laura_space_capsule_series = () => {
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
                        ToyC!ty
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Animation
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                    In our Laura Space Capsule series video, we place significant emphasis on the formation and design of the capsule itself. Through meticulous 3D animation, we meticulously illustrate the gradual formation of the capsule, highlighting its intricate structure and futuristic design.
                    </p>
                    {/* <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                    Our creative approach this year centered around the use of body scans and animations of the pico laser machine in action. We focused on illustrating the precision and efficacy of the treatments, giving viewers a clear understanding of how Lloyds Medical Group can enhance their appearance.
                    </p> */}

                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/966417860?h=6d112353b3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div>
                        <h1 className='text-[#000000] text-center font-bold mb-[100px] mt-20 my-10 sm:text-2xl text-0.5xl'>
                            ToyC!ty Laura Space Capsule Series</h1>
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
                                        src="https://player.vimeo.com/video/966418087?h=0b0bf868c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418139?h=e04e4682fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418187?h=ace0943d52&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418247?h=e402620081&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418286?h=76d8f8393e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418331?h=fabca88c0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418367?h=67910c60f5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966418417?h=55c52af406&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
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
                            <a href='/work/lloyds_part_one' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            The Invixible Art 1</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default laura_space_capsule_series;


