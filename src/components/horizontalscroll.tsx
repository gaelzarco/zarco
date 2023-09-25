import { type ReactNode } from "react";
import { motion } from "framer-motion";

export default function HorizontalScroll({
  children,
  delay,
}: {
  children: ReactNode[] | ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
    >
      <div
        className="horizontalscroll flex overflow-x-auto my-20 max-md:my-10 scrollbar-none"
        onWheel={(e) => {
          const strength = Math.abs(e.deltaY);
          const projectDiv = e.currentTarget;

          projectDiv.scrollTo({
            left: projectDiv.scrollLeft + e.deltaY,
            // large scrolls with smooth animation behavior will lag, so switch to auto
            behavior: strength > 70 ? "auto" : "smooth",
          });
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
