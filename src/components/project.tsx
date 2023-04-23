import type { ReactNode } from "react"
import Link from "next/link"

import Images from "./images"
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons"

interface ProjectsProps {
    title: string,
    children: ReactNode,
    image1: string,
    image2: string,
    image3: string,
    github: string,
    vercel: string
}

export default function Project( { title, children, image1, image2, image3, github, vercel } : ProjectsProps ) {

    return (
        <div className='mt-6 flex flex-col w-8/12 max-lg:w-full mx-auto border rounded-md border-neutral-800 bg-neutral-900 px-4 pb-4 mb-4'>
            <div className="inline-flex items-center justify-between w-full">
                <div className="inline-flex">
                    <h1 className='font-bold text-md leading-10 px-4 pt-4'>
                        {title}
                    </h1>
                </div>
                <div className="inline-flex items-center pt-4">
                    <Link href={github} target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 font-medium">
                        <GitHubLogoIcon />
                    </Link>
                    <Link href={vercel} target='_blank' className="hover:text-neutral-800 dark:hover:text-neutral-300 px-3 font-medium">
                        <VercelLogoIcon />
                    </Link>
                </div>
            </div>
            <div className='text-sm p-4'>
                {children}
            </div>
            <Images
                title={title}
                image1={image1}
                image2={image2}
                image3={image3}
                github={github}
                vercel={vercel}
            >
                {children}
            </Images>
      </div>
    )
}