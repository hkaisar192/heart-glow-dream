import { useEffect, useRef } from "react";

export function CursorSparkle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let throttle = 0;
    const handleMove = (e: MouseEvent) => {
      if (Date.now() - throttle < 50) return;
      throttle = Date.now();

      const sparkle = document.createElement("div");
      const emojis = ["✨", "💖", "⭐", "🌟"];
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: ${10 + Math.random() * 12}px;
        animation: cursor-sparkle 0.6s ease-out forwards;
        z-index: 9999;
      `;
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
}
