import { motion, AnimatePresence } from "framer-motion";

const wishes = [
  { emoji: "💫", title: "A Year of Shine:", text: "May you shine brighter than ever and let your light reach everyone around you!" },
  { emoji: "💝", title: "Love & Kindness:", text: "May love and kindness come back to you tenfold, because you deserve it all!" },
  { emoji: "💖", title: "Dream Big:", text: "May this year bring you closer to all your goals and dreams – I believe in you!" },
  { emoji: "😊", title: "Endless Smiles:", text: "May every day bring you at least one moment that makes you smile from ear to ear!" },
  { emoji: "💪", title: "Inner Strength:", text: "May you find strength within yourself to overcome any challenge that comes your way!" },
  { emoji: "🌈", title: "Colorful Adventures:", text: "May your life be filled with colorful experiences and unforgettable adventures!" },
];

export function SurpriseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center px-4 py-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative rounded-3xl p-6 sm:p-10 max-w-lg w-full text-center my-auto"
            style={{
              background: "linear-gradient(180deg, #c084fc 0%, #d8b4fe 40%, #f0abfc 100%)",
              boxShadow: "0 0 60px rgba(192, 132, 252, 0.4)",
            }}
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <h2
              className="text-2xl sm:text-3xl mb-6"
              style={{ fontFamily: "'Pacifico', cursive", color: "#3b0764" }}
            >
              Birthday Wishes for You 🎁
            </h2>

            <div className="flex flex-col gap-3 mb-6">
              {wishes.map((w, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl px-4 py-3 text-left flex items-start gap-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.45)",
                    backdropFilter: "blur(4px)",
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.4 }}
                >
                  <span className="text-xl mt-0.5 shrink-0">{w.emoji}</span>
                  <p className="text-sm sm:text-base" style={{ color: "#3b0764" }}>
                    <strong>{w.title}</strong> {w.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-2xl mb-4">💖</div>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full text-white text-sm font-medium"
              style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
            >
              Thank you! 🥰
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
