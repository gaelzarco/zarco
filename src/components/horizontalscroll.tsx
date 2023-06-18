import { type ReactNode, type Ref, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HorizontalScroll({
  children,
  delay,
}: {
  children: ReactNode[] | ReactNode;
  delay: number;
}) {
  const projectDivRef = useRef<HTMLDivElement>();
  const [allowScroll, setAllowScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtLeftEdge, setIsAtLeftEdge] = useState(true);
  const [isAtRightEdge, setIsAtRightEdge] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY));
    const scrollAmount = delta * 230;
    const projectDiv = projectDivRef.current;
    if (projectDiv) {
      const maxScrollLeft = projectDiv.scrollWidth - projectDiv.clientWidth;
      const nextScrollLeft = projectDiv.scrollLeft + scrollAmount;
      if (nextScrollLeft < 0) {
        projectDiv.scrollLeft = 0;
        setIsAtLeftEdge(true);
        setIsAtRightEdge(false);
        setAllowScroll(false);
      } else if (nextScrollLeft > maxScrollLeft) {
        projectDiv.scrollLeft = maxScrollLeft;
        setIsAtLeftEdge(false);
        setIsAtRightEdge(true);
        setAllowScroll(false);
      } else {
        projectDiv.scrollLeft = nextScrollLeft;
        setIsAtLeftEdge(false);
        setIsAtRightEdge(false);
        setAllowScroll(true);
      }
    }
    e.preventDefault();
  };

  const handleScrollLock = () => {
    setScrollPosition(window.scrollY);
    const projectDiv = projectDivRef.current;
    if (projectDiv) {
      const maxScrollLeft = projectDiv.scrollWidth - projectDiv.clientWidth;
      if (projectDiv.scrollLeft <= 0 && isAtLeftEdge) {
        setAllowScroll(true);
        setIsAtLeftEdge(false);
        setIsAtRightEdge(false);
      } else if (projectDiv.scrollLeft >= maxScrollLeft && isAtRightEdge) {
        setAllowScroll(true);
        setIsAtLeftEdge(false);
        setIsAtRightEdge(false);
      }
    }
  };

  useEffect(() => {
    const projectDiv = projectDivRef.current;
    if (allowScroll && projectDiv) {
      projectDiv.addEventListener("wheel", handleScroll as any);
      projectDiv.style.overflow = "hidden";
      window.addEventListener("scroll", handleScrollLock);
    }
    return () => {
      if (projectDiv) {
        projectDiv.removeEventListener("wheel", handleScroll as any);
        projectDiv.style.overflow = "auto";
        projectDiv.style.cursor = "auto";
        window.removeEventListener("scroll", handleScrollLock);
      }
    };
  }, [allowScroll]);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

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
        className="horizontalscroll flex overflow-x-scroll my-20 max-md:my-10 scroll-smooth scrollbar-none"
        ref={projectDivRef as Ref<HTMLDivElement>}
        onMouseEnter={() => setAllowScroll(true)}
        onMouseLeave={() => setAllowScroll(false)}
        onWheel={handleScroll as any}
      >
        {children}
      </div>
    </motion.div>
  );
}
