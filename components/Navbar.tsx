"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const fullText = "Kelvin Maina";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, 120); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between"
    >
      {/* Logo + Typing Name */}
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.15, rotate: [0, 10, -10, 0] }}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center font-bold text-white text-lg shadow-lg"
        >
          KM
        </motion.div>

        <div className="hidden md:flex items-center gap-1 text-sm text-gray-300">
          {displayedText}
          <span className={`${index < fullText.length ? "animate-pulse" : ""}`}>|</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <Link href="#about" className="text-sm text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="#skills" className="text-sm text-gray-300 hover:text-white">
          Skills
        </Link>
        <Link href="#projects" className="text-sm text-gray-300 hover:text-white">
          Projects
        </Link>
        <Link href="#contact" className="text-sm text-gray-300 hover:text-white">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
