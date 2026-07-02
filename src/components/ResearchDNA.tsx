import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// 3D DNA Helix Mesh Component
const DNAHelix: React.FC = () => {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth continuous rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.15;
    }
  });

  const numPairs = 24;
  const radius = 1.8;
  const heightFactor = 0.28;
  const spheres: React.ReactNode[] = [];
  const connections: React.ReactNode[] = [];

  for (let i = 0; i < numPairs; i++) {
    const t = i * 0.45;
    const y = (i - numPairs / 2) * heightFactor;
    
    // Strand A coordinates
    const xA = Math.sin(t) * radius;
    const zA = Math.cos(t) * radius;
    
    // Strand B coordinates (phase shift by PI)
    const xB = Math.sin(t + Math.PI) * radius;
    const zB = Math.cos(t + Math.PI) * radius;

    // Draw nucleotides
    spheres.push(
      <mesh key={`a-${i}`} position={[xA, y, zA]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial 
          color="#0057FF" 
          emissive="#0057FF" 
          emissiveIntensity={0.6} 
          roughness={0.1} 
        />
      </mesh>
    );
    spheres.push(
      <mesh key={`b-${i}`} position={[xB, y, zB]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial 
          color="#00B4D8" 
          emissive="#00B4D8" 
          emissiveIntensity={0.6} 
          roughness={0.1} 
        />
      </mesh>
    );

    // Draw base-pair bonding lines (every step)
    const midpoint = [(xA + xB) / 2, y, (zA + zB) / 2] as [number, number, number];
    const length = radius * 2;
    
    connections.push(
      <mesh 
        key={`conn-${i}`} 
        position={midpoint} 
        rotation={[0, -t, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.02, 0.02, length, 8]} />
        <meshStandardMaterial 
          color="#00D084" 
          emissive="#00D084" 
          emissiveIntensity={0.3} 
          opacity={0.7} 
          transparent 
          roughness={0.4} 
        />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      {spheres}
      {connections}
    </group>
  );
};

export const ResearchDNA: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden glass-dark border border-white/5 shadow-2xl">
      <div className="absolute inset-0 z-0 bg-darknavy-dark/30 pointer-events-none" />
      
      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Animated stars/particles in the background */}
        <Stars radius={100} depth={50} count={300} factor={4} saturation={0} fade speed={1.5} />
        
        <DNAHelix />
        
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>

      {/* Interactive overlays */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-extrabold uppercase tracking-widest text-secondary flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
        <span>Drag to rotate 3D Molecular Helix</span>
      </div>
    </div>
  );
};
export default ResearchDNA;
