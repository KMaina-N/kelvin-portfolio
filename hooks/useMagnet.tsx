import { useEffect } from "react";

export default function useMagnet(ref: React.RefObject<HTMLElement> ) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      const force = Math.max(0, 1 - dist / 300);
      (el.style as any).transform = `translate3d(${dx * 0.08 * force}px, ${dy * 0.06 * force}px, 0)`;
    }
    function reset() {
      (el.style as any).transform = "";
    }
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [ref]);
}
