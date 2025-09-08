import { Suspense, useEffect, useState, useRef, useMemo } from "react";
const base = import.meta.env.BASE_URL;
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { CanvasLoader } from "../Loader";
import { u } from "framer-motion/client";
//import spriteTexture from './textures/displayFace.png'
//const tex = new THREE.TextureLoader().load(`${base}Main/textures/displayFace.png`);

import { useInView } from 'react-intersection-observer';


//for the steam on top of the coffe mug
const Steam = ({ count = 3, position = [0, 0, 0], isMobile = false }) => {
    const groupRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.2) * (isMobile ? 0.5 : 1.1),
                    Math.random() * (isMobile ? 0.4 : 1),
                    (Math.random() - 0.5) * (isMobile ? 0.4 : 1.0)
                ),
                speed: (isMobile ? 0.0005 : 0.001) + Math.random() * (isMobile ? 0.001 : 0.002),
                scale: (isMobile ? 0.15 : 0.4) + Math.random() * (isMobile ? 0.001 : 0.1),
            });

        }
        return temp;
    }, [count, isMobile]);

    useFrame(() => {
        if (!groupRef.current) return;

        for (let i = 0; i < groupRef.current.children.length; i++) {
            const child = groupRef.current.children[i];
            const p = particles[i];
            child.position.y += p.speed;
            if (child.position.y > (isMobile ? 0.3 : 1)) child.position.y = 0;
        }
    });
    return (
        <group ref={groupRef} position={position}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position}>
                    <sphereGeometry args={[p.scale, 6, 6]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
            ))}
        </group>
    )
}


const Model = ({ isMobile, controlsRef }) => {
const model = useGLTF(`${base}Main/scene.gltf`);

    model.scene.traverse(function (child) {

        if (child.isMesh) {
            child.material.side = THREE.DoubleSide;
        }
    });

    return (
        <mesh>
            <hemisphereLight intensity={0.9} />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 70, 10]}
                angle={0.45}
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
            <group
            >
                <primitive
                    object={model.scene}
                    scale={isMobile ? 0.7 : 2}
                    position={isMobile ? [-2.5, -1.5, -0.5] : [-5.0, -3.2, -6.7]} // position={isMobile ? [-2.5, -1.5,-0.5] : [-2.5,-2.5,-1.5]}
                    rotation={[-0.01, -0.7, -0.1]}
                    castShadow
                    receiveShadow />
                <Steam position={isMobile ? [-2.2, -1.0, -1.5] : [-4.0, -1.5, -9.2]} isMobile={isMobile} />

            </group>
        </mesh>


    );
};
const ModelCanvas = () => {
    const controlsRef = useRef();
    const [isMobile, setIsMobile] = useState(false);
    // const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

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
            className=" w-full  md:w-5/6 "
            frameloop="always"// demand
            shadows
            camera={{ position: [15, 20, 15], fov: 25 }} //field of view default 25
            gl={{ preserveDrawingBuffer: true }}

        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls ref={controlsRef} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.2}
                    target={isMobile ? [-2.5, -1.5, -0.5] : [-4.0, 0.5, -6.7]}
                />
                <Model isMobile={isMobile} controlsRef={controlsRef} />

            </Suspense>
            <Preload all />

        </Canvas>


    );
};


export default ModelCanvas;