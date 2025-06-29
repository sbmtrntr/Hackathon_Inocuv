"use client";

import React from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { Model } from "@/components/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const router = useRouter();
  /////////////////////////.      dummy data.     //////////////////////////
  const dummyUserData = [
    {
    "id": 1,
    "user_name": "test1",
    "email": "test1@test.com",
    "password": "test1@123"
    },
    {
    "id": 2,
    "user_name": "test2",
    "email": "test2@test.com",
    "password": "test2@123"
    },
    {
      "id": 3,
      "user_name": "test3",
      "email": "test3@test.com",
      "password": "test3@123"
    },
  ];

  const dummyLessonData = [
    {
      "id": 1,
      "title": "二次方程式の解の公式を導出せよ。",
      "subject": "数学",
      "difficulty": "中級",
    },
    {
      "id": 2,
      "title": "円周率が3.05よりも大きいことを証明せよ。",
      "subject": "数学",
      "difficulty": "上級",
    },
    {
      "id": 3,
      "title": "光の屈折率を求めよ。",
      "subject": "理科",
      "difficulty": "初級",
    },
    {      "id": 4,
      "title": "日本の首都を答えよ。",
      "subject": "社会",
      "difficulty": "初級",
    },
    {
      "id": 5,
      "title": "英語の文法を説明せよ。",
      "subject": "英語",
      "difficulty": "中級",
    },
    {
      "id": 6,
      "title": "化学反応式を書け。",
      "subject": "理科",
      "difficulty": "中級",
    },
  ]
  /////////////////////////.    end dummy data.     //////////////////////////





  return (
    <div className="w-full flex justify-center bg-gray-100 min-h-screen">
      <div className="bg-white w-full max-w-[768px] rounded-lg p-6 shadow-md">
        {/* アバターとユーザー情報 */}
        <div className="flex items-center gap-6">
          <Canvas
            frameloop="always"
            style={{ height: 450, width: 450 }}
            camera={{ fov: 50, near: 0.1, far: 300, position: [0, 1, -1.0] }}
            flat
          >
            <directionalLight position={[1, 1, -1]} color={"0xFFFFFF"} />
            <Model
              url="/vrm/AvatarSample_A.vrm"
              animationUrl="/VRMA_MotionPack/vrma/VRMA_01.vrma"
            />
            <color attach="background" args={["#f7f7f7"]} />
            <OrbitControls
              target={[0, 1.2, 0]}
              enableZoom={false}
              enablePan={false}
              enableDamping={false}
            />
            <gridHelper />
          </Canvas>

          <div className="flex-1 ">
            <h1 className="text-5xl font-bold text-black">ワンダー</h1>
            <button
              className="mt-3 w-full bg-black text-white py-2 rounded-md text-center"
              onClick={() => router.push("/lesson")}
            >
              今日の問題を解く
            </button>
            <div className="mt-2 text-center">
              <button className="w-full px-4 py-1 bg-indigo-200 text-indigo-800 text-sm rounded-md">
                アバター着せ替え
              </button>
            </div>
          </div>
        </div>

        {/* 曜日＋にこにこ */}
        <div className="mt-8 border-2 border-blue-400 rounded-xl p-2">
          <div className="grid grid-cols-7 text-center text-lg font-bold text-gray-700">
            {["月", "火", "水", "木", "金", "土", "日"].map((day, index) => (
              <div
                key={index}
                className={
                  index === 5
                    ? "text-blue-600"
                    : index === 6
                    ? "text-red-500"
                    : ""
                }
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 mt-2 text-center">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="text-orange-400 text-3xl">
                  😊
                </div>
              ))}
          </div>
        </div>

        {/* 教科バッジ */}
        <div className="mt-8 grid grid-cols-5 gap-4 text-center">
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-red-300" />
            <p className="mt-2 text-lg text-black">国語</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-300" />
            <p className="mt-2 text-lg text-black">数学</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-green-300" />
            <p className="mt-2 text-lg text-black">理科</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-300" />
            <p className="mt-2 text-lg text-black">社会</p>
          </div>
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-300" />
            <p className="mt-2 text-lg text-black">英語</p>
          </div>
        </div>

        {/* 最近学習したもの */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2 text-black">
            最近学習したもの
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-md text-sm text-black">
              二次方程式の解の公式を導出せよ。
            </div>
            <div className="border border-gray-300 p-4 rounded-md text-sm text-black">
              二次方程式の解の公式を導出せよ。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
