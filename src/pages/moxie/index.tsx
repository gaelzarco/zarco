import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import HorizontalScrollDiv from "@/components/horizontalscroll";
import Footer from "@/components/footer";
import { SlideUpDiv, SlideUpP } from "@/components/motion";
import GitHubLink from "@/components/githublink";

export default function Moxie() {
  return (
    <>
      <Head>
        <title>Gael Zarco ∙ Moxie</title>
      </Head>

      <div
        id="hero"
        className="flex flex-col max-w-[1900px] p-4 pt-6 max-md:px-3 w-full bg-neutral-900/10"
      >
        <div className="inline-flex max-md:flex-col max-md:px-0">
          <div className="flex flex-col w-5/12 max-w-[560px] lg:px-4 justify-start text-left max-md:w-full">
            <SlideUpDiv className="inline-flex items-center w-full mb-4 max-md:mb-2">
              <h1 className="text-6xl max-md:text-4xl mr-2">Moxie</h1>
            </SlideUpDiv>
            <SlideUpDiv className="inline-flex flex-wrap w-full items-center text-md max-md:text-sm max-sm:text-xs">
              <SlideUpP
                className="leading-none border border-white rounded-full p-1 px-2"
                delay={0.1}
              >
                FULL-STACK
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.2}
              >
                UI/UX
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.3}
              >
                2023
              </SlideUpP>
              <GitHubLink href="https://github.com/gaelzarco/moxie" />
            </SlideUpDiv>
          </div>
          <SlideUpDiv
            className="flex w-[400px] justify-end text-left max-lg:7/12 max-md:pt-8 max-md:w-[340px] max-md:text-xs"
            delay={0.5}
          >
            <p>
              Moxie is a serverless, full-stack social media application.
              Crafted using NextJS, TypeScript, Tailwind CSS, Radix UI, tRPC,
              Prisma ORM, PlanetScale (MySQL), AWS S3, and Clerk for user
              authentication and management. Features CRUD operations and allows
              users to create an account, make a post, reply to others, and send
              likes. Inspired by Twitter. Originally created using MERN but
              migrated to T3.{" "}
              <Link
                href="https://github.com/gaelzarco/MERN-socialmedia"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-neutral-800 dark:hover:text-neutral-300"
              >
                Original Project
              </Link>
              .
            </p>
          </SlideUpDiv>
        </div>

        <div className="hidden lg:block pl-4">
          <HorizontalScrollDiv delay={0.6}>
            <div className="relative min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/moxie-x1_so.png"
                alt="Project screenshot"
                height={1500}
                width={1500}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/moxie-x2_so.png"
                alt="Project screenshot"
                height={1500}
                width={1500}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/moxie-x3_so.png"
                alt="Project screenshot"
                height={1500}
                width={1500}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>
          </HorizontalScrollDiv>
        </div>

        <SlideUpDiv
          className="flex flex-col w-full mt-10 mb-20 mx-auto lg:hidden"
          delay={0.7}
        >
          <div className="w-full mb-4">
            <Image
              src="/static/moxie-x1_so.png"
              alt="Project screenshot"
              height={1500}
              width={1500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full mb-4">
            <Image
              src="/static/moxie-x2_so.png"
              alt="Project screenshot"
              height={1500}
              width={1500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/static/moxie-x3_so.png"
              alt="Project screenshot"
              height={1500}
              width={1500}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SlideUpDiv>

        <div className="bottom-0 w-full max-w-[1900px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
