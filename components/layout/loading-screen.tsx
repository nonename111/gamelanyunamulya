"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/shared/brand-logo";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5 text-center">
            <BrandLogo className="mx-auto w-28 sm:w-36" priority />
            <div className="space-y-2">
              <p className="font-serif text-2xl">Yuna Mulya Gamelan</p>
              <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary via-primary to-accent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
