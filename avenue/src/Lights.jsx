import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Lights() {
  const directionalLightRef = useRef(THREE.DirectionalLight);

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0);

  return (
    <>
      <directionalLight
        castShadow
        shadow-normalBias={0.06}
        position={[20, 30, 10]}
        intensity={0.0}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-top={50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        name="followLight"
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.07} />
    </>
  );
}
