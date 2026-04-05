"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const TAGS = [
  "Software Engineering",
  "Business Analysis",
  "RPA",
  "Process Automation",
  "CI/CD",
  "React & TypeScript",
  "Project Management",
  "Co-Founding",
];

const TIMELINE = [
  {
    year: "Dec 2024 – Now",
    role: "Software Engineer III",
    org: "Tokić d.o.o, Croatia",
    desc: "Designing, developing, and deploying scalable software solutions using Python, JavaScript, TypeScript, and React while strengthening CI/CD, delivery workflows, and cross-functional execution.",
  },
  {
    year: "Jul 2024 – Nov 2024",
    role: "RPA Developer",
    org: "Tokić d.o.o, Croatia",
    desc: "Built and maintained automation workflows for finance, administrative, and operational processes, reducing manual effort, improving accuracy, and increasing efficiency across teams.",
  },
  {
    year: "2022 – Now",
    role: "Co-Founder",
    org: "Zuribyte",
    desc: "Co-leading product and delivery strategy while building digital platforms and business solutions with a focus on software, automation, and data-driven decision-making.",
  },
  {
    year: "Feb 2022 – Jun 2024",
    role: "Application Solutions Developer & Junior Project Manager",
    org: "Tokić d.o.o, Croatia",
    desc: "Built internal software solutions, improved system performance, led business analysis and project coordination, and delivered RPA initiatives that cut costs, reduced downtime, and accelerated finance operations.",
  },
  {
    year: "Jun 2021 – Aug 2021",
    role: "ERP Consultant Intern",
    org: "Bugatti Rimac, Croatia",
    desc: "Supported ERP migration from Odoo to Infor, contributed to process optimization, data migration, user training, reporting, and change management during the Bugatti-Rimac merger.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative border-b border-[var(--border)]"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Sticky sidebar */}
        <div className="px-6 md:px-12 py-16 lg:py-24 border-b border-[var(--border)] lg:border-b-0 lg:border-r lg:sticky lg:top-16 lg:self-start">
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--acid)] mb-3">
            01 / 04
          </p>

          <h2
            id="about-heading"
            className="font-[family-name:var(--font-display)] text-[2.6rem] leading-[1.05] tracking-[-0.03em] text-[var(--ink)] mb-8"
          >
            About
            <br />
            Me
          </h2>

          <div className="space-y-2">
            {TAGS.map((tag) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-block mr-2 mb-2 cursor-default border border-[var(--border)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.1em] uppercase text-[var(--ink-3)] transition-all hover:border-[var(--acid)] hover:bg-[var(--acid-dim)] hover:text-[var(--acid)]"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 lg:pl-14 py-16 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-display)] text-[1.6rem] leading-[1.4] tracking-[-0.02em] text-[var(--ink)] mb-8 max-w-[52ch]"
          >
            Software engineer, automation builder, and co-founder focused on
            turning complex business problems into scalable digital systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 mb-16"
          >
            <p className="text-[0.95rem] leading-[1.85] text-[var(--ink-2)] max-w-[60ch]">
              I currently work at{" "}
              <strong className="text-[var(--ink)] font-bold">Tokić</strong>,
              where I design and deploy software solutions across internal
              operations using{" "}
              <strong className="text-[var(--ink)] font-bold">
                Python, JavaScript, TypeScript, and React
              </strong>
              . My work spans software engineering, automation, CI/CD
              improvement, and cross-functional delivery.
            </p>

            <p className="text-[0.95rem] leading-[1.85] text-[var(--ink-2)] max-w-[60ch]">
              Across my roles, I have built RPA and software systems that
              reduced operational time by{" "}
              <strong className="text-[var(--acid)] font-bold">40%</strong>,
              decreased downtime by{" "}
              <strong className="text-[var(--acid)] font-bold">30%</strong>,
              lowered operational costs by{" "}
              <strong className="text-[var(--acid)] font-bold">40%</strong>,
              and shortened finance workflows from{" "}
              <strong className="text-[var(--ink)] font-bold">
                5 working days to 1 day
              </strong>
              .
            </p>

            <p className="text-[0.95rem] leading-[1.85] text-[var(--ink-2)] max-w-[60ch]">
              As co-founder of{" "}
              <strong className="text-[var(--ink)] font-bold">Zuribyte</strong>,
              I combine product thinking, business strategy, and engineering to
              build practical digital solutions that help organisations grow
              through automation, analytics, and better systems design.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)] overflow-hidden">
              <motion.div
                style={{ height: lineH }}
                className="w-full bg-[var(--acid)] origin-top"
              />
            </div>

            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[1.65rem] top-1 w-2 h-2 rounded-full border border-[var(--acid)] bg-[var(--bg)] shadow-[0_0_8px_var(--glow)]" />

                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.14em] uppercase text-[var(--acid)] mb-1">
                    {t.year}
                  </p>

                  <p className="text-[0.95rem] font-bold text-[var(--ink)] mb-0.5">
                    {t.role}
                  </p>

                  <p className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.08em] uppercase text-[var(--ink-3)] mb-1.5">
                    {t.org}
                  </p>

                  <p className="text-[0.88rem] text-[var(--ink-2)] leading-relaxed max-w-[50ch]">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}