import { useEffect, useState } from "react";

interface Spark {
  id: number;
  angle: number;
  distance: number;
  color: string;
  size: number;
}

export function FireworkBurst({ active }: { active: boolean }) {
  const [bursts, setBursts] = useState<{ x: number; y: number; sparks: Spark[] }[]>([]);

  useEffect(() => {
    if (!active) return;
    const colors = ["#ff69b4", "#dda0dd", "#ff1493", "#ffd700", "#ff6b9d", "#c084fc"];
    const newBursts = Array.from({ length: 5 }, () => ({
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 40,
      sparks: Array.from({ length: 12 }, (_, i) => ({
        id: i,
        angle: (360 / 12) * i,
        distance: 40 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 6,
      })),
    }));
    setBursts(newBursts);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bursts.map((burst, bi) =>
        burst.sparks.map((s) => (
          <div
            key={`${bi}-${s.id}`}
            className="absolute rounded-full"
            style={{
              left: `${burst.x}%`,
              top: `${burst.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              backgroundColor: s.color,
              animation: `firework-burst 1.5s ease-out ${bi * 0.3}s forwards`,
              transform: `translate(${Math.cos((s.angle * Math.PI) / 180) * s.distance}px, ${Math.sin((s.angle * Math.PI) / 180) * s.distance}px)`,
              boxShadow: `0 0 6px ${s.color}`,
            }}
          />
        ))
      )}
    </div>
  );
}
