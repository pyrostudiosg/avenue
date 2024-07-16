import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from 'react';

export default function Building() {
    
    // Set scale
    const globalScale = 2

    //const {node1, material1} = useGLTF("/models/Bag1.glb")

    const {nodes, materials} = useGLTF("/models/Bag2.glb")
    //console.log(nodes1)
    console.log(nodes)

    const loader = new THREE.TextureLoader();
    const bag2BaseColor = loader.load('/textures/Bag2_BaseColor.webp')
    const bag2Roughness = loader.load('/textures/Bag2_Roughness.webp')
    const bag2Normal = loader.load('/textures/Bag2_Normal.webp')
    const bag2Lightmap = loader.load('/textures/Bag2Lightmap.webp')

    bag2BaseColor.flipY = false
    bag2Roughness.flipY = false
    bag2Normal.flipY = false

    bag2Lightmap.flipY = false
    bag2Lightmap.channel = 1

    return (  
        <>
        <group name="Bags">
            {/* <mesh             
                geometry={node1.Bag1.geometry}
                material={new THREE.MeshNormalMaterial()}
                scale={globalScale}
                receiveShadow
                position={[0, 0, 0]}
            /> */}
            <mesh
                geometry={nodes.Bag2.geometry}
                material={new THREE.MeshStandardMaterial({
                    map: bag2BaseColor,
                    normalMap: bag2Normal,
                    roughnessMap: bag2Roughness,
                    emissiveMap:bag2BaseColor,
                    emissiveIntensity:2,
                    emissive:true,
                    emissive: new THREE.Color(0x000000), // Set to a color
                    lightMap: bag2Lightmap,
                    lightMapIntensity: 1
                })}
                scale={globalScale}
                receiveShadow
                position={[0, 0, 0]}
            />
           
        </group>

       
        
        </>
        
        
    );
}
useGLTF.preload("/models/Bags.glb")
