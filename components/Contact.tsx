"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const CONTACTS = [
  { label:"Email", href:"mailto:kelvinmaina547@gmail.com", display:"kelvinmaina547@gmail.com", Icon:FaEnvelope, ariaLabel:"Send Kelvin an email" },
  { label:"LinkedIn", href:"https://www.linkedin.com/in/kelvin-maina-ke-hr/", display:"kelvin-maina-ke-hr", Icon:FaLinkedin, ariaLabel:"Kelvin Maina on LinkedIn" },
  { label:"GitHub", href:"https://github.com/KMaina-N", display:"KMaina-N", Icon:FaGithub, ariaLabel:"Kelvin Maina on GitHub" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kelvinmaina547@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2" aria-labelledby="contact-heading">
      {/* Left */}
      <div className="px-6 md:px-12 py-20 border-b border-[var(--border)] lg:border-b-0 lg:border-r flex flex-col justify-between relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg), transparent)" }} aria-hidden="true" />

        <p className="relative font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--acid)]">04 / 04</p>

        <div className="relative">
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.0] tracking-[-0.04em] text-[var(--ink)] mb-6"
          >
            Let&rsquo;s build
            <br />
            something
            <br />
            <em className="text-[var(--acid)]">together.</em>
          </motion.h2>
          <p className="text-[var(--ink-2)] text-[0.9rem] leading-relaxed max-w-[34ch]">
            Available for freelance projects and full-time roles. I respond quickly.
          </p>
        </div>

        {/* Copy email button */}
        <motion.button
          onClick={copyEmail}
          data-cursor="copy"
          whileTap={{ scale: 0.97 }}
          className="relative mt-8 group flex items-center justify-between px-5 py-4 border border-[var(--border)] hover:border-[var(--acid)] hover:bg-[var(--acid-dim)] transition-all duration-200 w-full max-w-xs"
        >
          <span className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.1em] text-[var(--ink-2)] group-hover:text-[var(--acid)] transition-colors">
            kelvinmaina547@gmail.com
          </span>
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.12em] uppercase text-[var(--ink-3)] ml-3"
          >
            {copied ? "✓ Copied!" : "Copy"}
          </motion.span>
        </motion.button>
      </div>

      {/* Right */}
      <div className="px-6 md:px-12 py-20 flex flex-col justify-center">
        <ul className="space-y-0" aria-label="Contact links">
          {CONTACTS.map((c, i) => (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={c.ariaLabel}
                data-cursor="open"
                className="group flex items-center justify-between py-6 border-b border-[var(--border)] hover:border-[var(--acid)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[var(--border)] group-hover:border-[var(--acid)] group-hover:bg-[var(--acid-dim)] flex items-center justify-center transition-all">
                    <c.Icon className="text-[var(--ink-3)] group-hover:text-[var(--acid)] transition-colors" size={14} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.14em] uppercase text-[var(--ink-3)] group-hover:text-[var(--acid)] transition-colors mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-[0.88rem] font-bold text-[var(--ink)] tracking-[-0.01em]">
                      {c.display}
                    </p>
                  </div>
                </div>
                <span className="text-base text-[var(--ink-3)] group-hover:text-[var(--acid)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mt-10 px-4 py-3 border border-[var(--border)] w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--acid)] shadow-[0_0_6px_var(--acid)] animate-pulse" aria-hidden="true" />
          <span className="font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.14em] uppercase text-[var(--ink-2)]">
            Open to opportunities
          </span>
        </motion.div>
      </div>
    </section>
  );
}
