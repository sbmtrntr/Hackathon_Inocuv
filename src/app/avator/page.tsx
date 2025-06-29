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
      {/* 以下準備したやつ */}
      {/* <div className="min-h-screen bg-gray-100 flex justify-center px-4">
        <div className="w-full max-w-[768px] bg-white flex flex-col items-center shadow-md rounded-md">
          {/* アバターと選択中を横並び・同じ高さに */}
          {/* <div className="flex items-center w-full my-6 justify-center"> */}
            {/* アバター画像 */}
            {/* <Image
              src="/avator_sample.svg"
              alt="avatar"
              width={300}
              height={160}
            /> */}

            {/* 選択中表示 */}
            {/* <div className="flex flex-col items-center">
              <div className="bg-pink-300 rounded-full p-4">
                <Image
                  src={avatarItems[selectedIndex]}
                  alt="selected"
                  width={150}
                  height={150}
                />
              </div>
              <span className="mt-2 text-sm font-bold text-black">選択中</span>
            </div>
          </div> */}

          {/* 選択肢一覧：中央寄せの横スクロール */}
          {/* <div className="w-full overflow-x-auto">
            <div className="flex justify-center space-x-8 px-4 pb-4 w-max mx-auto pt-8">
              {avatarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`rounded-full p-2 transition ${
                    index === selectedIndex ? 'bg-pink-200' : 'bg-blue-200'
                  }`}
                >
                  <Image
                    src={item}
                    alt={`avatar-${index}`}
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          </div> */}

          {/* 決定ボタン */}
          {/* <button
            onClick={() => alert('アバターを選択しました')}
            className="mt-8 bg-white border-2 border-black px-10 py-3 rounded-xl shadow-md font-bold text-xl text-black hover:bg-gray-100 transition duration-200 w-full md:w-auto"
          >
            決定
          </button>
        </div> */}
    {/* </div> */}





    </div>
  );
};

export default AvatorPage;
