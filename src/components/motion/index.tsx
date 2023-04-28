import { motion } from "framer-motion"
import { type ReactNode, type Ref, useEffect, useRef, useState } from "react"
import { ArrowUpIcon } from "@radix-ui/react-icons"

export function HorizontalScrollDiv({ children } : { children: ReactNode[] }) {
    const projectDivRef = useRef<HTMLDivElement>()
    const [allowScroll, setAllowScroll] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isAtLeftEdge, setIsAtLeftEdge] = useState(true)
    const [isAtRightEdge, setIsAtRightEdge] = useState(false)
  
    const handleScroll = (e: WheelEvent) => {
      const delta = Math.max(-1, Math.min(1, e.deltaY))
      const scrollAmount = delta * 200
      const projectDiv = projectDivRef.current
      if (projectDiv) {
        const maxScrollLeft = projectDiv.scrollWidth - projectDiv.clientWidth
        const nextScrollLeft = projectDiv.scrollLeft + scrollAmount
        if (nextScrollLeft < 0) {
          projectDiv.scrollLeft = 0
          setIsAtLeftEdge(true)
          setIsAtRightEdge(false)
          setAllowScroll(false)
        } else if (nextScrollLeft > maxScrollLeft) {
          projectDiv.scrollLeft = maxScrollLeft
          setIsAtLeftEdge(false)
          setIsAtRightEdge(true)
          setAllowScroll(false)
        } else {
          projectDiv.scrollLeft = nextScrollLeft
          setIsAtLeftEdge(false)
          setIsAtRightEdge(false)
          setAllowScroll(true)
        }
      }
      e.preventDefault()
    }
  
    const handleScrollLock = () => {
      setScrollPosition(window.scrollY)
      const projectDiv = projectDivRef.current
      if (projectDiv) {
        const maxScrollLeft = projectDiv.scrollWidth - projectDiv.clientWidth
        if (projectDiv.scrollLeft <= 0 && isAtLeftEdge) {
          setAllowScroll(true)
          setIsAtLeftEdge(false)
          setIsAtRightEdge(false)
        } else if (projectDiv.scrollLeft >= maxScrollLeft && isAtRightEdge) {
          setAllowScroll(true)
          setIsAtLeftEdge(false)
          setIsAtRightEdge(false)
        }
      }
    }
  
  useEffect(() => {
    const projectDiv = projectDivRef.current
    if (allowScroll && projectDiv) {
      projectDiv.addEventListener("wheel", handleScroll as any)
      projectDiv.style.overflow = "hidden"
      window.addEventListener("scroll", handleScrollLock)
    }
    return () => {
      if (projectDiv) {
        projectDiv.removeEventListener("wheel", handleScroll as any)
        projectDiv.style.overflow = "auto"
        projectDiv.style.cursor = "auto"
        window.removeEventListener("scroll", handleScrollLock)
      }
    }
  }, [allowScroll])
  
  useEffect(() => {
    window.scrollTo(0, scrollPosition)
  }, [scrollPosition])
  
  
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, delay: 2.45 }}
      >
        <div className="flex overflow-x-scroll my-20 max-md:my-10 scroll-smooth"
          ref={projectDivRef as Ref<HTMLDivElement>}
          onMouseEnter={() => setAllowScroll(true)}
          onMouseLeave={() => setAllowScroll(false)}
          onWheel={handleScroll as any}
        >
          {children}
        </div>
      </motion.div>
    )
  }

export const SlideInDiv = ({ children, delay, className } : { children: ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, delay: delay }}
        >
        {children}
        </motion.div>
    )
}
  
export const SlideUpDiv = ({ children, delay, className } : { children: ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: -1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, delay: delay }}
        >
        {children}
        </motion.div>
    )
}

export const SectionSeparator= ({ children } : { children: ReactNode }) => {
    return (
        <div className='w-full'>
        <motion.div 
          className='mx-auto border-b border-white mt-16 max-sm:mt-12'
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "97%", marginInline: "auto" }}
          transition={{ duration: 0.75, delay: 2 }}
        ></motion.div>
          <SlideUpDiv className='bg-white px-2 w-max rounded-full text-black text-lg max-md:text-sm' delay={2.10}>
            {children}
          </SlideUpDiv>
      </div>
    )
}

export const Footer = () => {
    return (
        <div className='bottom-0 inline-flex items-center justify-between w-full'>
          <SlideInDiv delay={1.5} className='flex items-center text-2xl max-sm:text-xl'>
            <p>
              © 2023
            </p>
          </SlideInDiv>

          <SlideUpDiv delay={1.5} className='inline-flex items-center justify-end text-2xl max-sm:text-xl hover:cursor-pointer'>
            Back to top&nbsp;
            <ArrowUpIcon />
          </SlideUpDiv>
        </div>
    )
}