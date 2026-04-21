import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";
import { TypingText } from "@/components/TypingText";
import { Confetti } from "@/components/Confetti";
import { FireworkBurst } from "@/components/FireworkBurst";
import { SurpriseModal } from "@/components/SurpriseModal";
import { CursorSparkle } from "@/components/CursorSparkle";
import photoFrame from "@/assets/photo-frame.png";
import birthdayBg from "@/assets/birthday-bg.png";

export const Route = createFileRoute("/")({
  component: BirthdayPage,
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Best Friend 💖" },
      { name: "description", content: "A special birthday wish for the most amazing best friend in the world." },
    ],
  }),
});

function GlowingStars() {
  const [stars, setStars] = useState<{ id: number; left: number; top: number; delay: number; size: number }[]>([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        size: 8 + Math.random() * 16,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animation: `sparkle ${3 + Math.random() * 3}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

function MusicControl() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/10/25/audio_33da52f4b9.mp3?filename=happy-birthday-piano-178498.mp3"
      />
      <button
        onClick={toggle}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl surprise-btn text-primary-foreground"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  );
}

function BirthdayPage() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [fireworkActive, setFireworkActive] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
    setConfettiActive(true);
    setFireworkActive(true);
    setTimeout(() => {
      setConfettiActive(false);
      setFireworkActive(false);
    }, 4000);
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${birthdayBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <CursorSparkle />
      <FloatingHearts />
      <GlowingStars />
      <Confetti active={confettiActive} />
      <FireworkBurst active={fireworkActive} />
      <SurpriseModal open={showSurprise} onClose={() => setShowSurprise(false)} />
      <MusicControl />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {/* Hero typing text */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypingText text="Happy Birthday, My Best Friend 💖" />
        </motion.div>

        {/* Photo frame section */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <div className="photo-frame rounded-3xl p-2 animate-glow-pulse">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                {/* Replace this src with her actual photo */}
                <img
                  src={photoFrame}
                  alt="Best friend"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="absolute -top-4 -right-4 text-3xl animate-float-gentle">🌸</span>
            <span className="absolute -bottom-4 -left-4 text-3xl animate-float-gentle" style={{ animationDelay: "1s" }}>💖</span>
          </div>
        </motion.div>

        {/* Heartfelt message */}
        <motion.div
          className="rounded-3xl p-8 sm:p-10 mb-12 text-center"
          style={{
            background: "linear-gradient(135deg, color-mix(in oklch, var(--card) 90%, transparent), color-mix(in oklch, var(--lavender-soft) 80%, transparent))",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 40px color-mix(in oklch, var(--glow-soft) 20%, transparent)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-display text-primary mb-6">
            To My Dearest Friend 🌹
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Every moment with you is a blessing I never take for granted. You've been
            my shoulder to cry on, my partner in laughter, and the most beautiful soul
            I've ever known. Your kindness, your strength, and your warm heart inspire
            me every single day. Today, the world celebrates the day it was gifted with
            someone as extraordinary as you. I hope this year brings you all the love,
            happiness, and dreams your heart can hold. You deserve every beautiful
            thing life has to offer. 💕
          </p>
        </motion.div>

        {/* Surprise button */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <button
            onClick={handleSurprise}
            className="surprise-btn text-primary-foreground px-8 py-4 rounded-full text-lg sm:text-xl font-display tracking-wide"
          >
            Click for a Surprise 🎁
          </button>
        </motion.div>

        {/* Cake animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="text-6xl sm:text-8xl animate-float-gentle mb-4">🎂</div>
          <p className="text-muted-foreground text-sm">Make a wish! ✨</p>
        </motion.div>

        {/* Final message */}
        <motion.div
          className="text-center pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <p
            className="text-2xl sm:text-3xl font-display bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage: "linear-gradient(90deg, var(--primary), var(--lavender), var(--rose), var(--primary))",
              backgroundSize: "200% auto",
            }}
          >
            Forever grateful to have you in my life 💕
          </p>
          <div className="mt-6 flex justify-center gap-2 text-2xl">
            {["💖", "🌸", "✨", "💜", "🌟", "💕", "🌺"].map((e, i) => (
              <span key={i} className="animate-float-gentle" style={{ animationDelay: `${i * 0.3}s` }}>
                {e}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
