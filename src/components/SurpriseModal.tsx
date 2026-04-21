import { motion, AnimatePresence } from "framer-motion";

export function SurpriseModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative rounded-3xl p-8 sm:p-10 max-w-md w-full text-center"
            style={{
              background: "linear-gradient(135deg, var(--card), var(--lavender-soft), var(--rose-soft))",
              boxShadow: "0 0 60px color-mix(in oklch, var(--glow) 40%, transparent)",
            }}
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="text-5xl mb-4">🎂🎉</div>
            <h2 className="text-2xl sm:text-3xl font-display text-primary mb-4">
              You're So Special! 💖
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On this beautiful day, I just want you to know that you make the world
              a better place simply by being in it. Your smile lights up every room,
              and your heart is pure gold. Here's to another amazing year of YOU! 🌟
            </p>
            <p className="text-lg">🎁🎈🎊🥳🎁</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-full text-primary-foreground surprise-btn text-sm font-medium"
            >
              Thank you! 🥰
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
