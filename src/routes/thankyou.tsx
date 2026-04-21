import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/thankyou")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Thank You 💖" },
      { name: "description", content: "Thank you for being the best friend ever!" },
    ],
  }),
});

function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ background: "linear-gradient(180deg, #e9b0ff 0%, #d8a0f5 50%, #c990ee 100%)" }}
    >
      <FloatingHearts />

      <motion.div
        className="flex flex-col items-center gap-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="text-7xl sm:text-9xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          💝
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/"
            className="px-10 py-4 rounded-full text-white text-lg sm:text-xl font-medium inline-block"
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              boxShadow: "0 8px 30px rgba(168, 85, 247, 0.4)",
            }}
          >
            Thank you! 🥰
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
