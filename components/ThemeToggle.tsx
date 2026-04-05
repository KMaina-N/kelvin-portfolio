"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-cursor="theme"
      className="relative w-12 h-6 rounded-full border border-[var(--border-2)] bg-[var(--bg-3)] flex items-center px-1 transition-all duration-300 hover:border-[var(--acid)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--acid)]"
    >
      <motion.div
        animate={{ x: theme === "dark" ? 0 : 22 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-4 h-4 rounded-full bg-[var(--acid)] shadow-[0_0_8px_var(--glow)] flex items-center justify-center text-[8px]"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            {theme === "dark" ? "◑" : "○"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
