"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const SKILLS = [
  { name: "Enterprise Architecture", level: 95, color: "var(--acid)" },
  { name: "System Design & Integration", level: 92, color: "var(--acid)" },
  { name: "Automation / RPA", level: 94, color: "var(--acid)" },
  { name: "AI / Document Processing", level: 88, color: "var(--acid)" },
  { name: "DevOps (Jenkins, Docker, Nginx)", level: 85, color: "var(--acid)" },
  { name: "APIs & Microservices", level: 90, color: "var(--acid)" },
  { name: "Web Apps (Next.js, React, Django)", level: 93, color: "var(--acid)" },
  { name: "Database Design", level: 89, color: "var(--acid)" },
];

const TECH = [
  { name: "Python",     logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg" },
  { name: "Django",     logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" },
  { name: "Next.js",    logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
  { name: "React",      logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
  { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" },
  { name: "Redis",      logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg" },
  { name: "Docker",     logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" },
  { name: "Jenkins",    logo: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "Azure",      logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
  { name: "Linux",      logo: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg" },
  { name: "GitHub",     logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
  { name: "MySQL",      logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
  { name: "Git",        logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
];

function SkillRow({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`group flex items-center gap-4 py-4 border-b border-[var(--border)] ${
        index % 2 === 0 ? "lg:border-r lg:pr-10" : "lg:pl-10"
      }`}
    >
      <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--ink-3)] w-5 shrink-0">
        {String(index + 1).padStart(2,"0")}
      </span>
      <span className="text-[0.88rem] font-bold text-[var(--ink)] group-hover:text-[var(--acid)] transition-colors flex-1 min-w-0 truncate">
        {name}
      </span>
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-28 h-[2px] bg-[var(--border)] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "var(--acid)", boxShadow: "0 0 8px var(--glow)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
            transition={{ duration: 1.1, delay: 0.1 + index * 0.04, ease: [0.16,1,0.3,1] }}
            style={{ transformOrigin: "left", background: "var(--acid)" }}
          />
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.62rem] text-[var(--ink-3)] w-8 text-right">
          {level}%
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)]" aria-labelledby="skills-heading">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 py-8 border-b border-[var(--border)]">
        <div className="flex items-baseline gap-4">
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--acid)]">02 / 04</p>
          <h2 id="skills-heading" className="font-[family-name:var(--font-display)] text-[2.4rem] tracking-[-0.03em] text-[var(--ink)]">
            Skills &amp; Stack
          </h2>
        </div>
      </div>

      {/* Skill bars grid */}
      <div className="px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-2" role="list" aria-label="Technical skills">
        {SKILLS.map((s, i) => <SkillRow key={s.name} {...s} index={i} />)}
      </div>

      {/* Tech grid */}
      <div className="border-t border-[var(--border)]">
        <div className="flex items-center justify-between px-6 md:px-12 py-3 border-b border-[var(--border)]">
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.18em] uppercase text-[var(--ink-3)]">Technologies</p>
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--ink-3)]">{TECH.length} tools</p>
        </div>
        <ul className="grid grid-cols-4 sm:grid-cols-7 border-l border-[var(--border)]" aria-label="Technologies and tools">
          {TECH.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group flex flex-col items-center justify-center gap-2 p-4 border-r border-b border-[var(--border)] hover:bg-[var(--acid-dim)] hover:border-[var(--acid)] transition-all duration-200 relative"
            >
              <img src={t.logo} alt={t.name} width={26} height={26} className="grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_6px_var(--acid)] transition-all" loading="lazy" />
              <span className="font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.06em] uppercase text-[var(--ink-3)] group-hover:text-[var(--acid)] text-center transition-colors">{t.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
