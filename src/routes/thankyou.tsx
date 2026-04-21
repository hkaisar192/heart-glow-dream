import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/thankyou")({
  component: MemoriesPage,
  head: () => ({
    meta: [
      { title: "Our Beautiful Memories 📷" },
      { name: "description", content: "A collection of our beautiful memories together." },
    ],
  }),
});

const memories = [
  { label: "Memory 1", placeholder: "Replace with your photo" },
  { label: "Memory 2", placeholder: "Replace with your photo" },
  { label: "Memory 3", placeholder: "Replace with your photo" },
  { label: "Memory 4", placeholder: "Replace with your photo" },
  { label: "Memory 5", placeholder: "Replace with your photo" },
  { label: "Memory 6", placeholder: "Replace with your photo" },
];

function MemoriesPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(180deg, #c084fc 0%, #d8a0f5 30%, #c78bf0 70%, #b06de4 100%)",
      }}
    >
      <FloatingHearts />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Title */}
        <motion.h1
          className="text-center text-3xl sm:text-4xl mb-10"
          style={{ fontFamily: "'Pacifico', cursive", color: "#3b0764" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Beautiful Memories 📷
        </motion.h1>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden flex items-center justify-center aspect-[4/3]"
              style={{
                background: "rgba(160, 100, 200, 0.45)",
                border: "2px solid rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(4px)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)" }}
            >
              {/* Replace the placeholder below with: <img src={yourPhoto} alt="..." className="w-full h-full object-cover" /> */}
              <div className="flex flex-col items-center gap-2 text-white/60">
                <span className="text-4xl">🖼️</span>
                <span className="text-sm font-medium">{m.label}</span>
                <span className="text-xs">{m.placeholder}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/celebrate"
            className="px-8 py-3 rounded-full text-white text-lg font-medium inline-block"
            style={{
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              boxShadow: "0 8px 30px rgba(168, 85, 247, 0.4)",
            }}
          >
            Let's Celebrate! 🎈
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
