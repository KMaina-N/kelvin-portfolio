"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Project = {
  id: number; title: string; hint: string;
  category: string; org: string; year: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  { id:1, title:"Travel Management Web App", hint:"Full-stack system for employee business travel — requests, approvals, expense tracking and reporting.", category:"Enterprise", org:"Tokić", year:"2024", tags:["Django","React","PostgreSQL"] },
  { id:2, title:"Ticketing System — ACC & Fleet", hint:"Issue tracking and fleet operations management across Croatian operations with real-time dashboards.", category:"Enterprise", org:"Tokić", year:"2023", tags:["Python","Next.js","Redis"] },
  { id:3, title:"Payroll Management System", hint:"Automated HR payroll with accounting integrations, multi-currency support, and compliance reporting.", category:"HR & Accounting", org:"Tokić", year:"2023", tags:["Django","PostgreSQL","Azure"] },
  { id:4, title:"Employee Onboarding System", hint:"End-to-end HR workflows with identity & access management provisioning and audit trails.", category:"HR & IAM", org:"Tokić", year:"2022", tags:["Python","React","Docker"] },
  { id:5, title:"AI Document Routing", hint:"OCR pipeline integrated with DMS for intelligent classification, routing, and archival of scanned documents.", category:"AI / Automation", org:"Tokić", year:"2024", tags:["Python","OCR","Azure AI"] },
  { id:6, title:"RPA Scripts & Automations", hint:"Robotic process automation cutting 60%+ of manual admin and finance tasks across the organisation.", category:"RPA", org:"Tokić", year:"2023", tags:["Python","Jenkins","Linux"] },
  { id:7, title:"Kuanasi — Luxury Fashion", hint:"Brand identity and e-commerce storefront for a luxury fashion label in Belgium, with custom CMS.", category:"E-Commerce", org:"Zuribyte", year:"2023", tags:["Next.js","TypeScript","Stripe"] },
  { id:8, title:"Dobroafrica — Fashion", hint:"Cross-border fashion e-tail platform serving the Croatian market with multi-lingual support.", category:"E-Commerce", org:"Zuribyte", year:"2022", tags:["Next.js","Django","PostgreSQL"] },
  { id:9, title:"Olailepomara", hint:"Tourism platform connecting travellers with curated experiences across Kenya.", category:"Tourism", org:"Zuribyte", year:"2022", tags:["React","Django","Maps API"] },
];

const FILTERS = ["All", "Enterprise", "HR & Accounting", "HR & IAM", "AI / Automation", "RPA", "E-Commerce", "Tourism"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="border-b border-[var(--border)]" aria-labelledby="projects-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 px-6 md:px-12 py-8 border-b border-[var(--border)]">
        <div className="flex items-baseline gap-4">
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--acid)]">03 / 04</p>
          <h2 id="projects-heading" className="font-[family-name:var(--font-display)] text-[2.4rem] tracking-[-0.03em] text-[var(--ink)]">
            Featured Works
          </h2>
        </div>
        <span className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.14em] uppercase text-[var(--ink-3)]">
          {filtered.length} / {PROJECTS.length}
        </span>
      </div>

      {/* Filter bar */}
      <div className="px-6 md:px-12 py-4 border-b border-[var(--border)] flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-cursor={f === filter ? "" : "filter"}
            className={`font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.12em] uppercase px-3 py-1.5 border transition-all duration-200 ${
              filter === f
                ? "border-[var(--acid)] bg-[var(--acid-dim)] text-[var(--acid)] shadow-[0_0_12px_var(--acid-dim)]"
                : "border-[var(--border)] text-[var(--ink-3)] hover:border-[var(--border-2)] hover:text-[var(--ink-2)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project list */}
      <ul aria-label="Projects">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_10rem_10rem] items-start md:items-center gap-4 md:gap-6 px-6 md:px-12 py-5 border-b border-[var(--border)] relative overflow-hidden transition-colors duration-200 ${
                  hovered === p.id ? "bg-[var(--surface-2)]" : ""
                }`}
              >
                {/* Acid accent on hover */}
                <motion.span
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--acid)]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hovered === p.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0 }}
                  aria-hidden="true"
                />

                {/* Glow blob on hover */}
                {hovered === p.id && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none"
                    style={{ background: "linear-gradient(to left, var(--acid-dim), transparent)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Index */}
                <span className="font-[family-name:var(--font-mono)] text-[0.62rem] text-[var(--ink-3)] pt-1">
                  {String(p.id).padStart(2,"0")}
                </span>

                {/* Title + details */}
                <div className="min-w-0">
                  <p className={`font-[family-name:var(--font-display)] text-[1.15rem] leading-[1.25] tracking-[-0.02em] transition-colors duration-200 ${hovered === p.id ? "text-[var(--acid)]" : "text-[var(--ink)]"}`}>
                    {p.title}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.06em] text-[var(--ink-3)] mt-1 leading-relaxed hidden md:block max-w-[52ch]">
                    {p.hint}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.08em] uppercase px-2 py-0.5 bg-[var(--surface)] text-[var(--ink-3)] border border-[var(--border)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Org */}
                <span className="hidden md:block font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.1em] uppercase text-[var(--ink-3)]">
                  {p.org}
                </span>

                {/* Category */}
                <span className={`hidden md:block font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.1em] uppercase px-2 py-1 border text-right self-start transition-all duration-200 ${
                  hovered === p.id ? "border-[var(--acid)] text-[var(--acid)]" : "border-[var(--border)] text-[var(--ink-3)]"
                }`}>
                  {p.category}
                </span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
