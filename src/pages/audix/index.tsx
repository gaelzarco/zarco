import Head from "next/head";
import Image from "next/image";

import HorizontalScrollDiv from "@/components/horizontalscroll";
import Footer from "@/components/footer";
import { SlideUpDiv, SlideUpP } from "@/components/motion";
import GitHubLink from "@/components/githublink";

export default function Audix() {
  return (
    <>
      <Head>
        <title>Gael Zarco ∙ Audix</title>
      </Head>

      <div
        id="hero"
        className="flex flex-col max-w-[1900px] p-4 pt-6 max-md:px-3 w-full bg-neutral-900/10"
      >
        <div className="inline-flex max-md:flex-col max-md:px-0">
          <div className="flex flex-col w-5/12 max-w-[560px] lg:px-4 justify-start text-left max-md:w-full">
            <SlideUpDiv className="inline-flex items-center w-full mb-4 max-md:mb-2">
              <h1 className="text-6xl max-md:text-4xl mr-2">Audix</h1>
            </SlideUpDiv>
            <SlideUpDiv className="inline-flex flex-wrap w-full items-center text-md max-md:text-xs">
              <SlideUpP
                className="leading-none border border-white rounded-full p-1 px-2"
                delay={0.2}
              >
                SPOTIFY API
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.35}
              >
                UI/UX
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.5}
              >
                2022
              </SlideUpP>
              <GitHubLink href="https://github.com/gaelzarco/audix" />
            </SlideUpDiv>
          </div>
          <SlideUpDiv
            className="flex w-[400px] justify-end text-left max-lg:7/12 max-md:pt-8 max-md:w-[340px] max-md:text-xs"
            delay={0.7}
          >
            <p>
              A web application that allows users to create and customize a
              downloadable image of their top 10 Spotify tracks from a specified
              time-range. Built with React, NodeJS, Express, Flask, and features
              Spotify Web API integration. All styling is vanilla CSS. Demo
              account is provided in GitHub README.
            </p>
          </SlideUpDiv>
        </div>

        <div className="hidden lg:block pl-4">
          <HorizontalScrollDiv delay={0.9}>
            <div className="relative min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/audix-x1_so.png"
                alt="Project screenshot"
                height={2000}
                width={2000}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/audix-x2_so.png"
                alt="Project screenshot"
                height={2000}
                width={2000}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/audix-x3_so.png"
                alt="Project screenshot"
                height={2000}
                width={2000}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>
          </HorizontalScrollDiv>
        </div>

        <SlideUpDiv
          className="flex flex-col w-full mt-10 mb-20 mx-auto lg:hidden"
          delay={0.9}
        >
          <div className="w-full mb-4">
            <Image
              src="/static/audix-x1_so.png"
              alt="Project screenshot"
              height={2000}
              width={2000}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full mb-4">
            <Image
              src="/static/audix-x2_so.png"
              alt="Project screenshot"
              height={2000}
              width={2000}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/static/audix-x3_so.png"
              alt="Project screenshot"
              height={2000}
              width={2000}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SlideUpDiv>
      </div>

      <div className="w-full px-4 max-md:px-3">
        <Footer />
      </div>
    </>
  );
}
