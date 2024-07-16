import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './style.css'
import { Canvas, useThree } from "@react-three/fiber"
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { EcctrlJoystick } from "ecctrl";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { ColorManagement } from 'three';
import * as THREE from 'three';

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false)
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0)) {
      setIsTouchScreen(true)
    } else {
      setIsTouchScreen(false)
    }
  }, [])
  return (
    <>
      {isTouchScreen && <EcctrlJoystick buttonNumber={5} />}
    </>
  )
}

// const ConfigureRenderer = () => {
//   const { gl } = useThree();
//   useEffect(() => {
//     // Enable shadow map
//     gl.shadowMap.enabled = true;
//     // Set shadow map type if needed
//     //gl.shadowMap.type = THREE.PCFSoftShadowMap; // or any other type you need

//     // Configure shadow map settings
//     gl.shadowMap.renderReverseSided = true;
//   }, [gl]);

//   return null;
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Leva collapsed />
    <EcctrlJoystickControls />
    <Canvas   
      shadows
      camera={{
        fov: 55,
        near: 0.01,
        far: 10000,
      }}
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse') {
          e.target.requestPointerLock()
        }
      }}
    >
      <ConfigureRenderer />
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  </>
)
