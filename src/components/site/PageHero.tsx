import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="diagonal-stripe absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4">
        {kicker && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-accent text-yellow"
          >
            {kicker}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl"
        >
          {title}
        </motion.h1>
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-2xl text-white/80"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
