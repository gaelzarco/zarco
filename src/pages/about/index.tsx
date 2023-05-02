import Head from 'next/head'
import Link from 'next/link'
import { SlideUpDiv, SlideUpP, SectionSeparator } from '@/components/motion'

import { GitHubLogoIcon, LinkedInLogoIcon, ArrowTopRightIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'

export default function About() {
    return (
            <>
            <Head>
                <title>About | Gael Zarco ∙ FS Engineer</title>
            </Head>

            <div id='hero' className='flex flex-col 2xl:flex-row lg:justify-between pt-5 p-4 mx-auto w-full max-w-[1900px] bg-neutral-900/10'>
                <div className='max-w-[600px] max-2xl:mx-auto p-4'>
                    <SlideUpP className='text-3xl max-sm:text-lg pb-12 leading-[3rem]' delay={0}>
                        Gael Zarco is a full-stack web engineer with a focus on building fast and visually impressive applications. He is a bootcamp graduate that currently works as an Android app developer, and a server at Red Lobster. With 2+ years of experience in software development, he has had the opportunity to work in start-ups, participate in hackathons, and develop a strong grasp of programming fundamentals.
                    </SlideUpP>
                    <div className='inline-flex flex-wrap items-center text-center text-md max-sm:text-xs w-full mx-auto justify-between'>
                        <SlideUpDiv delay={0.1} className='mb-2'>
                            <Link href='mailto:gaelxarco@icloud.com' target='_blank' className='leading-none border border-white inline-flex items-center rounded-lg p-1 px-2 hover:text-black hover:bg-white cursor-pointer'>
                                gaelxarco@icloud.com
                                <EnvelopeOpenIcon className='ml-2'/>
                            </Link>
                        </SlideUpDiv>
                        <div className='inline-flex items-center mb-2'>
                            <SlideUpDiv className='inline-flex items-center' delay={0.3}>
                                <Link href='https://github.com/gaelzarco/' target='_blank'
                                className='leading-none border border-white inline-flex items-center rounded-lg p-1 px-2 hover:text-black hover:bg-white cursor-pointer'
                                >
                                    GitHub
                                    <GitHubLogoIcon className='ml-1'/>
                                </Link>
                            </SlideUpDiv>
                            <SlideUpDiv className='inline-flex items-center' delay={0.5}>
                                <Link href='https://www.linkedin.com/in/gaelzarco/' target='_blank'
                                className='leading-none border border-white inline-flex items-center rounded-lg ml-2 p-1 px-2 hover:text-black hover:bg-white cursor-pointer'
                                >
                                    LinkedIn
                                    <LinkedInLogoIcon className='ml-1'/>
                                </Link >
                            </SlideUpDiv>
                            <SlideUpDiv className='inline-flex items-center' delay={0.7}>
                                <Link href='../../resume.pdf' target='_blank'
                                className='leading-none border border-white inline-flex items-center rounded-lg ml-2 p-1 px-2 hover:text-black hover:bg-white cursor-pointer'
                                >
                                    Open CV
                                    <ArrowTopRightIcon className='ml-1'/>
                                </Link >
                            </SlideUpDiv>
                        </div>
                    </div>
                </div>

                <div className='max-w-[700px] max-2xl:mx-auto 2xl:p-4'>
                    <SlideUpDiv className='w-full p-6 pb-8 bg-black max-2xl:mt-12 rounded-lg drop-shadow-[0_0px_10px_rgba(255,255,255,0.3)]' delay={0.9}>
                        <div className='w-full'>
                            <SectionSeparator className='pt-0 mt-0'>
                                <p>Experience</p>
                            </SectionSeparator>
                        </div>
                        <div className='flex flex-col w-full text-md max-sm:text-xs'>
                            <div className='w-full pt-6 inline-flex justify-between'>
                                <div>
                                    Android App Developer ∙ Decoding Greatness Inc.
                                </div>
                                <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                    2023—Now
                                </div>
                            </div>

                            <div className='w-full pt-4 inline-flex justify-between'>
                                <div>
                                    Project Manager/Full-Stack Engineer ∙ LabLabAI OpenAI Stack Hack
                                </div>
                                <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                    2023
                                </div>
                            </div>

                            <div className='w-full mt-8'>
                                <SectionSeparator className='pt-0 mt-0'>
                                    <p>Education</p>
                                </SectionSeparator>
                            </div>

                            <div className='flex flex-col w-full text-md max-sm:text-xs'>
                                <div className='w-full pt-6 inline-flex justify-between'>
                                    <div>
                                        Bootcamp Certificate in Software Development ∙ University of Nevada Las Vegas
                                    </div>
                                    <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                        2021—2022
                                    </div>
                                </div>

                                <div className='w-full pt-4 inline-flex justify-between'>
                                    <div>
                                        Coursework towards AAS in Software Programming ∙ College of Southern Nevada
                                    </div>
                                    <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                        2019—2021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUpDiv>

                    <SlideUpDiv className='w-full p-6 pb-8 bg-black mt-12 rounded-lg drop-shadow-[0_0px_10px_rgba(255,255,255,0.3)]' delay={1.1}>
                        <div className='w-full'>
                            <SectionSeparator className='pt-0 mt-0'>
                                <p>Skills</p>
                            </SectionSeparator>
                        </div>
                        <div className='flex flex-row w-full text-md max-sm:text-xs'>
                            <div className='w-1/2 pt-6 flex flex-col'>
                                <div>
                                    Full-Stack Development
                                </div>
                                <div  className='pt-4'>
                                    TypeScript
                                </div>
                                <div className='pt-4'>
                                    Python
                                </div>
                                <div className='pt-4'>
                                    HTML5 & CSS
                                </div>
                                <div className='pt-4'>
                                    SQL & NoSQL (MongoDB)
                                </div>
                                <div className='pt-4'>
                                    REST APIs
                                </div>
                            </div>

                            <div className='w-1/2 pt-6 flex flex-col'>
                                <div>
                                    React
                                </div>
                                <div className='pt-4'>
                                    NextJS
                                </div>
                                <div className='pt-4'>
                                    Tailwind CSS
                                </div>
                                <div className='pt-4'>
                                    NodeJS & Express
                                </div>
                                <div className='pt-4'>
                                    Flask
                                </div>
                                <div className='pt-4'>
                                    UI/UX
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-8'>
                            <SectionSeparator className='pt-0 mt-0'>
                                <p>Tools</p>
                            </SectionSeparator>
                        </div>
                        <div className='flex flex-row w-full text-md max-sm:text-xs'>
                            <div className='w-1/2 pt-6 flex flex-col'>
                                <div>
                                    Mac & Windows
                                </div>
                                <div  className='pt-4'>
                                    VS Code
                                </div>
                                <div className='pt-4'>
                                    NPM
                                </div>
                                <div className='pt-4'>
                                    Vercel
                                </div>
                                <div className='pt-4'>
                                    Git
                                </div>
                            </div>

                            <div className='w-1/2 pt-6 flex flex-col'>
                                <div>
                                    AWS
                                </div>
                                <div className='pt-4'>
                                    Excalidraw
                                </div>
                                <div className='pt-4'>
                                    Canva
                                </div>
                                <div className='pt-4'>
                                    Notion
                                </div>
                                <div className='pt-4'>
                                    Google App Suite
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full mt-8'>
                                <SectionSeparator className='pt-0 mt-0'>
                                    <p>Languages</p>
                                </SectionSeparator>
                            </div>

                            <div className='flex flex-col w-full text-md max-sm:text-xs'>
                                <div className='w-full pt-6 inline-flex justify-between'>
                                    <div>
                                        English
                                    </div>
                                    <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                        Native
                                    </div>
                                </div>

                                <div className='w-full pt-4 inline-flex justify-between'>
                                    <div>
                                        Spanish
                                    </div>
                                    <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                        Fluent
                                    </div>
                                </div>
                            </div>
                    </SlideUpDiv>

                    <SlideUpDiv className='w-full p-6 pb-8 bg-black mt-12 rounded-lg drop-shadow-[0_0px_10px_rgba(255,255,255,0.3)]' delay={1.3}>
                        <div className='w-full'>
                            <SectionSeparator className='pt-0 mt-0'>
                                <p>Employment History</p>
                            </SectionSeparator>
                        </div>
                        <div className='flex flex-col w-full text-md max-sm:text-xs'>
                            <div className='w-full pt-6 inline-flex justify-between'>
                                <div>
                                    Server ∙ Red Lobster
                                </div>
                                <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                    2023—Now
                                </div>
                            </div>

                            <div className='w-full pt-4 inline-flex justify-between'>
                                <div>
                                    Server Assistant ∙ Juan&apos;s Flaming Fajitas & Cantina
                                </div>
                                <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                    2022—2023
                                </div>
                            </div>

                            <div className='w-full pt-4 inline-flex justify-between'>
                                <div>
                                    Busser/Food Runner ∙ FireRock Steak House
                                </div>
                                <div className='ml-4 min-w-[150px] max-sm:min-w-[70px]'>
                                    2020—2022
                                </div>
                            </div>
                        </div>
                    </SlideUpDiv>
                </div>
            </div>
        </>
    )
}