import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function NavBar() {

  return (
    <nav className={`${inter.className} sticky top-0 w-full flex items-center content-center justify-between p-2 max-md:p-1 bg-neutral-800/30 backdrop-blur-xl rounded-full`}>
        <Link href='/' className='px-3 hover:text-neutral-800 dark:hover:text-neutral-300 py-2 pr-2 text-md font-semibold'>
            <p>
                Home
            </p>
        </Link>

        <div className={`${inter.className} flex items-center content-center justify-between text-sm`}>
            <Link href="#work" className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 py-2 font-medium">Work</Link>
            <Link href="#contact" className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 py-2 font-medium">Contact</Link>
            <span>|</span>
            <Link href='https://www.linkedin.com/in/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 py-2 font-medium">
                <LinkedInLogoIcon />
            </Link>
            <Link href='https://github.com/gaelzarco/' target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 py-2 font-medium">
                <GitHubLogoIcon />
            </Link>
        </div>
    </nav>
  )
}
