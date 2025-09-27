
"use client";
import { motion } from "framer-motion";

const projects = [
  // Enterprise @ Tokić
  {
    id: 1,
    title: "Travel Management Web App",
    hint: "Employee business travel",
    color: "from-blue-500",
  },
  {
    id: 2,
    title: "Ticketing System — ACC & Fleet",
    hint: "Fleet operations in Croatia",
    color: "from-green-500",
  },
  {
    id: 3,
    title: "Payroll Management System",
    hint: "HR & accounting automation",
    color: "from-amber-500",
  },
  {
    id: 4,
    title: "Employee Onboarding System",
    hint: "HR workflows & IAM",
    color: "from-rose-500",
  },
  {
    id: 5,
    title: "AI Document Routing",
    hint: "OCR + DMS integration",
    color: "from-cyan-500",
  },
  {
    id: 6,
    title: "RPA Scripts & Automations",
    hint: "Admin & finance tasks",
    color: "from-violet-500",
  },

  // Zuribyte
  {
    id: 7,
    title: "Kuanasi — Luxury Fashion",
    hint: "Brand & storefront (Belgium)",
    color: "from-purple-500",
  },
  {
    id: 8,
    title: "Dobroafrica — Fashion",
    hint: "Cross-border e-tail (Croatia)",
    color: "from-pink-500",
  },
  {
    id: 9,
    title: "Olailepomara",
    hint: "Tourism (Kenya)",
    color: "from-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20">
      <h3 className="text-3xl font-bold mb-12 text-center">Featured Works</h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={`/projects/${p.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl glass overflow-hidden relative group p-8 flex flex-col justify-end min-h-[280px]"
          >
            {/* Gradient background glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div
                className={`absolute -left-10 -top-10 w-72 h-72 rounded-full bg-gradient-to-tr ${p.color} to-transparent blur-2xl opacity-60`}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="text-sm text-gray-400 mb-2">{p.hint}</div>
              <div className="text-2xl font-bold">{p.title}</div>
              {/* <div className="mt-4 text-gray-300 group-hover:underline">
                View case study →
              </div> */}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
