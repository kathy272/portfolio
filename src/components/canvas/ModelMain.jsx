import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { CanvasLoader } from "../Loader";
import { u } from "framer-motion/client";




const Model = ({ isMobile }) => {
    const model = useGLTF('./Main/scene.gltf');

    console.log(isMobile)
    model.scene.traverse(function (child) {

        if (child.isMesh) {

            child.material.side = THREE.DoubleSide;
        }
    });

    return (
        <mesh>
            <hemisphereLight intensity={0.7} groundColor="black" />
            <pointLight intensity={0.5} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.39}
                penumbra={1}
                intensity={1}
                castShadow
            />
            <directionalLight
                position={[0, 10, 5]}
                angle={0.39}
                intensity={1}
                castShadow
            />
            <ambientLight intensity={0.7} />

            <primitive
                object={model.scene}
                scale={isMobile ? 0.6 : 1.3}
                position={isMobile ? [-2.5, -1.5, -0.5] : [-4.3, -3.2, -0.7]} // position={isMobile ? [-2.5, -1.5,-0.5] : [-2.5,-2.5,-1.5]}
                rotation={[-0.01, -0.3, -0.07]} //    rotation={[-0.01,-0.2,-0.0]}

                castShadow
                receiveShadow />


        </mesh>


    );
};
const ModelCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        if (mediaQuery.matches !== isMobile) {
            setIsMobile(mediaQuery.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }} //field of view default 25
            gl={{ preserveDrawingBuffer: true }} //allows for saving the canvas as an image
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />



                <Model isMobile={isMobile} />

            </Suspense>
            <Preload all />

        </Canvas>
    )
};


export default ModelCanvas;