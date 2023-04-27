import { type ReactNode, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {

  const [currentTime, setCurrentTime] = useState<string>(dayjs().tz('America/Los_Angeles').format('hh:mm A'))
  const flagRef = useRef<HTMLParagraphElement | null>(null)

  const handleTimeMouseMove = (e: MouseEvent) => {
    if (flagRef.current) {
      flagRef.current.style.left = `${e.clientX + 10}px`
      flagRef.current.style.top = `${e.clientY + 10}px`
    }
  }

  const handleTimeHoverEnter = () => {
    const flagImage = document.createElement('p')
    flagImage.textContent = '🇺🇸'
    flagImage.style.position = 'absolute'
    flagImage.style.width = '30px'
    flagImage.style.height = '20px'
    flagRef.current = flagImage

    document.body.appendChild(flagImage)

    document.addEventListener('mousemove', handleTimeMouseMove)
  }

const handleTimeHoverLeave = () => {
  if (flagRef.current) {
    document.body.removeChild(flagRef.current)
    flagRef.current = null
  }
}

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().tz('America/Los_Angeles').format('hh:mm A'))
    }, 1000)

    return () => {
      clearInterval(interval)
      document.removeEventListener('mousemove', handleTimeMouseMove)
    }
  }, [])

  return (
      <div id='hero' className='flex flex-col w-full min-h-screen p-4 pt-12 max-md:pt-6 w-full'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-7/12 max-w-[850px] max-lg:w-10/12'>
            <motion.p
              className='leading-[3.5rem] text-5xl max-md:text-4xl max-sm:text-3xl'
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75 }}
            >
            Full-Stack engineer building fast, responsive, and accessible web applications.
            </motion.p>
          </div>

          <div className='leading-none h-[86px] w-[520px] flex flex-wrap-reverse items-center xl:justify-end pt-4 text-sm max-sm:text-xs'>
            <SlideInDiv delay={1}>
              <p className='border border-white rounded-full p-1 px-2'>2+ YEARS OF EXPERIENCE</p>
            </SlideInDiv>
            <SlideInDiv delay={1}>
              <p className='border border-white rounded-full p-1 ml-2 px-2'>BOOTCAMP GRAD</p>
            </SlideInDiv>
            <SlideInDiv delay={1}>
              <p className='border border-white rounded-full p-1 px-2'>SERVER @ RED LOBSTER 🦞</p>
            </SlideInDiv>
          </div>
        </div>
      
        <div className='h-[86px] flex flex-wrap items-center text-center justify-between w-full max-sm:mt-[14rem] max-md:mt-[20rem] mt-[42rem]'>
          <SlideInDiv delay={1.5}>
            <p className='leading-none flex w-[197px] border border-white rounded-lg p-1 px-2 text-sm max-sm:text-xs'
            onMouseEnter={handleTimeHoverEnter} onMouseLeave={handleTimeHoverLeave}>
              LOCAL TIME&nbsp;<ArrowRightIcon />&nbsp;{currentTime}
            </p>
          </SlideInDiv>

          <SlideUpDiv delay={2}>
            <p className='inline-flex items-center text-2xl max-sm:text-xl hover:cursor-pointer'>
              Go to work&nbsp;
              <motion.span
                animate={{ y: 10, opacity: 0, transition: { duration: 5, repeat: Infinity },  }}
                exit={{ y: 0, opacity: 0 }}
              >
                <ArrowDownIcon />
              </motion.span>
             </p>
          </SlideUpDiv>
        </div>

        <div id='work' className='flex flex-wrap items-center justify-between w-full mt-48'>
            <SlideUpDiv className='w-1/2 max-sm:w-full text-4xl max-md:text-2xl' delay={2.5}>
              <p>
                Showcase of selected projects and Hackathon submissions
              </p>
            </SlideUpDiv>
            <div className='h-[70px] w-1/2 max-sm:w-full text-sm max-sm:text-xs flex items-center justify-end max-sm:justify-start'>
              <div className='flex flex-col my-auto '>
                <SlideUpDiv className='inline-flex items-center justify-end' delay={2.5}>
                  <p>FEATURING</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>FULL-STACK</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>UI/UX</p>
                </SlideUpDiv>
                <SlideUpDiv className='inline-flex items-center justify-end max-sm:justify-start' delay={3}>
                  <p>FROM</p>
                  <p className='leading-none border border-white rounded-full ml-2 mr-2 p-1 px-2'>2021</p>
                  <p>TO</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>2023</p>
                </SlideUpDiv>
              </div>
            </div>
        </div>
      </div>
  )
}

const SlideInDiv = ({ children, delay, className } : { children: ReactNode, delay?: number, className?: string }) => {
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
  );
};

const SlideUpDiv = ({ children, delay, className } : { children: ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
    className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: delay }}
    >
      {children}
    </motion.div>
  );
};