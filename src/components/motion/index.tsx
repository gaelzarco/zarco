import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const SectionSeparator = ({
  children,
  className,
  animate,
}: {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}) => {
  return (
    <div className="w-full">
      {animate ? (
        <>
          <motion.div
            className={`mx-auto border-b border-white ${className}}`}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%", marginLeft: "11px" }}
            transition={{ duration: 0.5, delay: 2 }}
          ></motion.div>
          <SlideUpDiv
            className="bg-white px-2 w-max rounded-full text-black text-lg max-md:text-sm -translate-y-[1px]"
            delay={2.1}
          >
            {children}
          </SlideUpDiv>
        </>
      ) : (
        <>
          <div
            className={`mx-auto ml-4 border-b border-white ${className}}`}
          ></div>
          <div className="bg-white px-2 w-max rounded-full text-black text-lg max-md:text-sm -translate-y-[1px]">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export const SlideInDiv = ({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideUpDiv = ({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: -1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInP = ({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.p
      className={className}
      variants={{
        hidden: { opacity: 0, x: 5 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.p>
  );
};

export const SlideUpP = ({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.p
      className={className}
      variants={{
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.p>
  );
};
