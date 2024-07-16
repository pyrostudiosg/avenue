import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/toycity/sweet monster/ToycitySweetMonsterLanding.webp'
import Process1 from '/works/toycity/sweet monster/Process 1.webp'
import Process2 from '/works/toycity/sweet monster/Process 2.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const laura_sweet_monster_series = () => {
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
                    <p className='text-[#000000] indent-8 leading-[30px] mb-[100px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                    For Toycity's "Sweet Monsters" series, we've developed an enchanting 3D animation inspired by the iconic Harry Potter castle imagery. The scene unfolds within a dark, mystical castle, accentuated by atmospheric thunder and lightning effects.
                    </p>
                    {/* <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                        Our creative approach this year centered around the use of body scans and animations of the pico laser machine in action. We focused on illustrating the precision and efficacy of the treatments, giving viewers a clear understanding of how Lloyds Medical Group can enhance their appearance.
                    </p> */}

                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/965181511?h=c71ad6b3fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div className=''>
                        <h1 className='text-[#000000] text-center font-bold mt-20 my-10 sm:text-2xl text-0.5xl'>
                            ToyC!ty Laura Sweet Monster Series</h1>
                    </div>

                    <p className='indent-8 text-[#000000] mb-[100px] md:text-2xl text-xl font-light mt-10  sm:max-w-[50vw]  text-justify'>
                        Due to a very limited production timeline, we opted to use Unreal Engine 5 for creating the animation. This decision was driven by Unreal Engine 5's rapid rendering capabilities and its real-time development features, which allow for immediate visual feedback during scene creation. The efficiency and speed of Unreal Engine 5 enabled us to meet our tight deadlines without compromising on quality.
                    </p>
{/* 
                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[50vw]  text-justify'>
                        In addressing the common skincare concern of pimple removal, we sought to inject a sense of playfulness into the narrative while emphasizing Takami’s efficacy in skincare solutions. The concept of the Takami blue bottle playfully interacting in a whack-a-mole style game with pimples reflects both the effectiveness and the approachability of Takami products. This approach not only entertains but also educates, illustrating Takami’s ability to tackle skincare challenges with precision and ease.
                    </p>



                    <p className='text-[#000000] md:text-2xl font-light text-xl mt-[50px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                        Through these animations, we aimed not only to highlight Takami’s advanced skincare technologies but also to connect emotionally with consumers by illustrating the transformative journey towards healthier and radiant skin. This approach not only strengthens Takami’s brand identity but also reinforces its position as a leader in luxury skincare innovation.
                    </p> */}


                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                            Individual Frames
                        </p>

                        <div className='w-full px-[2px] mb-[100px]'>

                            <div className='flex flex-col items-center bg-[#101010]  px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966350499?h=4f6d1f712a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352023?h=1dbc03da28&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352068?h=f6a5c47f4f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352104?h=42f7064a48&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352141?h=379903863f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352183?h=9485c2a3f5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352209?h=ae11cfee3c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352250?h=6aa8cdedbc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352292?h=8834ff6d98&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352326?h=117e9ca98b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966352378?h=479c6e5c2f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                                    Process
                                </p>
                            </div>

                            {/*Process*/}
                            <div className='mt-[100px] mx-[100px]'>
                                <img src={Process1} alt="" className='my-10' />
                                <img src={Process2} alt="" />
                            </div>

                        </div>
                    </div>

                    {/*next project*/}
                    <div className='w-full px-1 mb-[50px]'>
                        <h1 className='text-5xl text-[#909090] font-FuturaMedium'>Next</h1>
                        <div className='mt-[20px]'>
                            <a href='/work/laura_cyberpunk_series' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                                Laura Cyberpunk Series</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default laura_sweet_monster_series;


