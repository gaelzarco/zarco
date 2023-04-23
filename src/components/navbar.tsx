import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function NavBar() {

  return (
    <nav className={`${inter.className} sticky top-0 w-full flex items-center content-center justify-between bg-neutral-800/30 backdrop-blur-xl p-10`}>
        <Link href='/' className='hover:text-neutral-800 dark:hover:text-neutral-300 text-md font-semibold'>
            <p>
                Gael Zarco
            </p>
        </Link>

        <div className={`${inter.className} flex items-center content-center justify-between text-sm`}>
            <Link href="#work" className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-4 font-medium">Work</Link>
            <Link href="#contact" className="hover:text-neutral-800 dark:hover:text-neutral-300 pl-4 font-medium">Contact</Link>
            <span className='pl-4'>|</span>
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
