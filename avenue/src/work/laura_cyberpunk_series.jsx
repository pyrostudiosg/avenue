import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/toycity/cyberpunk/laura_cyberpunk_series_Landing_Page.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const laura_cyberpunk_series = () => {
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
                    <p className='text-[#000000] indent-8 leading-[30px] mb-[50px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                    For the launch of the Laura Cyberpunk series, we crafted an animation video that draws inspiration from the cyberpunk genre. Our creative approach focused on designing a dark yet vibrant neon-lit scene, embodying the essence of a cyberpunk world.
                    </p>
                    {/* <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                    Our creative approach this year centered around the use of body scans and animations of the pico laser machine in action. We focused on illustrating the precision and efficacy of the treatments, giving viewers a clear understanding of how Lloyds Medical Group can enhance their appearance.
                    </p> */}

                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/965104925?h=3fec4b88e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div>
                        <h1 className='text-[#000000] text-center font-bold mt-20 mb-[100px] my-10 sm:text-2xl text-0.5xl'>
                            ToyC!ty Laura Cyberpunk Series</h1>
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
                                        src="https://player.vimeo.com/video/966402219?h=a33f0862b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402277?h=a83fa6e2ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402342?h=37a8755edb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402401?h=5d7f5653f6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402457?h=26e644ccca&badge=0&autopause=0&player_id=0&app_id=58479/embed
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402512?h=203424a702&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402548?h=2d47bf4481&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402592?h=40d2d9612e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402633?h=7adc6cf180&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966402703?h=a78f7dc04e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
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
                            <a href='/work/laura_space_capsule_series' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            Laura Space Capsule Series</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default laura_cyberpunk_series;


