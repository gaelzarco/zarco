import Project from "@/components/project"
import Contact from "@/components/contact"

export default function Home() {

  return (
      <div id="work" className='flex flex-col items-center content-center justify-center p-4 pt-20 max-md:pt-14 w-full max-w-5xl text-left'>
        <div className='flex flex-col w-10/12 max-md:w-full mx-auto pb-4'>
          <h1 className='font-bold text-md leading-10 hover:text-neutral-800 dark:hover:text-neutral-300 py-2'>
            My work and experience
          </h1>
          <p className='text-sm'>
          I&apos;m Gael Zarco- a former restaurant industry professional turned Full-Stack Engineer from Las Vegas. I create fast, responsive, and accessible web applications using 
          &nbsp;<code>TypeScript</code>,
          &nbsp;<code>React</code>,
          &nbsp;<code>NextJS</code>,
          &nbsp;<code>NodeJS</code>,
          and
          &nbsp;<code>TailwindCSS</code>. I&apos;m currently looking for a full-time position as an entry-level Software Engineer.
          </p>
        </div>
        <Project title="Briefo" 
        image1="/static/briefo-x1_so.png" image2="/static/briefo-x2_so.png" image3="/static/briefo-x3_so.png"
        github='https://github.com/gaelzarco/ai-creative-assistant' vercel='https://ai-creative-assistant.vercel.app/'>
          <p>
          LabLabAI - OpenAI Stack Hackathon submission. A web application that allows users to create briefs for creative projects and export/download them to a stlyed PDF document. Built with
          &nbsp;<code>React</code>,
          &nbsp;<code>OpenAI's GPT-3 Davinci text-completion model</code>, and
          &nbsp;<code>Flask</code>. Received overwhelming positive feedback from start-up founders and engineering students. Presentational video can be found&nbsp;
            <a href="https://www.youtube.com/watch?v=zP22qaE0Rd0" target="_blank" rel="noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-300">
              here
            </a>.
          </p>
        </Project>
        <Project title="Moxie" 
        image1="/static/moxie-x1_so.png" image2="/static/moxie-x2_so.png" image3="/static/moxie-x3_so.png"
        github="https://github.com/gaelzarco/moxie" vercel="https://moxie-x.vercel.app/">
          <p>
          A serverless social media website with a focus on interactivity and polish. Built with
          &nbsp;<code>TypeScript</code>,
          &nbsp;<code>NextJS</code>,
          &nbsp;<code>TailwindCSS</code>,
          &nbsp;<code>RadixUI</code>,
          &nbsp;<code>tRPC</code>,
          &nbsp;<code>Prisma ORM</code>,
          &nbsp;<code>PlanetScale</code>, and
          &nbsp;<code>Clerk</code> for user authenication/management. Features a fully functional user feed, comments, likes, and more. Sign-up, log in and make your first post.
          </p>
        </Project>
        <Project title="Audix" 
        image1="/static/audix-x1_so.png" image2="/static/audix-x2_so.png" image3="/static/audix-x3_so.png"
        github='https://github.com/gaelzarco/audix'vercel='https://audix.vercel.app/'>
          <p>
          Inspired by Receiptify. Allows users to generate a &apos;STATIC&apos; (image of their top Spotify tracks from a user-selected timeframe) to download and share with the world. Crafted utilizing 
          &nbsp;<code>React</code>,
          &nbsp;<code>NodeJS</code>,
          &nbsp;<code>Express</code>,
          &nbsp;<code>Flask</code>, and features
          &nbsp;<code>Spotify Web API Integration</code>.
          </p>
        </Project>

        <Contact />
      </div>
  )
}

// <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//   <Image
//     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     src="/next.svg"
//     alt="Next.js Logo"
//     width={180}
//     height={37}
//     priority
//   />
// </div>