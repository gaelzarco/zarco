import Link from "next/link";
import { Link as SmoothScrollLink } from "react-scroll";
import { motion } from "framer-motion";

import { ArrowDownIcon } from "@radix-ui/react-icons";

import LocalTime from "@/components/localtime";
import HorizontalScroll from "@/components/horizontalscroll";
import Footer from "@/components/footer";
import Notif from "@/components/notif";
import { SlideInDiv, SlideUpDiv, SectionSeparator } from "@/components/motion";
import CenterPiece from "@/components/three/centerpiece";

export default function Home() {
  return (
    <div
      id="hero"
      className="flex flex-col w-full max-w-[1900px] p-4 pt-12 max-md:pt-6 bg-black z-10"
    >
      <Notif />
      <SlideUpDiv
        className="z-[-1] absolute w-screen h-[1200px] bg-transparent mx-0 my-0 top-0 left-0 bottom-0 right-0"
        delay={0.8}
      >
        <CenterPiece />
      </SlideUpDiv>
      <div className="flex flex-wrap justify-between">
        <div className="w-7/12 max-w-[850px] max-lg:w-10/12">
          <motion.p
            className="leading-[3.5rem] text-5xl max-md:text-3xl"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Full-Stack engineer building fast, responsive, and accessible web
            applications.
          </motion.p>
        </div>

        <div className="leading-none h-[86px] w-[520px] flex flex-wrap-reverse items-center xl:justify-end pt-4 text-sm max-md:text-xs">
          <SlideInDiv delay={0.5}>
            <p className="border border-white rounded-full p-1 px-2">
              3+ YEARS OF EDU/EXP
            </p>
          </SlideInDiv>
          <SlideInDiv delay={0.6}>
            <p className="border border-white rounded-full p-1 ml-2 px-2 max-md:mr-2">
              BOOTCAMP GRAD
            </p>
          </SlideInDiv>
          <SlideInDiv delay={0.7}>
            <p className="border border-white rounded-full p-1 px-2">
              IT TECH @ TEAM TECH SOLUTIONS
            </p>
          </SlideInDiv>
        </div>
      </div>

      <div className="h-[86px] flex flex-wrap items-center text-center justify-between w-full max-sm:mt-[14rem] max-md:mt-[34rem] mt-[42rem]">
        <SlideInDiv delay={0.9}>
          <LocalTime />
        </SlideInDiv>

        <SlideUpDiv delay={1}>
          <SmoothScrollLink
            to="work"
            smooth={true}
            duration={500}
            offset={-100}
            className="inline-flex items-center text-2xl max-md:text-xl hover:cursor-pointer"
          >
            Go to work&nbsp;
            <ArrowDownIcon />
          </SmoothScrollLink>
        </SlideUpDiv>
      </div>

      <div
        id="work"
        className="flex flex-wrap items-center justify-between w-full mt-48 max-sm:mt-36"
      >
        <SlideUpDiv
          className="w-5/12 max-sm:w-full text-4xl max-md:text-2xl"
          delay={1.1}
        >
          <p>Showcase of selected projects and various other works</p>
        </SlideUpDiv>
        <div className="h-[70px] w-7/12 max-sm:w-full text-md max-md:text-sm max-sm:text-xs flex items-center justify-end max-sm:justify-start">
          <div className="flex flex-col my-auto ">
            <SlideUpDiv
              className="inline-flex items-center justify-end"
              delay={1.1}
            >
              <p>FEATURING</p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                FULL-STACK
              </p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                API
              </p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                UI/UX
              </p>
            </SlideUpDiv>
            <SlideUpDiv
              className="inline-flex items-center justify-end max-sm:justify-start mt-2"
              delay={1.125}
            >
              <p>FROM</p>
              <p className="leading-none border border-white rounded-full ml-2 mr-2 p-1 px-2">
                2021
              </p>
              <p>TO</p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                2023
              </p>
            </SlideUpDiv>
          </div>
        </div>
      </div>

      <SectionSeparator className="mt-16 max-sm:mt-12" animate>
        <p>Selected Projects</p>
      </SectionSeparator>

      <HorizontalScroll delay={1.15}>
        <ProjectShowcase
          first
          projectName="Audix"
          projectEndpoint="audix"
          projectImgSrc="../static/audix-x1_so.png"
          topLeftTag1="SPOTIFY API"
          topLeftTag2="UI/UX"
          topRightTag="2022"
        />

        <ProjectShowcase
          projectName="Moxie"
          projectEndpoint="moxie"
          projectImgSrc="../static/moxie-x1_so.png"
          topLeftTag1="FULL-STACK"
          topLeftTag2="UI/UX"
          topRightTag="2023"
        />

        <ProjectShowcase
          projectName="Next-Commerce"
          projectEndpoint="next-commerce"
          projectImgSrc="../static/nextcom-x1_so.png"
          topLeftTag1="FULL-STACK"
          topLeftTag2="UI/UX"
          topRightTag="2022"
        />

        <ProjectShowcase
          projectName="Space Shooter"
          projectEndpoint="spaceshooter"
          projectImgSrc="../static/spaceshooter-x1_so.png"
          topLeftTag1="WEB GAME"
          topLeftTag2="VANILLA JS"
          topRightTag="2021"
        />
      </HorizontalScroll>

      <SectionSeparator className="mt-16 max-sm:mt-12" animate>
        <p>Hackathons</p>
      </SectionSeparator>

      <motion.div
        className="mt-14 mb-14 flex flex-col w-full max-md:mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.15,
        }}
      >
        <motion.div
          className="px-[1rem] h-[70px] inline-flex justify-between hover:cursor-pointer rounded-lg"
          initial={{
            paddingLeft: "1rem",
            paddingRight: "1rem",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.25)",
          }}
          whileHover={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.45)",
          }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="briefo"
            className="w-full h-full inline-flex justify-between items-center "
          >
            <div className="inline-flex text-2xl max-md:text-xl items-center">
              <p>Briefo</p>
            </div>
            <div className="inline-flex items-center text-md max-md:text-sm max-sm:text-xs">
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                OPENAI
              </p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                GPT-3
              </p>
              <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
                2023
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

const ProjectShowcase = ({
  projectName,
  projectEndpoint,
  topLeftTag1,
  topLeftTag2,
  topRightTag,
  projectImgSrc,
  first,
}: {
  projectName: string;
  projectEndpoint: string;
  topLeftTag1: string;
  topLeftTag2: string;
  topRightTag: string;
  projectImgSrc: string;
  first?: boolean;
}) => {
  return (
    <Link
      className={`relative ${
        !first && "ml-3"
      } project flex min-w-[450px] h-[520px] max-md:min-w-[310px] max-md:h-[380px] hover:cursor-pointer rounded-lg overflow-hidden`}
      href={projectEndpoint}
    >
      <div className="absolute z-10 w-full h-full flex flex-col justify-between pointer-events-none">
        <div className="inline-flex items-center justify-between w-full p-4 max-md:text-xs text-sm">
          <div className="inline-flex items-center">
            <p className="leading-none border border-white rounded-full p-1 px-2">
              {topLeftTag1}
            </p>
            <p className="leading-none border border-white rounded-full ml-2 p-1 px-2">
              {topLeftTag2}
            </p>
          </div>
          <div className="inline-flex items-center justify-end">
            <p className="leading-none border border-white rounded-full p-1 px-2">
              {topRightTag}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center justify-between w-full p-4">
          <div className="inline-flex items-center">
            <p className="leading-none p-1 px-2 text-2xl max-md:text-xl">
              {projectName}
            </p>
          </div>
        </div>
      </div>

      <motion.img
        src={projectImgSrc}
        className="absolute object-cover w-full h-full rounded-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </Link>
  );
};
