"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Mesh } from "three";

import React, { useRef } from "react";

function Particles() {
  const points = useRef<any>(null);

  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3).map(
    () => (Math.random() - 0.5) * 20,
  );

  useFrame(() => (points.current.rotation.y += 0.001));

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ff0000" />
    </points>
  );
}

const HeroExperience = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={1.5} camera={{ position: [0, 0, 5] }}>
        {/* lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} />

        {/* floating objects */}
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroExperience;
