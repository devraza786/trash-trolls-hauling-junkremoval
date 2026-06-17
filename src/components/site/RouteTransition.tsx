import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export function RouteTransition({ children, pathname }: { children: ReactNode; pathname: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
