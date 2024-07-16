
import {
    useAnimations,
    useGLTF,
    useTexture,
    Trail,
    SpriteAnimator,
  } from "@react-three/drei";
  import { useControls } from "leva";
  import { Suspense, useEffect, useRef, useMemo, useState } from "react";
  import * as THREE from "three";
  import { useGame } from "../src/stores/useGame";
  import { BallCollider, RapierCollider, vec3 } from "@react-three/rapier";
  import { useFrame } from "@react-three/fiber";
  
  export default function CharacterModel(props) {
    const group = useRef();
    const { nodes, animations } = useGLTF("../models/Floating Character.glb");
    const { actions } = useAnimations(animations, group);
    const gradientMapTexture = useTexture("../textures/3.jpg");
    gradientMapTexture.minFilter = THREE.NearestFilter;
    gradientMapTexture.magFilter = THREE.NearestFilter;
    gradientMapTexture.generateMipmaps = false;
  
    const rightHandRef = useRef();
    const rightHandColliderRef = useRef();
    const leftHandRef = useRef();
    const leftHandColliderRef = useRef();
    const rightHandPos = useMemo(() => new THREE.Vector3(), []);
    const leftHandPos = useMemo(() => new THREE.Vector3(), []);
    const bodyPos = useMemo(() => new THREE.Vector3(), []);
    const bodyRot = useMemo(() => new THREE.Quaternion(), []);
    let rightHand = null;
    let leftHand = null;
    let mugModel = null;
  
    const [punchEffectProps, setPunchEffectProp] = useState({
      visible: false,
      scale: [1, 1, 1],
      play: false,
      position: [-0.2, -0.2, 0.5],
      startFrame: 0,
    });
  
    const { mainColor, outlineColor, trailColor } = useControls("Character Model", {
      mainColor: "mediumslateblue",
      outlineColor: "black",
      trailColor: "violet",
    });
  
    const outlineMaterial = useMemo(
      () =>
        new THREE.MeshBasicMaterial({
          color: outlineColor,
          transparent: true,
        }),
      [outlineColor]
    );
  
    const meshToonMaterial = useMemo(
      () =>
        new THREE.MeshToonMaterial({
          color: mainColor,
          gradientMap: gradientMapTexture,
          transparent: true,
        }),
      [mainColor]
    );
  
    const curAnimation = useGame((state) => state.curAnimation);
    const resetAnimation = useGame((state) => state.reset);
    const initializeAnimationSet = useGame((state) => state.initializeAnimationSet);
  
    const animationSet = {
      idle: "Idle",
      walk: "Walk",
      run: "Run",
      jump: "Jump_Start",
      jumpIdle: "Jump_Idle",
      jumpLand: "Jump_Land",
      fall: "Climbing",
      action1: "Wave",
      action2: "Dance",
      action3: "Cheer",
      action4: "Attack(1h)",
    };
  
    useEffect(() => {
      initializeAnimationSet(animationSet);
    }, []);
  
    useEffect(() => {
      group.current.traverse((obj) => {
        if (obj instanceof THREE.Bone) {
          if (obj.name === "handSlotRight") rightHand = obj;
          if (obj.name === "handSlotLeft") leftHand = obj;
        }
        if (obj.name === "mug") {
          mugModel = obj;
          mugModel.visible = false;
        }
      });
    });
  
    useFrame(() => {
      if (curAnimation === animationSet.action4) {
        if (rightHand) {
          rightHand.getWorldPosition(rightHandPos);
          group.current.getWorldPosition(bodyPos);
          group.current.getWorldQuaternion(bodyRot);
        }
  
        if (rightHandColliderRef.current) {
          if (group.current.parent.quaternion.y === 0 && group.current.parent.quaternion.w === 1) {
            rightHandRef.current.position
              .copy(rightHandPos)
              .sub(bodyPos)
              .applyQuaternion(bodyRot.conjugate());
          } else {
            rightHandRef.current.position.copy(rightHandPos).sub(bodyPos);
          }
          rightHandColliderRef.current.setTranslationWrtParent(rightHandRef.current.position);
        }
      }
    });
  
    useEffect(() => {
      const action = actions[curAnimation ? curAnimation : animationSet.jumpIdle];
  
      if (
        [
          animationSet.jump,
          animationSet.jumpLand,
          animationSet.action1,
          animationSet.action2,
          animationSet.action3,
          animationSet.action4,
        ].includes(curAnimation)
      ) {
        action.reset().fadeIn(0.2).setLoop(THREE.LoopOnce, undefined).play();
        action.clampWhenFinished = true;
        mugModel.visible = curAnimation === animationSet.action3;
      } else {
        action.reset().fadeIn(0.2).play();
        mugModel.visible = false;
      }
  
      action._mixer.addEventListener("finished", resetAnimation);
  
      return () => {
        action.fadeOut(0.2);
        action._mixer.removeEventListener("finished", resetAnimation);
        action._mixer._listeners = [];
  
        if (curAnimation === animationSet.action4 && rightHandColliderRef.current) {
          rightHandColliderRef.current.setTranslationWrtParent(vec3({ x: 0, y: 0, z: 0 }));
        }
      };
    }, [curAnimation]);
  
    return (
      <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
        <BallCollider args={[0.5]} position={[0, 0.45, 0]} />
        <mesh ref={rightHandRef} />
        <BallCollider
          args={[0.1]}
          ref={rightHandColliderRef}
          onCollisionEnter={(e) => {
            if (curAnimation === animationSet.action4) {
              setPunchEffectProp((prev) => ({
                ...prev,
                visible: true,
                play: true,
              }));
            }
          }}
        />
        <mesh ref={leftHandRef} />
        <BallCollider args={[0.1]} ref={leftHandColliderRef} />
        <group ref={group} {...props} dispose={null}>
          <group name="Scene" scale={0.8} position={[0, -0.8, 0]}>
            <group name="KayKit_Animated_Character">
              <skinnedMesh
                name="outline"
                geometry={nodes.outline.geometry}
                material={outlineMaterial}
                skeleton={nodes.outline.skeleton}
              />
              <skinnedMesh
                name="PrototypePete"
                geometry={nodes.PrototypePete.geometry}
                material={meshToonMaterial}
                skeleton={nodes.PrototypePete.skeleton}
                receiveShadow
                castShadow
              />
              <Trail
                width={1.5}
                color={trailColor}
                length={3}
                decay={2}
                attenuation={(width) => width}
              >
                <primitive object={nodes.Body} />
              </Trail>
            </group>
          </group>
          <SpriteAnimator
            visible={punchEffectProps.visible}
            scale={punchEffectProps.scale}
            position={punchEffectProps.position}
            startFrame={punchEffectProps.startFrame}
            loop={true}
            onLoopEnd={() => {
              setPunchEffectProp((prev) => ({
                ...prev,
                visible: false,
                play: false,
              }));
            }}
            play={punchEffectProps.play}
            numberOfFrames={7}
            alphaTest={0.01}
            textureImageURL={"./punchEffect.png"}
          />
        </group>
      </Suspense>
    );
  }
  
  useGLTF.preload("/Floating Character.glb");
  