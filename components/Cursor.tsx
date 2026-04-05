"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const txt = document.getElementById("cursor-text");
    if (!dot || !ring) return;

    let rx = 0, ry = 0, dx = 0, dy = 0, raf: number;

    const onMove = (e: MouseEvent) => { dx = e.clientX; dy = e.clientY; };

    const tick = () => {
      rx += (dx - rx) * 0.12;
      ry += (dy - ry) * 0.12;
      dot.style.left = dx + "px";  dot.style.top = dy + "px";
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      if (txt) { txt.style.left = rx + "px"; txt.style.top = ry + "px"; }
      raf = requestAnimationFrame(tick);
    };

    const expand = (label?: string) => {
      ring.style.width = "56px"; ring.style.height = "56px";
      ring.style.borderColor = "var(--acid)"; ring.style.opacity = "1";
      dot.style.opacity = "0";
      if (txt && label) { txt.textContent = label; txt.style.opacity = "1"; }
    };
    const contract = () => {
      ring.style.width = "28px"; ring.style.height = "28px";
      ring.style.borderColor = "var(--ink-2)"; ring.style.opacity = "0.5";
      dot.style.opacity = "1";
      if (txt) { txt.style.opacity = "0"; }
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const observe = () => {
      document.querySelectorAll("a[data-cursor], button[data-cursor]").forEach(el => {
        const label = (el as HTMLElement).dataset.cursor;
        el.addEventListener("mouseenter", () => expand(label));
        el.addEventListener("mouseleave", contract);
      });
      document.querySelectorAll("a:not([data-cursor]), button:not([data-cursor])").forEach(el => {
        el.addEventListener("mouseenter", () => expand());
        el.addEventListener("mouseleave", contract);
      });
    };
    observe();

    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
      <div id="cursor-text" aria-hidden="true" />
    </>
  );
}
