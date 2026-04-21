import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const emojis = ["💖", "💕", "💗", "💝", "✨", "🌸", "💜"];
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 14 + Math.random() * 20,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `float-up ${h.duration}s ease-in-out ${h.delay}s infinite`,
            bottom: "-40px",
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
