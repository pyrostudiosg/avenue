import React, { useEffect, useRef } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

const AR = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { current: scene } = sceneRef;
    if (scene) {
      // Access A-Frame scene methods or AR.js initialization here
      console.log('Scene mounted:', scene);
    }
  }, []);

  return (
    <div>
      {/* A-Frame scene */}
      <a-scene
        ref={sceneRef}
        embedded
        arjs="trackingMethod: best; sourceType: phone; debugUIEnabled: true;"
        vr-mode-ui="enabled: true;"
        renderer="logarithmicDepthBuffer: true;"
        style={{ height: '100%', width: '100%' }}
        device-orientation-permission-ui="enabled: true"
      >
        {/* A-NFT for image tracking */}
        <a-nft
          type="nft"
          url="/tracker/avenue_logo_white"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          {/* GLTF model entity */}
          <a-entity
            gltf-model="/scene.glb"
            scale="5 5 5"
            position="0 0 0"
          ></a-entity>
        </a-nft>

        {/* Static camera that moves according to device movements */}
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default AR;
