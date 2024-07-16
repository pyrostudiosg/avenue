import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '/works/takami/Takami Landing Page.webp'
import Breakdown1 from '/works/takami/Takami breakdown 01.webp'
import Breakdown2 from '/works/takami/Takami breakdown 01.webp'
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const takami = () => {
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
                        TAKAMI
                    </h1>
                    <h1 className='text-2xl font-FuturaLight my-5 '>
                        3D Animation
                    </h1>
                </div>
                <img src={LandingPage} alt="" />

                <div className='flex flex-col items-center'>
                    <p className='text-[#000a8d] indent-8 leading-[30px] font-light first-letter:text-3xl md:text-2xl text-xl mt-[100px] sm:max-w-[50vw]  text-justify'>
                        Takami is a renowned Japanese skincare brand known for its high-quality products, particularly its serums. The brand is highly regarded for its approach to skincare, emphasizing gentle yet effective treatments that promote healthy, radiant skin.
                    </p>
                    <p className='text-[#000a8d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                        One of the brand's most popular products, the Takami Skin Peel, is a serum designed to improve skin texture, clarity, and overall health. It is often recommended for regular use to help with issues like dullness, rough texture, and uneven skin tone.
                    </p>

                    <div className="relative w-full pb-[95%] h-0 mt-10">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                            src="https://player.vimeo.com/video/964560076?h=5c3bc72db4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="Nasdaq Final"
                        ></iframe>
                    </div>
                    <div>
                        <h1 className='text-[#000a8d] text-center font-bold my-10 sm:text-2xl text-0.5xl'>TAKAMI小蓝瓶精华，痘痘闭口，一扫而空</h1>
                    </div>

                    <p className='text-[#000a8d] md:text-2xl text-xl font-light mt-10 mb-10 sm:max-w-[50vw]  text-justify'>
                        We aimed to capture not only the scientific benefits of their skincare solutions but also the emotional journey of transformation that users experience. Our goal was to visually convey the transformative power of hydration, aligning with Takami’s reputation for revitalizing dull and dry skin.
                    </p>

                    <p className='text-[#000a8d] md:text-2xl text-xl font-light mt-10 mb-20 sm:max-w-[50vw]  text-justify'>
                        In addressing the common skincare concern of pimple removal, we sought to inject a sense of playfulness into the narrative while emphasizing Takami’s efficacy in skincare solutions. The concept of the Takami blue bottle playfully interacting in a whack-a-mole style game with pimples reflects both the effectiveness and the approachability of Takami products. This approach not only entertains but also educates, illustrating Takami’s ability to tackle skincare challenges with precision and ease.
                    </p>

                    {/* videos */}
                    <div className='relative w-full flex flex-col'>

                        <div className="relative w-full pb-[95%] h-0 mt-10">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-3xl"
                                src="https://player.vimeo.com/video/964661138?h=d011439a6e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                title="Nasdaq Final"
                            ></iframe>
                        </div>
                        <div>
                            <h1 className='text-[#000a8d] text-center font-bold my-10 sm:text-2xl text-0.5xl'>TAKAMI小蓝瓶精华，无酸胜有酸，粗糙bye bye</h1>
                        </div>
                    </div>

                    <p className='text-[#000a8d] md:text-2xl font-light text-xl mt-[50px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                        Through these animations, we aimed not only to highlight Takami’s advanced skincare technologies but also to connect emotionally with consumers by illustrating the transformative journey towards healthier and radiant skin. This approach not only strengthens Takami’s brand identity but also reinforces its position as a leader in luxury skincare innovation.
                    </p>


                    <div className='w-full sm:rounded-3xl rounded-xl bg-[#000a8d] flex flex-col items-center mb-[50px]'>
                        <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                            Individual Frames
                        </p>

                        <div className='w-full px-[50px]'>
                            {/* cu cao bu ping pian*/}
                            <div className='flex flex-row my-[10px] sm:rounded-3xl rounded-xl bg-white py-10 px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891733?h=b21adb025c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891803?h=b618d8a669&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891862?h=bef18d6101&badge=0&autopause=0&player_id=0&app_id=58479/embed&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                            </div>

                            <div className='flex flex-row sm:my-[200px] my-[20px] sm:rounded-3xl rounded-xl bg-white py-10 px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891921?h=554080e375&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891976?h=23a0b777f2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965916040?h=6f0340d191&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                            </div>

                            {/* dou dou pian*/}
                            <div className='flex flex-row sm:mt-[100px] mt-[20px] mb-[50px] sm:rounded-3xl rounded-xl bg-white py-10 px-10'>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965892028?h=6c521d0f5d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965892112?h=d472e5ea2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[80vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965891650?h=5975b0715b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1&muted=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                            </div>

                        </div>

                        {/* Process  */}
                        <div className='mt-[-50px] flex flex-col items-center'>
                            <div>
                                <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] mb-[100px] sm:max-w-[50vw]  text-justify'>
                                    Shooting Board
                                </p>
                            </div>

                            <div className=''>
                                <div className="w-full flex flex-row items-center justify-center">
                                    <img src={Breakdown1} alt="" className="w-1/3 object-contain mx-2 sm:rounded-3xl rounded-xl" />
                                    <img src={Breakdown2} alt="" className="w-1/3 object-contain mx-2 sm:rounded-3xl rounded-xl" />
                                </div>
                            </div>
                        </div>



                        <div className='w-[80vw] mt-[50px] flex flex-col items-center'>
                            <p className='text-white md:4xl font-FuturaLight text-3xl mt-[100px] sm:mb-[100px] mb-[30px] sm:max-w-[50vw]  text-justify'>
                                Clay Renders
                            </p>
                        </div>


                        <div className='w-full px-[50px]'>
                            <div className='flex flex-row sm:mt-[50px] mt-[10px] mb-[50px] sm:rounded-3xl rounded-xl bg-[#505050] py-10 px-5'>
                                <div className="relative w-[90vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965849433?h=74d4ba28de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        title="Nasdaq Final"
                                    ></iframe>
                                </div>
                                <div className="relative w-[90vw] pb-[56.25%] h-0 mb-2 mt-2 ">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src="https://player.vimeo.com/video/965851099?h=bfcbe18b8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&controls=0&loop=1"
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
                            <a href='/work/avenue_juvederm' className='mt-[20px] text-3xl text-black font-FuturaMedium'>
                            Juvederm</a>

                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </motion.div>
    );
};

export default takami;


