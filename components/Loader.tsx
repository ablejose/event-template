"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/config/site";

/**
 * Intro loading screen: a black overlay with the brand name in gold and the
 * descriptor in white — both read from the active event config — fading out to
 * reveal the site. Locks scroll while visible; honours prefers-reduced-motion.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), reduce ? 500 : 2000);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center px-6 text-center"
          style={{ background: "#000000" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <motion.span
            className="display-xl"
            style={{ color: "var(--saffron)", fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {site.name}
          </motion.span>
          <motion.span
            className="display mt-2"
            style={{ color: "#F7F1E7", fontSize: "clamp(0.95rem, 2.4vw, 1.7rem)", letterSpacing: "0.06em" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          >
            {site.descriptor}
          </motion.span>
          <motion.span
            className="mt-6 block h-px"
            style={{ background: "var(--saffron)" }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 120, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
