import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';

const Modelling = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const images = useMemo(() => {
    const loadedImages = [];

    for (let i = 0; i <= 90; i++) {
      const img = new Image();
      let num = "";
      if (i < 10) {
        num = "0" + i.toString();
      } else if (i >= 10 && i < 100) {
        num = "" + i.toString();
      } else {
        num = i.toString();
      }
      img.src = `/videos/Modeling/Modeling${num}.jpg`;
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

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()));
    setOpacity(Number(latest.toFixed()) / 12);
    console.log("opacity: " + opacity);
    console.log("number: " + Number(latest.toFixed()));
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = opacity;
    }
  }, [opacity]);

  useEffect(() => {
    render(1);
  }, [render]);

  return (
    <div className="h-[2500px] mt-[250px] mb-[250px] flex flex-col items-center"  ref={containerRef}>
      <div className="sticky top-[90px] w-full h-[65vh]  flex flex-col max-w-[1280px]">
        <p className="text-center md:text-3xl text-xl md:mt-4 mt-2 font-FuturaLight flex flex-col justify-center items-center py-10 absolute h-[158vh] w-full z-10">
          Crafting Digital Realities with Precision and Detail
        </p>

        <a href="/work/lofficiel_china_louis_vuitton" className='z-10'>
          <h1 className="text-center md:text-5xl text-4xl font-FuturaBold flex flex-col justify-center items-center py-10 absolute h-[145vh] w-full z-10">
          3D Modeling
          </h1>
        </a>
        
        <motion.canvas
          className="h-full object-cover rounded-3xl p-2"
          ref={ref}
          width={1280}
          height={1080}
          style={{ scale }}
        />
      </div>
    </div>
  );
};

export default Modelling;
