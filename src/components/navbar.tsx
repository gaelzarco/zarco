import type { ReactNode } from 'react'
import Link from 'next/link'
import { Plus_Jakarta_Sans } from 'next/font/google'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
import { Link as ScrollLink } from 'react-scroll';
import { motion } from "framer-motion";
import { LinkedInLogoIcon, GitHubLogoIcon, PaperPlaneIcon, CircleIcon } from '@radix-ui/react-icons'

// shadow-[10px_-50px_1000px_-6px]

export default function NavBar() {

  return (
    <nav className={`${jakartaSans.className} sticky top-0 left-0 right-0 flex items-center content-center justify-between bg-neutral-800/10 backdrop-blur-xl p-2 px-4 m-2 rounded-md drop-shadow-[0_0px_20px_rgba(255,255,255,0.25)] shadow-neutral-800`}>
        <div className='flex items-center content-center justify-between text-sm'>
            <Link href='/' className='hover:text-neutral-800 dark:hover:text-neutral-300 text-md font-bold'>
                <SlideInP delay={0}>
                    Gael Zarco
                </SlideInP>
            </Link>

            <a href='mailto:gaelxarco@icloud.com' target='_blank' className='hidden sm:inline-flex items-center hover:text-neutral-800 dark:hover:text-neutral-300 text-md border border-white font-semibold ml-4 rounded-full p-1 px-2 leading-none'>
                <CircleIcon className='mr-2 text-green-400 bg-green-400 rounded-full'/>
                <motion.p
                    variants={{
                    hidden: { opacity: 0, x: 5 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.75, delay: 0.2 }}
                >
                    Available for hire
                </motion.p>
            </a>
        </div>

        <div className='flex items-center content-center justify-between text-sm'>
            <Link href='#about' className='hover:text-neutral-800 dark:hover:text-neutral-300 pr-8 font-medium'>
                <SlideInP delay={0.4}>
                    about
                </SlideInP>
            </Link>
            <ScrollLink
                to='work'
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                className='hover:text-neutral-800 dark:hover:text-neutral-300 pr-4 font-medium'
            >
                <SlideInP delay={0.6}>
                    work
                </SlideInP>
            </ScrollLink>
            <Link href='https://www.linkedin.com/in/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-4 font-medium">
                <LinkedInLogoIcon />
            </Link>
            <Link href='https://github.com/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-4 font-medium">
                <GitHubLogoIcon />
            </Link>
        </div>
    </nav>
  )
}

const SlideInP = ( { children, delay } : { children: ReactNode, delay: number }) => {
    return (
      <motion.p
      className='hover:cursor-pointer'
        variants={{
          hidden: { opacity: 0, y: 5 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, delay: delay }}
      >
        {children}
      </motion.p>
    );
  };