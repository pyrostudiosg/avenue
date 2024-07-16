import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/zhangweili/zhangweili landing page.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const zhangweili = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=' bg-[#ffffff]'>
            <Navbar />
            <div className='mt-[90px] mx-5'>
                <div className='mb-[50px]'>
                    <div className='flex flex-row items-center'>
                    <h1 className='text-5xl font-FuturaLight font-bold my-5 '>
                        2023
                    </h1>
                    <h1 className='text-[40px] mb-2'>中国网络视听年度盛典</h1>
                    </div>
                    
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Animation
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                    In 2023, we embarked on a remarkable project with UFC professional player Zhang Weili, producing a breathtaking 24-meter wide and 6-meter high background video for her speech.</p>
                    <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                    By leveraging the advanced capabilities of Unreal Engine 5, we achieved the rendering of this high-resolution video within a very limited time frame.
                    This collaboration highlighted our expertise in crafting high-quality, large-scale visual content for significant events, setting a new benchmark in our portfolio.
                    </p>

                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/965178689?h=58909b9cd6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div>
                        <h1 className='text-[#000000] text-center font-bold mt-20 my-10 sm:text-2xl text-0.5xl'>体育创意秀《中国故事·武极未来》</h1>
                    </div>

                    {/* <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                    Our creative vision for this project was to use metaphorical visuals to symbolize the rejuvenating effects of Lloyds Medical Group's treatments. We chose flowers and pearls as central motifs due to their strong associations with purity, beauty, and renewal.
                    </p> */}


                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mt-[50px] mb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                        Individual Frames
                        </p>

                        <div className='w-full px-[2px] mb-[100px]'>
                   
                            <div className='flex flex-col items-center bg-[#101010]  px-10'>
                                <div className="relative w-[80vw] pb-[26.71%] h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969633522?h=d0c823b1b9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[26.71%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969633653?h=85962e3e8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[26.71%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969633750?h=78b7ab74eb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[26.71%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969633925?h=10e863c28d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[26.71%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969634265?h=35dce644d8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                               
                                <div className="relative w-[80vw] pb-[26.71%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/969634405?h=37f41526bc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
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
                            Laura Sweet Monster Series</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default zhangweili;


