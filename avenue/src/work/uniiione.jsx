import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/uniiione/nasdaq/uniiione_nasdaq.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Uniiione = () => {
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
                        Uniiione's Vision
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        Concept Visualisation
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='indent-8 leading-[30px] font-light first-letter:text-3xl md:2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                        /Experience the future of advertising with Uniiione's groundbreaking Nasdaq LED mockup! Our studio presents a stunning previsualization of your brand lighting up Times Square. By leveraging advanced motion tracking and 3D animation, we transform existing footage of the bustling Times Square into a canvas for dynamic and engaging content.
                    </p>
                    <p className='md:2xl text-xl font-light mt-10 sm:mb-[100px] mb-[60px] sm:max-w-[50vw]  text-justify'>
                        In this captivating mockup, watch as the LED screen lifts to reveal our playful bearbricks characters, emerging to service a high-speed car race fueled by Bitcoin—a nod to Uniiione's expertise in Web3 and NFT marketing. Marvel at the seamless integration of Uniiione’s bespoke advertisements, which replace other LED screens around the street, showcasing our global event planning and strategic advertising prowess.
                    </p>
                    <div className="relative w-full pb-[56.25%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                            src="https://player.vimeo.com/video/964218513?h=069b94ae0a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <p className='md:2xl font-light text-xl mt-[100px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                        This mockup not only illustrates the immense potential of LED advertising but also highlights Uniiione’s creative and technical capabilities in bringing your brand to life on the world's largest digital stages.
                    </p>

                    {/* Process  */}
                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#e50014] flex flex-col items-center pb-[100px] mb-[50px]'>
                        <div className="relative w-[80vw] pb-[56.25%] h-0 mt-10 ">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                                src="https://player.vimeo.com/video/964451249?h=e60926e585&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="Nasdaq Final"
                            ></iframe>
                        </div>
                        <div className='w-[80vw]'>
                            <h1 className='text-white font-FuturaLight font-bold justify-self-start text-3xl mb-5'>/ Combining PBR and Toon Shading</h1>
                            <p className='text-white font-light justify-self-start text-xl text-justify'>One of the most interesting elements of our video is the fusion of a photorealistic PBR scene with a toon-shaded anime character. This combination creates a visually captivating contrast that draws the viewer's attention. </p>
                        </div>

                        <div className="relative w-[80vw] pb-[56.25%] mt-10 mb-10 ">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                                src=
                                "https://player.vimeo.com/video/965097265?h=cbfb6b9b55&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1"
                                frameborder="0" allow="
                            autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="Nasdaq Final"
                            ></iframe>
                        </div>
                        <div className='w-[80vw]'>
                            <h1 className='text-white font-FuturaLight font-bold justify-self-start text-3xl mb-5'>/ LED Footage 01</h1>
                            <p className='text-white font-light justify-self-start text-xl text-justify'></p>
                        </div>

                        <div className="relative w-[80vw] pb-[77.7%] mt-10 mb-10">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full sm:rounded-3xl rounded-xl"
                                src="https://player.vimeo.com/video/965096286?h=fc98135e0f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1"
                                frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="Nasdaq Final"
                            ></iframe>
                        </div>
                        <div className='w-[80vw]'>
                            <h1 className='text-white font-FuturaLight font-bold justify-self-start text-3xl mb-5'>/ LED Footage 02</h1>
                            <p className='text-white font-light justify-self-start text-xl text-justify'></p>
                        </div>



                    </div>
                    {/*next project*/}
                    <div className='w-full px-1 mb-[50px]'>
                        <h1 className='text-5xl text-[#909090] font-FuturaMedium'>Next</h1>
                        <div className='mt-[20px]'>
                            <a href='/work/takami' className='mt-[20px] text-3xl text-black font-FuturaMedium'>TAKAMI</a>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Uniiione;


