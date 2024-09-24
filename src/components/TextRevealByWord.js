import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 40%", "end 100%"], // Adjusted to reveal text earlier
  });

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div ref={targetRef} className={cn("relative z-0 min-h-[80vh] mb-0", className)}>
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="flex flex-wrap justify-center w-3/4 h-auto p-5 text-xl font-bold tracking-wider text-black/10 dark:text-white/10 md:p-6 md:text-2xl lg:p-8 lg:text-3xl xl:text-4xl leading-relaxed" style={{ wordSpacing: '0.25em' }}> {/* Reduced word spacing */}
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 0.005; // Reduced range for quicker reveal
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.8, 1]); // Adjusted for subtler scaling
  const y = useTransform(progress, range, [20, 0]); // Reduced vertical movement

  return (
    <motion.span
      className="relative mx-1 my-1 inline-block" // Reduced horizontal spacing
      style={{ opacity, scale, y }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="absolute inset-0 opacity-20 blur-sm">{children}</span>
      <motion.span
        className="text-black dark:text-white relative z-10"
        style={{
          textShadow: '0 0 4px rgba(255,255,255,0.3)', // Reduced shadow intensity
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default TextRevealByWord;



// class="flex flex-wrap justify-center w-full min-h-screen p-5 text-xl font-bold tracking-wider text-black/10 dark:text-white/10 md:p-6 md:text-2xl lg:p-8 lg:text-3xl xl:text-4xl leading-loose"
// class="flex flex-wrap justify-center w-full p-5 text-xl font-bold tracking-wider text-black/10 dark:text-white/10 md:p-6 md:text-2xl lg:p-8 lg:text-3xl xl:text-4xl leading-relaxed"
