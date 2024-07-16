import React from 'react';
import Navbar from './../components/Navbar';
import LandingPage from '/works/larmoire/larmoire landing.webp'
import Lobby from '/works/larmoire/lobby.webp'
import Mens1 from '/works/larmoire/ms 1.webp'
import Womens1 from '/works/larmoire/wms 1.webp'
import Shoes1 from '/works/larmoire/shoes 1.webp'
import Accs1 from '/works/larmoire/accs 2.webp'
import Process from '/works/larmoire/process.webp'
import Community1 from '/works/larmoire/community 1.webp'
import RoRo from '/works/larmoire/roro.webp'
import { motion } from 'framer-motion';
import Footer from './../components/Footer';

const larmoire_virtual_store = () => {
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
                        L'armoire Virtual Store
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        Virtual Space Design
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[70vw]  text-justify'>
                        At pyro studio, we are committed to pushing the boundaries of technology and design to create innovative and immersive experiences.
                        In 2022, we embarked on an exciting collaboration with L'Armoire, a localfashion boutique store, to bring their vision of a virtual store to life using Unreal Engine 4. This project combined our expertise in 3D modeling, game design, and interactive media to create a unique and engaging shopping experience.
                    </p>
                    <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        Our journey began with designing and modeling the various sections of the virtual store. The goal was to create a digital environment that mirrored the sophistication and style of L'Armoire’s physical boutique while offering an enhanced, interactive experience for users.
                    </p>

                    <p className='text-[#000000d] md:text-3xl text-2xl font-bold mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        Designing the Virtual Store
                    </p>

                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        <img src={Lobby} className='mt-5 sm:rounded-3xl rounded-xl mb-4' alt="" />
                        <a className='font-medium'>Lobby</a>: The central hub that welcomes visitors and provides a seamless transition to different sections.

                    </p>
                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        <img src={Mens1} className='mt-5 sm:rounded-3xl rounded-xl mb-4' alt="" />
                        <a className='font-medium'>Menswear Room</a>: Showcasing a curated selection of menswear with intricate details and stylish displays.
                    </p>
                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        <img src={Womens1} className='mt-5 sm:rounded-3xl rounded-xl mb-4' alt="" />
                        <a className='font-medium'>Womenswear Room</a>: A dedicated space for womenswear, designed with elegance and modern aesthetics.

                    </p>
                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        <img src={Shoes1} className='mt-5 sm:rounded-3xl rounded-xl mb-4' alt="" />
                        <a className='font-medium'>Footwear Room</a>: Featuring a variety of footwear, this room highlights the latest trends in shoes.

                    </p>
                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[70vw]  text-justify'>
                        <img src={Accs1} className='mt-5 sm:rounded-3xl rounded-xl mb-4' alt="" />
                        <a className='font-medium'>Accessories Room</a>: A chic space displaying a range of accessories, from jewelry to bags.

                    </p>

                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[70vw]  text-justify'>
                        To navigate this virtual world, we designed RoRo, a charming and intuitive character that users can control. RoRo moves fluidly through the different scenes, allowing users to explore the virtual store with ease. Our team developed interactive elements that enhance the shopping experience, such as pop-up information windows. When Roro approaches an item, like a pair of shoes, a pop-up appears, and with a simple click, users are redirected to L'Armoire’s online store for easy purchasing.
                        <img src={RoRo} className='mt-10 sm:rounded-3xl rounded-xl' alt="" />
                    </p>

                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[70vw]  text-justify'>
                        Beyond shopping, we aimed to make the virtual store an engaging destination. We created a dedicated play room where users can enjoy a fun mini-game. The objective is to jump higher and higher using moving platforms to reach a slide. At the entrance of the slide, players are rewarded with a discount code. This code can be used for purchases in L'Armoire’s online store, seamlessly integrating entertainment with shopping incentives.
                        <img src={Community1} className='mt-10 sm:rounded-3xl rounded-xl' alt="" />
                    </p>

                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[70vw]  text-justify'>
                        Using Unreal Engine 4, we brought this virtual store to life with high-quality graphics, realistic textures, and smooth animations. The result is an immersive digital space that combines the best elements of a physical boutique with the convenience and interactivity of online shopping. Our team worked meticulously to ensure every detail, from the lighting in the rooms to the textures of the products, was crafted to perfection.
                        <img src={Process} className='mt-10 sm:rounded-3xl rounded-xl' alt="" />
                    </p>

                    <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[70vw]  text-justify'>
                        Our collaboration with L'Armoire represents a significant step forward in the fusion of fashion retail and digital technology. By creating a virtual store that is not only visually stunning but also interactive and fun, we have set a new standard for the shopping experience. At pyro studio, we are excited about the possibilities that such innovations bring and are committed to continuing our journey of blending creativity with technology.
                    </p>

                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[50px] sm:max-w-[50vw]  text-justify'>
                            Gameplay Recording
                        </p>

                        <div className='w-full px-[2px] mb-[100px]'>

                            <div className='flex flex-col items-center bg-[#101010]  px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470516?h=0df4d91251&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470595?h=52cc6e4fd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470682?h=c243bc078d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>

                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470754?h=a7963c4bce&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470416?h=009a6abe3d&badge=0&autopause=0&player_id=0&app_id=58479/embed
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
                            <a href='/work/lofficiel_china_louis_vuitton' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                                L'officiel China x LOUIS VUITTON</a>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default larmoire_virtual_store;


