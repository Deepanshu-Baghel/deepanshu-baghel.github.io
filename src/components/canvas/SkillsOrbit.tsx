'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Python', 'Solidity', 'Web3', 'Blockchain',
  'Three.js', 'Tailwind CSS', 'Framer Motion', 'GraphQL'
]

function SkillSphere({ position, skill }: { position: [number, number, number], skill: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.1} />
      </mesh>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  )
}

export default function SkillsOrbit() {
  const orbitRadius = 3

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />

        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2
          const x = Math.cos(angle) * orbitRadius
          const z = Math.sin(angle) * orbitRadius
          return (
            <SkillSphere
              key={skill}
              position={[x, 0, z]}
              skill={skill}
            />
          )
        })}
      </Canvas>
    </div>
  )
}
