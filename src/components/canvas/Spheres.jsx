import React, { useRef, useEffect, useMemo, use } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useMatcapTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
const radii = [
    1.05,
    0.65,
    0.85,
    0.42,
    0.92,
    0.74,
    0.95,
    0.33,
    0.23,
    0.52,
    0.62,
    0.46,
    0.55,
    0.62,
    0.72,
    0.29,
    0.44,
    0.82,
    0.73,
    0.48,
    0.43,
    0.62,
    0.37,
    0.39,
    0.95,

    0.33,
    0.63,
    0.45,
    0.22,
    0.38,
    0.48,
    0.16,
    0.23,
    0.28,
    0.42,
    0.85,
    0.79,
    0.82,
    1.05,
    0.83,
    0.68,
    0.83,
    0.32,
    0.52,
    0.63,
    0.57,
    0.44,
    0.78,
    0.69,
    0.62,
    0.72,
    0.53,
    0.61,
    0.38,
    0.37,
    0.36,
    0.83,
    0.63,
    0.75,
    0.82,
    0.43,
    0.92,
    0.32,

    0.31,
    0.62,
    0.43,
    0.24,
    0.55,
    0.53,
    0.18,
    0.22,
    0.27,
    0.42,
    0.81,
    0.78,
    0.83,
    1.07,
    0.79,
    0.71,
    0.82,
    0.33,
    0.54,
    0.62,
    0.82,
    0.69,
    0.78,
    0.68,
    0.61,
    0.71,
    0.52,
    0.62,
    0.37,
    0.36,
    0.38,
    0.81,
    0.61,
    0.71,
    0.82,
    0.41,
    0.87,
    0.31
];

const positions = [
    { x: 0.02, y: -0.03, z: 0.01 },

    { x: 0.78, y: 0.97, z: 0.91 },
    { x: 0.48, y: -1.03, z: 1.19 },
    { x: -0.15, y: -1.22, z: 0.88 },
    { x: 1.49, y: 1.18, z: 0.79 },
    { x: 0.53, y: -1.59, z: 1.37 },
    { x: -1.53, y: 1.05, z: 1.12 },
    { x: -1.47, y: -1.49, z: 0.98 },
    { x: -1.46, y: -1.53, z: -1.88 },
    { x: 1.86, y: 0.77, z: 0.06 },
    { x: 1.54, y: -1.23, z: -0.73 },
    { x: 0.91, y: -1.59, z: 0.25 },
    { x: 0.43, y: 2.01, z: 0.67 },
    { x: 2.47, y: 1.21, z: -0.18 },
    { x: 2.34, y: 0.67, z: 0.54 },
    { x: -1.82, y: -0.33, z: 0.88 },
    { x: -1.03, y: 0.23, z: 0.89 },
    { x: 0.18, y: 1.04, z: 1.03 },
    { x: -2.91, y: 0.73, z: 1.02 },

    { x: -1.99, y: -0.92, z: 1.53 },
    { x: -2.28, y: 2.43, z: -0.12 },
    { x: -2.49, y: 1.91, z: 1.19 },
    { x: -1.82, y: 0.35, z: 1.21 },
    { x: -2.42, y: 1.41, z: 0.08 },
    { x: -2.7, y: -0.92, z: 1.08 },
    { x: -1.79, y: -1.31, z: 1.69 },
    { x: -1.59, y: 1.69, z: 0.92 },
    { x: -2.79, y: 1.61, z: 1.67 },
    { x: -2.95, y: 2.29, z: 0.66 },
    { x: 1.12, y: -0.18, z: -1.43 },
    { x: -3.97, y: 1.75, z: 0.4 },
    { x: 0.14, y: 1.43, z: -1.3 },
    { x: -1.62, y: 1.38, z: -1.78 },
    { x: -3.51, y: -0.55, z: 0.11 },
    { x: -0.08, y: -1.01, z: -1.97 },
    { x: -4.48, y: 0.58, z: -0.48 },
    { x: -3.89, y: 0.02, z: 1.01 },
    { x: -4.59, y: -0.13, z: 0.67 },
    { x: -3.01, y: 1.53, z: -0.72 },
    { x: -0.51, y: 0.19, z: -1.51 },
    { x: -1.31, y: -0.43, z: -1.48 },
    { x: -3.33, y: 0.28, z: -1.53 },
    { x: -4.79, y: -1.25, z: 0.43 },
    { x: -4.29, y: 0.82, z: 1.38 },
    { x: -3.53, y: -1.83, z: 0.88 },
    { x: -3.57, y: -0.63, z: 1.44 },
    { x: -4.56, y: -1.48, z: 1.61 },
    { x: -3.84, y: -1.14, z: 2.11 },
    { x: -2.88, y: -0.28, z: 1.84 },
    { x: -2.17, y: -0.38, z: 1.88 },
    { x: -5.11, y: -0.22, z: 1.84 },
    { x: -5.29, y: 1.27, z: 0.75 },
    { x: -5.25, y: 1.97, z: -0.42 },
    { x: -5.18, y: 0.92, z: 1.99 },
    { x: -4.02, y: 0.09, z: 1.78 },

    { x: 2.03, y: -0.97, z: 1.52 },
    { x: 2.31, y: 2.38, z: -0.11 },
    { x: 2.52, y: 1.87, z: 1.17 },
    { x: 1.79, y: 0.35, z: 1.21 },
    { x: 3.28, y: 0.63, z: 1.03 },
    { x: 2.75, y: -0.92, z: 1.08 },
    { x: 1.81, y: -1.31, z: 1.65 },
    { x: 1.63, y: 1.95, z: 0.88 },
    { x: 2.81, y: 1.59, z: 1.66 },
    { x: 2.98, y: 2.27, z: 0.67 },
    { x: -1.31, y: -0.22, z: -2.49 },
    { x: 4.02, y: 1.75, z: 0.36 },
    { x: 1.69, y: 1.43, z: -1.31 },
    { x: 2.53, y: -1.22, z: -1.98 },
    { x: 3.47, y: -0.55, z: 0.13 },
    { x: 0.13, y: 0.39, z: -2.41 },
    { x: 4.54, y: 0.57, z: -0.47 },
    { x: 3.89, y: 0.01, z: 1.03 },
    { x: 4.57, y: -0.09, z: 0.62 },
    { x: 3.03, y: 1.52, z: -0.71 },
    { x: 2.32, y: 0.61, z: -2.58 },
    { x: 4.01, y: 1.47, z: -1.63 },
    { x: 3.33, y: 0.27, z: -1.53 },
    { x: 4.78, y: -1.27, z: 0.38 },
    { x: 4.31, y: 0.89, z: 1.39 },
    { x: 3.48, y: -1.85, z: 0.92 },
    { x: 3.61, y: -0.58, z: 1.44 },
    { x: 4.53, y: -1.49, z: 1.62 },
    { x: 3.81, y: -1.12, z: 2.13 },
    { x: 2.92, y: -0.27, z: 1.85 },
    { x: 2.25, y: -0.37, z: 1.89 },
    { x: 5.08, y: -0.19, z: 1.82 },
    { x: 5.25, y: 1.25, z: 0.78 },
    { x: 5.21, y: 1.96, z: -0.41 },
    { x: 5.19, y: 0.93, z: 1.97 },
    { x: 4.06, y: 0.04, z: 1.79 }
];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(); //stores position of mouse
const forces = new Map();
const tempVector = new THREE.Vector3();

export default function Spheres() {
    const originalPositions = useRef([]);
    const groupRef = useRef();
    const forcesRef = useRef(new Map());
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const { camera, viewport, gl } = useThree();

    const spheres = useMemo(() => {
        return positions
            .map((pos, i) => ({
                position: [pos.x, pos.y, pos.z - 5],
                radius: radii[i] || 0.2,
                key: i,
            }));

    }, []);

    // Save original positions
    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.children.forEach((mesh, index) => {
                originalPositions.current[index] = mesh.position.clone();
            });
        }
    }, []);

    // Mouse movement → repulsion logic
    function onMouseMove(event) {
        const mouseVector = new THREE.Vector2();
        // mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        //mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        const rect = gl.domElement.getBoundingClientRect(); // Get canvas position/size on screen

        mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;


        raycaster.setFromCamera(mouseVector, camera);
        if (!groupRef.current) return;

        const intersects = raycaster.intersectObjects(groupRef.current.children);
        if (intersects.length > 0) {
            const hovered = intersects[0].object;
            const force = new THREE.Vector3()
                .subVectors(intersects[0].point, hovered.position)
                .normalize()
                .multiplyScalar(0.05); // repulsion strength
            forcesRef.current.set(hovered.uuid, force);
        }
    }

    useEffect(() => {


        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    // Animation and force update
    useFrame((state, delta) => {
        if (!groupRef.current) return;

        groupRef.current.children.forEach((sphere, i) => {
            const original = originalPositions.current[i];
            if (!original) return;
            const force = forcesRef.current.get(sphere.uuid) || new THREE.Vector3(0, 0, 0);

            // Apply force
            sphere.position.add(force);

            // Decay force gradually
            forcesRef.current.set(
                sphere.uuid,
                force.multiplyScalar(0.9)
            );

            // Return to original position slowly
            sphere.position.lerp(original, 0.02);

            // Breathing animation
            const offset = i * 0.2;
            sphere.position.y += Math.sin(state.clock.elapsedTime * 2 + offset) * 0.001;
            // Rotation
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
        });

        // collision handler
        const spheres = groupRef.current.children;
        for (let i = 0; i < spheres.length; i++) {
            const sphereA = spheres[i];
            const radiusA = sphereA.userData.radius;
            for (let j = i + 1; j < spheres.length; j++) {
                const sphereB = spheres[j];
                const radiusB = sphereB.userData.radius;
                const distance = sphereA.position.distanceTo(sphereB.position);
                const minDist = (radiusA + radiusB) * 1.2;
                if (distance < minDist) {
                    tempVector.subVectors(sphereB.position, sphereA.position);
                    tempVector.normalize();
                    const pushStrength = (minDist - distance) * 0.4;

                    sphereA.position.sub(tempVector.multiplyScalar(pushStrength));
                    sphereB.position.add(tempVector.multiplyScalar(pushStrength));
                }
            }
        }
    });






    return (
        <group ref={groupRef}>
            {spheres.map(({ position, radius, key }) => (
                <mesh
                    key={key}
                    position={position}
                    scale={[radius, radius, radius]}
                    castShadow
                    receiveShadow
                    userData={{ radius }}

                >
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshStandardMaterial color={'#69B8E4'}
                        emissive={'#69B8E4'}
                        emissiveIntensity={1}


                    />
                </mesh>
            ))}
        </group>
    );
}