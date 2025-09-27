"use client";
import dynamic from "next/dynamic";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

// dynamic import 3D (Hero uses @react-three/fiber)
const Footer = () => (
  <footer className="w-full py-10 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} Kelvin Maina · Built with ❤️
  </footer>
);

export default function Page() {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new (Lenis as any)({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const items = [
    {
      text: "Kelvin Maina",
      gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400",
    },
    {
      text: "Tokić",
      gradient: "bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400",
    },
    { text: "Travel Management", color: "text-purple-400" },
    { text: "Ticketing", color: "text-purple-400" },
    { text: "Payroll", color: "text-purple-400" },
    { text: "Onboarding", color: "text-purple-400" },
    { text: "AI-driven Document Processing", color: "text-pink-400" },
    { text: "Administration Automation", color: "text-blue-400" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about" className="py-28 px-6 md:px-28">
        <div className="max-w-4xl mx-auto glass p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 flex flex-wrap gap-1">
            I’m{" "}
            {items.slice(0, 1).map((item, i) => (
              <motion.span
                key={i}
                className={`font-semibold bg-clip-text text-transparent ${item.gradient}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {item.text}
              </motion.span>
            ))}{" "}
            — a seasoned software architect and engineer focused on building
            high-resilience, enterprise-grade systems. Currently at{" "}
            {items.slice(1, 2).map((item, i) => (
              <motion.span
                key={i}
                className={`font-semibold bg-clip-text text-transparent ${item.gradient}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {item.text}
              </motion.span>
            ))}
            , I’ve driven the design and development of software across{" "}
            {items.slice(2).map((item, i) => (
              <motion.span
                key={i}
                className={`font-semibold ${item.color}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              >
                {item.text}
                {i < items.slice(2).length - 1 ? ", " : "."}
              </motion.span>
            ))}
          </p>
          <p className="text-foreground text-lg leading-relaxed">
            My work has consistently resulted in reducing manual workload and
            processing times by over{" "}
            <motion.span
              className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 drop-shadow-[0_0_8px_rgba(124,58,237,0.7)]"
              initial={{
                scale: 0.8,
                opacity: 0,
                textShadow: "0 0 0px rgba(124,58,237,0.7)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 1, 1],
                textShadow: [
                  "0 0 8px rgba(124,58,237,0.7)",
                  "0 0 20px rgba(236,72,153,0.9)",
                  "0 0 12px rgba(6,182,212,0.8)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              60%
            </motion.span>
            , enabling internal teams to scale with fewer resources. I am deeply
            passionate about automation, system architecture, and bridging AI
            with business workflows.
          </p>
        </div>
      </section>

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
