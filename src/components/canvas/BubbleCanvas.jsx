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
        className="w-full h-auto sm:w-full md:w-[60vw] md:h-[80vh]"

      //style={{ width: '60vw', height: '70vh' }}
    >
      <ambientLight intensity={0.8}/>
<directionalLight
    castShadow
    position={[-10, 7, 4]}
    intensity={2}
   
/>

      <Spheres />
    </Canvas>
  );
}
