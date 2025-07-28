import React, { useRef, useEffect, useMemo, use } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useMatcapTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
const radii = [
    1,
    0.6,
    0.8,
    0.4,
    0.9,
    0.7,
    0.9,
    0.3,
    0.2,
    0.5,
    0.6,
    0.4,
    0.5,
    0.6,
    0.7,
    0.3,
    0.4,
    0.8,
    0.7,
    0.5,
    0.4,
    0.6,
    0.35,
    0.38,
    0.9,

    0.3,
    0.6,
    0.4,
    0.2,
    0.35,
    0.5,
    0.15,
    0.2,
    0.25,
    0.4,
    0.8,
    0.76,
    0.8,
    1,
    0.8,
    0.7,
    0.8,
    0.3,
    0.5,
    0.6,
    0.55,
    0.42,
    0.75,
    0.66,
    0.6,
    0.7,
    0.5,
    0.6,
    0.35,
    0.35,
    0.35,
    0.8,
    0.6,
    0.7,
    0.8,
    0.4,
    0.89,
    0.3,

    0.3,
    0.6,
    0.4,
    0.2,
    0.52,
    0.5,
    0.15,
    0.2,
    0.25,
    0.4,
    0.8,
    0.76,
    0.8,
    1,
    0.8,
    0.7,
    0.8,
    0.3,
    0.5,
    0.6,
    0.8,
    0.7,
    0.75,
    0.66,
    0.6,
    0.7,
    0.5,
    0.6,
    0.35,
    0.35,
    0.35,
    0.8,
    0.6,
    0.7,
    0.8,
    0.4,
    0.89,
    0.3
];
const positions = [{ x: 0, y: 0, z: 0 },

{ x: 0.8, y: 0.94, z: 0.3 },
{ x: 0.5, y: -1, z: 1.2 },
{ x: -0.16, y: -1.2, z: 0.9 },
{ x: 1.5, y: 1.2, z: 0.8 },
{ x: 0.5, y: -1.58, z: 1.4 },
{ x: -1.5, y: 1, z: 1.15 },
{ x: -1.5, y: -1.5, z: 0.99 },
{ x: -1.5, y: -1.5, z: -1.9 },
{ x: 1.85, y: 0.8, z: 0.05 },
{ x: 1.5, y: -1.2, z: -0.75 },
{ x: 0.9, y: -1.62, z: 0.22 },
{ x: 0.45, y: 2, z: 0.65 },
{ x: 2.5, y: 1.22, z: -0.2 },
{ x: 2.35, y: 0.7, z: 0.55 },
{ x: -1.8, y: -0.35, z: 0.85 },
{ x: -1.02, y: 0.2, z: 0.9 },
{ x: 0.2, y: 1, z: 1 },
{ x: -2.88, y: 0.7, z: 1 },

{ x: -2, y: -0.95, z: 1.5 },
{ x: -2.3, y: 2.4, z: -0.1 },
{ x: -2.5, y: 1.9, z: 1.2 },
{ x: -1.8, y: 0.37, z: 1.2 },
{ x: -2.4, y: 1.42, z: 0.05 },
{ x: -2.72, y: -0.9, z: 1.1 },
{ x: -1.8, y: -1.34, z: 1.67 },
{ x: -1.6, y: 1.66, z: 0.91 },
{ x: -2.8, y: 1.58, z: 1.69 },
{ x: -2.97, y: 2.3, z: 0.65 },
{ x: 1.1, y: -0.2, z: -1.45 },
{ x: -4, y: 1.78, z: 0.38 },
{ x: 0.12, y: 1.4, z: -1.29 },
{ x: -1.64, y: 1.4, z: -1.79 },
{ x: -3.5, y: -0.58, z: 0.1 },
{ x: -0.1, y: -1, z: -2 },
{ x: -4.5, y: 0.55, z: -0.5 },
{ x: -3.87, y: 0, z: 1 },
{ x: -4.6, y: -0.1, z: 0.65 },
{ x: -3, y: 1.5, z: -0.7 },
{ x: -0.5, y: 0.2, z: -1.5 },
{ x: -1.3, y: -0.45, z: -1.5 },
{ x: -3.35, y: 0.25, z: -1.5 },
{ x: -4.76, y: -1.26, z: 0.4 },
{ x: -4.32, y: 0.85, z: 1.4 },
{ x: -3.5, y: -1.82, z: 0.9 },
{ x: -3.6, y: -0.6, z: 1.46 },
{ x: -4.55, y: -1.5, z: 1.63 },
{ x: -3.8, y: -1.15, z: 2.1 },
{ x: -2.9, y: -0.25, z: 1.86 },
{ x: -2.2, y: -0.4, z: 1.86 },
{ x: -5.1, y: -0.24, z: 1.86 },
{ x: -5.27, y: 1.24, z: 0.76 },
{ x: -5.27, y: 2, z: -0.4 },
{ x: -6.4, y: 0.4, z: 1 },
{ x: -5.15, y: 0.95, z: 2 },
{ x: -6.2, y: 0.5, z: -0.8 },
{ x: -4, y: 0.08, z: 1.8 },

{ x: 2, y: -0.95, z: 1.5 },
{ x: 2.3, y: 2.4, z: -0.1 },
{ x: 2.5, y: 1.9, z: 1.2 },
{ x: 1.8, y: 0.37, z: 1.2 },
{ x: 3.24, y: 0.6, z: 1.05 },
{ x: 2.72, y: -0.9, z: 1.1 },
{ x: 1.8, y: -1.34, z: 1.67 },
{ x: 1.6, y: 1.99, z: 0.91 },
{ x: 2.8, y: 1.58, z: 1.69 },
{ x: 2.97, y: 2.3, z: 0.65 },
{ x: -1.3, y: -0.2, z: -2.5 },
{ x: 4, y: 1.78, z: 0.38 },
{ x: 1.72, y: 1.4, z: -1.29 },
{ x: 2.5, y: -1.2, z: -2 },
{ x: 3.5, y: -0.58, z: 0.1 },
{ x: 0.1, y: 0.4, z: -2.42 },
{ x: 4.5, y: 0.55, z: -0.5 },
{ x: 3.87, y: 0, z: 1 },
{ x: 4.6, y: -0.1, z: 0.65 },
{ x: 3, y: 1.5, z: -0.7 },
{ x: 2.3, y: 0.6, z: -2.6 },
{ x: 4, y: 1.5, z: -1.6 },
{ x: 3.35, y: 0.25, z: -1.5 },
{ x: 4.76, y: -1.26, z: 0.4 },
{ x: 4.32, y: 0.85, z: 1.4 },
{ x: 3.5, y: -1.82, z: 0.9 },
{ x: 3.6, y: -0.6, z: 1.46 },
{ x: 4.55, y: -1.5, z: 1.63 },
{ x: 3.8, y: -1.15, z: 2.1 },
{ x: 2.9, y: -0.25, z: 1.86 },
{ x: 2.2, y: -0.4, z: 1.86 },
{ x: 5.1, y: -0.24, z: 1.86 },
{ x: 5.27, y: 1.24, z: 0.76 },
{ x: 5.27, y: 2, z: -0.4 },
{ x: 6.4, y: 0.4, z: 1 },
{ x: 5.15, y: 0.95, z: 2 },
{ x: 6.2, y: 0.5, z: -0.8 },
{ x: 4, y: 0.08, z: 1.8 }
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
    const { camera, mouse, viewport } = useThree();
    const matcap = useLoader(TextureLoader, '/matcap.png');

    const spheres = useMemo(() => {
        return positions.map((pos, i) => ({
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
        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

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

    // Add listener once
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    // Animation and force update
    useFrame((state, delta) => {
        if (!groupRef.current) return;

        groupRef.current.children.forEach((sphere, i) => {
            const original = originalPositions.current[i];
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
                    const pushStrength = (minDist - distance) *0.4;

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
                                        userData={{radius}}

                >
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshMatcapMaterial matcap={matcap} />
                </mesh>
            ))}
        </group>
    );
}