import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Confetti } from "@/components/Confetti";
import { FloatingHearts } from "@/components/FloatingHearts";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/celebrate")({
  component: CelebratePage,
  head: () => ({
    meta: [
      { title: "Let's Celebrate! 🎂" },
      { name: "description", content: "Happy Birthday celebration with cake!" },
    ],
  }),
});

function CandleFlame({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute -top-6 left-1/2 -translate-x-1/2"
      animate={{
        scaleY: [1, 1.3, 0.9, 1.2, 1],
        scaleX: [1, 0.8, 1.1, 0.9, 1],
        opacity: [0.9, 1, 0.8, 1, 0.9],
      }}
      transition={{ duration: 1.5, repeat: Infinity, delay }}
    >
      <div
        className="w-3 h-5 rounded-full"
        style={{
          background: "radial-gradient(ellipse at bottom, #fbbf24, #f97316, #ef4444)",
          boxShadow: "0 0 12px #fbbf24, 0 0 24px #f97316",
        }}
      />
    </motion.div>
  );
}

function BirthdayCake() {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 12, duration: 1 }}
    >
      {/* Candles */}
      <div className="flex gap-8 mb-1 relative z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
            <CandleFlame delay={i * 0.2} />
            <div
              className="w-2 h-10 rounded-sm"
              style={{
                background: i % 2 === 0
                  ? "linear-gradient(180deg, #f472b6, #ec4899)"
                  : "linear-gradient(180deg, #a78bfa, #8b5cf6)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Top layer */}
      <motion.div
        className="w-64 sm:w-80 h-14 rounded-t-3xl relative z-0"
        style={{
          background: "linear-gradient(180deg, #fbcfe8, #f9a8d4)",
          boxShadow: "0 4px 20px rgba(244, 114, 182, 0.3)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Frosting drips */}
        <div className="absolute -bottom-3 left-0 right-0 flex justify-around px-4">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 rounded-b-full"
              style={{
                height: `${8 + Math.random() * 12}px`,
                background: "linear-gradient(180deg, #fbcfe8, #f472b6)",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Middle layer */}
      <motion.div
        className="w-72 sm:w-88 h-16"
        style={{
          background: "linear-gradient(180deg, #c084fc, #a855f7)",
          boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3)",
          width: "clamp(18rem, 22rem, 24rem)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      {/* Bottom layer */}
      <motion.div
        className="w-80 sm:w-96 h-20 rounded-b-2xl"
        style={{
          background: "linear-gradient(180deg, #e879f9, #d946ef)",
          boxShadow: "0 8px 30px rgba(217, 70, 239, 0.4)",
          width: "clamp(20rem, 26rem, 28rem)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {/* Decoration dots */}
        <div className="flex justify-center gap-4 pt-4">
          {["💖", "⭐", "💜", "✨", "💗", "⭐", "💜"].map((e, i) => (
            <motion.span
              key={i}
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              {e}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Plate */}
      <motion.div
        className="h-4 rounded-b-full mt-1"
        style={{
          width: "clamp(22rem, 28rem, 30rem)",
          background: "linear-gradient(180deg, #e2e8f0, #cbd5e1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      />
    </motion.div>
  );
}

function CelebratePage() {
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfettiActive(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #1e1b4b 0%, #0f0a2a 60%, #000 100%)",
      }}
    >
      <FloatingHearts />
      <Confetti active={confettiActive} />

      {/* Glow behind cake */}
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #c084fc, #ec4899, transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        <motion.h1
          className="text-3xl sm:text-5xl text-center"
          style={{ fontFamily: "'Pacifico', cursive", color: "#f9a8d4" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Happy Birthday! 🎉
        </motion.h1>

        <BirthdayCake />

        <motion.p
          className="text-lg sm:text-xl text-center max-w-md"
          style={{ color: "rgba(255,255,255,0.7)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Make a wish and blow out the candles! ✨
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-full text-white font-medium inline-block"
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              boxShadow: "0 8px 30px rgba(168, 85, 247, 0.4)",
            }}
          >
            ← Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
