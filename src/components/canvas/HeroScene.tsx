'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Torus, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />

        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
          <Torus args={[1, 0.4, 16, 100]} position={[-2, 0, 0]}>
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} />
          </Torus>
        </Float>

        <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
          <Sphere args={[0.8, 32, 32]} position={[2, 0, 0]}>
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
          </Sphere>
        </Float>

        <Float speed={1.6} rotationIntensity={0.8} floatIntensity={2.5}>
          <Torus args={[0.6, 0.2, 16, 100]} position={[0, -1.5, 0]}>
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.25} />
          </Torus>
        </Float>
      </Canvas>
    </div>
  )
}
