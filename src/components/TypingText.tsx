import { useEffect, useState } from "react";

export function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-display text-center leading-tight">
      <span
        className="bg-clip-text text-transparent animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--primary), var(--lavender), var(--rose), var(--primary))",
          backgroundSize: "200% auto",
        }}
      >
        {displayed}
      </span>
      {!done && (
        <span
          className="inline-block w-[3px] h-[1em] ml-1 align-middle"
          style={{
            backgroundColor: "var(--primary)",
            animation: "blink-caret 0.75s step-end infinite",
          }}
        />
      )}
    </h1>
  );
}
