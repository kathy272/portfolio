import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Spheres from './Spheres'; // We'll move the sphere logic here

export default function BubbleCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5.5], fov: 65 }} //default 0,0,5 and 75
      //style={{ width: '100vw', height: '100vh' }}
        className="w-[90vw] h-[60vh] md:w-[60vw] md:h-[70vh]"

      //style={{ width: '60vw', height: '70vh' }}
    >
      <Spheres />
    </Canvas>
  );
}
