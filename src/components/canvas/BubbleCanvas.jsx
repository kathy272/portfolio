import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Spheres from './Spheres'; // We'll move the sphere logic here

export default function BubbleCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 55 }} //default 0,0,5 and 75
      //style={{ width: '100vw', height: '100vh' }}
            style={{ width: '60vw', height: '70vh' }}

    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} castShadow />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI / 6}
        intensity={1}
        castShadow
      />
      <directionalLight position={[0, 10, 5]} intensity={1} castShadow />
<OrbitControls enableZoom={false} 
enableDamping dampingFactor={0.25}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
      <Spheres />
    </Canvas>
  );
}
