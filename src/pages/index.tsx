import { type ReactNode, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';

import { HorizontalScrollDiv, SlideInDiv, SlideUpDiv, SectionSeparator, Footer } from '@/components/motion';

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {

  const [currentTime, setCurrentTime] = useState<string>(dayjs().tz('America/Los_Angeles').format('hh:mm A'))
  const flagRef = useRef<HTMLParagraphElement | null>(null)

  const handleTimeMouseMove = (e: MouseEvent) => {
    if (flagRef.current) {
      const rect = flagRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      flagRef.current.style.left = `${e.clientX - rect.width - scrollLeft}px`;
      flagRef.current.style.top = `${e.clientY - rect.height + scrollTop}px`;
    }
  };

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
      <div id='hero' className='flex flex-col w-full min-h-screen p-4 pt-12 max-md:pt-6 w-full bg-neutral-900/10'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-7/12 max-w-[850px] max-lg:w-10/12'>
            <motion.p
              className='leading-[3.5rem] text-5xl max-md:text-3xl'
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

          <div className='leading-none h-[86px] w-[520px] flex flex-wrap-reverse items-center xl:justify-end pt-4 text-sm max-md:text-xs'>
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
      
        <div className='h-[86px] flex flex-wrap items-center text-center justify-between w-full max-sm:mt-[14rem] max-md:mt-[34rem] mt-[42rem]'>
          <SlideInDiv delay={1.5}>
            <p className='leading-none flex w-[197px] max-md:w-[173px] border border-white rounded-lg p-1 px-2 text-sm max-md:text-xs'
            onMouseEnter={handleTimeHoverEnter} onMouseLeave={handleTimeHoverLeave}>
              LOCAL TIME&nbsp;<ArrowRightIcon />&nbsp;{currentTime}
            </p>
          </SlideInDiv>

          <SlideUpDiv delay={1.75}>
            <p className='inline-flex items-center text-2xl max-md:text-xl hover:cursor-pointer'>
              Go to work&nbsp;
              <ArrowDownIcon />
             </p>
          </SlideUpDiv>
        </div>

        <div id='work' className='flex flex-wrap items-center justify-between w-full mt-48 max-sm:mt-36'>
            <SlideUpDiv className='w-1/2 max-sm:w-full text-4xl max-md:text-2xl' delay={1.75}>
              <p>
                Showcase of selected projects and various other works
              </p>
            </SlideUpDiv>
            <div className='h-[70px] w-1/2 max-sm:w-full text-sm max-md:text-xs flex items-center justify-end max-sm:justify-start'>
              <div className='flex flex-col my-auto '>
                <SlideUpDiv className='inline-flex items-center justify-end' delay={1.75}>
                  <p>FEATURING</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>FULL-STACK</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>UI/UX</p>
                </SlideUpDiv>
                <SlideUpDiv className='inline-flex items-center justify-end max-sm:justify-start mt-2' delay={1.85}>
                  <p>FROM</p>
                  <p className='leading-none border border-white rounded-full ml-2 mr-2 p-1 px-2'>2021</p>
                  <p>TO</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>2023</p>
                </SlideUpDiv>
              </div>
            </div>
        </div>

        <SectionSeparator>
          <p>SelectedProjects</p>
        </SectionSeparator>

        <HorizontalScrollDiv>
          <div className="flex min-w-[420px] h-[520px] max-md:w-[320px] max-md:h-[400px]">
            <img
              src={"../static/audix-x1_so.png"}
              className="h-full w-full p-1 object-cover rounded-2xl hover:cursor-pointer"
            />
          </div>

          <HorizontalDivProject>
            <img
              src={"../static/moxie-x1_so.png"}
              className="h-full w-full p-1 object-cover rounded-2xl hover:cursor-pointer"
            />
          </HorizontalDivProject>

          <HorizontalDivProject>
            <img
              src={"../static/briefo-x3_so.png"}
              className="h-full w-full p-1 object-cover rounded-2xl hover:cursor-pointer"
            />
          </HorizontalDivProject>

          <HorizontalDivProject>
            <img
              src={"../static/audix-x1_so.png"}
              className="h-full w-full p-1 object-cover rounded-2xl hover:cursor-pointer"
            />
          </HorizontalDivProject>
          </HorizontalScrollDiv>

          <SectionSeparator>
            <p>Other Works</p>
          </SectionSeparator>

          <div className='ml-1 mt-14 mb-14 flex flex-col w-full border-y border-white w-[98.2%] max-md:mb-12'>
              <div className='mx-3 h-[70px] inline-flex justify-between hover:rounded-md hover:drop-shadow-[0_0px_20px_rgba(255,255,255,0.25)] hover:shadow-neutral-800'>
                <div className='inline-flex text-2xl max-md:text-xl items-center'>
                  <p>Briefo</p>
                </div>
                <div className='inline-flex items-center text-sm max-md:text-xs'>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>HACKATHON</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>GPT-3 DAVINCI</p>
                  <p className='leading-none border border-white rounded-full ml-2 p-1 px-2'>2023</p>
                </div>
              </div>
          </div>

        <Footer />
      </div>
  )
}

const HorizontalDivProject = ({ children } : {children: ReactNode}) => {
  return (
    <div className="flex min-w-[420px] h-[520px] ms-2 max-md:w-[320px] max-md:h-[400px]">
      {children}
    </div>
  )
}
