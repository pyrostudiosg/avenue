import './style.css'
import { useControls } from "leva";
import React, { useEffect, useState } from "react";
import CharacterModel from "./CharacterModel.jsx";
import { Grid, KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics, RigidBody } from "@react-three/rapier";
import Ecctrl from "ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import Building from "./Building";
import Bags from './Bags.jsx';

export default function Experience(){
  /**
   * Delay physics activate
   */
  const [pausedPhysics, setPausedPhysics] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPausedPhysics(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  /**
   * Debug settings
   */
  const { physics, disableFollowCam } = useControls("World Settings", {
    physics: false,
    disableFollowCam: false,
  });

  /**
   * Keyboard control preset
   */
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  return (
    <>
      <>
      <Perf position="top-left" minimal />

      {/* <Grid
        args={[300, 300]}
        sectionColor={"lightgray"}
        cellColor={"gray"}
        position={[0, -0.5, 0]}
        userData={{ camExcludeCollision: true }} // this won't be collide by camera ray
      /> */}

      <Lights/>

      <Physics debug={physics} timeStep="vary" paused={pausedPhysics}>
        {/* Keyboard preset */}
        <KeyboardControls map={keyboardMap}>
          {/* Character Control */}
          <Ecctrl
            debug
            animated
            followLight
            springK={2}
            dampingC={0.2}
            autoBalanceSpringK={1.2}
            autoBalanceDampingC={0.04}
            autoBalanceSpringOnY={0.7}
            autoBalanceDampingOnY={0.05}
            disableFollowCam={disableFollowCam}
            maxVelLimit={19}
            sprintMult={3}
            characterInitDir={Math.PI}
            camInitDir={{ x: 0, y: Math.PI }}
            camTargetPos={ { x: 0, y: 3, z: 0 }}
            camInitDis={-10}
          >
            {/* Replace your model here */}
            <CharacterModel />
          </Ecctrl>
        </KeyboardControls>

        <RigidBody colliders={"trimesh"} type="fixed">
            <Building />
        </RigidBody>
       
        <RigidBody colliders={"trimesh"} type="fixed">
            <Bags />
        </RigidBody>
        
        {/* Rough plan */}
        {/* <RoughPlane /> */}

        {/* Slopes and stairs */}
        {/* <Slopes /> */}

        {/* Small steps */}
        {/* <Steps /> */}

        {/* Rigid body objects */}
        {/* <RigidObjects /> */}

        {/* Floating platform */}
        {/* <FloatingPlatform /> */}

        {/* Dynamic platforms */}
        {/* <DynamicPlatforms /> */}

        {/* Floor */}
        <Floor />

        {/* Shoting cubes */}
        {/* <ShotCube /> */}
      </Physics >
    </>
    </>
  )
}


