"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)]" role="contentinfo">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-5 gap-4">
        <p className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.1em] uppercase text-[var(--ink-3)]">
          &copy; {new Date().getFullYear()} Kelvin Maina. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.12em] uppercase text-[var(--ink-3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--acid)] shadow-[0_0_5px_var(--acid)] animate-pulse" />
            Open to work
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.12em] uppercase text-[var(--ink-3)] hidden sm:block">
            Built with Next.js &amp; Tailwind
          </span>
          <Link
            href="#"
            className="font-[family-name:var(--font-mono)] text-[0.58rem] tracking-[0.12em] uppercase text-[var(--ink-3)] hover:text-[var(--acid)] transition-colors"
            aria-label="Back to top"
          >
            ↑ Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
