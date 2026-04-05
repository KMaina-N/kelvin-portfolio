"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active section tracking
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));

    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between h-16 px-6 md:px-12" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            data-cursor="home"
            className="font-[family-name:var(--font-display)] text-[1rem] tracking-tight text-[var(--ink)] hover:text-[var(--acid)] transition-colors duration-200"
          >
            Kelvin Maina
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.16em] uppercase transition-colors duration-200 ${
                    active === l.href.slice(1)
                      ? "text-[var(--acid)]"
                      : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                  }`}
                >
                  {l.label}
                </Link>
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--acid)]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <Link
              href="mailto:kelvinmaina547@gmail.com"
              data-cursor="email"
              className="hidden md:inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.14em] uppercase px-4 py-2 border border-[var(--border-2)] text-[var(--ink-2)] hover:border-[var(--acid)] hover:text-[var(--acid)] hover:shadow-[0_0_16px_var(--acid-dim)] transition-all duration-200"
            >
              Hire me
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            >
              {[0, 1, 2].map(i => (
                <span key={i} className={`block h-px bg-[var(--ink)] transition-all duration-300 ${
                  i === 0 && menuOpen ? "rotate-45 translate-y-[9px]" :
                  i === 1 && menuOpen ? "opacity-0 scale-x-0" :
                  i === 2 && menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`} />
              ))}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--bg-2)]/95 backdrop-blur-md border-b border-[var(--border)] md:hidden"
          >
            <ul>
              {links.map((l, i) => (
                <motion.li key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 font-[family-name:var(--font-mono)] text-[0.7rem] tracking-[0.14em] uppercase text-[var(--ink-2)] hover:text-[var(--acid)] border-b border-[var(--border)] transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-[var(--ink-3)]">→</span>
                  </Link>
                </motion.li>
              ))}
              <li className="p-6">
                <Link
                  href="mailto:kelvinmaina547@gmail.com"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] uppercase py-3 border border-[var(--acid)] text-[var(--acid)] hover:bg-[var(--acid)] hover:text-[var(--bg)] transition-all"
                >
                  Hire me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
