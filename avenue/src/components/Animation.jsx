import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const Animation = () => {

  const ref = useRef(null);
  const containerRef = useRef(null); // New ref for the section container
  const [opacity, setOpacity] = useState(0); // Initial opacity is 50%

  const { scrollYProgress } = useScroll({
    target: containerRef, // Targeting the specific section
    offset: ["start end", "end start"], // Updated offsets
  });

  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 0; i < 42; i++) {
      const img = new Image();
      let num = "";
      if (i < 10) {
        num = "0" + i.toString();
      } else if (i >= 10 && i < 100) {
        num = "" + i.toString();
      } else {
        num = i.toString();
      }
      img.src = `/videos/Animation/Animation${num}.jpg`;
      loadedImages.push(img);
    }
    console.log("loaded images " + loadedImages.length);
    return loadedImages;
  }, []);

  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, 42]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()));
    setOpacity(Number(latest.toFixed()) / 12)
    console.log("opacity: " + opacity)
    console.log("number: " + Number(latest.toFixed()))
  });

  useEffect(() => {
    // Update the DOM style directly when opacity changes
    ref.current.style.opacity = opacity;
  }, [opacity]);

  useEffect(() => {
    render(1);
  }, [render]);

  return (
    <div className="h-[2500px] mb-[250px]" ref={containerRef}> {/* Updated to add ref */}
      <div className="sticky top-[90px] w-full h-[65vh]">
        <p className="mx-auto text-center md:text-3xl text-xl md:mt-4 mt-2 font-FuturaLight flex flex-col justify-center items-center py-10 absolute h-[158vh] w-full z-10">
          Animating Your Vision with Precision and Artistry
        </p>
        <a href="/work/lloyds_part_two" className='z-10'>
          <h1 className="text-center md:text-5xl text-4xl font-FuturaBold flex flex-col justify-center items-center py-10 absolute h-[145vh] w-full z-10">
            3D Animation
          </h1>
        </a>
        <canvas className="w-full h-full object-cover rounded-3xl p-2" ref={ref} width={1920} height={800} />
      </div>
    </div>
  );
};

export default Animation;


//Animating Your Vision with Precision and Artistry.