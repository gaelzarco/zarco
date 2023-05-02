import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"

import { GitHubLogoIcon } from "@radix-ui/react-icons"

import HorizontalScrollDiv from "@/components/horizontalscroll"
import Footer from "@/components/footer"
import { SlideUpDiv, SlideUpP } from "@/components/motion"

export default function NextCommerce() {
    return (
        <>
            <Head>
                <title>Gael Zarco ∙ Next-Commerce</title>
            </Head>

            <div id='hero' className="flex flex-col w-full max-w-[1900px] p-4 pt-6 max-md:px-3 w-full bg-neutral-900/10">
                <div className="inline-flex max-md:flex-col max-md:px-0">
                    <div className="flex flex-col w-7/12 max-w-[760px] lg:px-4 text-left max-md:w-full">
                        <SlideUpDiv className="inline-flex items-center md:max-lg:w-min mb-4 max-md:mb-2">
                            <h1 className="text-6xl max-md:text-4xl mr-2">Next-Commerce</h1>
                            <Link href="https://github.com/gaelzarco/nextcommerce" target="_blank" rel="noreferrer" className="flex ml-2 h-fit leading-none">
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
                            >FULL-STACK</SlideUpP>
                            <SlideUpP 
                                className='leading-none border border-white rounded-full ml-2 p-1 px-2'
                                delay={0.35}
                            >UI/UX</SlideUpP>
                            <SlideUpP 
                                className='leading-none border border-white rounded-full ml-2 p-1 px-2'
                                delay={0.5}
                            >2022</SlideUpP>
                        </SlideUpDiv>
                    </div>
                    
                    <SlideUpDiv 
                        className="flex w-[400px] justify-end text-left  max-md:pt-8 max-md:w-[300px] max-md:text-xs"
                        delay={0.7}
                    >
                        <p>
                            Next-Commerce is a full-stack e-commerce web application built with NextJS, Sanity CMS, and features Stripe API integration for payment processing. Implements cart functionality, Stripe check-out, and a successful order confirmation page.
                        </p>
                    </SlideUpDiv>
                </div>

                <div className="hidden lg:block">
                    <HorizontalScrollDiv delay={0.9}>
                        <div className='relative min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/nextcom-x2_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>

                        <div className='relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/nextcom-x1_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>

                        <div className='relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden'>
                            <img
                                src='../../static/nextcom-x3_so.png'
                                className="absolute object-cover w-max h-full rounded-lg"
                            />
                        </div>
                    </HorizontalScrollDiv>
                </div>

                <SlideUpDiv className="flex flex-col w-full mt-10 mb-20 mx-auto lg:hidden" delay={0.9}>
                    <div className='w-full mb-4'>
                        <img
                            src='../../static/nextcom-x2_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div className='w-full mb-4'>
                        <img
                            src='../../static/nextcom-x1_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                    <div className='w-full'>
                        <img
                            src='../../static/nextcom-x3_so.png'
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                </SlideUpDiv>

                <Footer />
            </div>
        </>
    )
}