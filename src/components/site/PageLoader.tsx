import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduced ? 400 : 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.img
            src={SITE.logo}
            alt="Trash Trolls"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-40 w-auto md:h-56"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 h-1 bg-yellow"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
