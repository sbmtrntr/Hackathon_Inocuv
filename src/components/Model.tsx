/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM, VRMLoaderPlugin } from "@pixiv/three-vrm";
import {
  createVRMAnimationClip,
  VRMAnimationLoaderPlugin,
} from "@pixiv/three-vrm-animation";
import * as THREE from "three";

interface ModelProps {
  url: string;
  animationUrl: string;
}

export function Model({ url, animationUrl }: ModelProps) {
  const [progress, setProgress] = useState<number>(0);
  const [vrm, setVrm] = useState<VRM | null>();
  const [vrma, setVrma] = useState<any>();
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (!vrm) {
      const loader = new GLTFLoader();
      loader.register((parser) => {
        return new VRMLoaderPlugin(parser);
      });
      loader.register((parser) => {
        return new VRMAnimationLoaderPlugin(parser);
      });

      let loadedVRM: VRM | null = null;
      let vrmaData: any = null;

      loader.load(
        url,
        (tmpGltf) => {
          //   const vrm = tmpGltf.userData.vrm;
          loadedVRM = tmpGltf.userData.vrm;
          if (!loadedVRM) {
            return;
          }
          setVrm(loadedVRM);

          loadedVRM?.expressionManager?.setValue("happy", 0.7);
          loadedVRM?.expressionManager?.setValue("aa", 1.0);
          loadedVRM?.expressionManager?.update();
          loadedVRM?.humanoid.update();

          console.log("vrm:");
          console.log(vrm);
          console.log("loaded");
        },
        // called as loading progresses
        (xhr) => {
          setProgress((xhr.loaded / xhr.total) * 100);
          //   console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        (error) => {
          console.log("An error happened");
          console.log(error);
        }
      );
      // アニメーション読み込み
      loader.load(
        animationUrl,
        (gltf) => {
          vrmaData = gltf.userData.vrmAnimations?.[0];
          if (vrmaData) {
            setVrma(vrmaData);
          }
        },
        undefined,
        (error) => console.error("VRMA load error", error)
      );
    }
  }, [vrm, url, animationUrl]);

  useEffect(() => {
    if (vrm && vrma && !mixerRef.current) {
      const mixer = new THREE.AnimationMixer(vrm.scene);
      const clip = createVRMAnimationClip(vrma, vrm);
      mixer.clipAction(clip).play();
      mixerRef.current = mixer;
    }
  }, [vrm, vrma]);

  // 毎フレーム mixer 更新
  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
    vrm?.update(delta);
  });

  return (
    <>
      {vrm ? (
        <>
          <primitive object={vrm.scene} />
        </>
      ) : (
        <Html center>{progress} % loaded</Html>
      )}
    </>
  );
}
