"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const ROLES = ["Enterprise Architect", "Systems Engineer", "AI Automation Lead", "Co-Founder"];
const ITEMS = ["Python","Django","Next.js","React","TypeScript","PostgreSQL","Redis","Docker","Jenkins","Azure","RPA","AI/OCR","Linux","GitHub Actions"];

function TypedRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing"|"pause"|"deleting">("typing");

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 35);
      } else {
        setRoleIdx(i => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx]);

  return (
    <span className="text-[var(--acid)]">
      {displayed}
      <span className="blink">_</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y = useTransform(scrollYProgress, [0,1], ["0%","18%"]);
  const opacity = useTransform(scrollYProgress, [0,0.7], [1,0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-16 overflow-hidden flex flex-col border-b border-[var(--border)]"
      aria-label="Hero"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />

      {/* Gradient orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--acid-dim) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none">
      <Image
          src="/me.png"
          alt="Gradient Orb"
          // layout="fill"
          objectFit="cover"
          className="rounded-full"
          width={1800}
          height={1800}
        />
      </div> */}

      {/* Scanline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="scanline" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 items-center"
      >
        <div className="px-6 md:px-12 py-20 lg:py-0 flex flex-col justify-center min-h-[calc(100vh-11rem)]">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-8 w-fit"
          >
            {/* <span className="w-1.5 h-1.5 rounded-full bg-[var(--acid)] animate-pulse shadow-[0_0_6px_var(--acid)]" /> */}
            {/* <span className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--ink-2)]">
              Available for work
            </span> */}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16,1,0.3,1] }}
            className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,7rem)] leading-[0.97] tracking-[-0.03em] text-[var(--ink)] mb-4"
          >
            Enterprise
            <br />
            Software
            <br />
            <em className="text-[var(--ink-2)] italic">Engineer</em>
          </motion.h1>

          {/* Typed sub-role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-[family-name:var(--font-mono)] text-[clamp(0.85rem,2vw,1.1rem)] tracking-[0.06em] mb-10 h-7"
          >
            <TypedRole />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-[var(--ink-2)] text-base leading-relaxed max-w-[44ch] mb-12 border-l-2 border-[var(--acid)] pl-4"
          >
            I build high-resilience enterprise systems spanning HR, fleet,
            accounting, AI, and process automation — reducing manual effort
            by 60%+ across organisations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              data-cursor="explore"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--acid)] text-[#080808] font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] uppercase font-medium hover:shadow-[0_0_24px_var(--glow)] transition-all duration-300"
            >
              View Work
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-2)] text-[var(--ink-2)] font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.14em] uppercase hover:border-[var(--acid)] hover:text-[var(--acid)] transition-all duration-200"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Right: stats column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:flex flex-col justify-center gap-0 border-l border-[var(--border)] h-full min-h-[calc(100vh-4rem)] w-56 shrink-0"
        >
          {[
            { num: "60%+", label: "Efficiency gain", sub: "across all deployments" },
            { num: "9",    label: "Products shipped", sub: "enterprise & consumer" },
            { num: "2",    label: "Ventures founded", sub: "Zuribyte & beyond" },
            { num: "5+",   label: "Years experience", sub: "in enterprise software" },
          ].map((s, i) => (
            <div key={i} className="px-8 py-8 border-b border-[var(--border)] last:border-b-0">
              <p className="font-[family-name:var(--font-display)] text-[2.4rem] leading-none tracking-[-0.04em] text-[var(--ink)] mb-1">
                {s.num}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.12em] uppercase text-[var(--acid)] mb-0.5">
                {s.label}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[0.58rem] text-[var(--ink-3)]">
                {s.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="relative z-10 h-10 border-t border-[var(--border)] overflow-hidden flex items-center bg-[var(--bg-2)]" aria-hidden="true">
        <div className="flex gap-8 whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.18em] uppercase text-[var(--ink-3)] shrink-0">
              <span className="text-[var(--acid)] mr-2">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
