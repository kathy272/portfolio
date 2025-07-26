import React, { Suspense, useEffect, useState } from "react";
import {Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { CanvasLoader } from "../Loader";
import { u } from "framer-motion/client";

const Model = ({isMobile}) => {
  const model = useGLTF('./Main/scene.gltf');
console.log(isMobile)
model.scene.traverse( function ( child ) {

    if ( child.isMesh ) { 

     child.material.side = THREE.DoubleSide;
    }
  });   

  return (
    <mesh>
        <ambientLight intensity={0.7} />
      <hemisphereLight intensity={0.7} groundColor="black" />
        <pointLight intensity={0.5} />
        <spotLight 
            position={[-20, 50, 10]} 
            angle={0.39} 
            penumbra={1} 
            intensity={1} 
            castShadow
            shadow-mapSize={1024}
            shadow-bias={-0.0001}
            shadow-camera-far={1000}
            shadow-camera-near={1}
>   </spotLight>
        <directionalLight 
            position={[0, 10, 5]} 
            angle={0.39}
            color={0xff0000}
            intensity={1} 
            castShadow
            shadow-mapSize={1024}
            shadow-bias={-0.0001}
            shadow-camera-far={1000}
            shadow-camera-near={1}
        />
    <primitive 
    object={model.scene} 
    scale={isMobile ? 0.6 : 1} 
    position={isMobile ? [-2.5, -1.5,-0.5] : [-2.5,-2.5,-1.5]}
    rotation={[-0.01,-0.2,-0.0]}
    castShadow
    receiveShadow />
        
       
    </mesh>
    

  );
  };
  const ModelCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {     
            setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };}, []);
    return (
        <Canvas
        frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }} //field of view
            gl={{ preserveDrawingBuffer: true }} //allows for saving the canvas as an image
           >
            <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
            <Model isMobile = {isMobile} /> //the model component
            </Suspense>
            <Preload all />
           
            </Canvas>
    )
};


export default ModelCanvas;