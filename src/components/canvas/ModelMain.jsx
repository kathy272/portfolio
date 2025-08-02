import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { CanvasLoader } from "../Loader";
import { u } from "framer-motion/client";
//import spriteTexture from './textures/displayFace.png'
const tex = new THREE.TextureLoader().load("/Main/textures/displayFace.png");
import { useInView } from 'react-intersection-observer';


//for the steam on top of the coffe mug
const Steam = ({ count = 3, position = [0, 0, 0], isMobile = false }) => {
    const groupRef = useRef();
    console.log(isMobile)

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.2) * (isMobile ? 0.5 : 0.8),
                    Math.random() * (isMobile ? 0.4 : 0.5),
                    (Math.random() - 0.5) * (isMobile ? 0.4 : 0.7)
                ),
                speed: (isMobile ? 0.0005 : 0.001) + Math.random() * (isMobile ? 0.001 : 0.002),
                scale: (isMobile ? 0.1 : 0.25) + Math.random() * (isMobile ? 0.001 : 0.05),
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


const Model = ({ isMobile }) => {
    const model = useGLTF('./Main/scene.gltf');

    model.scene.traverse(function (child) {

        if (child.isMesh) {
            child.material.side = THREE.DoubleSide;


        }

    });

    return (
        <mesh>
            <hemisphereLight intensity={0.9} groundColor="black" />
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
            <group>
                <primitive
                    object={model.scene}
                    scale={isMobile ? 0.4 : 1.5}
                    position={isMobile ? [-2.5, -1.5, -0.5] : [-4.3, -3.2, -0.7]} // position={isMobile ? [-2.5, -1.5,-0.5] : [-2.5,-2.5,-1.5]}
                    rotation={[-0.01, -0.3, -0.07]} //    rotation={[-0.01,-0.2,-0.0]}
        

                    castShadow
                    receiveShadow />
                <Steam position={isMobile ? [-2.2, -1.0, -1.2] : [-3.5, -2.4, -3.8]} isMobile={isMobile} />

            </group>
        </mesh>


    );
};
const ModelCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); 

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
        <div ref={ref} className="w-full h-full"> 
      {inView && (
        <Canvas
            frameloop="always"// demand
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }} //field of view default 25
            gl={{ preserveDrawingBuffer: true }} 
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Model isMobile={isMobile} />

            </Suspense>
            <Preload all />

        </Canvas>
     )}
    </div>
    );
}; 


export default ModelCanvas;