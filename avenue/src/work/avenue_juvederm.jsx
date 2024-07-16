import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/avenue/juvederm/avenue juvederm landing page.webp'
import PosterLightbox from '/works/avenue/juvederm/avenue juvederm lightbox.webp'
import PosterDesign from '/works/avenue/juvederm/Avenue Juvederm Design.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const avenue_juvederm = () => {
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
                        Juvederm
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Modeling & Animation
                    </h1>
                </div>
                <img src={LandingPage} className='sm:rounded-3xl rounded-xl' alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000000] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                        We pride ourselves on creating visually captivating and meticulously crafted 3D models and animations that resonate with our clients' brand identity.
                        Recently, we had the pleasure of collaborating with Avenue Medical Group on their Juvederm brand, an experience that allowed us to push the boundaries of our creativity while adhering to the clinic's sophisticated design aesthetic.
                    </p>
                    <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                        Avenue Medical Group's clinic is known for its distinctive dark yet warmly inviting ambiance, a space where patients can feel both comforted and assured of the professionalism that underpins their care. Our mission was to capture and enhance this unique atmosphere through our 3D modeling and animation work for Juvederm syringes.
                    </p>

                    <div className="relative w-[80vw] pb-[150%] h-full mb-10 mt-10 rounded-3xl">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                            src="https://player.vimeo.com/video/965104387?h=e1eec24910&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>

                    <div>
                        <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                            We approached the project with a clear vision: to convey both the efficacy and the elegance of Juvederm products. Our team meticulously 3D modeled the Juvederm syringes, focusing on precision and detail to ensure that the models were not only accurate but also aesthetically pleasing. The animation brought these models to life in a way that underscores the professionalism and minimalism that are the hallmarks of Avenue Medical Group’s brand.
                        </p>
                        <h1 className='text-[#000000] text-center font-bold mt-20 my-10 sm:text-2xl text-0.5xl'>
                            The Design of the lightbox</h1>
                        <p className='text-[#000000d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                            In addition to the 3D modeling and animation, we were tasked with creating the design for a large lightbox installation within the clinic. This lightbox serves as a focal point, drawing visitors' attention and reinforcing the clinic's brand values. Our design for the lightbox was inspired by the clinic’s interior design principles, resulting in a piece that is both eye-catching and harmonious with the overall space.
                        </p>
                        <p className='text-[#000000] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                            Our creative process began with an in-depth understanding of Avenue Medical Group’s brand and their vision for the Juvederm product line. We collaborated closely with their team to ensure our work was aligned with their goals. Utilizing advanced 3D modeling software and animation tools, we developed several concepts, iteratively refining them until we achieved the perfect balance of elegance, functionality, and aesthetic appeal.
                        </p>

                    </div>

                    <img src={PosterDesign} className='my-[50px] sm:rounded-3xl rounded-xl' alt="" />

                    <div>
                        <h1 className='text-[#000000] text-center font-bold my-[20px] sm:text-2xl text-0.5xl'>
                            Design of Lightbox</h1>
                    </div>

                    

                    

                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#101010] flex flex-col items-center justify-center mt-[50px] mb-[50px]'>

                        <div className='w-full px-[50px] mb-[100px]'>

                            <div className='flex flex-col items-center bg-[#101010]  px-10'>
                                <img src={PosterLightbox} className='mt-[50px]' alt="" />
                                <h1 className='mt-20 text-[#505050] font-FuturaLight'>@ Avenue Medical Group</h1>

                                {/* <div className="relative w-[80vw] pb-[56.25%]  h-full mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/966470595?h=52cc6e4fd8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
                                        &autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div> */}

                            </div>
                        </div>
                    </div>

                    

                    {/*next project*/}
                    <div className='w-full px-1 mb-[50px]'>
                        <h1 className='text-5xl text-[#909090] font-FuturaMedium'>Next</h1>
                        <div className='mt-[20px]'>
                            <a href='/work/lloyds_part_two' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            The Invixible Art 2</a>

                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default avenue_juvederm;


