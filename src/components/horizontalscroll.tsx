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
      className="flex my-20 max-md:my-10 max-md:overflow-x-auto max-md:scrollbar-hidden lg:overflow-x-scroll"
    >
      {children}
    </motion.div>
  );
}
