"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const skills = [
  { name: "Enterprise Architecture", level: 95 },
  { name: "System Design & Integration", level: 92 },
  { name: "Automation / RPA", level: 94 },
  { name: "AI / Document Processing", level: 88 },
  { name: "DevOps (Jenkins, Docker, Nginx)", level: 85 },
  { name: "APIs & Microservices", level: 90 },
  { name: "Web Apps (Next.js, React, Tailwind, Django)", level: 93 },
];

const techStack = [
  {
    name: "Python",
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "Django",
    logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  },
  {
    name: "SQL",
    logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },
  {
    name: "React",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "TypeScript",
    logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "Jenkins",
    logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  },
  {
    name: "Docker",
    logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    name: "Git",
    logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "GitHub Actions",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
  },
  {
    name: "Linux",
    logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
  },
  //   { name: "Prisma", logo: "https://www.vectorlogo.zone/logos/prisma/prisma-icon.svg" },
  {
    name: "PostgreSQL",
    logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Redis",
    logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  },
  {
    name: "Azure",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  },
];

// ----------- Structured Sphere Component ------------
const shapes = ["icosahedron", "octahedron", "torus", "box"];

function TechShape({
  radius = 3,
  index,
  total,
}: {
  radius?: number;
  index: number;
  total: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);

  const baseAngle = (index / total) * Math.PI * 2;
  const orbitRadius = radius + Math.random() * 1.5;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.3;
    const angle = baseAngle + t;

    mesh.current.position.x = orbitRadius * Math.cos(angle);
    mesh.current.position.z = orbitRadius * Math.sin(angle);
    mesh.current.position.y = Math.sin(angle * 2 + index) * 1.2;

    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.008;
  });

  // Pick geometry
  let geometry;
  switch (shapes[index % shapes.length]) {
    case "icosahedron":
      geometry = <icosahedronGeometry args={[0.4, 0]} />;
      break;
    case "octahedron":
      geometry = <octahedronGeometry args={[0.4, 0]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[0.35, 0.1, 16, 60]} />;
      break;
    case "box":
      geometry = <boxGeometry args={[0.4, 0.4, 0.4]} />;
      break;
  }

  return (
    <mesh ref={mesh}>
      {geometry}
      {/* Main glowing material */}
      <meshStandardMaterial
        color={`hsl(${index * 35}, 80%, 60%)`}
        roughness={0.1}
        metalness={0.7}
        emissive={`hsl(${index * 35}, 80%, 50%)`}
        emissiveIntensity={0.3}
        transparent
        opacity={0.85}
      />
      {/* Wireframe overlay */}
      <mesh geometry={mesh.current?.geometry}>
        <meshBasicMaterial color="white" wireframe opacity={0.25} transparent />
      </mesh>
    </mesh>
  );
}

// ----------- Main Component ----------------
export default function SkillsAndTech() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-28">
      {/* Structured 3D Canvas */}
      <Canvas
        className="absolute inset-0 -z-10 pointer-events-none"
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        {techStack.map((_, i) => (
          <TechShape key={i} index={i} total={techStack.length} />
        ))}
      </Canvas>

      <h3 className="text-3xl font-bold mb-12 text-center relative z-10">
        Skills & Tech Stack
      </h3>

      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10"
      >
        {/* Skills Section */}
        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-300 mb-6">Craft + Tools</p>
          <div className="flex flex-wrap gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{ delay: i * 0.06, duration: 0.8 }}
                className="flex items-center gap-4 min-w-[220px]"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center glass text-sm font-semibold">
                  {s.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="w-48 h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1.1, delay: i * 0.08 }}
                      className="h-2 bg-gradient-to-r from-purple-400 to-pink-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-300 mb-6">Tech Stack</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                variants={{ visible: { opacity: 1, y: 0 } }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 50,
                }}
                className="glass p-3 rounded-2xl flex flex-col items-center justify-center font-semibold text-white text-sm hover:scale-105 cursor-pointer"
              >
                <img src={tech.logo} alt={tech.name} className="w-8 h-8 mb-2" />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
