import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Link as SmoothScrollLink } from 'react-scroll'
import { Plus_Jakarta_Sans } from 'next/font/google'
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
import { motion } from "framer-motion";

import { LinkedInLogoIcon, GitHubLogoIcon, CircleIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'

import { SlideInP } from './motion'

export default function NavBar() {

    const router = useRouter()
    const [ arrowIcon, setArrowIcon ] = useState(false)

    return (
        <nav className={`${jakartaSans.className} sticky top-0 left-0 right-0 flex items-center content-center justify-between bg-neutral-900/50 backdrop-blur-xl p-3 px-4 m-2 rounded-md drop-shadow-[0_0px_20px_rgba(255,255,255,0.25)] shadow-neutral-800`}>
            <div className='flex items-center content-center justify-between text-sm'>
                <Link href='/' className='hidden md:inline-flex hover:text-neutral-800 dark:hover:text-neutral-300 text-md md:text-lg font-semibold'>
                    <SlideInP delay={0}>
                        Gael Zarco
                    </SlideInP>
                </Link>

                <Link href='mailto:gaelxarco@icloud.com' target='_blank' className='inline-flex items-center hover:text-neutral-800 dark:hover:text-neutral-200 max-lg:text-xs lg:text-md border border-white md:ml-8 rounded-full p-1 px-2 leading-none'
                onMouseEnter={() => setArrowIcon(true)} onMouseLeave={() => setArrowIcon(false)}>
                    {arrowIcon ? <ArrowTopRightIcon className='mr-2 text-green-400 translate-y-[1px]' /> : <CircleIcon className='mr-2 text-green-400 bg-green-400 rounded-full'/>}
                    <motion.p
                        variants={{
                        hidden: { opacity: 0, x: 5 },
                        visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Open to work
                    </motion.p>
                </Link>
            </div>

            <div className='flex items-center content-center justify-between text-md md:text-lg'>
                {router.pathname !== '/' ? (
                    <Link href='/' className='hover:text-neutral-800 dark:hover:text-neutral-300 pr-8 hover:cursor-pointer'>
                        <SlideInP delay={0.4}>
                            Home
                        </SlideInP>
                    </Link>
                ) : (
                    <SmoothScrollLink
                        to='work'
                        smooth={true}
                        duration={1000}
                        offset={-100}
                        className='hover:text-neutral-800 dark:hover:text-neutral-300 pr-8 hover:cursor-pointer'
                    >
                        <SlideInP delay={0.4}>
                            Work
                        </SlideInP>
                    </SmoothScrollLink>
                )}
                <Link href='/about' className='hover:text-neutral-800 dark:hover:text-neutral-300 pr-4 max-md:pr-0'>
                    <SlideInP delay={0.6}>
                        About
                    </SlideInP>
                </Link>
                <Link href='https://www.linkedin.com/in/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-6 font-medium">
                    <LinkedInLogoIcon />
                </Link>
                <Link href='https://github.com/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-4 font-medium">
                    <GitHubLogoIcon />
                </Link>
            </div>
        </nav>
    )
    }