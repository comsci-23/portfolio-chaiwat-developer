import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  const meshRef = useRef();

  // หมุนวัตถุทุก frame
  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.8;
    meshRef.current.rotation.x += delta * 0.4;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#00FFFF" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-black to-slate-800 rounded-2xl shadow-lg overflow-hidden">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Cube />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
