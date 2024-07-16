import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useScrollPercentage } from 'react-scroll-percentage';
import * as THREE from 'three';

const Modeling = () => {
  const [ref, percentage] = useScrollPercentage({ threshold: 0 });

  const modelRef = useRef(); // Ref to hold the loaded model scene

  const [rotationComplete, setRotationComplete] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);
  const [textPositionY, setTextPositionY] = useState(0);
  // const [textSize, setTextSize] = useState(1);

  // Apply materials with textures to the loaded model
  const textureLoader = new THREE.TextureLoader();
  const baseTexture = useRef(textureLoader.load('/textures/Bag2Base.webp'));
  const normalTexture = useRef(textureLoader.load('/textures/Bag2Normal.webp'));
  const roughnessTexture = useRef(textureLoader.load('/textures/Bag2Roughness.webp'));
  const lightmapTexture = useRef(textureLoader.load('/textures/Bag2Lightmap.webp'));

  // Ensure textures are not flipped (if needed)
  baseTexture.current.flipY = false;
  normalTexture.current.flipY = false;
  roughnessTexture.current.flipY = false;
  lightmapTexture.current.flipY = false;
  lightmapTexture.current.channel = 1;

  const Model = () => {
    const { scene, animations } = useGLTF('/models/Bag2Rotate.glb');
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
      // Traverse through all meshes in the scene and apply the materials
      scene.traverse((node) => {
        if (node.isMesh) {
          const material = new THREE.MeshStandardMaterial({
            map: baseTexture.current,
            normalMap: normalTexture.current,
            roughnessMap: roughnessTexture.current,
            lightMap: lightmapTexture.current,
          });
          node.material = material;
        }
      });

      // Pause the "Rotation" animation initially
      if (actions['Rotation']) {
        actions['Rotation'].play();
        actions['Rotation'].paused = true;
      }
    }, [actions, scene]);

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {

      //console.log("scrollY: " + window.scrollY)
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      // Adjust animation based on scroll percentage
      if (percentage <= 0.4 && modelRef.current) {
        const scale = THREE.MathUtils.lerp(0, 1, percentage / 0.4);
        const positionY = THREE.MathUtils.lerp(3, 0, percentage / 0.4);
        modelRef.current.scale.set(scale, scale, scale);
        modelRef.current.position.set(0, positionY, 0);
      }

      if (scrollY >= 635 && actions['Rotation']) {
        const clip = actions['Rotation'].getClip();
        actions['Rotation'].time = clip.duration * ((scrollY - 635) / 1000) * 2;

        if (actions['Rotation'].time >= clip.duration) {
          setRotationComplete(true);
        }
      }


      // Adjust text size, opacity, and position during rotation
      if (scrollY >= 635 && scrollY < 1250) {
       
        const opacity = THREE.MathUtils.lerp(0, 1, (scrollY - 635) / 300);
        const positionY = 0;

        setTextOpacity(opacity);
        setTextPositionY(positionY);
      }


      // Adjust text opacity and position when scrollY exceeds 1250
      if (scrollY >= 1250) {
        const opacity = THREE.MathUtils.lerp(1, 0, (scrollY - 1250) / 300);
        const positionY = THREE.MathUtils.lerp(0, -45, (scrollY - 1250) / 300);
        setTextOpacity(opacity);
        setTextPositionY(positionY);

        const scale = THREE.MathUtils.lerp(1, 0.5, (scrollY - 1250) / 300);
        const modelPositionY = THREE.MathUtils.lerp(0, 3, (scrollY - 1250) / 300);
        modelRef.current.scale.set(scale, scale, scale);
        modelRef.current.position.set(0, modelPositionY, 0);
      }
    }, [percentage, actions, rotationComplete, scrollY]);

    return (
      <group ref={modelRef}>
        <primitive object={scene} />
      </group>
    );
  };

  return (
    <div className='sticky top-0 h-[1450px]'>
      <div className=''>
        <div ref={ref} className='h-screen'>
          <h1 className="text-center md:text-5xl text-4xl font-FuturaBold flex flex-col justify-center items-center py-10 absolute h-[170vh] w-full z-10" style={{ opacity: textOpacity, transform: `translateY(${textPositionY}vh)` }}>3D Modeling</h1>
          <p className="mx-5 text-center md:text-3xl text-xl md:mt-4 mt-2 font-FuturaLight flex flex-col justify-center items-center py-10 absolute h-[180vh] w-full z-10" style={{ opacity: textOpacity, transform: `translateY(${textPositionY}vh)` }}>Crafting Digital Realities with Precision and Detail.</p>
          <Canvas className="absolute top-0 left-0 w-full h-full">
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} />
            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Modeling;
