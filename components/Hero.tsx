"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import useMagnet from "@/hooks/useMagnet";

// function Shapes() {
//   return (
//     <group>
//       <Float floatIntensity={0.8} rotationIntensity={0.02}>
//         <mesh position={[-1.4, 0.4, 0]} scale={[0.9, 0.9, 0.9]}>
//           <icosahedronGeometry args={[0.8, 0]} />
//           <meshStandardMaterial
//             roughness={0.2}
//             metalness={0.6}
//             color="#7c3aed"
//             transparent
//             opacity={0.95}
//           />
//         </mesh>
//       </Float>

//       <Float floatIntensity={1.2} rotationIntensity={0.02}>
//         <mesh position={[1.6, -0.2, -0.4]} scale={[1.2, 1.2, 1.2]}>
//           <sphereGeometry args={[0.7, 32, 32]} />
//           <meshStandardMaterial
//             roughness={0.15}
//             metalness={0.9}
//             color="#ec4899"
//             opacity={0.95}
//             transparent
//           />
//         </mesh>
//       </Float>

//       <Float floatIntensity={0.6}>
//         <mesh position={[0, -1.1, -0.6]} scale={[1.6, 0.25, 1.6]}>
//           <boxGeometry args={[1.6, 0.25, 1.6]} />
//           <meshStandardMaterial
//             roughness={0.6}
//             metalness={0.2}
//             color="#06b6d4"
//             opacity={0.95}
//             transparent
//           />
//         </mesh>
//       </Float>
//     </group>
//   );
// }

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null!);
  useMagnet(titleRef); // magnetic effect for CTA

  return (
    <section className="h-screen relative overflow-hidden">
      {/* 3D Background */}
      {/* <Canvas style={{ position: "absolute", inset: 0, zIndex: 0 }} camera={{ position: [0, 0, 6], fov: 55 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 5]} intensity={0.6} />
        <Environment preset="city" />
        <Shapes />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas> */}

      {/* Glow Overlay behind text */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300"
>
  Enterprise Software <br />
  Engineer & Cofounder
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-gray-100 max-w-2xl text-center"
        >
          I lead systems spanning HR, fleet, accounting, AI, and process automation — reducing effort and time by 60%+ across functions.
        </motion.p>

        <motion.div
          ref={titleRef}
          whileHover={{ scale: 1.035 }}
          className="mt-10"
        >
          <a href="#projects" className="px-6 py-3 rounded-full glass inline-block font-semibold text-white">
            Explore my work
          </a>
        </motion.div>
      </div>

      {/* subtle radial overlays */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30">
        <div className="absolute -left-40 -top-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-700 to-transparent blur-3xl opacity-40"></div>
        <div className="absolute -right-40 -bottom-24 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-600 to-transparent blur-3xl opacity-30"></div>
      </div>
    </section>
  );
}
