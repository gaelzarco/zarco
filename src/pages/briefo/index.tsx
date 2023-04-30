import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import HorizontalScrollDiv from "@/components/horizontalscroll"
import Footer from "@/components/footer"
import { SlideUpDiv, SlideUpP } from "@/components/motion"

export default function Briefo() {
    return (
        <>
            <Head>
                <title>Gael Zarco ∙ Briefo</title>
            </Head>
            
            <div id='hero' className="flex flex-col w-full max-w-[1900px] p-4 pt-6 max-md:px-3 w-full bg-neutral-900/10">
                <div className="inline-flex max-md:flex-col max-md:px-0">
                    <div className="flex flex-col w-5/12 max-w-[560px] lg:px-4 justify-start text-left max-md:w-full">
                        <SlideUpDiv className="inline-flex items-center w-full mb-4 max-md:mb-2">
                            <h1 className="text-6xl max-md:text-4xl mr-2">Briefo</h1>
                            <Link href="https://github.com/gaelzarco/ai-creative-assistant" target="_blank" rel="noreferrer" className="ml-2 h-fit leading-none">
                                <motion.p
                                    initial={{ scale: 1.35 }}
                                    whileHover={{ scale: 1.75 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <GitHubLogoIcon />
                                </motion.p>
                            </Link>
                        </SlideUpDiv>
                        <SlideUpDiv 
                            className='inline-flex flex-wrap w-full items-center text-md max-md:text-sm max-sm:text-xs'
                        >
                            <SlideUpP 
                                className='leading-none border border-white rounded-full p-1 px-2'
                                delay={0.2}
                            >OPENAI</SlideUpP>
                            <SlideUpP 
                                className='leading-none border border-white rounded-full ml-2 p-1 px-2'
                                delay={0.35}
                            >GPT-3</SlideUpP>
                            <SlideUpP 
                                className='leading-none border border-white rounded-full ml-2 p-1 px-2'
                                delay={0.5}
                            >2023</SlideUpP>
                        </SlideUpDiv>
                    </div>
                    <SlideUpDiv 
                        className="flex w-[400px] justify-end text-left max-lg:7/12 max-md:pt-8 max-md:w-[340px] max-md:text-xs"
                        delay={0.7}
                    >
                        <p>
                            LabLabAI - OpenAI Stack Hack submission. A web application that allows users to create briefs for creative projects and export/download them to a stlyed PDF document. Built with <code>React</code>, <code>Flask</code>, and <code>GPT-3</code>. Received overwhelming positive feedback from start-up founders and engineering students. I served as the team lead and worked with developers from all over the world. Project submission can be found <Link href="https://lablab.ai/event/openai-hackathon/omni/briefo" target="_blank" rel="noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-300"> here</Link>.
                        </p>
                    </SlideUpDiv>
                </div>

                <div className="hidden lg:block">
                    <HorizontalScrollDiv delay={0.9}>
                        <div className='relative min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/briefo-x1_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>

                        <div className='relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/briefo-x2_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>

                        <div className='relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/briefo-x3_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>
                    </HorizontalScrollDiv>
                </div>

                <SlideUpDiv className="flex flex-col w-full mt-10 mb-20 mx-auto lg:hidden" delay={0.9}>
                    <div className='w-full mb-4'>
                        <img
                            src='../../static/briefo-x1_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div className='w-full mb-4'>
                        <img
                            src='../../static/briefo-x2_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div className='w-full'>
                        <img
                            src='../../static/briefo-x3_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </SlideUpDiv>

                <Footer />
            </div>
        </>
    )
}