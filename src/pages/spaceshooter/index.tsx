import Head from "next/head";
import Image from "next/image";

import HorizontalScrollDiv from "@/components/horizontalscroll";
import Footer from "@/components/footer";
import { SlideUpDiv, SlideUpP } from "@/components/motion";
import GitHubLink from "@/components/githublink";

export default function SpaceShooter() {
  return (
    <>
      <Head>
        <title>Gael Zarco ∙ Space Shooter</title>
      </Head>

      <div
        id="hero"
        className="flex flex-col max-w-[1900px] p-4 pt-6 max-md:px-3 w-full bg-neutral-900/10"
      >
        <div className="inline-flex max-md:flex-col max-md:px-0">
          <div className="flex flex-col w-7/12 max-w-[760px] lg:px-4 text-left max-md:w-full">
            <SlideUpDiv className="inline-flex items-center md:max-lg:w-min mb-4 max-md:mb-2">
              <h1 className="text-6xl max-md:text-4xl mr-2">Space Shooter</h1>
            </SlideUpDiv>
            <SlideUpDiv className="inline-flex flex-wrap w-full items-center text-md max-md:text-sm max-sm:text-xs">
              <SlideUpP
                className="leading-none border border-white rounded-full p-1 px-2"
                delay={0.2}
              >
                WEB GAME
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.35}
              >
                VANILLA JS
              </SlideUpP>
              <SlideUpP
                className="leading-none border border-white rounded-full ml-2 p-1 px-2"
                delay={0.5}
              >
                2021
              </SlideUpP>
              <GitHubLink href="https://github.com/gaelzarco/SpaceShooter" />
            </SlideUpDiv>
          </div>

          <SlideUpDiv
            className="flex w-[400px] justify-end text-left  max-md:pt-8 max-md:w-[300px] max-md:text-xs"
            delay={0.7}
          >
            <p>
              First milestone project for the UNLV Software Development Bootcamp
              I completed. Space Shooter is a JavaScript game that allows users
              to control a spaceship and shoot down the enemies that invade the
              screen. The game is built using vanilla JavaScript, HTML, and CSS.
              Move around with your arrow keys and hit the space bar to shoot
              enemies. The game is over when an enemy touches the bottom of the
              game screen.
            </p>
          </SlideUpDiv>
        </div>

        <div className="hidden lg:block pl-4">
          <HorizontalScrollDiv delay={0.9}>
            <div className="relative min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/spaceshooter-x2_so.png"
                alt="Project Screenshot"
                height={1500}
                width={1500}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/spaceshooter-x1_so.png"
                alt="Project Screenshot"
                height={1500}
                width={1500}
                className="absolute object-cover w-max h-full rounded-lg"
              />
            </div>

            <div className="relative ml-3 min-w-[693px] flex h-[520px] max-md:min-w-[507px] max-md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src="/static/spaceshooter-x3_so.png"
                alt="Project Screenshot"
                height={1500}
                width={1500}
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
              src="/static/spaceshooter-x2_so.png"
              alt="Project Screenshot"
              height={1500}
              width={1500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full mb-4">
            <Image
              src="/static/spaceshooter-x1_so.png"
              alt="Project Screenshot"
              height={1500}
              width={1500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/static/spaceshooter-x3_so.png"
              alt="Project Screenshot"
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
