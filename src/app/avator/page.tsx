'use client'

import React, { useRef } from "react";
import { Model } from "@/components/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AvatorPage = () => {
  const gltfCanvasParentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <h1>Avator Page</h1>
      <p>This is the avator page content.</p>
      <div
        ref={gltfCanvasParentRef}
        className="grid grid-cols-3"
      >
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_01.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_02.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_03.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_04.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_05.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_06.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
        <Canvas
          frameloop="always"
          camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -5] }}
          flat
        >
          <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
          <Model
            url="/vrm/AvatarSample_A.vrm"
            animationUrl="/VRMA_MotionPack/vrma/VRMA_07.vrma"
          />
          <color attach="background" args={["#f7f7f7"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={false}
          />
          <gridHelper />
        </Canvas>
      </div>
    </div>
  );
};

export default AvatorPage;
