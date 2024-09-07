import React, { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cylender = () => {
  let tex = useTexture("./texture.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    if (cyl.current?.rotation) {
      cyl.current.rotation.y += delta / 4;
    }
  });
  return (
    <group ref={cyl}>
      <mesh rotation={[0, 1.4, 0.5]}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={tex}
          emissive={"#ffffff50"}
          emissiveIntensity={0.1}
          color={"#fff"}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  );
};

export default Cylender;
