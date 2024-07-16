import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from 'react';

export default function Building() {
    
    // Set scale
    const buildingScale = 2
    const globalLightmapIntensity = 1

    const {nodes, materials} = useGLTF("/models/scene.glb")
    console.log(nodes)
    // Load the lightmap texture and set its encoding
    const loader = new THREE.TextureLoader();
    const diffuse = loader.load('/textures/concrete 8.jpg')
    diffuse.encoding = THREE.sRGBEncoding

    // Showrooms Lightmaps
    const showRoom1Lightmap = loader.load('/textures/Showroom1Lightmap.webp');
    const showRoom2Lightmap = loader.load('/textures/Showroom2Lightmap.webp');
    const showRoom3Lightmap = loader.load('/textures/Showroom3Lightmap.webp');
    const showRoom4Lightmap = loader.load('/textures/Showroom4Lightmap.webp');

    showRoom1Lightmap.minFilter = THREE.NearestFilter
    showRoom2Lightmap.minFilter = THREE.NearestFilter
    showRoom3Lightmap.minFilter = THREE.NearestFilter
    showRoom4Lightmap.minFilter = THREE.NearestFilter

    // Entrance Lightmap
    const entranceLightmap = loader.load('/textures/EntranceLightmap.webp');
    entranceLightmap.minFilter = THREE.NearestFilter

    // ShowroomCenter Lightmap
    const showRoomCenterLightmap = loader.load('/textures/ShowroomCenterLightmap.webp');
    const showRoomCenterFloorLightmap = loader.load('/textures/ShowroomFloorLightmap.webp');

    showRoomCenterLightmap.minFilter = THREE.NearestFilter
    showRoomCenterFloorLightmap.minFilter = THREE.NearestFilter

    // Office Lightmaps
    const officeWaitingAreaLightmap = loader.load('/textures/OfficeWaitingAreaLightmap.webp');
    const officeWallLightmap = loader.load('/textures/OfficeWallLightmap.webp');
    const officeTableLightmap = loader.load('/textures/OfficeTableLightmap.webp');
    const officeStairsLightmap = loader.load('/textures/OfficeStairsLightmap.webp');
    const officeRoofLightmap = loader.load('/textures/OfficeRoofLightmap.webp');
    const officeInnerStructuresLightmap = loader.load('/textures/OfficeInnerStructuresLightmap.webp');
    const office2LFloorLightmap = loader.load('/textures/Office2LFloor.webp');
    const office1LFloorLightmap = loader.load('/textures/Office1LFloor.webp');

    officeWaitingAreaLightmap.minFilter = THREE.NearestFilter
    officeWallLightmap.minFilter = THREE.NearestFilter
    officeTableLightmap.minFilter = THREE.NearestFilter
    officeStairsLightmap.minFilter = THREE.NearestFilter
    officeRoofLightmap.minFilter = THREE.NearestFilter
    officeInnerStructuresLightmap.minFilter = THREE.NearestFilter
    office2LFloorLightmap.minFilter = THREE.NearestFilter
    office1LFloorLightmap.minFilter = THREE.NearestFilter

    diffuse.wrapS = THREE.RepeatWrapping
    diffuse.wrapT = THREE.RepeatWrapping
    diffuse.repeat.set(10,10)

    // entranceLightmap.encoding = THREE.sRGBEncoding
   
    
    // Mesh references
    const entranceRef = useRef();
    const showroomCenterRef = useRef();
    const showroomCenterFloorRef = useRef();
    const showroom1WallsRef = useRef();
    const showroom1FloorRef = useRef();

    const showroom2WallsRef = useRef();
    const showroom2FloorRef = useRef();

    const showroom3WallsRef = useRef();
    const showroom3FloorRef = useRef();

    const showroom4WallsRef = useRef();
    const showroom4FloorRef = useRef();

    const office1LFloorRef = useRef();
    const office2LFloorRef = useRef();
    const officeStairsRef = useRef();
    const officeWallRef = useRef();
    const officeInnerStructuresRef = useRef();
    const officeWaitingAreaRef = useRef();
    const officeRoofRef = useRef();
    const officeTableRef = useRef();

    useEffect(() => {
        if (entranceRef.current) {   
            materials.Entrance.map = diffuse 
            
            entranceLightmap.channel=1
            entranceLightmap.flipY = false
            materials.Entrance.lightMap = entranceLightmap;
            materials.Entrance.lightMapIntensity =  globalLightmapIntensity;
        }
        if(showroomCenterRef.current){
            materials.ShowroomCenter.map = diffuse
            
            showRoomCenterLightmap.channel = 1
            showRoomCenterLightmap.flipY = false
            materials.ShowroomCenter.lightMap = showRoomCenterLightmap;
            materials.ShowroomCenter.lightMapIntensity =  globalLightmapIntensity;
        }
        if(showroomCenterFloorRef.current){
            materials.ShowroomFloor.map = diffuse
            
            showRoomCenterFloorLightmap.channel = 1        
            showRoomCenterFloorLightmap.flipY = false
            materials.ShowroomFloor.lightMap = showRoomCenterFloorLightmap;
            materials.ShowroomFloor.lightMapIntensity =  globalLightmapIntensity;
        }

        // Showroom 1
        if(showroom1WallsRef.current){
            materials.Showroom1Wall.map = diffuse;
            materials.Showroom1Wall.color = new THREE.Color("#FFFFFF");
            showRoom1Lightmap.channel = 1
            showRoom1Lightmap.flipY = false

            materials.Showroom1Wall.lightMap = showRoom1Lightmap;
            materials.Showroom1Wall.lightMapIntensity = globalLightmapIntensity;
        }
        if(showroom1FloorRef.current){
            materials.Showroom1Floor.map = diffuse
            showRoom1Lightmap.channel = 1     
            showRoom1Lightmap.flipY = false
            materials.Showroom1Floor.lightMap = showRoom1Lightmap;
            materials.Showroom1Floor.lightMapIntensity = globalLightmapIntensity;
        }

        // Showroom 2
        if(showroom2WallsRef.current){
            materials.Showroom2Wall.map = diffuse;
            materials.Showroom2Wall.color = new THREE.Color("#FFFFFF");
            showRoom2Lightmap.channel = 1
            showRoom2Lightmap.flipY = false

            materials.Showroom2Wall.lightMap = showRoom2Lightmap;
            materials.Showroom2Wall.lightMapIntensity = globalLightmapIntensity;
        }
        if(showroom2FloorRef.current){
            materials.Showroom2Floor.map = diffuse
            showRoom2Lightmap.channel = 1
            showRoom2Lightmap.flipY = false
            materials.Showroom2Floor.lightMap = showRoom2Lightmap;
            materials.Showroom2Floor.lightMapIntensity = globalLightmapIntensity;
        }

        // Showroom 3
        if(showroom3WallsRef.current){
            materials.Showroom3Wall.map = diffuse;
            materials.Showroom3Wall.color = new THREE.Color("#FFFFFF");
            showRoom3Lightmap.channel = 1
            showRoom3Lightmap.flipY = false

            materials.Showroom3Wall.lightMap = showRoom3Lightmap;
            materials.Showroom3Wall.lightMapIntensity = globalLightmapIntensity;
        }
        if(showroom3FloorRef.current){
            materials.Showroom3Floor.map = diffuse  
            showRoom3Lightmap.channel = 1
         
            showRoom3Lightmap.flipY = false
            materials.Showroom3Floor.lightMap = showRoom3Lightmap;
            materials.Showroom3Floor.lightMapIntensity = globalLightmapIntensity;
        }

        // Showroom 4
        if(showroom4WallsRef.current){
            materials.Showroom4Wall.map = diffuse;
            materials.Showroom4Wall.color = new THREE.Color("#FFFFFF");
            showRoom4Lightmap.channel = 1
            showRoom4Lightmap.flipY = false
            materials.Showroom4Wall.lightMap = showRoom4Lightmap;
            materials.Showroom4Wall.lightMapIntensity = globalLightmapIntensity;
        }
        if(showroom4FloorRef.current){
            materials.Showroom4Floor.map = diffuse
            showRoom4Lightmap.channel = 1     
            showRoom4Lightmap.flipY = false
            materials.Showroom4Floor.lightMap = showRoom4Lightmap;
            materials.Showroom4Floor.lightMapIntensity = globalLightmapIntensity;
        }
        

        // Office
        if(office1LFloorRef.current){
            materials.Office1LFloor.map = diffuse
            
            office1LFloorLightmap.channel = 1
         
            office1LFloorLightmap.flipY = false
            materials.Office1LFloor.lightMap = office1LFloorLightmap;
            materials.Office1LFloor.lightMapIntensity =  globalLightmapIntensity;
        }
        if(office2LFloorRef.current){
            materials.Office2LFloor.map = diffuse
            
            office2LFloorLightmap.channel = 1
         
            office2LFloorLightmap.flipY = false
            materials.Office2LFloor.lightMap = office2LFloorLightmap;
            materials.Office2LFloor.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeStairsRef.current){
            materials.OfficeStairs.map = diffuse
            
            officeStairsLightmap.channel = 1
            officeStairsLightmap.flipY = false

            materials.OfficeStairs.lightMap = officeStairsLightmap;
            materials.OfficeStairs.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeWallRef.current){
            materials.OfficeWall.map = diffuse
            officeWallLightmap.channel = 1
            officeWallLightmap.flipY = false

            materials.OfficeWall.lightMap = officeWallLightmap;
            materials.OfficeWall.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeInnerStructuresRef.current){
            materials.OfficeInnerStructures.map = diffuse
            
            officeInnerStructuresLightmap.channel = 1
            officeInnerStructuresLightmap.flipY = false

            materials.OfficeInnerStructures.lightMap = officeInnerStructuresLightmap;
            materials.OfficeInnerStructures.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeRoofRef.current){
            materials.OfficeRoof.map = diffuse
            
            officeRoofLightmap.channel = 1
            officeRoofLightmap.flipY = false

            materials.OfficeRoof.lightMap = officeRoofLightmap;
            materials.OfficeRoof.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeWaitingAreaRef.current){
            materials.OfficeWaitingArea.map = diffuse
            
            officeWaitingAreaLightmap.channel = 1
            officeWaitingAreaLightmap.flipY = false

            materials.OfficeWaitingArea.lightMap = officeWaitingAreaLightmap;
            materials.OfficeWaitingArea.lightMapIntensity =  globalLightmapIntensity;
        }
        if(officeTableRef.current){
            materials.OfficeTable.map = diffuse
            
            officeTableLightmap.channel = 1
            officeTableLightmap.flipY = false

            materials.OfficeTable.lightMap = officeTableLightmap;
            materials.OfficeTable.lightMapIntensity =  globalLightmapIntensity;
        }

    }, [materials]);

    return (
        // <RigidBody type="fixed">
        //     <mesh geometry={nodes.Entrance.geometry} scale={1} receiveShadow position={[0, 0, 0]} />
        // </RigidBody>
        <>
        <group name="Entrance">
            <mesh
                ref={entranceRef}
                geometry={nodes.Entrance.geometry}
                material={materials.Entrance}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroomCenterRef}
                geometry={nodes.ShowroomCenter.geometry}
                material={materials.ShowroomCenter}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroomCenterFloorRef}
                geometry={nodes.ShowroomFloor.geometry}
                material={materials.ShowroomFloor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
        </group>

        <group name="showroom1">
            <mesh
                ref={showroom1WallsRef}
                geometry={nodes.Showroom1Walls.geometry}
                material={materials.Showroom1Wall}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroom1FloorRef}
                geometry={nodes.Showroom1Floor.geometry}
                material={materials.Showroom1Floor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom1CeilingLight.geometry}
                material={materials.Light}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom1CeilingBeam.geometry}
                material={materials.BlackBeam}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
        </group>

        <group name="showroom2">
            <mesh
                ref={showroom2WallsRef}
                geometry={nodes.Showroom2Walls.geometry}
                material={materials.Showroom2Wall}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroom2FloorRef}
                geometry={nodes.Showroom2Floor.geometry}
                material={materials.Showroom2Floor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom2CeilingLight.geometry}
                material={materials.Light}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom2CeilingBeam.geometry}
                material={materials.BlackBeam}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
        </group>
            
        <group name="showroom3">
            <mesh
                ref={showroom3WallsRef}
                geometry={nodes.Showroom3Walls.geometry}
                material={materials.Showroom3Wall}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroom3FloorRef}
                geometry={nodes.Showroom3Floor.geometry}
                material={materials.Showroom3Floor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom3CeilingLight.geometry}
                material={materials.Light}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom3CeilingBeam.geometry}
                material={materials.BlackBeam}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
        </group>
        
        <group name="showroom4">
            <mesh
                ref={showroom4WallsRef}
                geometry={nodes.Showroom4Walls.geometry}
                material={materials.Showroom4Wall}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={showroom4FloorRef}
                geometry={nodes.Showroom4Floor.geometry}
                material={materials.Showroom4Floor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom4CeilingLight.geometry}
                material={materials.Light}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                geometry={nodes.Showroom4CeilingBeam.geometry}
                material={materials.BlackBeam}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
        </group>

        <group name="office">
            <mesh
                ref={office1LFloorRef}
                geometry={nodes.Office1LFloor.geometry}
                material={materials.Office1LFloor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={office2LFloorRef}
                geometry={nodes.Office2LFloor.geometry}
                material={materials.Office2LFloor}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref = {officeInnerStructuresRef}
                geometry={nodes.OfficeInnerStructures.geometry}
                material={materials.OfficeInnerStructures}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={officeRoofRef}
                geometry={nodes.OfficeRoof.geometry}
                material={materials.OfficeRoof}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={officeStairsRef}
                geometry={nodes.OfficeStairs.geometry}
                material={materials.OfficeStairs}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={officeTableRef}
                geometry={nodes.OfficeTable.geometry}
                material={materials.OfficeTable}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={officeWaitingAreaRef}
                geometry={nodes.OfficeWaitingArea.geometry}
                material={materials.OfficeWaitingArea}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            <mesh
                ref={officeWallRef}
                geometry={nodes.OfficeWall.geometry}
                material={materials.OfficeWall}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            />
            {/* <mesh
                geometry={nodes.OfficeWater.geometry}
                material={materials.OfficeWater}
                scale={buildingScale}
                receiveShadow
                position={[0, 0, 0]}
            /> */}

        

        </group>
        
        </>
        
        
    );
}
useGLTF.preload("/models/scene.glb")
