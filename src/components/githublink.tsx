import Link from "next/link"
import { motion } from "framer-motion"

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { SlideUpP } from "./motion"

export function GitHubLink({ href } : { href: string }) {
    return (
        <Link href={href} target="_blank" rel="noreferrer" className="flex h-fit leading-none">
                <SlideUpP 
                    className='inline-flex items-center leading-none rounded-full ml-2 p-1 px-2 hover:bg-white hover:text-black'
                    delay={0.7}
                >
                    GITHUB <GitHubLogoIcon className="ml-2" />
                </SlideUpP>
        </Link>
    )
}